//Sticker Nav bar for desktop
window.addEventListener("scroll", () => {
  let desktopNav = document.getElementById("desktop-nav");
  desktopNav.classList.toggle("sticky", window.scrollY > 0);
});

// On click for mobile nav button
let mobileMenu = document.getElementById("menu");
let mobileBars = document.getElementById("mobile-bars");
let mobileTimes = document.getElementById("mobile-times");

mobileMenu.addEventListener("click", () => {
  if (mobileBars.style.display === "none") {
    mobileBars.style.display = "block";
    mobileTimes.style.display = "none";
  } else {
    mobileBars.style.display = "none";
    mobileTimes.style.display = "block";
  }
});
