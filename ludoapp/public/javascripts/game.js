var diceNumber = 0;
var currentPosition1 = -1;
var currentPosition2 = -1;
var currentPosition3 = -1;
var currentPosition4 = -1;
var movesLeft = 0;
var yourColor = null;
var yourRoute = null;
var yourHome = null;
var playerNumber = null;


var socket = new WebSocket("ws://localhost:3000");

var socketSend = function(message) {
    return socket.onopen = function() {
        socket.send(message)
    }
}






socket.onmessage = function(event){
    if (event.data == "A") {
        console.log("you are player A");
        yourColor = "green";
        yourRoute = greenRoute();
        yourHome = greenHome();
        populateBoard();
        socketSend("this or something");

    }
    else if (event.data == "B") {
        console.log("you are player B");
        yourColor = "yellow";
        yourRoute = yellowRoute();
        yourHome = yellowHome();
        populateBoard();
    }
    else if (event.data == "C") {
        console.log("you are player C");
        yourColor = "blue";
        yourRoute = blueRoute();
        yourHome = blueHome();
        populateBoard();
    }
    else if (event.data == "D") {
        console.log("you are player D");
        yourColor = "red";
        yourRoute = orangeRoute();
        yourHome = orangeHome();
        populateBoard();
    }
    else if (event.data == "turn") {
        movesLeft = 1;
        console.log("You have 1 move left");
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

function diceRoll() {
    console.log(movesLeft);

    if (movesLeft === 0) {
        return;
    }
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
                
                
        }
        diceIcon.src = `./images/${diceNumber}.png`;
        })();

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
        socket.send("Moved"); 
        return;
    }
    
    
    

    //test if cellID clicked corresponds to current position of any of the figurines. If so, move it. If not, return.
    if (document.getElementById(cellID) === yourRoute[currentPosition1]) {
        console.log("called");
        moveAnimation(currentPosition1 + diceNumber, currentPosition1);
        restorePositions(currentPosition1 + diceNumber, currentPosition2, currentPosition3, currentPosition4);
        currentPosition1 += diceNumber;
        if (movesLeft === 0) {
            socket.send("Moved"); 
        }
        
        return;
    }

    else if (document.getElementById(cellID) === yourRoute[currentPosition2]) {
        console.log("called");
        moveAnimation(currentPosition2 + diceNumber, currentPosition2);
        restorePositions(currentPosition1, currentPosition2 + diceNumber, currentPosition3, currentPosition4);
        currentPosition2 += diceNumber;
        if (movesLeft === 0) {
            socket.send("Moved"); 
        }
        return;
    }

    else if (document.getElementById(cellID) === yourRoute[currentPosition3]) {
        console.log("called");
        moveAnimation(currentPosition3 + diceNumber, currentPosition3);
        restorePositions(currentPosition1, currentPosition2, currentPosition3 + diceNumber, currentPosition4);
        currentPosition3 += diceNumber;
        if (movesLeft === 0) {
            socket.send("Moved"); 
        }
        return;
    }

    else if (document.getElementById(cellID) === yourRoute[currentPosition4]) {
        console.log("called");
        moveAnimation(currentPosition4 + diceNumber, currentPosition4);
        restorePositions(currentPosition1, currentPosition2, currentPosition3, currentPosition4 + diceNumber);
        currentPosition4 += diceNumber;
        if (movesLeft === 0) {
            socket.send("Moved"); 
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
            
    
            
            yourRoute[i].style.backgroundImage = `url("../images/${yourColor}pawn.png")`;
            await sleep(100);
    
    
    
            yourRoute[i].style.backgroundImage = "";
            
            
        }
        yourRoute[currPos].style.backgroundImage = `url("../images/${yourColor}pawn.png")`;
        yourRoute[prevPos].style.backgroundImage = ""; 
        
    };

    
    

    function restorePositions(pos1, pos2, pos3, pos4) {
        console.log("restoring positions");
        if (pos1 >= 0) {
            console.log("Restored 1");
            yourRoute[currentPosition1].style.backgroundImage = `url("../images/${yourColor}pawn.png")`;
        }
    
        if (pos2 >= 0) {
            console.log("Restored 2");
            yourRoute[currentPosition2].style.backgroundImage = `url("../images/${yourColor}pawn.png")`;
        }
    
        if (pos3 >= 0) {
            yourRoute[currentPosition3].style.backgroundImage = `url("../images/${yourColor}pawn.png")`;
        }
    
        if (pos4 >= 0) {
            yourRoute[currentPosition4].style.backgroundImage = `url("../images/${yourColor}pawn.png")`;
        }
    }

    
    
}

function movePieceFromHome(cellID) {
    
    if (diceNumber !== 6) {
        return;
    }

    if (document.getElementById(cellID) === yourHome[0]) {
        yourHome[0].style.backgroundImage = "";
        yourRoute[0].style.backgroundImage = `url("../images/${yourColor}pawn.png")`;
        currentPosition1 = 0;
    }

    else if (document.getElementById(cellID) == yourHome[1]) {
        yourHome[1].style.backgroundImage = "";
        yourRoute[1].style.backgroundImage = `url("../images/${yourColor}pawn.png")`;
        currentPosition2 = 0;
    }
    else if (document.getElementById(cellID) == yourHome[2]) {
        yourHome[2].style.backgroundImage = "";
        yourRoute[2].style.backgroundImage = `url("../images/${yourColor}pawn.png")`;
        currentPosition3 = 0;
    }
    else if (document.getElementById(cellID) == yourHome[3]) {
        yourHome[3].style.backgroundImage = "";
        yourRoute[3].style.backgroundImage = `url("../images/${yourColor}pawn.png")`;
        currentPosition4 = 0;
    }
    
    else {
        return;
    }

    
    
}

function populateBoard() {
    yourHome[0].style.backgroundImage = `url("../images/${yourColor}pawn.png")`;
    yourHome[1].style.backgroundImage = `url("../images/${yourColor}pawn.png")`;
    yourHome[2].style.backgroundImage = `url("../images/${yourColor}pawn.png")`;
    yourHome[3].style.backgroundImage = `url("../images/${yourColor}pawn.png")`;
};













