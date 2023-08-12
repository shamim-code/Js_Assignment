class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
 
    introduce() {
      console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
  }
 
  class Student extends Person {
    constructor(name, age, major) {
      super(name, age);
      this.major = major;
    }
 
    introduce() {
      console.log(`Hello, I'm ${this.name}, I'm ${this.age} years old, and I'm majoring in ${this.major}.`);
    }
  }
 
  const person = new Person("Alice", 25);
  person.introduce();
 
  const student = new Student("Bob", 20, "Computer Science");
  student.introduce();