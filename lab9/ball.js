$("div").css({
    "text-align":"center",
    "top":"0"
});



$("#ball").click(function(){
    setInterval(update,40);
})
var ballVelocity = 0;
function update() {
    ballVelocity += 1;
    if(parseInt($("#ball").css('top')) > $(window).height()){
       ballVelocity *= -.9;    
    }
    $("#ball").css('top', function(idx, old){
        return parseInt(old) + ballVelocity + 'px';
    });
    }