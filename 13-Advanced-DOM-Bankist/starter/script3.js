'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');
const navHeight = nav.getBoundingClientRect().height;
const allSections = document.querySelectorAll('.section');
const lazyImages = document.querySelectorAll('img[data-src]');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');
const header = document.querySelector('.header');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const sliderButtonLeft = document.querySelector('.slider__btn--left');
const sliderButtonRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

// MODAL
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// NAV BAR FADE ANIMATION
const handleHover = function (e) {
  // console.log(this, e.currentTarget);
  if (!e.target.classList.contains('nav__link')) return;
  const link = e.target.closest('.nav__item');
  const siblings = link.closest('.nav__links').children;

  Array.from(siblings).forEach(el => {
    if (el !== link) el.style.opacity = this;
  });
  logo.style.opacity = this;
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// SCROLL TO SECTION
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (!e.target.classList.contains('nav__link')) return;

  const id = e.target.getAttribute('href');
  if (id === '#') return;

  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
});

// INTERSECTION OBSERVER
// 1 -  STICKY NAVIGATION
const stickyNav = function (entries, observer) {
  // entries.forEach(entry =>
  //   !entry.isIntersecting
  //     ? nav.classList.add('sticky')
  //     : nav.classList.remove('sticky')
  // );
  const [entry] = entries;
  !entry.isIntersecting
    ? nav.classList.add('sticky')
    : nav.classList.remove('sticky');
};
const navOptions = {
  root: null,
  threshold: [0],
  rootMargin: `-${navHeight}px`,
};

const navigationObserver = new IntersectionObserver(stickyNav, navOptions);
navigationObserver.observe(header);

// 2 - REVEAL SECTION
const displaySection = (entries, observer) => {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');

  observer.unobserve(entry.target);
};

const sectionOptions = {
  root: null,
  threshold: [0.2],
};

const sectionObserver = new IntersectionObserver(
  displaySection,
  sectionOptions
);

allSections.forEach(section => {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

// 3- IMAGE OBSERVER // SECTION 1
const lazyLoading = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imageObserver = new IntersectionObserver(lazyLoading, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

lazyImages.forEach(img => imageObserver.observe(img));

// SECTION 2 - OPERATIONS
tabsContainer.addEventListener('click', e => {
  e.preventDefault();
  const selectedTab = e.target.closest('.operations__tab');
  if (!selectedTab) return;

  //remove classes
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  tabsContent.forEach(content =>
    content.classList.remove('operations__content--active')
  );

  //add class to required content
  selectedTab.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${selectedTab.dataset.tab}`)
    .classList.add('operations__content--active');
});

//SECTION 3 - CAROUSAL
const carousel = () => {
  let currentSlide = 0;
  const maxSlide = slides.length - 1;
  slider.style.scale = 1;
  // slider.style.overflow = 'visible';

  const goToSlide = curSlide => {
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${(index - curSlide) * 100}%)`;
    });
  };

  const activeDot = slide => {
    dotContainer.childNodes.forEach(node =>
      node.classList.remove('dots__dot--active')
    );

    document
      .querySelector(`button[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const nextSlide = () => {
    +currentSlide === maxSlide ? (currentSlide = 0) : currentSlide++;

    goToSlide(currentSlide);
    activeDot(currentSlide);
  };

  const prevSlide = () => {
    +currentSlide === 0 ? (currentSlide = maxSlide) : currentSlide--;
    goToSlide(currentSlide);
    activeDot(currentSlide);
  };

  const createDots = () => {
    slides.forEach((_, index) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${index}"></button>`
      );
    });
  };

  const init = () => {
    createDots();
    goToSlide(0);
    activeDot(0);
  };

  init();
  //Event Handlers
  sliderButtonLeft.addEventListener('click', prevSlide);
  sliderButtonRight.addEventListener('click', nextSlide);

  addEventListener('keydown', e => {
    e.key === 'ArrowLeft' && prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', e => {
    if (!e.target.classList.contains('dots__dot')) return;
    currentSlide = e.target.dataset.slide;
    goToSlide(currentSlide);
    activeDot(currentSlide);
  });
};
carousel();
////////////////////////////////////////////////////
//# CODE NOT IN USE
//###############################################/
//###############################################//
//###############################################//
//###############################################//
//###############################################//
//###############################################//
//###############################################//
//###############################################//
//###############################################//
//###############################################//
//###############################################//
//###############################################/
//###############################################//
//###############################################//
/*
section1.addEventListener('click', () => {
  console.log(
    section1.getBoundingClientRect().x,
    section1.getBoundingClientRect().y
    );
  });
  
  btnScrollTo.addEventListener('click', () => {

    
    // section1.scrollIntoView({ behavior: 'smooth' });

    const s1Coords = section1.getBoundingClientRect();
    console.log(s1Coords.x, s1Coords.y);
    
    window.scrollTo({
      left: s1Coords.x + scrollX,
      top: s1Coords.y + scrollY,
    behavior: 'smooth',
  });
});

//  const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', e => {
//   console.log('entered');
// });
// h1.addEventListener('mouseenter', e => {
//   alert('entered');
// });

// h1.onmouseenter = e => {
//   alert('onmouseenter ');
// };
// h1.onmouseenter = e => {
//   console.log('onmouseenter ');
// };

// const obj = {
//   s: 's',
//   y() {
//     return 10 + 20;
//   },
// };

// const h1 = document.querySelector('h1');
// const x = function (e) {
//   console.log('entered');
//   console.log(this.y(), this.s);
// };

// h1.addEventListener('mouseenter', x.bind(obj));

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.stopPropagation();
  console.log(this);
  console.log(e.currentTarget);
  console.log(e.target);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    console.log(this);
    console.log(e.currentTarget);
    console.log(e.target);
  },
  true // capturing phase flag
);


// document.querySelectorAll('.nav__link').forEach(el =>
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     const id = this.getAttribute('href');
//     console.log(id);

//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   })
// );

const h1 = document.querySelector('h1');
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
console.log(h1.firstChild, h1.firstElementChild);
h1.firstElementChild.style.color = 'pink';
console.dir(h1.firstChild);

console.log(h1.parentElement, h1.parentNode);
console.log(h1.firstElementChild.parentNode);

h1.closest('h1').style.background = 'var(--color-tertiary)';
h1.closest('.header').style.background = 'var(--gradient-secondary)';

const header = document.querySelector('.header__title');
// console.log(header.childNodes);

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(header.childNodes);
console.log(h1.parentElement.children);
console.log(h1.parentNode.children);



const initialCoords = section1.getBoundingClientRect().y;
addEventListener('scroll', e => {
  scrollY > initialCoords
    ? nav.classList.add('sticky')
    : nav.classList.remove('sticky');
});
*/
