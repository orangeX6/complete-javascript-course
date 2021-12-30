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

//208. Constructor Functions and the new Operator

//Building objects using the constructor functions
