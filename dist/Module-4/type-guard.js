"use strict";
function addNum(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else {
        return num1.toString() + num2.toString();
    }
}
const result1 = addNum('2', '4');
const result2 = addNum(3, 5);
console.log(result1, result2);
function getUser(user) {
    if ('role' in user) {
        return `My name is ${user.name}. I am an ${user.role}`;
    }
    else {
        return `My name is ${user.name}. I am just a user`;
    }
}
const normalUser = {
    name: 'Leon'
};
const adminUser = {
    name: 'Johnson',
    role: 'admin'
};
console.log(getUser(adminUser));
console.log(getUser(normalUser));
//! ///////////////////////////// FOR CLASS ///////////////////////////
// instanceof guard
class Animal1 {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log(`The animal says hello`);
    }
}
class Dog extends Animal1 {
    constructor(name, species) {
        super(name, species);
    }
    makeBark() {
        console.log('Woof Woof');
    }
}
class Cat extends Animal1 {
    constructor(name, species) {
        super(name, species);
    }
    makeMeaw() {
        console.log("Meeeeoooow");
    }
}
function isDog(animal) {
    return animal instanceof Dog;
}
function isCat(animal) {
    return animal instanceof Cat;
}
function getAnimal(animal) {
    if (isDog(animal)) {
        animal.makeBark();
    }
    else if (isCat(animal)) {
        animal.makeMeaw();
    }
    else {
        animal.makeSound();
    }
}
const animal1 = new Dog('German Shepard', 'dog'); // instance -> dog
const animal2 = new Cat('Persian', 'cat'); // instance -> cat
getAnimal(animal2);
//? npx ts-node-dev --respawn ./src/Module-4/type-guard.ts
