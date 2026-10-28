## v0.3.51 — Botão de Sentidos corrigido

- O seletor nativo do T20 (`_onTraitSelector`) procura um `<label>` ao lado do link para montar o título da janela. O cabeçalho usava `<span>`, o que gerava erro e impedia a janela de abrir. O rótulo agora é `<label class="eod-field-label">`.
- A lista de Sentidos passa a usar `senses.value` preparado pelo sistema, com nomes localizados e a entrada personalizada, igual à ficha original.
- Removidos os helpers `eodTraitEntries` e `eodTraitLabel`, que não são mais usados.

## v0.3.50 — Cabeçalhos de Magia e Inventário no padrão de Poderes; margem do Histórico

- Cabeçalho de cada círculo na aba Magia passa a usar a faixa dos grupos de Poderes: fundo tonal, borda superior fina, borda inferior dupla, caixa alta e título sublinhado.
- Corrigidos os seletores de `magic.css`: o partial nativo `list-spells` não tem o wrapper `.list-spells`, então a grade dos círculos nunca era aplicada. Conjuradores por preparação ganham uma coluna extra para a marcação.
- Cabeçalhos de Armas, Equipamento, Consumíveis e Tesouros na aba Inventário seguem o mesmo padrão.
- Grade do Inventário ajustada por categoria (Armas com coluna de ataque, Equipamento com Defesa/Penalidade). Qtd, Esp. e Equipado ficam alinhados entre as categorias, e o ícone de equipado não quebra mais para outra linha.
- `item-lists.css` não força mais o tom de cabeçalho em Magia e Inventário.
- Aba Histórico ganhou margem interna de 1rem, igual às demais abas.

## v0.3.49 — Proficiências, Idiomas e Resistências corrigidos

- Proficiências em Armas e Armaduras passam a exibir os rótulos preparados pelo sistema (`system.tracos.*.selected`), como "Armas Simples", em vez das chaves internas (`simples`, `marcial`).
- Imunidade a Condições segue o mesmo padrão do Tormenta20 v1.5.x (Foundry v13).
- Resistências usam a mesma lógica da ficha do sistema: valor, exceção, imunidade, vulnerabilidade e dano por dado, sem tags numéricas soltas.
- Adicionado o campo Idiomas em Proficiências, exibido quando a configuração de idiomas do mundo está ativa, com o seletor nativo do sistema.

## v0.3.48 — Moldura do retrato ajustada

- Removidos do HBS os elementos ocultados manualmente: faixas horizontais e medalhões laterais.
- Moldura passa a utilizar somente cantos, laterais verticais repetíveis e âncora inferior.
- Atualizados os assets de canto, lateral vertical e âncora com os PNGs fornecidos para esta revisão.
- Cantos e âncora ajustados para canvas 96×64 px; lateral vertical 64×192 px.
- CSS alinhado à montagem testada manualmente no navegador: laterais com `top: 60px`, `bottom: 60px` e deslocamento lateral de `-12px`.
- Preservada toda a funcionalidade e o restante do layout da v0.3.47.

## v0.3.46 — Moldura PNG modular

- Substituída a moldura SVG do retrato por peças PNG transparentes extraídas da referência visual do Lote 1.
- A moldura usa o mesmo canto rotacionado nos quatro vértices e faixas PNG repetíveis nas laterais.
- Adicionados ornamentos laterais e medalhão de âncora inferior como peças independentes.
- Mantido o retrato separado da moldura para permitir ajuste independente de enquadramento e sombra.

## 0.3.43 — Visão Geral / hierarquia de Combate
- Removido o cabeçalho próprio do bloco de Combate ("CONFRONTO / COMBATE").
- Removido do bloco de Combate o resumo duplicado de Defesa e Iniciativa, já apresentado em Recursos.
- Perícias passou a ser o primeiro bloco da coluna direita da Visão Geral.
- Combate passou a ficar imediatamente abaixo de Perícias na coluna direita.
- Mantidos os painéis e as listas nativas de Armas e Equipamento Defensivo.

