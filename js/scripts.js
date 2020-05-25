$(document).ready(function() {
  $('.burger__button').on('click', function(event) {
    $('.burger__row').toggleClass('burger__menu_active');
  })
  $('.burger__menu_nav-item').on('click', function(event) {
    $('.burger__row').toggleClass('burger__menu_active');
  })
})