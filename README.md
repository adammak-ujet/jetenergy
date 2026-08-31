# Xcel Energy Customer Support — Demo Mockup

A static, view-only mockup of the Xcel Energy customer support portal
(`mi.my.xcelenergy.com/customersupport/s/`), built for an internal SC demo.
Plain HTML/CSS/JS, no build step, no backend, no real functionality.

Not affiliated with or endorsed by Xcel Energy — for internal sales-engineering
demo use only.

## Structure

```
xcel-energy-mock/
├── index.html
├── styles.css
├── script.js
└── assets/
    └── logo.svg
```

## Run locally

Just open `index.html` in a browser, or serve it:

```bash
cd xcel-energy-mock
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Host on GitHub Pages

1. Push this folder to a GitHub repo (or push it as the repo root).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
4. Pick the branch (e.g. `main`) and folder (`/` if this is the repo root, or
   move the contents of `xcel-energy-mock/` to the repo root — GitHub Pages
   folder deploys only support `/` or `/docs`).
5. Save — your site will be live at `https://<username>.github.io/<repo>/`
   within a minute or two.
