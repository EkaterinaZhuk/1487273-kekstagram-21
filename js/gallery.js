"use strict";
(function () {
  let caption = [
    "Тестим новую камеру! =)",
    "Хорошая погода! =)",
    "Хорошее путешествие! =)",
    "Побыватьбы там еще! =)",
    "Просто картинка! =)",
    "Пока выкладывал это фото, Кекс обосрался! =)",
  ];

  let templatePicture = document
    .querySelector("#picture") // шаблон для копирования
    .content.querySelector(".picture");
  window.bigPicture = document.querySelector(".big-picture");
  let socialCommentCount = bigPicture.querySelector(".social__comment-count");
  socialCommentCount.classList.add("hidden");
  let commentsLoader = document.querySelector(".comments-loader");
  commentsLoader.classList.add("hidden");
  let socialComments = bigPicture.querySelector(".social__comments");

  let socialComment = socialComments.querySelectorAll(".social__comment"); // returns NodeList

  let bigPictureImg = bigPicture.querySelector(".big-picture__img img");
  let usersFotos = document.querySelector(".pictures"); // вставить в этот элемент
  let likesCount = bigPicture.querySelector(".likes-count");
  let commentsCount = bigPicture.querySelector(".comments-count");
  let socialCommentArray = Array.prototype.slice.call(socialComment); // преобразует NodeList в Array (Массив из 2 списков)
  let socialCaption = bigPicture.querySelector(".social__caption");
  let getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // Максимум и минимум включаются
  };
  let renderFoto = (foto) => {
    let fotoElement = templatePicture.cloneNode(true);
    let pictureImg = fotoElement.querySelector(".picture__img"); // Элемент с фото
    let pictureComments = fotoElement.querySelector(".picture__comments");
    let pictureLikes = fotoElement.querySelector(".picture__likes");
    pictureImg.src = foto.url;
    pictureComments.textContent = foto.comments.length;
    pictureLikes.textContent = foto.likes;

    // ----------------------------------------- Добавление Фото в полноэкранный просмотр при нажатии //
    pictureImg.addEventListener("click", function () {
      bigPictureImg.src = foto.url;
      bigPicture.classList.remove("hidden");
    });

    fotoElement.addEventListener("keydown", function (evt) {
      if (evt.key === "Enter") {
        bigPictureImg.src = foto.url;
        bigPicture.classList.remove("hidden");
      }
    });

    return fotoElement;
  };

  let fragment = document.createDocumentFragment();
  for (let i = 0; i < fotos.length; i++) {
    fragment.appendChild(renderFoto(fotos[i]));
  }
  usersFotos.appendChild(fragment);

  likesCount.textContent = fotos[0].likes;
  commentsCount.textContent = getRandomIntInclusive(1, 50);

  socialCommentArray.forEach((item, index) => {
    // перебираем массив с 2 списками по значению
    let socialPicture = item.querySelector(".social__picture"); // Аватар и имя комментатора
    let socialText = item.querySelector(".social__text"); // Комментарий
    socialPicture.src = fotos[0].comments[index].avatar; // Добавляем слуайный аватар
    socialText.textContent = fotos[0].comments[index].message;
  });

  socialCaption.innerHTML = caption[0]; // Описание фотографии
})();
