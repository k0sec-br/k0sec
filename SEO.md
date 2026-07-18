# SEO e Presença em Buscadores

Este documento resume a preparação de SEO do site da K0Sec.

## Arquivos

- `index.html`: metatags principais, Open Graph, Twitter Cards, JSON-LD e links de ícones.
- `manifest.webmanifest`: instalação em dispositivos e ícones PWA.
- `robots.txt`: autorização de rastreamento e referência ao sitemap.
- `sitemap.xml`: URL principal para buscadores.
- `humans.txt`: informações públicas da comunidade.

## Metadados Incluídos

- Title e description.
- Robots, Googlebot e Bingbot.
- Canonical URL.
- Open Graph para Discord, LinkedIn, Facebook e outros previews.
- Twitter Card.
- JSON-LD `Organization`.
- JSON-LD `WebSite`.
- Ícones para favicon, Apple Touch Icon, Android/PWA e maskable icon.

## Antes de Publicar

Confirme se o domínio final é `https://k0sec.org/`. Se outro domínio for usado, atualize:

- `index.html`: `canonical`, `og:url`, `og:image`, `twitter:image` e JSON-LD.
- `robots.txt`: URL do sitemap.
- `sitemap.xml`: URL da página.
- `manifest.webmanifest`: `start_url` e `scope`, se o site ficar em subpasta.

## Após Publicar

Recomendado cadastrar o site em:

- Google Search Console.
- Bing Webmaster Tools.
- Ferramentas de inspeção de compartilhamento das redes sociais.

Também é recomendado testar:

- Validação de HTML.
- Lighthouse.
- Rich Results Test.
- Mobile-Friendly Test.
