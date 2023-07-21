"use strict";
class Counter {
    static increment() {
        return Counter.counter = Counter.counter + 1;
    }
    static decrement() {
        return Counter.counter = Counter.counter - 1;
    }
}
Counter.counter = 0;
// const instance1 = new Counter();
// const instance2 = new Counter();
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.decrement());
console.log(Counter.increment());
//? npx ts-node-dev --respawn ./src/Module-4/static.ts
