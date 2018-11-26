var diceNumber = 0;
var currentPosition = 0;



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

game.prototype.getCurrentPlayer() = function() {
    return this.currentPlayer;
};

game.prototype.hasFourConnectedPlayers = function() {
    return (this.gameState == "4 JOINED");
};

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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function diceRoll() {

        
        var diceResult = Math.floor(Math.random()*6+1);
        

        var diceIcon = document.getElementById("diceicon1");
        diceNumber = diceResult;
        console.log("You rolled: " + diceNumber);

        //Dice animation

        

        ( async function diceAnimation() {
            for (let i = 0; i < 10; i++) {
                var rNumber = Math.floor(Math.random()*6+1);
                diceIcon.src = `./images/${rNumber}.png`;
                await sleep(100);
                console.log(i);
                
            }
            diceIcon.src = `./images/${diceNumber}.png`;
        })();
}


function movePiece()
{
    
    
    

    var gridGreen = [document.getElementById("c7-2"), document.getElementById("c7-3"), document.getElementById("c7-4"), 
    document.getElementById("c7-5"), document.getElementById("c7-6"), document.getElementById("c7-7")
    , document.getElementById("c6-7"), document.getElementById("c5-7"), document.getElementById("c4-7")
    , document.getElementById("c3-7"), document.getElementById("c2-7"), document.getElementById("c1-7")
    , document.getElementById("c1-8"), document.getElementById("c1-9"), document.getElementById("c2-9")
    , document.getElementById("c3-9"), document.getElementById("c4-9"), document.getElementById("c5-9")
    , document.getElementById("c6-9"), document.getElementById("c7-9"), document.getElementById("c7-10")
    , document.getElementById("c7-11"), document.getElementById("c7-12"), document.getElementById("c7-13")
    , document.getElementById("c7-14"), document.getElementById("c7-15"), document.getElementById("c8-15")
    , document.getElementById("c9-15"), document.getElementById("c9-14"), document.getElementById("c9-13")
    , document.getElementById("c9-12"), document.getElementById("c9-11"), document.getElementById("c9-10")
    , document.getElementById("c9-9"), document.getElementById("c10-9"), document.getElementById("c11-9")
    , document.getElementById("c12-9"), document.getElementById("c13-9"), document.getElementById("c14-9")
    , document.getElementById("c15-9"), document.getElementById("c15-8"), document.getElementById("c15-7")
    , document.getElementById("c14-7"), document.getElementById("c13-7"), document.getElementById("c12-7")
    , document.getElementById("c11-7"), document.getElementById("c10-7"), document.getElementById("c9-7")
    , document.getElementById("c9-6"), document.getElementById("c9-5"), document.getElementById("c9-4")
    , document.getElementById("c9-3"), document.getElementById("c9-2"), document.getElementById("c9-1")
    , document.getElementById("c8-1"), document.getElementById("c8-2"), document.getElementById("c8-3")
    , document.getElementById("c8-4"), document.getElementById("c8-5"), document.getElementById("c8-6")
    , document.getElementById("c8-7")];


    let previousPosition = currentPosition;
    currentPosition += diceNumber;
    

    //movement animation

    ( async function moveAnimation() {
        for (let i = previousPosition; i <= currentPosition; i++) {
            gridGreen[i].style.backgroundImage = "url('./images/figurine_blue.jpg')";

            await sleep(100);
            gridGreen[i].style.backgroundImage = "";
            
        }
        gridGreen[currentPosition].style.backgroundImage = "url('./images/figurine_blue.jpg')"; 
        gridGreen[previousPosition].style.backgroundImage = ""; 
        
    })();
    

    
    
    
}











