{
  // encapsulate

  class BankAccount {
    readonly id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }
    depositBalance(amount: number) {
      this._balance = this._balance + amount;
    }
    getBalance() {
      return this._balance;
    }
  }

  const goribManusAccount = new BankAccount(111, "Mr.Gorib", 20);

  goribManusAccount.depositBalance(20);
  const myBalance = goribManusAccount.getBalance();
  console.log(myBalance);

  //
}
