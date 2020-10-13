(function(exports){

    /*
    * Server to client: Your playerID is X.
    */

    exports.S_PLAYER_TYPE = "PLAYER TYPE";
    exports.C_PLAYER_TYPE_A = {
        type: exports.S_PLAYER_TYPE,
        data: null
    }; 

    /*
    * Server to client: OP's is of type playerX
    */

    exports.S_OP_PLAYER_TYPE = "OP PLAYER TYPE";
    exports.C_OP_PLAYER_TYPE = {
        type: exports.S_OP_PLAYER_TYPE,
        data: null
    };

    /*
    * Server to client: Your turn playerX.
    */ 
   exports.S_YOUR_TURN = "YOUR TURN";
   exports.C_YOUR_TURN = {
       type: exports.S_YOUR_TURN,
       data: null
   };

    /*
    * Client to server: Done with turn, but no move is made (all pawns in home, but did not get 6).
    */
    exports.C_NO_MOVE = "NO MOVE";
    exports.S_NO_MOVE = {
      type: exports.C_NO_MOVE,
      data: "NO MOVE"
    };

    /*
    * Server to Client: PlayerX is done with turn, but no move was made.
    */
    



  /*
  * Client to server: Done with turn and valid move is made from home.
  */ 
    exports.C_MOVED_FROM_HOME = "MOVED FROM HOME";
    exports.S_MOVED_FROM_HOME = {
        type: exports.C_MOVED_FROM_HOME,
        player: null, //assign which player made the move.
        pawn: null //assign which pawn was moved.

    }



   

    


}(typeof exports === "undefined" ? this.Messages = {} : exports));
//if exports is undefined, we are on the client; else the server