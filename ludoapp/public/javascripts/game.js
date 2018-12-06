var diceNumber = -1;
var yourTurn = false;
var diceRolled = true;

//set name and change title
function setName(playerID, name) {
    console.log("Set name for player " + playerID);
    document.getElementById(`player${playerID}`).innerHTML = name;
    return name;
}

function Player(nameIn, colorIn, routeIn, homeIn, playerIDIn, currentPosition1In, currentPosition2In, currentPosition3In, currentPosition4In) {
    return {
        name: nameIn,
        color: colorIn,
        route: routeIn,
        home: homeIn,
        playerID: playerIDIn,
        currentPosition1: currentPosition1In,
        currentPosition2: currentPosition2In,
        currentPosition3: currentPosition3In,
        currentPosition4: currentPosition4In,
        score: 0,
    }
}

var OP1 = null;
var thisPlayer = null;


//general route var passed to all move functions.
var Route = null;
var Home = null;


var socket = new WebSocket("ws://localhost:3000");

socket.onmessage = function(event){

    //determine this player

    if (event.data === "A") {
        thisPlayer = new Player(setName("A", prompt("Enter your in-game name: ", "Player 1")), "green", greenRoute(), greenHome(), "A", -1, -1, -1, -1);
        populateBoard(thisPlayer.home, thisPlayer.color);
    }
    else if (event.data === "B") {
        thisPlayer = new Player(setName("B", prompt("Enter your in-game name: ", "Player 2")), "blue", blueRoute(), blueHome(), "B", -1, -1, -1, -1);
        populateBoard(thisPlayer.home, thisPlayer.color);
    }

    //give turn to this player
    
    else if (event.data === "turn") {
        console.log("Received one move");
        yourTurn = true;
        diceRolled = false;
    }

    //determine Opposing Player
    else if (event.data == "OP A") {

        if (thisPlayer.playerID === "B") {
            OP1 = new Player(null, "green", greenRoute(), greenHome(), "A", -1, -1, -1, -1);
            populateBoard(OP1.home, OP1.color);
            socket.send("NAME " + thisPlayer.playerID + ": " + thisPlayer.name);
        }
        else {
            return;
        }  
    } 
    else if (event.data == "OP B") {
        
        if (thisPlayer.playerID === "A") {
            OP1 = new Player(null, "blue", blueRoute(), blueHome(), "B", -1, -1, -1, -1);
            populateBoard(OP1.home, OP1.color);
            socket.send("NAME " + thisPlayer.playerID + ": " + thisPlayer.name);
        }
        else {
            return;
        }
        
    }
    
    //set name of opposing player
    else if (event.data.includes("NAME A")) {
        let a = event.data.split(" ");
        OP1.name = setName(OP1.playerID, a[2]);
    }
    else if (event.data.includes("NAME B")) {
        let a = event.data.split(" ");
        OP1.name = setName(OP1.playerID, a[2]);
    }
    

    //roll dice of OP1.
    else if (event.data.includes("DICEROLL A")) {
        if (event.data.includes("1")) {
            diceAnimation("A", 1);
        }
        else if (event.data.includes("2")) {
            diceAnimation("A", 2);
        }
        else if (event.data.includes("3")) {
            diceAnimation("A", 3);
        }
        else if (event.data.includes("3")) {
            diceAnimation("A", 3);
        }
        else if (event.data.includes("4")) {
            diceAnimation("A", 4);
        }
        else if (event.data.includes("5")) {
            diceAnimation("A", 5);
        }
        else if (event.data.includes("6")) {
            diceAnimation("A", 6);
        }
    }
    else if (event.data.includes("DICEROLL B")) {
        if (event.data.includes("1")) {
            diceAnimation("B", 1);
        }
        else if (event.data.includes("2")) {
            diceAnimation("B", 2);
        }
        else if (event.data.includes("3")) {
            diceAnimation("B", 3);
        }
        else if (event.data.includes("3")) {
            diceAnimation("B", 3);
        }
        else if (event.data.includes("4")) {
            diceAnimation("B", 4);
        }
        else if (event.data.includes("5")) {
            diceAnimation("B", 5);
        }
        else if (event.data.includes("6")) {
            diceAnimation("B", 6);
        }
    }
    
    //Move pawn from home of OP1.

    else if (event.data.includes("MOVEDHOME A")) {
        //cellID, color, home, route, playerID
        let a = event.data.split(" ");
        movePieceFromHomeRemote(a[2], "green", greenHome(), greenRoute(), OP1.playerID);

    }
    else if (event.data.includes("MOVEDHOME B")) {

        let a = event.data.split(" ");
        movePieceFromHomeRemote(a[2], "blue", blueHome(), blueRoute(), OP1.playerID);

    }
    
    //Move pawn of OP1 normally.

    else if (event.data.includes("NMOVE A")) {
        console.log("received normal move");
        let a = event.data.split(" ");
        //cellID, color, route, playerID, 
        movePieceRemote(a[2], a[3]);
    }
    else if (event.data.includes("NMOVE B")) {
        console.log("received normal move");
        let a = event.data.split(" ");
        movePieceRemote(a[2], a[3]);
    }
    else if (event.data.includes("WIN")) {
        alert("You lost");
        yourTurn = false;
    }
    
}

