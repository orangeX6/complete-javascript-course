'use strict';

// const score0 = document.querySelector('#score--0');
// const score1 = document.querySelector('#score--1');
//THE ABOVE CAN ALSO BE WRITTEN AS

//Selecting elements -
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const currentActive = document.querySelector('.player--active');
const dice = document.querySelector('.dice');
//Buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Initial Conditions
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

let currentScore = 0;

//Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
  //1 Generating random dice roll
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  console.log(diceRoll);

  //2 Display Dice
  dice.classList.remove('hidden');
  dice.src = `dice-${diceRoll}.png`;
  //3 Check for rolled 1
  if (diceRoll !== 1) {
    //Add to the Current Score
    currentScore += diceRoll;
    console.log(currentScore);
    current0.textContent = currentScore;
  } else {
    //Switch to next player
  }
});
