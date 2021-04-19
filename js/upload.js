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
})();
