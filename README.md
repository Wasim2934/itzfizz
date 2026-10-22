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

1. Create a new **public** repository on GitHub, for example `itzfizz-scroll-hero`.
2. In `vite.config.js`, make `base` match your repository name exactly. For a repository named `itzfizz-scroll-hero`, use:
   ```js
   base: "/itzfizz-scroll-hero/",
   ```
   For a root user site named `YOUR_USERNAME.github.io`, use `base: "/"`.
3. Commit and push this project to the repository's `main` branch.
4. On GitHub, open **Settings → Pages**.
5. Under **Build and deployment → Source**, select **GitHub Actions**.
6. Wait for the workflow under the **Actions** tab to finish successfully.
7. Your site will be published at:
   `https://YOUR_USERNAME.github.io/itzfizz-scroll-hero/`

The live URL depends on your GitHub username and repository name. Do not submit the example URL until your own deployment succeeds.

## Submission checklist

- [ ] `npm run build` completes successfully.
- [ ] Test the animation on desktop and mobile.
- [ ] Test scrolling down and back up; car movement should reverse with scroll.
- [ ] Replace the sample repository name in `vite.config.js` if needed.
- [ ] Confirm the GitHub Pages workflow succeeded.
- [ ] Add your actual live URL and repository URL to your internship submission.

## Tuning the animation

In `src/App.jsx`, adjust the ScrollTrigger timeline:
- `end: () => +=...` controls how much scroll distance the animation uses.
- `scrub: 1` controls smoothing (try `0.5` for tighter response or `1.3` for softer catch-up).
- `travel()` controls the final horizontal distance.
- Change the metric labels and percentages in the `metrics` array.

The statistics are sample values taken from the supplied design reference. Verify them with the internship brief before presenting them as real-world results.
