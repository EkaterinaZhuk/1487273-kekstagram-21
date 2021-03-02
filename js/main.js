"use strict";

// Массив с фотографиями
let fotos = [];
// массив с комментариями
let comments = [
  "Всё отлично!, В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!",
];
// console.log(comments);
let caption = [
  "Тестим новую камеру! =)",
  "Хорошая погода! =)",
  "Хорошее путешествие! =)",
  "Побыватьбы там еще! =)",
  "Просто картинка! =)",
  "Пока выкладывал это фото, Кекс обосрался! =)",
];

// Массив с именами комментарий
let names = ["Артем", "Антон", "Ярослав", "Евпатий", "Коловратий", "Григорий"];

let bigPicture = document.querySelector(".big-picture ");
let bigPictureImg = bigPicture.querySelector(".big-picture__img img");
let likesCount = bigPicture.querySelector(".likes-count");
let commentsCount = bigPicture.querySelector(".comments-count");
let socialComments = bigPicture.querySelector(".social__comments");
let socialComment = socialComments.querySelectorAll(".social__comment"); // returns NodeList
let socialCommentArray = Array.prototype.slice.call(socialComment); // преобразует NodeList в Array (Массив из 2 списков)
let socialCommentCount = bigPicture.querySelector(".social__comment-count");
let socialCaption = bigPicture.querySelector(".social__caption");
socialCommentCount.classList.add("hidden");
let commentsLoader = document.querySelector(".comments-loader");
commentsLoader.classList.add("hidden");
let body = document.querySelector("body");
body.classList.add("modal-open");
let bigPictureCancel = document.querySelector("#picture-cancel"); // кнопка закрытия //

// Функция для создания рандомного значения
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // Максимум и минимум включаются
};

// Функция для создания комментарий
const createComment = () => {
  let comment = {
    avatar: `img/avatar-${getRandomIntInclusive(1, 6)}.svg`,
    message: comments[getRandomIntInclusive(0, comments.length - 1)],
    name: names[getRandomIntInclusive(0, names.length - 1)],
  };
  return comment;
};

// функция для генерации массива с картинками
const createPhoto = () => {
  for (let i = 1; i <= 25; i++) {
    let foto = {
      url: `photos/${i}.jpg`,
      description: `${i}`,
      likes: getRandomIntInclusive(15, 200),
      comments: [createComment(), createComment()],
    };
    fotos.push(foto); //
  }
};
createPhoto();
// console.log(fotos);

/* ------------------------------------------------------------------------------------------------------ */
let usersFotos = document.querySelector(".pictures"); // вставить в этот элемент
let templatePicture = document
  .querySelector("#picture") // шаблон для копирования
  .content.querySelector(".picture");

let renderFoto = (foto) => {
  let fotoElement = templatePicture.cloneNode(true);
  let pictureImg = fotoElement.querySelector(".picture__img"); // Элемент с фото
  let pictureComments = fotoElement.querySelector(".picture__comments");
  let pictureLikes = fotoElement.querySelector(".picture__likes");
  pictureImg.src = foto.url;
  pictureComments.textContent = foto.comments.length;
  pictureLikes.textContent = foto.likes;
  // ----------------------------------------- Добавление Фото в  просмотр при нажатии //
  pictureImg.onclick = function () {
    bigPictureImg.src = foto.url;
    bigPicture.classList.remove("hidden");
  };

  return fotoElement;
};

let fragment = document.createDocumentFragment();
for (let i = 0; i < fotos.length; i++) {
  fragment.appendChild(renderFoto(fotos[i]));
}
usersFotos.appendChild(fragment);

// ========================================================================Второе задание==========================================================================//

// picture.forEach((item) => {
//   // Функция перебора  //
//   item.onclick = function () {
//     // Функция клика по маленькой фотографии //
//     bigPictureImg.src = foto.url;
//     console.log(item);
//   };
// });

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

// ....................................... Отслеживание и закрытие большой фотографии .................................................. //
bigPictureCancel.addEventListener("click", function () {
  bigPicture.classList.add("hidden");
});
document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    bigPicture.classList.add("hidden");
  }
});
// ....................................... Отслеживание и закрытие большой фотографии .................................................. //

let uploadFile = document.querySelector("#upload-file"); // Кнопка загрузки фотографий //
let imgUploadOverlay = document.querySelector(".img-upload__overlay"); // Окно редактирования //
let uploadCancel = document.querySelector("#upload-cancel"); // Кнопка закрытия окна редактирования //
uploadFile.onchange = () => {
  imgUploadOverlay.classList.remove("hidden"); // Показываем окно редактирования //
  body.classList.add("modal-open"); // Модальное окно открыто на все BODY //
};

// ===================================== Прячем окно рндактирования фотографии ===================================== //
uploadCancel.addEventListener("click", function () {
  imgUploadOverlay.classList.add("hidden");
  body.classList.remove("modal-open");
  uploadFile.value = uploadFile.defaultValue; // Сбрасываем значение defaultValue //
});

document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    imgUploadOverlay.classList.add("hidden");
    body.classList.remove("modal-open");
    uploadFile.value = uploadFile.defaultValue; // Сбрасываем значение defaultValue //
  }
});
// ===================================== Прячем окно рндактирования фотографии ===================================== //

// console.log(bigPictureCancel);
// userDialog.querySelector('.setup-similar').classList.remove('hidden');

// radios.forEach((item) => {
//   item.onchange = function (event) {
//     if (this.dataset.evaluation !== "good") {
//       // Сравинвает атрибут
//       submitButton.disabled = true;
//       error.classList.add("shown");
//     } else {
//       error.classList.remove("shown");
//       submitButton.disabled = false;
//       submitButton.addEventListener("click", function (evt) {
//         evt.preventDefault();
//       });
//     }
//   };
// });
