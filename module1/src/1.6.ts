function myFunction(num1: number, num2: number) {
  const sum = num1 + num2;
  console.log(sum);
}
myFunction(2, 2);

const addarrow = (num1: number, num2: number): number => num1 + num2;

const poorUser = {
  name: "Rifat",
  balance: 0,
  addBalance(balance: number) {
    return this.balance + balance;
  },
};

const arr: number[] = [2, 4, 6];
const newArray = arr.map((ele: number): number => ele * ele);
