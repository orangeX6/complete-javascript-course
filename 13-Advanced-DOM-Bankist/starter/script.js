'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

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

//Scrolling
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

// Page navigation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(e.target, e.currentTarget);
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

tabsContainer.addEventListener('click', function (e) {
  // e.preventDefault();
  const clicked = e.target.closest('.operations__tab');
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

const handleHover = function (e) {
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
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);
// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);

//   window.scrollY > initialCoords.y
//     ? nav.classList.add('sticky')
//     : nav.classList.remove('sticky');
// });

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = thresholdEntries => {
  const [entry] = thresholdEntries;
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const headerObserver = new IntersectionObserver(stickyNav, obsOptions);
headerObserver.observe(header);

//REVEAL SECTIONS
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

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

// const rgb = () => {
//   const x = Math.floor(Math.random() * 255) + 1;
//   const y = Math.floor(Math.random() * 255) + 1;
//   const z = Math.floor(Math.random() * 255) + 1;

//   return `rgb(${x}, ${y}, ${z})`;
// };

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min)) + min + 1;

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// console.log(randomColor());

// document.querySelector('.nav__links').addEventListener('click', function () {
//   this.style.backgroundColor = randomColor();
// });
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   e.stopPropagation();
// });
// document.querySelector('.nav').addEventListener('click', function () {
//   this.style.backgroundColor = randomColor();
// });

// const h1Event = () => {
//   h1.style.color = rgb();
//   h1.setAttribute('id', 'purple');
// };

// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', h1Event);

// setTimeout(() => {
//   h1.removeEventListener('mouseenter', h1Event);
// }, 5000);

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// h1.onmouseover = () => {
//   h1.style.color = rgb();
// };
//  rgb(255,34,154)

// const h1 = document.querySelector('h1');
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = ' white';
// h1.lastElementChild.style.color = 'grey';
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest('.header').style.background = 'var(--gradient-primary)';
// h1.closest('h1').style.background = 'var(--gradient-secondary)';

// console.log(h1.previousElementSibling, h1.nextElementSibling);
// h1.nextElementSibling.style.color = 'hotpink';

// console.log(h1.previousSibling, h1.nextSibling);
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(el => {
//   if (el !== h1) el.style.transform = 'rotate(-120deg)';
// });
