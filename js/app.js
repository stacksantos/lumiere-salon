const button = document.querySelector("#dropButton");
const menu = document.querySelector(".menu");

button.addEventListener("mousedown", () => {
  if (window.getComputedStyle(menu).display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
    window.addEventListener("scroll", () => {
      menu.style.display = "none";
    });
  }
});
