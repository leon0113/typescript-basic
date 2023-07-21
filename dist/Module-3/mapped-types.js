"use strict";
const arrayOfNumbers = [1, 2, 3];
const arrayOfString = arrayOfNumbers.map((number) => number.toString());
console.log(arrayOfString);
const area1 = { height: 5, width: '10' };
const area = {
    height: 10,
    width: 5
};
// area.width = 10; // cant access
// type A = AreaNumber['height'] // look up types
// type B = keyof AreaNumber;  // 'height | 'width'
//! npx ts-node-dev --respawn ./src/Module-3/mapped-types.ts
