//array of letters for guessing, array of words for comp to pick from. var for wins, var for num guesses, var for letter?
//array for letters already guessed-wrong letters only

//way to count the wins and then write that on the page
//a way to pick a word from the pool and then put correct number of spaces for letters in the word onto the page
//if letter guessed is in the chosen word then it goes to its corrspondong place in the blanks
//if letter is wrong it goes to 'letters already guessed' and then that letter cannot be guessed again
//as you guess letters the num of guesses needs to decrement 
//verify user input--no duplicates, no numbers, other keys that are not letters
//once word is guessed correctly show image corresponding to that word 
//reset game once guesses are gone or word is found
//add option to reset game with single key

var wins = 0;
var correctWord;
var guessesLeft = 10;
var wrongLetters = [];
var lettersGuessed = [];
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

function pickWord() {
    var wordPool = ['crowley', 'rowena'];
    var randomIndex = Math.floor(Math.random()*wordPool.length);
    correctWord = wordPool[randomIndex];
    
}

function insertWord() {
    for(i=0; i < correctWord.length; i++) {
        var letterBox = $("<div></div>", {class: "letterBox"});
        $('#currentWord').append(letterBox);
    }
}


function isValidKey(key) {
    if (alphabet.indexOf(key) > -1) {
        if(lettersGuessed.indexOf(key) > -1) {
            return false;
        }
        else {
            return true;
        }
    }
    else {
        return false;
    }
}

function insertLetter(i, letter) {
    var letterBoxes = $('#currentWord').children();
    var letterBox = letterBoxes[i];
    $(letterBox).append(letter);

}



document.onkeyup = function(event) {
    var letter = event.key.toLowerCase();

    if(isValidKey(letter)) {
        var index = correctWord.indexOf(letter);
        if(index > -1) {
            insertLetter(index, letter);
            //decrement guesses left
            // put into letters guessed array
        } else {
            //add to wrongletters
            // decrement gusses left
            // put into letters guessed
        }
    } else {
        // do nothing
    }
}






 $(document).ready(function(){
    pickWord();
    insertWord();

   }); 


