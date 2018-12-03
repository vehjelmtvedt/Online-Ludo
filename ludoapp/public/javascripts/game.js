var diceNumber = 0;
var movesLeft = 0;

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
    }
}

var OP1 = null;
var OP2 = null;
var OP3 = null;
var OP4 = null;
var thisPlayer = null;


//general route var passed to all move functions.
var Route = null;
var Home = null;


var socket = new WebSocket("ws://localhost:3000");

socket.onmessage = function(event){
    if (event.data === "A") {
        thisPlayer = new Player(setName("A", prompt("Enter your in-game name: ", "Player 1")), "green", greenRoute(), greenHome(), "A", -1, -1, -1, -1);
        populateBoard(thisPlayer.home, thisPlayer.color);
    }
    else if (event.data === "B") {
        thisPlayer = new Player(setName("B", prompt("Enter your in-game name: ", "Player 2")), "yellow", yellowRoute(), yellowHome(), "B", -1, -1, -1, -1);
        populateBoard(thisPlayer.home, thisPlayer.color);
    }
    else if (event.data === "C") {
        thisPlayer = new Player(setName("C", prompt("Enter your in-game name: ", "Player 3")), "blue", blueRoute(), blueHome(), "C", -1, -1, -1, -1);
        populateBoard(thisPlayer.home, thisPlayer.color);
    }
    else if (event.data === "D") {
        thisPlayer = new Player(setName("D", prompt("Enter your in-game name: ", "Player 4")), "red", orangeRoute(), orangeHome(), "D", -1, -1, -1, -1);
        populateBoard(thisPlayer.home, thisPlayer.color);
    }
    else if (event.data === "turn") {
        console.log("Received one move");
        movesLeft = 1;
    }
    else if (event.data == "OP A") {
        OP1 = new Player(null, "green", greenRoute(), greenHome(), "A", -1, -1, -1, -1);
        populateBoard(OP1.home, OP1.color);
        socket.send("NAME " + thisPlayer.playerID + ": " + thisPlayer.name);
        
    } 
    else if (event.data == "OP B") {
        OP2 = new Player(null, "yellow", yellowRoute(), yellowHome(), "B", -1, -1, -1, -1);
        populateBoard(OP2.home, OP2.color);
        socket.send("NAME " + thisPlayer.playerID + ": " + thisPlayer.name);
        
    }
    else if (event.data == "OP C") {
        OP3 = new Player(null, "blue", blueRoute(), blueHome(), "C", -1, -1, -1, -1);
        populateBoard(OP3.home, OP3.color);
        socket.send("NAME " + thisPlayer.playerID + ": " + thisPlayer.name);
    }
    else if (event.data == "OP D") {
        OP4 = new Player(null, "red", orangeRoute(), orangeHome(), "D", -1, -1, -1, -1);
        populateBoard(OP4.home, OP4.color);
        socket.send("NAME " + thisPlayer.playerID + ": " + thisPlayer.name);

    }
    else if (event.data.includes("NAME A")) {
        let a = event.data.split(" ");
        OP1.name = setName(OP1.playerID, a[2]);
    }
    else if (event.data.includes("NAME B")) {
        let a = event.data.split(" ");
        OP2.name = setName(OP2.playerID, a[2]);
    }
    else if (event.data.includes("NAME C")) {
        let a = event.data.split(" ");
        OP3.name = setName(OP3.playerID, a[2]);
    }
    else if (event.data.includes("NAME D")) {
        let a = event.data.split(" ");
        OP4.name = setName(OP4.playerID, a[2]);
    }
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
    else if (event.data.includes("DICEROLL C")) {
        if (event.data.includes("1")) {
            diceAnimation("C", 1);
        }
        else if (event.data.includes("2")) {
            diceAnimation("C", 2);
        }
        else if (event.data.includes("3")) {
            diceAnimation("C", 3);
        }
        else if (event.data.includes("3")) {
            diceAnimation("C", 3);
        }
        else if (event.data.includes("4")) {
            diceAnimation("C", 4);
        }
        else if (event.data.includes("5")) {
            diceAnimation("C", 5);
        }
        else if (event.data.includes("6")) {
            diceAnimation("C", 6);
        }
    }
    else if (event.data.includes("DICEROLL D")) {
        if (event.data.includes("1")) {
            diceAnimation("D", 1);
        }
        else if (event.data.includes("2")) {
            diceAnimation("D", 2);
        }
        else if (event.data.includes("3")) {
            diceAnimation("D", 3);
        }
        else if (event.data.includes("3")) {
            diceAnimation("D", 3);
        }
        else if (event.data.includes("4")) {
            diceAnimation("D", 4);
        }
        else if (event.data.includes("5")) {
            diceAnimation("D", 5);
        }
        else if (event.data.includes("6")) {
            diceAnimation("D", 6);
        }
    }
    else if (event.data.includes("MOVEDHOME A")) {

        let a = event.data.split(" ");
        movePieceFromHomeRemote(a[2], "green", greenHome(), greenRoute());

    }
    else if (event.data.includes("MOVEDHOME B")) {

        let a = event.data.split(" ");
        movePieceFromHomeRemote(a[2], "yellow", yellowHome(), yellowRoute());

    }
    else if (event.data.includes("MOVEDHOME C")) {

        let a = event.data.split(" ");
        movePieceFromHomeRemote(a[2], "blue", blueHome(), blueRoute());

    }
    else if (event.data.includes("MOVEDHOME D")) {

        let a = event.data.split(" ");
        movePieceFromHomeRemote(a[2], "red", orangeHome(), orangeRoute());

    }
    
}

