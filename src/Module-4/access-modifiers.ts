class BankAcc {
    public readonly id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    getBalance() {
        console.log(`My current balance is ${this._balance}`);
    };
    addDiposit(amount: number) {
        this._balance = this._balance + amount;
    }
}

const myAcc = new BankAcc(444, 'leon', 40323);
myAcc.addDiposit(20);
myAcc.getBalance();








// myAcc.balance = 0; // only accessable for class
// console.log(myAcc);


// class StudentAcc extends BankAcc{
//     test(){
//         this.
//     }
// }





//? npx ts-node-dev --respawn ./src/Module-4/access-modifiers.ts