## 0.3.42 — Visão Geral / Combate
- Combate e Recursos trocaram de posição entre as colunas da Visão Geral.
- Coluna esquerda: Atributos → Recursos → Características.
- Coluna direita: Combate → Perícias.
- Armamentos e Equipamento Defensivo agora ficam empilhados verticalmente, com Equipamento Defensivo imediatamente abaixo de Armas.
- Os dois painéis de combate receberam a mesma linguagem visual dos demais componentes: borda, superfície de papel e moldura interna discreta.
- Mantidos os partials e listas nativas do Tormenta20, sem alteração dos bindings funcionais.

# Changelog

## 0.3.41 — Visão Geral: Combate integrado e layout independente

- Removida a aba independente de Combate da navegação principal.
- O conteúdo de Combate passou a ser exibido na Visão Geral, imediatamente abaixo de Atributos.
- Mantidas as listas nativas de Armas e Equipamento Defensivo.
- Reestruturada a Visão Geral em duas colunas independentes: Atributos → Combate → Características à esquerda e Recursos → Perícias à direita.
- A caixa de Atributos deixou de compartilhar linhas de grid com Recursos/Perícias, evitando que sua altura cresça conforme o conteúdo da coluna direita.
- Reduzida a área geométrica da rosa dos ventos para aproximadamente 420×340px e a rosa para 36% da área.
- Mantida a composição relativa dos seis atributos ao redor da rosa.
- Combate foi compactado para funcionar como bloco da Visão Geral.
- Mantida a adaptação para janelas menores.
- Preservada a arquitetura de carregamento e registro da ficha da 0.3.40.

## 0.3.40

- Corrigido o carregamento da ficha de personagem.
- Registro da ficha agora ocorre imediatamente durante `init`, sem aguardar o carregamento assíncrono dos partials.
- Partials passaram a ser carregados pelo `foundry.applications.handlebars.loadTemplates` do Foundry v13.
- Mantida a divisão dos Poderes por tipo das versões anteriores.

## 0.3.39 — Visão Geral: características resumidas e recolhíveis
- Movidos Tamanho, Deslocamento e Sentidos para o cabeçalho da ficha, abaixo da identificação do personagem.
- Mantidos os bindings nativos de tamanho, configuração de deslocamento e seleção de sentidos.
- O bloco Características agora utiliza `<details>` e pode ser aberto ou fechado conforme a necessidade de visualização.
- Resistências, Imunidades a Condições, Proficiências e Informações permanecem no bloco Características.
- Mantida a linguagem visual de pergaminho e a estrutura funcional do Tormenta20.

## 0.3.38 — Poderes agrupados por tipo
- A aba Poderes agora subdivide os itens por `system.tipo`, utilizando as categorias nativas do Tormenta20: racial, classe, geral, destino, tormenta e ability.
- Categorias sem poderes não são exibidas.
- Mantida a estrutura funcional dos itens com `data-item-id` e controles nativos de edição, exclusão e criação.
- Adicionado contador visual de poderes por categoria.
- Mantida a linguagem visual de papel e divisórias discretas da REV.20.

## 0.3.34 — REV.17
- Criada uma camada visual comum para as listas de itens das abas.
- Listas de Combate, Poderes, Magia e Inventário agora usam a mesma superfície quente e translúcida adotada em Perícias.
- Reduzido o aspecto cinza padrão do Tormenta20 sem alterar a estrutura, bindings ou controles nativos das listas.
- Cabeçalhos, divisórias e estados de hover foram harmonizados com a paleta do pergaminho.
- Estrutura interna do pacote permanece `eram-os-deuses-character-sheet-t20`.


## 0.3.33 — REV.16
- Corrigida a renderização das Características e Proficiências.
- Os campos agora filtram corretamente metadados internos (`value`, `selected`, `inactive`) em vez de exibirem esses nomes como tags.
- Valores selecionados são normalizados para texto e localizados quando aplicável.
- Mantidos os seletores e configuradores nativos do Tormenta20.
- Estrutura interna do pacote permanece `eram-os-deuses-character-sheet-t20`.


## REV.14
- Recursos reorganizados em três colunas.
- Vida e Mana empilhadas em uma coluna esquerda mais estreita.
- Defesa ocupa a coluna central nas duas linhas de recursos.
- Deslocamento e Iniciativa ficam na coluna direita, um sobre o outro.
- Mantidos tooltip da Defesa, select de atributo e bindings existentes.
- Barras e valores de Vida/Mana permanecem funcionais.
# Changelog

