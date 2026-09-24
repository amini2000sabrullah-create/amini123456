# Nexura — Digital Creative Agency Website

A fully static, self-contained website. No build step, no backend, no external accounts required to run it.

## Project structure

```
nexura-agency/
├── index.html      → main page (all sections: hero, services, work, about, process, testimonials, contact, footer)
├── css/
│   └── style.css   → all styles
├── js/
│   └── script.js   → scroll effects, counters, portfolio filter, contact form, mobile menu
├── vercel.json      → Vercel deployment config
├── package.json     → optional, only used for the local dev server script
└── README.md
```

The only external resource loaded is Google Fonts (Space Grotesk + Vazirmatn) via a `<link>` tag in `index.html`. Everything else — HTML, CSS, JS — is local to this folder.

## Run it locally

You don't need Node.js or any tooling — just open the file directly:

```
Double-click index.html
```

or, for a local server (recommended so relative paths & browser features behave exactly like production):

```bash
# Option A — Python (no install needed on most systems)
cd nexura-agency
python3 -m http.server 3000
# then open http://localhost:3000

# Option B — Node (if you have Node installed)
npx serve .
```

## Customize content

- **Brand name / logo**: search for `Nexura` in `index.html` and replace.
- **Colors**: edit the CSS variables at the top of `css/style.css`, inside `:root { ... }` (`--accent1`, `--accent2`, `--bg`, etc.).
- **Fonts**: change the Google Fonts `<link>` in `index.html` and the `--serif` / `--sans` variables in `css/style.css`.
- **Portfolio items, testimonials, stats**: edit the corresponding sections directly in `index.html` — each block is plain HTML, no template engine.
- **Contact form**: the form in `index.html` (`#contactForm`) currently only shows a confirmation message client-side (see `js/script.js`). To actually receive submissions, connect it to a form backend (e.g. Formspree, Getform) or your own API endpoint — just change the `<form>` `action`/`method` or the JS submit handler.

## Deploy to GitHub

```bash
cd nexura-agency
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### GitHub Pages (optional, free hosting via GitHub)
Repo → Settings → Pages → Deploy from branch → `main` → `/ (root)`. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`.

## Deploy to Vercel

**Option A — Vercel CLI**
```bash
npm i -g vercel
cd nexura-agency
vercel
```

**Option B — Vercel dashboard**
1. Push this folder to a GitHub repo (steps above).
2. Go to vercel.com → New Project → Import the repo.
3. Framework preset: **Other** (it's static HTML — no build command needed).
4. Deploy.

A `vercel.json` is already included so Vercel serves the folder as a static site with no extra configuration.

## License / ownership

This code is yours to use, modify, and host however you like. There is no dependency on Claude, Anthropic, or any Claude account to run, edit, or deploy it.
