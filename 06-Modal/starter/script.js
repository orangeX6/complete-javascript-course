'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

//WE DONT HAVE TO WRITE BRACKETS FOR ONE LINE OF LOOP
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//KEYBOARD EVENTS ARE GLOBAL EVENTS, BECAUSE DO NOT HAPPEN ON ONE
// SPECIFIC ELEMENT, AND FOR GLOBAL EVENTS LIKE KEYBOARD EVENTS, WE LISTEN ON
// WHOLE DOCUMENTS

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
