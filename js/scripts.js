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

  if (window.matchMedia("(min-width: 760px)").matches) {
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
  }

  // ---------- Прокрутка к анкорам
  (function () {
    var speed = 500;
    var moving_frequency = 10; // Affects performance !
    var links = document.getElementsByTagName("a");
    var href;
    for (var i = 0; i < links.length; i++) {
      href =
        links[i].attributes.href === undefined
          ? null
          : links[i].attributes.href.nodeValue.toString();
      if (href !== null && href.length > 1 && href.substr(0, 1) == "#") {
        links[i].onclick = function () {
          var element;
          var href = this.attributes.href.nodeValue.toString();
          if ((element = document.getElementById(href.substr(1)))) {
            var hop_count = speed / moving_frequency;
            var getScrollTopDocumentAtBegin = getScrollTopDocument();
            var gap =
              (getScrollTopElement(element) - getScrollTopDocumentAtBegin) /
              hop_count;

            for (var i = 1; i <= hop_count; i++) {
              (function () {
                var hop_top_position = gap * i;
                setTimeout(function () {
                  window.scrollTo(
                    0,
                    hop_top_position + getScrollTopDocumentAtBegin
                  );
                }, moving_frequency * i);
              })();
            }
          }

          return false;
        };
      }
    }

    var getScrollTopElement = function (e) {
      var top = 0;

      while (e.offsetParent != undefined && e.offsetParent != null) {
        top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
        e = e.offsetParent;
      }

      return top;
    };

    var getScrollTopDocument = function () {
      return document.documentElement.scrollTop + document.body.scrollTop;
    };
  })();
});
