
//array for store 4 button colors
var buttonColors = ["red", "blue", "green", "yellow"];

//array for store user cloicked color pattern
var userClickedPattern = [];


//function for generate random number
function nextSequence(){
    var randNumber = Math.random()*4;
    var randomNumber = Math.floor(randNumber);
    return randomNumber;
}


//array for store the generated random game pattern colors
var gamePattern = [];


//push the random color pattern to gamepattern array
var randomChosenColour = buttonColors[nextSequence()];
gamePattern.push(randomChosenColour);   
 

//flash for random color pattern..not completed
$("div #"+randomChosenColour).css({opacity : "20%"});

setTimeout(function(){
    $("div #"+randomChosenColour).css({opacity : "100%"});

},200);




//sounds for showing the pattern still not work

var audioBlue = new Audio('sounds/blue.mp3');
var audioGreen = new Audio('sounds/green.mp3');
var audioRed = new Audio('sounds/red.mp3');
var audioYellow = new Audio('sounds/yellow.mp3');
var audioWrong = new Audio('sounds/wrong.mp3');



/*if(randomChosenColour=="blue"){
    audioBlue.play();
}
else if(randomChosenColour=="green"){
    audioGreen.play();
}
else if(randomChosenColour=="red"){
    audioRed.play();
}
else if(randomChosenColour=="yellow"){
    audioYellow.play();
}
else{
    audioWrong.play();
}*/

// end of sounds part




//push the user clicked color pattern to array called userClicked pattern

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
   
     if(userChosenColour=="blue"){
    audioBlue.play();
}
else if(userChosenColour=="green"){
    audioGreen.play();
}
else if(userChosenColour=="red"){
    audioRed.play();
}
else if(userChosenColour=="yellow"){
    audioYellow.play();
}
else{
    audioWrong.play();
}

});







   




