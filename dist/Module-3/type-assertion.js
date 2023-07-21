"use strict";
let emni;
emni = 'Next level';
emni;
emni; // 2 vabe likha jay
function kgToGram(param) {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `The converted result is : ${value} gram`;
    }
    if (typeof param === 'number') {
        return `The converted result is : ${param * 1000} gram`;
    }
}
const resultToBeNumber = kgToGram(3); // <number>kgToGram(3)
const resultToBeString = kgToGram(4); // <string>kgToGram(3)
try {
}
catch (error) {
    console.log(error.msg);
}
