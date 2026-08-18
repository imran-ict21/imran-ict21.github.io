# Imran Hossen — Personal Portfolio

A modern, responsive personal portfolio website for **Imran Hossen** — Undergraduate ICT
Student, Competitive Programmer, and Aspiring Software Engineer. Built as a static site so
it can be hosted for free on **GitHub Pages**.

Live URL (after deployment): `https://imran-ict21.github.io/`

---

## 1. Project Overview

This is a single-page portfolio covering:

- Hero introduction with a code-editor-styled visual and profile photo
- About, Education, Technical Skills
- Featured Projects and projects currently in progress
- Areas of Interest, Strengths, Languages
- GitHub call-to-action and Contact section
- Dark mode (default) / Light mode toggle, saved across visits
- Fully responsive layout for desktop, tablet, and mobile

No backend, database, or build step is required — just static HTML, CSS, and JS.

---

## 2. Technologies Used

- **HTML5** — semantic structure
- **CSS3** — custom properties (design tokens), Grid/Flexbox layout, responsive media queries
- **Vanilla JavaScript** — theme toggle, mobile menu, scroll reveal, active-link highlighting
- **Google Fonts** — Space Grotesk (headings), Inter (body), JetBrains Mono (code/labels)
- **Lucide Icons** (CDN) — lightweight icon set

All third-party assets are loaded from a CDN and are optional enhancements — the page
still works if a CDN request fails.

---

## 3. Folder Structure

```
imran-portfolio/
│
├── index.html                  Main page (all sections)
├── style.css                   All styling, design tokens, responsive rules
├── script.js                   Theme toggle, navigation, animations
├── README.md                   This file
│
├── assets/
│   ├── profile.jpg             Profile photo shown in the hero section
│   └── Imran_Hossen_Resume.pdf Resume, linked from the "Download Resume" button
│
└── .gitignore
```

---

## 4. How to Customize the Profile Image

1. Replace `assets/profile.jpg` with your own photo (keep the same filename, or
   update the `src` in `index.html` if you rename it).
2. A square-ish photo works best. The image automatically crops with
   `object-fit: cover`, so it will not stretch or distort.

## 5. How to Replace the Resume

1. Replace `assets/Imran_Hossen_Resume.pdf` with your updated resume, keeping the
   same filename — or update the `href` in the two places it's referenced inside
   `index.html` (`<a href="assets/Imran_Hossen_Resume.pdf" ...>`).

## 6. How to Edit Personal Information

All text content lives directly in `index.html`, organized by section (Hero, About,
Education, Skills, Projects, Contact, Footer — look for the `<!-- ===== SECTION ===== -->`
comments). Update the text between the HTML tags. Contact links (`mailto:`, GitHub,
LinkedIn) are plain `<a href="...">` tags near the top and bottom of the file.

## 7. How to Deploy on GitHub Pages

**Step-by-step (beginner-friendly):**

1. **Create a GitHub repository**
   - Go to [github.com/new](https://github.com/new)
   - Repository name: `imran-ict21.github.io` (this exact name publishes the site
     at `https://imran-ict21.github.io/`)
   - Set it to **Public**, then click **Create repository**

2. **Upload the files**
   - On the new repository page, click **Add file → Upload files**
   - Drag in `index.html`, `style.css`, `script.js`, `README.md`, `.gitignore`,
     and the whole `assets` folder (with `profile.jpg` and
     `Imran_Hossen_Resume.pdf` inside it)
   - Scroll down and click **Commit changes**

3. **Add the profile image** — already included if uploaded in step 2
   (`assets/profile.jpg`)

4. **Add the resume** — already included if uploaded in step 2
   (`assets/Imran_Hossen_Resume.pdf`)

5. **Enable GitHub Pages**
   - Go to the repository's **Settings → Pages**
   - Under "Build and deployment," set **Source** to `Deploy from a branch`
   - Set **Branch** to `main` and folder to `/ (root)`, then click **Save**

6. **Open the portfolio URL**
   - Wait 1–2 minutes, then visit `https://imran-ict21.github.io/`
   - If the repository is named something else, the URL will instead be
     `https://imran-ict21.github.io/<repository-name>/`

---

## 8. How to Change Theme Colors

All colors are defined once as CSS custom properties at the top of `style.css`:

```css
:root {
  --bg: #0a0e17;
  --accent-blue: #4c8dff;
  --accent-cyan: #22d3ee;
  --accent-purple: #a78bfa;
  /* ... */
}

[data-theme="light"] {
  --bg: #f7f9fc;
  /* ... */
}
```

Edit the hex values in `:root` (dark mode) and `[data-theme="light"]` (light mode)
to change the palette site-wide — every section reuses these tokens.

## 9. How to Add New Projects

Duplicate a `<article class="project-card">...</article>` block inside the
**Featured Projects** section of `index.html`, then update:

- The icon (`data-lucide="..."`, see [lucide.dev/icons](https://lucide.dev/icons) for names)
- Title, description, and feature list
- Technology tags (`<span class="tag">...</span>`)
- The GitHub button — replace the disabled "Repository Coming Soon" button with a
  real link once the repository exists:

```html
<a href="https://github.com/imran-ict21/your-repo" target="_blank" rel="noopener" class="btn btn--ghost">
  <i data-lucide="github"></i> View Repository
</a>
```

For "Currently Working On" cards, duplicate a `.progress-card` block inside the
`#progress` section in the same way.

---

## Notes

- The contact form is intentionally a `mailto:` link rather than a form with a
  backend, since GitHub Pages only serves static files.
- Dark mode is the default theme; the visitor's choice is remembered via
  `localStorage`.
- All animations respect `prefers-reduced-motion` for accessibility.
