"use strict";

(function () {
  window.effectLevelPin = document.querySelector(".effect-level__pin"); // Ползунок в слайдере //
  let effectLevelDepth = document.querySelector(".effect-level__depth");
  let effectLevelLine = document.querySelector(".effect-level__line");
  let effectsList = document.querySelector(".effects__list");
  let effectsListLi = effectsList.querySelectorAll("li");

  window.effectsPreview = document.querySelector(".effects__preview");
  let range = {
    min: 0,
    max: 453,
  };

  // ===================================== Ползунок ===================================== //
  effectLevelPin.addEventListener("mousedown", function (evt) {
    evt.preventDefault();

    let startCoords = {
      x: evt.clientX,
      // y: evt.clientY,
    };

    let onMouseMove = function (moveEvt) {
      //   moveEvt.preventDefault();

      let shift = {
        x: startCoords.x - moveEvt.clientX,
        // y: startCoords.y - moveEvt.clientY,
      };

      startCoords = {
        x: moveEvt.clientX,

        // y: moveEvt.clientY,
      };

      // effectLevelPin.style.top = effectLevelPin.offsetTop - shift.y + "px";
      effectLevelPin.style.left = effectLevelPin.offsetLeft - shift.x + "px";
      effectLevelDepth.style.width = effectLevelPin.style.left;
      // let pinMath =
      //   Math.trunc(effectLevelPin.offsetLeft * 0.2197802197802198) + "%";
      // console.log(pinMath);
      if (effectLevelPin.offsetLeft <= range.min) {
        effectLevelPin.style.left = range.min + "px";
      } else if (effectLevelPin.offsetLeft >= range.max) {
        effectLevelPin.style.left = range.max + "px";
      }

      // for (let i = 0; i <= filters.length - 1; i++) {
      //   if (imgUploadPreviewImg.classList == `effects__preview--${i}`) {
      //   }
      //    console.log((imgUploadPreviewImg.style.filter = `${i}` + pinMath));
      // }
      const filterValue = imgUploadPreviewImg.dataset.filter;
      changeFilter(filterValue);
    };
    let onMouseUp = (upEvt) => {
      upEvt.preventDefault();

      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    // imgUploadPreview;
  });
})();