//routes, one route is assigned to each player
function greenRoute (){ return [document.getElementById("c7-2"), document.getElementById("c7-3"), document.getElementById("c7-4"), 
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
    , document.getElementById("c8-7")];}

function greenHome () { return [document.getElementById("c3-3"), document.getElementById("c3-4"), document.getElementById("c4-3"), 
document.getElementById("c4-4")];}

function yellowRoute () { return [document.getElementById("c2-9"), document.getElementById("c3-9"), document.getElementById("c4-9"), 
    document.getElementById("c5-9"), document.getElementById("c6-9"), document.getElementById("c7-9")
    , document.getElementById("c7-10"), document.getElementById("c7-11"), document.getElementById("c7-12")
    , document.getElementById("c7-13"), document.getElementById("c7-14"), document.getElementById("c7-15")
    , document.getElementById("c8-15"), document.getElementById("c9-15"), document.getElementById("c9-14")
    , document.getElementById("c9-13"), document.getElementById("c9-12"), document.getElementById("c9-11")
    , document.getElementById("c9-10"), document.getElementById("c9-9"), document.getElementById("c10-9")
    , document.getElementById("c11-9"), document.getElementById("c12-9"), document.getElementById("c13-9")
    , document.getElementById("c14-9"), document.getElementById("c15-9"), document.getElementById("c15-8")
    , document.getElementById("c15-7"), document.getElementById("c14-7"), document.getElementById("c13-7")
    , document.getElementById("c12-7"), document.getElementById("c11-7"), document.getElementById("c10-7")
    , document.getElementById("c9-7"), document.getElementById("c9-6"), document.getElementById("c9-5")
    , document.getElementById("c9-4"), document.getElementById("c9-3"), document.getElementById("c9-2")
    , document.getElementById("c9-1"), document.getElementById("c8-1"), document.getElementById("c7-1")
    , document.getElementById("c7-2"), document.getElementById("c7-3"), document.getElementById("c7-4")
    , document.getElementById("c7-5"), document.getElementById("c7-6"), document.getElementById("c7-7")
    , document.getElementById("c6-7"), document.getElementById("c5-7"), document.getElementById("c4-7")
    , document.getElementById("c3-7"), document.getElementById("c2-7"), document.getElementById("c1-7")
    , document.getElementById("c1-8"), document.getElementById("c2-8"), document.getElementById("c3-8")
    , document.getElementById("c4-8"), document.getElementById("c5-8"), document.getElementById("c6-8")
    , document.getElementById("c7-8")];}

