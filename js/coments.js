"use strict";
(function () {
  let textDescription = document.querySelector(".text__description");
  let maxNameLength = 140;
  let textDescriptionValue;
  textDescription.addEventListener("input", function () {
    textDescriptionValue = textDescription.value;
    // console.log(textDescriptionValue.length);

    if (textDescriptionValue.length > maxNameLength) {
      textDescription.setCustomValidity(
        "Удалите лишние " +
          (textDescriptionValue.length - maxNameLength) +
          " симв."
      ); // Не более 140 элементов массива
    } else {
      textDescription.setCustomValidity("");
    }
    textDescription.reportValidity();
    // });
  });
})();
