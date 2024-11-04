{
  //

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: number;
  };

  type NameAge = Pick<Person, "name" | "age">;

  //  omit

  type ContactInfo = Omit<Person, "name" | "age">;

  //   require

  type PersonRequired = Required<Person>;

  // partial

  type PersonPartial = Partial<Person>;

  //   read-only
  type PersonReadOnly = Readonly<Person>;
  const person1: PersonReadOnly = {
    name: "Rifat",
    age: 24,
    email: "rohanrifat43@gmil.com",
    contactNo: 1245457,
  };

  person1.name = "Mr.YZ";

  //   Recaord
  //   type MyObj = {
  //     a: string;
  //     b: string;
  //   };

  type MyObj = Record<string, string>;

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
  };

  //
}
