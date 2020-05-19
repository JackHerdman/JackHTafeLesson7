class Pet {                             //Parent class 
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }

    getInfo() {                     //parent function can be accessed by all
        return `${this.name} the ${this.species} is ${this.age} years old.`;
    }
    
    getOlder(years) {               //parent funtion can be accessed by all
        this.age += years;
    }
}

class Dog extends Pet {                 //Child class has all the properties of parent, plus more
    constructor(name, age, breed) {   //these are the values that get passed in
        super(name, age, "Dog");      //the super constructor pass in values to the pet constructor
        this.breed = breed;             //adds new property
    }
    getInfo() {             //child function can be accessed only by child
        return `${super.getInfo()} ${this.name} is a ${this.breed}.`
    }
}

let cat = new Pet("Felix", 2, "Cat");          //add cat to parent class
let dog = new Dog("Rex", 4, "Beagle");  //adds dog to child class
console.log(cat);
console.log(dog);

//parent classes are generic and they get more specific the more children

console.log(cat.getInfo()); // as cat is a pet it will return pet function
console.log(dog.getInfo()); // as dog is a dog it will return dog function