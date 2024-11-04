{
  // inheritence

  class Parent {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }
  }

  class Student extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }
  }

  const student1 = new Student("Mr.student", 20, "uganda");
  student1.getSleep(20);

  class Teacher extends Parent {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
    takeClass(numOfClass: number) {
      console.log(`${this.name} will take  ${numOfClass} class`);
    }
  }

  const teacher1 = new Teacher("Mr.x", 44, "Dhaka", "professor");
  teacher1.takeClass(7);
  //
}
