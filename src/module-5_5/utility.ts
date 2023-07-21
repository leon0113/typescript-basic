//! Pick
interface Person1 {
    name: string;
    email?: string;
    contact: number;
}
// Pick is generic type that recieves two arguments..first one is the interface from where i want to take the type and second one is the property name
type Email = Pick<Person1, "email">;
type Info = Pick<Person1, "email" | "contact">;


//! Omit
type Name = Omit<Person1, "email" | "contact">;

//! Partial 
// To make all the propertise optional types
type Optional = Partial<Person1>;

//! Require
type Require = Required<Person1>;

const people: Readonly<Person1> = {
    name:"John",
    email: "efas@gmail.com",
    contact :9876543201
}

// people.name = "leon"; // cannt access bcz its readonly

//! Record
// type MyObj = {
//     a:string;
//     b: string;
//     c: string;
// }

//? using index signature 
// type MyObj ={
//     [Key: string]: string;
// }

// Record 'a' | 'b' | 'c'
type MyObj = Record<'a' | 'b' | 'c',string>

const obj: MyObj ={
    a: "1",
    b: "2",
    c: "3",
    // d: "4"
}
