## Atualização v0.3.46

- [x] Experimentar moldura do retrato em peças PNG transparentes, substituindo o SVG.
- [x] Permitir repetição das peças laterais para suportar diferentes tamanhos sem esticar o ornamento principal.
- [x] Manter cantos rotacionados a partir do mesmo asset-base.

# TODO — Eram os Deuses — Character Sheet T20

Este arquivo registra o planejamento do projeto a partir das decisões tomadas durante o desenvolvimento da ficha e das revisões de layout.

A **REV.20** é a base estável atual. Alterações experimentais devem partir dela e não substituir a referência estável até serem validadas.

---

## Legenda

- [x] concluído / implementado
- [ ] pendente
- [~] parcialmente concluído ou precisa de refinamento

---

# 1. Base estrutural

- [x] Criar ficha de personagem própria para o Tormenta20.
- [x] Fazer a ficha herdar da ficha de personagem nativa do sistema.
- [x] Manter os bindings e comportamentos nativos sempre que possível.
- [x] Separar a ficha em partials HBS por componente.
- [x] Separar o CSS em arquivos por componente.
- [x] Registrar os partials no `character-sheet.js`.
- [x] Registrar todos os CSS no `module.json`.
- [x] Padronizar a pasta interna do ZIP como `eram-os-deuses-character-sheet-t20`.

---

# 2. Identidade visual

- [x] Criar header náutico da campanha.
- [x] Utilizar o banner `sky-sea-banner.webp` em alta resolução.
- [x] Utilizar logo claro sobre o banner escuro.
- [x] Adicionar ornamento da campanha.
- [x] Adicionar lema da campanha.
- [x] Criar painel de identidade em pergaminho.
- [x] Integrar retrato e moldura ornamental.
- [x] Ajustar o retrato para ficar contido dentro da moldura.
- [x] Organizar nome, raça, origem, classes, divindade e nível.
- [x] Corrigir o espaçamento do shell da janela do Foundry.
- [x] Aplicar textura de pergaminho de maneira sutil.
- [x] Evitar o efeito exagerado de textura de papel.

---

# 3. Navegação

- [x] Criar navegação para as abas principais.
- [x] Criar visual de botões/placas de pergaminho.
- [x] Adicionar moldura ornamental aos botões.
- [x] Adicionar `small-ornament.webp` aos botões.
- [x] Definir estados normal, hover e ativo.
- [x] Preservar os bindings nativos das abas.
- [x] Manter a navegação atual como referência visual.

---

# 4. Visão Geral

- [x] Criar seção Visão.
- [x] Criar composição em duas colunas.
- [x] Colocar Atributos na coluna esquerda.
- [x] Colocar Recursos no topo da coluna direita.
- [x] Colocar Perícias abaixo dos Recursos.
- [x] Colocar Perícias como primeiro bloco da coluna direita.
- [x] Colocar Combate abaixo de Perícias na coluna direita.
- [x] Colocar Características abaixo de Atributos.
- [x] Criar adaptação para telas estreitas.

---

# 5. Atributos

- [x] Substituir a estrela genérica pela rosa dos ventos.
- [x] Utilizar `nautical/compass-rose.webp`.
- [x] Centralizar geometricamente a rosa.
- [x] Posicionar INT no topo.
- [x] Posicionar SAB/CAR na segunda faixa.
- [x] Posicionar CON/DES na terceira faixa.
- [x] Posicionar FOR no eixo inferior.
- [x] Evitar que o grid legado do Tormenta20 mova os atributos.
- [x] Ajustar o tamanho da área para comportar FOR e BASE.
- [~] Fazer uma revisão final de equilíbrio visual da rosa e dos seis atributos depois das outras abas estarem estabilizadas.

---

# 6. Recursos

