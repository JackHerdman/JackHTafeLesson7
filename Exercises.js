//1. Create a class called Square with a single property, sideLength and create a constructor that assigns that value
// class Square {
//     constructor(sideLength) {
//         this.sideLength = sideLength;
//     }
// }
//2. Create a getter that returns the area of the Square (hint, the area is sideLength * sideLength)
// class Square {
//     constructor(sideLength) {
//         this.sideLength = sideLength;
//     }
//     get areaSquared() {
//         return this.sideLength * 2;
//     }
// }

//3. Create a setter for area that sets the sideLength for the given area (hint, use the Math.sqrt function to retrieve the square root of the area and assign it as the sideLength)
// class Square {
//     constructor(sideLength) {
//         this.sideLength = sideLength;
//     }
//     get area() {
//         return this.sideLength ** 2;
//     }
//     set area(value) {
//         this.sideLength = Math.sqrt(value)
//     }
// }

// let room = new Square(16);
// console.log(room);
// console.log(`the side length of the room is ${room.sideLength}m`)
// console.log(`the area of the room is ${room.area}m2`);
// room.area = 100
// console.log(`the side length of the room is ${room.sideLength}`);



//1. Create a class called Person with three properties called firstName, lastName and age. Include a constructor that assigns these values
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    //2. Create a method in person called getInfo that takes no parameters and returns information about the name and age of the person
    getInfo() {
        return `${this.firstName} ${this.lastName} is ${this.age} years old.`
    }
}

//3. Create a class called Student that extends Person. Student should have a property called grades that should be an array of numbers that represent their mark out of 100 for a series of tests
class Student extends Person {
    constructor(firstName, lastName, age, grades) {
        super(firstName, lastName, age)
        this.grades = grades
    }
    //4. Create a method inside student that calculates their average grade
    getAverageGrades() {
        let total = 0
        for (let i = 0; i < this.grades.length; i++) {
            total += this.grades[i];
        }
        return total / this.grades.length
    }
    getFastAverageGrades() {
        let totalGrades = this.grades.reduce(function (total, currentValue) {
            return total + currentValue;
        });
        return totalGrades / this.grades.length;
    }

    //5. Override the getInfo method for Student so that it also displays the average grade of the student. Make sure to include a call to super.getInfo
    getInfo() {
        return `${super.getInfo()} Their average grade is ${this.getAverageGrades()}`
    }
}

let jack = new Student("Jack", "Herdman", 29, [80, 90, 40, 70, 85]);
let smartelia = new Student("Smartelia", "Smarts", 27, [90, 95, 99, 97, 92]);
let derpy = new Student("Derpy", "McDerpface", 28, [32, 51, 47, 23, 44]);
console.log(jack)
console.log(jack.getAverageGrades());
console.log(jack.getInfo());

// //6. Create a class called Teacher that extends Person. Teacher should have a property called students that should be an array of Student objects representing the students in their class
class Teacher extends Person {
    constructor(firstName, lastName, age, students) {
        super(firstName, lastName, age);
        this.students = students;
    }
    // //7. Create a method inside Teacher that calculates the average grade across all of their students and returns it as a number.
    getAverageGrades() {
        let total = 0
        for (let i = 0; i < students.length; i++) {
            const student = students[i];
            total += student.getAverageGrades();
        }
        return total / students.length
    }
    getFastAverageGrades() {
        let totalGrades = this.students.reduce(function (total, student) {
            return total + student.getAverageGrades();
        });
        return totalGrades / this.students.length;
    }

    // //8. Override the getInfo method for Teacher so that it also displays the average grade of their students. Make sure to include a call to super.getInfo
        getInfo() {
            return `${super.getInfo()} Their average students grade is ${this.getAverageGrades()}`
    
    }
}
let students = [jack, smartelia, derpy];
console.log(students);
let mrsMac = new Teacher("Mrs", "Mac", 49, students);
console.log(mrsMac);
console.log(mrsMac.getAverageGrades());
console.log(mrsMac.getInfo());
