const gameBoard = document.getElementById('game-board');
const leftSide = document.getElementById('left-side');
const rightSide = document.getElementById('right-side');
const startButton = document.getElementById('start-button');
const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lettersPerRound = 4;
const highScoreElement = document.getElementById('high-score');


let highScore = 0;
let highScorer = '';
let score = 0;
let roundLetters = [];
let remainingLetters = alphabet.split('');
let timeRemaining = 60;
let timer;



startButton.addEventListener('click', () => {
    startButton.disabled = true;
    startGame();
});

function startGame() {
    getNextRoundLetters();
    createGameBoard();
    startTimer();
}

function updateScore() {
    scoreElement.textContent = `Score: ${score}`;
}

function getNextRoundLetters() {
    roundLetters = [];
    const lettersToDraw = Math.min(lettersPerRound, remainingLetters.length); // Calculate the number of letters to draw

    for (let i = 0; i < lettersToDraw; i++) {
        const index = Math.floor(Math.random() * remainingLetters.length);
        roundLetters.push(remainingLetters[index]);
        remainingLetters.splice(index, 1);
    }
}


function createGameBoard() {
    const letters = shuffle(roundLetters.slice());
    const images = shuffle(roundLetters.slice()).map(letter => `../View/assets/${letter}.png`);
    createSide(leftSide, images, 'image');
    createSide(rightSide, letters, 'letter');
}

function createSide(sideElement, items, type) {
    sideElement.innerHTML = '';

    items.forEach(item => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.dataset.type = type;

        if (type === 'letter') {
            cardElement.textContent = item;
        } else {
            const img = document.createElement('img');
            img.src = item;
            img.style.width = '90px';
            img.style.height = '90px';
            img.style.backgroundColor = 'transparent';
            cardElement.appendChild(img);
        }
    
        cardElement.addEventListener('click', () => {
            cardElement.classList.add('selected');
            checkMatch();
        });
    
        sideElement.appendChild(cardElement);
    });
    
}


function checkMatch() {
    const selected = document.querySelectorAll('.selected');
    if (selected.length === 2) {
        const [firstCard, secondCard] = selected;
        const firstType = firstCard.dataset.type;
        const secondType = secondCard.dataset.type;

        if (firstType !== secondType) {
            const firstContent = firstType === 'letter' ? firstCard.textContent : firstCard.querySelector('img').src.slice(-5, -4);
            const secondContent = secondType === 'letter' ? secondCard.textContent : secondCard.querySelector('img').src.slice(-5, -4);


            if (firstContent === secondContent) {
                score += 10; // Increase the score by 10 points for each correct match
                updateScore();

                firstCard.classList.add('matched');
                secondCard.classList.add('matched');
                firstCard.classList.remove('selected');
                secondCard.classList.remove('selected');
                roundLetters = roundLetters.filter(letter => letter !== firstContent);

                if (roundLetters.length === 0) {
                    if (remainingLetters.length === 0) {
                        clearInterval(timer);
                        alert('Congratsss You Learned all the alphabets!.');
                        startButton.disabled = false;
                    } else {
                        setTimeout(() => {
                            getNextRoundLetters();
                            createGameBoard();
                            startTimer();
                        }, 1000);
                    }
                }
            } else {
                score -= 5;
                updateScore();

                firstCard.classList.add('shake', 'incorrect');
                secondCard.classList.add('shake', 'incorrect');
                setTimeout(() => {
                    firstCard.classList.remove('selected', 'shake', 'incorrect');
                    secondCard.classList.remove('selected', 'shake', 'incorrect');
                }, 500);
            }
        } else {
            setTimeout(() => {
                firstCard.classList.remove('selected');
                secondCard.classList.remove('selected');
            }, 500);
        }
    }
}





//This function i used to get timerss
function startTimer() {
clearInterval(timer);
timeRemaining = 60;
timerElement.textContent = `Time remaining: ${timeRemaining} seconds`;
timer = setInterval(() => {
    timeRemaining--;
    timerElement.textContent = `Time remaining: ${timeRemaining} seconds`;

    if (timeRemaining === 0) {
        clearInterval(timer);
        alert('Time is up! Game over.');
        startButton.disabled = false;
    }
}, 1000);
}

//I used this function to get random images and letters always
function shuffle(array) {
for (let i = array.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[array[i], array[j]] = [array[j], array[i]];
}
return array;
}