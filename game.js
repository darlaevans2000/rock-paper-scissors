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
      var randomDifficultChoice = this.getRandomIndex(difficultChoices)
      return difficultChoices[randomClassicChoice];
    }
  };
  // winners
  // this.computer.wins.innerText = `Wins: ${this.computer.wins}`;
  // this.user.wins.innerText = `Wins: ${this.user.wins}`;

  //classic game
  determineWinner(choice) {
    if (this.type === "classic") {
      var classicComputerChoice = this.randomChoice();
      var classicUserChoice = choice;

      classicGame.innerHTML = `
    <img src="./assets/${classicUserChoice}.png" alt="${classicUserChoice}">
    <img src="./assets/${classicComputerChoice}.png" alt="${classicComputerChoice}">
    `
      if ((classicComputerChoice === "rock" && classicUserChoice === "rock") ||
        (classicComputerChoice === "paper" && classicUserChoice === "paper") ||
        (classicComputerChoice === "scissors" && classicUserChoice === "scissors")) {

        this.tieAlert();

      } else if ((classicComputerChoice === "paper" && classicUserChoice === "rock") ||
        (classicComputerChoice === "scissors" && classicUserChoice === "paper") ||
        (classicComputerChoice === "rock" && classicUserChoice === "scissors")) {

        this.loseAlert();

      } else {

        this.winAlert();
      }

    }
  };

  winAlert() {
    resultText.innerText = "You won against the computer!";
   this.user.wins++;
   userWins.innerText = `Wins: ${this.user.wins}`;
   //save wins to storage
   // show selection page
 };

 loseAlert() {
   resultText.innerText = "Uh-oh. Win for computer. Try again!";
   this.computer.wins++;
   computerWins.innerText = `Wins: ${this.computer.wins}`;
 };

 tieAlert() {
   resultText.innerText = "TIE!";
 };
};
