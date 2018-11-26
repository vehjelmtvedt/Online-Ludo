var game = function(gameID) {
    this.playerA = null;
    this.playerB = null;
    this.playerC = null;
    this.playerD = null;
    this.id = gameID;
    this.gameState = "0 JOINED";
    this.currentPlayer = null;

};

game.prototype.transitionStates = {};
game.prototype.transitionStates["0 JOINED"] = 0;
game.prototype.transitionStates["1 JOINED"] = 1;
game.prototype.transitionStates["2 JOINED"] = 2;
game.prototype.transitionStates["3 JOINED"] = 3;
game.prototype.transitionStates["4 JOINED"] = 4;
game.prototype.transitionStates["PLAYER DONE"] = 5;
game.prototype.transitionStates["PLAYER1"] = 6; //A won
game.prototype.transitionStates["PLAYER2"] = 7; //A won
game.prototype.transitionStates["PLAYER3"] = 8; //A won
game.prototype.transitionStates["PLAYER4"] = 9; //A won
game.prototype.transitionStates["ABORTED"] = 10;

game.prototype.getCurrentPlayer() {
    return this.currentPlayer;
}

game.prototype.hasFourConnectedPlayers = function() {
    return (this.gameState == "4 JOINED");
}

game.prototype.addPlayer = function(player) {
    console.assert(p instanceof Object);

    if (this.gameState != "1 JOINED" && this.gameState != "2 JOINED" && this.gameState != "3 JOINED" && this.gameState != "4 JOINED") {
        return new Error("Lobby is full, current state is %s", this.gameState);
    }

    if (this.playerA == null) {
        this.playerA = p;
        return "A";
    }

    else if (this.playerB == null) {
        this.playerB = p;
        return "B";
    }

    else if (this.playerC == null) {
        this.playerC = p;
        return "C";
    }

    else {
        this.playerD = p;
        return "D";
    }
};

module.exports = game;









