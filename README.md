# Murali G — Portfolio

Static personal portfolio site built with plain HTML, CSS, and JS — no framework, no backend, deployable directly on GitHub Pages.

## Structure
- `index.html` — single-page shell; all sections render client-side via hash routing (#home, #about, #skills, #experience, #projects, #projects/<slug>, #achievements, #resume, #contact)
- `style.css` — design system (colors, type, layout)
- `script.js` — content data + router/renderer
- `assets/resume.pdf` — add your exported resume PDF here (referenced by the Resume section's download button)

## Deploy on GitHub Pages
1. Create a repo named `yourusername.github.io` (replace with your actual GitHub username).
2. Push these files to the repo root (`index.html` must be at the top level).
3. In the repo, go to **Settings → Pages**, set source to the `main` branch, root folder.
4. Your site goes live at `https://yourusername.github.io` within a minute or two.

## Editing content
All copy lives in the `DATA` object at the top of `script.js` — edit names, bullets, and project details there rather than in the HTML.

### Known placeholder
The **Healthcare Steering Wheel** project page is drafted content (marked with a note on the page) since it wasn't in the source resume — replace it with your actual build details, sensor choices, and results.
