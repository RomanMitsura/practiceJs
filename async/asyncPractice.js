// setTimeout(() => {
//   alert("Сработает через 2 секунды");
// }, 2000);

// const longMessage = (name, age) => {
//   alert(`Привет меня зовут ${name} и мне ${age}`);
// };

// setTimeout(longMessage, 2000, "Рома", 21); // передаем аргументы для функции конце

// const logMessage = () => {
//   alert("qqqqqqqq");
// };

// const timerID = setTimeout(logMessage, 3000);

// clearTimeout(timerID);

//Interval

// const intervalId = setInterval(() => {
//   console.log("Привет");
// }, 2000);

// setTimeout(() => {
//   clearInterval(intervalId);
// }, 5000);

setInterval(() => {
  alert("Раз в секунду"); //Окна будут наклыдваться друг на друга. Код может не выполниться как надо
}, 1000);

setTimeout(function logMessage() {
  alert("1 time a sec");

  setTimeout(logMessage, 1000);
}, 1000);
