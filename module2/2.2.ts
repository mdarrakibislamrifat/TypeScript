{
  //

  // interface
  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  type UserWithRole1 = User1 & { role: string };

  interface UserWithRole2 extends User2 {
    role: string;
  }

  const user1: UserWithRole2 = {
    name: "Rifat",
    age: 24,
    role: "Admin",
  };

  type arr1 = number[];

  interface arr2 {
    [index: number]: number;
  }

  const array: arr2 = [1, 2, 3];

  //
}
