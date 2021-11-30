'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 24; // FOR INPUT FIELD
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.floor(Math.random() * 25) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.again').addEventListener('click',function(){
  score = 20;
  secretNumber = Math.floor(Math.random() * 25) + 1;

 displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent='?';
  document.querySelector('.guess').value= '';
   
  document.querySelector('body').style.backgroundColor="#222";
  document.querySelector('.number').style.width = '15rem';
})


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);


  //When there is no input
  if (!guess) {
   displayMessage('💀 Blank Value');

    //When player Wins
  } else if(guess === secretNumber){
    document.querySelector('.message'). textContent = '🎆 Correct  Number !';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347'

    document.querySelector('.number').style.width = '30rem'

    if(score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    
  //When Guess is Wrong
  }  else if(guess !== secretNumber){
      if(score > 1){
       displayMessage(guess > secretNumber ?  '☝ Too High !' :   '👇 Too Low !'); 
        score--;
        document.querySelector('.score').textContent = score;
      } else {
       displayMessage('💥 You Lost');
        document.querySelector('.score').textContent = 0;
      }

  }
  
  //   //When guess is too high
  // else if(guess > secretNumber){
  //   if(score > 0){
  //    displayMessage('☝ Too High !)';
  //     score --;
  //     document.querySelector('.score').textContent = score;

  //     //When score is 0 / Game over
  //   } else{
  //    displayMessage('💥 You Lost');
  //     document.querySelector('.score').textContent = 0;
  //   }
 
  //   //When guess is too low
  // } else if(guess < secretNumber){
  //   if(score > 1){
  //    displayMessage('👇 Too Low !');
  //     score--;
  //     document.querySelector('.score').textContent = score;

  //       //When score is 0 / Game over
  //   } else{
  //    displayMessage('💥 You Lost');
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
