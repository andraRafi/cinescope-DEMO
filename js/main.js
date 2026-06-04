// main.js — Cinescope

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

function toggleMenu() {
  navLinks.classList.toggle("aktif");
}

function closeMenu() {
  navLinks.classList.remove("aktif");
}

hamburger.addEventListener("click", toggleMenu);

// Tutup menu saat klik link
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", closeMenu);
});
