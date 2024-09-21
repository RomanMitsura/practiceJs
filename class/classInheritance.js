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
  writeCode() {
    console.log("Пишу код...", this.name);
  }

  sleep() {
    //переопределяем метод sleep для developer
    console.log("Не хочу спать пойду ещё попишу код");
    this.writeCode();
  }
}

class JavaScriptDeveloper extends Developer {
  makeFrontend() {
    console.log("Пишу фронт...");
  }

  eat() {
    super.eat(); //переиспользование функционала из родительского класса
    console.log("Смотрю ютуб"); //добавление функционала в eat для JavaScriptDeveloper
  }
}

const jsDeveloperExample = new JavaScriptDeveloper("Рома", 21);

jsDeveloperExample.eat();
