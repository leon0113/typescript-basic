// propertise
interface Model<Tdata, Tmethods> {
    data: Tdata;
    methods: Tmethods;
}

interface IUser1 {
    firstName: string;
    lastName: string;
}
// methods
interface IMethods {
    fullName(): string;
}

type model = Model<IUser1, IMethods>;


class User1 implements model {
    data: IUser1;
    methods: IMethods;

    constructor(firstName: string, lastName: string) {
        this.data = { firstName, lastName };
        this.methods = {
            fullName: () => `${firstName} ${lastName}`
        }

    }
}

const user12 = new User1('Tahjib', "Leon");// user12 is a instance of User1
console.log(user12.methods.fullName());




//? npx ts-node-dev --respawn ./src/Module-5_5/advanced.ts