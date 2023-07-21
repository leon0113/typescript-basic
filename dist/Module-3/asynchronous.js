"use strict";
//! json  placeholder 
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getTodo = () => __awaiter(void 0, void 0, void 0, function* () {
    const reponse = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
    return yield reponse.json();
});
const getTodoData = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield getTodo();
    console.log(result);
});
getTodoData();
//! Mockinng
// string
const makePromise = () => {
    return new Promise((resolve, reject) => {
        const data = 'Data is fatched';
        if (data) {
            resolve(data);
        }
        else {
            reject('Failed to fatch data');
        }
    });
};
const getPromiseData = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromise();
    return data;
});
// for boolean
const makePromise1 = () => {
    return new Promise((resolve, reject) => {
        const data = true;
        if (data) {
            resolve(data);
        }
        else {
            reject('Failed to fatch data');
        }
    });
};
const getPromiseData1 = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromise1();
    return data;
});
;
const makePromise2 = () => {
    return new Promise((resolve, reject) => {
        const data = { data: 'Data is fatched' };
        if (data) {
            resolve(data);
        }
        else {
            reject('Failed to fatch data');
        }
    });
};
const getPromiseData2 = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromise2();
    return data;
});
