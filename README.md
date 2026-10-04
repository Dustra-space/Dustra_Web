# Dustra_Web

Website for **DUSTRA** — an ETH Zurich project exploring electrostatic dust propulsion using processed lunar or asteroid material. The immediate next step is a laboratory prototype. The
project was selected as one of 20 teams in the ETH Zurich | Space
[Liftoff Challenge 2026/27](https://www.liftoff-challenge.ch/).

## Run locally

```
npm install
npm run dev
```

The dev server listens on <http://localhost:5180>.

```
npm run build
npm run preview
npm run typecheck
```

## Structure

| Path | Purpose |
| --- | --- |
| `src/content.ts` | All site copy: hero, why, concept, sources, progress, team, contact. |
| `src/components/Section.tsx` | Section shell: streak eyebrow, display heading, paper/dust/void tone. |
| `src/components/HeroArt.tsx` | Static hero background: planetary horizon with a soft rust atmosphere. |
| `src/components/DustField.tsx` | Canvas of drifting dust in the hero; some grains streak past with a rust trail. |
| `src/components/Accelerator.tsx` | Animated conceptual diagram of feed, charge, accelerate, measure. |
| `src/components/Logo.tsx`, `logoPaths.ts` | The logo, with the wordmark outlined so it never depends on the font. |
| `src/index.css` | Self-hosted fonts, colour and type tokens, buttons, labels, keyframes. |
| `public/og.png` | Link-preview image (1200×630) used by LinkedIn, Slack and messengers. |

### Team photos

Put square-ish photos in `public/team/` and set `photo: 'team/<name>.jpg'` on the member
in `src/content.ts`. Initials show until a photo is set. `linkedin` is optional.

## Public claims

The page separates the long-term local-propellant vision from DUSTRA’s current design and simulation work. Published contact-charging and accelerator results belong to the cited researchers. Continuous useful mass flow and propulsion performance remain to be validated. Keep public copy broad; do not add unmeasured performance figures or fixed flight-delivery dates.

## Design notes

The identity comes from the DUSTRA logo. Rust `#7A2500` is the brand colour and the logo's
charcoal `#36363C` carries the wordmark. Ember `#FF2100` is reserved for "charged" moments:
focus rings. The page alternates warm
paper and light grey sections and ends on a rust contact band.

Type: Hubballi (the logo face) for display, IBM Plex Sans for reading, IBM Plex Mono for labels
and annotations. All three are OFL-licensed and self-hosted in `src/assets/fonts`, so the site
makes no third-party requests (no Google Fonts, which also matters for Swiss/EU privacy rules).

The eyebrow mark (three dots and a streak) is the particle trail from the logo's D.

All animation respects `prefers-reduced-motion`, and content stays visible without JavaScript.
