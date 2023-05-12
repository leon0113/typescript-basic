type NoobDeveloper = {
    name : string,
};

// type JuniorDeveloper = {
//     name : string,
//     expertise : string,
//     experience : number
// };
type JuniorDeveloper = NoobDeveloper & {
        expertise : string,
        experience : number
    };

// enum Level {
//     junior = "junior",
//     mid = "mid",
//     senior = "senior"
// }

type NextLevelDeveloper = JuniorDeveloper & {
    leadershipSkill : number ;
    level : "junior" | "mid" | "senior";
}


const newDeveloper : NoobDeveloper | JuniorDeveloper = {
    name : "John Doe",
    expertise : "JavaScript",
    experience : 6
}

const developer : NextLevelDeveloper = {
    name : "Leon",
    expertise : "JavaScript",
    experience : 6,
    leadershipSkill : 1,
    level : "senior"
}

