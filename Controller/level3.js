const words = ["apple", "banana", "cherry", "orange", "grape"];
const wordDisplay = document.getElementById("word-display");
const wordContainer = document.getElementById("word-container");
const imageContainer = document.getElementById("image-container");
const selectedWord = words[Math.floor(Math.random() * words.length)];
const wordLength = selectedWord.length;
const letterSlots = [];


wordDisplay.textContent = `Selected word: ${selectedWord}`;

for (let i = 0; i < wordLength; i++) {
  const slot = document.createElement("div");
  slot.className = "word-slot";
  wordContainer.appendChild(slot);
  letterSlots.push(slot);
}

const shuffledAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").sort(() => Math.random() - 0.5);
const imagesToDisplay = Array.from(new Set([...selectedWord.toUpperCase(), ...shuffledAlphabet])).slice(0, 10);

for (const letter of imagesToDisplay) {
  const img = document.createElement("img");
  img.src = `../View/assets/${letter}.png`;
  img.className = "img-letter";
  img.draggable = true;
  img.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", letter);
  });
  imageContainer.appendChild(img);
}

wordContainer.addEventListener("dragover", (e) => {
  e.preventDefault();
});

wordContainer.addEventListener("drop", (e) => {
  e.preventDefault();
  const letter = e.dataTransfer.getData("text/plain");
  const target = e.target;

  if (target.classList.contains("word-slot")) {
    const index = letterSlots.indexOf(target);

    if (selectedWord.toUpperCase()[index] === letter) {
      target.innerHTML = letter;
      target.style.backgroundColor = "lightgreen";
    } else {
      target.style.backgroundColor = "lightcoral";
    }
  }
});

wordContainer.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  
  wordContainer.addEventListener("dragenter", (e) => {
    if (e.target.classList.contains("word-slot")) {
      e.target.classList.add("drop-zone");
    }
  });
  
  wordContainer.addEventListener("dragleave", (e) => {
    if (e.target.classList.contains("word-slot")) {
      e.target.classList.remove("drop-zone");
    }
  });
  
  wordContainer.addEventListener("drop", (e) => {
    e.preventDefault();
    e.stopPropagation();
  
    const letter = e.dataTransfer.getData("text/plain");
    const target = e.target;
  
    if (target.classList.contains("word-slot")) {
      target.classList.remove("drop-zone");
  
      const index = letterSlots.indexOf(target);
  
      if (selectedWord.toUpperCase()[index] === letter) {
        const img = document.createElement("img");
        img.src = `../View/assets/${letter}.png`;
        img.className = "img-letter";
        target.innerHTML = "";
        target.appendChild(img);
        target.style.backgroundColor = "lightgreen";
      } else {
        target.style.backgroundColor = "lightcoral";
        target.classList.add("shake");
        setTimeout(() => {
          target.classList.remove("shake");
          target.style.backgroundColor = "";
        }, 500);
      }
    }
  });
  