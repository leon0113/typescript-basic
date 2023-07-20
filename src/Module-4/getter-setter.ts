class BankAcc1 {
    public readonly id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }

    //! getter
    get balancee():number{
       return this._balance;
    }
    
    //! setter
    set deposit(amount: number){
         this._balance = this._balance + amount;
    }
}

const myAcc1 = new BankAcc1(444, 'leon', 40323);
myAcc1.deposit = 20;
console.log(myAcc1.balancee);







//? npx ts-node-dev --respawn ./src/Module-4/getter-setter.ts
