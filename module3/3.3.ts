{
  // type guards

  // typeof--> type guard
  type AlphaNeumaric = string | number;

  const add = (param1: AlphaNeumaric, param2: AlphaNeumaric): AlphaNeumaric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add("2", 2);
  console.log(result1);

  //   in guard

  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };

  const normalUser: NormalUser = {
    name: "Mr.Nomral Bhai",
  };

  const adminUser: AdminUser = {
    name: "Mr.Admin Bhai",
    role: "admin",
  };

  getUser(adminUser);

  //
}
