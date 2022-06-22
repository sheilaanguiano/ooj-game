class Game {
    constructor(){
        this.missed = 0;
        this.phrases = [
            new Phrase ('Are you testing me'),
            new Phrase ('Hola Test'),
            new Phrase ('This is but a test'),
            new Phrase ('Hello World'),
            new Phrase ('Lorem Ipsun')
        ]
        this.activePhrase = null;
    }
    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase(phrases){
        let random = Math.floor(Math.random() * game.phrases.length);
        return this.phrases[random];
    };

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame(){
        const overlay = document.getElementById('overlay');
        
        overlay.style.display ='none';
        overlay.setAttribute('class', 'start');
        
        this.activePhrase = this.getRandomPhrase(); 
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
        
        this.missed += 1

        if(this.missed < 5){
            scoreboard.firstElementChild.remove();
            let li = document.createElement('LI');
            li.innerHTML = `<li><img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30"><li>`;
            scoreboard.append(li);
   
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
    * Helper reset functions
    */
    resetPhrase(){
        const phraseList = document.getElementsByTagName('UL')[0];
        phraseList.innerHTML = '';
    }


    resetHearts(){
        const scoreboard = document.getElementsByTagName('ol')[0];
        this.missed = 0;

        scoreboard.innerHTML = `
            <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
            <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
            <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
            <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
            <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
       `;
    }


    resetQwerty(){
        let chosenKeys = document.getElementsByClassName('chosen');
        let wrongKeys = document.getElementsByClassName('wrong');
        chosenKeys = [...chosenKeys];
        wrongKeys =[...wrongKeys];
        
        chosenKeys.forEach( key =>{
            key.classList.remove('disabled', 'chosen');        
        })

        wrongKeys.forEach( key =>{
            key.classList.remove('disabled', 'wrong');        
        })
    }

   /**
    * Call all the helper reset methods
    */

    resetGame(){
        game.resetPhrase();
        game.resetHearts();
        game.resetQwerty();
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