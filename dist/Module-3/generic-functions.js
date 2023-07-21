"use strict";
// arrow function
const createArray = (param) => {
    return [param];
};
const createArray1 = (param) => {
    return [param];
};
const createArray2 = (param1, param2) => {
    return [param1, param2];
};
createArray2("leon", "Dhaka");
createArray("leon");
createArray(23);
createArray(true);
createArray({
    name: "Leon",
    age: 25,
});
// Spread Operator 
// const newData = {...myInfo, crush};
// const addMeInMyCrushMind = <T>(myInfo: T) => {
//     const crush = 'Kate Winslet';
//     const newData = {...myInfo,crush}
//     return newData ;
// }
// const myInfo = {
//     name : 'Leon',
//     age : 24,
//     salary : 20000
// };
// const result = addMeInMyCrushMind(myInfo);
