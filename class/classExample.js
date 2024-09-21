class Student {
  #city; //для пользования приватным значения добавляем его в тело класса.
  //Если мы хотим что б оно было приватным и из вне к нему нельзя было обратить внесто _city или
  //_someSecretAction пишем #city и #someSecretAction соответсвенно. Не забываем объявить их в теле класса

  planet = "Земля"; //свойства
  country = "Россия";
  region;

  constructor(name, age) {
    //конструктор
    this.name = name;
    this.age = age;

    this.#someSecretAction();
  }

  set city(value) {
    //сетер
    const firstLetter = value[0].toUpperCase();
    const fromSecondLetter = value.slice(1).toLowerCase();

    this._city = `${firstLetter}${fromSecondLetter}`;
  }

  get city() {
    //гетер
    return `г.${this._city}`;
  }

  set lastName(value) {
    //сетер
    const firstLetter = value[0].toUpperCase();
    const fromSecondLetter = value.slice(1).toLowerCase();

    this._lastName = `${firstLetter}${fromSecondLetter}`;
  }

  get lastName() {
    //гетер
    return `Фамилия этого студента ${this._lastName}`;
  }

  logAge() {
    //метод
    console.log(this.age);
  }

  #someSecretAction() {
    //скрытый метод к которому нельзя обращаться вне класса
    //
  }
}

const firstStudent = new Student("Вася", 18);

firstStudent.city = "гомель";
firstStudent.lastName = "мицура";

console.log(firstStudent.lastName);
console.log(firstStudent.city);

// const secondStudent = new Student("Вера", 21);

// console.log("firststudent", firstStudent);
// console.log("secondStudent", secondStudent);

// firstStudent.logAge();
