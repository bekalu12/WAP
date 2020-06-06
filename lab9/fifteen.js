    // $("body, button").css({
	// "font-family": "cursive",
	// "font-size": "14pt",
	// "text-align": "center"
    // });
   
    // $("#puzzlearea").children().css({
    //     "float":"left",
    //     "border":"5px solid black",
    //     "height":"90px",
    //     "width":"90px",
       
    //     //,"position": "absolute"
    // });
    // $("#puzzlearea").css({
    //     "font-size": "40pt",
	// "width": "400px",
	// "height":"400px",
	// "margin-left": "auto",
	// "margin-right": "auto",
    // "position": "relative"
    // ,"background-image": "url(background.jpg)"


    //  });
    // .movablepiece:hover {
    //     border-color: red;
    //     color: red;
    // }

// $("#puzzlearea").children().each(function() {
//     $(this).addClass("puzzlepiece");
    
// })
// /* 

 (function() {

    var puzzleArea = document.getElementById('puzzlearea');
    var divs = puzzleArea.getElementsByTagName("div");
      
    // initialize each piece
    for (var i=0; i< divs.length; i++) {
        var div = divs[i];
        
        // calculate x and y for this piece
        var x = ((i % 4) * 100) ;
        var y = (Math.floor(i / 4) * 100) ;

        // set basic style and background
        div.className = "puzzlepiece";
        div.style.left = x + 'px';
        div.style.top = y + 'px';
        div.style.backgroundImage = 'url("background.jpg")';
        div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';
        
        // store x and y for later
        div.x = x;
        div.y = y; 
    }        
})();


//*****

// window.onload = function() {
// 	$("shufflebutton").observe('click', shufflePuzzleEvent);
// 	populateTiles();
// }
// init = $();
// var puzzleArea = $("#puzzlearea");
// var divs = puzzleArea. $("div");
// // initialize each piece
// $("divs").each(function(index,value){
//     var div = divs[value];
//     // calculate x and y for this piece
//          var x = ((index % 4) * 100) ;
//          var y = (Math.floor(index / 4) * 100) ;

//          // set basic style and background
//          $("div").addClass("className") = "puzzlepiece";
//          $("div").css({
//             "left": "x + 'px'",
//             "top": "y + 'px'",
//             "backgroundImage" :'url("background.jpg")',
//             "backgroundPosition" : "-x + 'px ' + (-y) + 'px'" 
//          });
//     // store x and y for later
//          div.x = x;
//          div.y = y; 

// })
var x_empty = 300;
var y_empty = 300;
var PIECES = [];
function movePieceEvent(event){
	movePiece(this);
}
function movePiece(piece) {
	if(checkNeighbors(piece))
	{
		//use temp vars to hold position of piece clicked
		var temp = piece.style.left
		var temp2 = piece.style.top;
		
		//move current piece to empty space
		piece.style.left = x_empty + "px";
		piece.style.top = y_empty + "px";
		
		//move empty space to piece clicked (temp vars)
		x_empty = parseInt(temp);
		y_empty = parseInt(temp2);
	}
	else
	{
		//alert("Please click a piece next to the empty piece to move it");
	}
	
	
}
function checkNeighbors(piece) {
	
	var x = parseInt(piece.style.left);
	var y = parseInt(piece.style.top);

	if(Math.abs(x - x_empty) == 100)
	{
		if(y == y_empty)
		{		
			return true;
		}
	}
	else if(Math.abs(y - y_empty) == 100)
	{
		if(x == x_empty)
		{
			return true;
		}
	}
	
	return false;
}

function shufflePuzzleEvent(event){	
	//try to do this random number of moves
	for(var j = 0; j <= Math.random() * (999999 - 99999) + 99999; j++)
	{	//grab random pieces
		for(var i = 0; i <= Math.random() * PIECES.length; i++)
		{ //check pieces for a match
			if(checkNeighbors(PIECES[i]))
			{	//move piece if random piece is neighbor
				movePiece(PIECES[i]);
			}
		}
    }
}