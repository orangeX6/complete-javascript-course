'use strict';

//-> STRING METHODS   -
//1 indexOf
//2 lastIndexOf
//3 trim
//4 slice
//5 toUpperCase
//6 toLowerCase
//7 trimStart
//8 trimEnd
//9 replace - only replaces first occurrence
//10 replaceAll
//11 split
//12 join
//13 padStart
//14 padEnd
//15 repeat
//BOOLEAN METHODS -
//1.1 includes
//1.2 startsWith
//1.3 endsWith

//->ARRAY METHODS
//-> 1.TO MUTATE ORIGINAL ARRAY  ////////////////
//a.  Add to original -
//i.    .push         (end)
//ii.   .unshift      (start)

//b.  Remove from original -
//i.    .pop          (end)
//ii.   .shift        (start)
//iii.  .splice       (any)

//c. Others
//i.    .reverse
//ii.   .sort
//iii.  .fill

/////////////////////////////////

//-> 2.A NEW ARRAY   /////////////////
//a. Computed from original
//i.    .map          (loop)

//b. Filtered using Condition
//i.    .filter

//c. Portion of original
//      .slice

//d. Adding original to other
//      .concat

//e. Flattening the original
//i.    .flat
//ii.   .flatMap

/////////////////////////////////

//-> 3. AN ARRAY INDEX ////////////////

//a. Based on value
//      .indexOf

//b. Based on TEST CONDITION
//      .findIndex

/////////////////////////////////

//-> 4. AN ARRAY ELEMENT  ////////////////
//  Based on TEST Condition
//      .find

/////////////////////////////////

//-> 5. KNOW IF ARRAY INCLUDES   ////////////////
//a. Based on value
//      .includes

//b. Based on Test Condition
//i.     .some
//ii.    .every

/////////////////////////////////

//-> 6. A NEW STRING   ////////////////
//  Based on Separator string -
//       .join

/////////////////////////////////

//-> 7. TO TRANSFORM TO VALUE    ////////////////
//      Based on accumulator
//              .reduce
//(boil down array to single value of
//  any type: number, string, boolean,
//      or even array or object)

/////////////////////////////////

//-> 8. TO JUST LOOP ARRAY   ////////////////
//  Based on callBack
//        .forEach
//(Does not create new array, just loops over it)

/////////////////////////////////
//////////////////////////////////*
//-> MAP  ->
//* const m = new Map()
// m.set('age',2)
// m.get('age')
// m.clear()
// m.delete('age')
// m.size
// m.has()
// const i = new Map([['color','red'],['owner','Bill']])
//? for(const k of m.keys()){}
//? for(const v of m.values()){}
//? for(const [k,v] of m.entries())
//TO ARRAY
//? const a = [...m.keys()]
//? const a = [...m.values()]

//////////////////////////////////*
//->SET ->
//* const s = new Set() */
// s.add('one')
// s.has('one')
// s.delete('one')
// s.clear()
// s.size()
//? s.forEach(v => console.log(v))
//? const a = [...s.keys()]
//? const a = [...s.values()]

//looping arrays and objects with for of loop
//ARRAYS
//for (const item of menu) console.log(item);
//for (const [i, el] of menu.entries()) {
//  console.log(`${i + 1}: ${el}`);
//}

//////////////////////////////////*

//Objects
//->const properties = Object.keys(openingHours);
//for(const day of  properties){console.log(day)}

//->const values = Object.values(openingHours);

//ENTRIES  (FOR ENTIRE OBJECT ) (Object,entries(objName))
//->const entries = Object.entries(openingHours);
//? for (const [key, { open, close }] of entries) {
//?   console.log(`On ${key} we open at ${open} and close at ${close}`);
//?  }

//////////////////////////////////*

//FOREACH
//->ACCESSING COUNTER VARIABLE
//forEach(function(currentElement, index, array))
//? movements.forEach(function (mov, i, arr) {
//?  if (mov > 0) {
//?      console.log(`mov ${i + 1}: You deposited ${Math.abs(mov)}`);
//?   } else {
//?      console.log(`mov ${i + 1}: You withdrew ${Math.abs(mov)}`);
//?    }
//?   });

//////////////////////////////////*

//->  forEach with MAPS and SETS
//MAPS
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

