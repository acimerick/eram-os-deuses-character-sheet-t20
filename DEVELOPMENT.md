# Guia de Desenvolvimento — Eram os Deuses — Character Sheet T20

Este documento explica, de forma prática, como uma pessoa desenvolvedora pode editar a ficha do módulo **Eram os Deuses — Character Sheet T20** sem precisar conhecer todo o código do Tormenta20 ou do Foundry VTT.

A regra mais importante é: **a ficha deve alterar principalmente a apresentação, não a lógica do sistema Tormenta20**. Sempre que existir uma lista, seletor, botão, campo ou ação nativa do sistema, prefira reaproveitar a estrutura nativa e estilizar com CSS.

---

## 1. Visão geral do projeto

O módulo substitui a ficha visual do personagem do Tormenta20 por uma ficha temática da campanha **Eram os Deuses**.

A arquitetura atual é dividida em três camadas:

- **HBS / Handlebars** → estrutura visual e ligação dos dados.
- **CSS** → aparência, tamanhos, posições, espaçamentos e estados.
- **JavaScript** → registro da ficha, partials e pequenos helpers necessários para a renderização.
- **Assets** → imagens e elementos gráficos usados pelo layout.

A ficha continua herdando da ficha de personagem nativa do Tormenta20:

```js
const BaseSheet =
    globalThis.tormenta20?.applications?.ActorSheetT20Character;
```

Isso é importante porque permite manter grande parte do comportamento original do sistema.

---

# 2. Estrutura de pastas

A estrutura interna do ZIP deve continuar sendo:

```text
eram-os-deuses-character-sheet-t20/
├── module.json
├── README.md
├── CHANGELOG.md
├── DEVELOPMENT.md
├── TODO.md
│
├── scripts/
│   └── character-sheet.js
│
├── templates/
│   └── actors/
│       └── character/
│           ├── sheet.hbs
│           ├── header/
│           │   ├── campaign-header.hbs
│           │   └── character-header.hbs
│           ├── overview/
│           │   ├── overview.hbs
│           │   ├── attributes.hbs
│           │   ├── resources.hbs
│           │   ├── skills.hbs
│           │   └── traits.hbs
│           ├── combat/
│           │   └── combat.hbs
│           ├── powers/
│           │   └── powers.hbs
│           ├── magic/
│           │   └── magic.hbs
│           ├── inventory/
│           │   └── inventory.hbs
│           └── history/
│               └── history.hbs
│
├── styles/
│   ├── sheet.css
│   └── components/
│       ├── header.css
│       ├── navigation.css
│       ├── overview.css
│       ├── attributes.css
│       ├── resources.css
│       ├── skills.css
│       ├── traits.css
│       ├── combat.css
│       ├── powers.css
│       ├── magic.css
│       ├── inventory.css
│       ├── history.css
│       └── item-lists.css
│
└── assets/
    ├── ASSET-MAP.md
    ├── asset-map.json
    ├── backgrounds/
    ├── campaign/
    ├── decorations/
    ├── frames/
    └── nautical/
```

**Não renomeie a pasta raiz do módulo dentro do ZIP.** O Foundry precisa encontrar `module.json` diretamente em:

```text
.../modules/eram-os-deuses-character-sheet-t20/module.json
```

---

# 3. Onde editar cada parte da ficha

## Header da campanha

Arquivos:

```text
templates/actors/character/header/campaign-header.hbs
styles/components/header.css
```

Responsável por:

- banner superior;
- logo da campanha;
- ornamentos;
- lema da campanha.

Assets principais:

```text
assets/backgrounds/sky-sea-banner.webp
assets/campaign/logo-light.svg
assets/campaign/campaign-ornament.svg
```

O banner deve continuar sendo tratado como uma camada de fundo contínua. Evite transformá-lo novamente em uma pequena caixa central.

---

## Identidade do personagem

Arquivos:

```text
templates/actors/character/header/character-header.hbs
styles/components/header.css
```

Contém:

- retrato;
- nome;
- raça;
- origem;
- classes;
- divindade;
- nível;
- experiência.

A moldura do retrato é um elemento independente do retrato:

```text
assets/frames/portrait-frame.svg
```

A imagem do personagem vem de:

```hbs
{{actor.img}}
```

**Não coloque a moldura dentro da imagem do personagem.** O `portrait-frame.svg` deve continuar sendo a borda visual do elemento.

