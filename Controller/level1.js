const phrases = [
    "hello",
    "goodbye",
    "please",
    "thanks",
    "sorry",
    "yes",
    "no",
    "help",
    "fine",
    "name",
    "age",
    "where",
    "when",
    "why",
    "how",
    "who",
    "family",
    "mother",
    "father",
    "brother",
    "sister",
    "friend",
    "home",
    "food",
    "sleep",
    "happy",
    "sad",
    "angry",
    "love",
    "like",
    "sign"
  ];

const imageContainer = document.getElementById('image-container');
const startButton = document.getElementById('start-button');
const inputText = document.getElementById('input-text');
const submitButton = document.getElementById('submit-button');
const message = document.getElementById('message');
const scoreElement = document.getElementById('score');
let currentPhrase = '';
let score = 0;

startButton.addEventListener('click', () => {
    startNewRound();
});

submitButton.addEventListener('click', () => {
    if (inputText.value.toLowerCase() === currentPhrase) {
        score++;
        message.textContent = 'Correct! Well done!';
        message.style.color = 'green';
        scoreElement.textContent = score;
        setTimeout(() => {
            startNewRound();
        }, 1500);
    } else {
        alert(`Game over! The correct word was "${currentPhrase}".`);
        resetGame();
    }
});

function startNewRound() {
    startButton.disabled = true;
    inputText.disabled = false;
    submitButton.disabled = true; // Disable the submit button initially
    message.textContent = '';
    inputText.value = '';
    inputText.focus();
    currentPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    displayPhrase();
}

function displayPhrase() {
    imageContainer.innerHTML = '';
    let imagesDisplayed = 0;

    for (let i = 0; i < currentPhrase.length; i++) {
        const letter = currentPhrase[i].toUpperCase();
        const img = document.createElement('img');
        img.src = `../View/assets/${letter}.png`;
        img.className = 'img-letter';
        setTimeout(() => {
            imageContainer.appendChild(img);
            imagesDisplayed++;

            if (imagesDisplayed === currentPhrase.length) {
                submitButton.disabled = false; // Enable the submit button after all images are shown
            }
        }, 400 * i);
    }
}

function resetGame() {
    startButton.disabled = false;
    inputText.disabled = true;
    submitButton.disabled = true;
    message.textContent = '';
    inputText.value = '';
    score = 0;
    scoreElement.textContent = score;
    imageContainer.innerHTML = '';
}
