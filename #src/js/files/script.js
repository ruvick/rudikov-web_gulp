// 'use strict';
// document.addEventListener('DOMContentLoaded', () => {
// });

// const iconMenu = document.querySelector(".icon-menu");
const iconMenuOpen = document.querySelector(".icon-menu_open");
const iconMenuClose = document.querySelector(".icon-menu_close");
const body = document.querySelector("body");
const menuBody = document.querySelector(".mob-menu");
const menuListItemElems = document.querySelector(".header-new__menu__list");
// const mobsearch = document.querySelector(".header__mob-search-btn");
// const headsearch = document.querySelector(".header__search-mob");

//BURGER
if (iconMenuOpen) {
  iconMenuOpen.addEventListener("click", function () {
    body.classList.add("_lock");
    menuBody.classList.add("active");
  });
}

if (iconMenuClose) {
  iconMenuClose.addEventListener("click", function () {
    body.classList.remove("_lock");
    menuBody.classList.remove("active");
  });
}

// Закрытие моб меню при клике на якорную ссылку
if (menuListItemElems) {
  menuListItemElems.addEventListener("click", function () {
    iconMenuOpen.classList.remove('active');
    body.classList.remove("_lock");
    menuBody.classList.remove("active");
  });
}

// Закрытие моб меню при клике вне области меню 
// window.addEventListener('click', e => { // при клике в любом месте окна браузера
//   const target = e.target // находим элемент, на котором был клик
//   if (!target.closest('.icon-menu_open') && !target.closest('.mob-menu') && !target.closest('.header__mob-search-btn') && !target.closest('.header__search-mob') && !target.closest('._popup-link') && !target.closest('.popup')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
//     iconMenuOpen.classList.remove('active') // то закрываем окно навигации, удаляя активный класс
//     menuBody.classList.remove('active')
//     body.classList.remove('_lock')
//     headsearch.classList.remove('_active')
//   }
// })

// Плавная прокрутка
const smotScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

smotScrollElems.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log(event);

    const id = link.getAttribute('href').substring(1)
    console.log('id : ', id);

    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    });
  })
});


