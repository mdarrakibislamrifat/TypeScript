{
  // promise
  const createPromise = () => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "Something";
      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data");
      }
    });
  };
  // calling createPromise function
  const showData = async () => {
    const data = await createPromise();
    console.log(data);
  };

  showData();
}

