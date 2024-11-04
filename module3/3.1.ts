{
  //
  class Animal {
    // cpnstructor
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}
    // method
    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  //   instance

  const dog = new Animal("German shepard", "sog", "gheu gheu");

  const cat = new Animal("Biral", "cat", "meu");
  cat.makeSound();
  //
}
