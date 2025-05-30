document.addEventListener('DOMContentLoaded', () => {
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const languageDropdownButton = document.getElementById('language-dropdown-button');
    const languageDropdownContent = document.getElementById('language-dropdown-content');

    if (languageDropdownButton && languageDropdownContent) {
        languageDropdownButton.addEventListener('click', (event) => {
            event.stopPropagation();
            languageDropdownContent.classList.toggle('show');
            const isExpanded = languageDropdownContent.classList.contains('show');
            languageDropdownButton.setAttribute('aria-expanded', isExpanded);
        });

        window.addEventListener('click', (event) => {
            if (languageDropdownContent.classList.contains('show') &&
                !languageDropdownButton.contains(event.target) &&
                !languageDropdownContent.contains(event.target)) {
                languageDropdownContent.classList.remove('show');
                languageDropdownButton.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // FAQ Accordion Script
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');

        if (header && content) {
            header.addEventListener('click', () => {
                const isOpen = item.classList.contains('open');

                // Close all other open items
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('open')) {
                        otherItem.classList.remove('open');
                        otherItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
                        otherItem.querySelector('.accordion-content').style.maxHeight = null;
                    }
                });

                // Toggle current item
                item.classList.toggle('open');
                header.setAttribute('aria-expanded', item.classList.contains('open'));

                if (item.classList.contains('open')) {
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    content.style.maxHeight = null;
                }
            });
        }
    });
});