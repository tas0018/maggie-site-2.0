//Sticker Nav bar for desktop
if ($(window).width() > 768) {
  window.addEventListener("scroll", () => {
    let stickyNav = document.getElementById("sticky-nav");
    stickyNav.classList.toggle("sticky", window.scrollY > 0);
  });
}
// On click for mobile nav button
const navSlider = () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 5 + 0.55
        }s`;
      }
    });
    //burger animation
    hamburger.classList.toggle("toggle");
  });
};

navSlider();
