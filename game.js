var game = function(gameID) {
    this.playerA = null;
    this.playerB = null;
    this.id = gameID;
    this.gameState = "0 JOINED";
    this.currentPlayerTurn = null;
}

game.prototype.addPlayer = function (p) {

    if (this.hasTwoConnectedPlayers() == true) {
        console.log("Full game, cannot add player");
        return;
    }

    console.assert(p instanceof Object, "%s: Expecting an object (WebSocket), got a %s", arguments.callee.name, typeof p);

    if (this.playerA == null) {
        this.playerA = p;
        return "A";
    }
    else if (this.playerB == null) {
        this.playerB = p;
        return "B";
    }
    
};


game.prototype.hasTwoConnectedPlayers = function () {
    return (this.playerA != null && this.playerB != null);
};

module.exports = game;