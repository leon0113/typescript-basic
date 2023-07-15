type MandatoryInfo = { name: string, age: number, salary: number }
const addMeInMyCrushMind = <T extends MandatoryInfo>(myInfo: T) => {
    const crush = 'Kate Winslet';
    const newData = { ...myInfo, crush }
    return newData;
}

type MyInfoType = {
    name: string,
    age: number,
    salary: number,
    other: boolean
}

const myInfo: MyInfoType = {
    name: 'Leon',
    age: 24,
    salary: 20000,
    other: true
};
const result = addMeInMyCrushMind(myInfo);