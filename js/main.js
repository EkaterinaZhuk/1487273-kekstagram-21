"use strict";

// Массив с фотографиями
let fotos = [];
let description;
let likes;
// массив с комментариями
let comments = [
  "Всё отлично!, В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!",
];
console.log(comments);
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

// Функция для создания рандомного значения
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
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
console.log(fotos);

//.........................................................................................//
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

  return fotoElement;
};

let fragment = document.createDocumentFragment();
for (let i = 0; i < fotos.length; i++) {
  fragment.appendChild(renderFoto(fotos[i]));
}
usersFotos.appendChild(fragment);

// ========================================================================Второе задание==========================================================================//
let bigPicture = document.querySelector(".big-picture ");

let bigPictureImg = bigPicture.querySelector(".big-picture__img img");
bigPicture.classList.remove("hidden");
let likesCount = bigPicture.querySelector(".likes-count");
let commentsCount = bigPicture.querySelector(".comments-count");
let socialComments = bigPicture.querySelector(".social__comments");
let socialComment = socialComments.querySelectorAll(".social__comment"); // returns NodeList
let socialComment_array = Array.prototype.slice.call(socialComment); // преобразует NodeList в Array (Массив из 2 списков)
let socialCommentCount = bigPicture.querySelector(".social__comment-count");
let socialCaption = bigPicture.querySelector(".social__caption");
socialCommentCount.classList.add("hidden");
let commentsLoader = document.querySelector(".comments-loader");
commentsLoader.classList.add("hidden");
let body = document.querySelector("body");
body.classList.add("modal-open");

bigPictureImg.src = fotos[0].url;
likesCount.textContent = fotos[0].likes;
(commentsCount.textContent = getRandomIntInclusive(1, 50)),
  //

  socialComment_array.forEach((item, index) => {
    // перебираем массив с 2 списками по значению
    let socialPicture = item.querySelector(".social__picture"); //Аватар и имя комментатора
    let socialText = item.querySelector(".social__text"); //Комментарий
    socialPicture.src = fotos[0].comments[index].avatar; //Добавляем слуайный аватар
    socialText.textContent = fotos[0].comments[index].message;

    /*
<li class="social__comment">
    <img
        class="social__picture"
        src="{{аватар}}"
        alt="{{имя комментатора}}"
        width="35" height="35">
    <p class="social__text">{{текст комментария}}</p>
</li>
*/

    console.log(socialText);
    // return item
  });

const fotoComment = () => {
  for (let i = 1; i <= 6; i++) {
    let avatars = {
      url: `/img/avatar-${i}.svg`,
      name: names[0],
    };
  }
};

socialCaption.innerHTML = caption[0]; // Описание фотографии

// likesCount.textContent = bigPictures.likes;
// commentsCount.textContent = bigPictures.comments;
// socialCaption.innerHTML = bigPictures.description;
//.........................................................................................//

// userDialog.querySelector('.setup-similar').classList.remove('hidden');
