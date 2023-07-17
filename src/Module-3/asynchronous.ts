


//! json  placeholder 

interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const getTodo = async (): Promise<ITodo> => {
    const reponse = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return await reponse.json();
};

const getTodoData = async(): Promise<void> => {
    const result = await getTodo();
    console.log(result);
};

getTodoData();


//! Mockinng


const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = 'Data is fatched';
        if (data) {
            resolve(data)
        } else {
            reject('Failed to fatch data')
        }
    });
};

const getPromiseData = async (): Promise<string> => {
    const data = await makePromise();
    return data
}
// for boolean
const makePromise1 = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        const data: boolean = true;
        if (data) {
            resolve(data)
        } else {
            reject('Failed to fatch data')
        }
    });
};


const getPromiseData1 = async (): Promise<boolean> => {
    const data = await makePromise1();
    return data
}

// for object 

interface DataType {
    data: string
};

const makePromise2 = (): Promise<DataType> => {
    return new Promise<DataType>((resolve, reject) => {
        const data: DataType = { data: 'Data is fatched' };
        if (data) {
            resolve(data)
        } else {
            reject('Failed to fatch data')
        }
    });
};


const getPromiseData2 = async (): Promise<DataType> => {
    const data = await makePromise2();
    return data
}