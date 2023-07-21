"use strict";
//! interface
// interface IVehicle{
//     name: string;
//     model: string;
// }
// const vehicle: IVehicle = {
//     name: 'BMW',
//     model: '2000'
// }
// interface IVehicle{
//     startEngine():void;
//     stopEngine():void;
//     move(): void;
// }
// class Vehicle implements IVehicle{
//     constructor(
//         public name: string,
//         public Brand: string,
//         public Model: string
//     ){}
//     startEngine(): void {
//         console.log(`I am starting enngine on ${this.Brand}`);
//     }
//     stopEngine(): void {
//         console.log('stopping engine');
//     }
//     move(): void {
//         console.log('I am moving');
//     }
//     test(){
//         console.log('test');
//     }
// }
// const vehicle1 = new Vehicle('car', 'bmw', '2014');
// console.log(vehicle1.startEngine());
//! abstract class
class Vehicle {
    constructor(name, Brand, Model) {
        this.name = name;
        this.Brand = Brand;
        this.Model = Model;
    }
    move() {
        console.log('I am moving');
    }
}
class Car1 extends Vehicle {
    startEngine() {
        console.log('start');
    }
    stopEngine() {
        console.log("stop");
    }
}
// const car1 = new Vehicle('car', 'honda', '123');
//? npx ts-node-dev --respawn ./src/Module-4/abstraction.ts
