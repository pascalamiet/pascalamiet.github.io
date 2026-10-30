# Academic economist website

A simple, responsive academic website for GitHub Pages. No installation, build step, external fonts, or runtime dependencies. The homepage contains Pascal Amiet’s research, teaching, and contact information; `cv.html` remains an unused template.

## Preview

Run `python3 -m http.server 8765` from this folder, then open `http://127.0.0.1:8765/`. Changes appear after refreshing.

## Personalize

1. Edit `index.html`: replace Your Name, position, university, biography, research interests, and contact details. Update the page title and description in `<head>` too.
2. Edit the Work in progress entries in `index.html`. Duplicate an `<article class="paper">` to add a project. Research is currently a simple list without filters or empty categories.
3. Create a `papers` folder, add your PDFs, and add links such as `<a class="text-link" href="papers/my-paper.pdf">Paper (PDF) ↗</a>` inside the relevant paper body. Use relative links without a leading slash so the site works under a repository subpath.
4. The CV navigation link in `index.html` opens the full CV on Dropbox. Update its URL when needed. `cv.html` is a retained standalone template and is not linked from the homepage. Its print button opens the browser print dialog; choose Save as PDF to export it. Alternatively, add your existing PDF as `cv.pdf` and point the CV links in both HTML files to it.
5. Replace the placeholder email in both the visible text and `mailto:` links. Remove the sample-content notices after replacing all sample content.
6. Change the colors at the top of `styles.css` if desired. Adjust `--portrait-zoom` there to change the portrait crop. The portrait is `pictures/comic-v3-expanded.png`, displayed in the centered, sticky navigation bar. Replace that file or update the image path and alt text in `index.html` to change the portrait.

## Publish on GitHub Pages

Copy the contents of this folder into the root of your cloned repository, including `.nojekyll`. Keep any existing repository files you need. The homepage must be at the root of the publishing source, not inside an additional `economist-website` folder.

Commit and push the files. In your repository on GitHub, open **Settings → Pages**, choose **Deploy from a branch**, select **main** and **/ (root)**, and save. Your Pages settings will show the website address after deployment. A repository named `USERNAME.github.io` publishes at that address; other repository names normally publish at `USERNAME.github.io/REPOSITORY/`.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Files

- `index.html`: single-page introduction, research, teaching, and contact, with an external CV link
- `cv.html`: CV with print styling
- `styles.css`: layout, typography, colors, mobile and print styles
- `script.js`: current copyright year and print button
- `background.js`: Waves preset and reduced-motion handling
- `waves.js`: locally bundled animation renderer
- `.nojekyll`: tells GitHub Pages to serve these static files without Jekyll processing

The page and expandable abstracts work without JavaScript; the animated background and print button use JavaScript. You can also print the CV using your browser menu. All fonts are installed system fonts, so appearance can vary slightly across devices.

## Dynamic background

The homepage uses React Bits Waves, adapted to vanilla JavaScript with its original WebGL shaders. The selected preset is in `background.js`; all its settings can be edited there. `--background-opacity` in `styles.css` controls the overall strength (currently 0.12, washing the blue waves out against the white page). The canvas fills the viewport, animates autonomously, and never responds to mouse movement or clicks.

Preview through a local HTTP server (for example `python3 -m http.server 8765`), since ES modules do not load when opening the HTML directly from disk. GitHub Pages supports these modules without a build step. The background is hidden for reduced-motion preferences and printing; browsers without WebGL2 retain the plain background.

Source: https://github.com/DavidHDev/react-bits/blob/main/src/content/Backgrounds/Waves/Waves.jsx
Copyright (c) 2026 David Haz. The bundled license is in `licenses/react-bits-LICENSE.md`.