---

# 4. Navegação entre abas

Arquivo HTML:

```text
templates/actors/character/sheet.hbs
```

CSS:

```text
styles/components/navigation.css
```

A navegação atual possui:

```text
VISÃO
COMBATE
PODERES
MAGIA
INVENTÁRIO
HISTÓRICO
EFEITOS
```

A estrutura utiliza as classes e atributos de abas do Foundry:

```html
<a class="item" data-tab="combat">...</a>
```

Ao alterar uma aba, **não remova `data-group="primary"` nem `data-tab`**.

Os botões atuais usam acabamento de pergaminho e o asset:

```text
assets/decorations/small-ornament.webp
```

Esse visual foi considerado satisfatório e deve ser tratado como referência até nova decisão.

---

# 5. Visão Geral

A Visão Geral reúne atributos, recursos, perícias e características. Parte dos traits do sistema também é apresentada no cabeçalho para deixar informações de leitura frequente mais acessíveis.

## Traits resumidos no cabeçalho

Os campos **Tamanho**, **Deslocamento** e **Sentidos** continuam ligados aos mesmos caminhos e controles nativos do Tormenta20, mas sua apresentação fica em `templates/actors/character/header/character-header.hbs`, abaixo da identidade do personagem.

Isso não cria dados duplicados: os campos continuam editando os mesmos valores do Actor.

O bloco completo de Características, em `templates/actors/character/overview/traits.hbs`, é recolhível usando o elemento HTML `details`. Resistências, Imunidades a Condições, Proficiências e Informações permanecem nele.


Arquivos:

```text
templates/actors/character/overview/overview.hbs
styles/components/overview.css
```

A composição atual usa duas colunas:

```text
┌─────────────────────┬──────────────────────────────┐
│                     │ Recursos                     │
│ Atributos           ├──────────────────────────────┤
│                     │ Perícias                     │
│                     │                              │
├─────────────────────┤                              │
│ Características     │                              │
└─────────────────────┴──────────────────────────────┘
```

Em telas estreitas, os blocos passam para uma coluna.

---

# 6. Atributos e rosa dos ventos

Arquivos:

```text
templates/actors/character/overview/attributes.hbs
styles/components/attributes.css
```

Asset principal:

```text
assets/nautical/compass-rose.webp
```

A composição atual posiciona os atributos explicitamente ao redor da rosa:

```text
             INT
       SAB          CAR

       CON          DES
             FOR
```

Isso é intencional.

Não substitua o posicionamento absoluto por um grid genérico sem necessidade. O CSS do Tormenta20 possui regras antigas para `.ability`, portanto regras genéricas podem mover os atributos novamente.

As posições são controladas por classes como:

```css
.eod-ability-int
.eod-ability-sab
.eod-ability-car
.eod-ability-con
.eod-ability-des
.eod-ability-for
```

Se precisar ajustar um atributo individual, altere primeiro sua classe específica.

---

# 7. Recursos

Arquivo:

```text
styles/components/resources.css
```

A composição atual é:

```text
┌──────────┬────────────┬──────────────┐
│ Vida     │            │ Deslocamento │
├──────────┤   Defesa   ├──────────────┤
│ Mana     │            │ Iniciativa   │
└──────────┴────────────┴──────────────┘
```

Características importantes:

- Vida possui barra;
- Mana possui barra;
- Defesa utiliza um escudo desenhado em CSS;
- Defesa mantém tooltip e seleção de atributo;
- Deslocamento continua configurável pelo sistema;
- Iniciativa continua ligada ao valor nativo.

Ao alterar o visual, preserve os `name`, `data-*`, seletores e elementos que vêm da ficha do Tormenta20.

---

# 8. Perícias

Arquivo:

```text
styles/components/skills.css
```

As Perícias serviram como uma das principais referências visuais para as listas.

Características atuais:

- fundo quente e translúcido;
- linhas discretas;
- título da seção fornecido pela ficha EOD;
- cabeçalho nativo duplicado ocultado;
- duas colunas em telas maiores;
- uma coluna em telas estreitas.

Se novas listas forem estilizadas, tente seguir esta mesma linguagem antes de criar um visual completamente diferente.

---

# 9. Características e Proficiências

Arquivos:

```text
templates/actors/character/overview/traits.hbs
styles/components/traits.css
scripts/character-sheet.js
```

