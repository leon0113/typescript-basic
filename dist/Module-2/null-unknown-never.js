"use strict";
// npx ts-node-dev --respawn .\src\null-unknown-never.ts
//! null type
const searchName = (value) => {
    if (value === null) {
        console.log("There is nothing to search");
    }
    else {
        console.log("Searching");
    }
};
searchName(null);
//! unknown type
const getMyCarSpeed = (speed) => {
    if (typeof speed === 'number') {
        const convertSpeed = (speed * 1000) / 3600;
        console.log(`My speed in m/s is ${convertSpeed}`);
    }
    if (typeof speed === 'string') {
        const [value, unit] = speed.split(' '); // ['10', 'KM/h']
        const convertSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(`My speed in m/s is ${convertSpeed}`);
    }
    else {
        console.log("This is wrong type");
    }
};
getMyCarSpeed(10);
getMyCarSpeed("20 KM/h");
//! never type // never returns anything
function throwError(msg) {
    throw new Error(msg);
}
throwError('leon');
