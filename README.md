# Nia C. Rolley — Portfolio Site

A static personal website built with plain HTML, CSS, and vanilla JavaScript
— no frameworks, no build step. Every file is readable and editable on its
own.

## File structure

```
portfolio-site/
├── index.html              Home page
├── about.html               About page
├── work.html                 Work / experience page
├── skills-and-values.html    Skills & Values page
├── education.html            Education page
├── writing.html               Writing page (marked "coming soon")
├── currently.html             "What I'm up to right now" page
├── css/
│   └── style.css              All site styling (colors, fonts, layout)
├── js/
│   └── main.js                 Nav highlighting + mobile menu toggle
└── assets/                      Put images (e.g. a headshot) here later
```

Each HTML page is self-contained and repeats the same header/nav and
footer. That's intentional for a small site like this — it's simpler to
read than a templating system, at the cost of having to copy-paste the
header/footer if you ever want to change the nav links (find-and-replace
across all `.html` files works fine for that).

## How to edit things

- **Text content**: open the relevant `.html` file and edit the text
  between the tags. Most content lives inside `<p>`, `<h1>`/`<h2>`/`<h3>`,
  and `<li>` tags.
- **Colors and fonts**: open `css/style.css` and look at the top section
  labeled `1. VARIABLES`. Every color and font on the site is defined
  there once — change a value there and it updates everywhere.
- **Adding a new page**: copy an existing `.html` file (e.g.
  `education.html`), rename it, replace the `<main>` content, and add a
  link to it in the `<nav>` block of every page (including the new one).
- **Publishing a new Writing piece**: in `writing.html`, find the
  `<article class="card-coming-soon">` block for that piece, and either
  edit it in place or swap it for a regular `<article class="card">`
  (see `work.html` for an example of that styling) once you have real
  content and a link.

## Running it locally

No build tools or installs needed. Either:

- Double-click `index.html` to open it directly in a browser, or
- From this folder, run a tiny local server so relative links behave
  exactly like they will once deployed:
  ```
  python3 -m http.server 8000
  ```
  then visit `http://localhost:8000` in your browser.

## Deploying

**GitHub Pages** (free, ties to a GitHub repo):
1. Push this folder to a GitHub repository.
2. In the repo, go to Settings → Pages.
3. Under "Build and deployment," set Source to "Deploy from a branch,"
   pick your main branch and the `/ (root)` folder, then save.
4. GitHub will give you a URL like `https://yourusername.github.io/repo-name/`.

**Netlify** (free, drag-and-drop):
1. Go to [netlify.com](https://netlify.com) and sign in.
2. Drag this entire `portfolio-site` folder onto the Netlify dashboard.
3. Netlify deploys it instantly and gives you a URL. You can later
   connect a custom domain from the site settings.

Either option works well for a static site like this — pick whichever
fits how you want to manage updates (GitHub Pages if you're comfortable
with `git push`; Netlify if you'd rather drag-and-drop or connect a repo
for auto-deploys later).
