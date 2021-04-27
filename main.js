//game type btns qs
var classicBtn = document.getElementById("classicGameBtn");
var difficultBtn = document.getElementById("difficultGameBtn");
var changeGameBtn = document.getElementById("changeGameButton");
// game type pages
var classicPageView = document.getElementById("classicGameChoices");
var difficultPageView = document.getElementById("difficultGameChoices");
//main view
var mainPage = document.getElementById("mainGameSection");
// game buttons
var rockBtnClassic = document.getElementById("rockBtnClassic");
var paperBtnClassic = document.getElementById("paperBtnClassic");
var scissorsBtnClassic = document.getElementById("scissorsBtnClassic");

var rockBtnDifficult = document.getElementById("rockBtnDifficult");
var paperBtnDifficult = document.getElementById("paperBtnDifficult");
var scissorsBtnDifficult = document.getElementById("scissorsBtnDifficult");
var lizardBtnDifficult = document.getElementById("lizardBtnDifficult");
var alienBtnDifficult = document.getElementById("alienBtnDifficult");
//text
var resultTextClassic = document.getElementById("resultTextClassic");
var userWins = document.getElementById("userWins");
var computerWins = document.getElementById("computerWins");
var resultTextDifficult = document.getElementById("resultTextDifficult");
var winnerWrapClassic = document.getElementById("winnerWrapClassic");
var winnerWrapDifficult = document.getElementById("winnerWrapDifficult");
var classicGameSection = document.getElementById("classicGame");
var difficultGameSection = document.getElementById("difficultGame");
var chooseFighterTextClassic = document.getElementById("chooseFighterTextClassic");
var chooseFighterTextDifficult = document.getElementById("chooseFighterTextDifficult");
var game = new Game();

// page view event ls
classicBtn.addEventListener("click", classicGamePage);
difficultBtn.addEventListener("click", difficultGamePage);
changeGameBtn.addEventListener("click", viewMainPage);
// user selection event ls
rockBtnClassic.addEventListener("click", rockChoiceClassic);
scissorsBtnClassic.addEventListener("click", scissorsChoiceClassic);
paperBtnClassic.addEventListener("click", paperChoiceClassic);

rockBtnDifficult.addEventListener("click", rockChoiceDifficult);
scissorsBtnDifficult.addEventListener("click", scissorsChoiceDifficult);
paperBtnDifficult.addEventListener("click", paperChoiceDifficult);
lizardBtnDifficult.addEventListener("click", lizardChoiceDifficult);
alienBtnDifficult.addEventListener("click", alienChoiceDifficult);

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

// page vw functions
function classicGamePage(){
  game.type = "classic";
  hide(mainPage);
  show(classicPageView);
  show(classicGameSection);
  hide(winnerWrapClassic);
  show(chooseFighterTextClassic);
  hide(resultTextClassic);
  show(changeGameBtn);
};

function displayWinnerClassic(){
  show(winnerWrapClassic);
  hide(classicGameSection);
  hide(chooseFighterTextClassic);
  show(resultTextClassic);
  hide(changeGameBtn);
}

function viewMainPage(){
  show(mainPage);
  hide(changeGameBtn);
  hide(classicPageView);
  hide(classicGameSection);
  hide(chooseFighterTextClassic);
  hide(difficultPageView);
  hide(difficultGameSection);
hide(chooseFighterTextDifficult);
}

function hide(element) {
  element.classList.add("hidden");
};

function show(element) {
  element.classList.remove("hidden");
};
// user selections
function rockChoiceClassic() {
  game.determineWinner("rock");
};

function paperChoiceClassic() {
  game.determineWinner("paper");
};

function scissorsChoiceClassic() {
  game.determineWinner("scissors");
};

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

function difficultGamePage(){
  game.type = "difficult";
  hide(mainPage);
  show(difficultPageView);
  show(difficultGameSection);
  hide(winnerWrapDifficult);
  show(chooseFighterTextDifficult);
  hide(resultTextDifficult);
  show(changeGameBtn);
};

function displayWinnerDifficult(){
  show(winnerWrapDifficult);
  hide(difficultGameSection);
  hide(chooseFighterTextDifficult);
  show(resultTextDifficult);
  hide(changeGameBtn);
};
