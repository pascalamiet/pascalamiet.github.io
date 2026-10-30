# Academic economist website

A simple, responsive academic website for GitHub Pages. No installation, build step, external fonts, or dependencies. The sample research, appointments, courses, and contact details are illustrative.

## Preview

Open `index.html` in your browser. Changes to the files appear after refreshing.

## Personalize

1. Edit `index.html`: replace Your Name, YN (the initials), position, university, biography, research interests, and contact details. Update the page title and description in `<head>` too.
2. Replace the sample papers and courses. Duplicate or remove an entire `<article class="paper">` for each paper; use `data-type="working"` or `data-type="published"` so the filters work. Update both the visible tag and the year. Put abstracts inside `<details>`.
3. Create a `papers` folder, add your PDFs, and add links such as `<a class="text-link" href="papers/my-paper.pdf">Paper (PDF) ↗</a>` inside the relevant paper body. Use relative links without a leading slash so the site works under a repository subpath.
4. Edit `cv.html` to match your actual CV. Its print button opens the browser print dialog; choose Save as PDF to export it. Alternatively, add your existing PDF as `cv.pdf` and point the CV links in both HTML files to it.
5. Replace the placeholder email in both the visible text and `mailto:` links. Remove the sample-content notices after replacing all sample content.
6. Change the colors at the top of `styles.css` if desired. For a headshot, replace the monogram div with an image, e.g. `<img src="portrait.jpg" alt="Your Name" style="width:100%;height:auto;display:block;margin-bottom:27px">`, and place the image beside `index.html`.

## Publish on GitHub Pages

Copy the contents of this folder into the root of your cloned repository, including `.nojekyll`. Keep any existing repository files you need. The homepage must be at the root of the publishing source, not inside an additional `economist-website` folder.

Commit and push the files. In your repository on GitHub, open **Settings → Pages**, choose **Deploy from a branch**, select **main** and **/ (root)**, and save. Your Pages settings will show the website address after deployment. A repository named `USERNAME.github.io` publishes at that address; other repository names normally publish at `USERNAME.github.io/REPOSITORY/`.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Files

- `index.html`: homepage, research, teaching, and contact
- `cv.html`: CV with print styling
- `styles.css`: layout, typography, colors, mobile and print styles
- `script.js`: research filters, current copyright year, and print button
- `.nojekyll`: tells GitHub Pages to serve these static files without Jekyll processing

The page and expandable abstracts work without JavaScript; the research filters and print button use JavaScript. You can also print the CV using your browser menu. All fonts are installed system fonts, so appearance can vary slightly across devices.
