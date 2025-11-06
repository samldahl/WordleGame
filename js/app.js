/*-------------------------------- Constants --------------------------------*/
const word = wordList[Math.floor(Math.random() * wordList.length)];
// const word = 'bread'
const keys = document.querySelectorAll('.keys');
const wordLength = 5;
const guessbox = document.querySelectorAll('.guessbox');
const enter = document.querySelector('.enter')
const resetButton = document.getElementById('resetButton');
const timerElement = document.getElementById('timer');
const instructions = document.getElementById('instructions');
const instructionsbutton = document.getElementById('instructionsbutton');
const closeInstructions = document.getElementById('closeInstructions');



/*---------------------------- Variables (state) ----------------------------*/
 let board = ['','','','','','','','','','','','','','','','','','','','','','','','','',];
 let guess = [];
 let guesses = [];
 let currentRow = 1;
 let timerInterval;
 let timeLeft = 60;
 let timer = setInterval(function() {
  timeLeft--;
  document.getElementById('timer').textContent = `${timeLeft} seconds left`;
  if (timeLeft <= 0) {
    clearInterval(timer);
    confirm("Time's up! You Lose");
    window.location.reload();
  }
}, 1000);


 /*----------------------------- Event Listeners -----------------------------*/
 keys.forEach((key, index) => {
   key.addEventListener('click', () => {
    const letter = key.textContent;
    const rowStart = getRowStart();
    
     if (guess.length < wordLength) {
       guess.push(key.textContent);
       updateGuessbox();
      }
    })
  });
  
  enter.addEventListener('click', () => {
    provideFeedback();
    handleGuessSubmission();
  })

  /*-------------------------------- Functions --------------------------------*/
  function updateGuessbox() {
  const rowStart = getRowStart();
  guess.forEach((letter, index) => {
    guessbox[rowStart + index].textContent = letter;
  });
}

function getRowStart() {
  return (currentRow - 1) * wordLength;
  // this grabs the row on guess, ie row 2 * 5 = 10
}


  function handleGuessSubmission() {
    if (guess.length === wordLength) { // 5
        if (guess.join('') === word) { // combos the array to word
            clearInterval(timer);
            showConfetti(); 
        }
        // Move to the next row
        guesses.push(guess);
        guess = [];
        currentRow++; 

        if (currentRow > 5) {
        clearInterval(timer);
        timerElement.textContent = "Out of guesses! You Lose";
        setTimeout(() => window.location.reload(), 10000);
    }
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

instructionsbutton.addEventListener('click', function() {
  instructions.style.display = 'flex';
});

closeInstructions.addEventListener('click', function() {
  instructions.style.display = 'none';
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

    // check for greys
    for (let i = 0; i < 5; i++) {
        if (results[i] === 0 && answerCount[guess[i]] > 0) {
            results[i] = 1;
            answerCount[guess[i]]--;
        }
    }

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
        guessbox[boxIndex].textContent = guess[i]
    }
}


