//make grid

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

    var gridyellow = 
    [grid.getCellAt(8,13),grid.getCellAt(8,12),grid.getCellAt(8,11),grid.getCellAt(8,10),
     grid.getCellAt(8,9),grid.getCellAt(9,8),grid.getCellAt(10,8),grid.getCellAt(11,8),
     grid.getCellAt(12,8),grid.getCellAt(13,8),grid.getCellAt(14,8),grid.getCellAt(14,7),
     grid.getCellAt(14,6),grid.getCellAt(13,6),grid.getCellAt(12,6),grid.getCellAt(11,6),
     grid.getCellAt(10,6),grid.getCellAt(9,6),grid.getCellAt(8,5),grid.getCellAt(8,4),
     grid.getCellAt(8,3),grid.getCellAt(8,2),grid.getCellAt(8,1),grid.getCellAt(8,0),
     grid.getCellAt(7,0),grid.getCellAt(6,0),grid.getCellAt(6,1),grid.getCellAt(6,2),
     grid.getCellAt(6,3),grid.getCellAt(6,4),grid.getCellAt(6,5),grid.getCellAt(5,6),
     grid.getCellAt(4,6),grid.getCellAt(3,6),grid.getCellAt(2,6),grid.getCellAt(1,6),
     grid.getCellAt(0,6),grid.getCellAt(0,7),grid.getCellAt(0,8),grid.getCellAt(1,8),
     grid.getCellAt(2,8),grid.getCellAt(3,8),grid.getCellAt(4,8),grid.getCellAt(5,8),
     grid.getCellAt(6,9),grid.getCellAt(6,10),grid.getCellAt(6,11),grid.getCellAt(6,12),
     grid.getCellAt(6,13),grid.getCellAt(6,14),grid.getCellAt(7,14),grid.getCellAt(8,14),
                      ];
 
         var gridblue = 
    [grid.getCellAt(13,6),grid.getCellAt(12,6),grid.getCellAt(11,6),
     grid.getCellAt(10,6),grid.getCellAt(9,6),grid.getCellAt(8,5),grid.getCellAt(8,4),
     grid.getCellAt(8,3),grid.getCellAt(8,2),grid.getCellAt(8,1),grid.getCellAt(8,0),
     grid.getCellAt(7,0),grid.getCellAt(6,0),grid.getCellAt(6,1),grid.getCellAt(6,2),
     grid.getCellAt(6,3),grid.getCellAt(6,4),grid.getCellAt(6,5),grid.getCellAt(5,6),
     grid.getCellAt(4,6),grid.getCellAt(3,6),grid.getCellAt(2,6),grid.getCellAt(1,6),
     grid.getCellAt(0,6),grid.getCellAt(0,7),grid.getCellAt(0,8),grid.getCellAt(1,8),
     grid.getCellAt(2,8),grid.getCellAt(3,8),grid.getCellAt(4,8),grid.getCellAt(5,8),
     grid.getCellAt(6,9),grid.getCellAt(6,10),grid.getCellAt(6,11),grid.getCellAt(6,12),
     grid.getCellAt(6,13),grid.getCellAt(6,14),grid.getCellAt(7,14),grid.getCellAt(8,14),
     grid.getCellAt(8,13),grid.getCellAt(8,12),grid.getCellAt(8,11),grid.getCellAt(8,10),
     grid.getCellAt(8,9),grid.getCellAt(9,8),grid.getCellAt(10,8),grid.getCellAt(11,8),
     grid.getCellAt(12,8),grid.getCellAt(13,8),grid.getCellAt(14,8),grid.getCellAt(14,7),
     grid.getCellAt(14,6)
                      ];
 
     var gridorange = 
    [grid.getCellAt(6,1),grid.getCellAt(6,2),
     grid.getCellAt(6,3),grid.getCellAt(6,4),grid.getCellAt(6,5),grid.getCellAt(5,6),
     grid.getCellAt(4,6),grid.getCellAt(3,6),grid.getCellAt(2,6),grid.getCellAt(1,6),
     grid.getCellAt(0,6),grid.getCellAt(0,7),grid.getCellAt(0,8),grid.getCellAt(1,8),
     grid.getCellAt(2,8),grid.getCellAt(3,8),grid.getCellAt(4,8),grid.getCellAt(5,8),
     grid.getCellAt(6,9),grid.getCellAt(6,10),grid.getCellAt(6,11),grid.getCellAt(6,12),
     grid.getCellAt(6,13),grid.getCellAt(6,14),grid.getCellAt(7,14),grid.getCellAt(8,14),
     grid.getCellAt(8,13),grid.getCellAt(8,12),grid.getCellAt(8,11),grid.getCellAt(8,10),
     grid.getCellAt(8,9),grid.getCellAt(9,8),grid.getCellAt(10,8),grid.getCellAt(11,8),
     grid.getCellAt(12,8),grid.getCellAt(13,8),grid.getCellAt(14,8),grid.getCellAt(14,7),
     grid.getCellAt(14,6),grid.getCellAt(13,6),grid.getCellAt(12,6),grid.getCellAt(11,6),
     grid.getCellAt(10,6),grid.getCellAt(9,6),grid.getCellAt(8,5),grid.getCellAt(8,4),
     grid.getCellAt(8,3),grid.getCellAt(8,2),grid.getCellAt(8,1),grid.getCellAt(8,0),
     grid.getCellAt(7,0),grid.getCellAt(6,0),
                      ];
 
     var gridgreen = 
    [grid.getCellAt(1,8),
     grid.getCellAt(2,8),grid.getCellAt(3,8),grid.getCellAt(4,8),grid.getCellAt(5,8),
     grid.getCellAt(6,9),grid.getCellAt(6,10),grid.getCellAt(6,11),grid.getCellAt(6,12),
     grid.getCellAt(6,13),grid.getCellAt(6,14),grid.getCellAt(7,14),grid.getCellAt(8,14),
     grid.getCellAt(8,13),grid.getCellAt(8,12),grid.getCellAt(8,11),grid.getCellAt(8,10),
     grid.getCellAt(8,9),grid.getCellAt(9,8),grid.getCellAt(10,8),grid.getCellAt(11,8),
     grid.getCellAt(12,8),grid.getCellAt(13,8),grid.getCellAt(14,8),grid.getCellAt(14,7),
     grid.getCellAt(14,6),grid.getCellAt(13,6),grid.getCellAt(12,6),grid.getCellAt(11,6),
     grid.getCellAt(10,6),grid.getCellAt(9,6),grid.getCellAt(8,5),grid.getCellAt(8,4),
     grid.getCellAt(8,3),grid.getCellAt(8,2),grid.getCellAt(8,1),grid.getCellAt(8,0),
     grid.getCellAt(7,0),grid.getCellAt(6,0),grid.getCellAt(6,1),grid.getCellAt(6,2),
     grid.getCellAt(6,3),grid.getCellAt(6,4),grid.getCellAt(6,5),grid.getCellAt(5,6),
     grid.getCellAt(4,6),grid.getCellAt(3,6),grid.getCellAt(2,6),grid.getCellAt(1,6),
     grid.getCellAt(0,6),grid.getCellAt(0,7),grid.getCellAt(0,8)
                      ];
 
     var gridyellowstart = [grid.getCellAt(11,11),grid.getCellAt(12,11),grid.getCellAt(11,12),grid.getCellAt(12,12)];
     var gridbluestart = [grid.getCellAt(11,2),grid.getCellAt(12,2),grid.getCellAt(11,3),grid.getCellAt(12,3)];
     var gridorangestart = [grid.getCellAt(2,2),grid.getCellAt(3,2),grid.getCellAt(2,3),grid.getCellAt(3,3)];
     var gridgreenstart = [grid.getCellAt(2,11),grid.getCellAt(3,11),grid.getCellAt(2,12),grid.getCellAt(3,12)];
     //starting positions
 
     var gridyellowfinish = [grid.getCellAt(7,13),grid.getCellAt(7,12),grid.getCellAt(7,11),grid.getCellAt(7,10),grid.getCellAt(7,9)];
     var gridbluefinish = [grid.getCellAt(13,7),grid.getCellAt(12,7),grid.getCellAt(11,7),grid.getCellAt(10,7),grid.getCellAt(9,7)];
     var gridorangefinish = [grid.getCellAt(7,1),grid.getCellAt(7,2),grid.getCellAt(7,3),grid.getCellAt(7,4),grid.getCellAt(7,5),];
     var gridgreenfinish = [grid.getCellAt(1,7),grid.getCellAt(2,7),grid.getCellAt(3,7),grid.getCellAt(4,7),grid.getCellAt(5,7)];
     // finish positions 
 
 
     // for(var i=0;i<gridyellowstart.length;++i)
     // {
     //     gridyellowstart[i].$el.css('background', 'red');
     //     gridbluestart[i].$el.css('background', 'red');
     //     gridorangestart[i].$el.css('background', 'red');
     //     gridgreenstart[i].$el.css('background', 'red');
     // }
     
 

    var moveFigurine = function(x, y) {
        grid.getCellAt(x, y).$el.css("background-image", "url('images/figurine_blue.jpg')");
    }

    moveFigurine(11, 11);

}());





