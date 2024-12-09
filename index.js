var buttonColors=['green','red','yellow','blue'];
var gamePattern =[];
var userClickedPattern=[];
var level = 0 ;
var started = false ;

$("h1").click(function(){
    if (started != true) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
      }
});

function nextSequence(){
    level++ ;
    $("#level-title").text("Level " + level);
    var randomNumber =Math.floor(Math.random()*4);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);
    playSound(randomChosenColour);
}
   
$(".btn").click(function(e){
    var userChosenColour = e.target.id;
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function playSound(name){
        $("#"+name).fadeOut(100).fadeIn(100);
        var audio = new Audio("./sounds/"+name+".mp3");
        audio.play();
}
function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel]===gamePattern[currentLevel]) {
        if(userClickedPattern.length === gamePattern.length){
                setTimeout( nextSequence(), 1000)
                userClickedPattern=[];
        }
    }
    else{
        $("h1").text("Game Over Press Any Key To Restart");
        $("body").css("background-color","red");
        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();
        setTimeout(function(){
            $("body").css("background-color","#011F3F");
        },300);
        gamePattern =[];
        userClickedPattern=[];
        level = 0 ;
        started = false ;
    }

}

    
