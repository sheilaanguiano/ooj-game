/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const game =new Game();
const startBtn = document.getElementById('btn__reset');
const overlay = document.getElementById('overlay');

       
startBtn.addEventListener('click', e => {
    overlay.style.display ='none';
    game.startGame();

    console.log(game.activePhrase);
    console.log( game.activePhrase.showMatchedLetter('e'));
   
    let letterList = document.getElementsByClassName(`letter`);
    let showList = document.getElementsByClassName(`show`);
    
   console.log(letterList.length);
   console.log(showList.length);
  
});