console.log(currencies);
//forEach for map -> forEach(function(value,key,map){})
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
*/

//SETS
/*
const currenciesUnique = new Set(['USD', 'INR', 'EUR', 'USD', 'INR', 'INR']);

//forEach for Set -> forEach(function(value,key,map))
currenciesUnique.forEach((value, key, map) => {
  console.log(`${key}: ${value}`); //both value and key will be same as set dont have a key or an index
});
*/

////////////////////////////////////!
////////////////////////////////////!
////////////////////////////////////!
////////////////////////////////////!
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////

//206. What is Object-Oriented Programming?
//207. OOP in JavaScript
//208. Constructor Functions and the new Operator
//209. Prototypes
//210. Prototypal Inheritance and The Prototype Chain
//211. Prototypal Inheritance on Built-In Objects
//212. Coding Challenge #1
//213. ES6 Classes
//214. Setters and Getters
//215. Static Methods
//216. Object.create
//217. Coding Challenge #2
//218. Inheritance Between "Classes": Constructor Functions
//219. Coding Challenge #3
//220. Inheritance Between "Classes": ES6 Classes
//221. Inheritance Between "Classes": Object.create
//222. Another Class Example
//223. Encapsulation: Protected Properties and Methods
//224. Encapsulation: Private Class Fields and Methods
//225. Chaining Methods
//226. ES6 Classes Summary
//227. Coding Challenge #4

//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////

//206. What is Object-Oriented Programming?
//Object oriented programming(OOP) is a programming paradigm based on the concept of objects.
//? The 4 Fundamental Principles of Object Oriented Programming ->
//* 1. Abstraction
//* 2. Encapsulation
//* 3. Inheritance
//* 4. Polymorphism

//* Abstraction ->
//-> Ignoring or hiding details that don't matter, allowing us to get an overview perspective of the thing we are implementing, instead of messing with the details that don't really matter to our implementation.

//* Encapsulation ->
//-> Keeping properties and methods private inside the class, so they are not accessible from outside the class. Some methods can be exposed as a public interface (API).
// Prevents external code from accidentally manipulating internal properties/state.
//Allows to change internal implementation without the risk of breaking external code.

//* Inheritance ->
//->  Making all properties and methods of a certain class available to a child class, forming a hierarchical relationship between classes. This allows us to reuse common logic and to model real-world relationships.
//Child Class inherits the properties of Parent Class.

//* Polymorphism ->
//-> Poly means many, morph means forms. A child class can overwrite a method it inherited from a parent class

//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////

//207. OOP in JavaScript
//? How does OOP actually work in JavaScript ?
//* In JS we have Prototypes, and all objects in JS are linked to a certain prototype object.
//* Prototypes contains the methods and the properties that all the objects that are linked to that prototype can access and use. This is called as PROTOTYPAL INHERITANCE/DELEGATION.
//-> PROTOTYPAL INHERITANCE - The prototype contains methods(behavior) that are accessible to all objects linked to that prototype.
//-> Behavior is delegated to the linked prototype object
// So basically, each Object has a prototype and they inherits the methods and properties from the prototype.
//Its basically an instance inheriting from a class

//? How do we actually create prototypes? And how do we link objects to prototypes? How can we create new objects, without having classes?
//->    1.constructor functions
//          Technique to create objects from a function
//          This is how built in objects like Arrays,Maps or Sets are implemented

//->    2.ES6 Classes
//          Modern alternative to constructor function  syntax.
//          "Syntactic sugar" behind the scenes. ES6 classes work exactly like constructor functions
//          ES6 classes do NOT behave like classes in 'classical OOP'

//->    3.Object.create()
//      The easiest and most straightforward way of linking an object to a prototype objects

//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////

//208. Constructor Functions and the new Operator

//Building objects using the constructor functions
//-> A constructor function is actually  completely normal function. The only difference between a regular function and a function that we call a constructor function, is that we CALL a constructor function with the NEW operator.

