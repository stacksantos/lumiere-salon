const dropDowns = document.querySelectorAll(".dropDown");
const button = document.querySelector("#dropButton");
const navLinks = document.querySelectorAll(".navLink");
const menu = document.querySelector(".menu");
const menuOpen = document.querySelector(".menu-open");


button.addEventListener("mousedown", () => {
  menu.classList.toggle("menu-open");
});

navLinks.forEach(navlink => {
    navlink.addEventListener('mousedown', () => {

        menu.classList.toggle('menu-open');
    })
})