function yellowHome () { return [document.getElementById("c3-12"), document.getElementById("c3-13"), document.getElementById("c4-12"), 
document.getElementById("c4-13")];}

function blueRoute () { return [document.getElementById("c9-14"), document.getElementById("c9-13"), document.getElementById("c9-12"), 
    document.getElementById("c9-11"), document.getElementById("c9-10"), document.getElementById("c9-9")
    , document.getElementById("c10-9"), document.getElementById("c11-9"), document.getElementById("c12-9")
    , document.getElementById("c13-9"), document.getElementById("c14-9"), document.getElementById("c15-9")
    , document.getElementById("c15-8"), document.getElementById("c15-7"), document.getElementById("c14-7")
    , document.getElementById("c13-7"), document.getElementById("c12-7"), document.getElementById("c11-7")
    , document.getElementById("c10-7"), document.getElementById("c9-7"), document.getElementById("c9-6")
    , document.getElementById("c9-5"), document.getElementById("c9-4"), document.getElementById("c9-3")
    , document.getElementById("c9-2"), document.getElementById("c9-1"), document.getElementById("c8-1")
    , document.getElementById("c7-1"), document.getElementById("c7-2"), document.getElementById("c7-3")
    , document.getElementById("c7-4"), document.getElementById("c7-5"), document.getElementById("c7-6")
    , document.getElementById("c7-7"), document.getElementById("c6-7"), document.getElementById("c5-7")
    , document.getElementById("c4-7"), document.getElementById("c3-7"), document.getElementById("c2-7")
    , document.getElementById("c1-7"), document.getElementById("c1-8"), document.getElementById("c1-9")
    , document.getElementById("c2-9"), document.getElementById("c3-9"), document.getElementById("c4-9")
    , document.getElementById("c5-9"), document.getElementById("c6-9"), document.getElementById("c7-9")
    , document.getElementById("c7-10"), document.getElementById("c7-11"), document.getElementById("c7-12")
    , document.getElementById("c7-13"), document.getElementById("c7-14"), document.getElementById("c7-15")
    , document.getElementById("c8-15"), document.getElementById("c8-14"), document.getElementById("c8-13")
    , document.getElementById("c8-12"), document.getElementById("c8-11"), document.getElementById("c8-10")
    , document.getElementById("c8-9")];}

function blueHome () { return [document.getElementById("c12-12"), document.getElementById("c12-13"), document.getElementById("c13-12"), 
document.getElementById("c13-13")];}

function orangeRoute () { return [document.getElementById("c14-7")
    , document.getElementById("c13-7"), document.getElementById("c12-7"), document.getElementById("c11-7")
    , document.getElementById("c10-7"), document.getElementById("c9-7"), document.getElementById("c9-6")
    , document.getElementById("c9-5"), document.getElementById("c9-4"), document.getElementById("c9-3")
    , document.getElementById("c9-2"), document.getElementById("c9-1"), document.getElementById("c8-1")
    , document.getElementById("c7-1"), document.getElementById("c7-2"), document.getElementById("c7-3")
    , document.getElementById("c7-4"), document.getElementById("c7-5"), document.getElementById("c7-6")
    , document.getElementById("c7-7"), document.getElementById("c6-7"), document.getElementById("c5-7")
    , document.getElementById("c4-7"), document.getElementById("c3-7"), document.getElementById("c2-7")
    , document.getElementById("c1-7"), document.getElementById("c1-8"), document.getElementById("c1-9")
    , document.getElementById("c2-9"), document.getElementById("c3-9"), document.getElementById("c4-9")
    , document.getElementById("c5-9"), document.getElementById("c6-9"), document.getElementById("c7-9")
    , document.getElementById("c7-10"), document.getElementById("c7-11"), document.getElementById("c7-12")
    , document.getElementById("c7-13"), document.getElementById("c7-14"), document.getElementById("c7-15")
    , document.getElementById("c8-15"), document.getElementById("c9-15"), document.getElementById("c9-14"), document.getElementById("c9-13"), 
    document.getElementById("c9-12"), document.getElementById("c9-11"), document.getElementById("c9-10")
    , document.getElementById("c9-9"), document.getElementById("c10-9"), document.getElementById("c11-9")
    , document.getElementById("c12-9"), document.getElementById("c13-9"), document.getElementById("c14-9")
    , document.getElementById("c15-9"), document.getElementById("c15-8"), document.getElementById("c14-8")
    ,document.getElementById("c13-8"), document.getElementById("c12-8"), document.getElementById("c11-8"),
    document.getElementById("c10-8"), document.getElementById("c9-8")];}

