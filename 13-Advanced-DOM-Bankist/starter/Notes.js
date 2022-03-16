//! NOTES

// Whats DOM ?
//  Basically an interface between the js code and the html documents rendered in and by the browser.

//  DOM tree is generated from an HTML document, which we can then interact with;

//  DOM is a very complex API that contains lots of methods and properties to interact with the DOM Tree. EXAMPLE _
// querySelector() /.addEventListener() /.createElement() /.innerHTML /.textContent /.children /.etc

//Every single element in the DOM tree is of the type node. Each node is represented by js by an object. this object get access to special node methods and properties.

////////////////////////////////////////////////
//->              Event Target
//->                    |
//->        --------------------------
//->        |                         |
//->        V                         V
//->      Node                    Window
//->        |
//->      ------------------------------------
//->      |           |           |           |
//->  Element       Text        Comment     Document
//////////////////////////////////////////////////

//->Element has an HTML element child tag
//->          Element
//->            |
//->            V
//->          HTML Element
//->            |
//->            V
//->        HTML button element , div element , etc
//
//

// Node - element,text, comments, document
//text - text in a paragraph
//comments - comments in html
//document - contains methods like querySelector(), createElement(), getElementById()
//element - html elements - <p>,<body>,<img> etc.

//-> NODE Methods and properties -
//  .textContent
//  .childNodes
//  .parentNode
//  .cloneNode()

//-> ELEMENT METHODS AND PROPERTIES _
//  .parentElement
//  .children
//   element.append(childElement)
//   element.prepend(childElement)
//   element.textContent
//   element.insertAdjacentHtml('beforeBegin',html/'afterBegin',html/'beforeEnd',html/'afterEnd',html)
//   element.innerHTML
//   element.classList.add()/remove()/toggle()/contains()
//   header.append(message,cloneNode(true))
//   element.before()
//   element.after()
//   addEventListener()
//   message.parentElement.removeChild(message)
//   message.remove()
//  .closest()
//  .matches()
//  .scrollIntoView()
//  .setAttribute()

//-> Document Methods AND PROPERTIES
//  document.querySelector()
//  .querySelectorAll()         //-> Returns NodeList
//  .createElement()
//  .getElementById()
//  .getElementsByTagName()    //-> Returns HTMLCollection
//  .getElementsByClassName()  //-> Returns HTMLCollection
//  document.documentElement
//  document.head
//  document.body
// document.documentElement.style.setProperty('--color-primary', 'orange')
//EventTarget
//  .addEventListener()
//  .removeEventListener()

//Window
//  Global Object, lots of methods and properties, many unrelated to DOM

//NOTE _ querySelector is present on both Document and element

// 187. STYLES, ATTRIBUTES AND CLASSES
message.style.backgroundColor = '#37383d';
getComputedStyle(message);
Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';

//CUSTOM PROPERTY
document.documentElement.style.setProperty('--color-primary', 'orangered');

//ATTRIBUTES
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
logo.alt = 'Beautiful minimalist logo';

//non - standard
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Banklist');

console.log(logo.src); //returns absolute URL
console.log(logo.getAttribute('src')); //returns url as written in HTML file

//DATA ATTRIBUTES
//data-version-number="3.0" //IN html
console.log(logo.dataset.versionNumber);

//CLASSES
////////////////
logo.classList.add();
logo.classList.remove();
logo.classList.toggle();
logo.classList.contains();

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
//188
//WINDOW AND EVENTS

e.target.getBoundingClientRect();
//WINDOW SCROLL
window.pageXOffset, window.pageYOffset;
window.scrollX, scrollY;

//VIEWPORT HEIGHT
documentElement.clientWidth, documentElement.clientHeight;

//SCROLL INTO VIEW
//-> 1.
/*
 window.scrollTo({element.left+window.pageXOffset, 
                  element.top + window.pageYOffset
                 behavior:'smooth'})
*/

//-> 2.
section1.scrollIntoView({ behavior: 'smooth' });

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
//189.
// TYPES OF EVENTS AND EVENT HANDLER
//There are 2 reasons addEventListener is better -
//1. It always you to add multiple event listeners to the same event.
//2. We can actually remove event Listener in case we don't need it anymore

//EVENT LISTENERS
h1.addEventListener('mouseenter', alertH1);
h1.removeEventListener('mouseenter', alertH1);
h1.addEventListener('click', alertH1);

//onEvent property
h1.onmouseenter = function (e) {
  console.log(`Mouse enter `);
};

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

// 190.
//EVENT PROPAGATION: BUBBLING AND CAPTURING
//(MOST IMPORTANT PROPERTY OF EVENTS)
//* ✔
//Events have a capturing phase and a bubbling phase