//routes, one route is assigned to each player
function greenRoute (){ return [document.getElementById("c7-2"), document.getElementById("c7-3"), document.getElementById("c7-4"), 
    document.getElementById("c7-5"), document.getElementById("c7-6")
    , document.getElementById("c6-7"), document.getElementById("c5-7"), document.getElementById("c4-7")
    , document.getElementById("c3-7"), document.getElementById("c2-7"), document.getElementById("c1-7")
    , document.getElementById("c1-8"), document.getElementById("c1-9"), document.getElementById("c2-9")
    , document.getElementById("c3-9"), document.getElementById("c4-9"), document.getElementById("c5-9")
    , document.getElementById("c6-9"), document.getElementById("c7-10")
    , document.getElementById("c7-11"), document.getElementById("c7-12"), document.getElementById("c7-13")
    , document.getElementById("c7-14"), document.getElementById("c7-15"), document.getElementById("c8-15")
    , document.getElementById("c9-15"), document.getElementById("c9-14"), document.getElementById("c9-13")
    , document.getElementById("c9-12"), document.getElementById("c9-11"), document.getElementById("c9-10")
    , document.getElementById("c10-9"), document.getElementById("c11-9")
    , document.getElementById("c12-9"), document.getElementById("c13-9"), document.getElementById("c14-9")
    , document.getElementById("c15-9"), document.getElementById("c15-8"), document.getElementById("c15-7")
    , document.getElementById("c14-7"), document.getElementById("c13-7"), document.getElementById("c12-7")
    , document.getElementById("c11-7"), document.getElementById("c10-7")
    , document.getElementById("c9-6"), document.getElementById("c9-5"), document.getElementById("c9-4")
    , document.getElementById("c9-3"), document.getElementById("c9-2"), document.getElementById("c9-1")
    , document.getElementById("c8-1"), document.getElementById("c8-2"), document.getElementById("c8-3")
    , document.getElementById("c8-4"), document.getElementById("c8-5"), document.getElementById("c8-6")
    , document.getElementById("c8-7")];}

function greenHome () { return [document.getElementById("c3-3"), document.getElementById("c3-4"), document.getElementById("c4-3"), 
document.getElementById("c4-4")];}


