document.addEventListener("DOMContentLoaded", () => {
  function blockScroll() {
    document.documentElement.style.overflowY = "hidden";
  }
  function unBlockScroll() {
    document.documentElement.style.overflowY = "initial";
  }

  // ---------- Установка кондиционеров
  let settingConditionerRef = document.getElementById("settingConditioner");
  let settingConditionContainer = document.querySelectorAll(
    ".services-modal-container"
  );

  settingConditionerRef.addEventListener("click", () => {
    settingConditionContainer[0].style.display = "block";
    blockScroll();
  });

  settingConditionContainer[0].addEventListener("click", (event) => {
    if (event.target.alt === "close") {
        settingConditionContainer[0].style.display = "none";
      unBlockScroll();
    }
    if (settingConditionContainer[0] === event.target) {
        settingConditionContainer[0].style.display = "none";
      unBlockScroll();
    }
  });


  // ---------- Закладка коммуникаций
  let communicationRef = document.getElementById("communication");

  communicationRef.addEventListener("click", () => {
    settingConditionContainer[1].style.display = "block";
    blockScroll();
  });

  settingConditionContainer[1].addEventListener("click", (event) => {
    if (event.target.alt === "close") {
        settingConditionContainer[1].style.display = "none";
      unBlockScroll();
    }
    if (settingConditionContainer[1] === event.target) {
        settingConditionContainer[1].style.display = "none";
      unBlockScroll();
    }
  });

  // ---------- Обслуживание
  let servicesRef = document.getElementById("services-modal-trigger");

  servicesRef.addEventListener("click", () => {
    settingConditionContainer[2].style.display = "block";
    blockScroll();
  });

  settingConditionContainer[2].addEventListener("click", (event) => {
    if (event.target.alt === "close") {
        settingConditionContainer[2].style.display = "none";
      unBlockScroll();
    }
    if (settingConditionContainer[2] === event.target) {
        settingConditionContainer[2].style.display = "none";
      unBlockScroll();
    }
  });

   // ---------- Заправка и дозаправка
   let refuelingRef = document.getElementById("refueling");

   refuelingRef.addEventListener("click", () => {
     settingConditionContainer[3].style.display = "block";
     blockScroll();
   });
 
   settingConditionContainer[3].addEventListener("click", (event) => {
     if (event.target.alt === "close") {
         settingConditionContainer[3].style.display = "none";
       unBlockScroll();
     }
     if (settingConditionContainer[3] === event.target) {
         settingConditionContainer[3].style.display = "none";
       unBlockScroll();
     }
   });

   // ---------- Перенос и демонтаж
   let transferRef = document.getElementById("transfer");

   transferRef.addEventListener("click", () => {
     settingConditionContainer[4].style.display = "block";
     blockScroll();
   });
 
   settingConditionContainer[4].addEventListener("click", (event) => {
     if (event.target.alt === "close") {
         settingConditionContainer[4].style.display = "none";
       unBlockScroll();
     }
     if (settingConditionContainer[4] === event.target) {
         settingConditionContainer[4].style.display = "none";
       unBlockScroll();
     }
   });

   // ---------- Ремонт
   let repairRef = document.getElementById("repair");

   repairRef.addEventListener("click", () => {
     settingConditionContainer[5].style.display = "block";
     blockScroll();
   });
 
   settingConditionContainer[5].addEventListener("click", (event) => {
     if (event.target.alt === "close") {
         settingConditionContainer[5].style.display = "none";
       unBlockScroll();
     }
     if (settingConditionContainer[5] === event.target) {
         settingConditionContainer[5].style.display = "none";
       unBlockScroll();
     }
   });


});
