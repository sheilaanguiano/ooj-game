/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
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
            }else {
                li.innerHTML=` <li class="hide letter ${character} ">${character}</li>`;
            }
            phraseList.insertAdjacentElement("beforeend", li);
           
        });    
    }
}
