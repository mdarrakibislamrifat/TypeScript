// spread operator
// destructuring

{
  const user = {
    id: 123,
    name: {
      firstName: "Rakib",
      middleName: "Islam",
      lastName: "Rifat",
    },
    contactNo: "175675786",
    address: "Bangladesh",
  };
  const {
    contactNo,
    name: { firstName },
  } = user;
}

// array destructuring

const myFriends = ["Arif", "Sorif", "kamal", "Miya", "Jalal", "Kodu Lau"];

const [, , bestFriend, ...rest] = myFriends;
