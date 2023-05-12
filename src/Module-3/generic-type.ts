// const rollNUmbers : number[] = [34,56,34,32];
// const rollNumbers2 : string[] = ['23', '43', '657'];



type GenericArray<T> = Array<T>;


type GenericTuple<X,Y> = [X,Y];

const relation : GenericTuple<string, string> = ['Leon', 'Shova'];

// interface IRelation {
//     name : string,
//     salary : number,
// }

// const relatoinSalary : GenericTuple<IRelation, string> = [
//     {  
//         name : "Leon",
//         salary : 30000
//     },
//     'Shoova'

// ]
// const relatoinSalary : GenericTuple<{name : string, salary : number}, string> = [
//     {
//         name : "Leon",
//         salary : 30000
//     },
//     'Shoova'

// ]


const rollNUmbers : GenericArray<number> = [34,56,34,32];
const rollNumbers2 : GenericArray<string> = ['23', '43', '657'];
const rollNumbers3 :  Array<boolean> = [true,false];

type nameRollType = {name : string, roll : number};

const userRollNumberAndName : GenericArray<nameRollType> = [
    {
        name : 'Leon',
        roll : 32
    },
    {
        name : "leonmmn",
        roll : 3
    }
];

