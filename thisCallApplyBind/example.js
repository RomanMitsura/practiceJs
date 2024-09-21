const car = {
  model: "Tyota",
  year: 2007,
  showModel: function (color, engine) {
    console.log(this.model, color, engine);
  },
};

const anotherCar = {
  model: "Benz",
  year: 1998,
};
// console.log(car.model);

car.showModel.apply(anotherCar, ["red", "disel"]);
car.showModel.call(anotherCar, "green", "gas");
const newFunc = car.showModel.bind(anotherCar);

newFunc("orange", "electro");
