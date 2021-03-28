"use strict";
(function () {
  let uploadFile = document.querySelector("#upload-file"); // Кнопка загрузки фотографий //
  let imgUploadOverlay = document.querySelector(".img-upload__overlay"); // Окно редактирования //
  let body = document.querySelector("body");
  // body.classList.add("modal-open");
  uploadFile.addEventListener("change", function () {
    imgUploadOverlay.classList.remove("hidden"); // Показываем окно редактирования //
    body.classList.add("modal-open"); // Модальное окно открыто на все BODY //
  });
  let uploadCancel = document.querySelector("#upload-cancel"); // Кнопка закрытия окна редактирования //

  const filterMap = {
    chrome: "grayscale",
    sepia: "sepia",
    marvin: "invert",
    phobos: "blur",
    heat: "brightness",
  };

  let effectsRadio = document.querySelectorAll(".effects__radio");
  window.imgUploadPreview = document.querySelector(".img-upload__preview"); // картинка для редактирования //
  let imgUploadEffectLevel = document.querySelector(
    ".img-upload__effect-level"
  ); //                      Слайдер
  window.imgUploadPreviewImg = imgUploadPreview.querySelector("img");

  effectsRadio.forEach((item) => {
    item.addEventListener("change", (evt) => {
      imgUploadPreviewImg.classList.value = ""; // При добавление нового класса, старый удаляется //
      const effectValue = evt.target.value;
      imgUploadPreviewImg.classList.add(`effects__preview--${effectValue}`);

      //.............................................
      changeFilter(effectValue);
      //...........................................................
      if (imgUploadPreviewImg.classList.contains("effects__preview--none")) {
        imgUploadEffectLevel.classList.add("hidden");
      } else {
        imgUploadEffectLevel.classList.remove("hidden");
      }
      console.log(1);

      // console.log(imgUploadPreviewImg.style.filter);
    });
  });
  window.changeFilter = (filterValue) => {
    const filter = filterMap[filterValue];
    const currentPinValue = Math.trunc(
      effectLevelPin.offsetLeft * 0.2197802197802198
    );

    let filterStyle = "";
    if (filterValue === "heat") {
      filterStyle = `${filter}(${currentPinValue / 10})`;
    } else if (filterValue === "phobos") {
      filterStyle = `${filter}(${currentPinValue / 2}px)`;
    } else {
      filterStyle = `${filter}(${currentPinValue}%)`;
    }

    imgUploadPreviewImg.dataset.filter = filterValue;
    imgUploadPreviewImg.style.filter = filterStyle;
  };
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

  let form = document.querySelector("#upload-select-image");
  form.addEventListener("submit", function (evt) {
    window.upload(new FormData(form), function () {
      imgUploadOverlay.classList.add("hidden");
    });
    evt.preventDefault();
  });
})();
