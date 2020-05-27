document.addEventListener("DOMContentLoaded", () => {
  // ----------- Бургер меню
  let button = document.querySelector(".burger__button");
  let menu = document.querySelector(".burger__row");
  let links = document.querySelectorAll(".burger__menu_nav-item");

  button.addEventListener("click", () => {
    menu.classList.toggle("burger__menu_active");
  });

  for (link of links) {
    link.addEventListener("click", () => {
      menu.classList.toggle("burger__menu_active");
    });
  }

  // ----------- Hover стрелки
  let arrow = document.getElementById("arrow-upRight");
  let text = document.getElementById("order-now");

  text.addEventListener("mouseover", () => {
    arrow.style.transform = "translateY(-5px)";
  });
  text.addEventListener("mouseout", () => {
    arrow.style.transform = "translateY(0)";
  });

  // ----------- Кнопка "наверх"
  let goTopBtn = document.querySelector(".back_to_top");

  window.addEventListener("scroll", trackScroll);
  goTopBtn.addEventListener("click", backToTop);

  function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add("back_to_top-show");
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove("back_to_top-show");
    }
  }

  function backToTop() {
    window.scrollBy({
      top: -document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }
});