//* In OOP there is convention that we always start a constructor function with a CAPITAL LETTER.
//* In fact, other built in constructors like array or map follow that convention as well.
//! Function declaration and function expression both works as a function constructor but arrow function does not, as it doesn't have its own this keyword
/*

const Person = function (firstName, birthYear) {
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //!NEVER DO THIS
  //!We can do this but we must never create a method inside a constructor function
  //?It will create copies for each object and each object will have a method which is very inefficient.
  //-> We use prototypes to solve this problem
  //Instance Methods
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const pranav = new Person('Pranav', 1996);
const sakshi = new Person('Sakshi', 1996);
console.log(pranav, sakshi);

console.log(sakshi instanceof Person); //true

Person.hey = function () {
  console.log('Hey There 🙋‍♀️');
};

Person.hey();

//-> When we call the function with the new keyword, following 4 steps happens
//  1. New (empty object) {} is created
//  2. function is called, and this keyword is set to the newly created object. this = {}
//  3. (The newly created object) {} is linked to prototype
//  4. function automatically returns (the object) {}

//////////////////////////////////////
////////////////////////////////////

//209. Prototypes
//-> Each and every function in javascript automatically have a property called prototype
//-> Every object created by a constructor function will get access to all the methods and the properties that we define on the constructors prototype property.

console.log(Person.prototype);

//Setting method on the prototype of the function
Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

sakshi.calcAge();
console.log(pranav.__proto__);

//? The Person.prototype is not a prototype of person but instead it is whats going to be used as the prototype of all the objects that are created using the constructor function
console.log(pranav.__proto__ === Person.prototype); // returns true
console.log(sakshi.__proto__ === pranav.__proto__);

//-> isPrototypeOf() method
console.log(Person.prototype.isPrototypeOf(sakshi)); // returns true

//Setting property on the constructor prototype
Person.prototype.species = 'Homo Sapiens';

console.log(sakshi, pranav);
console.log(sakshi.species, pranav.species);
console.log(pranav.hasOwnProperty('firstName')); //true
console.log(pranav.hasOwnProperty('species')); //false

//210. Prototypal Inheritance and The Prototype Chain
//-> If a property or a method cannot be found in a certain object JavaScript will look into its prototype and if it is present there it will simply use it. This behavior is called prototypal inheritance or delegation.
//->The fact that the object pranav and sakshi are connected to the prototype and the ability of looking up methods and properties in the prototype is called as prototypal chain.
//But it does not end here.Person.prototype is itself also an object and all objects have a prototype. And the prototype of person.prototype is object.prototype.

//*Since pranav is built by Person, person.prototype is the prototype of pranav.
//* Person.prototype is just a simple object which means it has been built by the built in object constructor function.
//* And this is actually the function that is called whenever we create an object literal i.e. an object with curly braces {}
//* Person.prototype itself needs to have a prototype and since its created by the object constructor function, its prototype is going to be the object.prototype.Prototype of Person.prototype is object.prototype
//? prototype of object.prototype will be null, which marks end of prototype chain.

//////////////////////////////////////
////////////////////////////////////

//211. Prototypal Inheritance on Built-In Objects
console.log(pranav.__proto__);
//Object.prototype (top of prototype chain)
console.log(pranav.__proto__.__proto__);
//null
console.log(pranav.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [3, 3, 3, 3, 4, 5, 6, 4, 4, 4, 47, 78, 6];

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

//! Don't use it on built in object as next version of js might add a method with the same name
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);

console.dir(x => x + 1);

//pranav.hasOwnProperty('firstName')
//Person.isPrototypeOf('pranav')
//Person.prototype
//pranav.__proto__

//////////////////////////////////////
////////////////////////////////////

//212. Coding Challenge #1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.brake();
bmw.accelerate();
*/

//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////

//213. ES6 Classes
/*
//? Its just a different syntax, works the same way

//* Class expression
//-> const PersonCl = class {};

//*Class declaration
//-> class PersonCl {}

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //Methods will be added to .prototype property
  calcAge() {
    console.log(2021 - this.birthYear);
  }

  // greet() {
  //   console.log(`Hey ${this.firstName}`);
  // }
}

const jacica = new PersonCl('Jacica', 1995);
console.log(jacica);
jacica.calcAge();
console.log(jacica.__proto__ == PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

jacica.greet();

//-> 1. Classes are NOT hoisted
//-> 2. Classes are first-class citizens
//-> 3. Classes are executed in strict mode

//? Should you use classes or constructor functions ?
//Personal preference
*/

