const counterValue = document.querySelector('#counter-value');
const increaseButton = document.querySelector('#increase-button');
const decreaseButton = document.querySelector('#decrease-button');
const resetButton = document.querySelector('#reset-button');

let count = 0;

function updateCounter() {
    counterValue.textContent = count;
}

increaseButton.addEventListener('click', function () {
    count = count + 1;
    updateCounter();
});

decreaseButton.addEventListener('click', function () {
    count = count - 1;
    updateCounter();
});

resetButton.addEventListener('click', function () {
    count = 0;
    updateCounter();
});

const guessForm = document.querySelector('#guess-form');
const guessInput = document.querySelector('#guess-input');
const guessMessage = document.querySelector('#guess-message');
const attemptCount = document.querySelector('#attempt-count');
const playAgainButton = document.querySelector('#play-again-button');

let secretNumber;
let attempts;

function createSecretNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function startGame() {
    secretNumber = createSecretNumber();
    attempts = 0;
    attemptCount.textContent = attempts;
    guessMessage.textContent = 'Make your first guess.';
    guessInput.value = '';
    guessInput.disabled = false;
    playAgainButton.hidden = true;
}

guessForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const userGuess = Number(guessInput.value);

    if (guessInput.value === '' || userGuess < 1 || userGuess > 100) {
        guessMessage.textContent =
            'Please enter a whole number between 1 and 100.';
    } else {
        attempts = attempts + 1;
        attemptCount.textContent = attempts;

        if (userGuess > secretNumber) {
            guessMessage.textContent =
                'Too High! Try a smaller number.';
        } else if (userGuess < secretNumber) {
            guessMessage.textContent =
                'Too Low! Try a larger number.';
        } else {
            guessMessage.textContent =
                'Correct! You guessed the number!';

            guessInput.disabled = true;
            playAgainButton.hidden = false;
        }
    }
});

playAgainButton.addEventListener('click', startGame);

startGame();
