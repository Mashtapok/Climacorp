let button = document.querySelector('.burger__button')
let menu = document.querySelector('.burger__row')
let links = document.querySelectorAll('.burger__menu_nav-item')

button.addEventListener('click', () => {
  menu.classList.toggle('burger__menu_active')
});

for (link of links) {
  link.addEventListener('click', () => {
    menu.classList.toggle('burger__menu_active')
  })
}