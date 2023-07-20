class counter {
    counter: number;
    constructor(counter: number) {
        this.counter = counter;
    }
    increment(): number {
        return this.counter = this.counter + 1;
    }
    decrement(): number {
        return this.counter = this.counter - 1;
    }
}