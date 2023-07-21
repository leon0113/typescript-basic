"use strict";
const addMeInMyCrushMind = (myInfo) => {
    const crush = 'Kate Winslet';
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const myInfo = {
    name: 'Leon',
    age: 22,
    salary: 20000,
    other: true
};
const result = addMeInMyCrushMind(myInfo);
