var main = function() {
    "use strict";

    let name = prompt("Please enter your name: ", "Player 1");
    
    $("div.player1 h3").text(name); 
    

    $("#diceicon1").on("click", function (event) {
        diceRoll();
    });

    player.setName(name);


    
};

$(document).ready(main);

var diceRoll = function() {
    var diceResult = Math.floor(Math.random() * 6) + 1;
    $("#diceicon1").attr("src", "images/" + diceResult + ".png");
       
    return diceResult;
};




var player = ( function() {

    let name;
    let currentTurns = 0;
    var figurinesOnTable = 0;
    var figurinesInHome = 4;
    var figurinesInFinish = 0;
    var playerID = 1;

    return {
        setName : function(nameIn) {
            name = nameIn;
        },
        getName : function() {
            return name;
        },
        setCurrentTurns : function(turnsIn) {
            currentTurns = turnsIn;
        },
        getCurrentTurns : function() {
            return currentTurns;
        },
        getFigurinesOnTable : function() {
            return figurinesOnTable;
        },
        incFigurinesOnTable : function() {
            figurinesOnTable++;
        },
        decFigurinesOnTable : function() {
            figurinesOnTable--;
        },
        getFigurinesInHome : function() {
            return figurinesInHome;
        },
        incFigurinesInHome : function() {
            figurinesInHome++;
        },
        decFigurinesInHome : function() {
            figurinesInHome--;
        },
        getFigurinesInFinish : function() {
            return figurinesInFinish;
        },
        incFigurinesInFinish : function() {
            figurinesInFinish++;
        },
        setPlayerID : function(playerIDIn) {
            playerID = playerIDIn;
        },
        getPlayerID : function() {
            return playerID;
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

var gameStats = ( function() {
    var currentPlayerTurn = 0;
})();

 

