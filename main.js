//Sticker Nav bar for desktop
window.addEventListener("scroll", () => {
    var desktopNav = document.getElementById("desktop-nav");
    desktopNav.classList.toggle("sticky", window.scrollY > 0);
})