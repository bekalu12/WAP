(function() {
    var play;
    var original;
    var speed;
    var animSize;
    var animationOn = false;
    var exercise = EXERCISE.split("=====\n");
    var bike = BIKE.split("=====\n");
    var dive = DIVE.split("=====\n");
    var juggler = JUGGLER.split("=====\n");
 
    
    document.getElementById("stop").disabled = true; //disable stop button when first loaded
    document.getElementById("start").onclick = startAnimation;
    document.getElementById("stop").onclick = stopAnimation;
    document.getElementById("checkbox").onclick = function() {
        changeSpeed();
        clearInterval(play);
        startAnimation();
    }
    
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
        if(animationOn) {
            clearInterval(play);
            startAnimation();
        }
    }
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
        
    function stopAnimation() {
        document.getElementById("start").disabled = false;
        document.getElementById("stop").disabled = true;
        clearInterval(play);
        animationOn = false;
        document.getElementById("text").innerHTML = original;
    }
    function startAnimation() {
        if(!animationOn) {
            changeSpeed();
            animationOn = true;
        }
        document.getElementById("start").disabled = true;
        document.getElementById("stop").disabled = false;
        var arr;
        //var displaySize;
        var display = document.getElementById("display").value;
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
            if (index === arr.length) { index=0; }
            document.getElementById("text").innerHTML = arr[index++];
            //document.getElementById("text").fontSize = displaySize;
        }
        play = setInterval(animation, speed);
    }

    function changeSpeed() {
        if (document.getElementById("checkbox").checked) {
            speed = 50;
        } else {
            speed = 250;
        }
    }
})();
