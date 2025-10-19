//array for store random color pattern generated
var randomColorPattern = [];

//array for store color pattern entered by the user
var userColorPattern = [];

var level;

//random color pattern generator

var colors = ["green","red","yellow","blue"];


for(let i=0;i<4;i++){
    var randomNumber = Math.floor(Math.random()*4);
    var selectedColor = colors[randomNumber];
    randomColorPattern.push(selectedColor);
}


function flash(){
    let x = 0;

    while(x<randomColorPattern.length){

        let flashColor = randomColorPattern[x];
        let randomPatternSound = new Audio("sounds/green.mp3");

    setTimeout(function(){
        $("#"+flashColor).addClass("pressed");
        randomPatternSound.play();
        setTimeout(function(){
            $("#"+flashColor).removeClass("pressed");
        },200)
    },x*500);

    x++;
    }

}

//store user clicked color pattern in array and add flash effect
function userClicks(){

    let userPatternSound = new Audio("sounds/green.mp3");

    $(".btn").on("click",function(){
        let clickButtonId = $(this).attr("id");
        userColorPattern.push(clickButtonId);

        $("#"+clickButtonId).addClass("pressed");
        
        setTimeout(function(){
            $("#"+clickButtonId).removeClass("pressed");
        },200);

        userPatternSound.play(); 
    })


}
userClicks();











//starting key press , sound and heading change as level
var gameStartingSound = new Audio("sounds/yellow.mp3");

$(document).on("keypress", function(){
    
    gameStartingSound.play();
    $("h1").html("Level 1");
    setTimeout(function(){
        flash();
    },1200);
    
});



//check whether userColorPattern array and randomColorPattern arrays are equal
function arraysEqual(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    for(let i=0; i<arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}


