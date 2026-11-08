# Vasavi Offset Printers

Editorial-style static homepage for Vasavi Offset Printers, Kalaburagi.

## Run locally

```bash
npm install
npm run dev
```

## Build and checks

```bash
npm run lint
npm run typecheck
npm run build
```

`next.config.mjs` enables static export for Cloudflare Pages. `images.unoptimized` is intentional for static export; use approved local assets or a configured external image CDN if image transformation is required.

## Research and imagery

- Business findings, rating-source conflicts and owner-confirmation items: `docs/vasavi-business-research.md`.
- Asset provenance and permissions status: `docs/image-sources.md`.
- User-supplied Vasavi business photos are in `public/images/gallery/`.
- The hero invitation photo is an Unsplash-licensed temporary editorial placeholder. It is visibly identified as illustrative and not Vasavi work.
- The portfolio filters use only supplied Vasavi photos and the supplied service poster. The poster is promotional material, not presented as a customer project.

## Google reviews and listing

The homepage links to Google Maps and includes a Google Maps embed; no Google aggregate rating/count or Places API response is hardcoded. One publicly accessible Justdial review is shown with its own source, review date and individual rating. Justdial numbers are not labeled as Google data. A Places API integration would require an authorized API key and key restrictions; it is not currently configured.

## Canonical domain

`NEXT_PUBLIC_SITE_URL` controls canonical, sitemap, robots and structured-data URLs. `www.vasaviprints.com` is currently a placeholder listed by a directory; DNS did not resolve during research. Confirm the final production domain and set this variable before deployment. The listed 1968 establishment year also needs owner confirmation.
