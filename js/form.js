"use strict";
(function () {
  let uploadFile = document.querySelector("#upload-file"); // Кнопка загрузки фотографий //
  let imgUploadOverlay = document.querySelector(".img-upload__overlay"); // Окно редактирования //
  let body = document.querySelector("body");
  body.classList.add("modal-open");
  uploadFile.addEventListener("change", function () {
    imgUploadOverlay.classList.remove("hidden"); // Показываем окно редактирования //
    body.classList.add("modal-open"); // Модальное окно открыто на все BODY //
  });
  let uploadCancel = document.querySelector("#upload-cancel"); // Кнопка закрытия окна редактирования //

  let effectsRadio = document.querySelectorAll(".effects__radio");
  window.imgUploadPreview = document.querySelector(".img-upload__preview"); // картинка для редактирования //
  let imgUploadEffectLevel = document.querySelector(
    ".img-upload__effect-level"
  ); //                      Слайдер
  let imgUploadPreviewImg = imgUploadPreview.querySelector("img");
  effectsRadio.forEach((item) => {
    item.addEventListener("change", (evt) => {
      imgUploadPreviewImg.classList.value = ""; // При добавление нового класса, старый удаляется //
      imgUploadPreviewImg.classList.add(
        `effects__preview--${evt.target.value}`
      );
      if (imgUploadPreviewImg.classList.contains("effects__preview--none")) {
        imgUploadEffectLevel.classList.add("hidden");
      } else {
        imgUploadEffectLevel.classList.remove("hidden");
      }
    });
  });

  // ===================================== Прячем окно рндактирования фотографии ===================================== //
  uploadCancel.addEventListener("click", function () {
    imgUploadOverlay.classList.add("hidden");
    body.classList.remove("modal-open");
    uploadFile.value = uploadFile.defaultValue; // Сбрасываем значение окна загрузки файла //
    scaleControlValue.value = "100"; // Возвращает значение поля увеличения //
    imgUploadPreview.style.transform = `scale(${
      scaleControlValue.value / 100
    })`;
    imgUploadPreviewImg.classList.value = "";
  });

  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      imgUploadOverlay.classList.add("hidden");
      body.classList.remove("modal-open");
      uploadFile.value = uploadFile.defaultValue; // Сбрасываем значение defaultValue //
      scaleControlValue.value = "100"; // Возвращает значение поля увеличения //
      imgUploadPreview.style.transform = `scale(${
        scaleControlValue.value / 100
      })`;
      imgUploadPreviewImg.classList.value = "";
    }
  });
})();
