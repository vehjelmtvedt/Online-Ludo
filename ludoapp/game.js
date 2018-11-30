var game = function(gameID) {
    this.playerA = null;
    this.playerB = null;
    this.playerC = null;
    this.playerD = null;
    this.playerARoute = null;
    this.playerBRoute = null;
    this.playerCRoute = null;
    this.playerDRoute = null;
    this.id = gameID;
    this.gameState = "0 JOINED";
    this.currentPlayerTurn = null;
}

game.prototype.transitionState = {};
game.prototype.transitionState["0 JOINED"] = 0;
game.prototype.transitionState["1 JOINED"] = 1;
game.prototype.transitionState["2 JOINED"] = 2;
game.prototype.transitionState["3 JOINED"] = 3;
game.prototype.transitionState["4 JOINED"] = 4;
game.prototype.transitionState["A"] = 5; //A won
game.prototype.transitionState["B"] = 6; //B won
game.prototype.transitionState["A"] = 7; //C won
game.prototype.transitionState["B"] = 8; //D won
game.prototype.transitionState["ABORTED"] = 9;

game.prototype.addPlayer = function (p) {

    if (this.hasFourConnectedPlayers() == true) {
        console.log("Full game, cannot add player");
        return;
    }

    console.assert(p instanceof Object, "%s: Expecting an object (WebSocket), got a %s", arguments.callee.name, typeof p);

    if (this.gameState != "0 JOINED" && this.gameState != "1 JOINED" && this.gameState != "2 JOINED" && this.gameState != "3 JOINED" && this.gameState != "4 JOINED") {
        return new Error("Invalid call to addPlayer, current state is %s", this.gameState);
    }

    /*
     * revise the game state
     */ 
    if (this.playerA == null) {
        this.playerA = p;
        return "A";
    }
    else if (this.playerB == null) {
        this.playerB = p;
        return "B";
    }
    else if (this.playerC == null) {
        this.playerB = p;
        return "B";
    }
    else if (this.playerD == null) {
        this.playerB = p;
        return "B";
    }
};


game.prototype.hasFourConnectedPlayers = function () {
    return (this.gameState == "4 JOINED");
};

module.exports = game;