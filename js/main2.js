// ------------------------------------------- Модальное окно( показать - скрыть)----------------------------------------
/*
let popup = document.querySelector('.popup');
let openPopupButton = document.querySelector('.button-show');
let closePopupButton = document.querySelector('.button-hide');

openPopupButton.addEventListener('click', function (evt){
  evt.preventDefault();
  popup.classList.add('popup--open');
  });

closePopupButton.addEventListener('click', function (){
  popup.classList.remove('popup--open');
  });

document.addEventListener('keydown', function (evt){
  if(evt.keyCode === 27) {
    popup.classList.remove('popup--open');
    }
  });
Техническое задание

Нужно запрограммировать взаимодействие с пользователем.

В разметке есть попап (класс 'popup').

Клик по кнопке «Показать подробности» (класс 'button-show') должен вызвать показ окна на странице. У попапа должен появиться класс 'popup--open'.

Клик крестику в теле попапа (класс 'button-hide') должен спрятать окно со страницы. Для этого нужно удалить класс 'popup--open' у окна.

Кроме этого, если окно на странице, а пользователь нажал клавишу ESC, попап тоже должен исчезнуть. Закрытие попапа должно срабатывать только по этой клавише, нажатие на другие клавиши не должны влиять на положение всплывающего окна.

И не забывай, что кнопка «Показать подробности» свёрстана ссылкой. Не забудь отменить переход по этой ссылке.

*/

// ---------------------------------------------------------------------------------------------------------------------------

/*
Замена одного фото другим

var photos = [
  'gallery/laptop-large.jpg',
  'gallery/microphone-large.jpg',
  'gallery/keyboard-large.jpg',
  'gallery/signboard-large.jpg',
  'gallery/tree-large.jpg'
];


var thumbnails = document.querySelectorAll('.gallery__photo-preview');
var fullPhoto = document.querySelector('.full-photo');

var addThumbnailClickHandler = function (thumbnail, photo) {
  thumbnail.addEventListener('click', function () {
fullPhoto.src = photo;
  });
};

for (var i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i], photos[i]);
};
*/

// -----------------------------Поиск шаблона,клонирование и вставление шаблона, добавление события и класса hiden----------------------------------------------------------------------------------------------
/* var list = document.querySelector('.todo-list');
var items = list.children;
var emptyListMessage = document.querySelector('.empty-tasks');
var newItemForm = document.querySelector('.add-form');
var newItemTitle = newItemForm.querySelector('.add-form-input');
var taskTemplate = document.querySelector('#task-template').content;
var newItemTemplate = taskTemplate.querySelector('.todo-list-item');

var toggleEmptyListMessage = function () {
  if (items.length === 0) {
    emptyListMessage.classList.remove('hidden');
  } else {
    emptyListMessage.classList.add('hidden');
  }
};

var addCheckHandler = function (item) {
  var checkbox = item.querySelector('.todo-list-input');
  checkbox.addEventListener('change', function () {
    item.remove();
    toggleEmptyListMessage();
  });
};

for (var i = 0; i < items.length; i++) {
  addCheckHandler(items[i]);
}

newItemForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  var taskText = newItemTitle.value;
  var task = newItemTemplate.cloneNode(true);
  var taskDescription = task.querySelector('span');
  taskDescription.textContent = taskText;
  addCheckHandler(task);

  list.appendChild(task);
  toggleEmptyListMessage();
  newItemTitle.value = '';
});
*/
// --------------------------------------------------------Отслеживане радиокнопки и вывод сообщения об ошибке с блокировкой кнопки отправить-------------------------------------------------------------------
/*
let radios = document.querySelectorAll('.review');
let submitButton = document.querySelector('.submit-button');
let error = document.querySelector('.error');
let  dataEvaluation = document.querySelector('data-evaluation');


1. У всех радиокнопок есть класс review.
2. Чтобы отслеживать переключение радиокнопок, нужно добавить обработчик событий onchange каждой радиокнопке.
3. У каждой радиокнопки есть атрибут data-evaluation. Если отзыв хороший, значение этого атрибута – 'good', а если плохой - 'bad'.
4. Кнопка отправки имеет класс submit-button. Если пользователь выбрал плохой отзыв, кнопку нужно заблокировать, а если хороший — разблокировать.
5. Чтобы показать сигнал об ошибке, элементу с классом error нужно добавить класс shown. Сигнал нужно показывать, если пользователь выбрал плохой отзыв. Если выбран хороший отзыв, сигнал об ошибке нужно спрятать.

*/
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
