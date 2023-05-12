type CrushType = {
    name : string,
    age? : number,
    profession : string,
    address : string
}

const crush1 : CrushType = {
    name : "Crush",
    age : 22,
    profession : "Developer",
    address : "Dhaka"
}
const crush2  : CrushType = {
    name : "Crush1",
    profession : "web Developer",
    address : "Khulna"
};

type CrushMarriedType = boolean;

const isMarried : CrushMarriedType = false;

type CourseName = string;

const courseName : CourseName = "next level web development";


// const calculate = (
//     num1 : number,
//      num2 : number,
//      operation: (x : number, y : number) => number
//      ) => {
//     return operation(num1, num2);
// }

// calculate(10, 20, (x,y) => x+y);
// calculate(10, 20, (x,y) => x-y);
// calculate(10, 20, (x,y) => x/y);
// calculate(10, 20, (x,y) => x*y);
type OperationType = (x:number,y:number) => number;
const calculate = (
    num1 : number,
     num2 : number,
     operation: OperationType
     ) => {
    return operation(num1, num2);
}

calculate(10, 20, (x,y) => x+y);
calculate(10, 20, (x,y) => x-y);
calculate(10, 20, (x,y) => x/y);
calculate(10, 20, (x,y) => x*y);