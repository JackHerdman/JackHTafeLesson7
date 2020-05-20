//1. Create a static method in the Owner class that takes 1 argument which should be an integer number and returns an array of randomly generated Owners with length equal to the number given. The ids of the owners should all be unique. You can use this gist to generate random names: https://gist.github.com/LukeParkerTAFE/161fd0d451f7236dae99fbb30573735d
//Extension - generate a random student with super.get random
//student with random grades
//teach with random students

const getRandomGivenName = function () {
    const RANDOM_FIRST_NAMES = ["Charlotte", "Olivia", "Ava", "Amelia", "Mia", "Isla", "Oliver", "William", "Jack", "Noah", "Thomas", "James"];
    return RANDOM_FIRST_NAMES[Math.floor(Math.random() * RANDOM_FIRST_NAMES.length)];
}
const getRandomFamilyName = function () {
    const RANDOM_LAST_NAMES = ["Smith", "Jones", "Williams", "Brown", "Wilson", "Johnson", "Taylor", "White", "Martin", "Anderson", "Thompson", "Nguyen"];
    return RANDOM_LAST_NAMES[Math.floor(Math.random() * RANDOM_LAST_NAMES.length)];
}
const getRandomNumber = function (min = 0, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
class Person {
    constructor(firstName, lastName, age, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.id = id;
    }
    getInfo() {
        return `${this.firstName} ${this.lastName} is ${this.age} years old.`
    }
    static generateRandomPeople(numberOfPeople) {
        let randomPeople = [];
        for (let i = 0; i < numberOfPeople; i++) {
            let randomPerson = new Person(getRandomGivenName(), getRandomFamilyName(), getRandomNumber(18, 35), i)
            randomPeople.push(randomPerson);
        }
        return randomPeople;

    }
}
let randomPeople = Person.generateRandomPeople(5);
console.log(randomPeople);


class Student extends Person {
    constructor(firstName, lastName, age, id, grades) {
        super(firstName, lastName, age, id)
        this.grades = grades
    }
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
    getInfo() {
        return `${super.getInfo()} Their average grade is ${this.getAverageGrades()}`
    }
    static generateRandomStudents(numberOfPeople) {
        let randomPeople = super.generateRandomPeople(numberOfPeople)
        let randomStudents = [];
        for (let i = 0; i < randomPeople.length; i++) {
            let student = new Student(randomPeople[i].firstName, randomPeople[i].lastName, randomPeople[i].age, randomPeople[i].id)
            student.grades = []
            for (let i = 0; i < 5; i++) {
                let grade = getRandomNumber(0, 100);
                student.grades.push(grade);
            }
            randomStudents.push(student);
        }
        return randomStudents;
    }
}
let randomStudent = Student.generateRandomStudents(5);
console.log(randomStudent);
console.log(randomStudent[0].getAverageGrades());

class Teacher extends Person {
    constructor(firstName, lastName, age, id, students) {
        super(firstName, lastName, age, id);
        this.students = students;
    }
    static generateRandomTeachers(numberOfPeople) {
        let randomPeople = []
        for (let i = 0; i < numberOfPeople.length; i++) {
            let students = new Student.generateRandomStudents(10);
            let randomPerson = new Teacher(getRandomGivenName(), getRandomFamilyName(), GetRandomNumber(21, 60), i, students);
            randomPeople.push(student);
        }
        return randomPeople;
    }


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
    getInfo() {
        return `${super.getInfo()} Their average students grade is ${this.getAverageGrades()}`

    }
}


randomTeacher = Teacher.generateRandomTeacher(5);
console.log(randomTeacher);