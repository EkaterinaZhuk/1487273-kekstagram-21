"use strict";
(function () {
  let bigPictureCancel = document.querySelector("#picture-cancel"); // кнопка закрытия //
  let scaleControlSmaller = document.querySelector(".scale__control--smaller"); // Кнопка уменьшения изображения //
  let scaleControlBigger = document.querySelector(".scale__control--bigger"); // Кнопка увеличения изображения //
  window.scaleControlValue = document.querySelector(".scale__control--value"); //  Поле, значение которого должно меняться //

  bigPictureCancel.addEventListener("click", function () {
    bigPicture.classList.add("hidden");
  });
  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      bigPicture.classList.add("hidden");
    }
  });

  scaleControlValue.value = "100";
  scaleControlSmaller.addEventListener("click", function () {
    let number;
    let scaleValue = Number(scaleControlValue.value);
    if (scaleValue <= 100) {
      number = scaleValue - 25;
      scaleControlBigger.disabled = false;
    }
    if (scaleValue <= 50) {
      scaleControlSmaller.disabled = true;
    }
    scaleControlValue.value = number;
    imgUploadPreview.style.transform = `scale(${number / 100})`;
  });

  scaleControlBigger.addEventListener("click", function () {
    let number;
    let scaleValue = Number(scaleControlValue.value);
    if (scaleValue === 100) {
      scaleControlBigger.disabled = true;
      return;
    }
    if (scaleValue >= 25) {
      number = scaleValue + 25;
      scaleControlSmaller.disabled = false;
    }
    if (scaleValue >= 75) {
      scaleControlBigger.disabled = true;
    }
    scaleControlValue.value = number;
    imgUploadPreview.style.transform = `scale(${number / 100})`;
  });
})();
