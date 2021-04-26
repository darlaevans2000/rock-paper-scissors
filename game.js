class Game{
  constructor(){
    this.user = new Player({name: "User", token: "😄"});
    this.computer = new Player({name: "Computer", token: "💻"});
    this.type = "classic" || "difficult";
  }
  getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  };
  randomChoiceClassic(){
    if (this.type === "classic") {
      var randomClassicChoice = this.getRandomIndex(classicChoices);
      return classicChoices[randomClassicChoice];
    } else {
      var randomDifficultChoice = this.getRandomIndex(difficultChoices)
      return difficultChoices[randomClassicChoice]
    }
  };
}
