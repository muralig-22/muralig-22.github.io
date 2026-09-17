// Adds a hairline border and soft shadow to the header once the page
// has scrolled past the hero area. Intentionally the only motion-related
// script on the page — everything else is CSS (page-load fade-up, hover
// states) and respects prefers-reduced-motion automatically.

(function () {
  var header = document.getElementById("site-header");
  if (!header) return;

  var THRESHOLD = 8;

  function updateHeader() {
    if (window.scrollY > THRESHOLD) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
})();