function orangeHome () { return [document.getElementById("c12-3"), document.getElementById("c12-4"), document.getElementById("c13-3"), 
document.getElementById("c13-4")];}



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


function diceRoll(playerID) {
    if (movesLeft === 0) {
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
        return;
    }
    

    if (diceNumber === 6) {
            movesLeft +=1;
    }
    else {
        movesLeft -= 1;
    }
        
}


function movePiece(cellID)
{
    if (movesLeft === 0) {
        return;
    }
    
    //test if cellID clicked corresponds to current position of any of the figurines. If so, move it. If not, return.
    if (document.getElementById(cellID) === thisPlayer.route[thisPlayer.currentPosition1]) {
        moveAnimation(thisPlayer.currentPosition1 + diceNumber, thisPlayer.currentPosition1);
        restorePositions(thisPlayer.currentPosition1 + diceNumber, thisPlayer.currentPosition2, thisPlayer.currentPosition3, thisPlayer.currentPosition4);
        thisPlayer.currentPosition1 += diceNumber;
        if (movesLeft === 0) {
            socket.send("Normal move"); 
        }
        return;
    }

    else if (document.getElementById(cellID) === thisPlayer.route[thisPlayer.currentPosition2]) {
        moveAnimation(thisPlayer.currentPosition2 + diceNumber, thisPlayer.currentPosition2);
        restorePositions(thisPlayer.currentPosition1, thisPlayer.currentPosition2 + diceNumber, thisPlayer.currentPosition3, thisPlayer.currentPosition4);
        thisPlayer.currentPosition2 += diceNumber;
        if (movesLeft === 0) {
            socket.send("Normal move"); 
        }
        return;
    }

    else if (document.getElementById(cellID) === thisPlayer.route[thisPlayer.currentPosition3]) {
        moveAnimation(thisPlayer.currentPosition3 + diceNumber, thisPlayer.currentPosition3);
        restorePositions(thisPlayer.currentPosition1, thisPlayer.currentPosition2, thisPlayer.currentPosition3 + diceNumber, thisPlayer.currentPosition4);
        thisPlayer.currentPosition3 += diceNumber;
        if (movesLeft === 0) {
            socket.send("Normal move"); 
        }
        return;
    }

    else if (document.getElementById(cellID) === thisPlayer.route[thisPlayer.currentPosition4]) {
        moveAnimation(thisPlayer.currentPosition4 + diceNumber, thisPlayer.currentPosition4);
        restorePositions(thisPlayer.currentPosition1, thisPlayer.currentPosition2, thisPlayer.currentPosition3, thisPlayer.currentPosition4 + diceNumber);
        thisPlayer.currentPosition4 += diceNumber;
        if (movesLeft === 0) {
            socket.send("Normal move"); 
        }
        return;
    }

    else {
        console.log("return");
        return;
    }
    
    

    //movement animation
    async function moveAnimation(currPos, prevPos) {
        for (let i = prevPos; i <= currPos; i++) {

            thisPlayer.route[i].style.backgroundImage = `url("../images/${thisPlayer.color}pawn.png")`;
            await sleep(100);
    
            thisPlayer.route[i].style.backgroundImage = ""; 
        }
        thisPlayer.route[currPos].style.backgroundImage = `url("../images/${thisPlayer.color}pawn.png")`;
        thisPlayer.route[prevPos].style.backgroundImage = ""; 
        
    };

    
    

    function restorePositions(pos1, pos2, pos3, pos4) {
        console.log("restoring positions");
        if (pos1 >= 0) {
            thisPlayer.route[thisPlayer.currentPosition1].style.backgroundImage = `url("../images/${thisPlayer.color}pawn.png")`;
        }
    
        if (pos2 >= 0) {
            thisPlayer.route[thisPlayer.currentPosition2].style.backgroundImage = `url("../images/${thisPlayer.color}pawn.png")`;
        }
    
        if (pos3 >= 0) {
            thisPlayer.route[thisPlayer.currentPosition3].style.backgroundImage = `url("../images/${thisPlayer.color}pawn.png")`;
        }
    
        if (pos4 >= 0) {
            thisPlayer.route[thisPlayer.currentPosition4].style.backgroundImage = `url("../images/${thisPlayer.color}pawn.png")`;
        }
    }

    
    
}

