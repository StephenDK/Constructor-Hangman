//  Get the inquirer npm 
var inquirer = require("inquirer");


// Get the words from the "wordlist.js" file
var words = require("./wordlist");

// game constructor will keep score and control the flow of the game
function Game() {

    // reference point for inquirer
    var self = this;

    // Set guesses to 10 and get next word
    this.play = function() {
        // Guesses
        this.guessesLeft = 10;
        // Next word function
        this.nextWord();
    };
    this.nextWord = function() {
        // Set variable to random word
        var randomWord = words[Math.floor(Math.random() * words.length)];
        console.log(randomWord);
    };
}
