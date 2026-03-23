const phrases = [
    "hello",
    "goodbye",
    "please",
    "thankyou",
    "sorry",
    "yes",
    "no",
    "help",
    "excuse me",
    "nice to meet you",
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

  const imageContainer = document.getElementById('image-container');
  const startButton = document.getElementById('start-button');
  const inputText = document.getElementById('textbox');
  const submitButton = document.getElementById('submit-button');
  const message = document.getElementById('message');
  const wordoftheday = document.getElementById('wordoftheday')
  const scoreElement = document.getElementById('score');
  const timerElement = document.getElementById('timer');
  let currentPhrase = '';
  let score = 0;
  let timer;
  
  startButton.addEventListener('click', () => {
      startNewRound();
  });
  
  submitButton.addEventListener('click', () => {
      if (inputText.value.toLowerCase() === currentPhrase) {
          score++;
          message.textContent = 'Correct! Well done!';
          message.style.color = 'green';
          scoreElement.textContent = `Score: ${score}`;
          setTimeout(() => {
              startNewRound();
          }, 1500);
      } else {
          score--; // Deduct one point for an incorrect answer
          scoreElement.textContent = `Score: ${score}`;
          inputText.classList.add('shake');
          setTimeout(() => {
              inputText.classList.remove('shake');
          }, 500);
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
      startTimer();
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
                  submitButton.disabled = false; 
              }
          }, 400 * i);
      }
  }
  
  function startTimer() {
      clearInterval(timer);
      let timeRemaining = 60;
      timerElement.textContent = `Time remaining: ${timeRemaining} seconds`;
      timer = setInterval(() => {
          timeRemaining--;
          timerElement.textContent = `Time remaining: ${timeRemaining} seconds`;
  
          if (timeRemaining === 0) {
              clearInterval(timer);
              inputText.disabled = true;
              submitButton.disabled = true;
              wordoftheday.textContent = `The Word was ${currentPhrase}`
              message.textContent = `Game over! Your score is: ${score}`;
              message.style.color = 'red';
              startButton.disabled = false;
          }
      }, 1000);
  }
