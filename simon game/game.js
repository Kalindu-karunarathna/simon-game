//array for store random color pattern generated
var randomColorPattern = [];

//array for store color pattern entered by the user
var userColorPattern = [];

//random color pattern generator
for(i =0;i<4;i++){
    var randomNumber = Math.floor(Math.random() * 4);

    if(randomNumber==0){
        $("#green").addClass("pressed");
    setTimeout(function(){
        $("#green").removeClass("pressed");
    },2000);
    }
    else if(randomNumber==1){
        $("#red").addClass("pressed");
    setTimeout(function(){
        $("#red").removeClass("pressed");
    },2000);
    }
    else if(randomNumber==2){
        $("#yellow").addClass("pressed");
    setTimeout(function(){
        $("#yellow").removeClass("pressed");
    },2000);
    }
    else{
        $("#blue").addClass("pressed");
    setTimeout(function(){
        $("#blue").removeClass("pressed");
    },2000);
    }

   
}






//starting key press , sound and heading change as level
$(document).on("keypress", function(){
    var gameStartingSound = new Audio("sounds/yellow.mp3");
    gameStartingSound.play();
    $("h1").html("Level 01");
});