function blueRoute () { return [document.getElementById("c9-14"), document.getElementById("c9-13"), document.getElementById("c9-12"), 
    document.getElementById("c9-11"), document.getElementById("c9-10")
    , document.getElementById("c10-9"), document.getElementById("c11-9"), document.getElementById("c12-9")
    , document.getElementById("c13-9"), document.getElementById("c14-9"), document.getElementById("c15-9")
    , document.getElementById("c15-8"), document.getElementById("c15-7"), document.getElementById("c14-7")
    , document.getElementById("c13-7"), document.getElementById("c12-7"), document.getElementById("c11-7")
    , document.getElementById("c10-7"), document.getElementById("c9-6")
    , document.getElementById("c9-5"), document.getElementById("c9-4"), document.getElementById("c9-3")
    , document.getElementById("c9-2"), document.getElementById("c9-1"), document.getElementById("c8-1")
    , document.getElementById("c7-1"), document.getElementById("c7-2"), document.getElementById("c7-3")
    , document.getElementById("c7-4"), document.getElementById("c7-5"), document.getElementById("c7-6")
    , document.getElementById("c6-7"), document.getElementById("c5-7")
    , document.getElementById("c4-7"), document.getElementById("c3-7"), document.getElementById("c2-7")
    , document.getElementById("c1-7"), document.getElementById("c1-8"), document.getElementById("c1-9")
    , document.getElementById("c2-9"), document.getElementById("c3-9"), document.getElementById("c4-9")
    , document.getElementById("c5-9"), document.getElementById("c6-9")
    , document.getElementById("c7-10"), document.getElementById("c7-11"), document.getElementById("c7-12")
    , document.getElementById("c7-13"), document.getElementById("c7-14"), document.getElementById("c7-15")
    , document.getElementById("c8-15"), document.getElementById("c8-14"), document.getElementById("c8-13")
    , document.getElementById("c8-12"), document.getElementById("c8-11"), document.getElementById("c8-10")
    , document.getElementById("c8-9")];}

function blueHome () { return [document.getElementById("c12-12"), document.getElementById("c12-13"), document.getElementById("c13-12"), 
document.getElementById("c13-13")];}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function diceAnimation(playerID, result) {
    let diceicon = document.getElementById(`diceicon${playerID}`);
    for (let i = 0; i < 10; i++) {
        var rNumber = Math.floor(Math.random()*6+1);
        diceicon.src = `./images/${rNumber}.png`;
        await sleep(100);
            
            
    }
    diceicon.src = `./images/${result}.png`;
};


function diceRoll() {
    if (!yourTurn) {
        return;
    }
    if (diceRolled) {
        return;
    }

    let diceResult = Math.floor(Math.random()*6+1);

    diceNumber = diceResult;
    console.log("You rolled: " + diceNumber);
    socket.send("DICEROLL " + thisPlayer.playerID + diceResult);

    //Dice animation
    diceAnimation(thisPlayer.playerID, diceResult)

    //if all your pieces are in home and you did not roll 6, move on to the next player.
    if (diceNumber !== 6 && thisPlayer.currentPosition1 === -1 && thisPlayer.currentPosition2 === -1 && 
        thisPlayer.currentPosition3 === -1 && thisPlayer.currentPosition4 === -1) {
        socket.send("NO MOVE");
        yourTurn = false;
        return;
    }
    diceRolled = true;
}


