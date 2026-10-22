# Scroll-Driven Hero

A responsive scroll-linked hero animation inspired by the supplied ITZFIZZ reference. Built with React, Tailwind CSS v4, GSAP and ScrollTrigger.

## Features

- Pinned hero scene while the page scrolls
- Scroll-linked horizontal car movement (`scrub: 1`)
- Green trail grows behind the car
- Headline reveal and staggered metric-card intro
- Responsive layout and reduced-motion awareness
- Custom inline SVG car asset; no external image dependency
- GitHub Pages deployment workflow

## Requirements

Node.js 20 or newer and npm.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

Build and preview the production version:

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

This repository is configured to deploy automatically to GitHub Pages whenever a commit is pushed to `main`. The workflow configures Pages, builds the Vite app, and publishes the generated `dist` directory.

The Vite `base` in `vite.config.js` must match this repository's name (`/itzfizz/`). After the **Deploy to GitHub Pages** workflow succeeds in the **Actions** tab, the site is available at:

https://wasim2934.github.io/itzfizz/

## Submission checklist

- [ ] `npm run build` completes successfully.
- [ ] Test the animation on desktop and mobile.
- [ ] Test scrolling down and back up; car movement should reverse with scroll.
- [ ] Confirm the GitHub Pages workflow succeeded.
- [ ] Add your actual live URL and repository URL to your internship submission.

## Tuning the animation

In `src/App.jsx`, adjust the ScrollTrigger timeline:
- `end: () => +=...` controls how much scroll distance the animation uses.
- `scrub: 1` controls smoothing (try `0.5` for tighter response or `1.3` for softer catch-up).
- `travel()` controls the final horizontal distance.
- Change the metric labels and percentages in the `metrics` array.

The statistics are sample values taken from the supplied design reference. Verify them with the internship brief before presenting them as real-world results.
