# Murali G — Portfolio

A single-page portfolio site built as static HTML/CSS/JS — no build step, no framework, no backend. Deploys straight to GitHub Pages.

Live structure: sticky nav → hero → about → skills → featured projects (case studies) → "also built" → how-it-connects diagram → experience → achievements → education → résumé band → contact → footer.

---

## 1. Project structure

```text
portfolio/
├── index.html              All page content and structure
├── styles.css               All styling (design tokens at the top)
├── script.js                 Mobile nav, scroll-spy, reduced-motion handling
├── README.md
├── favicon/
│   └── favicon.svg           ECG-trace mark, used as the browser tab icon
└── assets/
    ├── resume/
    │   └── Murali_G_Resume.pdf   Linked from every "Resume" button
    ├── images/                   (empty — see note below)
    └── icons/                    (empty — all icons are inline SVG in index.html)
```

There's no `assets/images/og-card.png` file yet — `index.html` references one in its Open Graph tag (`<meta property="og:image" ...>`) for link-preview thumbnails on LinkedIn/Twitter/Slack. Generate a 1200×630 image (a screenshot of the hero section works well) and drop it at that path, or remove the tag if you don't need social previews.

---

## 2. Running it locally

No build tools required. Either:

- Open `index.html` directly in a browser, or
- Serve the folder so relative paths behave exactly like they will on GitHub Pages:

```bash
cd portfolio
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## 3. Customizing content

Everything is plain HTML in `index.html` — there's no CMS or data file to edit separately.

- **Text content** (hero copy, about, experience bullets, achievements): edit directly in the relevant `<section>`.
- **Colors, type, spacing**: all defined as CSS custom properties at the top of `styles.css` under `:root`. Change `--accent` to re-theme the whole site from one line.
- **Nav links**: `<ul class="nav-links">` in the header — add/remove `<li><a href="#id">Label</a></li>`, and make sure the target section has a matching `id`.

### Adding a new project

Copy one `<article class="project">...</article>` block under `#projects`, and update:

```html
<span class="project-badge">Your badge text</span>
<h3>Project name</h3>
<span class="project-year">Year or category</span>
<div class="project-links"><a href="https://github.com/...">View repository</a></div>
...
<div class="case-row"><span class="k">PROBLEM</span><span class="v">…</span></div>
<div class="case-row"><span class="k">APPROACH</span><span class="v">…</span></div>
<div class="case-row"><span class="k">STACK</span><span class="v"><div class="stack-row"><span class="tag">Tech</span>…</div></span></div>
<div class="case-row"><span class="k">RESULT</span><span class="v">…</span></div>
```

For a smaller, non-case-study project, add a `<div class="more-card">` under `.more-grid` instead — it only needs a heading, a short paragraph, and (optionally) a repo link.

### Updating the résumé

Replace `assets/resume/Murali_G_Resume.pdf` with a new export — the filename is referenced in four places in `index.html` (nav, hero, résumé band ×2), so keep the same filename or find-and-replace it.

---

## 4. Deploying to GitHub Pages

1. Push this `portfolio/` folder's contents to the root of a repository (e.g. `muralig-22/muralig-22.github.io` for a user site, or any repo for a project site).
2. In the repo: **Settings → Pages → Source** → select the branch (usually `main`) and folder (`/root`).
3. Save. GitHub will publish at `https://<username>.github.io/` (user site) or `https://<username>.github.io/<repo>/` (project site).
4. Wait a minute or two for the first build, then visit the URL.

### Custom domain (optional)

1. Add a `CNAME` file at the root containing just your domain, e.g. `muraliganesan.dev`.
2. At your DNS provider, add a `CNAME` record pointing your domain (or `www` subdomain) at `<username>.github.io`.
3. In **Settings → Pages**, enter the same custom domain and enable **Enforce HTTPS** once it's verified.

---

## 5. Design notes

