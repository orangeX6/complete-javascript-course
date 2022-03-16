'use strict';

//*Selecting Elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelectorAll('.btn--show-modal');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const allSections = document.querySelectorAll('.section');
const header = document.querySelector('.header');
const section1 = document.getElementById('section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

///////////////////////////////////////

//*Modal Window
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

////////////////////////////////////////////////
////////////////////////////////////////////////

//* BUTTON SCROLLING
//? 188. IMPLEMENTING SMOOTH SCROLLING
btnScrollTo.addEventListener('click', function (e) {
  /*
  //OLD WAY
  //Get the co ordinates of the element
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  //Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  Better approach, passing an object
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });

  //get co ordinates of the button
  console.log(e.target.getBoundingClientRect());

  //Get Current Scroll - X , Y
  //new alternative
  console.log(`Current Scroll (X/Y)`, window.scrollX, scrollY);

  //height and width of viewport
  console.log(
    'height/width viewport ',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  */

  //MODERN WAY
  section1.scrollIntoView({ behavior: 'smooth' });
});

//////////////////////////////////////////////
//////////////////////////////////////////////
//*PAGE NAVIGATION
//? 192. EVENT DELEGATION: IMPLEMENTING PAGE NAVIGATION

/* 
//!WITHOUT EVENTS DELEGATION
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    console.log('Link');
    e.preventDefault();

    const id = this.getAttribute('href');
    console.log(id);

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});

*/

//! The above works but its not efficient.
//! So the exact same function is now attached to the 3 elements above and thats kind of unnecessary.

//* EVENT DELEGATION
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

/////////////////////////////////////////////////
/////////////////////////////////////////////////

//* TABBED CONTAINER
//? 194. BUILDING A TABBED COMPONENT

tabsContainer.addEventListener('click', function (e) {
  // e.preventDefault();
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);
  // console.log(clicked.className);
  //! returns ERROR if clicked anywhere else on tabs container where it cant find operations tab
  //SOLUTION ->
  //* Guard Class - Basically an if statement which will return early if a condition is matched
  if (!clicked) return;

  //Active Tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  //Remove Active class
  tabsContent.forEach(tc => tc.classList.remove('operations__content--active'));

  //Activate Content Area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////

//* MENU FADING ANIMATION
//? 195. PASSING ARGUMENTS TO EVENT HANDLERS

/*
// Difference between mouseenter and mouseover ?
//? MouseEnter does NOT BUBBLE  while mouseover BUBBLES
// Opposite of mouseover and mouseenter ->
//* mouseout and mouseleave
*/

//Handle mouseover and mouseout
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

//Passing parameter
//* SOLUTION 1 ->
/*
nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.5);
});
nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
});
*/

//* SOLUTION 2 --> BIND METHOD
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

/////////////////////////////////////////////////
/////////////////////////////////////////////////

//* STICKY NAVIGATION
//? 196. IMPLEMENTING A STICKY NAVIGATION: THE SCROLL EVENT
//!!!!!!!!!! NOT SO EFFICIENT. BAD APPROACH, BAD PERFORMANCE
//? BETTER APPROACH IN 197
/*
const initialCoords = section1.getBoundingClientRect();

window.addEventListener('scroll', function (e) {
  // console.log(window.scrollY, initialCoords.top);
  if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
*/

/////////////////////////////////////////////////
//? 197. A BETTER WAY: THE INTERSECTION OBSERVER API

//*Well, this API allows our code to basically observe changes to the way that a certain target element intersects another element, or the way it intersects the viewport.

//?   The callback function will be called each time that the observed element is intersecting the root element at the threshold we have defined
//? root - element where target is intersecting
//? threshold - percentage of intersection at which the call back function will be called. We can have multiple thresholds, we define it with array
//? rootMargin - adds margin to root

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

/////////////////////////////////////////////////
/////////////////////////////////////////////////

//* REVEAL SECTIONS
//? 198. REVEALING ELEMENTS ON SCROLL

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  //Guard Class
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////

//* LAZY LOADING IMAGES
//? 199. LAZY LOADING IMAGES
const imgTargets = document.querySelectorAll('img[data-src]');
// console.log(imgTargets);

const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry.target);

  //Guard Class
  if (!entry.isIntersecting) return;

  //Replace src attribute with data-src
  entry.target.src = entry.target.dataset.src;

  //Removing the blur class
  //? We use the load event. It is fired when image is loaded and we can listen to it just like any other event.
  //* Using the load event listener we will only remove the blur once the image is fully loaded
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imageObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '300px',
});

imgTargets.forEach(img => imageObserver.observe(img));

/////////////////////////////////////////////////
/////////////////////////////////////////////////

