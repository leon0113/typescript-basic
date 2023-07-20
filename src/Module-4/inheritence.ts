// Common class
class Common {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    makeSleep(hours: number): string {
        return `This ${this.name} will sleep for ${hours}`;
    }
}
// student class
class Student extends Common {
    constructor(name: string, age: number, address: string) {
        super(name, age, address)
    }
}
const student1 = new Student('Leon', 24, 'Dhaka');
student1.
// teacher class
class Teacher extends Common {
    designation: string;
    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address);
        this.designation = designation; //different
    }
    takeClasses(classNo: number): string {                   // different
        return `This ${this.name} will take ${classNo} classes`;
    }
}

const teacher1 = new Teacher('Tahjib', 32, 'khulna', 'lecturer');

teacher1.



























//? npx ts-node-dev --respawn ./src/Module-4/inheritence.ts