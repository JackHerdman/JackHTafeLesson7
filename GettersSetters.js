//Getters and Setters

class Person {
    constructor(name, age, heightInMm) {
        this.name = name;
        this.age = age;
        this.heightInMm = heightInMm;
    }
    get heightInInches() {               //get heighInMm and retrieve it as a different value "fake property"
        return this.heightInMm / 25.4;
    }
    set heightInInches(value){          //set heightinMm to a new value
        this.heightInMm = value * 25.4;
    }
    get heightInCm() {
        return this.heightInMm / 10;
    }
}

let me = new Person("Jack", 29, 1850);
console.log(me);
console.log(`initial set height in inches ${me.heightInInches}`);
console.log(`initial set height in Centimetres ${me.heightInCm}`);

me.heightInInches = 74;
console.log(me);
console.log(`new height after running a setter ${me.heightInInches}`);
console.log(`new height after running a setter ${me.heightInCm}`);

//to be able keep track of someones height in mm but also retrieve as and set it to something different