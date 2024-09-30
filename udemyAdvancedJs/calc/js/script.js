"use strict";

const inputRub = document.querySelector("#rub"),
  inputUsd = document.querySelector("#usd");

inputRub.addEventListener("input", () => {
  //добавляем обработчик событий input
  const request = new XMLHttpRequest(); //конструктос создающий объект XMLHttpRequest

  request.open("GET", "js/current.json"); //метод open. Собирает настройки для запроса.
  //Синтаксис - request.open(method,url, async, login, password  )
  //method - метод запроса, в основном 'GET' или 'POST'
  //url - путь к серверу. Строим относительно html документа
  //async - отвечает за асинхронность. true false. По умолчанию true
  //login и password для авторизации на каких либо ресурсах

  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send(); //Отвраляем запрос

  request.addEventListener("load", () => {
    if (request.status === 200) {
      const data = JSON.parse(request.response); //обычный JS объект полученный из JSON ответа сервера
      inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    } else {
      inputUsd.value = "smth wrong";
    }
  }); //событие отслеживает готовность нашего запроса в данный текущий момент

  //statusText - объяснение состояния ответа от сервера
  //response - ответ от сервера
  //readyState - содержит текущее состояние запроса
});

//То же действие только что обратного перевода
inputUsd.addEventListener("input", () => {
  const request = new XMLHttpRequest();

  request.open("GET", "js/current.json");
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const data = JSON.parse(request.response);
      inputRub.value = +inputUsd.value * data.current.usd;
    }
  });
});