**Typography** — Manrope (headings) paired with Inter (body/UI), loaded from Google Fonts. Manrope's geometric weight gives headings an engineered, confident feel without tipping into a "startup landing page" look; Inter stays highly legible at the small sizes used in the case-study tables.

**Color** — A warm off-white background (`#F7F5EF`) instead of pure white, deep charcoal text, and a single accent: a deep signal-teal (`#1E6E73`). The teal was chosen deliberately over a generic SaaS blue or gradient — it reads like an oscilloscope or ECG-monitor trace, which ties directly to the PPG/ECG work the portfolio is showcasing, without being a literal or cliché neon "medical green."

**Layout** — A subtle dot-grid background (very low opacity) evokes graph/schematic paper. Sections use hairline borders instead of drop shadows for separation — flatter, closer to a lab notebook or datasheet than a typical rounded-card SaaS template. Project case studies use a fixed label/value row structure (`PROBLEM / APPROACH / STACK / RESULT`) so a recruiter can scan just the left column and still get the shape of each project.

**Information hierarchy** — The hero commits to one sentence of positioning and pushes everything else (full experience, all projects, education) below the fold or behind the résumé link, per the "first screen" requirement: name → focus → primary CTA is visible with no scrolling.

**Interaction design** — Motion is limited to: a one-time draw-in animation on the hero's ECG trace (skipped entirely under `prefers-reduced-motion`), a scroll-spy underline on the active nav item, hover-state border/color shifts (no shadows growing on hover), and a slide-down mobile nav menu. Nothing auto-plays continuously or loops.

**Responsive strategy** — Fluid type via `clamp()` throughout, so headings scale smoothly instead of jumping at breakpoints. Grid-based sections (skills, achievements, "also built") collapse from 3 → 2 → 1 columns; the hero's two-column layout stacks with the waveform card moving above the text on mobile, since that's the more attention-grabbing element on a small screen.

**Accessibility decisions** — Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`), a skip-to-content link, one `<h1>` with a clean heading order down through `<h4>`, visible `:focus-visible` outlines (not suppressed), `aria-expanded`/`aria-controls` on the mobile nav toggle, and `prefers-reduced-motion` support. Text/background contrast throughout uses the charcoal-on-off-white pairing, which comfortably clears WCAG AA at body-text sizes.

---

## 6. Content strategy

The site is built to answer one question per section, in the order a recruiter actually reads: **who is this, what do they build, can they actually do it, did anyone else validate that, can I reach them.**

- **Hero** states the specific intersection (biomedical + embedded firmware) instead of a generic "aspiring engineer" line, plus a live status line (current internship, graduation year) so the "is this person available" question is answered immediately.
- **About** gives the academic + professional framing in three short paragraphs, backed by a stat strip (MCU families, hackathon prize, protocols, PCB tooling) so the claims in the prose are immediately backed by something concrete.
- **Skills** are grouped by where they actually show up in the shipped work (per the case studies below), not padded with every keyword from a job description — this keeps the list credible rather than decorative.
- **Featured projects** are written as case studies (`Problem → Approach → Stack → Result`) rather than a bullet-point project list, because that structure is what actually demonstrates engineering judgment — recognizing the constraint, explaining the design decision, and stating a real outcome — rather than just naming technologies used. Real GitHub links are included wherever a repository actually exists; nothing is linked speculatively.
- **"Also built"** exists so smaller, still-relevant projects (a compression pipeline, a hardware build, a voice pipeline) don't get lost, without diluting the main case-study section's density.
- **How it connects** is a single diagram addressing the "is this just a pile of unrelated projects" concern directly — it names the throughline (sensors → firmware → protocols → cloud → signal/ML) that the case studies above actually demonstrate.
- **Experience, Achievements, Education** stay in familiar, scannable formats (timeline, cards, grid) since by this point a recruiter is verifying rather than being persuaded — this is not where you want novel layout.
- **Résumé band + Contact** close the page with the two things a recruiter needs to act: the full document, and a direct way to reach out — both are one click away without hunting.
