const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
};
//
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};
//
const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);
Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}
const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// const jay = new Person('Jay', 2010);
// console.log(jay);
// jay.calcAge();
// console.log(jay instanceof Person);

// console.log(jay instanceof Student);
// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);


// const Person = function (firstName, birthYear) {

//     // Instance properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// };