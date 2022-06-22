/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const game =new Game();
const startBtn = document.getElementById('btn__reset');

let keyBtns = document.querySelectorAll('button.key')
keyBtns = [...keyBtns]


// Start button event handler    
startBtn.addEventListener('click', e => {
    game.startGame();

});

/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/

keyBtns.forEach( button => {
    button.addEventListener('click', e => game.handleInteraction(e));
});