## 0.3.31 — EOD-3.5 REV.13
- Recursos reorganizados em duas colunas internas.
- Vida e Mana permanecem empilhadas à esquerda.
- Defesa ocupa somente a primeira linha da coluna direita.
- Deslocamento fica abaixo da Defesa.
- Iniciativa fica abaixo de Deslocamento.
- Mantido o escudo e o tooltip da Defesa.
- Reduzida a altura visual do bloco Recursos.
- Nenhuma alteração nos bindings ou na lógica funcional do Tormenta20.

# Changelog

# CHANGELOG — EOD-3.5

## 0.3.30 — REV.12 — Recursos compactos
- Recursos reorganizados em uma grade 2×3 funcional: Vida sobre Mana na coluna esquerda e Defesa ocupando a coluna direita ao lado das duas barras.
- Deslocamento e Iniciativa posicionados lado a lado na linha inferior, abaixo dos três blocos principais.
- Defesa deixa de ocupar uma área excessivamente alta e mantém o escudo e os controles dentro do próprio frame.
- Removida a altura mínima fixa da caixa de Recursos para aproveitar melhor o espaço vertical e liberar área para Perícias.
- Mantidos os bindings e a lógica funcional dos campos.

## 0.3.28 — REV.10 — Layout experimental
- Visão Geral experimental em duas colunas assimétricas: Atributos à esquerda, Recursos no topo à direita e Perícias abaixo.
- Aumentada a área vertical de Atributos para devolver espaço à composição da rosa dos ventos.
- Recursos continuam empilhados, mas passam a ocupar apenas a área necessária no topo da coluna direita.
- Cabeçalho duplicado nativo da lista de Perícias ocultado; o título da seção do módulo permanece como título único.
- Bordas da lista de Perícias suavizadas para integrar melhor a paleta de papel.
- REV.9 permanece como versão estável de referência; esta revisão é experimental.

# Changelog

## 0.3.27 — REV.9
- Restaurada a composição da Visão Geral em três colunas: Atributos | Recursos | Perícias.
- Restaurados os botões de navegação com moldura ornamental aprovados na REV.6.
- Restaurado o layout empilhado dos Recursos.
- Corrigido o tooltip da Defesa: removido o `title` que duplicava o tooltip e podia exibir o HTML bruto; o elemento voltou a receber os eventos do mouse para o tooltip nativo do Foundry.
- Os pseudo-elementos decorativos do escudo permanecem sem captura de eventos.

## 0.3.25 — EOD-3.5 REV.7

- Ajustada a rosa dos ventos para centralização geométrica real dentro do painel de Atributos.
- Reposicionado e redimensionado o escudo da Defesa para permanecer visualmente separado do select de atributo.
- Mantida a navegação ornamental da REV.6 sem alterações.

## 0.3.24 — EOD-3.5 REV.6

- Navegação principal refinada com botões em formato de pequenas placas de ficha.
- Adicionada moldura interna dupla e acabamento de pergaminho aos botões.
- Reutilizado o asset `decorations/small-ornament.webp` como detalhe ornamental discreto na base de cada botão.
- Estados normal, hover e ativo receberam contraste e profundidade próprios, mantendo a paleta da identidade do personagem.
- Mantida a estrutura e os bindings originais das abas.

## 0.3.23 — EOD-3.5 REV.5

- Ajuste fino da rosa dos ventos e das posições orbitais dos seis atributos.
- FOR reposicionado para permanecer melhor contido no painel.
- Defesa: escudo reposicionado e separado visualmente dos controles.
- Select da Defesa movido para o canto superior direito do recurso, permanecendo dentro do frame.
- Navegação redesenhada como abas/botões de ficha, com estados normal, hover e ativo, mantendo a paleta de pergaminho.
- Mantidos bindings e lógica funcional do Tormenta20.

## 0.3.22 — EOD-3.5 REV.4
- Ajuste fino da rosa dos ventos e das posições dos atributos na coluna estreita.
- Defesa: escudo reposicionado e controles fora da área gráfica do escudo.
- Perícias: fundo quente/translúcido alinhado à paleta do pergaminho.

