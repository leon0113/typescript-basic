//normal function

function add(num1:number, num2:number):number {
    return num1 + num2;
}

// arrow 

const addArrow = (num1: number, num2: number): number => num1 + num2;

// callback
const arr = [1,3,5];

const newArr = arr.map((element:number) => element*2);


const person:{
    name: string,
    balance: number,
    addBalance(money:number):number
} = {
    name : 'Leon',
    balance : 5,
    addBalance(money){
        return this.balance + money;
    }
}