A seção usa dados reais do ator para:

- Tamanho;
- Deslocamento;
- Resistências;
- Imunidades a Condições;
- Sentidos;
- Proficiências em Armas;
- Proficiências em Armaduras;
- Informações.

O JavaScript possui helpers para normalizar os dados dos traits.

Os seletores nativos continuam importantes. Exemplos:

```html
data-action="movement"
data-action="resistance"
data-options="conditionTypes"
data-options="senses"
data-options="profArmas"
data-options="profArmaduras"
```

Se a aparência mudar, preserve esses atributos.

---

# 10. Listas de itens — regra visual global

Arquivo:

```text
styles/components/item-lists.css
```

Este arquivo é especialmente importante para as próximas etapas.

A REV.20 estabeleceu a regra visual desejada:

> As listas devem parecer parte do papel da ficha, e não caixas cinzas independentes.

Portanto, as `item-list` devem ter:

- fundo transparente;
- nenhuma caixa cinza herdada do Tormenta20;
- nenhuma borda externa pesada;
- linhas inferiores discretas separando os itens;
- cabeçalho ligeiramente diferenciado;
- hover muito discreto;
- listas aninhadas também transparentes.

A regra usa alta especificidade porque o Tormenta20 aplica estilos próprios às listas.

Exemplo:

```css
.tormenta20.sheet.actor.eod-sheet .eod-combat .item-list {
    background: transparent !important;
}
```

Quando uma nova aba apresentar uma lista cinza, não aumente imediatamente a quantidade de `!important`.

Primeiro verifique:

1. qual seletor do Tormenta20 está aplicando o fundo;
2. qual elemento realmente recebeu o `background`;
3. se existe uma lista dentro de outra lista;
4. se o componente da aba possui uma regra própria sobrescrevendo `item-lists.css`.

Depois crie uma regra específica apenas para o caso necessário.

---

# 11. Combate

Arquivos:

```text
templates/actors/character/combat/combat.hbs
styles/components/combat.css
```

A estrutura usa as listas nativas do sistema:

```hbs
{{> "tormenta20.list-weapon"}}
{{> "tormenta20.list-equipment"}}
```

Isso é proposital.

Não copie a lista inteira para dentro do módulo apenas para mudar cores ou espaçamentos. A lista nativa já fornece comportamento de:

- rolagem;
- edição;
- quantidade;
- equipamento;
- drag and drop;
- controles do item.

O módulo deve modificar principalmente CSS.

A composição visual atual é:

```text
COMBATE

┌─────────────────────┬────────────────────────┐
│ ARMAS               │ EQUIPAMENTO DEFENSIVO │
│                     │                        │
└─────────────────────┴────────────────────────┘
```

---

# 12. Poderes

Arquivos:

```text
templates/actors/character/powers/powers.hbs
styles/components/powers.css
```

A lista nativa é reutilizada:

```hbs
{{> "tormenta20.list-powers"}}
```

O CSS reorganiza as colunas visualmente, sem recriar os dados.

Colunas principais:

```text
Poderes | Tipo | Ativação | Controles
```

A aparência desta aba ficou interessante durante os testes e deve ser usada como referência para a evolução das outras listas.

---

# 13. Magia

Arquivos:

```text
templates/actors/character/magic/magic.hbs
styles/components/magic.css
```

Lista nativa:

```hbs
{{> "tormenta20.list-spells"}}
```

O CSS precisa preservar especialmente:

- `.selectAtr`;
- `.update-cd`;
- criação de magia;
- círculos;
- custos;
- preparação;
- controles nativos.

A aba de Magia ainda precisa de refinamento visual. O objetivo não é transformar a lista em uma caixa pesada, nem simplesmente copiar o visual de Poderes.

---

# 14. Inventário

Arquivos:

```text
templates/actors/character/inventory/inventory.hbs
styles/components/inventory.css
```

Lista nativa:

```hbs
{{> "tormenta20.list-inventory"}}
```

O Inventário possui mais níveis de informação que Poderes e pode conter listas/categorias aninhadas.

Por isso, ao alterar seu visual, teste principalmente:

- Armas;
- Equipamentos;
- quantidades;
- espaços;
- moedas;
- categorias;
- listas aninhadas.

A prioridade é **clareza**. O resultado não deve parecer uma tabela confusa nem uma sequência de caixas.

