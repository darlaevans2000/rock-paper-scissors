class Game {
  constructor() {
    this.user = new Player({
      name: "User",
      token: "😄"
    });
    this.computer = new Player({
      name: "Computer",
      token: "💻"
    });
    this.type = "classic" || "difficult";
    this.choices = [];
  }

  //Random Computer Choice
  getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  };

  randomChoice() {
    var classicChoices = ["rock", "paper", "scissors"];
    var difficultChoices = ["rock", "paper", "scissors", "lizard", "alien"];
    if (this.type === "classic") {
      var randomClassicChoice = this.getRandomIndex(classicChoices);
      return classicChoices[randomClassicChoice];
    } else {
      var randomDifficultChoice = this.getRandomIndex(difficultChoices);
      return difficultChoices[randomDifficultChoice];
    }
  };

  //Determine Winner Classic Game
  determineWinnerClassic(choice) {
    if (this.type === "classic") {
      var classicComputerChoice = this.randomChoice();
      var classicUserChoice = choice;

      if (classicComputerChoice === classicUserChoice) {
        this.tieAlert();

      } else if ((classicComputerChoice === "paper" && classicUserChoice === "rock") ||
        (classicComputerChoice === "scissors" && classicUserChoice === "paper") ||
        (classicComputerChoice === "rock" && classicUserChoice === "scissors")) {

        this.loseAlert();

      } else {

        this.winAlert();
      }
      winnerWrapClassic.innerHTML = `
      <img src="./assets/${classicUserChoice}.png" alt="${classicUserChoice}">
      <img src="./assets/${classicComputerChoice}.png" alt="${classicComputerChoice}">
      `
    }
    };

    //Determine Winner Difficult
    determineWinnerDifficult(choice) {
      var difficultComputerChoice = this.randomChoice();
      var difficultUserChoice = choice;

      if (difficultComputerChoice === difficultUserChoice) {
        this.tieAlert();

      } else if ((difficultComputerChoice === "rock" && difficultUserChoice === "lizard") ||
        (difficultComputerChoice === "rock" && difficultUserChoice === "scissors") ||
        (difficultComputerChoice === "paper" && difficultUserChoice === "scissors") ||
        (difficultComputerChoice === "paper" && difficultUserChoice === "alien") ||
        (difficultComputerChoice === "scissors" && difficultUserChoice === "paper") ||
        (difficultComputerChoice === "scissors" && difficultUserChoice === "lizard") ||
        (difficultComputerChoice === "lizard" && difficultUserChoice === "paper") ||
        (difficultComputerChoice === "lizard" && difficultUserChoice === "alien") ||
        (difficultComputerChoice === "alien" && difficultUserChoice === "rock") ||
        (difficultComputerChoice === "alien" && difficultUserChoice === "scissors")) {

        this.loseAlert();

      } else {

        this.winAlert();

      }
      winnerWrapDifficult.innerHTML = `
      <img src="./assets/${difficultUserChoice}.png" alt="${difficultUserChoice}">
      <img src="./assets/${difficultComputerChoice}.png" alt="${difficultComputerChoice}">
      `
    };


  //Alerts
  winAlert() {
    this.user.wins++;
    userWins.innerText = `${this.user.wins}`;
    this.user.saveWinsToStorage();
    this.computer.saveWinsToStorage();
    if (this.type === "classic") {
      resultTextClassic.innerText = "You won against the computer!";
      setTimeout(classicGamePage, 2000);
      displayWinnerClassic();
    } else {
      resultTextDifficult.innerText = "You won against the computer!";
      setTimeout(difficultGamePage, 2000);
      displayWinnerDifficult();
    }
  };

  loseAlert() {
    this.computer.wins++;
    computerWins.innerText = `${this.computer.wins}`;
    this.user.saveWinsToStorage();
    this.computer.saveWinsToStorage();
    if (this.type === "classic") {
      resultTextClassic.innerText = "Uh-oh. Win for computer. Try again!";
      displayWinnerClassic();
      setTimeout(classicGamePage, 2000);
    } else {
      resultTextDifficult.innerText = "Uh-oh. Win for computer. Try again!";
      setTimeout(difficultGamePage, 2000);
      displayWinnerDifficult();
    }
  };

  tieAlert() {
    if (this.type === "classic") {
      resultTextClassic.innerText = "TIE!";
      displayWinnerClassic();
      setTimeout(classicGamePage, 2000);
    } else {
      resultTextDifficult.innerText = "TIE!";
      setTimeout(difficultGamePage, 2000);
      displayWinnerDifficult();
    }
  };

};
