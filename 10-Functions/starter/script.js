'use strict';

//FUNCTIONS
//1. DEFAULT PARAMETERS
//2. HOW PASSING ARGUMENTS WORKS: VALUE Vs. REFERENCE
//3. FIRST-CLASS AND HIGHER-ORDER FUNCTIONS
//4. FUNCTIONS ACCEPTING CALLBACK FUNCTIONS
//5. FUNCTIONS RETURNING FUNCTIONS
//6. THE CALL AND APPLY METHODS
//7. THE BIND METHOD
//8. CODING CHALLENGE #1
//9. IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
//10. CLOSURES
//11. MORE CLOSURE EXAMPLES
//12. CODING CHALLENGE #2

//1. DEFAULT PARAMETERS
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5 of specifying default values
  // numPassengers = numPassengers || 1;
  // price = price || 199

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);

  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 799);
//If a parameter value is unknown we can specify it as undefined and the function will take the default parameter value specified.
createBooking('LH123', undefined, 1000);
*/

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
//
//
//

//2. HOW PASSING ARGUMENTS WORKS: VALUE Vs. REFERENCE
/*
 When we pass primitives into a function like a string, number, boolean etc. a new copy is created. But when we copy an object like an array, object a reference to the value is created and not a copy.

 In programming there are two terms used all the time 
 1. Passing by reference
 2. Passing by value 

 JavaScript does not have passing by reference. Only passing by value. Even though it looks like we are passing by a reference.
 As we can see in terms of obj, we do pass reference to the function but we do not pass by a reference


 ////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////
PASS BY VALUE IN JS EXPLANATION
/////////////////////////////////////////////
///////////////////////////
/////////////////
 Let's see if I can break this down into a more understandable format. In the end, it all comes down to how primitive types and reference types relate to the Call Stack and the Heap. I assume you're slightly familiar with the terms, as we went through them in detail, in Section 8: "How JavaScript Works Behind the Scenes".

In simple terms:

The Call Stack remembers identifiers, memory addresses, and values. An identifier points at an address that stores a value. Primitive types, like strings and numbers, are stored in the Call Stack.

The Heap, or memory heap, remembers addresses and values. Complex types, like objects and arrays, are stored in the Heap.

I'm using bold to signify terms on the Stack and Heap side, and italics to signify variables in our script.

Consider the following code:

let a = 30;
let b = a;
a = 31;
const obj = {first: 1, second: 2};
const obj2 = obj;
The JS engine will create an identifier, a, for our declared variable, a. Since we're assigning a primitive data type (number) it then creates a new memory address, 0001, and stores the value 30 there.

We can now use our variable a, which relates to identifier a, which points to memory address 0001, that stores the value 30.

Next, the engine creates an identifier, b, for our declared variable, b. For our value, we tell the engine to look for the variable a. The engine then finds the identifier a, looks at the memory addresses it points to, 0001, and sets this as the memory address identifier b points to.

Next line, we're assigning a new value to the existing variable a. The engine looks up the identifier a, points it at a new memory address, 0002, and stores the value 31 there.

On the following line, we declare a variable obj. The engine creates an identifier, obj, points it to a new memory address, 0003, and since the assignment is a new object, it reaches over to the Heap. There, it creates a new address, D30F, and stores the value {first: 1, second: 2} there. It then moves back to the stack and saves the address D30F as the value for address 0003.

At this point, it's worth mentioning that the heap remembers first and second as their own identifiers, pointing at their own memory addresses, let's call them D30F1 and D30F2, storing their own values.

Finally, we declare a new variable, obj2. The engine creates a new identifier, obj2 on the stack, looks at what address the obj identifier points to, and sets that as the address for obj2 to also point to.

So, obj and obj2 point to address 0003, which has stored the address D30F for the heap. Every time we use the obj or obj2 variables in our script, the engine will look at the heap for the values stored at that address. You could say that they both hold a reference to this value.

But, what happens if we now change the value of the .first-property of our obj2 ﻿object?

obj2.first = 3;
console.log(obj.first);
If you're following along, you probably noticed that this logged the number 3 to the console.

To understand this behavior, it is time for one last, ultimate plunge into the depths.

We tell the engine to look at the identifier of obj2. The engine detects that it points to address 0003, which stores an address, D30F, on the heap. It moves to the corresponding address on the heap and looks for the identifier first within it. It creates a new memory address for it to point to, D30F3, and stores the value 3 there. So, the value of D30F is now {first: 3, second: 2}. Do you see the issue here?

The identifier obj for our object obj, still points at the address 0003, which still stores the address D30F for the heap, which brings us to the value {first: 3, second: 2}, that has now wantonly been modified by another object, obj2.


const flight = 'LH324';
const pranav = {
    name:'Pranav Naringrekar',
    passport: 24636474477
}

const checkIn = function(flightNum, passenger){
    flightNum = 'LH999';
    passenger.name = 'Mr.' + passenger.name;

    if(passenger.passport === 24636474477){
        alert('Check In')
    } else {
        alert('Wrong Passport')
    }
}


checkIn(flight, pranav)
console.log(flight);
console.log(pranav);

const newPassport = function(person){
    person.passport = Math.trunc(Math.random()*1000000000);
}

newPassport(pranav)
checkIn(flight, pranav);

*/

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
//
//
//
//

//3. FIRST-CLASS AND HIGHER-ORDER FUNCTIONS
//first class
//1.first class functions this means that functions are treated as values they are another type of object

//2.we can sotre functions in variables or properties
//passing functions as argumetns to OTHER functions an example can be is a event listener

//3.they can return functions FROM other functions

//4.call methods on fuctions bind method

//higher order
//1. A function that receives another function as an argumrnt that returns a new function or both this is only possible because of first class functions

//a event listener is a higher order function becasue it receives a call back function its called a call back function because it will be called later by the higher order function

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
//
//
//
//
//
//
//

//4. FUNCTIONS ACCEPTING CALLBACK FUNCTIONS

//callback function
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

//callback function
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher Order Function
//A function which takes in a function or returns a function
//the function passed as parameter to other function is called call back function, as we ourself dont call it but we ask the higher order function to call it.
//JS uses callback all the time
//The biggest advantage of using callback functions is callback functions creates abstraction
//ABSTRACTION - Hide the detail of code implementation

//Higher Order Function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);

  //Functions also have methods and properties in JS
  //name property
  console.log(`Transformed by: ${fn.name}`);
};

//calling a higher order function. We only passing in the function value itself. We are not calling the function here
transformer(`Javascript is the best!`, upperFirstWord);

transformer(`Javascript is the best!`, oneWord);

const high5 = function () {
  console.log('🤟🏻');
};

document.body.addEventListener('click', high5);

['Pranav', 'Sakshi', 'Tae'].forEach(high5);

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

//5. FUNCTIONS RETURNING FUNCTIONS
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

//Basically greeterHey will now contain the name function and whenever we will call the greeterHey with parameter it will execute the name function
//This works because of closures
//greet returned a new function which is stored in the greeterHey variable and this variable now is a function that we can call
const greeterHey = greet('Hey');

greeterHey('Pranav'); //outputs Hey Pranav
greeterHey('Sakshi'); //outputs Hey Sakshi

//We can also do it all in one go
greet('Hello')('Sakshi');

//This is useful when you are using functional programming paradigm


//Challenge - Write the greet func as arrow
const greetings = greeting => name => console.log(`${greeting} ${name}`);

greetings('Greetings')('Sakshi')

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

//6. THE CALL AND APPLY METHODS

//FUNCTION METHODS AND PROPERTIES
//1. name
