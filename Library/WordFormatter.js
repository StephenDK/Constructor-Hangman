//  require letter
var Letter = require("./LetterChecker");

// The word splitter constructor will take the selected word and split 
function Word(word) {
    this.letters = word.split("").map(function(char) {
        return new Letter(char);
    });
}

// add toString() method to the word
Word.prototype.toString = function() {
    return this.letters.join(' ');
};

// use prototype to get the solution
Word.prototype.getSolution = function() {
    return this.letters.map(function(letter) {
        return letter.getSolution();
    }).join('');
}
// Check to see if letters in the array match user guess
Word.prototype.guessLetter = function(char) {
    var foundLetter = false;
    this.letters.forEach(function(letter) {
        if (letter.guess(char)) {
            foundLetter = true;
        }
    });

    console.log(this);
    return foundLetter;
}

Word.prototype.lettersGuessedCorrectly = function() {
    return this.letters.every(function(letter) {
        return letter.visible;
    })
}

module.exports = Word;