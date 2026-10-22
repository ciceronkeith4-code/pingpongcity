# PingPong City Sports Center

One-page website for PingPong City Sports Center, Level 3 Farmers Plaza, Araneta City, Cubao, Quezon City.

## Project layout

- `public/` — everything that gets deployed (`index.html`, `tailwind.css`, logos)
- `tailwind.config.js`, `input.css` — source for the stylesheet
- `vercel.json` — Vercel build and output settings

## Working on it

```
npm install
npm run dev     # rebuilds public/tailwind.css whenever index.html changes
```

Open `public/index.html` through any local server, for example `npx serve public`.

Run `npm run build` after changing classes in `index.html`, so `public/tailwind.css` includes them.

## Deploying to Vercel

1. Import this GitHub repository in Vercel (Add New → Project).
2. Leave the framework preset on **Other**. `vercel.json` already sets the build command (`npm run build`) and the output folder (`public`).
3. Deploy. Every push to `main` redeploys automatically.

After the first deploy, change the `og:image` tag in `public/index.html` to the full address of the logo, for example `https://your-domain.vercel.app/logo.png`, so link previews on Facebook show the image.
