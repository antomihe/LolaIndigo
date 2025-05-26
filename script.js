document.addEventListener('DOMContentLoaded', () => {
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Language Dropdown Logic (Basic toggle for now)
    const languageDropdownButton = document.getElementById('language-dropdown-button');
    const languageDropdownContent = document.getElementById('language-dropdown-content');

    if (languageDropdownButton && languageDropdownContent) {
        languageDropdownButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevents window click from immediately closing
            languageDropdownContent.classList.toggle('show');
            const isExpanded = languageDropdownContent.classList.contains('show');
            languageDropdownButton.setAttribute('aria-expanded', isExpanded);
        });

        // Close dropdown if clicked outside
        window.addEventListener('click', (event) => {
            if (languageDropdownContent.classList.contains('show') &&
                !languageDropdownButton.contains(event.target) &&
                !languageDropdownContent.contains(event.target)) {
                languageDropdownContent.classList.remove('show');
                languageDropdownButton.setAttribute('aria-expanded', 'false');
            }
        });
    }
});