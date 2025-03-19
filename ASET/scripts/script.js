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
