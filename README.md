# Nova Studio – Animation Demo

A small one-page demo showing scroll-based animations and micro-interactions.
Built with semantic HTML, modern CSS (Flexbox/Grid) and vanilla JavaScript + GSAP.

**Live demo:** [[https://github.com/trippyjns1]]

## Files
- `index.html` – page structure and content. Loads GSAP and ScrollTrigger from a CDN.
- `style.css` – layout, colors and CSS micro-interactions (hover effects).
- `script.js` – all GSAP animations.

## What's inside
- Staggered text reveal in the hero on page load
- Section titles and cards animated on scroll (ScrollTrigger)
- A pinned scene where the 4 process steps light up as you scroll (scrub)
- CSS micro-interactions: nav underline, button hover, card lift
- Respects `prefers-reduced-motion`
- Only `transform` and `opacity` are animated, for smooth mobile performance

## How to tweak the effects
- **Speed:** change `duration` (seconds) in `script.js`. Bigger = slower.
- **Delay between items:** change `stagger`.
- **Scene length:** change `end: "+=2000"` in the pinned scene. Bigger = longer scroll.
- **Colors:** edit the variables at the top of `style.css` (`:root`).
- **Text:** edit `index.html`.

## Run it locally
Open `index.html` in your browser. No build tools needed.
