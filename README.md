# Yūzen Matcha — B2B Wholesale (Next.js + Tailwind)

Minimal, modern starter aligned to the Yūzen design spec (glassy nav, airy layout, tiered pricing).

## Quickstart
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Deploy (Netlify)
1. Push this repo to GitHub.
2. In Netlify, **Add new site → Import an existing project** and pick your repo.
3. Build command: `npm run build`. **Leave Publish Directory blank** — Netlify detects Next.js and configures automatically.
4. Deploy.

## Customize
- Edit tokens in `tailwind.config.ts` and `app/globals.css`.
- Update copy & sample data in `app/page.tsx`, `app/catalog/page.tsx`, `app/pricing/page.tsx`.
- Add product images in `/public` as needed.

## Notes
- Placeholder prices & SKUs — replace with your real data.
- Accessibility: focus rings + color contrast considered; please validate with your content.
