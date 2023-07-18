// a type is depended onn another type

type a1 = string;
type a3 = undefined
type a4 = number
type a2 = a1 extends string ? string : null;

//nested conditional type
type d = a1 extends null ? null : a3 extends number ? number : a4 extends null ? null : never;

type Habib = {
    wife1: string;
    wife2: string;
};

type CheckProperty<T, K> = K extends keyof Habib ? true : false;

type CheckWife2 = CheckProperty<Habib, 'wife1'>

// to check Habib have a wife1 or not ? true : false


// another example
type Bandhubi = 'Monika' | 'Rachel' | 'Pheobe';

type Removefrnd<T> = T extends 'Rachel' ? never : T;

type CurrentFrnd = Removefrnd<Bandhubi>