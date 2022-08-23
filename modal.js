"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const modalTrigger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal"),
    modalCloseBtn = document.querySelector("[data-close]"),
    modalTimerId = setTimeout(openModal, 5000);

  function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    clearInterval(modalTimerId); // для того, чтобы модальное окно не открывалось через 5 с после перезагрузки страницы
  }

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  function showModalByScroll() {
    // узаем долистал ли пользователь до конца страницы
    if (
      window.pageYOffset + document.documentElement.clientHeight >= // количество пикселей, на которое прокручен элемент по вертикали + (высота элемента + паддинги, за исключением высоты полосы прокрутки и марджин)
      document.documentElement.scrollHeight - 1 // высота контента, включая невидимое из-за прокрутки сожержимое (высота всего контента на странице) (-1рх во избежание багов в других браузерах, где не отображается модалка при прокручивании в конец страницы)
    ) {
      openModal();
      window.removeEventListener("scroll", showModalByScroll); // здесь убираем слушатель, на случай, если пользователь повторно спустится вниз страницы, чтобы окно не показывалось вновь
    }
  }

  modalTrigger.forEach((i) => {
    i.addEventListener("click", openModal);
  });

  modalCloseBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    // закрытие модального окна по нажатию клавиши esc
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });

  window.addEventListener("scroll", showModalByScroll); // показываем модальное окно при скролле вниз страницы
});