- [x] Criar PV com barra.
- [x] Criar PM com barra.
- [x] Mostrar valores atuais/máximos.
- [x] Criar Defesa em formato de escudo.
- [x] Preservar tooltip da Defesa.
- [x] Preservar seleção de atributo da Defesa.
- [x] Criar Deslocamento.
- [x] Criar Iniciativa.
- [x] Organizar Recursos em três colunas.
- [x] Vida acima de Mana.
- [x] Defesa ao lado de Vida/Mana.
- [x] Deslocamento acima de Iniciativa.
- [x] Manter o bloco compacto.
- [~] Revisar somente o acabamento visual após a estabilização das demais abas.

---

# 7. Perícias

- [x] Renderizar as perícias nativas.
- [x] Criar duas colunas.
- [x] Ocultar o cabeçalho nativo duplicado.
- [x] Criar superfície quente/translúcida.
- [x] Criar divisores discretos.
- [x] Integrar a lista ao papel da ficha.
- [x] Usar Perícias como referência visual para outras listas.

---

# 8. Características e Proficiências

- [x] Substituir o placeholder por dados reais.
- [x] Mover Tamanho para o cabeçalho da ficha.
- [x] Mover Deslocamento para o cabeçalho da ficha.
- [x] Mover Sentidos para o cabeçalho da ficha.
- [x] Resistências.
- [x] Imunidades a condições.
- [x] Proficiências em armas.
- [x] Proficiências em armaduras.
- [x] Informações.
- [x] Manter seletores/configuradores nativos.
- [x] Filtrar metadados internos como `value`, `selected` e `inactive`.
- [x] Tornar o bloco Características recolhível.
- [~] Testar a seção com diferentes combinações reais de traits para garantir que nenhuma estrutura específica do sistema volte a aparecer como texto.

---

# 9. Padrão visual das `item-list`

- [x] Remover a aparência de caixa cinza padrão do Tormenta20.
- [x] Tornar a superfície das listas transparente.
- [x] Manter o papel da ficha como superfície principal.
- [x] Remover bordas externas pesadas.
- [x] Criar separadores inferiores discretos.
- [x] Criar cabeçalho levemente diferenciado.
- [x] Criar hover discreto.
- [x] Tratar listas aninhadas de forma transparente.
- [x] Aplicar a solução com especificidade suficiente para vencer o CSS nativo.
- [ ] Consolidar todas as regras duplicadas de listas dos componentes em `item-lists.css` quando as abas estiverem finalizadas.
- [ ] Evitar que futuras abas criem novamente fundos cinza locais.

---

# 10. Combate

**Situação:** funcional e visualmente bem encaminhado; é a próxima área de refinamento.

- [x] Criar aba Combate.
- [x] Reutilizar lista nativa de armas.
- [x] Reutilizar lista nativa de equipamento defensivo.
- [x] Manter colunas nativas de ataque, dano, crítico, quantidade e espaço.
- [x] Criar resumo de Defesa e Iniciativa.
- [x] Aplicar lista transparente.
- [x] Adicionar separadores entre itens.
- [ ] Refinar o espaçamento horizontal das colunas de Armas.
- [ ] Refinar o espaçamento horizontal das colunas de Equipamento Defensivo.
- [ ] Avaliar a altura das linhas quando houver nomes maiores.
- [ ] Testar drag and drop e edição de itens depois dos ajustes visuais.

---

# 11. Poderes

**Situação:** visual considerado interessante durante os testes.

- [x] Criar aba Poderes.
- [x] Reutilizar lista nativa de poderes.
- [x] Organizar Poderes / Tipo / Ativação / Controles.
- [x] Aplicar superfície transparente.
- [x] Criar linhas divisórias.
- [x] Manter controles nativos.
- [x] Subdividir a lista de poderes por `system.tipo` para exibição.
- [ ] Fazer refinamento visual final sem perder o visual que já funcionou.
- [ ] Testar nomes de poderes muito longos.
- [ ] Testar grande quantidade de poderes.

---

# 12. Magia

**Situação:** funcional, mas o visual ainda precisa de trabalho.

