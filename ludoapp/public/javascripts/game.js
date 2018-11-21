var main = function() {
    "use strict";


    let name = prompt("Please enter your name: ", "Player 1");
    player.setName(name);
    
    $("div.player1 h3").text(name);
    

    $("#diceicon1").on("click", function (event) {
        diceRoll();
    });

    
}

var diceRoll = function() {
    var diceResult = Math.floor(Math.random() * 6) + 1;
    $("#diceicon1").attr("src", "images/" + diceResult + ".png");
       
    return diceResult;
};


var player = ( function() {

    let name = name;
    let currentTurns = 0;
    var figurinesOnTable = 0;
    var currentPlayerTurn = 0;
    var figurinesInHome = 4;
    var figurinesInFinish = 0;
    var playerID = 1;

    return {
        setName : function(nameIn) {
            name = nameIn;
        }
    }




})();

var figurine = ( function() {
    var isAbleToMove = false;
    var position = 0;
    var onAnotherPiece = true;
    var killedByAnotherPiece = 0;
    var color = "blue";
    var ownedBy = 1;
})();


$(document).ready(main);
