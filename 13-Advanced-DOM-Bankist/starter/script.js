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
//  ✔

// 185. HOW THE DOM REALLY WORKS
//  ✔
// Whats DOM ?
//  Basically an interface between the js code and the html documents rendered in and by the browser.

//  Allows us to make js interact with browser

//  We can write Js to create, modify and delete HTML elements;

//  Set styles, classes and attributes; and listen and respond to events.

//  DOM tree is generated from an HTML document, which we can then interact with;

//  DOM is a very complex API that contains lots of methods and properties to interact with the DOM Tree. EXAMPLE _
// querySelector() /.addEventListener /.createElement /.innerHTML /.textContent /.children /.etc

//
//
//
//
//
//
//
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
