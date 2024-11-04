{
  // type assertion

  let anything: any;
  anything = "Next Level Web Development";
  anything as string;

  try {
  } catch (error: string) {
    console.log(error.message);
  }
}
