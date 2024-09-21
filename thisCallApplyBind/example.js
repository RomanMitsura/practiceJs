const car = {
  model: "Tyota",
  year: 2007,
  showModel: function () {
    console.log(this.model);
  },
};

const anotherCar = {
  model: "Benz",
  year: 1998,
};
// console.log(car.model);

const test = car.showModel.bind(anotherCar);
test();
