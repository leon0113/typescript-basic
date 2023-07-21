"use strict";
// Common class
class Common {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours) {
        return `This ${this.name} will sleep for ${hours}`;
    }
}
// student class
class Student extends Common {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
const student1 = new Student('Leon', 24, 'Dhaka');
// student1.
// teacher class
class Teacher extends Common {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation; //different
    }
    takeClasses(classNo) {
        return `This ${this.name} will take ${classNo} classes`;
    }
}
const teacher1 = new Teacher('Tahjib', 32, 'khulna', 'lecturer');
// const resul = teacher1.takeClasses(5)
// console.log(resul);
//? npx ts-node-dev --respawn ./src/Module-4/inheritence.ts
