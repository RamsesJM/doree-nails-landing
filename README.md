# Dorée Nails: Landing Page

A responsive landing page for a fictional nail salon. I built it as my first project to practice structuring a single-page site, styling it without a framework, and making it convert visitors into bookings.

The salon, its prices, address and phone number are made up. The goal was the page, not the business.

**Live demo:** _add your Netlify or GitHub Pages link here_

---

## What it includes

- Fixed navigation with a hamburger menu on small screens
- Hero section with a framed photo and a single clear call to action
- Services, gallery, price list and testimonials
- Gallery lightbox (click a photo to enlarge it, click or press Esc to close)
- Booking form that builds a message and opens WhatsApp
- Floating WhatsApp button
- Basic SEO and sharing tags (title, description, Open Graph)

## Tech stack and why I chose it

**Plain HTML, CSS and JavaScript (no framework).**
A landing page is one page with a little interactivity. React, Astro or Next.js would have added a build step and a lot of tooling for something that doesn't need it. Writing it by hand also forced me to learn what those tools abstract away: semantic markup, layout and DOM events. I plan to use a framework on the next project, where components and routing actually matter.

**CSS custom properties instead of Tailwind or Sass.**
All colors, fonts and the gold accent live in a handful of variables at the top of `style.css`. Changing the palette means editing a few lines. For a project this size, utility classes or a preprocessor would have been more setup than benefit.

**CSS Grid and Flexbox for layout.**
Grid handles the page sections (hero, services, gallery, reviews). Flexbox handles one-dimensional pieces like the navbar and price rows. No layout library was needed.

**Cormorant Garamond and Jost (Google Fonts).**
Nail work is a visual, slightly luxurious service, so I wanted a refined serif for headings. Cormorant has thin, elegant strokes that suit a minimalist look. Jost is a clean geometric sans that stays readable at body size. Two clearly different families keep the hierarchy obvious.

**Palette: white, warm stone, charcoal and a muted gold.**
The brief was minimalist with gold. To keep it minimal, gold is only used for small accents: buttons, thin lines, prices and the frame around the hero photo. Large areas stay white or light stone so the photos carry the page.

**WebP images.**
I converted the photos from JPEG to WebP and resized them. Each one went from several hundred KB to roughly 40 to 70 KB, which matters because the page is mostly photography. Gallery images use `loading="lazy"` so they only download when needed.

**WhatsApp instead of a backend form.**
A static site has no server to receive form submissions. Rather than add a third-party form service, I validate the fields in JavaScript and open a pre-filled WhatsApp message. It also matches how a small local business usually takes appointments.

**One entrance animation only.**
The hero fades in once on load. I avoided animating every section on scroll because it distracts from the photos and slows the page down. Animations are disabled for users who have "reduce motion" enabled.

**Vanilla JavaScript for the lightbox and menu.**
Both are small enough that a library would be heavier than the code itself.

## Project structure

```
doree-nails/
├── index.html      # Page structure and content
├── style.css       # Styles, variables and responsive rules
├── script.js       # Mobile menu, lightbox, form handling
├── img/            # Optimized WebP photos
└── README.md
```

## Running it locally

No installation is needed.

1. Clone or download the repository.
2. Open the folder in VS Code.
3. Right-click `index.html` and choose **Open with Live Server** (extension by Ritwick Dey), or just open `index.html` in a browser.

## Customizing it

- **Colors and fonts:** edit the variables in `:root` at the top of `style.css`.
- **WhatsApp number:** replace `18090000000` in `index.html` and `script.js`.
- **Content:** prices, hours and address are in `index.html`.
- **Photos:** replace the files in `img/` keeping the same names, or update the `src` attributes.

## Responsive behavior

The layout adapts at two breakpoints: 900px (the menu collapses and multi-column sections stack or drop to two columns) and 520px (services become a single column). I checked it using the browser's device toolbar.

## Accessibility notes

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`)
- Descriptive `alt` text on every image
- Visible keyboard focus styles
- Form messages announced with `aria-live`
- Motion respects `prefers-reduced-motion`

## What I would improve next

- Embed a Google Map and add online scheduling (I deliberately left these out to keep this project focused)
- Rebuild it with Astro and Tailwind CSS, or Next.js, using reusable components
- Store bookings in a database such as Supabase instead of relying on WhatsApp
- Add a Spanish and English language switch
- Run a full Lighthouse and contrast audit and fix whatever it reports

## Credits

The sample photos are placeholders used only for this practice project and belong to their original authors. They are not licensed for reuse. Replace them with your own images before using any part of this design commercially.

The salon name "Dorée" is fictional.
