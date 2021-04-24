"use strict";
(function () {
  let templateComment = document
    .querySelector("#comment")
    .content.querySelector(".social__comment");

  let templatePicture = document
    .querySelector("#picture") // шаблон для копирования
    .content.querySelector(".picture");
  window.bigPicture = document.querySelector(".big-picture");

  let socialCommentCount = bigPicture.querySelector(
    ".social__comment-count span"
  );

  let commentsLoader = document.querySelector(".comments-loader"); // Загрузить

  let socialComments = bigPicture.querySelector(".social__comments"); // ul , куда неужно закинуть данные из template

  // let socialComment = socialComments.querySelectorAll(".social__comment");
  //===================================================================================== returns NodeList

  let bigPictureImg = bigPicture.querySelector(".big-picture__img img");
  let usersFotos = document.querySelector(".pictures"); // вставить в этот элемент
  let likesCount = bigPicture.querySelector(".likes-count");
  let commentsCount = bigPicture.querySelector(".comments-count");
  // let socialCommentArray = Array.prototype.slice.call(socialComment);
  //================================================================================ преобразует NodeList в Array (Массив из 2 списков)
  // socialCommentArray.document.createElement('li');
  // console.log(socialCommentArray);
  let social = document.querySelector(".social");
  let socialPicture = social.querySelector(".social__picture");

  let socialCaption = bigPicture.querySelector(".social__caption");
  let getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // Максимум и минимум включаются
  };

  // Функция рендера комментария
  let renderComent = (comment) => {
    let commentElement = templateComment.cloneNode(true);
    let socialPicture = commentElement.querySelector(".social__picture"); // вставляем иконку в template
    let socialText = commentElement.querySelector(".social__text"); // вставляем текст в template
    socialPicture.src = comment.avatar;
    socialText.textContent = comment.message;
    return commentElement;
  };

  //
  let renderFoto = (foto) => {
    let fotoElement = templatePicture.cloneNode(true);
    let pictureImg = fotoElement.querySelector(".picture__img"); // Элемент с фото
    let pictureComments = fotoElement.querySelector(".picture__comments");
    let pictureLikes = fotoElement.querySelector(".picture__likes");

    pictureImg.src = foto.url;
    pictureComments.textContent = foto.comments.length;
    pictureLikes.textContent = foto.likes;

    let lastCommentIndex = 0; // переменная хранит последний индекс комментария

    let renderFiveComements = () => {
      let fragment = document.createDocumentFragment();
      for (let i = lastCommentIndex; i < lastCommentIndex + 5; i++) {
        fragment.appendChild(renderComent(foto.comments[i]));
      }
      socialComments.appendChild(fragment); // Заменить дабавление в конце на присвоение
    };

    let loadDatabase = () => {
      bigPictureImg.src = foto.url;
      likesCount.textContent = foto.likes;
      socialCaption.innerHTML = foto.description;
      socialPicture.src = foto.url;

      renderFiveComements();

      socialCommentCount.textContent = foto.comments.length;
      bigPicture.classList.remove("hidden");
    };
    // ----------------------------------------- Добавление Фото в полноэкранный просмотр при нажатии //
    pictureImg.addEventListener("click", function () {
      loadDatabase();
    });

    fotoElement.addEventListener("keydown", function (evt) {
      if (evt.key === "Enter") {
        loadDatabase();
      }
    });
    commentsLoader.addEventListener("click", function () {
      lastCommentIndex += 5;
      renderFiveComements();
    }); // кнопка загрузки комментария
    return fotoElement;
  };

  window.loadFotos(function (fotos) {
    let fragment = document.createDocumentFragment();

    for (let i = 0; i < fotos.length; i++) {
      fragment.appendChild(renderFoto(fotos[i]));
    }
    usersFotos.appendChild(fragment);
  });
})();
