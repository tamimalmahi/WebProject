document.addEventListener("DOMContentLoaded", function() {
  // Highlight current page in nav
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });

  // Lightbox functionality
  const galleryImages = document.querySelectorAll(".gallery img");
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  document.body.appendChild(lightbox);

  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.innerHTML = '';
      const imgClone = img.cloneNode();
      lightbox.appendChild(imgClone);
      lightbox.style.display = "flex";
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
});