document.addEventListener("DOMContentLoaded", function () {

  // 1. MOBILE MENU TOGGLE
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  }

  // 2. SMOOTH SCROLLING FOR NAV LINKS
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href");

      if (targetId === "#") return;

      event.preventDefault();

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }

      if (navLinks) navLinks.classList.remove("show");
    });
  });

  // 3. NAV BAR BACKGROUND CHANGE ON SCROLL
  const nav = document.querySelector("nav");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  // 4. LOGIN FORM (frontend-only for now — no real backend check yet)
  const loginForm = document.getElementById("login-form");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const message = document.getElementById("login-message");

      if (username.trim() === "" || password.trim() === "") {
        message.textContent = "Please fill in both fields.";
      } else {
        message.textContent = "Login form working! (Real login needs a backend — coming soon.)";
      }
    });
  }

});