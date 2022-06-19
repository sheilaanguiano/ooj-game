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
        // By comparing the size of both HTML collection, the only way to win
        // is when the show list has the same length as the letter one.
        let letterList = document.getElementsByClassName(`letter`);
        let showList = document.getElementsByClassName(`show`);

        return letterList.length === showList.length;
    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    // removeLife(){
    //     let [...lives] = document.getElementsByClassName('tries').length;

    //     if(!this.phrase.checkLetter){
    //         missedCounter = [...lives].pop();
    //         this.missed = missedCounter.length;
    //     }

    //     if (this.missed = 5){
    //         this.game.gameOver();
    //     }

    // };


    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {};




    
}