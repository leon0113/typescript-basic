type User = {
    name : string,
    age : number
};

type extendedUser = User & {
    role : string;
}


//! interface / can be used only in objects / fuunctions/ array
interface IUser{
    name : string,
    age : number
};

interface IExtendedUser extends IUser {
    role : string;
};

const user1 : IExtendedUser = {
    name : 'Leon',
    age : 23,
    role : 'web developer'
}

// console.log(user1);

//? for functions  (type preffered)

interface IAddNumbers {
    (num1 : number, num2 : number) : number;
}

const addNumbers : IAddNumbers = (num1,num2) => num1 + num2;

// const userWithTypeAlias : User = {
//  name : 'leon',
//  age : 34
// }

// const userWithInterface : IUser = {
//     name : 'leon I',
//     age : 43
// }


//? for array (preffered type)

// type 
 
type roll1Type = number[];
  
const roll1 : roll1Type = [23,43,12,4,5];

// interface 
interface IRoll2{
    [index : number] : number;
}

const roll2 : IRoll2 = [2,4,5,6,6,7];