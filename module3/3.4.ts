{
  // instanceof guard operator

  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log("I am making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("I am barking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMew() {
      console.log("I am mewing");
    }
  }

  // smart way to hanlde function use

  const isDog = (animal: Animal) => {
    return animal instanceof Dog;
  };

  const getAnimal = (animal: Animal) => {
    if (animal instanceof Dog) {
      dog.makeBark();
    }
    if (animal instanceof Cat) {
      cat.makeMew();
    }
  };

  const dog = new Dog("Dog", "Gheu Gheu");
  const cat = new Cat("Cat bhai", "mew");
  dog.makeBark();
  cat.makeMew();

  getAnimal(dog);

  //
}
