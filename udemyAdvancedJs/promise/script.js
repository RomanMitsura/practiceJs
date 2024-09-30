// //////////

// console.log("Запрос данных...");

// const req = new Promise(function (resolve, reject) {
//   //resolve - что то выполнилось правильно. reject - что то не выполнилось
//   setTimeout(() => {
//     console.log("Подготовка данных");

//     const product = {
//       name: "TV",
//       price: 2000,
//     };

//     /// можем заменить функцией resolve
//     resolve(product); //передаем то что возвращаем при необходимости
//     ///
//   }, 1000);
// });

// req
//   .then((product) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         product.status = "order";
//         resolve(product);
//       }, 1000);
//     });
//   })
//   .then((data) => {
//     data.modify = true;
//     return data;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch(() => { // При условии ошибки. Если нам на пути встерчается вызов reject то выполняется блок кода catch. Так
//     // же если нам встерчается resolve() то выполняется блок кода catch
//     console.error("Произошла ошибка");
//   })
//   .finally(() => {//Действие выполниматся при любом условии
//     console.log("Действия выполнены");
//   });

const test = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}; //функция для запуска одинаковых операций через определенный промежуток времени

// test(1000).then(() => console.log("1000 мс"));
// test(2000).then(() => console.log("2000 мс"));

Promise.all([test(1000), test(2000)]).then(() => {
  console.log("all");
}); //Принимает массив промисов. Ждет окончания всех промисов и только потом будет что то выполнять.
//Так же можем ставить обработчик catch если один из промисов "не работает"
//В данном случае оба промиса у нас выполнились через 2 секнуды и результат появится только через 2 секунды
//т.е. после того как выполнятся все промисы

Promise.race([test(1000), test(2000)]).then(() => {
  console.log("race");
}); //Работает наоборот от all. Выполняется тогда когда первый из передаваемых Promise отрабатывает
