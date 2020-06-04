    $("body, button").css({
	"font-family": "cursive",
	"font-size": "14pt",
	"text-align": "center"
    });
   
    $("#puzzlearea").children().css({
        "float":"left",
        "border":"5px solid black",
        "height":"90px",
        "width":"90px",
       
        //,"position": "absolute"
    });
    $("#puzzlearea").css({
        "font-size": "40pt",
	"width": "400px",
	"height":"400px",
	"margin-left": "auto",
	"margin-right": "auto",
    "position": "relative"
    ,"background-image": "url(background.jpg)"


     });
    // .movablepiece:hover {
    //     border-color: red;
    //     color: red;
    // }

// $("#puzzlearea").children().each(function() {
//     $(this).addClass("puzzlepiece");
    
// })
// /* 
// init = function() {
//     var puzzleArea = document.getElementById('puzzlearea');
//     var divs = puzzleArea.getElementsByTagName("div");
      
//     // initialize each piece
//     for (var i=0; i< divs.length; i++) {
//         var div = divs[i];
        
//         // calculate x and y for this piece
//         var x = ((i % 4) * 100) ;
//         var y = (Math.floor(i / 4) * 100) ;

//         // set basic style and background
//         div.className = "puzzlepiece";
//         div.style.left = x + 'px';
//         div.style.top = y + 'px';
//         div.style.backgroundImage = 'url("background.jpg")';
//         div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';
        
//         // store x and y for later
//         div.x = x;
//         div.y = y; 
//     }        
// };
window.onload = function() {
	$("shufflebutton").observe('click', shufflePuzzleEvent);
	populateTiles();
}
init = $();
var puzzleArea = $("#puzzlearea");
var divs = puzzleArea. $("div");
// initialize each piece
$("divs").each(function(index,value){
    var div = divs[value];
    // calculate x and y for this piece
         var x = ((index % 4) * 100) ;
         var y = (Math.floor(index / 4) * 100) ;

         // set basic style and background
         $("div").addClass("className") = "puzzlepiece";
         $("div").css({
            "left": "x + 'px'",
            "top": "y + 'px'",
            "backgroundImage" :'url("background.jpg")',
            "backgroundPosition" : "-x + 'px ' + (-y) + 'px'" 
         });
    // store x and y for later
         div.x = x;
         div.y = y; 

})