const burgerBtn = document.querySelector(".burger__btn");
const burgerMenu = document.querySelector(".burger__menu");
const burgerMenuClose = document.querySelector(".burger__menu-close");

burgerBtn.addEventListener("click", () => {
  burgerMenu.classList.toggle("burger__menu-active");
});

burgerMenuClose.addEventListener("click", () => {
  burgerMenu.classList.remove("burger__menu-active");
});
