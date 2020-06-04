window.onload = function(){
    "use strict";
   
        document.getElementById("btn").onclick = function() {
            start();
        };

    var bicycleprototype;
    var mountainbikePrototype;

    var createBicyclePrototype = function(){
    return{
        speed: 0,
        applybrake:function(decrement){ this.speed -= decrement},
        speedUp:function(increment){ this.speed += increment}  
    }
}


var createMountainBikePrototype = function(proto){
    var bike = Object.create(proto);
    bike.gear = 1;
    bike.setGear = function(gearvalue){this.gear = gearvalue;}
    return bike;
    }


var start = function(){
    bicycleprototype = createBicyclePrototype();
    mountainbikePrototype = createMountainBikePrototype(bicycleprototype) ;
    console.log(bicycleprototype);
    console.log(mountainbikePrototype);
    bicycleprototype.speedUp(5);
    console.log(bicycleprototype.speed);
}

}