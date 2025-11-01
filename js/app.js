/*-------------------------------- Constants --------------------------------*/
// const word = wordList[Math.floor(Math.random() * wordList.length)];
const word = 'bread;'
const keys = document.querySelectorAll('.keys');
const wordLength = 5;
const guessbox = document.querySelectorAll('.guessbox');

/*---------------------------- Variables (state) ----------------------------*/
 let board = ['','','','','','','','','','','','','','','','','','','','','','','','','',];
 let guess = [];
 let guesses = [];
 let timer = 60;
 let clicks = 0;
 let currentRow = 1;


 /*----------------------------- Event Listeners -----------------------------*/
 keys.forEach((key, index) => {
   key.addEventListener('click', () => {
     if (guess.length <= wordLength) {
       guess.push(key.textContent);
       console.log(guess);
       updateGuessbox();
       provideFeedback();
       handleGuessSubmission();
       console.log(`feedback`);
       console.log(word);
             }
    })
  });
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
    const rowStart = getRowStart();
    guess.forEach((letter, index) => {
        if (letter === word[index]) {
            guessbox[rowStart + index].style.backgroundColor = 'green';
        } else if (word.includes(letter)) {
            guessbox[rowStart + index].style.backgroundColor = 'yellow';
        } else {
            guessbox[rowStart + index].style.backgroundColor = 'gray';
        }
    });
}

function updateRow() {
    for (let i = 0; i < wordLength; i++) {
        const boxIndex = (currentRow - 1) * wordLength + i;
        guessbox[boxIndex].textContent = guess[i] //
        //Trying to get the row to change
    }
}