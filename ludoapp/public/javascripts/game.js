var diceNumber = 0;
var currentPosition1 = -1;
var currentPosition2 = -1;
var currentPosition3 = -1;
var currentPosition4 = -1;
var movesLeft = 0;

var greenRoute = [document.getElementById("c7-2"), document.getElementById("c7-3"), document.getElementById("c7-4"), 
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
                
                
            }
            diceIcon.src = `./images/${diceNumber}.png`;
        })();

        movesLeft = 1;
}


function movePiece(cellID)
{
    if (movesLeft === 0) {
        return;
    }
    
    var greenRoute = [document.getElementById("c7-2"), document.getElementById("c7-3"), document.getElementById("c7-4"), 
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

    //test if cellID clicked correspons to current position of any of the figurines. If so, move it. If not, return.
    if (document.getElementById(cellID) === greenRoute[currentPosition1]) {
        moveAnimation(currentPosition1 + diceNumber, currentPosition1, 1);
        restorePositions(currentPosition1 + diceNumber, currentPosition2, currentPosition3, currentPosition4);
        currentPosition1 += diceNumber;
        return;
    }

    else if (document.getElementById(cellID) === greenRoute[currentPosition2]) {
        moveAnimation(currentPosition2 + diceNumber, currentPosition2, 2);
        restorePositions(currentPosition1, currentPosition2 + diceNumber, currentPosition3, currentPosition4);
        currentPosition2 += diceNumber;
        return;
    }

    else if (document.getElementById(cellID) === greenRoute[currentPosition3]) {
        moveAnimation(currentPosition3 + diceNumber, currentPosition3, 3);
        restorePositions(currentPosition1, currentPosition2, currentPosition3 + diceNumber, currentPosition4);
        currentPosition3 += diceNumber;
        return;
    }

    else if (document.getElementById(cellID) === greenRoute[currentPosition4]) {
        moveAnimation(currentPosition4 + diceNumber, currentPosition4, 4);
        restorePositions(currentPosition1, currentPosition2, currentPosition3, currentPosition4 + diceNumber);
        currentPosition4 += diceNumber;
        return;
    }

    else {
        return;
    }
    
    

    //movement animation
    async function moveAnimation(currPos, prevPos, fNumber) {
        for (let i = prevPos; i <= currPos; i++) {
    
            
            greenRoute[i].style.backgroundImage = `url("./images/figurine_blue${fNumber}.jpg")`;
            await sleep(100);
    
    
    
            greenRoute[i].style.backgroundImage = "";
            
            
        }
        greenRoute[currPos].style.backgroundImage = `url("./images/figurine_blue${fNumber}.jpg")`;
        greenRoute[prevPos].style.backgroundImage = ""; 
        
    };

    
    movesLeft = 0;

    function restorePositions(pos1, pos2, pos3, pos4) {
        console.log("restoring positions");
        if (pos1 >= 0) {
            console.log("Restored 1");
            greenRoute[currentPosition1].style.backgroundImage = "url('./images/figurine_blue1.jpg')";
        }
    
        if (pos2 >= 0) {
            console.log("Restored 2");
            greenRoute[currentPosition2].style.backgroundImage = "url('./images/figurine_blue2.jpg')";
        }
    
        if (pos3 >= 0) {
            greenRoute[currentPosition3].style.backgroundImage = "url('./images/figurine_blue3.jpg')";
        }
    
        if (pos4 >= 0) {
            greenRoute[currentPosition4].style.backgroundImage = "url('./images/figurine_blue4.jpg')";
        }
    }

    
}




function movePieceFromHome(cellID) {
    if (diceNumber !== 6) {
        return;
    }

    if (movesLeft !== 0) {
        if (cellID === "c3-3") {
            document.getElementById(cellID).style.backgroundImage = "";
            document.getElementById("c7-2").style.backgroundImage = "url('./images/figurine_blue1.jpg')";
            currentPosition1 = 0;
            console.log("Piece 1 moved from home");
        }
        else if (cellID === "c3-4") {
            document.getElementById(cellID).style.backgroundImage = "";
            document.getElementById("c7-2").style.backgroundImage = "url('./images/figurine_blue2.jpg')";
            console.log("Piece 2 moved from home");
            currentPosition2 = 0;
        }
        else if (cellID === "c4-3") {
            document.getElementById(cellID).style.backgroundImage = "";
            document.getElementById("c7-2").style.backgroundImage = "url('./images/figurine_blue3.jpg')";
            console.log("Piece 3 moved from home");
            currentPosition3 = 0;
        }
        else if (cellID === "c4-4") {
            document.getElementById(cellID).style.backgroundImage = "";
            document.getElementById("c7-2").style.backgroundImage = "url('./images/figurine_blue4.jpg')";
            console.log("Piece 4 moved from home");
            currentPosition4 = 0;
        }
        
    }
    else {
        return;
    }

    
    movesLeft = 0;
}

window.onload = function populateBoard() {
    
    document.getElementById("c3-4").style.backgroundImage = "url('./images/figurine_blue1.jpg')"; 
    document.getElementById("c3-3").style.backgroundImage = "url('./images/figurine_blue2.jpg')"; 
    document.getElementById("c4-3").style.backgroundImage = "url('./images/figurine_blue2.jpg')"; 
    document.getElementById("c4-4").style.backgroundImage = "url('./images/figurine_blue3.jpg')"; 
    
};













