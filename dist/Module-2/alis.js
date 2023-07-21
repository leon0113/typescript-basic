"use strict";
const crush1 = {
    name: "Crush",
    age: 22,
    profession: "Developer",
    address: "Dhaka"
};
const crush2 = {
    name: "Crush1",
    profession: "web Developer",
    address: "Khulna"
};
const isMarried = false;
const courseName = "next level web development";
const calculate = (num1, num2, operation) => {
    return operation(num1, num2);
};
calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
calculate(10, 20, (x, y) => x / y);
calculate(10, 20, (x, y) => x * y);
