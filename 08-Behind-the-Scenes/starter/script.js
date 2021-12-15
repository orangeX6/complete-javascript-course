'use strict';

//SCOPE
/* 
function calcAge(birthYear) {
  const age = 2021 - birthYear;

  function printAge() {
    const output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    let notAffected = 'Declared in Scope';
    let affected = `Changed in scope`;

    if (birthYear > 1981 && birthYear < 1997) {
      var millenial = true;
      //Creating NEW variable with same name s outer scope's variable
      const firstName = `Sakshi`;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      affected = `Will change`;
      //Reassigning outer scope's variable
      const notAffected = `New Variable`;
      console.log(affected + `\t\t ` + notAffected);
      console.log(add(2, 3));
    }
    //console.log(str);  // will give error. out of scope
    console.log(millenial);

    console.log(affected + `\t\t ` + notAffected);
  }
  printAge();
  //add(2, 3); //gives error as function is block scope in es6 when in strict mode

  return age;
}

const firstName = 'Pranav';
calcAge(1996);

//VARIABLE HOISTING

// console.log(me);
// console.log(job);
// console.log(year);

var me = 'Pranav';
let job = 'Programmer';
const year = 1996;

//Functions
console.log(addDecl(3, 6));
console.log(addExpr);
console.log(addArrow);
console.log(addExpr(3, 6));
console.log(addArrow(3, 6));

function addDecl(a, b) {
  return a + b;
}

// const addExpr = function (a, b) {
  //   return a + b;
  // };
  
  // const addArrow = (a, b) => a + b;
  
  var addExpr = function (a, b) {
    return a + b;
  };
  
  var addArrow = (a, b) => a + b;
  
  //EXAMPLE
  //WHY you should not use var
  if (!numProducts) deleteShoppingCart();
  
  var numProducts = 10;
  
  function deleteShoppingCart() {
    console.log('All products deleted');
  }
  
 

var x = 1;
let y = 2;
const z = 2;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);



//
//
//
//
//
//
//
//
//
//
//
//THIS KEYWORD
// THIS KEYWORD - Special variable that is created for every Execution context(every function).
// - Takes the value of(points to) the "OWNER" of the function in which the THIS KEYWORD is used
// - THIS is NOT static. IT depends on how the function is called, and its value is only assigned when the function is actually called.

// Method 👉 this = 				<Object that is calling the method>
// Simple function call 👉 this = 	undefined(In strict mode, Otherwise window(in the browser))
// Arrow functions 👉 this = 		<this of surrounding function.(lexical this)>
// Event Listener 👉 this = 		<DOM element that the handler is attached to>
// new,apply,call,bind 👉 this = 	? ? ?

// - This does NOT point to the function itself, and also NOT the variable environment.

console.log(this);

const calcAge = function (birthYear) {
  console.log(2021 - birthYear);
  console.log(this);
};
calcAge(1996);

const calcAgeArrow = birthYear => {
  console.log(2021 - birthYear);
  console.log(this);
};
calcAgeArrow(1996);

const pranav = {
  year: 1969,
  calcAge: function () {
    console.log(this);
    console.log(2021 - this.year);
  },
};
pranav.calcAge();

//Method borrowing
const sakshi = {
  year: 1996,
};

sakshi.calcAge = pranav.calcAge;
sakshi.calcAge();

const f = pranav.calcAge;
f(); // will give typeError.Coz f is just a regular function call and there is no owner in strict mode.


//
//
//
//
//
//
//
//
//
//
//
//
//


//REGULAR VS ARROW FUNCTIONS
//Its best not to use arrow function as a method
// var firstName = 'Sakshi';
const pranav = {
  firstName: 'Pranav',
  year: 1996,
  calcAge: function () {
    // console.log(this);
    console.log(2021 - this.year);
    
    /*
    const isMillennial = function () {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    
    isMillennial(); //This will give the output as undefined as in js this keyword is undefined inside a function call and this is function call even though its in a class method.
    
    Since this wont work inside the isMillennial functions we can use the following solutions
    // 
    // 
    // 
    
    //

   //Solution 1- assign the value of this to self.
   
   // const self = this; //self or that
   // const isMillennial = function () {
     //   console.log(self);
     //   console.log(self.year >= 1981 && self.year <= 1996);
     // };
     
     //Solution 2 -use arrow function(ES6) as arrow function does not have its own this keyword and it inherits this from its parent
     const isMillennial = () => {
       console.log(this);
       console.log(this.year >= 1981 && this.year <= 1996);
      };
      
      isMillennial();
    },
    greet: () => {
      console.log(`Hey ${this.firstName}`);
      console.log(this);
    },
  };
  pranav.calcAge();
  pranav.greet();

//
//
//
//
//ARGUMENT KEYWORD
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(6, 9);

var addArrow = (a, b) => {
  // console.log(arguments); // Error. Since arrow function
  return a + b;
};

addArrow(6, 8);

//
//
//
//
//
//
//
////
//
//
////
//
//
//
//

//PRIMITIVES VS OBJECTS(PRIMITIVES VS REFERENCE TYPES)

//Primitive types
let lastName = 'Orange';
let oldLastName = lastName;
lastName = 'N';
console.log(lastName, oldLastName);

//Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

let marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log(`Before marriage: `, jessica);
console.log(`After marriage: `, marriedJessica);
// console.log(jessica.lastName, marriedJessica.lastName);

//Copying objects (Objects.assign(obj,objToBeCopied) method)

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push(`Mary`);
jessicaCopy.family.push(`John`);

console.log(`Before marriage: `, jessica2);
console.log(`After marriage: `, jessicaCopy);

//In the above example as we expanded jessicaCopy family array. The changes reflected in both the objects jessica2 and jessicaCopy

//There is still a problem in using Object.assign(). It only creates a shallow copy i.e. it only works on first level. For example if we have an object inside an object then the inner object will still be the same i.e. it will still point to the same place in memory.

// We want to create a deep clone and not a shallow copy. A shallow copy will only copy the properties on the first level while the deep copy will copy everything

//One way this can be achieved is by using lodash, an external library.

*/
