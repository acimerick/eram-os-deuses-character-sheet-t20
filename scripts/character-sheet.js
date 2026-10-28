const MODULE_ID = "eram-os-deuses-character-sheet-t20";
const TEMPLATE =
    `modules/${MODULE_ID}/templates/actors/character/sheet.hbs`;

const PARTIALS = {
    "eod.campaign-header":
        `modules/${MODULE_ID}/templates/actors/character/header/campaign-header.hbs`,
    "eod.character-header":
        `modules/${MODULE_ID}/templates/actors/character/header/character-header.hbs`,
    "eod.overview":
        `modules/${MODULE_ID}/templates/actors/character/overview/overview.hbs`,
    "eod.attributes":
        `modules/${MODULE_ID}/templates/actors/character/overview/attributes.hbs`,
    "eod.resources":
        `modules/${MODULE_ID}/templates/actors/character/overview/resources.hbs`,
    "eod.skills":
        `modules/${MODULE_ID}/templates/actors/character/overview/skills.hbs`,
    "eod.traits":
        `modules/${MODULE_ID}/templates/actors/character/overview/traits.hbs`,
    "eod.combat":
        `modules/${MODULE_ID}/templates/actors/character/combat/combat.hbs`,
    "eod.powers":
        `modules/${MODULE_ID}/templates/actors/character/powers/powers.hbs`,
    "eod.magic":
        `modules/${MODULE_ID}/templates/actors/character/magic/magic.hbs`,
    "eod.inventory":
        `modules/${MODULE_ID}/templates/actors/character/inventory/inventory.hbs`,
    "eod.history":
        `modules/${MODULE_ID}/templates/actors/character/history/history.hbs`,
};

/**
 * Register the sheet as early as possible during initialization.
 *
 * IMPORTANT: this must not wait for template/network requests. Foundry does
 * not wait for an async init hook before continuing its initialization flow.
 * The Bureau sheet follows the same pattern: sheet registration is kept
 * independent from asynchronous partial loading.
 */
Hooks.once("init", () => {
    Handlebars.registerHelper("eodPct", (value, max) => {
        const current = Number(value) || 0;
        const total = Number(max) || 0;
        if (total <= 0) return 0;
        return Math.max(0, Math.min(100, (current / total) * 100));
    });

    Handlebars.registerHelper("eodPowerTypeLabel", (tipo) => {
        const labels = {
            racial: "Poderes Raciais",
            classe: "Poderes de Classe",
            geral: "Poderes Gerais",
            destino: "Poderes de Destino",
            tormenta: "Poderes da Tormenta",
            ability: "Habilidades",
        };
        return labels[String(tipo ?? "")] ?? String(tipo ?? "Outros");
    });

    Handlebars.registerHelper("eodPowerActivation", (execucao) => {
        const labels = {
            action: "Padrão",
            move: "Movimento",
            free: "Livre",
            full: "Completa",
            reaction: "Reação",
            passive: "Passiva",
            minute: "1 minuto",
            hour: "1 hora",
            day: "1 dia",
            special: "Especial",
        };
        return labels[String(execucao ?? "")] ?? String(execucao ?? "");
    });

    const BaseSheet =
        globalThis.tormenta20?.applications?.ActorSheetT20Character;

    if (!BaseSheet) {
        console.error(
            `${MODULE_ID} | ActorSheetT20Character não encontrada. ` +
            "Verifique se o sistema Tormenta20 está carregado antes do módulo."
        );
        return;
    }

    class EramOsDeusesCharacterSheet extends BaseSheet {
        static get defaultOptions() {
            return foundry.utils.mergeObject(
                super.defaultOptions,
                {
                    classes: [
                        "tormenta20",
                        "sheet",
                        "actor",
                        "character",
                        MODULE_ID,
                        "eod-sheet",
                    ],
                    width: 1280,
                    height: 900,
                    resizable: true,
                }
            );
        }

        get template() {
            return TEMPLATE;
        }

        async getData(options = {}) {
            const context = await super.getData(options);
            const powers = this.actor?.items?.contents
                ?.filter((item) => item.type === "poder")
                ?.map((item) => item.toObject(false)) ?? [];

            const order = ["racial", "classe", "geral", "destino", "tormenta", "ability"];
            const labels = {
                racial: "Poderes Raciais",
                classe: "Poderes de Classe",
                geral: "Poderes Gerais",
                destino: "Poderes de Destino",
                tormenta: "Poderes da Tormenta",
                ability: "Habilidades",
            };

            const groups = new Map();
            for (const power of powers) {
                const tipo = String(power.system?.tipo ?? "ability");
                if (!groups.has(tipo)) groups.set(tipo, []);
                groups.get(tipo).push(power);
            }

            context.eodPowerGroups = [
                ...order.filter((tipo) => groups.has(tipo)),
                ...[...groups.keys()].filter((tipo) => !order.includes(tipo)),
            ].map((tipo) => ({
                type: tipo,
                label: labels[tipo] ?? tipo,
                items: groups.get(tipo) ?? [],
            }));

            return context;
        }
    }

    Actors.registerSheet(
        "tormenta20",
        EramOsDeusesCharacterSheet,
        {
            types: ["character"],
            makeDefault: true,
            label: "Eram os Deuses — Ficha de Personagem",
        }
    );

    console.info(`${MODULE_ID} | Ficha registrada como padrão para personagens T20.`);
});

/**
 * Partial loading is intentionally independent from sheet registration.
 * Foundry v13 exposes loadTemplates as the supported template preloader and
 * it accepts an object mapping partial IDs to template paths.
 */
Hooks.once("init", async () => {
    try {
        const loadTemplates =
            foundry.applications?.handlebars?.loadTemplates ?? globalThis.loadTemplates;

        if (typeof loadTemplates !== "function") {
            throw new Error("API loadTemplates não encontrada.");
        }

        await loadTemplates(PARTIALS);
        console.info(
            `${MODULE_ID} | Partials carregados.`,
            Object.keys(PARTIALS)
        );
    } catch (error) {
        console.error(
            `${MODULE_ID} | Não foi possível carregar os partials da ficha.`,
            error
        );
    }
});
