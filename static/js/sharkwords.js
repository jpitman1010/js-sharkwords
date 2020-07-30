const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const WORDS = [
    'strawberry', 'orange', 'apple', 'banana', 'pineapple', 'kiwi',
    'peach', 'pecan', 'eggplant', 'durian', 'peanut', 'chocolate'
];


let numWrong = 0;


// Loop over the chars in `word` and create divs.
//
const createDivsForChars = (word) => {
    $(`div#word-container`).append(`<li>`)
    for (let char in word) {
        $(`section#word-containers`).append(`<li><div>${word[char]}</div></li>`)
    }

};


// Loop over each letter in `ALPHABET` and generate buttons.
//
const generateLetterButtons = () => {
    for (let letter in ALPHABET) {
        $(`section#letter-buttons`).append(`<li><button>${ALPHABET[letter]}</button></li>`)


    }
};


// Set the `disabled` property of `buttonEl` to `true.
//
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = (buttonEl) => {
    const button = $(buttonEL);
};


// Return `true` if `letter` is in the word.
//
const isLetterInWord = (letter) => {
    const elements = $(`letter`);
    console.log(elements[0]);
    console.log(elements[0] === undefined);
};


// Called when `letter` is in word. Update contents of divs with `letter`.
//
const handleCorrectGuess = (letter) => {
    letter.setAttribute(div, `letter`)
};


// Called when `letter` is not in word.
//
// If the shark gets the person, disable all buttons and show the "play again"
// message. Otherwise, increment `numWrong` and update the shark image.
//
const handleWrongGuess = () => {
    // Replace this with your code
};


// Reset game state. Called before restarting the game.
//
const resetGame = () => {
    // Replace this with your code
};


// This is like if __name__ == '__main__' in Python
//
(function startGame() {
    // For now, we'll hardcode the word that the user has to guess.
    const word = 'hello';

    createDivsForChars(word);
    generateLetterButtons();

    $('button').on('click', (evt) => {
        const clickedBtn = evt.target;
        disableLetterButton(clickedBtn);

        const letter = clickedBtn.html();

        if (isLetterInWord(letter)) {
            handleCorrectGuess(letter);
        } else {
            handleWrongGuess(letter);
        }
    });

    $('#play-again').on('click', () => {
        resetGame();
        startGame();
    });
})();