---

# 15. Histórico

Arquivo:

```text
templates/actors/character/history/history.hbs
styles/components/history.css
```

O Histórico não é uma `item-list` comum.

Ele trabalha com campos de texto e editores do Foundry, incluindo:

- Pessoas Importantes;
- Locais Importantes;
- Missões;
- Diversos;
- Biografia;
- Entrada de Diário.

Não aplique automaticamente as regras de `item-lists.css` a esta aba.

---

# 16. Efeitos

A aba existe na navegação, mas os efeitos/modificadores permanecem acessíveis pela estrutura nativa do sistema.

No planejamento atual, não é necessário recriar a lógica dos efeitos enquanto as outras abas não estiverem finalizadas.

---

# 17. Como adicionar ou substituir um asset

## Passo 1 — coloque o arquivo na categoria correta

Exemplos:

```text
assets/backgrounds/
assets/campaign/
assets/decorations/
assets/frames/
assets/nautical/
```

Use:

- **SVG** para logos, molduras e desenhos vetoriais;
- **WebP** para texturas, fundos e recortes raster.

---

## Passo 2 — atualize o mapa de assets

Edite:

```text
assets/ASSET-MAP.md
assets/asset-map.json
```

O `ASSET-MAP.md` deve explicar:

- nome;
- função;
- origem;
- tipo.

O `asset-map.json` deve conter o caminho do arquivo.

Não deixe um asset novo existir apenas na pasta sem registrá-lo no mapa.

---

## Passo 3 — use o caminho correto

Dentro de um HBS, o caminho normalmente será:

```html
<img src="modules/eram-os-deuses-character-sheet-t20/assets/nautical/compass.webp">
```

Dentro de um CSS localizado em `styles/components/`, o caminho relativo normalmente será:

```css
background-image: url("../../assets/nautical/compass.webp");
```

Dentro de `styles/sheet.css`, o caminho normalmente será:

```css
background-image: url("../assets/...");
```

Essa diferença é importante.

---

# 18. Como alterar um background

Antes de trocar uma imagem, descubra se ela é:

- background do componente;
- `<img>` estrutural;
- pseudo-elemento `::before` / `::after`;
- imagem sobreposta a outra imagem.

Para backgrounds de papel, a linguagem visual atual é suave. Evite textura excessivamente forte.

A ficha deve parecer uma superfície contínua de pergaminho, e não várias caixas de papel coladas umas nas outras.

---

# 19. Como editar dimensões e posições

Sempre procure primeiro o componente responsável.

Exemplo: se a rosa dos ventos estiver deslocada:

```text
styles/components/attributes.css
```

Não tente resolver isso alterando o tamanho geral da ficha em `sheet.css`.

Da mesma forma:

- header → `header.css`;
- navegação → `navigation.css`;
- recursos → `resources.css`;
- perícias → `skills.css`;
- combate → `combat.css`;
- poderes → `powers.css`;
- magia → `magic.css`;
- inventário → `inventory.css`;
- histórico → `history.css`.

`sheet.css` deve ficar reservado para regras realmente globais.

---

# 20. Como adicionar uma nova regra CSS

Prefira esta ordem:

### 1. Regra do componente

```css
.eod-combat-panel .item-list {
    ...
}
```

### 2. Se o Tormenta20 estiver vencendo

Aumente a especificidade de forma controlada:

```css
.tormenta20.sheet.actor.eod-sheet .eod-combat-panel .item-list {
    ...
}
```

### 3. `!important` somente quando necessário

As listas nativas do Tormenta20 são um dos casos em que `!important` pode ser necessário, porque o sistema usa regras muito específicas.

Não transforme todo o CSS em uma cadeia de `!important`.

---

# 21. Como alterar HTML/HBS sem quebrar a ficha

Antes de remover qualquer classe ou atributo, pergunte:

> Esse elemento é apenas visual ou o Tormenta20 usa essa classe para alguma ação?

Tenha cuidado especial com:

```text
item
item-list
item-control
rollable
config-button
trait-selector
selectAtr
update-cd
preparation-toggle
movement
resistance
```

Também preserve:

```text
data-item-id
data-action
data-target
data-options
data-circulo
data-custo
data-atrres
```

Esses atributos podem ser usados pelo JavaScript do sistema.

---

# 22. JavaScript: quando mexer

Arquivo principal:

