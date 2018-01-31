// The letter displayer is for showing either an underscore or character for each word

function Letter(char) {
    
    // If the letter is not a a number or letter show it
    this.visible = !/[a-z1-9]/i.test(char);
    // save character
    this.char = char;
}

Letter.prototype.getSolution = function() {
    return this.char;
};

Letter.prototype.toString = function() {
    if (this.visible === true) {
        return this.char;
    } else {
    return "_";
    }
}

// take users guess
Letter.prototype.guess = function(charGuess) {
    if (charGuess.toUpperCase() === this.char.toUpperCase()) {
        this.visible = true;
        return true;
    }

    return false;
};

module.exports = Letter;