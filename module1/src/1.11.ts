{
  //

  const age: number = 18;
  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("Not adult");
  }

  const isAdult = age >= 18 ? "adult" : "not aduly";
  console.log(isAdult);

  //   nullish coalescing operator

  const isAuthenticate = null;
  const result1 = isAuthenticate ?? "guest";
  console.log(result1);
  const result2 = isAuthenticate ? isAuthenticate : "guest";
  console.log(result2);

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Rifat",
    address: {
      city: "Dhaka",
      road: "12",
      presentAddress: "Mirpur",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No Permanent Address";
  console.log(permanentAddress);
  //
}
