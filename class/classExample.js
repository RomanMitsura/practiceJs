class Student {
  planet = "Земля";
  country = "Россия";
  region;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  logAge() {
    console.log(this.age);
  }
}

const firstStudent = new Student("Вася", 18);
const secondStudent = new Student("Вера", 21);

console.log("firststudent", firstStudent);
console.log("secondStudent", secondStudent);

firstStudent.logAge();
