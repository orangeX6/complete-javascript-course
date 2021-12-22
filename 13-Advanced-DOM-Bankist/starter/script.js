'use strict';

///////////////////////////////////////
// Modal window
/*
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
*/

const btnOpenModal = document.querySelectorAll('.btn--show-modal');
const btnCloseModal = document.querySelector('.btn--close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const openModal = function (e) {
  //Because the Open account button is present in the navbar, it is a a link, and not a button, if the link is not completely visible on dom and we press it, it will jump down a little whenever we press it. so prevent default to avoid it,
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnOpenModal.length; i++)
//   btnOpenModal[i].addEventListener('click', openModal);

//FOR OF
// for (const btn of btnOpenModal) {
//   btn.addEventListener('click', openModal);
// }

//ForEach
//the querySelectorAll method uses nodeList
//For each method works on nodeList
btnOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// 184. PROJECT: "BANKIST" WEBSITE
// 185. HOW THE DOM REALLY WORKS
// 186. SELECTING, CREATING, AND DELETING ELEMENTS
// 187. STYLES, ATTRIBUTES AND CLASSES
// 188. IMPLEMENTING SMOOTH SCROLLING
// 189. TYPES OF EVENTS AND EVENT HANDLERS
// 190. EVENT PROPAGATION: BUBBLING AND CAPTURING
// 191. EVENT PROPAGATION IN PRACTICE
// 192. EVENT DELEGATION: IMPLEMENTING PAGE NAVIGATION
// 193. DOM TRAVERSING
// 194. BUILDING A TABBED COMPONENT
// 195. PASSING ARGUMENTS TO EVENT HANDLERS
// 196. IMPLEMENTING A STICKY NAVIGATION: THE SCROLL EVENT
// 197. A BETTER WAY: THE INTERSECTION OBSERVER API
// 198. REVEALING ELEMENTS ON SCROLL
// 199. LAZY LOADING IMAGES
// 200. BUILDING A SLIDER COMPONENT: PART 1
// 201. BUILDING A SLIDER COMPONENT: PART 2
// 202. LIFECYCLE DOM EVENTS
// 203. EFFICIENT SCRIPT LOADING: DEFER AND ASYNC

/* */

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

// 184. PROJECT: "BANKIST" WEBSITE
//  ✔

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

// 185. HOW THE DOM REALLY WORKS
//  ✔
// Whats DOM ?
//  Basically an interface between the js code and the html documents rendered in and by the browser.

//  Allows us to make js interact with browser

//  We can write Js to create, modify and delete HTML elements;

//  Set styles, classes and attributes; and listen and respond to events.

//  DOM tree is generated from an HTML document, which we can then interact with;

//  DOM is a very complex API that contains lots of methods and properties to interact with the DOM Tree. EXAMPLE _
// querySelector() /.addEventListener() /.createElement() /.innerHTML /.textContent /.children /.etc

//Every single element in the DOM tree is of the type node. Each node is represented by js by an object. this object get access to special node methods and properties.

// Node - element,text, comments, document
//text - text in a paragraph
//comments - comments in html
//document - contains methods like querySelector(), createElement(), getElementById()
//element - html elements - <p>,<body>,<img> etc.

////////////////////////////////////////////////
//              Event Target
//                    |
//        --------------------------
//        |                         |
//        V                         V
//      Node                    Window
//        |
//      ------------------------------------
//      |           |           |           |
//  Element       Text        Comment     Document
//////////////////////////////////////////////////

//Element has an HTML element child tag
//          Element
//            |
//            V
//          HTML Element
//            |
//            V
//        HTML button element , div element , etc
//
//

//NODE Methods and properties -
//  .textContent
//  .childNodes
//  .parentNode
//  .cloneNode()

//ELEMENT METHODS AND PROPERTIES _
//  .innerHTML
//  .classList
//  .children
//  .parentElement
//  .append()
//  .remove()
//  .insertAdjacentHTML()
//  .querySelector()
//  .closest()
//  .matches()
//  .scrollIntoView()
//  .setAttribute()

//Document Methods -
//  .querySelector()
//  .createElement()
//  .getElementById()

//EventTarget
//  .addEventListener()
//  .removeEventListener()

//Window
//  Global Object, lots of methods and properties, many unrelated to DOM

//NOTE _ querySelector is present on both Document and element
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

// 186. SELECTING, CREATING, AND DELETING ELEMENTS

///////////////////
//IMPORTANT LECTURE
//////////////////
//1. ----------------------------------
//SELECTING ELEMENTS
//Selecting the entire document
console.log(document.documentElement);

//Selecting head and body
console.log(document.head);
console.log(document.body);

//We are selecting them using the document node, but we can also use them using element
//querySelector
document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections); //querySelectorAll returns nodeList with all the sections as part of the list

//get Element by ID
document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); //getElementsByTagName returns HTMLCollection with all buttons as a part of the list.
//This is different from the nodeList because the HTMLCollection is a so called live collection. And that means that  if the DOM changes then this collection is updates automatically
//For eg if we delete a button the HTMLCollection will display the change. This does not happen with nodeList

//Get Elements by Class Name
document.getElementsByClassName('btn');
//This element also returns a live html collection.

//2. ------------------------------
//CREATING AND INSERTING ELEMENTS
//Now we can create HTML elements using the insert adjacent HTML function

//1. ===========
//.insertAdjacentHTML
//IN Array Lecture. Banklist App
//containerMovements.insertAdjacentHTML('afterbegin', html);
//Inner adjacent elements take - afterbegin, beforeend and 2 more
//after begin means new element will be added at the top.
//before end means new element will be added the bottom

//2. ===========
// Sometimes its more useful to actually built element from scratch, like more programmatically using a combination of some other methods. .
const header = document.querySelector('.header');

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = `We use cookies for improved functionality and analytics.`;

message.innerHTML = `We use cookies for improved functionality and analytics. <button class ='btn btn--close-cookie'>Got it!</button>`;

header.prepend(message);

//Moving header from top to bottom of header.
header.append(message);
//The append in this case will move the element from top to bottom of the header.
//This is because the message is now a live element living in the DOM And so therefore it cannot be at multiple places at the same time.
//So what's happened here is that we first prepended the element and then we appended it. And what this appends did here was to basically move the element from being the first child to being the last child. All right, so basically it moved the element and didn't really insert it because it was already inserted here by prepend
//This is because a DOM element is unique and can only exist at one place at a time

//Copying element instead of moving
// header.append(message.cloneNode(true));

//////////////////////
//3. =============
// BEFORE AND AFTER
//Before adds element before the element on which the method is called.
//After adds element after the element on which the method is called
// header.before(message);
header.after(message);

//3. --------------------------------------
//DELETE the element
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    // The remove method is quite recent. So before remove method the remove method existed, all we could do was remove the child element
    message.parentElement.removeChild(message);
  });

// 187. STYLES, ATTRIBUTES AND CLASSES
