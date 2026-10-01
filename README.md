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
| `src/content.ts` | Central site copy, project direction, status, research background, and roadmap. |
| `src/components/Section.tsx` | Section shell: gutter label, two-tone heading, light/band/dark tone. |
| `src/components/Accelerator.tsx` | Animated conceptual illustration of feeding, charging, acceleration, and measurement. |
| `src/components/DustField.tsx` | Canvas dust field behind the hero. |
| `src/index.css` | Design tokens, type scale, button and label styles, keyframes. |

## Public claims

The page separates the long-term local-propellant vision from DUSTRA’s current design and simulation work. Published contact-charging and accelerator results belong to the cited researchers. Continuous useful mass flow and propulsion performance remain to be validated. Keep public copy broad; do not add unmeasured performance figures or fixed flight-delivery dates.

## Design notes

The visual language follows the Liftoff Challenge site: white and `#f3f3f3` sections alternating
with full-black bands, coral `#ff5841` as the only accent, small uppercase micro-type for labels,
and two-tone headings where the second line is set in grey.

Liftoff sets its type in Overused Grotesk, which is not redistributable via npm.
[Inter Tight](https://fonts.google.com/specimen/Inter+Tight) is used instead — the closest open
substitute at the same weights and tracking — and is self-hosted, so the site needs no network
access at runtime.

All animation is gated behind `prefers-reduced-motion`.