//////////////////////////////////////
////////////////////////////////////

//214. Setters and Getters
//? We call these properties assessor properties
//? While the more normal properties are called data properties

/*
const account = {
  owner: 'Pranav',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  //need at least one parameter
  set latest(mov) {
    this.movements.push(mov);
  },
};

//We dont call it, we write it as a property //eg calling - latest()
console.log(account.latest);
account.latest = 50;
console.log(account.movements);

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Methods will be added to .prototype property
  calcAge() {
    console.log(2021 - this.birthYear);
  }

  // greet() {
  //   console.log(`Hey ${this.fullName}`);
  // }

  get age() {
    return 2021 - this.birthYear;
  }

  //-> We are creating a setter for a property name that already exists. fullName is already a property we are trying to set. So when that code is executed i.e. this.fullName = fullName, this setter is going to be executed.

  //Set a property that already exists
  set fullName(name) {
    //! add _ to the fullName as a naming convention to avoid both setter and constructor trying to set the exact same property name, as it gives error

    if (name.includes(' ')) this._fullName = name;
    else console.log(`${name} is not a full name!`);
  }

  //Get the property
  get fullName() {
    return this._fullName;
  }
}

const jacica = new PersonCl('Jacica R', 1995);
console.log(jacica);
jacica.calcAge();
console.log(jacica.age);

console.log(jacica.__proto__ == PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.fullName}`);
};

jacica.greet();

const walter = new PersonCl('Walter', 1965);
console.log(walter);


//////////////////////////////////////
////////////////////////////////////

//215. Static Methods
//Methods which are available on the constructors and not the actual array, number, etc.
//* EXAMPLE -
//-> Array.from()
//-> Number.parseFloat(12)

// Adding a static method
//1. Constructor Function
const Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

Person.prototype.species = 'Homo Sapiens';

Person.hey = function () {
  console.log(this);
  console.log('Hey There 🙋‍♀️');
};

Person.hey();

//2. Class
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Instance Methods
  calcAge() {
    console.log(2021 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else console.log(`${name} is not a full Name!`);
  }

  get fullName() {
    return this._fullName;
  }

  //Static method
  static hey() {
    console.log(`Hey There 🙋‍♀️🙋‍♂️`);
    console.log(this);
  }
}

const jacica = new PersonCl('Jacica R', 1995);
PersonCl.hey();

//////////////////////////////////////
////////////////////////////////////

//216. Object.create
//-> Manually set the prototype of an object to any other object we want
const PersonProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.firstName = 'Steven';
steven.birthYear = 2000;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
console.log(sarah.__proto__ === PersonProto);

//////////////////////////////////////
////////////////////////////////////

//217. Coding Challenge #2

class CarsCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }
}

const bmw = new CarsCl('BMW', 120);
const mercedes = new CarsCl('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.brake();
bmw.accelerate();

const ford = new CarsCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.speedUS = 50;
console.log(ford.speedUS);
console.log(ford);

*/
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////

//218. Inheritance Between "Classes": Constructor Functions

//?Call, apply, bind recap -
//*call - function.call(object, funcParameters)
//*apply - function.apply(object, [p1,p2,p3])
//*bind - const variable = function.bind(object, parameter) \n variable();
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//Linking Prototypes
Student.prototype = Object.create(Person.prototype);

//! We can see below that the constructor of student.prototype is Person which needs to be fixed
console.log(Student.prototype.constructor);
console.dir(Student.prototype.constructor);

//Setting Student prototype constructor back to student
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2000, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student); //returns true
console.log(mike instanceof Person); //returns true
console.log(mike instanceof Object); //returns true

////////////////////////////////////
///////////////////////////////////
////////////////////////////////////

//219. Coding Challenge #3

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

const bmw = new Car('BMW', 120);
bmw.accelerate();
bmw.brake();
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

//Link the prototype
EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed}km/h with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 25);
tesla.brake();
tesla.brake();
tesla.chargeBattery(70);
tesla.accelerate();

//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////

