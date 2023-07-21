"use strict";
// const a : NewType = 'age';
// const b : KeyOfType = 'name'
function getProperty(obj, key) {
    return obj[key];
}
const property = getProperty({ name: 'MR', age: 34, salary: 1234 }, 'salary');
console.log(property);
