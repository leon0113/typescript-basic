// arrow function


const createArray = <T>(param: T): T[] => {
    return [param];
};
const createArray1 = (param: string): string[] => {
    return [param];
};
const createArray2 = <X,Y>(param1: X, param2: Y): [X,Y] => {
    return [param1, param2];
};

createArray2<string, string>("leon", "Dhaka")
createArray<string>("leon")
createArray<number>(23)
createArray<boolean>(true)

type NameType = { name: string, age: number }

createArray<NameType>({
    name: "Leon",
    age: 25,
})


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