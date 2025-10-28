/*-------------------------------- Constants --------------------------------*/
const word = 'bread';
const keys = document.querySelectorAll('.keys');
const wordLength = 5;

/*---------------------------- Variables (state) ----------------------------*/
 let board = ['','','','','','','','','','','','','','','','','','','','','','','','','',];
 let guess = [];
 let guesses = [];
 let timer = 60;
 let clicks = 0;


/*-------------------------------- Functions --------------------------------*/
keys.forEach((key, index) => {
    key.addEventListener('click', () => {
        if (guess.length < wordLength) {
            guess.push(key.textContent);
            clicks = clicks + 1;
            console.log(clicks);
            console.log(guess);
        }
})
});

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
  /*----------------------------- Event Listeners -----------------------------*/
/*-------------------------------- Chug --------------------------------*/
 // draw check (only if no winner)
// Noting for Oct 27th I spent 45 minutes trying to figure out why my keys weren't appearing turns out I just didn't have the word defer when my JS at the top of the page and things weren't loading in time.