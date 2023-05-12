//! ternary operator

const age: number = 15;

// if(age >= 18){
//     console.log('Yes');
// }
// else{
//     console.log('No');
// }

const isAdult = age >= 18 ? "Yes" : "No";

// console.log(isAdult);


// Nullish coalescring operator
// Null and Undefined

const isAuthenticatedUser = '';
const userName = isAuthenticatedUser ?? 'Guest'; 
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : 'Guest';
// console.log({userName}, {userName2});


type Manush = {
    name: string,
    age: number,
    address : {
        city : 'No city',
        road : 'No road',
        home? : '';
    }
};

const manush2 : Manush = {
    name : 'Leon',
    age : 25,
    address : {
        city : 'No city',
        road : 'No road',
        // home : ''
    }
};

const home = manush2?.address?.home ?? 'No home';  // jdi home thake to diba naile 'No home diba
console.log(home);