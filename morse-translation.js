//import _morse
// import alphabet from _morse;
// import morse from _morse;


//class with constructor and actions
class Translator {
    constructor(currentText, currentMorse) {
        this.currentText = currentText;
        this.currentMorse = currentMorse;
    }
    
    translateText (letter) {
        // match letters/morse from _morse.js: key: value pairs, then appends them
        // if (letter === 'a') {
        //     this.textInput = 'hello';
        // }
        // this.textinput matches (key from _morse.alphabet){
            //return _morse.value };
        let text = textInput.nodeValue;
        this.textInput = text;
    }

    translateMorse () {
        // match letters/morse from _morse.js: key: value pairs
        // if (morse === _morse.key) {
            //return _morse.value };
        this.morseInput = 'hi there';
    }
    
    // to update html text in output area
    updateDisplay() {
        this.currentMorse.innerText = this.morseInput;
        this.currentText.innerText = this.textInput;
        
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
    translator.translateText(letter)
    translator.updateDisplay()
})

morseInput.addEventListener('input', letter => {
    translator.translateMorse()
    translator.updateDisplay()
})

