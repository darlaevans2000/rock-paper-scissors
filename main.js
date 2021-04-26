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

var classicGameSection = document.getElementById("classicGame");
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
  // show(resultText);
};
function renderClassicPg(){
  classicGameSection.innerHTML = `
  <div class="classic-game" id="classicGame">
    <button id="rockClassic" class="button-img-classic">
      <img src="./assets/rock.png" alt="rock">
    </button>
    <button id="paperClassic" class="button-img-classic">
      <img src="./assets/paper.png" alt="paper">
    </button>
    <button id="scissorsClassic" class="button-img-classic">
      <img src="./assets/scissors.png" alt="scissors">
    </button>
  </div>
  `
}
// hide/show
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
}

function paperChoice() {
  game.determineWinner("paper");
}

function scissorsChoice() {
  game.determineWinner("scissors");
}

function playAgain() {
  resultText.innerText = "";
  classicGamePage();
};
