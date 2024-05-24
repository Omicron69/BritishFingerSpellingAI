const words = [
    "hello",
    "goodbye",
    "please",
    "thank you",
    "sorry",
    "yes",
    "no",
    "help",
    "excuse me",
    "nice to meet you",
    "how are you?",
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
    "drink",
    "hungry",
    "thirsty",
    "toilet",
    "sleep",
    "happy",
    "sad",
    "angry",
    "love",
    "like",
    "dislike",
    "learn",
    "sign",
    "hospital",
    "book",
    "pen",
    "paper",
    "computer",
    "phone",
    "music",
    "movie",
    "dance",
    "sport",
    "travel",
    "beach",
    "mountain",
    "city",
    "country",
    "car",
    "bicycle",
    "bus",
    "train",
    "airplane",
    "money",
    "time",
    "weather",
    "work",
    "study",
    "breakfast",
    "lunch",
    "dinner",
    "snack",
    "vegetable",
    "fruit",
    "meat",
    "fish",
    "cheese",
    "bread",
    "rice",
    "noodle",
    "soup",
    "salad",
    "juice",
    "coffee",
    "tea",
    "water",
    "milk",
    "beer",
    "wine",
    "cocktail",
    "birthday",
    "holiday",
    "wedding",
    "party",
    "gift",
    "shopping",
    "clothes",
    "shoes",
    "hat",
    "bag",
    "jewelry",
    "watch",
    "glasses",
    "makeup",
    "hair",
    "toothbrush",
    "shampoo",
    "soap",
    "towel",
    "bed",
    "pillow",
    "blanket",
    "chair",
    "table",
    "lamp",
    "window",
    "door",
    "wall",
    "floor",
    "ceiling",
    "mirror",
    "picture",
    "plant",
    "cat",
    "dog",
    "bird",
    "fish",
    "insect",
    "zoo",
    "garden",
    "beauty",
    "clean",
    "dirty",
    "big",
    "small",
    "fast",
    "slow",
    "hot",
    "cold",
    "heavy",
    "light",
    "hard",
    "soft",
    "loud",
    "quiet",
    "new",
    "old",
    "young",
    "old",
    "beautiful",
    "ugly",
    "expensive",
    "cheap",
    "happy",
    "sad",
    "exciting",
    "boring",
    "fun",
    "boring",
    "difficult",
    "easy",
    "interesting",
    "boring",
    "important",
    "unimportant",
    "healthy",
    "unhealthy",
    "busy",
    "free",
    "tired",
    "energetic",
    "calm",
    "angry",
    "patient",
    "impatient",
    "generous",
    "stingy",
    "polite",
    "impolite",
    "brave",
    "cowardly",
    "honest",
    "dishonest",
    "kind",
    "unkind",
    "friendly",
    "unfriendly",
    "confused",
    "clear",
    "safe",
    "dangerous",
    "open",
    "closed",
    "freezing",
    "boiling",
    "crowded",
    "empty",
    "wet",
    "dry",
    "cloudy",
    "sunny",
    "windy",
    "rainy",
    "snowy",
    "thunderstorm",
    "earthquake",
    "fire",
    "flood",
    "hurricane",
    "tornado",
    "volcano",
    "forest",
    "ocean",
    "river",
    "mountain",
    "valley",
    "desert",
    "beauty",
    "ugliness",
    "love",
    "hate",
    "hope",
    "fear",
    "courage",
    "cowardice",
    "happiness",
    "sadness",
    "excitement",
    "boredom",
    "pleasure",
    "pain",
    "success",
    "failure",
    "friendship",
    "loneliness",
    "peace",
    "war",
    "freedom",
    "slavery",
    "equality",
    "inequality",
    "justice",
    "injustice",
    "kindness",
    "cruelty",
    "wisdom",
    "ignorance",
    "truth",
    "lies",
    "faith",
    "doubt",
    "believe",
    "disbelieve",
    "hopeful",
    "hopeless",
    "optimistic",
    "pessimistic",
    "caring",
    "uncaring",
    "respectful",
    "disrespectful",
    "thankful",
    "unthankful",
    "helpful",
    "unhelpful",
    "positive",
    "negative",
    "patient",
    "impatient",
    "generous",
    "stingy",
    "polite",
    "impolite",
    "brave",
    "cowardly",
    "honest",
    "dishonest",
    "kind",
    "unkind",
    "friendly",
    "unfriendly",
    "confused",
    "clear",
    "safe",
    "dangerous",
    "open",
    "closed",
    "freezing",
    "boiling",
    "crowded",
    "empty",
    "wet",
    "dry",
    "cloudy",
    "sunny",
    "windy",
    "rainy",
    "snowy",
    "thunderstorm",
    "earthquake",
    "fire",
    "flood",
    "hurricane",
    "tornado",
    "volcano",
    "forest",
    "ocean",
    "river",
    "mountain",
    "valley",
    "desert"
  ];
  let score = 0;
  let timeLeft = 45;
  let selectedWord = "";
  let timerId;
  
  const showWord = document.getElementById("theword");
  const AnswerBox = document.getElementById("answerBox");
  const imageContainer = document.getElementById("image-container");
  const scoreElement = document.getElementById("score");
  const timerElement = document.getElementById("timer");
  const missedWord = document.getElementById("missed-word");
  const answerSlots = [];
  
  function startNewRound() {
    clearTimeout(timerId);
    timeLeft = 45;
    AnswerBox.innerHTML = "";
    imageContainer.innerHTML = "";
    answerSlots.length = 0;
  
    selectedWord = words[Math.floor(Math.random() * words.length)];
    const LengthofWord = selectedWord.length;
  
    showWord.textContent = `Selected word: ${selectedWord}`;
  
    for (let i = 0; i < LengthofWord; i++) {
      const slot = document.createElement("div");
      slot.className = "word-slot";
      AnswerBox.appendChild(slot);
      answerSlots.push(slot);
    }
  
    const randomAtoZgen = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").sort(() => Math.random() - 0.5);
    const randomImageGen = Array.from(new Set([...selectedWord.toUpperCase(), ...randomAtoZgen])).slice(0, 10);
    const shuffleImageAgain = randomImageGen.sort(() => Math.random() - 0.5);
  
    for (const letter of shuffleImageAgain) {
      const img = document.createElement("img");
      img.src = `../View/assets/${letter}.png`;
      img.className = "img-letter";
      img.draggable = true;
      img.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", letter);
      });
      imageContainer.appendChild(img);
    }
  
    timerId = setInterval(function() {
      timeLeft--;
      timerElement.textContent = `Time: ${timeLeft}`;
  
      if (timeLeft <= 0) {
        clearInterval(timerId);
        missedWord.textContent = `Time's up! The word was ${selectedWord}`;
        startNewRound();
      }
    }, 1000);
  }
  
  AnswerBox.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  
  AnswerBox.addEventListener("dragenter", (e) => {
    if (e.target.classList.contains("word-slot")) {
      e.target.classList.add("drop-zone");
    }
  });
  
  AnswerBox.addEventListener("dragleave", (e) => {
    if (e.target.classList.contains("word-slot")) {
      e.target.classList.remove("drop-zone");
    }
  });
  
  AnswerBox.addEventListener("drop", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const letter = e.dataTransfer.getData("text/plain");
    const target = e.target;
  
    if (target.classList.contains("word-slot")) {
      target.classList.remove("drop-zone");
  
      const index = answerSlots.indexOf(target);
  
      if (selectedWord.toUpperCase()[index] === letter) {
        target.textContent = letter;
        target.style.backgroundColor = "lightgreen";
  
        const completedWord = answerSlots.map(slot => slot.textContent).join('');
        if (completedWord === selectedWord.toUpperCase()) {
          score++;
          scoreElement.textContent = `Score: ${score}`;
          startNewRound();
        }
      } else {
        target.style.backgroundColor = "lightcoral";
      }
    }
  });
  

      AnswerBox.addEventListener("dragover", (e) => {
          e.preventDefault();
      });

      AnswerBox.addEventListener("dragenter", (e) => {
          if (e.target.classList.contains("word-slot")) {
              e.target.classList.add("drop-zone");
          }
      });

      AnswerBox.addEventListener("dragleave", (e) => {
          if (e.target.classList.contains("word-slot")) {
              e.target.classList.remove("drop-zone");
          }
      });

      AnswerBox.addEventListener("drop", (e) => {
          e.preventDefault();
          e.stopPropagation();

          const letter = e.dataTransfer.getData("text/plain");
          const target = e.target;

          if (target.classList.contains("word-slot")) {
              target.classList.remove("drop-zone");

              const index = answerSlots.indexOf(target);

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

      // Start the first round
      startNewRound();