//Event first happens in the document root and then travels down to the target element. This is capturing

// And from there it bubbles up.
//Bubbling up means that basically its as if the event had also happened in all of the parent elements

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

// 191. EVENT PROPAGATION IN PRACTICE
// the target element is the the element where the click first happened.
//currentTarget is the element on which the event is attached to
//currentTarget and the this keyword are going to be exactly the same in any event handler

//STOP PROPAGATION (
e.stopPropagation();
//Stops the propagation of event to the parent elements
//In general its not a good idea to use stopPropagation but there might be cases where you might need to use it

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

// 192
// EVENT DELEGATION

//* In event delegation, we use the fact that events bubble up and we do that by putting the eventListener on a common parent of all the elements that we are interested in.

//? 1. First we add the event listener to a common parent element of all the elements that we are interested in
//? 2. Determine what element originated the event

document.querySelector('.nav__links ').addEventListener('click', function (e) {
  e.preventDefault();

  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

// 193
// DOM TRAVERSING

//* Basically walking through the DOM, that is selecting element based on other element

//Going downwards: child
h1.querySelectorAll('.highlight');
h1.childNodes; // returns a nodelist of all child nodes
h1.children; //returns html collection of child tags
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'cyan';

//Going upwards: parent
h1.parentElement;
h1.parentNode;

//Important for event delegation
h1.closest('.header').style.background = 'var(--gradient-secondary)';
//returns itself if it matches the element on which we are calling closest
h1.closest('h1').style.background = 'var(--gradient-primary)';

//Going sideways: siblings
//We can only access direct siblings
h1.previousElementSibling;
h1.nextElementSibling;
h1.previousSibling;
h1.nextSibling;

//To get all siblings
//will also include itself
console.log(h1.parentElement.children);

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

//? 194.
// TABBED COMPONENT
//* Guard Class - Basically an if statement which will return early if a condition is matched
if (!clicked) return;

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

// 195.
//PASSING ARGUMENTS TO EVENT HANDLERS
// Difference between mouseenter and mouseover ?
//? MouseEnter does NOT BUBBLE  while mouseover BUBBLES
// Opposite of mouseover and mouseenter ->
//* mouseout and mouseleave

//Passing parameter
const handleHover = function (e) {
  // console.log(this, e.currentTarget);
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

//* SOLUTION 2 --> BIND METHOD
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//* SOLUTION 1 ->
nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.5);
});
nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
});

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

// 196.
//* STICKY NAVIGATION
window.addEventListener('scroll', function (e) {
  console.log(e);
});

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

// 197.
//A BETTER WAY: THE INTERSECTION OBSERVER API

//*This API allows our code to basically observe changes to the way that a certain target element intersects another element, or the way it intersects the viewport.

//?   The callback function will be called each time that the observed element is intersecting the root element at the threshold we have defined
//? root - element where target is intersecting
//? threshold - percentage of intersection at which the call back function will be called. We can have multiple thresholds, we define it with array
//? rootMargin - adds margin to root

const obsOption = {
  root: null,
  threshold: 0.15, // can also take array
  rootMargin: '300px',
};

//entries here is threshold. By default an array
const obsCallBack = function (entries, observer) {
  const [entry] = entries;

  //Guard Class
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(obsCallBack, obsOptions);

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

// 200 201 202
//SLIDER COMPONENT

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

// 203.
//EFFICIENT SCRIPT LOADING: DEFER AND ASYNC
//We can use the async attribute to the script tag, or the defer attribute. And these attributes are gonna influence the way in which the JavaScript file is fetched,which basically means download and then executed.

//ALWAYS AT THE END OF BODY
//<script  src = "script.js"></script>

//IN HEAD TAG
//* <script async src = "script.js"></script>
//? <script defer src = "script.js"></script>

//* ASYNC ->
//* 1. <script async src = "script.js"></script>
//* 2. Scripts are fetched asynchronously and executed immediately
//* 3. Usually the DOM content loaded event waits for all scripts to execute, except for async scripts. So, DOM Content Loaded does not wait for an async script-+
//* 4. Scripts are NOT guaranteed to execute in order

//? DEFER ->
//? 1. <script defer src = "script.js"></script>
//? 2. Scripts are fetched asynchronously and executed after the HTML is completely parsed
//? 3. DOMContentLoaded event fires after defer script is executed
//? 4. Scripts are executed IN ORDER

//* USING DEFER IS THE BEST SOLUTION OVERALL
//! OLD BROWSERS DONT SUPPORT ASYNC AND DEFER
