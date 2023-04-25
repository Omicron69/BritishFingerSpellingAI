const gameBoard = document.getElementById('game-board');
const startButton = document.getElementById('start-button');

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const gridSize = 8;
const totalPairs = (gridSize * gridSize) / 2;

startButton.addEventListener('click', () => {
    startButton.disabled = true;
    startGame();
});

function startGame() {
    const cards = generateCards();
    shuffle(cards);
    createGameBoard(cards);
}

function generateCards() {
    const cards = [];

    for (let i = 0; i < totalPairs; i++) {
        const letter = alphabet[i];
        const imgSrc = `../View/assets/${letter}.png`;

        cards.push({
            type: 'letter',
            content: letter,
        });

        cards.push({
            type: 'image',
            content: imgSrc,
        });
    }

    return cards;
}

function shuffle(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
}

function createGameBoard(cards) {
    gameBoard.innerHTML = '';
    let firstCard = null;
    let secondCard = null;
    let isFlipping = false;

    cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card
        cardElement.addEventListener('click', () => {
            if (isFlipping) return;
            flipCard(cardElement, card);

            if (!firstCard) {
                firstCard = { cardElement, card };
            } else {
                secondCard = { cardElement, card };
                isFlipping = true;

                setTimeout(() => {
                    checkMatch(firstCard, secondCard);
                    firstCard = null;
                    secondCard = null;
                    isFlipping = false;
                }, 1000);
            }
        });

        gameBoard.appendChild(cardElement);
    });
}

function flipCard(cardElement, card) {
    if (card.type === 'letter') {
        cardElement.textContent = card.content;
    } else {
        const img = document.createElement('img');
        img.src = card.content;
        img.style.width = '50px';
        img.style.height = '50px';
        cardElement.appendChild(img);
    }
    cardElement.style.backgroundColor = 'white';
    cardElement.style.color = 'black';
}

function checkMatch(firstCard, secondCard) {
    if (firstCard.card.type === secondCard.card.type) {
        unflipCards(firstCard.cardElement, secondCard.cardElement);
    } else if (firstCard.card.content === secondCard.card.content) {
        firstCard.cardElement.style.visibility = 'hidden';
        secondCard.cardElement.style.visibility = 'hidden';
    } else {
        unflipCards(firstCard.cardElement, secondCard.cardElement);
    }
}

function unflipCards(...cardElements) {
    cardElements.forEach((cardElement) => {
        cardElement.innerHTML = '';
        cardElement.style.backgroundColor = '#4CAF50';
        cardElement.style.color = 'white';
    });
}
