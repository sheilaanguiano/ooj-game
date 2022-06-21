/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const game =new Game();
const startBtn = document.getElementById('btn__reset');
const overlay = document.getElementById('overlay');
let keyBtns = document.querySelectorAll('button.key')
keyBtns = [...keyBtns]


       
startBtn.addEventListener('click', e => {
    overlay.style.display ='none';
    game.startGame();

    console.log(game.activePhrase);
    
});

/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/

keyBtns.forEach( button => {
    button.addEventListener('click', e => game.handleInteraction(e));
});








