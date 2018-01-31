//  require letter

// The word splitter constructor will take the selected word and split 
function Word(word) {
    this.letters = word.split("").map(function(char) {
        return new Letter(char);
    });
}