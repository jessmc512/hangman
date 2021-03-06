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
var guessesLeft = 15;
var wrongLetters = [];
var lettersGuessed = [];
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var numCorrect = 0;
var img= $("<img />").attr("src","assets/images/starterimage.jpg");

function pickWord() {
    var wordPool = ['crowley', 'rowena', 'castiel', 'leviathan', 'impala', 'hunter', 'purgatory' ];
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
    numCorrect++;
}



document.onkeyup = function(event) {
    var letter = event.key.toLowerCase();
    
    if(isValidKey(letter)) {
        var indices = [];
        for(var i=0; i < correctWord.length; i++) {
            if (correctWord[i] === letter) {
                indices.push(i);
            }
        }
        
        if(indices.length > 0) {
            indices.forEach(function(i) {
            insertLetter(i, letter);
            
        });
        guessesLeft--;
        changeHTML();  
        lettersGuessed.push(letter);
        
        } else {
            wrongLetters.push(letter);
            guessesLeft--;
            changeHTML();
            lettersGuessed.push(letter);
        }
    } else {
        return false;
    }
    endGame();
    winGame();
}

function changeHTML() {
    $('#wins').text('Wins: ' + wins);
    $('#guessLeft').text('Guesses Remaining: ' + guessesLeft);
    $('#letterGuessed').text('Wrong Letters: ' + wrongLetters);
}


function insertImage() {
    img.appendTo($("#wordImage"));
}

function insertWordImage() {
    img = $("<img />").attr("src", "assets/images/" + correctWord + ".jpg");
    $('#wordImage').empty();
    img.appendTo($("#wordImage"));
}

function reset() {
     
     correctWord;
     guessesLeft = 15;
     wrongLetters = [];
     lettersGuessed = [];
     alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
     numCorrect =0;
     $('#currentWord').empty();
     pickWord();
     insertWord();
     changeHTML();
}



function endGame() {
    
    if(guessesLeft == 0 && numCorrect != correctWord.length) {
        //game over image function
    }
}

function winGame() {

    if(numCorrect == correctWord.length) {
        wins++;
        changeHTML();
        insertWordImage();
        
    }
    
}



$(document).ready(function(){
    $('#buttonreset').click( function() {
                reset();
                
           });
});

        




$(document).ready(function(){
    
    pickWord();
    insertWord();
    changeHTML();
    insertImage();
});





//need to add element for messages (lose-game over, win-correctword) to be written

//change image when word is guessed correctly

//reset breaks win counter...