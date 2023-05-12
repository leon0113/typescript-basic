let emni : any;

emni = 'Next level';

(emni as string);
<string>emni // 2 vabe likha jay

function kgToGram (param : string | number): string|number|undefined {
    if(typeof param === 'string'){
        const value = parseFloat(param) * 1000;
       return `The converted result is : ${value} gram`
    }
    if(typeof param === 'number'){
        return `The converted result is : ${param * 1000} gram`
    }
}

const resultToBeNumber = kgToGram(3) as number;  // <number>kgToGram(3)
const resultToBeString = kgToGram(4) as string; // <string>kgToGram(3)
// console.log(resultToBeNumber, resultToBeString);

type CustomError = {
    msg : string
};

try {
    
} catch (error) {
    console.log((error as CustomError).msg);
}