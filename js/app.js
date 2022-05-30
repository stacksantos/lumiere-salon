const dropDowns = document.querySelectorAll(".dropDown");
const button = document.querySelector("#dropButton");
const navLinks = document.querySelectorAll(".navLink li a");
const menu = document.querySelector(".menu");
const menuOpen = document.querySelector(".menu-open");


// button.addEventListener('mousedown', () => {
//   menu.classList.toggle("menu-open");
// });

// navLinks.forEach(navlink => {
//     navlink.addEventListener('mousedown', () => {
//         menu.classList.toggle('menu-open');
//     })
// })

    button.addEventListener('mousedown', () => {
        if (window.getComputedStyle(menu).display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
        window.addEventListener('scroll', () => {
            menu.style.display = 'none';
        })
    });

    navLinks.forEach(navlink => {
            
    });
