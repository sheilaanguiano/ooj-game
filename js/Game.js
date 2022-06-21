class Game {
    constructor(){
        this.missed = 0;
        this.phrases = [
            {
                index: 0,
                phrase: `hello test`
            },
            {
                index: 1,
                phrase: `Hola mi test`
            },
            {
                index: 2,
                phrase: `short test`
            },
            {
                index: 3,
                phrase: `Hello world`
            },
            {
                index: 4,
                phrase: `Helloween`
            },
        ]
        this.activePhrase = null;
    }
    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase(phrases){
        let phrase = game.phrases[Math.floor(Math.random() * game.phrases.length)];
        return phrase;
    };

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame(){
        this.activePhrase = new Phrase(this.getRandomPhrase().phrase); 
        this.activePhrase.addPhraseToDisplay(); 
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        let phraseCounter = document.getElementsByClassName('letter').length;
        let showCounter = document.getElementsByClassName('show').length;
      
        return phraseCounter === showCounter;
    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife(){
        const scoreboard = document.getElementsByTagName('ol')[0];
        this.missed = scoreboard.children.length

        if(this.missed > 1){
            scoreboard.lastElementChild.remove();
        } else{
            game.gameOver(false);
        }
    };


    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        let overlay = document.getElementById('overlay');
        let msg = document.getElementById('game-over-message');

        overlay.style.display ='flex';
      
        if(gameWon) {
            msg.innerText = 'You WON!!';
            overlay.classList.remove('start');
            overlay.classList.add('win');
            game.resetGame();

        } else {
            msg.innerText = 'Sorry, better luck next time!!';
            overlay.classList.remove('start');
            overlay.classList.add('lose');
            game.resetGame();
        }
    };

    /**
    * Resets the phrase unordered List
    * Resets the hearts to 5
    * Clears the clases from the qwerty
    */

    resetGame(){
        const phraseList = document.getElementsByTagName('UL')[0];
        const scoreboard = document.getElementsByTagName('ol')[0];
        let chosenKeys = document.getElementsByClassName('chosen');
        let wrongKeys = document.getElementsByClassName('wrong');
        chosenKeys = [...chosenKeys];
        wrongKeys =[...wrongKeys];
        
       phraseList.innerHTML = '';
       scoreboard.innerHTML = `
            <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
            <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
            <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
            <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
            <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
       `;

        chosenKeys.forEach( key =>{
            key.classList.remove('disabled', 'chosen');        
        })

        wrongKeys.forEach( key =>{
            key.classList.remove('disabled', 'wrong');        
        })
    }

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        let clicked = button.target;
        let letter = button.target.innerText;
   
        if(game.activePhrase.checkLetter(letter)){
            clicked.classList.add('disabled', 'chosen');
            game.activePhrase.showMatchedLetter(letter);
            if(game.checkForWin()){
                game.gameOver(true);
            }
               
        } else {
            clicked.classList.add('disabled', 'wrong');
            game.removeLife();
        }
    };
   
    
}