function movePieceFromHome(cellID) {

    if (diceNumber !== 6) {
        return;
    }
    
    if (document.getElementById(cellID) === thisPlayer.home[0]) {
        thisPlayer.home[0].style.backgroundImage = "";
        thisPlayer.route[0].style.backgroundImage = `url("../images/${thisPlayer.color}pawn.png")`;
        thisPlayer.currentPosition1 = 0;
        socket.send("MOVEDHOME " + thisPlayer.playerID + " " + cellID);
    }

    else if (document.getElementById(cellID) === thisPlayer.home[1]) {
        thisPlayer.home[1].style.backgroundImage = "";
        thisPlayer.route[1].style.backgroundImage = `url("../images/${thisPlayer.color}pawn.png")`;
        thisPlayer.currentPosition1 = 0;
        socket.send("MOVEDHOME " + thisPlayer.playerID + " " + cellID);
    }
    else if (document.getElementById(cellID) === thisPlayer.home[2]) {
        thisPlayer.home[2].style.backgroundImage = "";
        thisPlayer.route[2].style.backgroundImage = `url("../images/${thisPlayer.color}pawn.png")`;
        thisPlayer.currentPosition1 = 0;
        socket.send("MOVEDHOME " + thisPlayer.playerID + " " + cellID);
    }
    else if (document.getElementById(cellID) === thisPlayer.home[3]) {
        thisPlayer.home[3].style.backgroundImage = "";
        thisPlayer.route[3].style.backgroundImage = `url("../images/${thisPlayer.color}pawn.png")`;
        thisPlayer.currentPosition1 = 0;
        socket.send("MOVEDHOME " + thisPlayer.playerID + " " + cellID);
    }
    
    else {
        return;
    }  
}

function movePieceFromHomeRemote(cellID, color, home, route) {
    console.log("MOved piece remote: " + cellID);

    if (document.getElementById(cellID) === home[0]) {
        
        home[0].style.backgroundImage = "";
        route[0].style.backgroundImage = `url("../images/${color}pawn.png")`;
    } 
    else if (document.getElementById(cellID) === home[1]) {
        home[1].style.backgroundImage = "";
        route[1].style.backgroundImage = `url("../images/${color}pawn.png")`;
    }
    else if (document.getElementById(cellID) === home[2]) {
        home[2].style.backgroundImage = "";
        route[2].style.backgroundImage = `url("../images/${color}pawn.png")`;
    } 
    else if (document.getElementById(cellID) === home[3]) {
        home[3].style.backgroundImage = "";
        route[3].style.backgroundImage = `url("../images/${color}pawn.png")`;
    } 
    else if (document.getElementById(cellID) === home[4]) {
        home[4].style.backgroundImage = "";
        route[4].style.backgroundImage = `url("../images/${color}pawn.png")`;
    } 
    console.log("No match");
}

function populateBoard(home, color) {
    home[0].style.backgroundImage = `url("../images/${color}pawn.png")`;
    home[1].style.backgroundImage = `url("../images/${color}pawn.png")`;
    home[2].style.backgroundImage = `url("../images/${color}pawn.png")`;
    home[3].style.backgroundImage = `url("../images/${color}pawn.png")`;
};













