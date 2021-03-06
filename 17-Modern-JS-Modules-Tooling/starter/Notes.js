'use strict';

//// 270. An Overview of Modern JavaScript Development
//// 271. An Overview of Modules in JavaScript
//// 272. Exporting and Importing in ES6 Modules
//// 273. Top-Level await (ES2022)
//// 274. The Module Pattern
//// 275. CommonJS Modules
//// 276. A Brief Introduction to the Command Line
//// 277. Introduction to NPM
//// 278. Bundling With Parcel and NPM Scripts
//// 279. Configuring Babel and Polyfilling
//// 280. Review: Writing Clean and Modern JavaScript
//// 281. Let's Fix Some Bad Code: Part 1
//// 282. Declarative and Functional JavaScript Principles
//// 283. Let's Fix Some Bad Code: Part 2

// 270. An Overview of Modern JavaScript Development
// Javascript bundlers - Webpack(popular), parcel(easier)
// just like packages this development tools are also available in npm

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// 271. An Overview of Modules in JavaScript
//Module - reusable piece of code that encapsulates implementation details.
// Usually a stand alone file, but it doesn't have to be

//>> Compose Software
//>> Isolate Components
//>> Abstract Code
//>> Organized Code
//>> Reuse Code

//-> as of ES6, Javascript has a built in native module system
//? before ES6 we had modules, but had to implement them ourselves or use external libraries

//-> ES 6 Modules
//>> Modules stored in files, exactly one module per file.

//>> Difference between SCRIPTS and ES6 MODULE

//->>                       ES6 MODULE                     SCRIPT
//>>
//>> Top level variables | scoped to module     |       global
//>> Default Mode        |  strict mode         | "Sloppy" mode
//>> Top-Level This      |  undefined           |   window
//>> Imports, Exports    |  YES                 |      NO
//>> HTML linking        | <script type="module">| <script>
//>> File downloading    | Asynchronous         |Synchronous (unless we use async or defer)

//Imports, Exports -> They can only happen at the top level, i.e. outside any if block or function. they are hoisted. So importing the values is always the first thing that happens in a module.

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// 272. Exporting and Importing in ES6 Modules
//? In ES modules there are 2 types of export
//? 1. Named exports
//? 2. Default exports - When we only want to export one thing per module
//
//->> The preferred style is to just use 1 default export per module.
//* */ However, this is not a rigid rule and use whatever is required.
//! However you should NOT mix the default and named exports
//
//
//
//>> Export always needs to happen in top level
//* */ We can have default and name imports all at the same time
//>>! However don't do this
//* */ Example -
//* */ import add, {addToCart, totalPrice as price, tq}

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// 273. Top-Level await (ES2022)
//->> ONLY IN MODULES
//>> need to specify script as <script type='modules'> to make this work
//-> Starting from ES 2022, we can now use await key word outside of async function, at least in modules
//? It is important to note that this will block the execution of entire module and must be used carefully for the same reason.

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// 274. The Module Pattern
//*  the main goal of the module pattern is to encapsulate functionality, to have private data, and to expose a public API. And the best way of achieving all that is by simply using a function, because functions give us private data by default and allow us to return values, which can become our public API.

//? Now, the problem is that if we wanted one module per file, like we have with ES6 modules, then we would have to create different scripts and link all of them in the HTML file. And that then creates a couple of problems, like we have to be careful with the order in which we declare them in HTML, and we would have all of the variables living in the global scope, and finally, we also couldn't bundle them together using a module bundler. So the module pattern does indeed work quite good, but it has some limitations. And so that's exactly the reason why native modules were added to the language in ES6.

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// 275. CommonJS Modules
/*
Besides native ES Modules, and the module pattern, there are also other module systems, that have been used by JavaScript in the past. 
But again, they were not native JavaScript. so they relied on some external implementations. 
And two examples are: 
AMD Modules 
CommonJS modules. 
CommonJS modules are important for us, because they have been used in Node.js, for almost all of its existence. 
 */

//? In commonJS 1 file is 1 module, and we export something from this using the 'export.nameOfTheModule'
//! This won't work in our code and also not in our browser. But in Node JS it is an important object
/*
//>> Example -> 
//  Export
export.addToCart = function(product,quantity){
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart. (Shipping Cost is ${shippingCost})`
    );
}

// Import 
const {addToCart} = require('./shoppingCart.js');
 */

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// 276. A Brief Introduction to the Command Line

//>> Windows equivalent of linux commands -(written once if works on both)
//->     ls          dir, ls both work
//->    cd ..
//->    cd folderName
//->    cd../..
//->    clear
//->    mkdir
//->    touch one.js two.js three.js (for creating multiple files)
//->    rm and del
//->    mv filename folderPath  mv bankList.js ../
//->    rmdir (remove empty directory)
//->    rm -R Test (remove non empty directory) R for recursive

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// 277. Introduction to NPM
//-> NPM stands for Node Package Manager
//-> Its both a software on our computer and a package repository

//!!! NEVER include the node module package,package.json file while uploading it to github.
//->> Initialize npm
//>> npm init

