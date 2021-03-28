"use strict";
(function () {
  window.fotos = [];
  let comments = [
    "Всё отлично!, В целом всё неплохо. Но не всё.",
    "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
    "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
    "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
    "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!",
  ];
  // console.log(comments);

  // Массив с именами комментарий
  let names = [
    "Артем",
    "Антон",
    "Ярослав",
    "Евпатий",
    "Коловратий",
    "Григорий",
  ];

  // Функция для создания рандомного значения

  let getRandomIntInclusive = (min, max) => {
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
      fotos.push(foto);
    }
  };
  // createPhoto();
})();
