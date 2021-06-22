
import { alphabet, morse } from "./morse.js";
// can now use above to console.log(alphabet) etc. note: essential to have type="module" on <script> in html.



//class with constructor and actions
class Translator {
    constructor(currentText, currentMorse) {
        this.currentText = currentText;
        this.currentMorse = currentMorse;
        this.clear();
    }

    clear() {
        this.textInput = '';
        this.morseInput = '';
    }

    translateText () {
        let text = textInput.value.toLowerCase();
        
        const morseValues = Object.values(alphabet);
        const morseKeys = Object.keys(alphabet);
        let newMorse = "";
        for (let i = 0; i < text.length; i++ ) {
            //find index in morseKeys, return index in morseValues
            let newValue = morseValues[morseKeys.findIndex(keys => keys === text[i])];
            if (newValue === undefined) {
                newValue = '';
            };
            newMorse += newValue + ' ';
        };
        text = newMorse;
        this.textInput = text;
    }

    translateMorse () {
        let morseText = morseInput.value.split(' ');
        const textValues = Object.values(morse);
        const textKeys = Object.keys(morse);
        let newText = "";
        for (let i = 0; i < morseText.length; i++ ) {
            //find index in Keys, return index in Values
            let newValue = textValues[textKeys.findIndex(keys => keys === morseText[i])];
            if (newValue === undefined) {
                newValue = '';
            };
            newText += newValue;
        };
        morseText = newText;
        this.morseInput = morseText;
    };
    
    // to update html text in output area
    updateDisplay() {
        this.currentMorse.innerText = this.morseInput || this.textInput;
        // this.currentText.innerText = this.textInput;
        
    }
}

// connect with html classes
const textInput = document.querySelector('.text');
const morseInput = document.querySelector('.morse');
const currentMorse = document.querySelector('.output__morse');
const currentText = document.querySelector('.output__text');

//event listener for typing. As typing, translate to morse or text.
const translator = new Translator (currentText, currentMorse)

textInput.addEventListener('input', letter => {
    translator.translateText()
    translator.updateDisplay()
})

morseInput.addEventListener('input', letter => {
    translator.translateMorse()
    translator.updateDisplay()
})

