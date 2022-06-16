/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
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
        let pharse = game.phrases[Math.floor(Math.random()* game.phrases.length)];
        return pharse;
    };
    
}