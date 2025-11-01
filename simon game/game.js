let level = 0;
let randomColorPattern = [];
let userColorPattern = [];
let colors = ["green", "red", "yellow", "blue"];


//function for create the next sequence of color pattern
function nextSequence() {
    userColorPattern = [];
    level++;
    $("h1").text("Level " + level);
    randomColorPattern = [];

    for(let i=0; i<level; i++){
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        randomColorPattern.push(randomColor);
    }

    setTimeout(function(){
        flashPattern();
    },1000);
    
}



//function for flash the color pattern
function flashPattern() {
    randomColorPattern.forEach((color, index) => {
        setTimeout(() => {
            $("#" + color).fadeOut(100).fadeIn(100);
            playSound(color);
        }, index * 600);
    });
}




//function for play sounds
function playSound(){
    let audio = new Audio("simon game/sounds/green.mp3");
    audio.play();
}




//function for play sound animation and check answer with random pattern when user click colors

$(".btn").on("click", function(){
    let userChosenColor = $(this).attr("id");
    userColorPattern.push(userChosenColor);
    playSound();
    animatePress(userChosenColor);

    checkAnswer(userColorPattern.length - 1);
});




// function for check answer by compare 2 arrays
function checkAnswer(currentIndex){
    if(userColorPattern[currentIndex] !== randomColorPattern[currentIndex]){
        setTimeout(function(){
             var endSound = new Audio("simon game/sounds/wrong.mp3");
             endSound.play();
             $("h1").text("Game Over!!!!");
        },500);
       
      
        level = 0;
        randomColorPattern = [];
        userColorPattern = [];
    } else if(userColorPattern.length === randomColorPattern.length){

        setTimeout(function(){
             var sound = new Audio("simon game/sounds/startingSound.mp3");
            sound.play();
        },500);

        setTimeout(function(){
            nextSequence();
        }, 1000); // move to next level
    }
}




//function for animate the color press
function animatePress(color){
    $("#" + color).addClass("pressed");
    setTimeout(() => $("#" + color).removeClass("pressed"), 200);
}



//key press for start the game
$(document).one("keypress", function(){

    var sound = new Audio("simon game/sounds/startingSound.mp3");
    sound.play();

    setTimeout(function(){
        nextSequence();
    },1000);
    
});


