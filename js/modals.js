document.addEventListener("DOMContentLoaded", () => {

    // ---------- Основная заявка
  let mainButton = document.getElementById("mainButton");
  let modalContanier = document.querySelector(".modal-container");
  let modal = document.querySelector(".modal")

  function blockScroll() {
    document.documentElement.style.overflowY = "hidden";
  }
  function unBlockScroll() {
    document.documentElement.style.overflowY = "initial";
  }

  mainButton.addEventListener("click", () => {
    modalContanier.style.display = "block";
    setTimeout(()=> {
      modal.classList.remove('modal-active')
    }, 10)

    blockScroll()
  });
  
  modalContanier.addEventListener("click", (event) => {
    if(event.target.alt === "close") {
      modalContanier.style.display = "none";
      unBlockScroll();
      modal.classList.add('modal-active')
    }
    if (modalContanier === event.target) {
      modalContanier.style.display = "none";
      unBlockScroll();
      modal.classList.add('modal-active')
    }
  });


  // ---------- Популярные модели
  let conditionButton = document.querySelector(".condition__bg");
  let popularModalContanier = document.querySelector(".popular-modal-container");

  conditionButton.addEventListener("click", () => {
    popularModalContanier.style.display = "block";
    blockScroll()
  });

  popularModalContanier.addEventListener("click", (event) => {
    if(event.target.alt === "close") {
      popularModalContanier.style.display = "none";
      unBlockScroll();
    }
    if (popularModalContanier === event.target) {
      popularModalContanier.style.display = "none";
      unBlockScroll();
    }
  });


  // ---------- Заказать модель
  let orderButtons = document.querySelector(".popular-modal-body")
  let orderModalContanier = document.querySelector(".order-modal-container")

  orderButtons.addEventListener("click", (event) => {
    if(event.target.className === "popular-modal-card-orderBtn") {
      orderModalContanier.style.display = "block"
    blockScroll()
    }
  });

  orderModalContanier.addEventListener("click", (event) => {
    if (orderModalContanier === event.target) {
      orderModalContanier.style.display = "none"
    }
  });

  // ---------- Контакты 
  let contactButtons = document.querySelectorAll('.contactButtons')
  let contactsModalContainer = document.querySelector('.contacts-modal-container')

  contactButtons.forEach(button => {
      let currentContactButton = button

    currentContactButton.addEventListener("click", () => {
        contactsModalContainer.style.display = "block"
        blockScroll()
    })
  })

  contactsModalContainer.addEventListener("click", (event) => {
    if(event.target.alt === "close") {
        contactsModalContainer.style.display = "none";
      unBlockScroll();
    }
    if (contactsModalContainer === event.target) {
        contactsModalContainer.style.display = "none";
      unBlockScroll();
    }
  });

})