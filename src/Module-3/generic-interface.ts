///! Generic Interface

interface ICrush<T, U = null> {
    name : string;
    husband : T;
    wife? : U;
}

const crush5 : ICrush<boolean> = {
    name : "Kate",
     husband: true
};
const crush6 : ICrush<string, string> = {
    name : "Kate",
     husband: "John",
     wife : "Mary",
};

interface IWife {
    name : string;
    age : number
;}

const crush7 : ICrush<object, IWife> = {
    name : "Kate",
     husband: {
        name : "Leon",
        salary : 45353
     },
     wife : {
        name : 'mary',
        age : 40
     }
};

//! /////


interface IRelation {
    name : string,
    salary : number,
}

const relatoinSalary : GenericTuple<IRelation, string> = [
    {  
        name : "Leon",
        salary : 30000
    },
    'Shoova'

];