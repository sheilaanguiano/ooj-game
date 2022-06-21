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
        let letterList = document.getElementsByClassName('letter');
        let showList = document.getElementsByClassName('show');

        // if(letterList.length > showList.length){
        //     return true;
        // } 
            console.log('You won')

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

        } else {
            const overlay = document.getElementById('overlay');
            const phrase = document.getElementById('phrase');
            const qwerty = document.getElementById('qwerty');

            let msg = document.getElementById('game-over-message');

            phrase.style.display ='none';
            qwerty.style.display = 'none';
            overlay.style.display ='initial';
            msg.innerText = 'Sorry, better luck next time!!';
            overlay.classList.remove('start');
            overlay.classList.add('lose');
        }
    };


    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        let overlay = document.getElementById('overlay');
        let msg = document.getElementById('game-over-message');

        if(gameWon){
            msg.innerText = 'You WON!!';
            overlay.classList.remove('start');
            overlay.classList.add('win');
        } 

    };

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
            game.checkForWin();
           
            
        }else{
            clicked.classList.add('disabled', 'wrong');
            game.removeLife();

        }


    };
   
}