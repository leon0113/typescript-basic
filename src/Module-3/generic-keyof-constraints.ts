type PersonType = {
    name: string,
    age: number,
    address: string
};

type NewType = 'name' | 'age' | 'address' // manually done 

type KeyOfType = keyof PersonType;

// const a : NewType = 'age';

// const b : KeyOfType = 'name'

function getProperty<X, Y extends keyof X>(obj: X, key: Y){
 return obj[key]
}

const property = getProperty({name: 'MR', age: 34, salary: 1234}, 'salary');
console.log(property);