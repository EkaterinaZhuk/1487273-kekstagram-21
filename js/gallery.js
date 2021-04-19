"use strict";
(function () {
  // let caption = [
  //   "Тестим новую камеру! =)",
  //   "Хорошая погода! =)",
  //   "Хорошее путешествие! =)",
  //   "Побыватьбы там еще! =)",
  //   "Просто картинка! =)",
  //   "Пока выкладывал это фото, Кекс обосрался! =)",
  // ];

  let templatePicture = document
    .querySelector("#picture") // шаблон для копирования
    .content.querySelector(".picture");
  window.bigPicture = document.querySelector(".big-picture");
  let socialCommentCount = bigPicture.querySelector(
    ".social__comment-count span"
  );

  let commentsLoader = document.querySelector(".comments-loader");

  let socialComments = bigPicture.querySelector(".social__comments");

  let socialComment = socialComments.querySelectorAll(".social__comment"); // returns NodeList

  let bigPictureImg = bigPicture.querySelector(".big-picture__img img");
  let usersFotos = document.querySelector(".pictures"); // вставить в этот элемент
  let likesCount = bigPicture.querySelector(".likes-count");
  let commentsCount = bigPicture.querySelector(".comments-count");
  let socialCommentArray = Array.prototype.slice.call(socialComment); // преобразует NodeList в Array (Массив из 2 списков)
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
  let renderFoto = (foto) => {
    let fotoElement = templatePicture.cloneNode(true);
    let pictureImg = fotoElement.querySelector(".picture__img"); // Элемент с фото
    let pictureComments = fotoElement.querySelector(".picture__comments");
    let pictureLikes = fotoElement.querySelector(".picture__likes");

    pictureImg.src = foto.url;
    pictureComments.textContent = foto.comments.length;
    pictureLikes.textContent = foto.likes;

    let loadDatabase = () => {
      bigPictureImg.src = foto.url;
      likesCount.textContent = foto.likes;
      socialCaption.innerHTML = foto.description;
      socialPicture.src = foto.url;

      // Функция рендера комментария
      let renderComents = (comment) => {
        let socialPicture = item.querySelector(".social__picture");
        let socialText = item.querySelector(".social__text");
        socialPicture.src = foto.comments[index].avatar;
        socialText.textContent = foto.comments[index].message;
      };

      let fragment = document.createDocumentFragment();

      for (let i = 0; i < foto.comments.length; i++) {
        fragment.appendChild(renderComents(fotos[i]));
      }
      usersFotos.appendChild(fragment);

      // сделать проверку на длинну массива комментариев меньше 5 иначе 5 через **** a ? 5 : b; тернарный оператор
      // завернуть верстку коментария в темплейт, и по примеру в цикле вызвать функцию рендера комментария

      socialCommentCount.textContent = foto.comments.length;

      //for (let i = 1; i >= foto.comments.length; i++){
      //   if (i == foto.comments.length){
      //     socialCommentCount.classList.add("hidden");
      //   }else{socialCommentCount.classList.remove("hidden")}
      // }
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

    return fotoElement;
  };

  window.loadFotos(function (fotos) {
    let fragment = document.createDocumentFragment();

    for (let i = 0; i < fotos.length; i++) {
      fragment.appendChild(renderFoto(fotos[i]));
    }
    usersFotos.appendChild(fragment);

    // likesCount.textContent = fotos[0].likes;
    // commentsCount.textContent = getRandomIntInclusive(1, 50);

    // socialCommentArray.forEach((item, index) => {
    //   let socialPicture = item.querySelector(".social__picture");
    //   let socialText = item.querySelector(".social__text");
    //   socialPicture.src = fotos[0].comments[index].avatar;
    //   socialText.textContent = fotos[0].comments[index].message;
    // socialCaption.innerHTML = caption[0];
    // });
  });

  // let fragment = document.createDocumentFragment();
  // for (let i = 0; i < fotos.length; i++) {
  //   fragment.appendChild(renderFoto(fotos[i]));
  // }
  // usersFotos.appendChild(fragment);

  // likesCount.textContent = fotos[0].likes;
  // commentsCount.textContent = getRandomIntInclusive(1, 50);
  // socialCaption.innerHTML = caption[0];
  // Описание фотографии
})();
