// Contact form submit message
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formMsg").classList.remove("hidden");
});

// Mobile menu toggle
document.getElementById("menuBtn").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("hidden");
});
