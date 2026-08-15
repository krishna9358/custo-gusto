# Custo Gusto — website handover

Static build of the new custogusto.in. No build step, no dependencies, no framework.
Open `index.html` in a browser and it runs.

---

## What's here

```
index.html              the whole site (8 pages, client-side routed)
assets/
  css/site.css          25 KB — all styles, no preprocessor
  js/site.js            52 KB — page content + router, plain ES5, no libraries
  fonts/                5 files, 52 KB total — self-hosted woff2
  img/                  32 files, 1.3 MB total
README.md               this file
```

**Zero external requests.** No CDN, no Google Fonts, no analytics, no trackers. Every font
and image is local. The only outbound links are the YouTube film and the WhatsApp deep link.

---

## Deploying it

### Option A — static host (fastest)
Upload the folder. Vercel, Netlify, S3+CloudFront, or any nginx box. Nothing to configure.

```bash
# from inside this folder
npx serve .          # local check
vercel deploy --prod # if you use Vercel
```

### Option B — inside the existing Next.js app
The current custogusto.in is Next.js on Vercel. Two ways in:

**B1 — drop-in (quickest).** Put the contents in `public/` and route to `public/index.html`.
Works immediately, but sits outside the React app.

**B2 — port to components (recommended long-term).** The structure maps cleanly:
- `assets/js/site.js` holds one function per page in the `PAGES` object — each becomes a
  React component. The markup is plain strings; it converts almost mechanically.
- `assets/css/site.css` can go in as a global stylesheet or be split per component. All
  colours are CSS custom properties on `:root`, so a theme file is trivial.
- Swap `<img>` for `next/image` and drop `assets/img` into `public/img`.

---

## Routing — read this before you deploy

The site uses **hash routing**: `/#/work`, `/#/services`, `/#/clients` and so on.
Chosen so it runs from any static host with no server rewrites.

**If you want clean URLs** (`/work` rather than `/#/work`) — which you should, for SEO —
that needs either server rewrites or the Next.js port in B2. The eight routes are:

`/` · `/services` · `/work` · `/clients` · `/story` · `/commercials` · `/faq` · `/contact`

---

## Before it goes live — five things

1. **The contact form does nothing.** It's markup only; `onsubmit` is stubbed. Wire it to
   your form handler, or point it at whatever the current site uses.
2. **The WhatsApp link** goes to `+91 96543 82799`. Confirm that's the line you want public —
   the old site showed two different numbers, neither of them this one.
3. **Images are unoptimised JPEGs.** If you go the Next.js route, `next/image` will handle
   sizing and WebP automatically. On a static host, run them through an optimiser first.
4. **No favicon, no OG image, no sitemap.** All three want adding before launch.
5. **Meta description** is set in `index.html`. Per-page meta needs the B2 port, since
   hash routes can't carry their own tags.

---

## Fonts

| Family | Weight | Used for |
|---|---|---|
| Best Curry | 400 | Wordmark, H1, headlines, stat numerals |
| Poppins | 400 / 500 / 600 | Everything else |
| Yatra One | 400 | Every Hindi line |

⚠ **Best Curry is a 105-glyph subset.** It is missing `~ — · / – − ● ▶ → § °` among others.
The site works around this: the tilde, slash and bullet are drawn as inline SVG/CSS shapes
(see `.g-tilde`, `.g-slash`, `.g-dot`). **If you get the full licensed font file, drop it in
and those workarounds can be deleted.** Don't add Best Curry text containing those characters
until then — it will silently fall back to Poppins.

---

## Brand colours — do not improvise

Defined as custom properties at the top of `site.css`:

| Token | Hex | Rule |
|---|---|---|
| `--blush` | `#FDF3EA` | Page background. **Never pure white.** |
| `--brick` | `#9C4136` | Headlines, primary buttons |
| `--indigo` | `#41479B` | Structure, secondary, dark sections |
| `--marigold` | `#FFC93C` | Ticker, closing band, highlights. **Never a button.** |
| `--bagh` | `#48A57D` | **Reserved** — live markers, WhatsApp, watch buttons only |
| `--peri` | `#B7C6DE` | Garnish only, max 10% of any layout |

Dark mode is handled by redefining UI tokens only. **The six brand hexes never change** —
they're the same in both themes by design.

---

## Accessibility and motion

- Every image has alt text; 30 of 33 are lazy-loaded
- Skip-to-content link, visible keyboard focus rings on all interactive elements
- Smallest type anywhere is **12px** — this is a hard floor, please keep it
- All animation is disabled under `prefers-reduced-motion`
- Cards reveal on scroll via IntersectionObserver, with a no-JS fallback that shows
  everything immediately — content can never be hidden by a script failure

---

## Testing done

- All 8 pages verified rendering by executing the built JS, not by eye
- Every referenced asset resolved — 39 references, 0 missing
- No horizontal overflow at any width tested
- Zero characters below the 12px floor
- Zero external network requests

Questions on intent rather than code should go to Laksh.
