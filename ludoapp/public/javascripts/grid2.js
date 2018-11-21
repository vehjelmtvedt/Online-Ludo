(function() {
    "use strict";

    var grid = new Grid({
        rows: 15,
        cols: 15,
        render: {
            placeholder: ".grid"
        }
    });

    for (var i = 0; i < 6; i++) { 
        grid.getCellAt(i, 0).$el.css('background', 'orange');
    }

    for (var i = 0; i < 6; i++) { 
        grid.getCellAt(0, i).$el.css('background', 'orange');
    }

    for (var i = 0; i < 6; i++) { 
        grid.getCellAt(i, 5).$el.css('background', 'orange');
    }

    for (var i = 0; i < 6; i++) { 
        grid.getCellAt(5, i).$el.css('background', 'orange');
    }

    grid.getCellAt(2, 2).$el.css('background', 'orange');
    grid.getCellAt(2, 3).$el.css('background', 'orange');
    grid.getCellAt(3, 2).$el.css('background', 'orange');
    grid.getCellAt(3, 3).$el.css('background', 'orange');

    grid.getCellAt(2, 2).$el.css('border' , '3px solid black');
    grid.getCellAt(2, 3).$el.css('border' , '3px solid black');
    grid.getCellAt(3, 2).$el.css('border' , '3px solid black');
    grid.getCellAt(3, 3).$el.css('border' , '3px solid black');


    for (var i = 1; i < 7; i++) { 
        grid.getCellAt(7, i).$el.css('background', 'orange');
    }

    grid.getCellAt(6, 1).$el.css('background', 'orange');

//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------


    for (var i = 9; i < 15; i++) { 
        grid.getCellAt(i, 0).$el.css('background', 'blue');
    }

    for (var i = 0; i < 6; i++) { 
        grid.getCellAt(14, i).$el.css('background', 'blue');
    }

    for (var i = 9; i < 14; i++) { 
        grid.getCellAt(i, 5).$el.css('background', 'blue');
    }

    for (var i = 0; i < 6; i++) { 
        grid.getCellAt(9, i).$el.css('background', 'blue');
    }

    grid.getCellAt(11, 2).$el.css('background', 'blue');
    grid.getCellAt(11, 3).$el.css('background', 'blue');
    grid.getCellAt(12, 2).$el.css('background', 'blue');
    grid.getCellAt(12, 3).$el.css('background', 'blue');

    grid.getCellAt(11, 2).$el.css('border' , '3px solid black');
    grid.getCellAt(11, 3).$el.css('border' , '3px solid black');
    grid.getCellAt(12, 2).$el.css('border' , '3px solid black');
    grid.getCellAt(12, 3).$el.css('border' , '3px solid black');

    for (var i = 8; i < 14; i++) { 
        grid.getCellAt(i, 7).$el.css('background', 'blue');
    }

    grid.getCellAt(13, 6).$el.css('background', 'blue');


//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

    for (var i = 0; i < 6; i++) { 
        grid.getCellAt(i, 14).$el.css('background', 'green');
    }

    for (var i = 0; i < 6; i++) { 
        grid.getCellAt(i, 9).$el.css('background', 'green');
    }

    for (var i = 9; i < 14; i++) { 
        grid.getCellAt(0, i).$el.css('background', 'green');
    }

    for (var i = 9; i < 14; i++) { 
        grid.getCellAt(5, i).$el.css('background', 'green');
    }

    grid.getCellAt(2, 11).$el.css('background', 'green');
    grid.getCellAt(3, 11).$el.css('background', 'green');
    grid.getCellAt(2, 12).$el.css('background', 'green');
    grid.getCellAt(3, 12).$el.css('background', 'green');

    grid.getCellAt(2, 11).$el.css('border' , '3px solid black');
    grid.getCellAt(3, 11).$el.css('border' , '3px solid black');
    grid.getCellAt(2, 12).$el.css('border' , '3px solid black');
    grid.getCellAt(3, 12).$el.css('border' , '3px solid black');

    for (var i = 1; i < 7; i++) { 
        grid.getCellAt(i, 7).$el.css('background', 'green');
    }

    grid.getCellAt(1, 8).$el.css('background', 'green');

//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------


    for (var i = 9; i < 15; i++) { 
        grid.getCellAt(i, 14).$el.css('background', 'yellow');
    }

    for (var i = 9; i < 15; i++) { 
        grid.getCellAt(i, 9).$el.css('background', 'yellow');
    }

    for (var i = 9; i < 15; i++) { 
        grid.getCellAt(14, i).$el.css('background', 'yellow');
    }

    for (var i = 9; i < 15; i++) { 
        grid.getCellAt(9, i).$el.css('background', 'yellow');
    }

    grid.getCellAt(11, 11).$el.css('background', 'yellow');
    grid.getCellAt(11, 12).$el.css('background', 'yellow');
    grid.getCellAt(12, 11).$el.css('background', 'yellow');
    grid.getCellAt(12, 12).$el.css('background', 'yellow');

    grid.getCellAt(11, 11).$el.css('border' , '3px solid black');
    grid.getCellAt(11, 12).$el.css('border' , '3px solid black');
    grid.getCellAt(12, 11).$el.css('border' , '3px solid black');
    grid.getCellAt(12, 12).$el.css('border' , '3px solid black');

    for (var i = 8; i < 14; i++) { 
        grid.getCellAt(7, i).$el.css('background', 'yellow');
    }

    grid.getCellAt(8, 13).$el.css('background', 'yellow');


//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

    grid.getCellAt(7, 7).$el.css('background', '#ff9999');
    grid.getCellAt(6, 6).$el.css('background', '#ff9999');
    grid.getCellAt(8, 8).$el.css('background', '#ff9999');
    grid.getCellAt(6, 8).$el.css('background', '#ff9999');
    grid.getCellAt(8, 6).$el.css('background', '#ff9999');

    grid.getCellAt(7, 6).$el.css('background', '#ff9999');
    grid.getCellAt(6, 7).$el.css('background', '#ff9999');
    grid.getCellAt(8, 7).$el.css('background', '#ff9999');
    grid.getCellAt(7, 8).$el.css('background', '#ff9999');
    grid.getCellAt(7, 6).$el.css('background', '#ff9999');
    grid.getCellAt(6, 7).$el.css('background', '#ff9999');
    grid.getCellAt(8, 7).$el.css('background', '#ff9999');
    grid.getCellAt(7, 8).$el.css('background', '#ff9999');


    grid.getCellAt(6, 6).$el.css('border-left', '3px solid black');
    grid.getCellAt(6, 6).$el.css('border-bottom', '3px solid black');
    grid.getCellAt(6, 6).$el.css('border-radius', '0');
    
    grid.getCellAt(8, 8).$el.css('border-right', '3px solid black');
    grid.getCellAt(8, 8).$el.css('border-top', '3px solid black');
    grid.getCellAt(8, 8).$el.css('border-radius', '0');
    

    grid.getCellAt(6, 8).$el.css('border-left', '3px solid black');
    grid.getCellAt(6, 8).$el.css('border-top', '3px solid black');
    grid.getCellAt(6, 8).$el.css('border-radius', '0');
    
    grid.getCellAt(8, 6).$el.css('border-bottom', '3px solid black');
    grid.getCellAt(8, 6).$el.css('border-right', '3px solid black');
    grid.getCellAt(8, 6).$el.css('border-radius', '0');

    grid.getCellAt(7, 6).$el.css('border-bottom', '3px solid black');
    grid.getCellAt(7, 6).$el.css('border-radius', '0');

    grid.getCellAt(6, 7).$el.css('border-left', '3px solid black');
    grid.getCellAt(6, 7).$el.css('border-radius', '0');

    grid.getCellAt(8, 7).$el.css('border-right', '3px solid black');
    grid.getCellAt(8, 7).$el.css('border-radius', '0');

    grid.getCellAt(7, 8).$el.css('border-top', '3px solid black');
    grid.getCellAt(7, 8).$el.css('border-radius', '0');

    grid.getCellAt(7, 7).$el.css('border-radius', '0');
    


    

}());