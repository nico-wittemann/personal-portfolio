/*!
 * Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  const navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) return;
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  // Language Switcher
  const languageSwitcher = document.getElementById("languageSwitcher");
  if (languageSwitcher) {
    const currentFile = window.location.href.includes("index_de")
      ? "index_de.html"
      : "index.html";
    languageSwitcher.value = currentFile;

    languageSwitcher.addEventListener("change", function () {
      const selected = this.value;
      if (selected !== currentFile) {
        window.location.href = selected;
      }
    });
  }

  // Fix for portfolio hover content visibility
  document.querySelectorAll(".portfolio-box").forEach((box) => {
    box.addEventListener("mouseenter", () => {
      box.classList.add("hover");
    });
    box.addEventListener("mouseleave", () => {
      box.classList.remove("hover");
    });
  });
});
