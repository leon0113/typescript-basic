const arrayOfNumbers = [1, 2, 3];
const arrayOfString = arrayOfNumbers.map((number) => number.toString());
console.log(arrayOfString);

type Volume = {
    height: number;
    width: number;
    depth: number;
};

// const obj = {
//     name:"Leon"
// };
// obj['name']

type Area = {
    [key in keyof Volume]: string
}

type AreaString = {
    height: string;
    width: string;
};

type AreaReadOnly = {
 readonly   height: number;
 readonly   width: number;
}


const area: AreaReadOnly = {
    height: 10,
    width: 5
};

// area.width = 10;  cant access

type A = AreaNumber['height'] // look up types
type B = keyof AreaNumber;  // 'height | 'width'













//! npx ts-node-dev --respawn ./src/Module-3/mapped-types.ts