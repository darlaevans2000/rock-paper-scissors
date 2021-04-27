// QUERY SELECTORS 1️⃣
//Game Type BTNS
var classicBtn = document.getElementById("classicGameBtn");
var difficultBtn = document.getElementById("difficultGameBtn");
var changeGameBtn = document.getElementById("changeGameBtn");
//Game Pages View=
var classicPageView = document.getElementById("classicGameChoices");
var difficultPageView = document.getElementById("difficultGameChoices");
//Main Page QS
var mainPage = document.getElementById("mainGameSection");
//Classic Game BTNS
var rockBtnClassic = document.getElementById("rockBtnClassic");
var paperBtnClassic = document.getElementById("paperBtnClassic");
var scissorsBtnClassic = document.getElementById("scissorsBtnClassic");
//Difficult Game BTNS
var rockBtnDifficult = document.getElementById("rockBtnDifficult");
var paperBtnDifficult = document.getElementById("paperBtnDifficult");
var scissorsBtnDifficult = document.getElementById("scissorsBtnDifficult");
var lizardBtnDifficult = document.getElementById("lizardBtnDifficult");
var alienBtnDifficult = document.getElementById("alienBtnDifficult");
//Wins
var userWins = document.getElementById("userWins");
var computerWins = document.getElementById("computerWins");
//Classic Game View/Text
var classicGameSection = document.getElementById("classicGame");
var winnerWrapClassic = document.getElementById("winnerWrapClassic");
var resultTextClassic = document.getElementById("resultTextClassic");
var chooseFighterTextClassic = document.getElementById("chooseFighterTextClassic");
//Difficult Game View/Text
var difficultGameSection = document.getElementById("difficultGame");
var winnerWrapDifficult = document.getElementById("winnerWrapDifficult");
var resultTextDifficult = document.getElementById("resultTextDifficult");
var chooseFighterTextDifficult = document.getElementById("chooseFighterTextDifficult");
//Instantiate Game Class
var game = new Game();

//EVENT LISTENERS 2️⃣
//Game Selection BTNS
classicBtn.addEventListener("click", classicGamePage);
difficultBtn.addEventListener("click", difficultGamePage);
changeGameBtn.addEventListener("click", viewMainPage);
//Classic Game Choices BTNS
rockBtnClassic.addEventListener("click", rockChoiceClassic);
scissorsBtnClassic.addEventListener("click", scissorsChoiceClassic);
paperBtnClassic.addEventListener("click", paperChoiceClassic);
//Diffiult Game Choices BTNS
rockBtnDifficult.addEventListener("click", rockChoiceDifficult);
scissorsBtnDifficult.addEventListener("click", scissorsChoiceDifficult);
paperBtnDifficult.addEventListener("click", paperChoiceDifficult);
lizardBtnDifficult.addEventListener("click", lizardChoiceDifficult);
alienBtnDifficult.addEventListener("click", alienChoiceDifficult);

//Retrieve From Storage 🗄
if (localStorage.userWins === undefined) {
  localStorage.userWins = 0;
} else {
  userWins.innerText = game.user.retrieveUserWinsFromStorage();
}

if (localStorage.computerWins === undefined) {
  localStorage.computerWins = 0;
} else {
  computerWins.innerText = game.computer.retrieveComputerWinsFromStorage();
}

//FUNCTIONS 3️⃣
//🪨CLASSIC GAME FUNCTIONS✂️
function classicGamePage(){
  game.type = "classic";
  hide([mainPage, winnerWrapClassic, resultTextClassic]);
  show([classicPageView, classicGameSection, chooseFighterTextClassic, changeGameBtn]);
};

function displayWinnerClassic(){
  show([winnerWrapClassic, resultTextClassic]);
  hide([classicGameSection, chooseFighterTextClassic, changeGameBtn]);
}

function viewMainPage(){
  show([mainPage]);
  hide([changeGameBtn, classicPageView, classicGameSection, chooseFighterTextClassic, difficultPageView, difficultGameSection, chooseFighterTextDifficult]);
};

// User Selections Classic
function rockChoiceClassic() {
  game.determineWinner("rock");
};

function paperChoiceClassic() {
  game.determineWinner("paper");
};

function scissorsChoiceClassic() {
  game.determineWinner("scissors");
};

//🦎DIFFICULT GAME FUNCTIONS👽
function difficultGamePage(){
  game.type = "difficult";
  hide([mainPage, winnerWrapDifficult, resultTextDifficult]);
  show([difficultPageView, difficultGameSection, chooseFighterTextDifficult, changeGameBtn]);
};

function displayWinnerDifficult(){
  show([winnerWrapDifficult, resultTextDifficult]);
  hide([difficultGameSection, chooseFighterTextDifficult, changeGameBtn]);
};

// User Selections Difficult
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

// 💚 SHOW/HIDE 🛑
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
