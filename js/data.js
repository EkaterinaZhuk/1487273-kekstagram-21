"use strict";
(function () {
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
