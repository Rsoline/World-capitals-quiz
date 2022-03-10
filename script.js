let questionIndex = 0;
let choices = "";
let answer = true;
let score = 0;

const questionBank = [
{
    text : 'What is the capitol of Ucraine?'
    option : ['Warsaw', 'Tallinn', 'Kiev', 'Budapest'],
    answer : 'Kiev'
},
{
    text : 'What is the capitol of Poland?',
    option : ['Warsaw', 'Wroclaw', 'Budapest', 'Berlin'],
    answer : 'Warsaw'
},
{
    text : 'What is the capitol of United Kingdom?',
    option : ['Dublin', 'London', 'Manchester', 'Liverpool'],
    answer : 'London'
},
{
    text : 'What is the capitol of Germany?',
    option : ['Berlin', 'Warswa', 'Helsinki', 'Luksemburg'],
    answer : 'Berlin'
},
{
    text : 'What is the capitol of V`tican?',
    option : ['Roma', 'Vatican City', 'Nice', 'Monaco'],
    answer : 'Vatican city'
},
{
    text : 'What is the capitol of Romania?',
    option : ['Budapest', 'Tallinn', 'Kiev', 'Bucharest'],
    answer : 'Kiev'
},

]

// define all elements
const startGameBtn = document.getElementById("start-reset");
const instructionSession = document.getElementsById("instructionSection");
const gamesection = documentById("game-section");
const questionHolder = document.getElementById('question');
let boxes = document.getElementByElementsByClassName('box');

// event handlers
function startGame() {
    score = 0;
    questionIndex = 0;

    instructionSession.getElementsByClassName.display = 'none'
    startGameBtn.style.display = 'none'

    gamesection.style.display = 'block';

    showQuestion(questionBank[questionIndex]);
}

function showQuestion(question) {
    questionHolder.innerRext = question['text'];

    boxes.items(0).innerText = question['option'][0];
    boxes.items(1).innerText = question['option'][1];
    boxes.items(2).innerText = question['option'][2];
    boxes.items(3).innerText = question['option'][3];
}

// attach event listeners
startGameBtn.addEventListener("click", startGame, false);