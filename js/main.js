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

// ========================================================================Второе задание==========================================================================//

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
uploadFile.addEventListener("change", function () {
  imgUploadOverlay.classList.remove("hidden"); // Показываем окно редактирования //
  body.classList.add("modal-open"); // Модальное окно открыто на все BODY //
});

// ======================================= работа с окном редактирования ============================================ //

// ========================================== Работа с масштабом ====================================================== //
let scaleControlSmaller = document.querySelector(".scale__control--smaller"); // Кнопка уменьшения изображения //
let scaleControlBigger = document.querySelector(".scale__control--bigger"); // Кнопка увеличения изображения //
let scaleControlValue = document.querySelector(".scale__control--value"); //  Поле, значение которого должно меняться //
let imgUploadPreview = document.querySelector(".img-upload__preview"); // картинка для редактирования //
let imgUploadEffectLevel = document.querySelector(".img-upload__effect-level"); // Слайдер //
let effectLevelPin = document.querySelector(".effect-level__pin"); // Ползунок в слайдере //
// let effectsPreviewNone = document.querySelector("effects__preview--none");
// effectLevelPin.addEventListener("mouseup", function () {});
imgUploadEffectLevel.classList.add("hidden");

scaleControlValue.value = "100";
scaleControlSmaller.addEventListener("click", function () {
  let number;
  let scaleValue = Number(scaleControlValue.value);
  if (scaleValue <= 100) {
    number = scaleValue - 25;
    scaleControlBigger.disabled = false;
  }
  if (scaleValue <= 50) {
    scaleControlSmaller.disabled = true;
  }
  scaleControlValue.value = number;
  imgUploadPreview.style.transform = `scale(${number / 100})`;
});
scaleControlBigger.addEventListener("click", function () {
  let number;
  let scaleValue = Number(scaleControlValue.value);
  if (scaleValue === 100) {
    scaleControlBigger.disabled = true;
    return;
  }
  if (scaleValue >= 25) {
    number = scaleValue + 25;
    scaleControlSmaller.disabled = false;
  }
  if (scaleValue >= 75) {
    scaleControlBigger.disabled = true;
  }
  scaleControlValue.value = number;
  imgUploadPreview.style.transform = `scale(${number / 100})`;
});

// =========================================== Наложение эффекта ===============================================//
let effectsRadio = document.querySelectorAll(".effects__radio");
let imgUploadPreviewImg = imgUploadPreview.querySelector("img");
effectsRadio.forEach((item) => {
  item.addEventListener("change", (evt) => {
    imgUploadPreviewImg.classList.value = ""; // При добавление нового класса, старый удаляется //
    imgUploadPreviewImg.classList.add(`effects__preview--${evt.target.value}`);
    if (imgUploadPreviewImg.classList.contains("effects__preview--none")) {
      imgUploadEffectLevel.classList.add("hidden");
    } else {
      imgUploadEffectLevel.classList.remove("hidden");
    }
  });
});

// ===================================== Ползунок ===================================== //
effectLevelPin.addEventListener("mouseup", () => {});
// ===================================== Ползунок ===================================== //

// ===================================== Прячем окно рндактирования фотографии ===================================== //
uploadCancel.addEventListener("click", function () {
  imgUploadOverlay.classList.add("hidden");
  body.classList.remove("modal-open");
  uploadFile.value = uploadFile.defaultValue; // Сбрасываем значение окна загрузки файла //
  scaleControlValue.value = "100"; // Возвращает значение поля увеличения //
  imgUploadPreview.style.transform = `scale(${scaleControlValue.value / 100})`;
  imgUploadPreviewImg.classList.value = "";
});

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    imgUploadOverlay.classList.add("hidden");
    body.classList.remove("modal-open");
    uploadFile.value = uploadFile.defaultValue; // Сбрасываем значение defaultValue //
    scaleControlValue.value = "100"; // Возвращает значение поля увеличения //
    imgUploadPreview.style.transform = `scale(${
      scaleControlValue.value / 100
    })`;
    imgUploadPreviewImg.classList.value = "";
  }
});
// ===================================== Прячем окно рндактирования фотографии ===================================== //

// ===================================== Работа с # ===================================== //
let textHashtags = document.querySelector(".text__hashtags");
let minNameLength = 2;
let maxNameLength = 20;
let maxItemHashtags = 5;
let textHashtagsValue = [];
let space = " ";
let comma = ",";
textHashtags.addEventListener("input", () => {
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

const onSplitString = (stringToSplit, space) => {
  let splitStringText = stringToSplit.split(space);
  textHashtagsValue = splitStringText.filter(Boolean); // Удалить пустой элемент массива
};

// textHashtagsValue.reduce((x, y) => (x.includes(y) ? x : [...x, y]), []);  Метод сортировки одинаковых элементов массива

//let onTextHashtags = () => {};
// textHashtags.addEventListener("invalid", () => {
//    if (textHashtags.validity.tooShort) {
//      textHashtags.setCustomValidity("Имя должно состоять минимум из 2-х символов");
//    } else if (textHashtags.validity.tooLong) {
//      textHashtags.setCustomValidity("Имя не должно превышать 20-ти символов");
//       максимальная длина одного хэш-тега 20 символов
//    } else {
//      textHashtags.setCustomValidity("");
//    }
//  });
//  console.log(textHashtags.value);

// ===================================== Работа с # ===================================== //
