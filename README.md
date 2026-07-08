# sarafiskray.github.io — v2

Minimal, dark, text-first portfolio. React + TypeScript + Vite.

## Editing content

**Everything you'd want to change lives in `src/content.ts`.** Every piece of
placeholder copy is marked `[EDIT]`. Replace those with your own words and
you're done — you should never need to touch `App.tsx` or the CSS unless you
want to change the design itself.

Search the project for `[EDIT]` to make sure you've caught them all before
deploying.

## Running locally

```bash
npm install
npm run dev      # local dev server with hot reload
npm run build    # production build → dist/
npm run preview  # serve the production build locally
```

## Deploying to GitHub Pages

This replaces the contents of your `sarafiskray.github.io` repository.

**Recommended: GitHub Actions (already set up in this repo)**

1. Back up your current repo (rename it or make a branch — see caveat below).
2. Push this project to `sarafiskray/sarafiskray.github.io`, branch `main`.
3. In the repo: Settings → Pages → Source → select **"GitHub Actions"**.
4. Every push to `main` now builds and deploys automatically via
   `.github/workflows/deploy.yml`.

Bonus: this gives you a real CI/CD pipeline to talk about in interviews.

## ⚠️ Caveat: your old project subpages

Your current site is a Jekyll repo that serves subpages like `/nbatool`,
`/aboutme`, `/vtrans`, etc. Replacing the repo **deletes those URLs**.

- Projects that live in their **own repos** (like `nets-app`) keep working —
  that's why the NBA tool links to `/nets-app/` in `content.ts`.
- If the NBA tool at `/nbatool` is a different/better build than `/nets-app`,
  move it into its own repo before switching over, then update the link.
- Old links you've shared (e.g., `/aboutme` on a resume somewhere) will 404.
  Check anywhere you've published links before flipping the switch.

## Design tokens

If you want to tweak the look, it's all CSS variables at the top of
`src/styles.css`: background, text colors, the amber accent, column width,
and the two font stacks (Spectral for prose, IBM Plex Mono for labels).
