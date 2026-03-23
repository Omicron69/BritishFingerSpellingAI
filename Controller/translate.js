const inputText = document.getElementById('textbox');
const translateButton = document.getElementById('translatebtn');
const imageBox = document.getElementById('imagebox');

function translateText() {
    const text = inputText.value.toUpperCase();
    imageBox.innerHTML = '';

    for (const letter of text) {
        if (letter.match(/[A-Z]/)) {
            const box = document.createElement('div');
            box.className = 'box';

            const img = document.createElement('img');
            img.src = `../View/assets/${letter.toLowerCase()}.png`;
            img.alt = `${letter} Fingerspelling`;
            img.className = 'img-letter';
            box.appendChild(img);

            const label = document.createElement('span');
            label.textContent = letter;
            label.className = 'letter-label';
            box.appendChild(label);

            imageBox.appendChild(box);
        }
    }
}

translateButton.addEventListener('click', translateText);

inputText.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        translateText();
    }
});
