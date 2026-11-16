# Landing page study project (Astro)

Context for Claude Code in VS Code. Planning and task tracking happen in a separate thread; this file is the brief.

## Goal

Build a one-page landing site for a small holiday-rental retreat, matching the layout of a reference design (pasted in chat) but with my own branding and images. It's a study task: I write most of the code and you pair with me. Explain what you're doing, and don't generate the whole site in one go.

## Stack

- Astro (latest), static output, no UI framework unless a section really needs one
- Tailwind CSS v4 (`npx astro add tailwind`), with design tokens in `@theme`
- Images through `astro:assets` `<Image />`, stored in `src/assets/`
- Fonts: a high-contrast display serif with italic accents for headings (e.g. Cormorant Garamond or Fraunces) plus a clean sans for body (e.g. Montserrat), self-hosted via Fontsource
- Deploy: Vercel or Netlify, static

## Brand

- Name: **Pine & Hollow**, forest cabins in the mountains (in the reference it's a Portuguese villa). Logo is a serif wordmark with an italic "&". Repo: `pine-and-hollow`
- Palette: warm cream background, sand/beige panels, dark ink text, one muted accent for buttons
- Tone: calm, quiet luxury. Short headings with one italic word ("The Perfect Stay _to_ Rest _and_ Enjoy")
- Images: free Unsplash/Pexels photos of forest cabins, interiors and mountains. Keep a list of credits in `CREDITS.md`

## Page sections (top to bottom), one component each

1. `Header.astro`: left nav (About, Houses, Prices, Contact), centered logo, right location link plus a pill "Booking" button. Mobile: burger menu
2. `Hero.astro`: full-width photo with a dark overlay, small uppercase eyebrow, big serif headline, pill CTA
3. `About.astro`: arch/pill-shaped image on the left, heading + paragraph + "Check our availability >" link on the right
4. `Getaway.astro`: two-column split. Left is a sand panel with a serif heading, an inset photo and a "house name + arrow" link. Right is a large interior photo
5. `Testimonial.astro`: centered serif quote, 5 stars, text, name and date
6. `InstagramStrip.astro`: handle label, then a row of 6 square photos (3 columns on mobile)
7. `Footer.astro`: links on the left, logo in the center, address/contacts/language on the right

Content (texts, nav links, testimonial, images) lives in `src/data/site.ts`, so components stay presentational.

## Conventions

- `src/layouts/Base.astro` holds `<head>`, SEO meta and fonts. `src/pages/index.astro` composes the sections
- Mobile-first and responsive. Semantic HTML, alt text on every image, visible focus states
- Aim for Lighthouse 95+ on all four scores
- Small commits, one per section

## Reference

The design screenshot is at `docs/reference.png`. Read it before building any section and match its spacing, proportions and type scale.

## Plan (all in one day, one commit per step)

1. Scaffold, Tailwind, fonts, design tokens, Base layout
2. Header + Hero
3. About + Getaway
4. Testimonial + Instagram strip + Footer
5. Responsive pass, a11y/Lighthouse, deploy, README with screenshot
