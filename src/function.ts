//normal function
// default  parameter (last parameter e use krte hbe)
function add(num1:number , num2:number= 10):number {
    return num1 + num2;
}
add(39)

//spread operator
const myFriends = ['chandler', 'joey', 'ross'];
const newFriends = ['monica', 'rachel', 'pheobe', "joyee"];
myFriends.push(...newFriends);
console.log(myFriends);

// rest parameter
const greetFriends = (...friends:string[]): void => friends.forEach((element) => {
    console.log(`hi ${element}`)
});

greetFriends(...myFriends);





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
