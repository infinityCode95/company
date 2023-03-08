const popupBtn = document.querySelector(".popup__btn");
const popup = document.querySelector(".popup");
const popupCloseBtn = document.querySelector(".popup__close");
const topBtn = document.querySelector('.top__btn');

popupBtn.addEventListener("click", () => {
  popup.classList.toggle("popup__active");
});

topBtn.addEventListener("click", () => {
  popup.classList.toggle("popup__active");
});

popupCloseBtn.addEventListener("click", () => {
  popup.classList.remove("popup__active");
});

document.querySelector("body").style.overflowY = "auto";
