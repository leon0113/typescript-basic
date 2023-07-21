"use strict";
class BankAcc1 {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    //! getter
    get balancee() {
        return this._balance;
    }
    //! setter
    set deposit(amount) {
        this._balance = this._balance + amount;
    }
}
const myAcc1 = new BankAcc1(444, 'leon', 40323);
myAcc1.deposit = 20;
console.log(myAcc1.balancee);
//? npx ts-node-dev --respawn ./src/Module-4/getter-setter.ts
