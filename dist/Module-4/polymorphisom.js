"use strict";
class Person {
    takeNap() {
        console.log('I sleeping for 8 hours per day');
    }
}
class Student1 extends Person {
    takeNap() {
        console.log(`I am sleeping 10 hours per day`);
    }
}
class Developer extends Person {
    takeNap() {
        console.log(`I am sleeping 5 hours per day`);
    }
}
function getNap(param) {
    param.takeNap();
}
const person1 = new Person();
const person2 = new Student1();
const person3 = new Developer();
getNap(person1);
getNap(person2);
getNap(person3);
class Shape {
    getArea() {
        return 0;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
}
function getAreaOfShape(param) {
    console.log(param.getArea());
}
getAreaOfShape(new Circle(10));
getAreaOfShape(new Rectangle(10, 5));
//? npx ts-node-dev --respawn ./src/Module-4/polymorphisom.ts