## 0.3.21 — EOD-3.5 REV.3

- Suavizada a textura de pergaminho no corpo da ficha para aproximar o acabamento do painel de identidade.
- Navegação ajustada para a mesma superfície clara e discreta.
- Mantida a textura como fundo contínuo, sem o aspecto forte de papel da REV.2.

# Changelog

## 0.3.20 — EOD-3.5 REV.2
- Refinamento da coluna de Recursos: pequeno respiro entre títulos e barras.
- Controle de atributo da Defesa mantido dentro do frame do recurso.
- Superfície de pergaminho aplicada à navegação e ao corpo da ficha para integrar visualmente os componentes.
- Mantidos os bindings e a composição funcional existentes.


- Estratégia híbrida para a rosa dos ventos: asset reduzido para 44% da área e recentrado horizontalmente.
- Rosa levemente elevada para manter o centro visual alinhado com os seis atributos.
- SAB/CAR e CON/DES aproximados e ajustados verticalmente em pequena escala.
- FOR deslocado mais para baixo, preservando o eixo central e evitando sobreposição visual com a ponta inferior da rosa.
- Nenhuma alteração nos bindings ou na lógica funcional dos atributos.


## 0.3.14 — EOD-3.3 REV.3

- Ajuste fino da posição vertical do atributo FOR, deslocando-o ligeiramente para baixo na rosa dos ventos.

# Changelog

## 0.3.13 — EOD-3.3 REV.1
- Reposicionamento explícito dos seis atributos em torno do centro da rosa dos ventos.
- Substituição da estrela genérica pelo asset `nautical/compass-rose.webp` do Lote 2.
- Remoção do grid legado de atributos em `styles/sheet.css` para impedir sobrescrita de posicionamento.
- Posições INT/FOR, SAB/CAR e CON/DES fixadas por coordenadas simétricas.
- A rosa passou a ser o elemento geométrico central da composição.


## 0.3.11 — EOD-3.2 REV.7
- Forçado o reset do `padding` padrão do `.window-header` da janela da ficha.
- Forçado `padding: 0` no `.window-content` da ficha.
- Mantida a altura do header da janela em 30px.
- O conteúdo visual da ficha passa a encostar integralmente nas bordas úteis da janela, removendo o espaçamento lateral externo observado no Foundry.
- Nenhuma alteração nos bindings ou na lógica funcional do Tormenta20.

## 0.3.10 — EOD-3.2 REV.6
- Reworked campaign banner asset loading to use a real full-bleed `<img>` layer.
- Removed baked-in right-edge artifact from the banner asset and rebuilt it at higher resolution.
- `object-fit: cover` now preserves the asset aspect ratio while filling the complete header area.
- Separated image, overlay, and content layers so the banner no longer behaves like a nested rectangle.
- Preserved the approved campaign identity and character identification composition.

## 0.3.9 — EOD-3.2 REV.5
- Banner uses a dedicated high-resolution wide crop of the approved sky/sea artwork.
- Preserves aspect ratio and fills the complete banner area without stretching.
- Map overlay in character identity now uses a soft radial mask to eliminate visible rectangular boundaries.
- Minor vertical refinements to identity and level alignment.

## 0.3.8 — EOD-3.2 REV.4

### Header + Identidade
- `sky-sea.webp` passa a preencher toda a faixa superior como background contínuo.
- Removida a regra responsiva que transformava o asset em um painel central em telas largas.
- `background-size: cover` preserva a proporção original e recorta o excedente sem deformação.
- Ajustada a posição vertical do enquadramento do céu/mar.
- Identidade ligeiramente elevada para reduzir espaço vazio acima do nome.
- Bloco de nível/XP levemente elevado para melhor alinhamento vertical.
- Portrait refinado com pequeno ajuste vertical.
- Mapa náutico reduzido para atuar como textura de fundo, não como ilustração dominante.

### Escopo
- Nenhuma alteração nos bindings ou na lógica funcional do Tormenta20.
- Atributos, Recursos e demais áreas permanecem fora desta revisão.

