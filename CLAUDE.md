# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static single-page marketing website for PROTONU — a Netherlands-based robotics, process automation, and embedded systems consultancy. No build system, no package manager, no framework.

## Development

Open `index.html` directly in a browser, or serve with any static file server:

There are no build steps, tests, or linting tools configured.

## Architecture

Three files make up the entire site:

- **`index.html`** — all markup; sections in order: Nav, Hero, Marquee, Process, Projects (bento grid), CTA Banner, Footer, Modal
- **`css/styles.css`** — all styles; design tokens defined as CSS custom properties in `:root` at the top of the file
- **`js/main.js`** — all interactivity; vanilla JS, no dependencies

### Design token system (`css/styles.css`)

All colors, spacing, and motion values are defined as CSS custom properties in `:root`. Edit these first when changing the visual style — `--red` / `--red-dark` / `--red-glow` are the primary brand accent, `--bg` / `--bg-2` are the dark background tones, `--white` is the warm off-white used for headings.

### JS interaction patterns (`js/main.js`)

- **`data-reveal`** — hero elements; `.revealed` class added in staggered timeouts on DOMContentLoaded
- **`data-animate`** — scroll-in elements; `IntersectionObserver` adds `.visible` when they enter the viewport
- **`data-count` / `data-year-since`** — stat counters; observed and animated by `countUp()` on first intersection
- **`data-magnetic`** — buttons with mousemove-based translate effect
- **`TextScramble` class** — animates `#scrambleLine` (hero headline line 1) with random character cycling on load

### Project cards / modal

Each `.bento__card` article carries `data-image`, `data-title`, `data-client`, and `data-tags` attributes. Clicking a card calls `openModal(card)`, which reads these attributes to populate the `#modal` overlay. To add video support to a card, add `data-video="<YouTube video ID>"` — the JS will inject an `<iframe>` embed instead of the static image.

### Adding a new project card

Copy an existing `<article class="bento__card">` block in `index.html`, update the `data-*` attributes and the inline `background-image` URL on `.bento__bg`, add the image to `assets/images/`, and update the marquee strip if needed. The wide variant uses `bento__card--wide` and spans two columns.
