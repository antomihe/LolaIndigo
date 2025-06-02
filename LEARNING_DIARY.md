# 🎤 Lola Indigo - Unofficial Website: Learning Diary 🚀

**Developer:** Antonio Miguel Herrero
**Project Link:** [https://antomihe.github.io/LolaIndigo/](https://antomihe.github.io/LolaIndigo/)

This diary documents the development process of the unofficial Lola Indigo website.

---

## 🗓️ Commit 1: Project Kick-off & Basic Structure

**Commit Date:** 25/05/2025
**Commit Hash:** `b8c75d0a68a8737bf988f3d5916c3fea9aa86bfb`
**Original Message:** `feat: Initial project setup and basic HTML structure`

**🎯 Goal:**
Establish the foundational HTML structure for the entire website.

**🛠️ Achieved:**
*   Created the main `index.html` file.
*   Set up the basic HTML5 boilerplate (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`).
*   Outlined the primary `div` containers for the header, main content wrapper, individual content sections, and footer.
*   Linked an initially basic `styles.css` file.

---

## 🗓️ Commit 2: Visual Foundation & Core Meta
**Commit Date:** 26/05/2025 (Morning)
**Commit Hash:** `ed1feacb9dca635f00a9405d130bd3413a198554`
**Original Message:** `feat: Implement video background, meta tags, favicon, and basic global styles`

**🎯 Goal:**
Establish the site's core visual identity with a video background, add essential metadata, and set up global styling defaults.

**🛠️ Achieved:**
*   📺 Implemented a dynamic video background using the `<video>` element with `muted`, `autoplay`, and `loop` attributes.
*   🎨 Added a `.background-overlay` div for improved text legibility over the video.
*   📄 Included crucial `<meta>` tags (charset, viewport, SEO-related keywords/description, author, theme-color).
*   ✨ Linked the `favicon.ico`.
*   💅 Imported Bootstrap Icons via CDN and the "Montserrat" Google Font for typography.
*   🖌️ Applied initial global CSS for `body` styling, default font, and basic styling for the `.wrapper` and hero section elements.
*   🌟 Styled the main hero section, incorporating the Lola Indigo text logo image and a call-to-action button.

---

## 🗓️ Commit 3: Header Navigation & Language Switcher Structure
**Commit Date:** 26/05/2025 (Afternoon)
**Commit Hash:** `e67e39e7fd621e6ff73f368661191b90e6fe26d2`
**Original Message:** `feat: Implement header navigation and language dropdown structure`

**🎯 Goal:**
Build out the main header navigation for desktop view and create the HTML/CSS structure for the language selection dropdown.

**🛠️ Achieved:**
*   🌐 Added HTML for the language dropdown button and its options (EN, ES, FI), including ARIA attributes for accessibility (`aria-haspopup`, `aria-expanded`).
*   🧭 Structured the main navigation bar (`<nav class="navbar">`) using semantic `<ul>`, `<li>`, and `<a>` elements, linking to all key site sections.
*   💅 Applied CSS for:
    *   `header` layout (sticky positioning, flexbox for alignment).
    *   `language-dropdown` appearance and basic positioning.
    *   `navbar` and `menu` item styling, including a CSS-only underline hover effect for links.
*   🏷️ Incorporated `data-translate-key` attributes on navigation links and the hero button, anticipating future internationalization.
*   🖱️ Implemented basic JavaScript to toggle the visibility of the language dropdown content on button click, and to close it if clicking outside.


---

## 🗓️ Commit 4: Crafting the Bio Section
**Commit Date:** 27/05/2025 (Morning)
**Commit Hash:** `b53489899739c6f3b75e613b9ccdf44d58d9f088`
**Original Message:** `feat: Populate and style Bio section with image and text placeholders`

**🎯 Goal:**
Develop and style the "Bio" section, including image and placeholder text.

**🛠️ Achieved:**
*   🖼️ Added HTML for the Bio section, featuring:
    *   An artist image (`./media/front.png`).
    *   A left-aligned section title (`/BIO`).
    *   Brand-colored decorative dividers.
    *   Placeholder paragraphs (`<p data-translate-key="...">Lorem ipsum...</p>`) for the biography.
*   📐 Utilized CSS Grid (`display: grid`) for the two-column layout, effectively positioning the image and text block.
*   💅 Styled the artist image (rounded corners, `max-width`), the bio information text block, and the dividers.

---

## 🗓️ Commit 5: Bringing Music with Spotify Embeds
**Commit Date:** 27/05/2025 (Afternoon)
**Commit Hash:** `2145d8bbc734fbfc2741fc26ccc6fc0f581bc1eb`
**Original Message:** `feat: Implement Music section with Spotify album embeds`

**🎯 Goal:**
Integrate playable music into the "Music" section using Spotify `<iframe>` embeds.

**🛠️ Achieved:**
*   🎶 Added HTML structure for the Music section, including its centered title (`/MUSIC`).
*   🎧 Embedded two Spotify album players via their `<iframe>` code.
*   🧱 Utilized a `.container-one` flexbox container to arrange the Spotify embeds, allowing them to sit side-by-side on wider screens and stack on narrower ones.

**💡 Demonstrated Learnings & Skills:**
*   Integration of third-party content using iframes.
*   Application of CSS Flexbox for creating responsive and adaptable layouts for embedded content.
*   Understanding of how to style containers around iframes to control their presentation.
*   Use of `loading="lazy"` attribute on iframes, demonstrating an awareness of page performance optimization.

---

## 🗓️ Commit 6: Visualizing with Video Clips
**Commit Date:** 28/05/2025
**Commit Hash:** `ad8bbb8ec40d87b306d128a230dd9dea3ca9146f`
**Original Message:** `feat: Implement Clips (Videos) section with thumbnails and links`

**🎯 Goal:**
Develop the "Clips" (Videos) section to showcase music video thumbnails with links to YouTube.

**🛠️ Achieved:**
*   🎬 Added HTML for the Clips section with its title (`/CLIPS`).
*   🎞️ Created `.video-row` flexbox containers to organize the clips into a responsive grid-like structure.
*   🖼️ Added six individual `.clips` items. Each item includes:
    *   An `<a>` tag linking to the corresponding YouTube video (`target="_blank"`).
    *   An `<img>` element for the video thumbnail, with appropriate `alt` text.
    *   An `<h2>` for the video title.
    *   An `<h3>` for the release year.
*   ➡️ Included a "VIEW ALL CLIPS" button (`<button class="view-all-clips-btn">`) linking to Lola Indigo's official YouTube channel.
*   💅 Styled:
    *   The overall `.videos` section for consistent padding and max-width.
    *   The `.video-row` for flex layout (wrap, justify, gap).
    *   Individual `.clips` items (`flex-basis`, `min-width`, text alignment, image styling including `aspect-ratio` and a `transform: scale()` hover effect).
    *   The `.view-all-clips-btn` for distinct visual presentation.


---

## 🗓️ Commit 7: Announcing Shows & Ticket Status
**Commit Date:** 29/05/2025
**Commit Hash:** `6ebd948a1a52074bb1688e4ffd894dbae81f2bea`
**Original Message:** `feat: Implement Shows section with event listings and ticket buttons`

**🎯 Goal:**
Create the "Shows" section to display upcoming concert information and ticket availability.

**🛠️ Achieved:**
*   🎟️ Added HTML for the Shows section, including its title (`/SHOWS`).
*   📅 Created a `.shows-grid` (using CSS Grid: `repeat(auto-fit, minmax(280px, 1fr))`) to display event listings in a responsive card-like format.
*   🎫 Added three example show items (`.container-tickets.show-item-lola`). Each item details:
    *   Date (`<h2 data-translate-key="...">`).
    *   Venue (`<h3 data-translate-key="...">`).
    *   City (`<p data-translate-key="...">`).
*   💰 Each show item includes a button:
    *   Either an `<a>` wrapped button for "TICKETS".
    *   Or a `disabled` `<button>` for "SOLD OUT", styled distinctly using the `.tickets-lola-sold-out` class.
*   💅 Styled:
    *   The `.shows-section` and `.shows-grid` for layout and spacing.
    *   Individual show items (`.show-item-lola`) with a light background, rounded corners, and brand color for the date, using flexbox internally for content alignment.
    *   The ticket buttons (`.tickets-lola`) with clear visual states for active (brand color background) and sold-out/disabled (muted colors, `cursor: not-allowed`).

---

## 🗓️ Commit 8: Interactive FAQ Accordion
**Commit Date:** 30/05/2025
**Commit Hash:** `84fe200954c435371c613fcf0d6fc0a4b31932d8`
**Original Message:** `feat: Implement FAQ section with interactive accordion`

**🎯 Goal:**
Build an interactive "FAQ" section using an accordion UI pattern for improved content organization.

**🛠️ Achieved:**
*   ❓ Added HTML for the FAQ section with its title (`/FAQ`).
*   🧱 Created an `.accordion-container` to group the FAQ items.
*   ➕ Added five `.accordion-item` elements. Each consists of:
    *   A clickable `<button class="accordion-header">` containing the question text and an icon `<span>`.
    *   An `<div class="accordion-content">` containing the answer paragraph.
    *   `aria-expanded` attributes on headers, dynamically updated by JavaScript for accessibility.
*   💅 Styled the FAQ section, accordion container, items (borders, background), headers (including hover state), icons (CSS transform for rotation), and content areas (`max-height: 0` and `overflow: hidden` for the collapse/expand animation).
*   ⚙️ Implemented JavaScript for the accordion functionality:
    *   Event listeners on each header to toggle an `.open` class on the parent `.accordion-item`.
    *   Logic to close any other open accordion items, ensuring only one is expanded at a time.
    *   Dynamically set `content.style.maxHeight` to `content.scrollHeight + "px"` when opening, and `null` when closing, to achieve a smooth CSS transition.
    *   Updated `aria-expanded` attribute values based on the open/closed state.

---

## 🗓️ Commit 9: Contact Form & Social Footer
**Commit Date:** 31/05/2025 (Afternoon - Part 1)
**Commit Hash:** `524cd25ec268e16240f17f1b23e5a6ee5d01daf8`
**Original Message:** `feat: Implement Contact section with form and Footer with social media links`

**🎯 Goal:**
Develop the "Contact" section with a functional-looking form and complete the website footer by adding social media links.

**🛠️ Achieved:**
*   **📞 Contact Section:**
    *   Structured HTML for the Contact section within a `.container-contact` (using flexbox for image & form layout).
    *   Included an image (`./media/contact.png`), title, descriptive paragraph, and a `<form>` element.
    *   The form contains `input` fields for Name (text) and Email (email type), a `textarea` for the Message, all with `required` attributes and `placeholder` text. A "Send" `<button type="submit">` is also included.
    *   Styled the `.contact-section`, `.container-contact` (gap, alignment), `.contact-form` (flex properties), and all form elements (`input`, `textarea`, `.btn-submit`) for consistent visual appearance, including focus states.
*   **👣 Footer:**
    *   Added HTML for a `.social-links-container` within the `<footer>`.
    *   Included five `<a>` tags, each styled as a `.social-icon`, linking to Instagram, X (Twitter), Spotify, YouTube, and TikTok. Each link has an `aria-label` for accessibility.
    *   Styled the social links container (flexbox for centering) and individual `.social-icon` elements: circular shape, border, background images for each platform, and a hover effect (`transform: translateY`).

---

## 🗓️ Commit 10: Mobile Polish & Multilingual Magic ✨
**Commit Date:** 31/05/2025 (Afternoon - Part 2)
**Commit Hash:** `90e1d156cacc99c277dab722e05d6cdcd875935a`
**Original Message:** `feat: Implement mobile navigation, multi-language support, and responsive CSS adjustments`

**🎯 Goal:**
Finalize core features by implementing mobile responsiveness (hamburger menu), full multi-language JavaScript functionality, populating actual translation content, and refining responsive CSS across all sections.

**🛠️ Achieved:**
*   **📱 Mobile Menu (Hamburger):**
    *   Added HTML for open (`.open-menu-btn`) and close (`.close-menu-btn`) menu buttons within the `<header>`, utilizing Bootstrap Icons.
    *   Implemented CSS for the mobile navigation:
        *   Conditional display of open/close buttons based on screen size (`display: none` / `display: block`).
        *   Styling for the full-screen mobile navigation overlay (`.navbar.visible`): `position: fixed`, background, opacity/visibility transitions.
        *   Styling for menu items in the mobile view (larger text, centered).
    *   Added JavaScript to:
        *   Toggle the `.visible` class on the `.navbar` to show/hide the mobile menu.
        *   Automatically close the mobile menu when an internal navigation link (e.g., `#bio`) is clicked, improving single-page navigation UX.
*   **🌍 Multi-language Functionality:**
    *   Created the `translations` JavaScript object, populating it with text strings for English (EN), Spanish (ES), and Finnish (FI) corresponding to `data-translate-key` attributes in the HTML.
    *   Implemented the `setLanguage(lang)` JavaScript function, which:
        *   Sets `document.documentElement.lang` attribute.
        *   Iterates through all elements with `[data-translate-key]`, updating their `innerHTML` or `placeholder` attributes from the `translations` object.
        *   Stores the user's selected language in `localStorage` for persistence across sessions.
        *   Updates the text of the language dropdown button to reflect the current language.
        *   Dynamically updates the footer copyright text, including the translated author name and the current year.
    *   Attached event listeners to the language links in the dropdown to call `setLanguage` with the chosen language.
    *   Ensured the preferred language (or default 'en') is loaded from `localStorage` on page initialization.
*   **✍️ Content Population:**
    *   Populated the `translations` object with actual, meaningful text content (as provided in the final project script) for navigation, buttons, section titles, and descriptive paragraphs, largely replacing "Lorem Ipsum".
*   **📐 Responsive CSS Finalization:**
    *   Added and refined `@media` queries (`@media (max-width: 768px)` and `@media (min-width: 769px)`) to adjust layouts and styling for the Bio, Contact, Main Hero, Shows grid, and other sections, ensuring a consistent and optimized user experience across desktop, tablet, and mobile devices.

---

This Learning Diary and the README.md file was generated with the assistance of an AI model. The original code and concept are by Antonio Miguel Herrero.