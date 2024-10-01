// "use strict";

// //filter

// const names = ["Ivan", "Roman", "Voldemar", "Ksenia"];

// const shortNames = names.filter((item) => {
//   return item.length < 5;
// });

// console.log(shortNames);

// //map - изменяет исходный массив.

// let answers = ["ivaN", "AnnA", "RoMAN"];

// answers = answers.map((item) => item.toLowerCase());

// console.log(answers);

// // every/some (возвращают true или false)

// //some - перебирает массив и если хоть один из подходит под заданное условие
// //в callback`e то вернет true, в противном случан false

// //every - перебирает массив и если все элементы подходят под условие
// // то возвращается true. Если хоть один не подходит возвращает false

// // const some = [4, "fsdfs", 6];

// // console.log(
// //   some.every((item) => {
// //     return typeof item === "number";
// //   })
// // );
// // //false

// // //reduce

// // const arr = ["Apple", "Orange", "pear"];

// // const res = arr.reduce((sum, current) => `${sum}, ${current}`, 3);
// // //sum - куда помещается результат. current - текущий элемент массива.
// // //После колбек функции можем передать значение которое будет начальным.

// // console.log(res);

// const obj = {
//   ivan: "persone",
//   ann: "persone",
//   dog: "animal",
//   cat: "animal",
// };

// const newArr = Object.entries(obj); //сделать из объекта массив масивов

// const res = newArr
//   .filter((item) => {
//     return item[1] == "persone";
//   })
//   .map((item) => {
//     return item[0];
//   });

// console.log(res); //[ 'ivan', 'ann' ]

const films = [
  {
    name: "Titanic",
    rating: 9,
  },
  {
    name: "Die hard 5",
    rating: 5,
  },
  {
    name: "Matrix",
    rating: 8,
  },
  {
    name: "Some bad film",
    rating: 4,
  },
];

function showGoodFilms(arr) {
  const res = arr.filter((item) => {
    return item.rating >= 8;
  });
  return res;
}

function showListOfFilms(arr) {
  const res = arr.reduce((ans, films) => `${ans}, ${films.name}`, "");
  return res.slice(2);
}

function setFilmsIds(arr) {
  const res = arr.map((item, index) => {
    item.id = index;
    return item;
  });
  return res;
}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
  const res = arr.every((item) => {
    return typeof item.id !== "undefined";
  });
  return res;
}

checkFilms(tranformedArray);

const funds = [
  { amount: -1400 },
  { amount: 2400 },
  { amount: -1000 },
  { amount: 500 },
  { amount: 10400 },
  { amount: -11400 },
];

const getPositiveIncomeAmount = (data) => {
  const res = data
    .filter((item) => item.amount > 0)
    .reduce((sum, current) => sum + current.amount, 0);
  return res;
};

// console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
  const res = data.some((item) => item.amount < 0)
    ? data.reduce((sum, current) => sum + current.amount, 0)
    : getPositiveIncomeAmount(funds);
  return res;
};

// console.log(getTotalIncomeAmount(funds));
