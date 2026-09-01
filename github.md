repo: lucassilvestrebr/alessia-flow
branch: main

## Last sync
date: 2026-08-31T23:55:00Z
tree: c47dc38ecd0e (tree hash — commit sha não resolvido)

### Updated in this project
- components.jsx restaurado da versão do GitHub (Showcase completa).
- Razão social alinhada ao que está no ar: "Veross Outbound Sales" (23 páginas).
- politica-de-cancelamento: seção 1 reescrita para o fluxo self-service (Contas → ⋯ → Cancelar Assinatura → 3 etapas). **Diverge do repo, precisa subir.**
- Repositório reorganizado (assets/, data/, legal/, src/) + cleanUrls e redirects 301 no vercel.json.
- Logotipo padronizado em 44px em todas as páginas; páginas legais passaram a usar o SVG no lugar do texto.

## Estrutura
```
/                      ← o que o Vercel serve
├─ index.html (bundle) · central-de-ajuda.html
├─ legal/              politica-de-privacidade · termos-de-uso · politica-de-cancelamento
├─ comparativos/       index + 19 concorrentes
├─ assets/css|js|img/  (img era uploads/)
├─ data/               comparativos-data · comparativos-data-raw · help-data
├─ src/                fontes e bundles (Landing Page.html, components-bundle.jsx, material/)
└─ favicon · apple-touch-icon · robots · sitemap · manifest · vercel.json
```
URLs sem `.html` via `cleanUrls`. Redirects 301: `/termos-de-uso*`, `/politica-de-*` → `/legal/…`; `/uploads/*` → `/assets/img/*`.

## Fonte vs. artefato
O repo guarda os artefatos de deploy: `index.html` (1,9 MB) e o `central-de-ajuda.html` de lá são bundles com CSS e fontes inline. As fontes editáveis vivem em `src/` e só existem neste projeto.

## Só no projeto (não estão no GitHub — decisão: não subir por ora)
Landing Page.html · src/* · manifest.json · robots.txt · llms.txt · humans.txt · og-image.png · sitemap.xml completo

## Screen map
| Página | Arquivos-fonte |
| --- | --- |
| Landing | Landing Page.html + assets/js/components.jsx + assets/css/styles.css |
| Central de Ajuda | central-de-ajuda.html + assets/css/help.css + subpages.css |
| Comparativos (20) | comparativos/*.html + assets/css/comparativos.css + subpages.css |
| Legais (3) | legal/*.html + assets/css/subpages.css |
