# JAW 2026 — Joint APPCAIR Workshop

Website for the second edition of the Joint APPCAIR Workshop, hosted by APPCAIR at
BITS Pilani, Pilani Campus on **14-15 August 2026**.

## How it works

Plain static HTML, CSS and JavaScript. No build step, no framework, no dependencies.
Push to `main` and GitHub Pages redeploys within a minute or two.

```
index.html        the single-page site (all sections)
hackathon.html    "details coming soon" stub
posters.html      "details coming soon" stub
styles.css        all styling, driven by CSS custom properties at the top
script.js         theme toggle and mobile menu
assets/
  favicon.svg
  logos/          BITS Pilani crest, APPCAIR mark and lockup
  speakers/       speaker headshots, square JPEGs
```

## Editing content

Everything on the front page lives in `index.html`, grouped under commented section
banners (`<!-- Speakers Section -->` and so on). Open it in any editor, change the text,
commit.

### Adding a speaker

Copy an existing `<div class="team-member">` block in the Speakers section and edit the
name, institution and day. Only add speakers who have confirmed.

Put the headshot in `assets/speakers/` as a square image (500x500 works well) and point
the `<img>` at it:

```html
<div class="team-member__image">
    <img src="assets/speakers/surname.jpg" alt="Prof. Example Name">
</div>
```

The circular crop is applied automatically. If a photo is not available yet, use initials
instead:

```html
<div class="team-member__image">
    <span class="team-member__image-placeholder">XY</span>
</div>
```

### Filling in a stub page

`hackathon.html` and `posters.html` share the same layout. Replace the
`<section class="content-section stub-page">` contents with the real details, then remove
the `<span class="pill">Coming soon</span>` badge from the matching card in the "Take Part"
section of `index.html`.

### Adding sponsor logos

Add a second `.supported-by` block (copy the one in the hero) with a
`With Support From` label, and drop logo files into `assets/logos/`.

### Colours

All colours are CSS custom properties in the `:root` block at the top of `styles.css`.
`--accent` is the APPCAIR brand indigo `#2E3192`, sampled from the official APPCAIR
lockup. Changing it (and the `[data-theme="dark"]` override just below) reskins the
whole site.

## Running locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Still to confirm

- Talk titles and abstracts for the confirmed speakers
- Photo for Manoj Agarwal (Gika AI); currently an initials placeholder
- Hackathon theme, format, eligibility, timeline, prize details
- Call for posters: deadline, format, submission route, cross-campus participation
- Travel and accommodation detail for the Venue section (the airport and railhead
  distances currently on the page are approximate and should be checked)
- Sponsor logos, once confirmed