//-> In case you delete the node module package, u can simply get it back by the following command
//>> npm i
//-> It will check the dependencies in package.json file and install all the packages with their version numbers

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// 278. Bundling With Parcel and NPM Scripts
//-> INSTALLING PARCEL
//>> npm i parcel --save-dev
//? Installing a specific version>?
//* npm i parcel@1.12.4
//->INSTALLING PACKAGES GLOBALLY
//* npm i parcel -g
// A dev dependency is basically a tool we need to build an application, but not a dependency that we actually include in our code

// There are two ways to use parcel -
//* 1. npx
//>> IN WORKING DIRECTORY
//-> npx parcel index.html

//* 2. npm scripts (HOW WE OFTEN USE)
//>> Add the following in scripts tag in package.json
//->> "start" : "parcel index.html",
//>> And then in terminal just simply type
//->> npm run start

//>> Whenever we are done developing the project, it is time to build the final bundle, a bundle which is compressed and has code elimination
// For that we need another parcel command
//>> Add the following in scripts tag in package.json
//-> "build": "parcel build index.html"

//->>/////////////// MAINTAINING STATE \\\\\\\\\\\\\\\\\<<-
//>>WITH PARCEL WE CAN MAINTAIN THE STATES OF THE OBJECTS USING THE FOLLOWING
//? The data in the object is not reloaded every time we reload the page.
/*
if (module.hot) {
  module.hot.accept();
}
 */

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// 279. Configuring Babel and Polyfilling
//>> Babel Converts modern js to old js so as to support older browsers
//>> Parcel automatically uses Babel.
//Babel works with presets and plugins.
//Plugins means for eg, a plugin to change only arrow functions to javascript pre ES 2015.
//But using plugins doesn't make sense as we would like to change everything
//>>? Different presets are -
//* Different presets are -
//1. @babel/preset-env
//2. @babel/preset-flow
//3. @babel/preset-react
//4. @babel/preset-typescript

//*Focusing on preset-env
//>>Preset-env doesn't support js which are not yet part of the language, just final features
//!So features that have not passed the 4 stages of ECMA process are still not included

//Polyfilling
import 'core-js/stable';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// 280. Review: Writing Clean and Modern JavaScript
//-> Readable Code
//* Write code so tht others can understand it
//* Write code so that you can understand it in 1 year
//* Avoid too 'clever' and 'complex' solutions
//* Use descriptive variable names: what they contain
//* Use descriptive function names: what they do

//-> General
//* Use DRY principles(refactor)
//* Don't pollute the global namespace, encapsulate your code in modules
//* Don't use var
//* Use strong type checks(=== and !==)

//-> Functions
//* Generally, functions should do only one thing
//* Don't use too many parameters
//* Use default parameters when possible
//* Generally, return the same data type as the function's input
//* Use arrow functions when they make code more readable

//-> OOP
//* Use ES6 classes
//* Encapsulate data and don't mutate it from outside the class
//* Implement method chaining
//* Do NOT use arrow functions as methods(in regular objects)

//-> Avoid Nested Code
//* Use early returns(guard clauses)
//* Use ternary(conditional) or logical operators instead of if
//* Use multiple if statements instead of nested if/else statements
//* Avoid for loops, use array methods instead
//* Avoid callback-based asynchronous api

//-> Asynchronous Code
//* Consume promises with async/await for better readability
//* Whenever possible, run promises in parallel(Promise.all)
//* Handle errors and promises rejection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// 281. Let's Fix Some Bad Code: Part 1
//clean.js file

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// 282. Declarative and Functional JavaScript Principles
//>> Imperative vs Declarative
//-> Imperative -
//* Programmer explains 'How to do things'
//* We Explain the computer every single step it has to follow to achieve the result
//* Example: step by step recipe to make a cake
//Example: doubling the array
/*
const arr = [1, 2, 3, 4, 5];
const doubled = [];
for (let i = 0; i < arr.length; i++) {
  doubled[i] = arr[i] * 2;
}
*/

//-> Declarative -
//>> Programmer tells 'What to do'
//>> We simply describe the way the computer should do the job
//>> The HOW(step - by step instructions) gets abstracted away
//>> Example: Description of the cake
//Example: doubling the array
/*
const arr = [1, 2, 3, 4, 5];
const doubled = arr.map(num => num * 2);
*/

//->> Functional Programming
//* Declarative programming paradigm
//* Based on the idea of writing software by combining many pure functions, avoiding side effects and mutating data.

//! Side effects:
//Modifications(mutation) of any data outside of the function(mutating external variables, logging to the console,writing to DOM etc)

//>> Pure functions:
//* Functions that do not have side effects Does not depend on external variables. Given the same inputs, always return the same outputs

//>> Immutability:
//* State (data) is never modified! Instead, state is copied and the copy is mutated and returned.

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// 283. Let's Fix Some Bad Code: Part 2
//clean.js file

//->> Object.freeze({jonas: 'jonas'})
//>> Makes an object immutable. You cannot put any new properties on it.

//Object.freeze is not a deep freeze, we can still change objects inside of the object
