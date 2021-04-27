//1️⃣QUERY SELECTORS
//Game Type Selection BTNS
var classicBtn = document.getElementById("classicGameBtn");
var difficultBtn = document.getElementById("difficultGameBtn");
var changeGameBtn = document.getElementById("changeGameButton");
//Game Type Page Vw
var classicPageView = document.getElementById("classicGameChoices");
var difficultPageView = document.getElementById("difficultGameChoices");
//Main Page
var mainPage = document.getElementById("mainGameSection");
//Classic Game Choices BTNS
var rockBtnClassic = document.getElementById("rockBtnClassic");
var paperBtnClassic = document.getElementById("paperBtnClassic");
var scissorsBtnClassic = document.getElementById("scissorsBtnClassic");
//Difficult Game Choices BTNS
var rockBtnDifficult = document.getElementById("rockBtnDifficult");
var paperBtnDifficult = document.getElementById("paperBtnDifficult");
var scissorsBtnDifficult = document.getElementById("scissorsBtnDifficult");
var lizardBtnDifficult = document.getElementById("lizardBtnDifficult");
var alienBtnDifficult = document.getElementById("alienBtnDifficult");
//Classic Game
var resultTextClassic = document.getElementById("resultTextClassic");
var winnerWrapClassic = document.getElementById("winnerWrapClassic");
var chooseFighterTextClassic = document.getElementById("chooseFighterTextClassic");
var classicGameSection = document.getElementById("classicGame");
//Difficult Game
var resultTextDifficult = document.getElementById("resultTextDifficult");
var winnerWrapDifficult = document.getElementById("winnerWrapDifficult");
var chooseFighterTextDifficult = document.getElementById("chooseFighterTextDifficult");
var difficultGameSection = document.getElementById("difficultGame");
//Wins
var userWins = document.getElementById("userWins");
var computerWins = document.getElementById("computerWins");

//Instantiate Game
var game = new Game();

//2️⃣EVENT LISTENERS
//Game Page View
classicBtn.addEventListener("click", classicGamePage);
difficultBtn.addEventListener("click", difficultGamePage);
changeGameBtn.addEventListener("click", viewMainPage);
//Classic Game Selections
rockBtnClassic.addEventListener("click", rockChoiceClassic);
scissorsBtnClassic.addEventListener("click", scissorsChoiceClassic);
paperBtnClassic.addEventListener("click", paperChoiceClassic);
//Difficult Game Selections
rockBtnDifficult.addEventListener("click", rockChoiceDifficult);
scissorsBtnDifficult.addEventListener("click", scissorsChoiceDifficult);
paperBtnDifficult.addEventListener("click", paperChoiceDifficult);
lizardBtnDifficult.addEventListener("click", lizardChoiceDifficult);
alienBtnDifficult.addEventListener("click", alienChoiceDifficult);

//Local Storage 🗄
if (localStorage.userWins === undefined) {
  localStorage.userWins = 0;
} else {
  userWins.innerText = game.user.retrieveUserWinsFromStorage();
};

if (localStorage.computerWins === undefined) {
  localStorage.computerWins = 0;
} else {
  computerWins.innerText = game.computer.retrieveComputerWinsFromStorage();
};

//3️⃣FUNCTIONS
//Main PG
function viewMainPage() {
  show([mainPage]);
  hide([changeGameBtn, classicPageView, classicGameSection, chooseFighterTextClassic, difficultPageView, difficultGameSection, chooseFighterTextDifficult]);
};

//🪨Classic Game✂️
function classicGamePage() {
  game.type = "classic";
  hide([mainPage, winnerWrapClassic, resultTextClassic]);
  show([classicPageView, classicGameSection, chooseFighterTextClassic, changeGameBtn]);
};

function displayWinnerClassic() {
  show([winnerWrapClassic, resultTextClassic]);
  hide([classicGameSection, chooseFighterTextClassic, changeGameBtn]);
};
//User Selections Classic
function rockChoiceClassic() {
  game.determineWinner("rock");
};

function paperChoiceClassic() {
  game.determineWinner("paper");
};

function scissorsChoiceClassic() {
  game.determineWinner("scissors");
};

//🦎Difficult Game👽
function difficultGamePage() {
  game.type = "difficult";
  hide([mainPage, winnerWrapDifficult, resultTextDifficult]);
  show([difficultPageView, difficultGameSection, chooseFighterTextDifficult, changeGameBtn]);
};

function displayWinnerDifficult() {
  show([winnerWrapDifficult, resultTextDifficult]);
  hide([difficultGameSection, chooseFighterTextDifficult, changeGameBtn]);
};
//User Selections Difficult
function rockChoiceDifficult() {
  game.determineWinner("rock");
};

function paperChoiceDifficult() {
  game.determineWinner("paper");
};

function scissorsChoiceDifficult() {
  game.determineWinner("scissors");
};

function lizardChoiceDifficult() {
  game.determineWinner("lizard");
};

function alienChoiceDifficult() {
  game.determineWinner("alien");
};

// Show/Hide
function hide(elements) {
  for (var i = 0; i < elements.length; i++) {
    element = elements[i];
    element.classList.add("hidden");
  }
};

function show(elements) {
  for (var i = 0; i < elements.length; i++) {
    element = elements[i];
    element.classList.remove("hidden");
  }
};
