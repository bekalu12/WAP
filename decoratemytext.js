
function increaseSize(){
    // alert("Hello, world");
    setInterval(increaseSize,500);
    var text = document.getElementById("zoom");
    var textSize = text.style.fontSize;
    var fontSize  = parseInt(textSize);	
    text.style.fontSize = (fontSize + 2) + "pt";
}

document.getElementById("btn").onclick = increaseSize;

function changeFont(){
    
//    alert("hello");
   var checkBox = document.getElementById("myCheck");
   var text = document.getElementById("zoom");
   if(checkBox.checked){
       text.style.fontWeight="bold";
       text.style.color="green";
       text.style.textDecoration="underline";
   }
   else{
       text.style.fontWeight="normal";
       text.style.color="black";
       text.style.textDecoration="none";
       
   }

}
document.getElementById("myCheck").onchange = changeFont;