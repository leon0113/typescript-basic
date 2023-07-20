class Animal {
//    public name: string;
//    public species: string;
//    public sound: string;

 // parameter properties
    constructor(public name: string, public species: string, public sound: string) {
        // this.name = name;
        // this.species = species;
        // this.sound = sound
    }
    makeSound() {
      console.log(`The ${this.name} sounds like ${this.sound}`);
    }
}

const dog = new Animal('German Shepard', 'dog', 'ghew ghew');
const cat = new Animal('persian', 'cat', 'mew mew');
   dog.makeSound();
 

   cat.name = 'desi'
   cat.makeSound();



   



   //! npx ts-node-dev --respawn ./src/Module-4/object.ts