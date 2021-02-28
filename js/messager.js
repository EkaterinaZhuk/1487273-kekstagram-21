"use strict";

// Вставить сюда
let chatContent = document.querySelector(".chat-content");

// Шаблон
let messageTemplate = document
  .querySelector("#message-template")
  .content.querySelector(".chat-message");

// Фщрма для отправки
let chatForm = document.querySelector(".chat-form");

// Кнопка отправить, запрещаем отправку по умолчанию
let chatFormButton = chatForm.querySelector(".chat-form-button");

// Поле для ввода текста
let chatFormInput = chatForm.querySelector(".chat-form-input");

let addMessage = (textMessage) => {
  // Функция добавления сообщений в DOM
  let message = messageTemplate.cloneNode(true); // Клонировали объект в пременную
  let chatMessageButton = message.querySelector(".chat-message-button"); // Кнопка с крестиком
  let chatMessageText = message.querySelector(".chat-message-text"); // Добавление тексового содержимого value в переменную
  chatMessageText.textContent = textMessage; // Добавление тексового содержимого value в DOM
  chatMessageButton.addEventListener("click", function () {
    // Удаление сообщения по клику на кнопку
    message.remove(); // Удаление сообщения
  });
  chatContent.appendChild(message); // Добавление тексового содержимого value в DOM
};

chatFormButton.addEventListener("click", function (evt) {
  // Навешиваем обработчик событий на кнопку
  evt.preventDefault();
  let text = chatFormInput.value; // Передаем текстовое содержимое input переменной
  addMessage(text); // Передаем переменную с содержимым input в аргумент функции  addMessage()
  chatFormInput.value = ""; //  Обнуляем текстовое значение input по нажатию на кнопку
});
