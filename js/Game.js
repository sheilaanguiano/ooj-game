class Game {
    constructor(){
        this.missed = 0;
        this.phrases = [
            {
                index: 0,
                phrase: `Come with me if you want to live`
            },
            {
                index: 1,
                phrase: `Identity theft is not a joke jim`
            },
            {
                index: 2,
                phrase: `human are such easy preys`
            },
            {
                index: 3,
                phrase: `they are comming to get you barbara`
            },
            {
                index: 4,
                phrase: `what do you mean they lie in the movie`
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
        //1. Hides the start overlay
      
       

         //2.Calls the getRandomPhrase() to select a Phrase Object from the Game object'a array of phrases and then adds the phrase to the gameboard by calling the addPhraseToDisplay() on the selected Phrase Object.
         this.activePhrase = new Phrase(this.getRandomPhrase().phrase); 

        //3. The Selected Phrase should be stored in the Game's activePhrase property

       this.activePhrase.addPhraseToDisplay(); 
       
    }
    
}