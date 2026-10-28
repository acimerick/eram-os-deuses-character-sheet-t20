# Asset Map — EOD-3.1

## Regra de produção

Os assets desta pasta seguem a separação definida na EOD-2.13:

- **HTML/HBS** → estrutura e dados.
- **CSS** → geometria, layout, estados e barras.
- **SVG** → elementos vetoriais originais.
- **WebP** → texturas, materiais e recortes raster derivados das pranchas aprovadas.
- **PNG** → peças raster com transparência quando o asset precisa ser montado, repetido ou rotacionado sem um fundo.

Os recortes raster foram extraídos das pranchas de referência e preparados para reutilização. Eles não são considerados SVG e não devem ser editados como se fossem vetoriais.

## Campanha

| Arquivo | Função | Origem |
|---|---|---|
| `campaign/logo.svg` | Logo principal | Lote 1, asset original |
| `campaign/campaign-ornament.svg` | Ornamento horizontal | Lote 1, asset original |
| `campaign/symbol.webp` | Símbolo/ornamento de campanha | Lote 2, recorte da prancha |

## Frames

| Arquivo | Função | Origem |
|---|---|---|
| `frames/portrait/portrait-corner.png` | Canto-base da moldura, reutilizado por espelhamento | Asset raster transparente fornecido na revisão da moldura; canvas 96×64 px |
| `frames/portrait/portrait-edge-v.png` | Faixa vertical repetível | Asset raster transparente fornecido na revisão da moldura; canvas 64×192 px |
| `frames/portrait/portrait-anchor.png` | Medalhão de âncora inferior | Asset raster transparente fornecido na revisão da moldura; canvas 96×64 px |
| `frames/divider.webp` | Divisores ornamentais horizontais | Lote 2, recorte da prancha |

## Náutico

| Arquivo | Função | Origem |
|---|---|---|
| `nautical/star.svg` | Estrela vetorial reutilizável | Lote 2, asset original |
| `nautical/star-detail.webp` | Estrela decorativa raster | Lote 2, recorte da prancha |
| `nautical/anchor.webp` | Âncora | Lote 2, recorte da prancha |
| `nautical/helm.webp` | Leme | Lote 2, recorte da prancha |
| `nautical/compass-rose.webp` | Rosa dos ventos ornamental | Lote 2, recorte da prancha |
| `nautical/compass.webp` | Bússola | Lote 2, recorte da prancha |
| `nautical/celestial-mark.webp` | Marca celestial | Lote 2, recorte da prancha |

## Decorações

| Arquivo | Função | Origem |
|---|---|---|
| `decorations/rope.webp` | Corda reutilizável | Lote 2, recorte da prancha |
| `decorations/seal.webp` | Selo decorativo | Lote 2, recorte da prancha |
| `decorations/small-ornament.webp` | Ornamento pequeno | Lote 2, recorte da prancha |
| `decorations/torn-paper.webp` | Papel rasgado | Lote 3, recorte da prancha |
| `decorations/ink-stain.webp` | Mancha de tinta | Lote 3, recorte da prancha |

## Backgrounds / materiais

| Arquivo | Função | Uso esperado |
|---|---|---|
| `backgrounds/parchment.webp` | Pergaminho principal | Fundo repetível |
| `backgrounds/parchment-dark.webp` | Pergaminho escuro | Cabeçalhos, rodapés e destaque |
| `backgrounds/wood.webp` | Madeira | Molduras e elementos estruturais |
| `backgrounds/paper-noise.webp` | Ruído de papel | Sobreposição sutil |
| `backgrounds/map-overlay.webp` | Mapa náutico | Sobreposição decorativa com baixa opacidade |
| `backgrounds/sky-sea.webp
- `backgrounds/sky-sea-banner.webp` — recorte panorâmico de alta resolução para a faixa superior da ficha` | Céu e mar | Cabeçalho decorativo |

## Próxima etapa

Os assets ainda não foram incorporados ao layout final nesta versão. A próxima etapa deve usá-los progressivamente na estrutura da ficha, começando pelo cabeçalho e identidade, sem alterar o wireframe congelado.