- [x] Criar aba Magia.
- [x] Reutilizar lista nativa de magias.
- [x] Manter CD de Magias.
- [x] Manter seleção de atributo-chave.
- [x] Manter atualização de CD.
- [x] Manter círculos e custos.
- [x] Aplicar superfície transparente.
- [ ] Refinar o cabeçalho da CD de Magias.
- [ ] Melhorar a leitura das colunas de Escola e Ativação.
- [ ] Evitar que a lista pareça visualmente "solta" ou diferente demais das outras abas.
- [ ] Encontrar equilíbrio entre a linguagem de Poderes e a necessidade de agrupamento por círculo.
- [ ] Testar magias em vários círculos.
- [ ] Testar criação e controles nativos.

---

# 13. Inventário

**Situação:** funcional, mas precisa de refinamento de clareza.

- [x] Criar aba Inventário.
- [x] Reutilizar lista nativa de inventário.
- [x] Manter moedas.
- [x] Manter armas.
- [x] Manter equipamentos.
- [x] Manter quantidade e espaço.
- [x] Aplicar superfície transparente.
- [ ] Reduzir a sensação de tabela confusa.
- [ ] Refinar agrupamentos/categorias.
- [ ] Melhorar hierarquia entre cabeçalhos e itens.
- [ ] Revisar listas aninhadas.
- [ ] Garantir boa leitura com inventários grandes.
- [ ] Testar alteração de quantidade e outros controles nativos.

---

# 14. Histórico

**Situação:** estrutura funcional criada; ainda precisa de refinamento visual.

- [x] Criar aba Histórico.
- [x] Pessoas Importantes.
- [x] Locais Importantes.
- [x] Missões.
- [x] Diversos.
- [x] Biografia.
- [x] Entrada de Diário.
- [x] Preservar editores nativos do Foundry.
- [ ] Refinar hierarquia visual dos blocos.
- [ ] Refinar títulos dos campos.
- [ ] Ajustar áreas de edição para leitura confortável.
- [ ] Avaliar uso de ornamentos/frames sem poluir a ficha.
- [ ] Testar textos longos.

---

# 15. Efeitos

- [x] Manter a aba Efeitos disponível.
- [x] Manter os efeitos/modificadores acessíveis pela estrutura nativa.
- [ ] Avaliar posteriormente se vale a pena criar apresentação visual própria.
- [ ] Não priorizar antes da conclusão de Combate, Poderes, Magia, Inventário e Histórico.

---

# 16. Assets

- [x] Organizar assets por categoria.
- [x] Criar `ASSET-MAP.md`.
- [x] Criar `asset-map.json`.
- [x] Criar conjunto de assets náuticos.
- [x] Criar conjunto de backgrounds.
- [x] Criar frames.
- [x] Criar decorações.
- [x] Criar assets de campanha.
- [ ] Incorporar progressivamente os assets ainda não utilizados.
- [ ] Revisar quais assets ainda são somente reserva e quais realmente têm função no layout final.
- [ ] Atualizar `ASSET-MAP.md` sempre que um asset novo for adicionado.
- [ ] Atualizar `asset-map.json` sempre que um asset novo for adicionado.

---

# 17. Responsividade

- [x] Criar regras para telas menores.
- [x] Colapsar a Visão Geral para uma coluna em largura estreita.
- [x] Adaptar atributos.
- [x] Adaptar header.
- [x] Adaptar navegação.
- [x] Adaptar Combate.
- [x] Adaptar Poderes.
- [ ] Fazer teste sistemático em diferentes larguras de janela.
- [ ] Verificar especificamente Magia e Inventário em telas menores.
- [ ] Verificar Histórico em telas menores.

---

# 18. Testes funcionais

Após cada grande mudança visual, testar:

