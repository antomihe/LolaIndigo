#  Lola Indigo - Unofficial Fan Website 💃🎤

A responsive, multi-language unofficial fan website concept for the artist Lola Indigo, built with HTML, CSS, and JavaScript. This project serves as a showcase of her work and provides information for fans.

## ✨ Features

*   📱 **Responsive Design:** Adapts seamlessly to desktop, tablet, and mobile screens.
*   🌐 **Multi-language Support:**
    *   Content available in English (EN), Spanish (ES), and Finnish (FI).
    *   User-friendly dropdown menu for language selection.
    *   Selected language is saved in `localStorage` for persistence.
    *   HTML `lang` attribute dynamically updated.
*   🎬 **Dynamic Background Video:** Engaging hero section with a looping video and overlay.
*   🧭 **Navigation:**
    *   Mobile-friendly hamburger menu (`☰`) for smaller screens.
    *   Smooth scrolling for internal anchor links.
*   📄 **Content Sections:**
    *   👤 **Bio:** Information about the artist.
    *   🎵 **Music:** Embedded Spotify players for albums.
    *   🎞️ **Clips:** Links to YouTube music videos with thumbnails and a "View All" button.
    *   🗓️ **Shows:** Displays upcoming (placeholder) tour dates with ticket/sold-out status.
    *   ❓ **FAQ:** Accordion-style Frequently Asked Questions section, clarifying the unofficial nature of the site and providing common info.
    *   📧 **Contact:** A basic contact form structure (note: intended for the site admin, not the artist).
*   💡 **Interactive Elements:**
    *   Accordion for FAQ to save space and improve readability.
*   🦶 **Footer:**
    *   🔗 **Social Media Links:** Icons linking to Lola Indigo's official profiles.
    *   📅 **Dynamic Copyright Year:** Automatically updates the copyright year.
    *   ⚠️ Clear disclaimer stating it's an unofficial website.

## 📁 Project Structure

The project follows a standard web project structure:

*   `📄 index.html`: The main HTML file containing the page structure.
*   `🎨 styles.css`: Contains all the CSS for styling the website.
*   `⚙️ script.js`: Handles all JavaScript functionalities, including:
    *   Mobile menu toggle.
    *   Language switching logic.
    *   FAQ accordion behavior.
    *   Dynamic footer year update.
*   `🖼️ media/`: Directory for static assets like:
    *   Background video (`bg-full.mp4`).
    *   Images for bio, contact, video thumbnails, social icons.
    *   Favicon (`favicon.ico`).
*   `📜 LICENSE`: Contains the MIT License text.
*   `📖 README.md`: This file.

## 🚀 Setup

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd <project-directory>
    ```
3.  Open `index.html` in your web browser. 🌐

## 🔑 Key Functionalities & Notes

*   🗣️ **Language Implementation:** Translations are stored in a JavaScript object within `script.js`. The `setLanguage` function updates text content based on `data-translate-key` attributes in the HTML and the selected language.
*   🚫 **Unofficial Status:** The website clearly states its unofficial nature in the footer and FAQ to avoid any confusion. The contact form is directed to the website's administrator, not Lola Indigo or her official team.
*   🌍 **External Services:** Relies on Bootstrap Icons for some UI elements (ensure the CDN link is active) and embeds content from Spotify and YouTube.

## 🔮 Future Enhancements (Ideas)

*   📡 Fetch tour dates dynamically from an API (if available).
*   🎬 More detailed individual clip pages.
*   🖼️ Image gallery section.
*   📰 Blog/News section for updates.
*   📬 Newsletter for email updates.
*   🛠️ Admin panel for managing content.


## ⚠️ Disclaimer

This is an unofficial fan-made website created for informational and entertainment purposes only. It is not affiliated with Lola Indigo or her official management. All copyrighted content (music, videos, images) belongs to their respective owners.