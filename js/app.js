const dropDowns = document.querySelectorAll('.dropDown');
const button = document.querySelector('#dropButton');
const menu = document.querySelector('.menu');
const option = document.querySelector('.menu li');


button.addEventListener('mousedown', () => {
    menu.classList.toggle('menu-open');
});

