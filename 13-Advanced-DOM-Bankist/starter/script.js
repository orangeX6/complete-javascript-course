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

//Modal Window
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

// 188. IMPLEMENTING SMOOTH SCROLLING
/* <button class="btn--text btn--scroll-to">Learn more ↓</button> */
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');

btnScrollTo.addEventListener('click', function (e) {
  //MODERN WAY
  section1.scrollIntoView({ behavior: 'smooth' });

  //OLD WAY
  /*
  //Get the co ordinates of the element
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  //Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  //Better approach, passing an object
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });


  //get co ordinates of the button
  console.log(e.target.getBoundingClientRect());

  //Get Current Scroll - X , Y
  //depricated
  console.log(`Current Scroll (X/Y)`, window.pageXOffset, window.pageYOffset);
  //new alternative
  console.log(`Current Scroll (X/Y)`, window.scrollX, scrollY);

  //height and width of viewport
  console.log(
    'height/width viewport ',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
 */

  //getBoundingClientRect()
  //window.scrollTo({left:obj.left + window.scrollX,
  //                     right:obj.right + window.scrollY,
  //                  behavior:'smooth' })
  //  document.documentElement.clientWidth/Height
  //  section1.scrollIntoView({behavior:'smooth'})
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
/*
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
// header.after(message);

//3. --------------------------------------
//DELETE the element
header.prepend(message);
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    // The remove method is quite recent. So before remove method the remove method existed, all we could do was remove the child element
    message.parentElement.removeChild(message);
  });
*/

//document.documentElement
//document.head
//document.body
//document.querySelector()
//document.querySelectorAll()
//getElementById()
//getElementsByTagName()
//getElementsByClassName()
//element.append(childElement)
//element.prepend(childElement)
//element.textContent
//element.insertAdjacentHtml('beforeBegin',html/'afterBegin',html/'beforeEnd',html/'afterEnd',html)
//element.innerHTML
//element.classList.add()/remove()/toggle()/contains()
//header.append(message,cloneNode(true))
//element.before()
//element.after()
//addEventListener()
//message.parentElement.removeChild(message)
//message.remove()

// 187. STYLES, ATTRIBUTES AND CLASSES
/*
//////////////////
//STYLES
//////////////////
//  set a style on Element
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
//This styles are actually set as inline styles

//1.
//READING styles using STYLE PROPERTY
//Using the style property ONLY WORKS while using the inline style that we set ourselves using the style property
console.log(message.style.color); //wont work. returns empty string
console.log(message.style.width);

//2. (THE ONE WHICH WORKS ON ALL)
//getComputedStyle
console.log(getComputedStyle(message));
console.log(getComputedStyle(message).color);

//setting STYLE on Element using getComputedStyle
message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';
console.log(getComputedStyle(message).height);

//CSS Custom Properties (CSS Variables)
//variables declares in root in style.css
//root in css is css equivalent of document in js
//We use setProperty for custom properties.
document.documentElement.style.setProperty('--color-primary', 'orangered');

//////////////////
//ATTRIBUTES
//CHANGING HTML ATTRIBUTES - alt,src,input,class,id,etc.
//////////////////
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className); //class

logo.alt = 'Beautiful minimalist logo';
console.log(logo.alt);

//non - standard
console.log(logo.designer); //wont work on non standard attr
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Banklist');

console.log(logo.src); //returns absolute URL
console.log(logo.getAttribute('src')); //returns url as written in HTML file

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

const link2 = document.querySelector('.nav__link--btn');
console.log(link2.href); //returns absolute URL
console.log(link2.getAttribute('href')); //returns url as written in HTML file

//DATA ATTRIBUTES
//Data attributes are a special type of attributes
//These special attributes are always stored in the dataset object
//It has to start with data-
//we have to convert the name of the attribute after data- to camel case

//data-version-number="3.0"
console.log(logo.dataset.versionNumber);

// so we use actually data attributes quite a lot when we work with the UI and especially when we need to store data in user interface

/////////////////
//CLASSES
////////////////
logo.classList.add();
logo.classList.remove();
logo.classList.toggle();
logo.classList.contains();

//Dont use //////////////////////////
logo.className = 'JONAS';
//It will overwrite all the existing class names and allows us to only write a single class name

//classList
//getAttribute
//setAttribute
//getComputedStyle

*/
// 188. IMPLEMENTING SMOOTH SCROLLING
//*   ✔

//189. TYPES OF EVENTS AND EVENT HANDLER
//*   ✔

//Mouse Enter Event
const h1 = document.querySelector('h1');
const alertH1 = function (e) {
  console.log(`Reading the Heading`);
  // alert('I am the monster you created');
  // REMOVING Event Listener
  // h1.removeEventListener('mouseenter', alertH1);
};
//1.
h1.addEventListener('mouseenter', alertH1);

//USING setTImeout to remove EventListener
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

//oldSchool way
//2.
//Another way of attaching event listener to an element
//onEvent property
h1.onmouseenter = function (e) {
  console.log(`Mouse enter `);
};

//This is an old school way of listening to any event
//There are 2 reasons addEventListener is better -
//1. It always you to add multiple event listeners to the same event.
//2. We can actually remove event Listener in case we don't need it anymore

//3.
//USING HTML ATTRIBUTE
//Should not be used
//in html file
//<h1 onclick="alert('HTML ALERT')">

// 190. EVENT PROPAGATION: BUBBLING AND CAPTURING
//(MOST IMPORTANT PROPERTY OF EVENTS)
//* ✔
