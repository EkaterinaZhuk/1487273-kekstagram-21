"use strict";
(function () {
  let URL = "https://21.javascript.pages.academy/kekstagram/data";
  let StatusCode = {
    OK: 200,
  };
  let TIMEOUT_IN_MS = 1000;
  window.loadFotos = (onSuccess, onError) => {
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";

    xhr.addEventListener("load", function () {
      if (xhr.status === StatusCode.OK) {
        onSuccess(xhr.response);
      } else {
        onError("Статус ответа: " + xhr.status + "" + xhr.statusText);
      }
      // window.fotos = xhr.response;
    });
    xhr.addEventListener("error", function () {
      onError("Произошла ошибка соединения");
    });

    xhr.addEventListener("timeout", function () {
      onError("Запрос не успел выполниться за " + xhr.timeout + "мс");
    });

    xhr.timeout = TIMEOUT_IN_MS;

    xhr.open("GET", URL);
    xhr.send();
  };

  let errorHandler = (errorMessage) => {
    let node = document.createElement("div");
    node.style =
      "z-index: 100; margin: 0 auto; text-align: center; background-color: red;";
    node.style.position = "absolute";
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = "30px";

    node.textContent = errorMessage;
    document.body.insertAdjacentElement("afterbegin", node);
  };
  let successHandler = () => {};
  window.loadFotos(successHandler, errorHandler);

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
