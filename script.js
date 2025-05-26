// script.js
document.addEventListener('DOMContentLoaded', () => {
    // TODO Logic for currentYear
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});