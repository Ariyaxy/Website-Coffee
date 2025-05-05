// ...existing code...

// Scroll animation
const sections = document.querySelectorAll("section");
const options = {
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, options);

sections.forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});

// Modal functionality
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");

document.querySelectorAll(".menu-card-img").forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImage.src = img.src;
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Toggle class active
const navnav = document.querySelector(".nav-nav");
// ketika menu diclick
document.querySelector("#ham-menu").onclick = () => {
  navnav.classList.toggle("active");
};
// klik diluar sidebar menghilangkan nav
const ham = document.querySelector("#ham-menu");

document.addEventListener("click", function (e) {
  if (!ham.contains(e.target) && !navnav.contains(e.target)) {
    navnav.classList.remove("active");
  }
});