- [ ] Abrir ficha de personagem.
- [ ] Alterar nome.
- [ ] Alterar imagem do personagem.
- [ ] Alterar raça/origem/classes/divindade quando aplicável.
- [ ] Alterar atributos.
- [ ] Alterar PV/PM.
- [ ] Alterar Defesa.
- [ ] Alterar atributo-chave da Defesa.
- [ ] Abrir tooltip da Defesa.
- [ ] Configurar Deslocamento.
- [ ] Configurar Características.
- [ ] Configurar Perícias.
- [ ] Rolar uma perícia.
- [ ] Rolar uma arma.
- [ ] Editar um item.
- [ ] Alterar quantidade de item.
- [ ] Equipar/desequipar item.
- [ ] Arrastar item.
- [ ] Criar poder.
- [ ] Criar magia.
- [ ] Alterar CD de magia.
- [ ] Criar/editar item no Inventário.
- [ ] Editar campos do Histórico.
- [ ] Verificar Efeitos.

---

# 19. Testes visuais

Para cada aba, verificar:

- [ ] Não há fundo cinza herdado.
- [ ] A lista não virou uma caixa independente.
- [ ] Os separadores são discretos.
- [ ] O cabeçalho continua legível.
- [ ] O hover não chama atenção demais.
- [ ] Ícones e imagens permanecem alinhados.
- [ ] Textos longos não quebram a estrutura.
- [ ] Controles continuam acessíveis.
- [ ] Não existem elementos cortados.
- [ ] Não existe scroll horizontal inesperado.
- [ ] O papel continua sendo a superfície visual dominante.

---

# 20. Sequência recomendada de trabalho

A sequência prática aprovada durante o projeto é:

```text
COMBATE
   ↓
PODERES
   ↓
MAGIA
   ↓
INVENTÁRIO
   ↓
HISTÓRICO
   ↓
EFEITOS / acabamento final
```

A ideia é estabilizar uma aba antes de usar suas decisões visuais como referência para a próxima.

---

# 21. Depois das abas

Quando as abas principais estiverem estabilizadas:

- [ ] Fazer revisão visual global.
- [ ] Uniformizar espaçamentos.
- [ ] Uniformizar linhas divisórias.
- [ ] Uniformizar títulos e subtítulos.
- [ ] Revisar intensidade das texturas.
- [ ] Revisar uso dos assets decorativos.
- [ ] Revisar responsividade.
- [ ] Fazer teste funcional completo.
- [ ] Fazer limpeza de CSS duplicado.
- [ ] Atualizar documentação.
- [ ] Atualizar `README.md`.
- [ ] Atualizar `CHANGELOG.md`.
- [ ] Criar uma nova versão estável.

---

# 22. Regra para futuras revisões

Cada revisão deve responder a três perguntas antes de ser considerada estável:

1. **O visual melhorou?**
2. **O comportamento nativo do Tormenta20 continua funcionando?**
3. **A alteração não prejudicou outra aba ou componente?**

Se a resposta for "não" para qualquer uma delas, manter a REV.20 como referência e tratar a alteração como experimental.

## 0.3.42 — Ajustes da Visão Geral
- [x] Trocar a posição dos blocos Combate e Recursos.
- [x] Empilhar Equipamento Defensivo abaixo de Armas.
- [x] Aplicar borda e superfície visual aos painéis de Combate.

- [x] Ajustar altura do bloco de Atributos para harmonizar com Perícias.
- [x] Alinhar lateralmente os painéis de Combate com o bloco de Perícias, removendo padding horizontal excedente.


## 0.3.45 — Recursos e profundidade visual
- [x] Remover Deslocamento e Iniciativa do bloco Recursos.
- [x] Ampliar visualmente Vida e Mana.
- [x] Aplicar volume tridimensional às barras de recursos.
- [x] Aplicar sombra sutil ao retrato do personagem.

## v0.3.47
- [x] Padronizar assets PNG da moldura modular em canvas 64×64.
- [x] Ajustar CSS da montagem para o novo canvas comum.


## Revisão da moldura do retrato — v0.3.48
- [x] Remover elementos de moldura ocultados manualmente no navegador.
- [x] Usar cantos, laterais verticais repetíveis e âncora inferior.
- [x] Ajustar CSS às novas medidas dos assets fornecidos.
- [ ] Validar visualmente no Foundry antes de considerar esta revisão da moldura como estável.
