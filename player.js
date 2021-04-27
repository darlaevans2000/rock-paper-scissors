class Player {
  constructor(data) {
    this.name = data.name;
    this.token = data.token;
    this.wins = 0;
  }

  saveWinsToStorage(){
  var storeUserWins = game.user.wins;
   var storeComputerWins = game.computer.wins;
   localStorage.setItem("humanWins", JSON.stringify(storeUserWins));
   localStorage.setItem("computerWins", JSON.stringify(storeComputerWins));
   localStorage.setItem("humanWins", storeUserWins);
   localStorage.setItem("computerWins", storeComputerWins);
  }

  retrieveUserWinsFromStorage(){
    var userWinsFromStorage = localStorage.getItem("humanWins");
    var userWins = JSON.parse(userWinsFromStorage);
    this.wins = userWins;
    return userWins;
  }

  retrieveComputerWinsFromStorage(){
    var computerWinsFromStorage = localStorage.getItem("computerWins");
    var computerWins = JSON.parse(computerWinsFromStorage);
    this.wins = computerWins;
    return computerWins;
  }
  
};
