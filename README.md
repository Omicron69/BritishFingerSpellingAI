# Hands - British Sign Language Fingerspelling Learning Application

A web-based, gamified learning platform for British Sign Language (BSL) fingerspelling. Built as a Final Year Project at Kingston University London, the application uses real-time hand gesture recognition powered by MediaPipe and TensorFlow.js to help users learn, practise, and self-correct BSL fingerspelling through interactive games, a structured handbook, and live webcam feedback.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Hand Detection and Machine Learning](#hand-detection-and-machine-learning)
- [Design and Methodology](#design-and-methodology)
- [Known Limitations](#known-limitations)
- [Future Development](#future-development)
- [Author](#author)

---

## Overview

The deaf and hard-of-hearing community in the United Kingdom faces significant communication barriers stemming from a widespread lack of British Sign Language literacy among the general population. This application addresses that gap by providing an accessible, engaging, and self-directed route into learning BSL fingerspelling — the foundational skill that allows users to spell out names, places, and words that have no dedicated sign.

The platform draws design inspiration from language-learning applications such as Duolingo, incorporating progressive levels, scoring systems, and real-time performance feedback. It was developed as a solo project across a four-sprint Agile/Waterfall hybrid lifecycle, validated through stakeholder interviews and iterative user testing.

---

## Features

### BSL Fingerspelling Handbook
A reference section presenting all 26 letters of the BSL alphabet with accurate hand sign illustrations. Users can browse each letter individually to study correct handshapes before practising.

### Level 1 - Letter Matching Game
A timed matching game in which users are presented with BSL hand sign images on one side and alphabet letters on the other. Selecting a correct pair turns both items green and awards a point. Incorrect selections trigger a visual shake animation as feedback. Rounds refresh with new randomised letter sets upon completion.

### Level 2 - Word Guessing Game
A sequence of BSL hand sign images is displayed one by one, spelling out a word drawn from a randomised word array. The user types their answer into a text field and submits. A correct answer awards 10 points and advances to the next word. An incorrect answer deducts 5 points and the game continues rather than terminating, encouraging learning from mistakes.

### Level 3 - Phrase Recall Game
A more advanced challenge in which the user is shown a target word or phrase and must select the correct corresponding BSL hand signs from a shuffled carousel of options.

### English to BSL Translator
A utility that accepts any English word typed into a text field and displays the complete sequence of BSL fingerspelling images for each letter, rendered step by step. Built entirely with vanilla JavaScript string manipulation and dynamic DOM rendering, it supports both uppercase and lowercase input.

### Webcam-Based Fingerspelling Practice
Using the MediaPipe Hands library and a pre-trained TensorFlow.js model, the application accesses the user's webcam and overlays a 21-point skeletal hand landmark visualisation in real time. An accuracy percentage is calculated by comparing the detected hand pose against the target sign's hardcoded landmark geometry. Users receive live feedback indicating how closely their hand position matches the correct sign.

### Login and Sign-Up
Optional user authentication to enable progress saving and personalisation. Users may access all learning content without logging in.

### Achievements
A section designed to surface completion milestones and XP-based rewards tied to level progression and correct answer streaks.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 |
| Application Logic | JavaScript (ES6+) |
| Runtime / Package Management | Node.js, npm |
| Hand Tracking | MediaPipe Hands API |
| Gesture Classification | TensorFlow.js (pre-trained lite model) |
| Version Control | Git / GitHub |
| IDE | Visual Studio Code |

The application runs entirely in the browser with no server-side processing required for the core learning features. MediaPipe Hands is loaded as a Node module and executed client-side.

---

## Project Structure

```
BritishFingerSpellingAI/
│
├── index.html                  # Application entry point and home page
│
├── Controller/                 # JavaScript logic files
│   ├── level1.js               # Letter matching game logic
│   ├── level2.js               # Word guessing game logic
│   ├── level3.js               # Phrase recall game logic
│   ├── translator.js           # English to BSL translation logic
│   └── webcam.js               # MediaPipe hand detection and accuracy scoring
│
├── View/                       # HTML pages and CSS stylesheets
│   ├── levels.html             # Level selection screen
│   ├── handbook.html           # BSL fingerspelling alphabet handbook
│   ├── achievements.html       # Achievements and leaderboard page
│   ├── login.html              # Login and sign-up page
│   ├── level1.html             # Level 1 game page
│   ├── level2.html             # Level 2 game page
│   ├── level3.html             # Level 3 game page
│   ├── translator.html         # BSL translator page
│   ├── webcam.html             # Webcam practice page
│   └── style/                  # CSS stylesheets per page
│
├── node_modules/               # npm dependencies (MediaPipe, TensorFlow.js)
├── package.json                # Project metadata and dependencies
├── package-lock.json           # Dependency lock file
├── .gitignore
└── README.md
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- A modern browser with webcam access (Chrome or Edge recommended for MediaPipe compatibility)
- A webcam is required only for the webcam fingerspelling practice feature; all other features are accessible without one

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Omicron69/BritishFingerSpellingAI.git
cd BritishFingerSpellingAI
```

2. Install dependencies:

```bash
npm install
```

3. Open `index.html` directly in your browser, or serve the project locally using a static file server:

```bash
npx serve .
```

Then navigate to `http://localhost:3000` in your browser.

> Note: The webcam feature requires the page to be served over a local or HTTPS connection. Opening `index.html` directly as a `file://` URL may block camera access in some browsers. Using `npx serve` resolves this.

---

## Usage

From the home page, select one of the following routes:

- **Let's Get Started** — proceeds to the level selection screen
- **Learn Sign Language Through Games** — direct access to the games

From the level selection screen, choose any of the four learning modes. The BSL Handbook and Achievements sections are accessible at any time via the navigation bar. Login and sign-up are optional and located in the top-right corner.

For the webcam practice feature, grant camera permission when prompted. Position your hand clearly in frame against a plain background for best detection accuracy.

---

## Hand Detection and Machine Learning

The webcam feature uses the [MediaPipe Hands](https://developers.google.com/mediapipe/solutions/vision/hand_landmarker) library to detect and track 21 skeletal landmark points across the user's hand in real time. These landmarks cover the tips, knuckles, and base joints of all five fingers and the wrist.

Accuracy scoring is calculated by comparing the Euclidean distances between key landmark pairs (for example, the separation between the index and middle fingertips, or the proximity of the ring and pinky tips) against a set of hardcoded geometric thresholds that define each target sign. When the detected distances fall within the expected range for the correct sign, accuracy is reported as 100 percent.

An earlier version of the project attempted to train a custom TensorFlow.js classification model from scratch using 15 labelled images per letter, collected via OpenCV and annotated using Label Studio. This approach was abandoned due to incompatibilities between Python module versions and the TensorFlow.js Lite model conversion pipeline. The final implementation uses pre-trained TensorFlow.js models combined with rule-based landmark geometry, which proved both more reliable and more practical within the project timeline.

---

## Design and Methodology

The application was designed following a user-centred process:

- **Research phase**: Literature review covering BSL accessibility challenges, gamification theory (Hamari et al., 2016), spaced repetition learning, and competitor analysis of six existing BSL and ASL learning platforms
- **Requirements gathering**: Surveys conducted with seven stakeholders from diverse backgrounds including deaf community members, educators, social workers, and healthcare students
- **Prioritisation**: MoSCoW analysis to categorise features into must-haves, should-haves, could-haves, and won't-haves for the current release
- **Design artefacts**: User personas, user journey maps, hierarchical task analysis, and user flow diagrams produced before development began
- **Visual design**: High-fidelity prototypes created in Adobe XD; final colour palette revised from an accessible blue-green scheme to a high-contrast black and magenta cyberpunk theme following stakeholder feedback
- **Development lifecycle**: Four-sprint hybrid Agile/Waterfall methodology with a Kanban board managed in Trello, Test-Driven Development for core game logic, and version control via Git
- **Testing**: Unit test cases written for key features including matching logic, scoring behaviour, edge-case input handling, and webcam accuracy detection

---

## Known Limitations

- Webcam gesture detection is currently implemented for a limited set of signs. Full BSL alphabet coverage via webcam requires extending the landmark geometry ruleset for each of the 26 letters.
- The scoring and progress system on the Achievements page is partially implemented. Full leaderboard and XP persistence requires backend integration.
- The application is optimised for desktop and laptop screens. Mobile layout support is limited.
- Webcam accuracy can be affected by lighting conditions, background complexity, and hand distance from the camera.
- The node_modules directory is committed to the repository. This is not standard practice; a future update should add it to .gitignore and rely on `npm install` to restore dependencies.

---

## Future Development

- Extend webcam practice to cover all 26 BSL fingerspelling letters with full landmark-based detection
- Implement backend authentication and persistent progress tracking with leaderboards
- Add a comprehensive BSL sign dictionary beyond fingerspelling
- Introduce adaptive difficulty that adjusts game content based on individual user performance history
- Improve mobile responsiveness for tablet and smartphone users
- Explore full BSL-to-English translation via webcam as a long-term research direction

---

## Author

**Mohammed Meraj Rahman**
BSc Computer Science (First Class), Kingston University London
MSc Artificial Intelligence, Kingston University London (in progress)

[LinkedIn](https://www.linkedin.com/in/mohammed-meraj-rahman-b1908a131/) | [GitHub](https://github.com/Omicron69)
