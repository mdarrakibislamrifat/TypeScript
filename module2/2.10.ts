{
  //

  const arrayOfNumebers: number[] = [1, 4, 5];
  const arrayOfString: string[] = ["1", "4", "5"];

  const arrOfstrings: string[] = arrayOfNumebers.map((number) =>
    number.toString()
  );
  console.log(arrOfstrings);

  type AreaNumber = {
    height: number;
    width: number;
  };

  //   type AreaString = {
  //     height: string;
  //     width: string;
  //   };

  type AreaString = {
    [key in keyof AreaNumber]: string;
  };

  //
}
