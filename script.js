let question = "";
let choices = "";
let answer = true;
let score = 0;

// define all elements
const startGameBtn = document.getElementById("start-reset");
const instructionSession = document.getElementById("instructionSection");
const gamesection = documentById("game-section");
let boxes = document.getElementById("box");

// event handles
function startGame() {
    score = 0;
    instructionSession.getElementsByClassName.display = 'none'
    startGame.style.display = 'none'
    gamesection.style.display = 'block';
}