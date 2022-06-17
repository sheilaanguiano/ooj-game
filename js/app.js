/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game =new Game();
const startBtn = document.getElementById('btn__reset');
const overlay = document.getElementById('overlay');

       
startBtn.addEventListener('click', e => {
    overlay.style.display ='none';
    game.startGame();
  
});

