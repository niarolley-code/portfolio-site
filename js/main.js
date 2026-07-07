/* ==========================================================================
   NIA C. ROLLEY — SITE SCRIPT
   ==========================================================================
   Plain (vanilla) JavaScript — no libraries or frameworks. This file does
   two small jobs, and every page on the site loads it the same way:

     1. Highlights the current page's link in the nav bar ("active" state)
     2. Opens/closes the mobile hamburger menu on small screens

   If you ever want to add more interactivity to the site later (like a
   contact form or a filter on the Writing page), this is the file you'd
   add it to.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  highlightActiveNavLink();
  setupMobileNavToggle();
});

/**
 * Looks at the current page's URL and adds the "active" class to whichever
 * nav link points to that same page, so visitors can see where they are.
 */
function highlightActiveNavLink() {
  // e.g. if the URL is ".../work.html", currentPage becomes "work.html"
  var currentPage = window.location.pathname.split("/").pop() || "index.html";
  var navLinks = document.querySelectorAll(".nav-list a");

  navLinks.forEach(function (link) {
    var linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
}

/**
 * Wires up the hamburger button (visible only on small screens) so tapping
 * it shows/hides the nav menu. On desktop the button is hidden via CSS and
 * the menu is always visible, so this has no effect there.
 */
function setupMobileNavToggle() {
  var toggleButton = document.querySelector(".nav-toggle");
  var navList = document.querySelector(".nav-list");

  if (!toggleButton || !navList) return;

  toggleButton.addEventListener("click", function () {
    var isOpen = navList.classList.toggle("open");
    toggleButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}