function movePiece(cellID)
{
    if (!yourTurn) {
        return;
    }
    else if (diceNumber === -1) {
        return;
    }

    
    
    
    if (document.getElementById(cellID) === thisPlayer.route[thisPlayer.currentPosition1]) {
        if (thisPlayer.currentPosition1 + diceNumber > thisPlayer.route.length) {
            yourTurn = true;
        }
        else if (thisPlayer.currentPosition1 + diceNumber === thisPlayer.route.length) {
            moveAnimation(thisPlayer.currentPosition1 + diceNumber, thisPlayer.currentPosition1, thisPlayer.playerID);
            thisPlayer.currentPosition1 += diceNumber;
            socket.send("NMOVE " + thisPlayer.playerID + " " + cellID + " " + diceNumber); 
            thisPlayer.score++;
            if (score === 4) {
                //congrats you win

            }
            else {
                if (diceNumber === 6) {
                    yourTurn = true;
                    diceRolled = false;
                }
                else {
                    yourTurn = false;
                    diceRolled = true;
                    console.log("Piece was moved, no longer yuor turn");
                    socket.send("turn");
                }
                diceNumber = -1;
                return; 
            }
        }
        moveAnimation(thisPlayer.currentPosition1 + diceNumber, thisPlayer.currentPosition1, thisPlayer.playerID);
        thisPlayer.currentPosition1 += diceNumber;
        socket.send("NMOVE " + thisPlayer.playerID + " " + cellID + " " + diceNumber); 

        if (diceNumber === 6) {
            yourTurn = true;
            diceRolled = false;
        }
        else {
            yourTurn = false;
            diceRolled = true;
            console.log("Piece was moved, no longer yuor turn");
            socket.send("turn");
        }
        diceNumber = -1;
        return;
    }

    else if (document.getElementById(cellID) === thisPlayer.route[thisPlayer.currentPosition2]) {
        if (thisPlayer.currentPosition2 + diceNumber > thisPlayer.route.length) {
            return;
        }
        else if (thisPlayer.currentPosition2 + diceNumber === thisPlayer.route.length) {
            moveAnimation(thisPlayer.currentPosition2 + diceNumber, thisPlayer.currentPosition2, thisPlayer.playerID);
            thisPlayer.currentPosition2 += diceNumber;
            socket.send("NMOVE " + thisPlayer.playerID + " " + cellID + " " + diceNumber); 
            thisPlayer.score++;
            if (score === 4) {
                //congrats you win

            }
            else {
                if (diceNumber === 6) {
                    yourTurn = true;
                    diceRolled = false;
                }
                else {
                    yourTurn = false;
                    diceRolled = true;
                    console.log("Piece was moved, no longer yuor turn");
                    socket.send("turn");
                }
                diceNumber = -1;
                return; 
            }
        }
        moveAnimation(thisPlayer.currentPosition1 + diceNumber, thisPlayer.currentPosition1, thisPlayer.playerID);
        thisPlayer.currentPosition1 += diceNumber;
        socket.send("NMOVE " + thisPlayer.playerID + " " + cellID + " " + diceNumber); 

        if (diceNumber === 6) {
            yourTurn = true;
            diceRolled = false;
        }
        else {
            yourTurn = false;
            diceRolled = true;
            console.log("Piece was moved, no longer yuor turn");
            socket.send("turn");
        }
        diceNumber = -1;
        return;
    }

    else if (document.getElementById(cellID) === thisPlayer.route[thisPlayer.currentPosition3]) {
        if (thisPlayer.currentPosition3 + diceNumber > thisPlayer.route.length) {
            return;
        }
        else if (thisPlayer.currentPosition3 + diceNumber === thisPlayer.route.length) {
            moveAnimation(thisPlayer.currentPosition3 + diceNumber, thisPlayer.currentPosition3, thisPlayer.playerID);
            thisPlayer.currentPosition3 += diceNumber;
            socket.send("NMOVE " + thisPlayer.playerID + " " + cellID + " " + diceNumber); 
            thisPlayer.score++;
            if (score === 4) {
                //congrats you win

            }
            else {
                if (diceNumber === 6) {
                    yourTurn = true;
                    diceRolled = false;
                }
                else {
                    yourTurn = false;
                    diceRolled = true;
                    console.log("Piece was moved, no longer yuor turn");
                    socket.send("turn");
                }
                diceNumber = -1;
                return; 
            }
        }
        moveAnimation(thisPlayer.currentPosition1 + diceNumber, thisPlayer.currentPosition1, thisPlayer.playerID);
        thisPlayer.currentPosition1 += diceNumber;
        socket.send("NMOVE " + thisPlayer.playerID + " " + cellID + " " + diceNumber); 

        if (diceNumber === 6) {
            yourTurn = true;
            diceRolled = false;
        }
        else {
            yourTurn = false;
            diceRolled = true;
            console.log("Piece was moved, no longer yuor turn");
            socket.send("turn");
        }
        diceNumber = -1;
        return;
    }

    else if (document.getElementById(cellID) === thisPlayer.route[thisPlayer.currentPosition4]) {
        if (thisPlayer.currentPosition4 + diceNumber > thisPlayer.route.length) {
            return;
        }
        else if (thisPlayer.currentPosition4 + diceNumber === thisPlayer.route.length) {
            moveAnimation(thisPlayer.currentPosition4 + diceNumber, thisPlayer.currentPosition4, thisPlayer.playerID);
            thisPlayer.currentPosition4 += diceNumber;
            socket.send("NMOVE " + thisPlayer.playerID + " " + cellID + " " + diceNumber); 
            thisPlayer.score++;
            if (score === 4) {
                
                alert("Player " + thisPlayer.name + " won the game");
                socket.send(thisPlayer.playerID + " WIN");
                yourTurn = false;

            }
            else {
                if (diceNumber === 6) {
                    yourTurn = true;
                    diceRolled = false;
                }
                else {
                    yourTurn = false;
                    diceRolled = true;
                    console.log("Piece was moved, no longer yuor turn");
                    socket.send("turn");
                }
                diceNumber = -1;
                return; 
            }
        }
        moveAnimation(thisPlayer.currentPosition1 + diceNumber, thisPlayer.currentPosition1, thisPlayer.playerID);
        thisPlayer.currentPosition1 += diceNumber;
        socket.send("NMOVE " + thisPlayer.playerID + " " + cellID + " " + diceNumber); 

        if (diceNumber === 6) {
            yourTurn = true;
            diceRolled = false;
        }
        else {
            yourTurn = false;
            diceRolled = true;
            console.log("Piece was moved, no longer yuor turn");
            socket.send("turn");
        }
        diceNumber = -1;
        return;
    }

    else {
        return;
    }
}

