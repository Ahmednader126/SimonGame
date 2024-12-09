var buttonColors=['green','red','yellow','blue'];
var gamePattern =[];
var userClickedPattern=[];
var level = 0 ;
var started = false ;

$("#start").click(function(){
    if (started != true) {
        $("#start").text("Level " + level);
        nextSequence();
        started = true;
      }
});

function nextSequence(){
    level++ ;
    $("#start").text("Level " + level);
    var randomNumber =Math.floor(Math.random()*4);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(200).fadeIn(200);
    playSound(randomChosenColour);
}
   
$(".btn").click(function(e){
    var userChosenColour = e.target.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    $("#"+userChosenColour).addClass("pressed");
    setTimeout(function(){
        $("#"+userChosenColour).removeClass("pressed");
    },300);
    checkAnswer(userClickedPattern.length-1);
});

function playSound(name){
        var audio = new Audio("./sounds/"+name+".mp3");
        audio.play();
}
function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel]===gamePattern[currentLevel]) {
        if(userClickedPattern.length === gamePattern.length){
                setTimeout( nextSequence(), 3000);
                userClickedPattern=[];
        }
    }
    else{
        $("#start").text("Game Over Press Any Key To Restart");
        $("body").css("background-color","red");
        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();
        setTimeout(function(){
            $("body").css("background-color","#011F3F");
        },500);
        gamePattern =[];
        userClickedPattern=[];
        level = 0 ;
        started = false ;
    }

}

    
