'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');

btnsOpenModal.forEach(btn =>
  btn.addEventListener('click', e => {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  })
);

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// const btn2 = document.createElement('button');
// btn2.textContent = 'click';

// btnScrollTo.insertAdjacentElement('afterend', btn2);

// btn2.addEventListener('click', e => {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);
//   console.log('Current Scroll (X/Y', window.scrollX, window.scrollY);
//   console.log(btnScrollTo.getBoundingClientRect());
//   console.log(
//     'height/width viewport',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );
// });

btnScrollTo.addEventListener('click', e => {
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);

  // window.scrollTo(
  //   s1coords.left + window.scrollX,
  //   s1coords.top + window.scrollY
  // );

  // window.scrollTo({
  //   left: s1coords + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

//Scrolling

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

/* 
// console.log(document);
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
// console.log(allSections);
const allButtons = document.getElementsByTagName('button');
const allButtonsQ = document.querySelectorAll('button');
const allButtonsC = document.getElementsByClassName('btn');
// console.log(allButtons);
// console.log(allButtonsQ);
// console.log(allButtonsC);

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = `We use cookies for improved analytics. <button class ='btn btn--close-cookie'> Got it! </button>`;
// message.textContent = `We use cookies for improved analytics. <button class ='btn btn--close-cookie'> Got it! </button>`;

// header.insertAdjacentElement('beforebegin', message);
header.append(message);
// header.prepend(message);
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);
// header.after(message.cloneNode(true));

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', () => message.remove());

document.querySelector('.btn--close-cookie').addEventListener('click', e => {
  console.log(e, e.target.parentNode);
  // e.target.parentElement.remove();
  // e.target.parentNode.remove();
  // message.parentElement.removeChild(message);
  e.target.parentElement.parentElement.removeChild(message);
});

//Styles

message.style.backgroundColor = '#3738DD';
message.style.width = '120%';

// console.log(message.style.color);
// console.log(message.style.backgroundColor);
// console.log(getComputedStyle(message));
// console.log(getComputedStyle(message).color);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';
console.log(getComputedStyle(message).height);

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo);
console.log(logo.alt, logo.designer);
console.log(logo.className);
console.log(logo.getAttribute('designer'));

// Setting Attributes
logo.alt = 'Beautiful minimalist logo';
logo.setAttribute('company', 'Banklist');
console.log(logo.getAttribute('company'));
console.log(logo.src, '\n', logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href, '\n', link.getAttribute('href'));

// Data Attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
console.log(logo.classList.contains('c'));
// logo.className = 'j'; // overwrites existing classes
 */
