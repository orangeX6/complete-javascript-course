'use strict';

const Person = function (firstName, birthYear) {
  this.birthYear = birthYear;
  this.firstName = firstName;

  this.calcAgeThree = function () {
    console.log(2022 - this.birthYear);
  };
};

Person.prototype.getAge = function (currentYear) {
  return currentYear - this.birthYear;
};

const person = new Person('Pranav', '1996');
const person2 = new Person('Sakshi', '1996');
console.log(person.getAge(2022));

Person.getAge2 = function () {
  console.log('getAge2');
};

Person.prototype.species = 'Homo Sapiens';

const x = [];
console.dir(Person);
console.dir(person.__proto__);
console.dir(person);
console.dir(Person.__proto__);

// const xtt = 20;
// const fun = () => {
//   const xtt = 10;
//   return function () {
//     console.log(xtt + 10);
//   };
// };

// const y = fun();

// y();
// console.dir(y);

const h1 = document.querySelector('h1');

// console.dir(h1);

// console.dir(Person.prototype.constructor);
// console.log(Person);

// console.dir(Person.prototype);
// console.log(Person.prototype === person.__proto__);

//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////

/////////////////////////////////////////////////////////
// CONSTRUCTOR FUNCTION////////////////////////////
/////////////////////////////////////////////////////////

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  return this;
};

Car.prototype.break = function () {
  this.speed -= 5;
  return this;
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

// console.log(bmw.accelerate());
// console.log(bmw.break());

const Truck = function (make, speed, color, tyres) {
  Car.call(this, make, speed);
  this.color = color;
  this.tyres = tyres;
};
Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;

Truck.prototype.about = function () {
  console.log(
    `The truck is made by ${this.make} and has a speed of ${this.speed} and is ${this.color}, with ${this.tyres} tyres`
  );
};

// console.log(Truck);

const gladiator = new Truck('Toyota', 70, 'white', 4);
gladiator.accelerate();
gladiator.about();
gladiator
  .break()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .break();
gladiator.about();

console.log(gladiator);
console.log(gladiator.__proto__);
console.log(gladiator.__proto__.__proto__);
console.log(gladiator.__proto__.__proto__.__proto__);

console.log(Truck.prototype.constructor);
console.log(Car.prototype, Truck.prototype);

const CarEV = function (make, speed, battery) {
  Car.call(this, make, speed);
  this.battery = battery;
};

CarEV.prototype = Object.create(Car.prototype);
CarEV.prototype.constructor = CarEV;

CarEV.prototype.accelerate = function () {
  this.speed += 20;
  console.log(
    `${this.make} is moving at the speed of ${this.speed} and has ${this.battery} charge left`
  );
  return this;
};

CarEV.prototype.chargeBattery = function (chargeTo) {
  this.battery = chargeTo;
  return this;
};

console.dir(CarEV);
const rimac = new CarEV('Rimac', 120, 25)
  .accelerate()
  .chargeBattery(60)
  .accelerate();

console.log(rimac);
console.log(rimac.__proto__);
console.log(rimac.__proto__.__proto__);

console.log(`
  -------------------
  -------------------
  -------------------
  -------------------
  -------------------
  -------------------
`);

//////////////////////////////////////////////////////
/// CLASSSSSSS ////////////////////////////////
//////////////////////////////////////////////////////
class CarCl {
  speed = 60;
  #color;

  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
    return this;
  }

  set make(val) {
    this._make = val;
  }

  get make() {
    return this._make;
  }

  break() {
    this.speed -= 6;
    console.log(this.speed, this.make);
    return this;
  }

  color(color) {
    this.#color = color;

    return this;
  }

  getColor = function () {
    console.log(this.#color);
    return this;
  };

  static aboutCar(el) {
    console.log(el);
  }
}

const bmw2 = new CarCl('BMW', 80)
  .accelerate()
  .break()
  .accelerate()
  .color('grey')
  .getColor();

console.log(bmw2.__proto__);
console.log(bmw2);
// console.log(CarCl);
// CarCl.aboutCar(document.querySelectorAll('h1'));
// console.log(bmw.__proto__);

class CarEVClass extends CarCl {
  constructor(make, speed, battery) {
    super(make, speed);
    this.battery = battery;
  }
}

const tesla = new CarEVClass('Tesla', 90, 69);
console.log(tesla);
console.table(tesla);
console.log(tesla.__proto__);

console.log(`
  -------------------
  -------------------
  -------------------
  -------------------
  -------------------
  -------------------
`);

///////////////////////////////////////////
// OBJECT.CREATE /////////////////////////////////
//#// ///////////////////////////////
const bmw3 = Object.create(bmw2.__proto__);

console.log(bmw3);
bmw3.make = 'BMWWW';
console.log(bmw3);

console.log(bmw2.__proto__ === CarCl.prototype);
console.log(bmw3.__proto__);

console.log(bmw2.__proto__, bmw3.__proto__);

const electricEV = Object.create(bmw2.__proto__);
console.log(electricEV);
console.log(electricEV.__proto__);

const ElectricV = Object.create(CarCl.prototype);
ElectricV.accelerate = function () {
  this.speed += 60;
  console.log(this.speed);
  return this;
};

ElectricV.init = function (make, speed, battery) {
  this.make = make;
  this.speed = speed;
  this.battery = battery;
};

const teslaX = Object.create(ElectricV);

console.log(teslaX);
console.log(teslaX.__proto__);
console.log(teslaX.__proto__.__proto__);

teslaX.init('X', 69, 75);
teslaX.accelerate();
console.log(teslaX, teslaX.__proto__, teslaX.__proto__.__proto__);

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.init(1900, 'Steven');
console.log(steven);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const nilah = Object.create(StudentProto);
// console.log(nilah);
nilah.init('Nilah', 2004, 'DSS');
console.log(nilah);
nilah.introduce();
nilah.calcAge();

console.log(`
  -------------------
  -------------------
  -------------------
  -------------------
  -------------------
  -------------------
`);

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);