## 0.3.17 — EOD-3.3 REV.6 / EOD-3.4 REV.1
- Ajuste de altura da caixa de Atributos para acomodar integralmente o campo FOR e sua BASE.
- Recursos reorganizados conforme o wireframe: PV/PM com barras, Defesa, Deslocamento e Iniciativa.
- Adicionado helper `eodPct` para calcular visualmente o preenchimento das barras sem alterar os dados do sistema.

- 0.3.18: EOD-3.3 REV.7 — ajuste do FOR e área dos atributos; EOD-3.4 REV.2 — barras PV/PM mais largas com valores abaixo e defesa com composição em escudo.


## 0.3.29 — REV.11
- Recursos PV e PM lado a lado para reduzir a altura do bloco Recursos.
- Defesa, Deslocamento e Iniciativa permanecem ocupando toda a largura da coluna.
- Mantida a composição experimental da REV.10.


## REV.15
- Implementado o carregamento real da seção CARACTERÍSTICAS a partir dos campos de traits do ator: tamanho, deslocamento, resistências, imunidades a condições, sentidos, proficiências de armas e armaduras e informações adicionais.
- Mantidos os seletores/configuradores nativos do sistema e adicionada normalização de rótulos para valores de traits.


## 0.3.32 — REV.15 ESTRUTURAL
- A seção CARACTERÍSTICAS foi incorporada ao grid principal da Visão Geral.
- CARACTERÍSTICAS agora fica diretamente abaixo de ATRIBUTOS, na mesma coluna esquerda.
- RECURSOS permanece no topo da coluna direita e PERÍCIAS ocupa a área inferior dessa coluna.
- Em telas estreitas, a ordem passa a ser Atributos → Características → Recursos → Perícias.
- Estrutura interna do pacote padronizada para `eram-os-deuses-character-sheet-t20`.

## 0.3.36 — REV.19
- Refinada a linguagem visual das `item-list`.
- Removido o contorno externo das listas para manter o papel da ficha visível.
- Adicionada linha inferior discreta aos itens como separador principal.
- Cabeçalhos passam a usar somente uma superfície clara e linhas finas.
- Mantida a transparência nas listas aninhadas.
- Ajustada a leitura de agrupamentos de Magia e Inventário sem voltar ao bloco cinza.


## 0.3.37 — REV.20
- Corrigida a aplicação do visual transparente nas `item-list` contra a regra de alta especificidade do CSS nativo do Tormenta20.
- Reforçado o fundo transparente nas listas de Combate, Poderes, Magia e Inventário.
- Mantidos separadores inferiores discretos e cabeçalhos claros.
- Removido também qualquer fundo/imagem/borda herdado que pudesse reconstruir a caixa cinza.

## 0.3.44

- Reduzida a altura mínima do bloco de Atributos para aproximá-lo visualmente da altura de Perícias.
- Reduzida a área vertical da composição dos atributos, preservando a rosa dos ventos reduzida.
- Removido o padding horizontal extra de `.eod-combat`, alinhando os painéis de Armas e Equipamento Defensivo às bordas de Perícias.


## 0.3.45

- Removidos Deslocamento e Iniciativa do bloco RECURSOS, mantendo esses dados no cabeçalho da ficha.
- Ampliadas as áreas de Pontos de Vida e Pontos de Mana, com Vida/Mana ocupando a coluna esquerda e Defesa a coluna direita.
- Adicionado efeito de volume às barras de PV/PM, com gradiente, brilho superior e sombras internas para aparência tridimensional.
- Adicionada sombra projetada sutil à imagem do personagem para reforçar a sensação de retrato levemente elevado sobre o papel.
- Mantida a responsividade da seção RECURSOS em telas estreitas.

## v0.3.47 — Assets modulares padronizados
- Padronizados todos os assets da moldura do retrato em canvas PNG transparente de 64×64 px.
- Mantida a arte original dos recortes, com o conteúdo reposicionado dentro do canvas comum.
- Ajustada a montagem CSS para usar o mesmo tamanho-base em cantos, bordas, medalhão lateral e âncora.
- Bordas continuam repetíveis, evitando distorção quando a moldura muda de tamanho.
