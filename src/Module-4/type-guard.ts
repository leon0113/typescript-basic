type AlphaNum = string | number

function addNum(num1: AlphaNum, num2: AlphaNum): AlphaNum | undefined {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    } else {
        return num1.toString() + num2.toString();
    }
}

const result1 = addNum('2', '4');
const result2 = addNum(3, 5);
console.log(result1, result2);

// in guard 
type NormalUser = {
    name: string;
}

type AdminUser = {
    name: string;
    role: 'admin';
}

function getUser(user: NormalUser | AdminUser) {
    if ('role' in user) {
        return `My name is ${user.name}. I am an ${user.role}`
    } else {
        return `My name is ${user.name}. I am just a user`
    }
}

const normalUser: NormalUser = {
    name: 'Leon'
};
const adminUser: AdminUser = {
    name: 'Johnson',
    role: 'admin'
}

console.log(getUser(adminUser));
console.log(getUser(normalUser));


//! ///////////////////////////// FOR CLASS ///////////////////////////

// instanceof guard
class Animal1 {
    name: string;
    species: string;
    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log(`The animal says hello`)
    }
}

class Dog extends Animal1 {
    constructor(name: string, species: string) {
        super(name, species);
    }
    makeBark() {
        console.log('Woof Woof');
    }
}

class Cat extends Animal1 {
    constructor(name: string, species: string) {
        super(name, species);
    }
    makeMeaw() {
        console.log("Meeeeoooow");
    }
}

function isDog(animal: Animal1): animal is Dog{
    return animal instanceof Dog
}
function isCat(animal: Animal1): animal is Cat{
    return animal instanceof Cat;
}

function getAnimal(animal: Animal1) {
    if (isDog(animal)) {
        animal.makeBark();
    } else if (isCat(animal)) {
        animal.makeMeaw();
    } else {
        animal.makeSound();
    }
}

const animal1 = new Dog('German Shepard', 'dog');  // instance -> dog
const animal2 = new Cat('Persian', 'cat'); // instance -> cat

getAnimal(animal2);






//? npx ts-node-dev --respawn ./src/Module-4/type-guard.ts


