class Player {
  constructor(data) {
    this.name = data.name;
    this.token = data.token;
    this.wins = 0;
  }

  saveWinsToStorage() {
    var storeUserWins = game.user.wins;
    var storeComputerWins = game.computer.wins;
    localStorage.setItem("userWins", JSON.stringify(storeUserWins));
    localStorage.setItem("computerWins", JSON.stringify(storeComputerWins));
    localStorage.setItem("userWins", storeUserWins);
    localStorage.setItem("computerWins", storeComputerWins);
  };

  retrieveUserWinsFromStorage() {
    var userWinsFromStorage = localStorage.getItem("userWins");
    var userWins = JSON.parse(userWinsFromStorage);
    this.wins = userWins;
    return userWins;
    var computerWinsFromStorage = localStorage.getItem("computerWins");
    var computerWins = JSON.parse(computerWinsFromStorage);
    this.wins = computerWins;
    return computerWins;
  };

};
