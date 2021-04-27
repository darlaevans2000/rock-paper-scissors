//game type btns qs
var classicBtn = document.getElementById("classicGameBtn");
var difficultBtn = document.getElementById("difficultGameBtn");
// game type pages
var classicPageView = document.getElementById("classicGameChoices");
var difficultPageView = document.getElementById("difficultGame");
//main view
var mainPage = document.getElementById("mainGameSection");
// game buttons
var rockBtn = document.getElementById("rockClassic");
var paperBtn = document.getElementById("paperClassic");
var scissorsBtn = document.getElementById("scissorsClassic");
//text
var resultText = document.getElementById("resultText");
var userWins = document.getElementById("userWins");
var computerWins = document.getElementById("computerWins");
var resultText = document.getElementById("resultText");
var winnerWrap = document.getElementById("winnerWrap");
var classicGameSection = document.getElementById("classicGame");
var chooseFighterTextClassic = document.getElementById("chooseFighterTextClassic");
var game = new Game();

// page view event ls
classicBtn.addEventListener("click", classicGamePage);
// difficultBtn.addEventListener("click", difficultGamePage);
// user selection event ls
rockBtn.addEventListener("click", rockChoice);
scissorsBtn.addEventListener("click", scissorsChoice);
paperBtn.addEventListener("click", paperChoice);
// page vw functions
function classicGamePage(){
  hide(mainPage);
  show(classicPageView);
  show(classicGameSection);
  hide(winnerWrap);
  show(chooseFighterTextClassic);
  hide(resultText);
  // show(resultText);
};

function displayWinner(){
  show(winnerWrap);
  hide(classicGameSection);
  hide(chooseFighterTextClassic);
  show(resultText);
}

function hide(element) {
  element.classList.add("hidden");
};

function show(element) {
  element.classList.remove("hidden");
};
// user selections
function rockChoice() {
  console.log(rock);
  game.determineWinner("rock");
};

function paperChoice() {
  game.determineWinner("paper");
};

function scissorsChoice() {
  game.determineWinner("scissors");
};
