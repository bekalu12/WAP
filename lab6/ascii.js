// var xx=document.getElementById("text").style.fontSize;
// var x=xx.value;
//var x=document.getElementById("text");
var animSize;

document.getElementById("size").onchange = function() {
   let  textt=document.getElementById("size").value; 
if (textt === "tiny") {
    animSize = "7pt";
} else if (textt === "small") {
    animSize = "10pt";
} else if (textt === "medium") {
    animSize = "12pt";
}else if (textt === "large") {
    animSize = "16pt";
}else if (textt === "xlarge") {
    animSize = "24pt";
}else if (textt === "xxlarge") {
    animSize = "32pt";
}
var length = document.getElementById("text");
length.style.fontSize = animSize; 
}

var play;
var original;
var animationOn = false;
var exercise = EXERCISE.split("=====\n");
var bike = BIKE.split("=====\n");
var dive = DIVE.split("=====\n");
var juggler = JUGGLER.split("=====\n");

document.getElementById("display").onchange = function() {
    let animVal = document.getElementById("display").value;
    if (animVal === "bike") {
        original = BIKE;
    } else if (animVal === "juggler") {
        original = JUGGLER;
    } else if (animVal === "dive") {
        original = DIVE;
    } else if (animVal === "exercise") {
        original = EXERCISE;
    }
    document.getElementById("text").innerHTML = original;
}

document.getElementById("stop").onclick = function() {
    clearInterval(play);
    document.getElementById("text").innerHTML = original;
}

document.getElementById("start").onclick= function() {
  
    if(animationOn) { return; }

    var arr;
    var displaySize;
    var display = document.getElementById("display").value;
    //var size = document.getElementById("size").value;
    if (display === "bike") {
        arr = bike;
    } else if (display === "juggler") {
        arr = juggler;
    } else if (display === "dive") {
        arr = dive;
    } else if (display === "exercise") {
        arr = exercise;
    }
    document.getElementById("text").innerHTML = "";
    var index = 0;
    function animation() {
        if (index === arr.length) { clearInterval(play); return; }
        document.getElementById("text").innerHTML = arr[index++];
        document.getElementById("text").fontSize = displaySize;
    }
    var speed;
    if (document.getElementById("checkbox").checked) {
        speed = 50;
    } else {
        speed = 250;
    }
  
    play = setInterval(animation, speed);
}