{
  //

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "Rifat",
    age: 24,
    gender: "Male",
    contactNo: "256456",
    address: "Dhaka",
  };

  const student2: Student = {
    name: "Mir",
    age: 20,
    gender: "Male",
    address: "Mirpur",
  };

  const student3: Student = {
    name: "Mir",
    age: 20,
    gender: "Male",
    address: "Mirpur",
  };

  type UserName = string;

  const userName: UserName = "Rifat";
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;

  //
}