//* SLIDER (Carousel)
//? 200. BUILDING A SLIDER COMPONENT: PART 1

// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.4) translateX(-900px)';
// slider.style.overflow = 'visible';

//SLIDER FUNCTION -------------------------
const slider = function () {
  ////////////////////////!
  //*SLIDER VARIABLES
  let curSlide = 0;
  const maxSlide = slides.length - 1;

  ////////////////////!
  //*FUNCTIONS
  //Create Dot
  const createDots = function () {
    slides.forEach(function (_, i) {
      const dots = `
    <button class = "dots__dot" data-slide ="${i}"></button>
    `;
      dotContainer.insertAdjacentHTML('beforeend', dots);
    });
  };

  //Activate Dot
  const activateDot = function (slide = 0) {
    // console.log(typeof curSlide, curSlide);
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"`)
      .classList.add('dots__dot--active');
  };

  //SLider
  const goToSlide = function (slide = 0) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  //Next Slide
  const nextSlide = function () {
    if (curSlide === maxSlide) curSlide = 0;
    else curSlide++;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  //Prev Slide
  const prevSlide = function () {
    if (curSlide === 0) curSlide = maxSlide;
    else curSlide--;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  //////////////////////!
  //*INITIALIZE
  const init = function () {
    //0%, 100%, 200%, 300%
    goToSlide();
    createDots();
    activateDot();
  };
  init();

  ////////////////////!
  //* EVENT HANDLERS
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  //* Using keyboard event to slide with left and right keys
  document.addEventListener('keydown', function (e) {
    console.log(e);
    if (e.key === 'ArrowLeft') prevSlide();
    //Short Circuit method
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      //using object destructuring
      const { slide } = e.target.dataset;
      curSlide = Number(slide);
      //same as  const slide = e.target.dataset.slide
      goToSlide(slide);
      activateDot(slide);
    }
  });
};

slider();

///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////

// 184. PROJECT: "BANK LIST" WEBSITE
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

// 184. PROJECT: "BANKLIST" WEBSITE
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

//3. -------------------------------------
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

*/
//classList
//getAttribute
//setAttribute
//getComputedStyle

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

// 188. IMPLEMENTING SMOOTH SCROLLING
//*   ✔
// 188. IMPLEMENTING SMOOTH SCROLLING
/* <button class="btn--text btn--scroll-to">Learn more ↓</button> */
/*
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');

btnScrollTo.addEventListener('click', function (e) {
  //MODERN WAY
  section1.scrollIntoView({ behavior: 'smooth' });

  //OLD WAY
  
  //Get the co ordinates of the element
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  //Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  //Better approach, passing an object
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

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
 
  //getBoundingClientRect()
  //window.scrollTo({left:obj.left + window.scrollX,
  //                     right:obj.right + window.scrollY,
  //                  behavior:'smooth' })
  //  document.documentElement.clientWidth/Height
  //  section1.scrollIntoView({behavior:'smooth'})
});

* e.target.getBoundingClientRect()
* window.pageXOffset, window.pageYOffset
* documentElement.clientWidth, documentElement.clientHeight
* window.scrollTo({element.left+window.pageXOffset, 
*                  element.top + window.pageYOffset
*                   behavior:'smooth'})
* section1.scrollIntoView({behavior:'smooth'})

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

//189. TYPES OF EVENTS AND EVENT HANDLER
//*   ✔
/*
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

// 190. EVENT PROPAGATION: BUBBLING AND CAPTURING
//(MOST IMPORTANT PROPERTY OF EVENTS)
//* ✔
//Events have a capturing phase and a bubbling phase

//Event first happens in the document root and then travels down to the target element. This is capturing

// And from there it bubbles up.
//Bubbling up means that basically its as if the event had also happened in all of the parent elements

//
//
//
//
//
//
//
//

// 191. EVENT PROPAGATION IN PRACTICE
//* addEventListener is always listening to the events in the bubbling phase and not the capture phase. This is the default behavior
//? That is because the capture phase is not that useful for us but the bubbling phase is very important for event delegation.
//! If we do really want to catch events during the capturing phase we can define a 3rd parameter in the addEventListener
//addEventListener('click',function(){},true)
//? When set to true event handler will listen to capturing events and not bubbling events
//rgb(255,255,255)

/*
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

console.log(randomColor());

document.querySelector('.nav__link').addEventListener('click', function (e) {
  //In event handlers the this keyword will always point to the element on which the event handler is attached to
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this); //true
  //Stop propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
  console.log(e.currentTarget === this); //true
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
    console.log(e.currentTarget === this); //true
  },
  true //Look for capturing event. so will be executed  first (default - false) coz bubbling is default
);

//In all the 3 handlers, the target element is the same, the element where the click first happened.
//So the event that each of them receives is the exact same event
//That is because of the event bubbling
//The event originates in the <a> element, and then bubbles up to its parent element and then to its next parent element and so on
//currentTarget is the element on which the event is attached to
//currentTarget and the this keyword are going to be exactly the same in any event handler

//STOP PROPAGATION (e.stopPropagation())
//Stops the propagation of event to the parent elements
//In general its not a good idea to use stopPropagation but there might be cases where you might need to use it
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

// 192. EVENT DELEGATION: IMPLEMENTING PAGE NAVIGATION
// !AT THE TOP
//*
/* 

//* EVENT DELEGATION
//* In event delegation, we use the fact that events bubble up and we do that by putting the eventListener on a common parent of all the elements that we are interested in.

//? 1. First we add the event listener to a common parent element of all the elements that we are interested in
//? 2. Determine what element originated the event

//!WITHOUT EVENTS DELEGATION
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    console.log('Link');
    e.preventDefault();

    const id = this.getAttribute('href');
    console.log(id);

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});

//! The above works but its not efficient.
//! So the exact same function is now attached to the 3 elements above and thats kind of unnecessary.

document.querySelector('.nav__links ').addEventListener('click', function (e) {
  e.preventDefault();

  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
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

// 193. DOM TRAVERSING
/*
//* Basically walking through the DOM, that is selecting element based on other element
const h1 = document.querySelector('h1');

//Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes); // returns a nodelist of all child nodes
console.log(h1.children); //returns html collection of child tags
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'cyan';

//Going upwards: parent
console.log(h1.parentElement);
console.log(h1.parentNode);

//Important for event delegation
h1.closest('.header').style.background = 'var(--gradient-secondary)';
//returns itself if it matches the element on which we are calling closest
h1.closest('h1').style.background = 'var(--gradient-primary)';

//Going sideways: siblings
//We can only access direct siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

//To get all siblings
//will also include itself
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) {
    el.style.transform = 'scale(0.5)';
  }
});
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

// 194. BUILDING A TABBED COMPONENT
//! AT THE TOP

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

// 195. PASSING ARGUMENTS TO EVENT HANDLERS
//! AT THE TOP

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

// 196. IMPLEMENTING A STICKY NAVIGATION: THE SCROLL EVENT
//!AT THE TOP

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

// 197. A BETTER WAY: THE INTERSECTION OBSERVER API
//! AT THE TOP
/*
//Well, this API allows our code to basically observe changes to the way that a certain target element intersects another element, or the way it intersects the viewport.

//The callback function will be called each time that the observed element is intersecting the root element at the threshold we have defined
const obsCallBack = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};

//root - element where target is intersecting
//threshold - percentage of intersection at which the call back function will be called. We can have multiple thresholds, we define it with array
//rootMargin - adds margin to the root 
const obsOptions = {
  root: null, //null - viewport
  threshold: [0, 0.2],
};

const observer = new IntersectionObserver(obsCallBack, obsOptions);
observer.observe(section1);
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

// 198. REVEALING ELEMENTS ON SCROLL
//USING INTERSECTION OBSERVER API
//!AT THE TOP

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

// 199. LAZY LOADING IMAGES
//USING INTERSECTION OBSERVER API
//!AT THE TOP
//One of the most important things when building any website is performance. And images have by far the biggest impact on page loading. And so it's very important that images are optimized on any page. And for that, we can use a strategy called Lazy Loading Images.
// The idea is to replace low resolution image with a higher resolution image once we scroll to it.

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

// 200. BUILDING A SLIDER COMPONENT: PART 1
//!AT THE TOP

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

// 201. BUILDING A SLIDER COMPONENT: PART 2
//!AT THE TOP

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

// 202. LIFECYCLE DOM EVENTS

//*1.
//DOM Content Loaded - Fired by the document as soon as the html is completely parsed.
//All scripts must be downloaded and executed before the DOM content loaded event can happen.
//Does not wait for the images to load, just html and js needs to be loaded
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree Built', e);
});

//*2. LOAD
//LOAD event is fired when images and external resources like css files are also loaded
window.addEventListener('load', function (e) {
  console.log('Page Fully Loaded', e);
});

//*3. BEFORE UNLOAD
////////////////////////////////!
////!  DID NOT WORK FOR ME !\\\\
// This event is created immediately before a user is about to leave a page. For Example after closing the tab
// window.add('beforeunload', function (e) {
//   //required in some browsers
//   e.preventDefault();

//   console.log(e);
//   e.returnValue = '';
// });

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

// 203. EFFICIENT SCRIPT LOADING: DEFER AND ASYNC
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

//
