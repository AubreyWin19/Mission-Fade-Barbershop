// =========================================================
// MISSION FADE BARBERSHOP
// Simple JavaScript functionality
// =========================================================


// =========================================================
// 1. SMOOTH SCROLLING
// Finds links that point to sections on this page and
// smoothly scrolls to the selected section.
// =========================================================

const navigationLinks = document.querySelectorAll('a[href^="#"]');

navigationLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    // Only prevent the default link behavior if the
    // destination actually exists on the page.
    if (targetSection) {
      event.preventDefault();

      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// =========================================================
// 2. MOBILE NAVIGATION
// The current HTML does not contain a mobile menu button,
// so there is no mobile-menu JavaScript to add.
//
// The navigation in the existing HTML is already made
// responsive by the CSS.
// =========================================================