//Sticker Nav bar for desktop
window.addEventListener("scroll", () => {
  let desktopNav = document.getElementById("desktop-nav");
  desktopNav.classList.toggle("sticky", window.scrollY > 0);
});

// On click for mobile nav button
let mobileMenu = document.getElementById("menu");
let mobileBars = document.getElementById("mobile-bars");
let mobileTimes = document.getElementById("mobile-times");
let content = document.getElementById("content");
let sideMenu = document.getElementById("side-menu");

mobileMenu.addEventListener("click", () => {
  if (mobileBars.style.display === "none") {
    mobileBars.style.display = "block";
    mobileTimes.style.display = "none";
    content.classList.remove("active");

    sideMenu.classList.remove("slide");
  } else {
    mobileBars.style.display = "none";
    mobileTimes.style.display = "block";
    content.classList.add("active");

    sideMenu.classList.add("slide");
  }
});