//movement animation
async function moveAnimation(currPos, prevPos, playerID) {
    let color;
    let localRoute;
    currPos = parseInt(currPos);
    prevPos = parseInt(prevPos);
    
    if (playerID === "A") {
        color = "green";
        localRoute = greenRoute();
    }
    else if (playerID === "B") {
        color = "blue";
        localRoute = blueRoute();
    }
    

    for (let i = prevPos; i <= currPos; i++) {

        localRoute[i].style.backgroundImage = `url("../images/${color}pawn.png")`;
        await sleep(100);

        localRoute[i].style.backgroundImage = ""; 

    }
    localRoute[currPos].style.backgroundImage = `url("../images/${color}pawn.png")`;
    localRoute[prevPos].style.backgroundImage = ""; 
    
    
    if (playerID === thisPlayer.playerID) {
        restorePositions();
    }
    else if (playerID === OP1.playerID) {
        restorePositionsOP();
    }
};


async function restorePositions() {

    if (thisPlayer.currentPosition1 >= 0) {
        thisPlayer.route[thisPlayer.currentPosition1].style.backgroundImage = `url("../images/${thisPlayer.color}pawn.png")`;
    }
    else if (thisPlayer.currentPosition2 >= 0) {
        thisPlayer.route[thisPlayer.currentPosition2].style.backgroundImage = `url("../images/${thisPlayer.color}pawn.png")`;
    }
    else if (thisPlayer.currentPosition3 >= 0) {
        thisPlayer.route[thisPlayer.currentPosition3].style.backgroundImage = `url("../images/${thisPlayer.color}pawn.png")`;
    }
    else if (thisPlayer.currentPosition4 >= 0) {
        thisPlayer.route[thisPlayer.currentPosition4].style.backgroundImage = `url("../images/${thisPlayer.color}pawn.png")`;
    }
}
async function restorePositionsOP() {

    if (OP1.currentPosition1 >= 0) {
        OP1.route[OP1.currentPosition1].style.backgroundImage = `url("../images/${OP1.color}pawn.png")`;
    }
    else if (OP1.currentPosition2 >= 0) {
        OP1.route[OP1.currentPosition2].style.backgroundImage = `url("../images/${OP1.color}pawn.png")`;
    }
    else if (OP1.currentPosition3 >= 0) {
        OP1.route[OP1.currentPosition3].style.backgroundImage = `url("../images/${OP1.color}pawn.png")`;
    }
    else if (OP1.currentPosition4 >= 0) {
        OP1.route[OP1.currentPosition4].style.backgroundImage = `url("../images/${OP1.color}pawn.png")`;
    }
}


