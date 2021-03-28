"use strict";
(function () {
  let URL = "https://21.javascript.pages.academy/kekstagram";

  window.upload = (data, onSuccess) => {
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";

    xhr.addEventListener("load", function () {
      onSuccess(xhr.response);
    });

    xhr.open("POST", URL);
    xhr.send(data);
  };
  // let onError = function (message) {
  //   console.error(message);
  // };

  // let onSuccess = function (animals) {
  //   console.log(animals);
  // };

  // let xhr = new XMLHttpRequest();

  // xhr.responseType = "json";

  // xhr.addEventListener("load", function () {
  //   let error;
  //   switch (xhr.status) {
  //     case 200:
  //       onSuccess(xhr.response);
  //       break;

  //     case 400:
  //       error = "Неверный запрос";
  //       break;

  //     case 401:
  //       error = "Пользователь не авторизован";
  //       break;

  //     case 404:
  //       error = "Ничего не найдено";
  //       break;

  //     default:
  //       error = "Статус ответа: : " + xhr.status + "" + xhr.statusText;
  //   }

  //   if (error) {
  //     onError(error);
  //   }
  // });

  // xhr.addEventListener("error", function () {
  //   onError("Произошла ошибка соединения");
  // });

  // xhr.addEventListener("timeout", function () {
  //   onError("Запрос не успел выполниться за " + xhr.timeout + " мс");
  // });

  // xhr.timeout = 1000;

  // xhr.open("GET", "https://21.javascript.pages.academy/kekstagram/data");

  // xhr.send();
})();
