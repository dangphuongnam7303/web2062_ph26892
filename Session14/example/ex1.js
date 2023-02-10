 'use strict';

 const Person = function (firstName, birthYear) {
     this.firstName = firstName;
     this.birthYear = birthYear;
        // Never do this
        this.calcAge = function () {
            console.log(2023 - this.birthYear);
        }
 }

    const jonas = new Person('Jonas', 1991);
    console.log(jonas);
    // 1. New empty object is created
    // 2. Function is called, this = {}
    // 3. {} linked to prototype
    // 4. Function automatically returns {}

    const matilda = new Person('Matilda', 2017);
    const jack = new Person('Jack', 1975);
    console.log(matilda, jack);

    console.log(jonas instanceof Person);

    // Prototypes
    console.log(Person.prototype);
    Person.prototype.calcAge = function () {
        console.log(2023 - this.birthYear);
    }
    jonas.calcAge();
    matilda.calcAge();
    jack.calcAge();

    console.log(jonas.__proto__);
    console.log(jonas.__proto__ === Person.prototype);

    console.log(Person.prototype.isPrototypeOf(jonas));
    console.log(Person.prototype.isPrototypeOf(matilda));
    console.log(Person.prototype.isPrototypeOf(Person));

    // .prototypeOfLinkedObjects

    Person.prototype.spcies = 'Homo Sapiens';
    console.log(jonas.spcies, matilda.spcies);

    console.log(jonas.hasOwnProperty('firstName'));
    console.log(jonas.hasOwnProperty('spcies'));

    console.log(jonas.__proto__);
    // Object.prototype (top of prototype chain)
    console.log(jonas.__proto__.__proto__);
    console.log(jonas.__proto__.__proto__.__proto__);

    console.dir(Person.prototype.constructor);


    const arr = [3, 6, 4, 5, 6, 9, 9]; // new Array === []
    console.log(arr.__proto__);
    console.log(arr.__proto__===Array.prototype);

    console.log(arr.__proto__.__proto__);
    Array.prototype.unique=function(){
        return [...new Set(this)];
    };

    console.log(arr.unique());

    const h1 = document.querySelector('h1');
    console.dir(x=>x+1);

    // class expression
// const PersonCl=class{}

class PersonCl {
    constructor(fullName, birthYear) {
      this.fullName = fullName;
      this.birthYear = birthYear;
    }
      // Instance methods
      // Methods will be added to .prototype property 
      calcAge() {
          console.log(2037 - this.birthYear);
      }
      greet() {
          console.log(`Hey ${this.fullName}`);
      }
      get age() {
          return 2023 - this.birthYear;
      }
      // Set a property that already exists
      set fullName(name) {
          console.log(name);
          if (name.includes(' ')) this._fullName = name;
          else alert(`${name} is not a full name!`);
      }
  }
  
  const jessica = new PersonCl('Jessica Davis', 1996);
  console.log(jessica);
  jessica.calcAge();
  console.log(jessica.__proto__ === PersonCl.prototype);
  
  // PersonCl.prototype.greet = function () {
  //     console.log(`Hey ${this.fullName}`);
  // }
  jessica.greet();
  
  // 1. Classes are NOT hoisted
  // 2. Classes are first-class citizens
  // 3. Classes are executed in strict mode
  
  const account = {
      owner: 'jonas',
      movements: [200, 530, 120, 300],    
      get latest() {
          return this.movements.slice(-1).pop();
      }
  }
  console.log(account.latest);
  
  // Static method
  console.log(Array.from(document.querySelectorAll('h1')));
  
  // Object.create
  const PersonProto = {
      calcAge() {
          console.log(2037 - this.birthYear);
      },
  
      init(firstName, birthYear) {
          this.firstName = firstName;
          this.birthYear = birthYear;
      }
  };
  
  const steven = Object.create(PersonProto);
  console.log(steven);
  steven.name = 'Steven';
  steven.birthYear = 2003;
  steven.calcAge();
  
  console.log(steven.__proto__ === PersonProto);
  
  const sarah = Object.create(PersonProto);
  sarah.init('Sarah', 1979);
  sarah.calcAge();
  
  // Inheritance between "classes": constructor functions
  const Person = function (firstName, birthYear) {
      // Instance properties
      this.firstName = firstName;
      this.birthYear = birthYear;
  }
  
  const jonas = new Person('Jonas', 1991);
  console.log(jonas);
  
  // 1. New empty object is created
  // 2. Function is called, this = {}
  // 3. {} linked to prototype
  // 4. Function automatically returns {}
  
  const matilda = new Person('Matilda', 2017);
  const jack = new Person('Jack', 1975);
  console.log(matilda, jack);



