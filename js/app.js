/*-------------------------------- Constants --------------------------------*/
// const word = wordList[Math.floor(Math.random() * wordList.length)];
const word = 'bread'
const keys = document.querySelectorAll('.keys');
const wordLength = 5;
const guessbox = document.querySelectorAll('.guessbox');
const enter = document.querySelector('.enter')
const resetButton = document.getElementById('resetButton');
const timerEl = document.getElementById('timer');

/*---------------------------- Variables (state) ----------------------------*/
 let board = ['','','','','','','','','','','','','','','','','','','','','','','','','',];
 let guess = [];
 let guesses = [];
 let clicks = 0;
 let currentRow = 1;
 let timerInterval;
 let timeLeft = 60;
 let timer = setInterval(function() {
  timeLeft--;
  document.getElementById('timer').textContent = `${timeLeft} seconds left`;
  if (timeLeft <= 0) {
    clearInterval(timer);
    alert("Time's up! You Lose");
  }
}, 1000);


 /*----------------------------- Event Listeners -----------------------------*/
 keys.forEach((key, index) => {
   key.addEventListener('click', () => {
    const letter = key.textContent;
    const rowStart = getRowStart();
    
     if (guess.length <= wordLength) {
       guess.push(key.textContent);
       console.log(guess);
       updateGuessbox();
      }
    })
  });
  
  enter.addEventListener('click', () => {
    provideFeedback();
    handleGuessSubmission();
    console.log(`feedback`);
    console.log(word);

  })

  /*-------------------------------- Functions --------------------------------*/
  function updateGuessbox() {
  const rowStart = getRowStart();
  guess.forEach((letter, index) => {
    guessbox[rowStart + index].textContent = letter;
    console.log('letter added to guess');
  });
}

function getRowStart() {
  return (currentRow - 1) * wordLength;
  // this grabs the row on guess, ie row 2 * 5 = 10
}


  function handleGuessSubmission() {
    if (guess.length === wordLength) { // 5
        if (guess.join('') === word) { // combos the array to word
            console.log('Correct guess!');
            showConfetti(); 
        } else {
            console.log('Incorrect guess!');
        }
        // Move to the next row
        guesses.push(guess);
        guess = [];
        currentRow++; 
    }
}

function showConfetti() {
    const confetti = document.getElementById('confetti-container');
    if (confetti) {
        confetti.style.display = 'flex';
    }}
document.addEventListener('DOMContentLoaded', function() {
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            window.location.reload();
        });
    }
});

function provideFeedback() {
    const rowStart = getRowStart();
    const results = [0,0,0,0,0];

    // first check for greens
    for (let i = 0; i < 5; i++) {
        if (guess[i] === word[i]) {
            results[i] = 2;
        }
    }

    // count letters for yellows
    const answerCount = {};
    for (let i = 0; i < 5; i++) {
        if (results[i] !== 2) {
            answerCount[word[i]] = (answerCount[word[i]] || 0) + 1;
        }
    }

    // check for yellows
    for (let i = 0; i < 5; i++) {
        if (results[i] === 0 && answerCount[guess[i]] > 0) {
            results[i] = 1;
            answerCount[guess[i]]--;
        }
    }
 // answer = bread, guess = bleak, results = [2, 0, 2, 2, 0]
 // answer = bread, guess = drain, results = [0,2,0,0,0]
 

//  check for yellows
// answer = bread, guess = breed, results = [2, 2, 2, 0, 2]
// answer = hammy, guess = madam, results = [0, 2, 0, 0, 0]

    // update colors
    for (let i = 0; i < 5; i++) {
        if (results[i] === 2) {
            guessbox[rowStart + i].style.backgroundColor = 'green';
        } else if (results[i] === 1) {
            guessbox[rowStart + i].style.backgroundColor = 'gold';
        } else {
            guessbox[rowStart + i].style.backgroundColor = 'gray';
        }
    }
}

function updateRow() {
    for (let i = 0; i < wordLength; i++) {
        const boxIndex = (currentRow - 1) * wordLength + i;
        guessbox[boxIndex].textContent = guess[i] //
        //Trying to get the row to change
    }
}


/* Need to add:
- Need to add a timer.
- Instructions about how to play the game are included in your app.
- There is no remaining dead and/or commented out code or console logs outside of a commented out Code Graveyard section of your code.
- backspace
- */
// 