//220. Inheritance Between "Classes": ES6 Classes
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Instance Methods
  calcAge() {
    console.log(2021 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else console.log(`${name} is not a full Name!`);
  }

  get fullName() {
    return this._fullName;
  }

  //Static method
  static hey() {
    console.log(`Hey There 🙋‍♀️🙋‍♂️`);
    console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //Always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I am ${
        2021 - this.birthYear
      } years old, but as a student I feel more like ${
        2021 - this.birthYear + 10
      }.`
    );
  }
}

const sam = new StudentCl('Sam Jones', 2000, 'Computer Science');
sam.introduce();
sam.calcAge();
console.log(sam);

/*
//*This will work even without constructor function
class StudentClDup extends PersonCl {}
const sam2 = new StudentClDup('Sam Jones', 2000);
console.log(sam2);
*/

//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////

//221. Inheritance Between "Classes": Object.create
const PersonProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 1998, 'Computer Science');
jay.introduce();
jay.calcAge();

//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////

//222. Another Class Example
//223. Encapsulation: Protected Properties and Methods
//! 224. Encapsulation: Private Class Fields and Methods
//225. Chaining Methods
//226. ES6 Classes Summary

//******************
//-> Encapsulation basically means to keep some methods and properties private inside the class so they are not accessible from outside the class
//-> Then the rest of the methods are exposed as a public interface which we can also called as API
//* Two big reasons why we need encapsulation and data privacy
//-> 1. To prevent code from outside of a class to accidentally manipulate data inside the class
//-> 2. When we expose only a small interface, then we can change all the other methods with more confidence that other code wont break due to this
//! JS classes do not yet support real data privacy and encapsulation

//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////

//-> /////////////////////////////////////////////
//! 224. Encapsulation: Private Class Fields and Methods
//->> NOT YET PART OF THE JAVASCRIPT LANGUAGE
//-> Soon will be a part of JS.
//? Currently at stage 3 of approval. probably 4
// SOME PARTS ALREADY WORK IN GOOGLE CHROME

//->  Different kinds of fields -
//*  1.PUBLIC FIELDS
//*  2.PRIVATE FIELDS
//*  3.PUBLIC METHODS
//*  4.PRIVATE METHODS
//* THere is also a static version
//*  5. STATIC FIELDS
//*  6. STATIC METHODS

class Account {
  //* 1. PUBLIC FIELDS (added to instances while methods are added to prototype)
  locale = navigator.language;

  //* 2. PRIVATE FIELDS
  #movements = [];
  #pin;

  //* 5. STATIC FIELD
  static bank = 'SBI';

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    //protected property (use _ as convention)
    this.#pin = pin;
    //// this.#movements = [];
    //// this.locale = navigator.language;

    console.log(`Thanks for opening an account ${this.owner}`);
  }

  //* 3. Public Methods
  //Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan Approved');
      return this;
    }
  }

  //* 4. PRIVATE METHODS ( //!NOT SUPPORTED YET)
  //protected method
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }

  //* 5 STATIC METHOD
  //WILL ONLY BE AVAILABLE ON CLASS ITSELF Eg. Array.from()
  static helper() {
    console.log('Helper');
  }
}

const acc1 = new Account('Pranav', 'EUR', 1111);
console.log(acc1);

// acc1.#movements.push(250);
// acc1.#movements.push(-80);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1);
console.log(acc1.getMovements());
console.log(acc1.locale);

//STATIC METHODS AND PROPERTIES CALL
Account.helper();
console.log(Account.bank);

// console.log(acc1.#approvedLoan(1000));

// console.log(acc1.#movements); //!ERROR!!! cant access private field

//225. Chaining Methods
//! WOULD NOT WORK IF YOu ARE NOT CALLING IT ON ACCOUNT. SO ALL THE METHODS IN ACCOUNT CLASS SHOULD RETURN this
acc1.deposit(200).deposit(399).withdraw(45).requestLoan(300);
console.log(acc1.getMovements());

//226. ES6 Classes Summary

//227. Coding Challenge #4
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 20;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  //Private field
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed}km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rimac = new EVCl('Rimac Concept 1', 300, 25);
rimac
  .accelerate()
  .chargeBattery(50)
  .accelerate()
  .brake()
  .accelerate()
  .chargeBattery(86);

console.log(rimac.speed);
console.log(rimac.speedUS);
rimac.speedUS = 200;
console.log(rimac.speed);
console.log(rimac.speedUS);

// console.log(rimac.#charge);
