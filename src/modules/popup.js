const popupOpenBtn = document.querySelector(".popup__btn-open");
const popup = document.querySelector(".popup");
const popupCloseBtn = document.querySelector(".popup__close");
const sectionTopBtn = document.querySelector(".top__btn");

const openPopup = () => {
    popup.style.opacity = 1;
    popup.style.visibility = "visible";
    popup.style.zIndex = 100;
};

const closePopup = (event) => {
  const target = event.target;
  
  if (target === popup || target.closest('.popup__close')) {
    popup.style.opacity = 0;
    popup.style.visibility = "hidden";
    popup.style.zIndex = -10;
  }
};

popupOpenBtn.addEventListener("click", openPopup);
sectionTopBtn.addEventListener("click", openPopup);
popup.addEventListener("click", closePopup);