function movePieceFromHome(cellID) {

    if (diceNumber !== 6) {
        return;
    }
    if (!yourTurn) {
        return;
    } 
    
    if (document.getElementById(cellID) === thisPlayer.home[0]) {
        thisPlayer.home[0].style.backgroundImage = "";
        thisPlayer.route[0].style.backgroundImage = `url("../images/${thisPlayer.color}pawn.png")`;
        thisPlayer.currentPosition1 = 0;
        socket.send("MOVEDHOME " + thisPlayer.playerID + " " + cellID);
        diceNumber = -1;
        yourTurn = true;
        diceRolled = false;
    }

    else if (document.getElementById(cellID) === thisPlayer.home[1]) {
        thisPlayer.home[1].style.backgroundImage = "";
        thisPlayer.route[0].style.backgroundImage = `url("../images/${thisPlayer.color}pawn.png")`;
        thisPlayer.currentPosition2 = 0;
        socket.send("MOVEDHOME " + thisPlayer.playerID + " " + cellID);
        diceNumber = -1;
        yourTurn = true;
        diceRolled = false;
    }
    else if (document.getElementById(cellID) === thisPlayer.home[2]) {
        thisPlayer.home[2].style.backgroundImage = "";
        thisPlayer.route[0].style.backgroundImage = `url("../images/${thisPlayer.color}pawn.png")`;
        thisPlayer.currentPosition3 = 0;
        socket.send("MOVEDHOME " + thisPlayer.playerID + " " + cellID);
        diceNumber = -1;
        yourTurn = true;
        diceRolled = false;
    }
    else if (document.getElementById(cellID) === thisPlayer.home[3]) {
        thisPlayer.home[3].style.backgroundImage = "";
        thisPlayer.route[0].style.backgroundImage = `url("../images/${thisPlayer.color}pawn.png")`;
        thisPlayer.currentPosition4 = 0;
        socket.send("MOVEDHOME " + thisPlayer.playerID + " " + cellID);
        diceNumber = -1;
        yourTurn = true;
        diceRolled = false;
    }
    
    else {
        return;
    }  
}

function movePieceFromHomeRemote(cellID) {

    if (document.getElementById(cellID) === OP1.home[0]) {
        OP1.home[0].style.backgroundImage = "";
        OP1.route[0].style.backgroundImage = `url("../images/${OP1.color}pawn.png")`;
        OP1.currentPosition1 = 0;
        
    }

    else if (document.getElementById(cellID) === OP1.home[1]) {
        OP1.home[1].style.backgroundImage = "";
        OP1.route[0].style.backgroundImage = `url("../images/${OP1.color}pawn.png")`;
        OP1.currentPosition2 = 0;
    }
    else if (document.getElementById(cellID) === OP1.home[2]) {
        OP1.home[2].style.backgroundImage = "";
        OP1.route[0].style.backgroundImage = `url("../images/${OP1.color}pawn.png")`;
        OP1.currentPosition3 = 0;

    }
    else if (document.getElementById(cellID) === OP1.home[3]) {
        OP1.home[3].style.backgroundImage = "";
        OP1.route[0].style.backgroundImage = `url("../images/${OP1.color}pawn.png")`;
        OP1.currentPosition4 = 0;

    }
    
    else {
        return;
    }  
}


function movePieceRemote(cellID, dNumber) {
    dNumber = parseInt(dNumber, 10);
    if (document.getElementById(cellID) === OP1.route[OP1.currentPosition1]) {
        moveAnimation(OP1.currentPosition1 + dNumber, OP1.currentPosition1, OP1.playerID);
        OP1.currentPosition1 += dNumber;
        return;
    }
    else if (document.getElementById(cellID) === OP1.route[OP1.currentPosition2]) {
        moveAnimation(OP1.currentPosition2 + dNumber, OP1.currentPosition2, OP1.playerID);
        OP1.currentPosition2 += dNumber;
        return;
    }
    else if (document.getElementById(cellID) === OP1.route[OP1.currentPosition3]) {
        moveAnimation(OP1.currentPosition3 + dNumber, OP1.currentPosition3, OP1.playerID);
        OP1.currentPosition3 += dNumber;
        return;
    }
    else if (document.getElementById(cellID) === OP1.route[OP1.currentPosition4]) {
        moveAnimation(OP1.currentPosition4 + dNumber, OP1.currentPosition4, OP1.playerID);
        OP1.currentPosition4 += dNumber;
        return;
    }
}


function populateBoard(home, color) {
    home[0].style.backgroundImage = `url("../images/${color}pawn.png")`;
    home[1].style.backgroundImage = `url("../images/${color}pawn.png")`;
    home[2].style.backgroundImage = `url("../images/${color}pawn.png")`;
    home[3].style.backgroundImage = `url("../images/${color}pawn.png")`;
};













