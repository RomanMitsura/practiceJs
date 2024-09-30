class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log("Ем...");
  }
  sleep() {
    console.log("Сплю...");
  }
}

const examplePerson = new Person("Рома", 21);

//Создаем класс developer который является полной копией класса Person
class Developer extends Person {
  constructor(name, age, experience) {
    // добавление параметра опыт для конструктора developer
    super(name, age); // вызов конструктора родительского класса
    this.experience = experience;
  }

  writeCode() {
    console.log("Пишу код...", this.name);
  }

  sleep() {
    //переопределяем метод sleep для developer
    console.log("Не хочу спать пойду ещё попишу код");
    this.writeCode();
  }
}

const developerExample = new Developer("Миша", 21, 3);

console.log(developerExample.experience);
