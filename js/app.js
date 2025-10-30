/*-------------------------------- Constants --------------------------------*/
const word = 'bread';
const keys = document.querySelectorAll('.keys');
const wordLength = 5;
const guessbox = document.querySelectorAll('.guessbox');

/*---------------------------- Variables (state) ----------------------------*/
 let board = ['','','','','','','','','','','','','','','','','','','','','','','','','',];
 let guess = [];
 let guesses = [];
 let timer = 60;
 let clicks = 0;
 let currentRow = 1


 /*----------------------------- Event Listeners -----------------------------*/
 keys.forEach((key, index) => {
   key.addEventListener('click', () => {
     if (guess.length < wordLength) {
       guess.push(key.textContent);
       clicks = clicks + 1;
       console.log(clicks);
       console.log(guess);
       updateGuessbox();
       handleGuessSubmission();
       provideFeedback();
       
       // updating guess box & could be its own function
      }
    })
  });
  /*-------------------------------- Functions --------------------------------*/
  function updateGuessbox() {
  guess.forEach((letter, index) => {
    guessbox[index].textContent = letter;
    console.log('test');
   })
  };


  function handleGuessSubmission() {
    if (guess.length === wordLength) { // 5
        if (guess.join('') === word) { // combos the array to word
            console.log('Correct guess!'); 
        } else {
            console.log('Incorrect guess!');
        }
        // Move to the next row
        guesses.push(guess);
        guess = [];
        currentRow++;
    }
}

function provideFeedback() {
    guess.forEach((letter, index) => {
        if (letter === word[index]) {
            guessbox[index].style.backgroundColor = 'green';
        } else if (word.includes(letter)) {
            guessbox[index].style.backgroundColor = 'yellow';
        } else {
            guessbox[index].style.backgroundColor = 'gray';
        }
    });
}

// button_element.forEach((button, index) => {
//     button.addEventListener('click', () => {
//         if (board[index] !== null) {
//             console.log('go somewhere else');
//             return;
//         } else
//         board[index] = turn;
//         //another ternary operation
//         button.textContent = turn === 1 ? 'X' : '0';
//         turn *= -1;
//         gameCheck();
//         winnerCheck();

//     })
//     });
/*-------------------------------- Chug --------------------------------*/
 // draw check (only if no winner)
// Noting for Oct 27th I spent 45 minutes trying to figure out why my keys weren't appearing turns out I just didn't have the word defer when my JS at the top of the page and things weren't loading in time.

// Edge cases are going to be intense
// double letters in words....
// 