```text
scripts/character-sheet.js
```

Ele faz quatro coisas principais:

1. define o ID do módulo;
2. registra os partials HBS;
3. registra helpers do Handlebars;
4. registra a ficha EOD como ficha padrão de personagens do Tormenta20.

Os helpers atuais incluem:

```text
eodPct
```

Calcula porcentagem visual para as barras de recursos.

```text
eodTraitLabel
```

Normaliza valores de características.

```text
eodTraitEntries
```

Transforma estruturas de traits do sistema em entradas adequadas para renderização.

Evite colocar lógica de regras de Tormenta20 aqui. A ficha deve apresentar os dados que o sistema já calcula.

---

# 23. Como adicionar uma nova partial

### 1. Crie o arquivo HBS

Exemplo:

```text
templates/actors/character/foo/foo.hbs
```

### 2. Registre no objeto `PARTIALS`

Em `scripts/character-sheet.js`:

```js
"eod.foo":
    `modules/${MODULE_ID}/templates/actors/character/foo/foo.hbs`,
```

### 3. Inclua na ficha

```hbs
{{> "eod.foo"}}
```

### 4. Adicione o CSS do componente

```text
styles/components/foo.css
```

### 5. Registre o CSS no `module.json`

```json
"styles": [
    ...,
    "styles/components/foo.css"
]
```

---

# 24. `module.json`

O `module.json` é o arquivo que informa ao Foundry como carregar o módulo.

Se um novo CSS não for listado nele, o Foundry não o carregará.

O mesmo vale para o JavaScript.

A versão atual da REV.20 é:

```text
0.3.37
```

Ao criar uma nova revisão, atualize a versão no `module.json` e registre a mudança no `CHANGELOG.md`.

O `module.json` é a fonte de verdade para a versão; não confie apenas no texto da versão exibido no README.

---

# 25. Como testar no Foundry

Depois de alterar CSS/HBS/JS:

1. feche a ficha aberta;
2. atualize/recarregue o Foundry;
3. abra novamente a ficha;
4. teste a aba alterada;
5. teste pelo menos um personagem com muitos itens;
6. teste uma ficha com poucos itens;
7. redimensione a janela;
8. verifique console do navegador se houver erro.

Para alterações de CSS, uma atualização completa do navegador é recomendada quando o resultado parecer não ter mudado. Cache pode fazer uma versão anterior continuar sendo exibida.

---

# 26. Como diagnosticar um estilo que "não surtiu efeito"

Esse projeto já encontrou várias situações desse tipo.

Siga esta sequência:

### A. Inspecione o elemento real

No DevTools do navegador, selecione o elemento que está visualmente errado.

### B. Veja qual regra está vencendo

Procure especialmente por:

```css
.tormenta20.sheet.actor ...
```

### C. Verifique o elemento pai

Às vezes o fundo não está no `.item`, mas no `.item-list`, em uma categoria ou em uma lista aninhada.

### D. Verifique variáveis CSS

O Tormenta20 e outros módulos podem definir variáveis que continuam influenciando o componente.

### E. Só então aumente a especificidade

A REV.20 mantém uma solução explícita para as `item-list` porque o CSS nativo do sistema estava recuperando o fundo cinza.

---

# 27. Regra de ouro do projeto

Quando uma alteração visual for necessária:

```text
1. Preserve o comportamento nativo.
2. Preserve os bindings.
3. Preserve data-* e classes funcionais.
4. Altere primeiro CSS.
5. Altere HBS somente quando a estrutura visual exigir.
6. Altere JavaScript somente quando a renderização realmente precisar.
7. Teste a interação depois de cada mudança.
```

A aparência pode ser completamente diferente da ficha padrão sem precisar reimplementar a ficha inteira.

---

# 28. Estado visual considerado estável

A REV.20 é a base estável atual do projeto.

Elementos já consolidados:

- header náutico;
- identidade do personagem em pergaminho;
- retrato com moldura ornamental;
- navegação com placas de pergaminho;
- rosa dos ventos para atributos;
- composição de Recursos em três colunas;
- Perícias estilizadas;
- Características funcionais;
- listas de itens com fundo transparente;
- separadores discretos entre itens;
- reaproveitamento das listas nativas do Tormenta20.

Ao experimentar um novo visual, preserve esta versão como referência para voltar atrás caso o experimento não funcione.
