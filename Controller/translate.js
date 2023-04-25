const inputText = document.getElementById('input-text');
const submitButton = document.getElementById('submit-button');
const imageContainer = document.getElementById('image-container');

submitButton.addEventListener('click', () => {
    const text = inputText.value.toUpperCase();
    imageContainer.innerHTML = '';

    for (const letter of text) {
        if (letter.match(/[A-Z]/)) {
            const box = document.createElement('div');
            box.className = 'box';

            const img = document.createElement('img');
            img.src = `../View/assets/${letter}.png`;
            img.alt = `${letter} Fingerspelling`;
            img.className = 'img-letter';
            box.appendChild(img);

            const label = document.createElement('span');
            label.textContent = letter;
            label.className = 'letter-label';
            box.appendChild(label);

            imageContainer.appendChild(box);
        }
    }
});
