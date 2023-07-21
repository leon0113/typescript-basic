"use strict";
//! ternary operator
var _a, _b;
const age = 15;
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
const userName = isAuthenticatedUser !== null && isAuthenticatedUser !== void 0 ? isAuthenticatedUser : 'Guest';
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : 'Guest';
const manush2 = {
    name: 'Leon',
    age: 25,
    address: {
        city: 'No city',
        road: 'No road',
        // home : ''
    }
};
const home = (_b = (_a = manush2 === null || manush2 === void 0 ? void 0 : manush2.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : 'No home'; // jdi home thake to diba naile 'No home diba
console.log(home);
