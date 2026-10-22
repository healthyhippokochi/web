# Healthy Hippo Website Starter

This is a simple, responsive, multi-page static website built from the information and images supplied by Healthy Hippo.

## Pages
- `index.html` — Home
- `menu.html` — Menu and prices
- `about.html` — About Healthy Hippo
- `contact.html` — Contact details
- `franchise.html` — Franchise information and a button linking to the Google Form

## How to preview
Open `index.html` in a web browser. The pages use local image assets in `assets/`.

## Publish using GitHub Pages (no coding required for routine updates)
1. Sign in to GitHub and create a new repository, for example `healthyhippo-website`.
2. Choose to upload files, then upload the contents of this folder (the HTML files, `styles.css`, `script.js`, `README.md`, and `assets` folder).
3. In the repository, open **Settings → Pages**.
4. Under build and deployment, select **Deploy from a branch**, choose `main` and `/ (root)`, then save.
5. Wait for GitHub Pages to publish the site. The published URL will appear in Settings → Pages.
6. A custom domain such as `healthyhippo.co.in` can be connected later in Settings → Pages after the domain is registered and DNS records are configured.

## Important before publishing
- Verify that each item truly has 32g protein per serving and decide which items qualify for a low-carb claim. The menu image supplied shows 32g for all items, but nutrition claims should be verified.
- The franchise enquiry form currently prepares an email (`mailto:`). It does not save submissions to a database. Before launch, connect a form service or backend so enquiries can be received reliably even if a visitor has no email app configured.
- Confirm the Swiggy and Zomato links and social media URL work correctly.
- The logo supplied has a dark background; the design uses it in compact logo placements.
- Prices are based on the menu poster supplied and should be checked before launch.


## Franchise enquiry and future location pages
- The franchise page now has a **Franchise Enquiry** button rather than an embedded form.
- In `franchise.html`, replace `https://forms.gle/REPLACE_WITH_YOUR_FORM_ID` with the real Google Forms share link before publishing.
- Future franchise landing pages can be added as separate pages, for example `franchise-kakkanad.html`, `franchise-kochi.html`, and so on, each with its own location details, phone, opening hours, menu and ordering links. For a larger franchise network, a CMS or database-backed site can make updates easier.


## Latest update: celebrity slideshow, Google Maps and mobile ordering
- The homepage hero now uses the supplied Healthy Hippo photo set as an automatic slideshow (4-second interval) with next/previous controls and dots.
- Swiggy and Zomato now have separate, always-visible hero buttons that stack on narrow mobile screens.
- Contact page includes an embedded general map search for Healthy Hippo in Kakkanad and a direct directions link using the Google Maps link supplied by the owner.
- Replace or add slideshow photos in `assets/` and update the image list in `index.html` plus the dots if you add/remove slides.
- Please use celebrity/customer photos only where you have permission for promotional use, and avoid implying an endorsement unless it is authorized.


## Adding photos to the homepage slideshow

You only need to edit the `PHOTO_LIST` near the bottom of `script.js`:

1. Upload the new photo into the `assets/` folder (JPG or WebP recommended).
2. Add one line inside `PHOTO_LIST`, using the exact filename, for example:
   `{ src: 'assets/celebrity-09.jpg', alt: 'Healthy Hippo community photo' },`
3. Save the file and redeploy the site. The slideshow images and navigation dots are generated automatically from this list.
4. Keep the comma at the end of each line, and make sure the filename matches the uploaded file exactly.

Adding a file to `assets/` alone is not enough; it must also be listed in `PHOTO_LIST`. Use photos only when you have permission to publish them, especially for identifiable people or endorsements.
