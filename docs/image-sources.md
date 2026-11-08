# Image sources and usage status

## In-use imagery

| File | Source | Usage status | Notes |
|---|---|---|---|
| `public/images/hero/wedding-stationery-placeholder.jpg` | [Unsplash photo by Micah & Sammie Chaffin](https://unsplash.com/photos/wedding-stationery-is-arranged-on-fabric-oUhlJR1XajY); image delivered from `images.unsplash.com/photo-1741893043659-ca8b82a8b637` | Temporary editorial placeholder; Unsplash photo page states “Free to use under the Unsplash License” | Downloaded locally for static export (no runtime hotlink). Visible hero caption and alt text state it is illustrative, not Vasavi work. Replace with owner-approved invitation photography before launch. Contributor credit is included in the image description/caption and this register. |
| `public/images/gallery/vasavi-interior.jpg` | User-provided project attachment | Business-supplied image; use authorized by user for this website task | Used as a showroom/interior photograph, not represented as a specific completed print order. |
| `public/images/gallery/vasavi-showroom.jpg` | User-provided project attachment | Business-supplied image; use authorized by user for this website task | Shows display shelves and showroom; not presented as a product close-up. |
| `public/images/gallery/vasavi-storefront.jpg` | User-provided project attachment | Business-supplied image; use authorized by user for this website task | Exterior/storefront photograph. |
| `public/images/gallery/vasavi-services-poster.jpg` | User-provided project attachment | Business-supplied image; use authorized by user for this website task | Historical promotional poster; content may not represent currently available services, so confirm with owner. |

## Image folders

`public/images/` is split into `hero/`, `wedding-invitations/`, `commercial-printing/`, `banners/`, `personalized-gifts/`, `printing-machinery/` and `gallery/`. Empty category folders are reserved for owner-approved assets. No Justdial, Yappe, competitor or unrelated JDMart photographs are used.

The project uses Next.js static export. `images.unoptimized: true` keeps `next/image` compatible with static hosting; the current local photographs are served as static files, and the hero placeholder was resized/compressed at its Unsplash source. Before production, replace the placeholder with an approved high-resolution Vasavi image and keep the source/permission record updated.
