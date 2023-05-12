type User = {
    name : string,
    age : number
};

type extendedUser = User & {
    role : string;
}

//! interface
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

// const userWithTypeAlias : User = {
//  name : 'leon',
//  age : 34
// }

// const userWithInterface : IUser = {
//     name : 'leon I',
//     age : 43
// }