document.querySelectorAll(".dropdown").forEach(function (dropDownWrapper) {
    const dropDownBtn = dropDownWrapper.querySelector(".dropdown__arrow");
    const dropDownList = dropDownWrapper.querySelector(".dropdown__list");
    const dropDownListItems = dropDownList.querySelectorAll(
      ".dropdown__list-item"
    );

    dropDownBtn.addEventListener("click", function (e) {
      dropDownList.classList.toggle("dropdown__list-show");
      this.classList.toggle("dropdown__arrow-active");
    });
  
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        e.stopPropagation();
        dropDownList.classList.remove("dropdown__list-show");
      });
    });
  });
