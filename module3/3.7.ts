{
  // static

  class Counter {
    static count: number = 0;
    increment() {
      return (Counter.count = Counter.count + 1);
    }
    decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  const instance1 = new Counter();
  const instance2 = new Counter();
  const instance3 = new Counter();
  console.log(instance1.increment());
  console.log(instance2.increment());
  console.log(instance3.increment());
  console.log(instance1.decrement());
  //
}
