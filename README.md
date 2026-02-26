# Rasa Cake Studio

Website for **Rasa Cake Studio** — a homemade cake shop by a Sri Lankan American immigrant. Dark, minimal design with Sri Lankan flag colors; gallery and contact form.

## Quick start

1. **Local preview**  
   Open `index.html` in a browser, or serve the folder with a local server:
   ```bash
   npx serve .
   # or: python -m http.server 8000
   ```
2. **Edit content**  
   Edit `index.html` for copy and gallery images. Styles in `styles.css`, behavior in `script.js`.

---

## Tech stack (current)

- Static HTML/CSS/JS
- No build step required
- Ready to deploy to any static host

## Future: Ghost CMS & Instagram

- **Ghost**  
  For non-technical updates (blog posts, pages), you can later move content into [Ghost](https://ghost.org) and either:
  - Use Ghost’s hosted theme and point your domain there, or
  - Use Ghost’s Content API to pull posts into this site (would require a small build step or serverless function to fetch and render).
- **Instagram**  
  To sync photos from Instagram:
  - [Instagram Basic Display API](https://developers.facebook.com/docs/instagram-basic-display-api) (personal accounts), or
  - [Instagram Graph API](https://developers.facebook.com/docs/instagram-api) (business/creator accounts).  
  Implement a small backend or serverless job that fetches media and writes image URLs (or JSON) that this site’s gallery can load (e.g. replace the static gallery in `index.html` with JS that renders from that data).

---

## CI/CD and deployment

### GitHub Pages (current setup)

The repo includes a GitHub Actions workflow that deploys the site on every push to `main`.

1. **Push this repo to GitHub** (create a new repo and push, or use an existing one).
2. **Turn on GitHub Pages:** Open the repo on GitHub → **Settings** → **Pages**. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. **Trigger a deploy:** push to the `main` branch (or run the workflow from the **Actions** tab).

Your site will be at **`https://<username>.github.io/rasastudio/`** (if the repo is named `rasastudio`). For a user/org site, use a repo named `<username>.github.io` and the URL is `https://<username>.github.io/`.

**Contact form:** On GitHub Pages the form only shows a "Thank you" message (no emails). To collect submissions, use [Formspree](https://formspree.io) or move to Netlify and use Netlify Forms.

---

### Other options (later)

- **Netlify:** Import the repo, publish directory `/`. Netlify Forms will capture the contact form (already wired in the HTML).
- **Vercel:** Import the repo and deploy; no build step needed.

---

## Project structure

```
rasastudio/
├── index.html      # Main page (hero, about, gallery, contact)
├── styles.css      # Dark theme, Sri Lankan colors
├── script.js       # Menu, form, lightbox
├── logo.svg        # Rasa Cake Studio logo
├── img/            # Gallery images (sample cakes)
├── spec.md         # Original brief
└── README.md       # This file
```

## Contact form (production)

The form currently only shows a success message. To collect submissions:

- **Netlify:** Add Netlify Forms (see above).
- **Formspree / Getform / similar:** Set the form `action` to their endpoint and method to `POST`.
- **Ghost + custom backend:** Add a small API (e.g. serverless) that receives the form and stores or emails the data; point the form `action` there.

---

© Rasa Cake Studio. Homemade cakes · Sri Lankan American baking.
