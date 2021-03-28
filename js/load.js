"use strict";
(function () {
  let URL = "https://21.javascript.pages.academy/kekstagram/data";

  window.loadFotos = (onSuccess, onError) => {
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";

    xhr.open("GET", URL);

    xhr.addEventListener("load", function () {
      onSuccess(xhr.response);
      // window.fotos = xhr.response;
    });

    xhr.send();
  };
})();
