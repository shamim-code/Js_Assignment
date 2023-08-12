class Animal {
    constructor(name, sound) {
      this.name = name;
      this.sound = sound;
    }
 
    makeSound() {
      console.log(`${this.name} makes a sound: ${this.sound}`);
    }
  }
 
  class Dog extends Animal {
    fetch() {
      console.log(`${this.name} is fetching the ball!`);
    }
  }
 
  const cat = new Animal("Cat", "Meow");
  cat.makeSound();
