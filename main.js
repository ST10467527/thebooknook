// main.js

// Fade-in on scroll
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if(target){
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    nav.style.transition = "transform 0.4s ease";
    nav.style.transform = nav.classList.contains("active") ? "translateX(0)" : "translateX(-100%)";
  });
});
