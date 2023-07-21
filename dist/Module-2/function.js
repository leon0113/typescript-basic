"use strict";
//normal function
// default  parameter (last parameter e use krte hbe)
function add(num1, num2 = 10) {
    return num1 + num2;
}
add(39);
//spread operator
const myFriends = ['chandler', 'joey', 'ross'];
const newFriends = ['monica', 'rachel', 'pheobe', "joyee", "ant"];
myFriends.push(...newFriends);
console.log(myFriends);
// rest parameter
const greetFriends = (...friends) => friends.forEach((element) => {
    console.log(`hi ${element}`);
});
greetFriends(...myFriends);
// arrow 
const addArrow = (num1, num2) => num1 + num2;
// callback
const arr = [1, 3, 5];
const newArr = arr.map((element) => element * 2);
const person = {
    name: 'Leon',
    balance: 5,
    addBalance(money) {
        return this.balance + money;
    }
};
