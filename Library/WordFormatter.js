//  require letter
var letter = require("./Letter");

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

// 