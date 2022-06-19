class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
    /**
    *  Display phrase on game board
    * 
    */
    addPhraseToDisplay(){
        let phraseList = document.getElementsByTagName('UL')[0];
        let phraseArr = this.phrase.split('');
     
        phraseArr.forEach(character => {
            let li = document.createElement('li');
            if(character === ' '){
                li.innerHTML=` <li class="hide space ${character} ">${character}</li>`;
            } else {
                li.innerHTML=` <li class="hide letter ${character} ">${character}</li>`;
            }
            phraseList.insertAdjacentElement("beforeend", li);
           
        });    
    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }
   

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        let phraseArr = this.phrase.split('');

        phraseArr.forEach( character => {
            if(character === letter){
                //Character collection is a collection of all <li> elements with the same character
                let characterCol = document.getElementsByClassName(`letter ${character}`);
                //Converting a HTMLCollection into an Array with ES6 spread operator
                    
                characterCol = [...characterCol];

                characterCol.forEach( li =>{
                    li.classList.remove('hide');
                    li.classList.add('show');
                });
            }
        })
    };
}
