"use strict";
(function () {
  // ===================================== Работа с # ===================================== //
  let textHashtags = document.querySelector(".text__hashtags");
  let minNameLength = 2;
  let maxNameLength = 20;
  let maxItemHashtags = 5;
  let textHashtagsValue = [];
  let space = " ";
  let comma = ",";
  textHashtags.addEventListener("input", function () {
    textHashtagsValue = textHashtags.value;
    onSplitString(textHashtagsValue, space);
    let re = /^#[\w+]*$/g;
    console.log(re.test(textHashtagsValue));
    console.log(textHashtagsValue);
    let valueLength = textHashtags.value.length;
    textHashtagsValue.forEach((item) => {
      // Провести сравнение на первый символ каждого элемента массива
      // Провести сравнение на второй символ каждого элемента массива
      // Сравнение на одинаковые элементы массива

      if (valueLength < minNameLength) {
        textHashtags.setCustomValidity(
          "Ещё " + (minNameLength - valueLength) + " симв."
        ); // Не более 20 символов в элементе массива
      } else if (item.length > maxNameLength) {
        textHashtags.setCustomValidity(
          "Удалите лишние " + (item.length - maxNameLength) + " симв."
        ); // Не более 5 элементов массива
      } else if (textHashtagsValue.length > maxItemHashtags) {
        textHashtags.setCustomValidity(
          "Удалите лишние " +
            (textHashtagsValue.length - maxItemHashtags) +
            " хештега."
        );
      } else {
        textHashtags.setCustomValidity("");
      }
      textHashtags.reportValidity();
    });
  });

  let onSplitString = (stringToSplit, space) => {
    let splitStringText = stringToSplit.split(space);
    textHashtagsValue = splitStringText.filter(Boolean); // Удалить пустой элемент массива
    // console.log(splitStringText.filter(Boolean));
  };
  let effectsPreviewSepia = document.querySelector(".effects__preview--sepia");
  // console.log(effectsPreview.style);
})();
