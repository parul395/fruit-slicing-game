var play = false;
var score;
var lifeleft;
var fruitss = ['apple','mango','banana','berry','melon','orange','grapes','peach','pine'];
var step;
var action;

$(function(){
    
    $("#startre").click(function(){
        
        
        // check if we are already playing then reload
        if(play == true)
        {
          location.reload();  //reload page
        }
        else{ 
            play = true;
            //set score to 0
            score = 0;
            $("#val").html( score);
            //show trials left
            $("#life").show();
            lifeleft = 3;
          addhearts();
            //change start to reset
            $("#startre").html("Reset Game");
           
            //start sending fruits
            aaction();
        }
        
    });
    $("#fruit1").mouseover(function(){
        score++;
        $("#val").html(score);
        document.getElementById("sound").play();
        
        //stop the fruit
         clearInterval(action);
        $("#fruit1").hide("explode",500);
    
        setTimeout(aaction,500);
        
    });
    
    

function addhearts(){
    $("#life").empty();
    for(i = 0;i < lifeleft; i++){
                $("#life").append('<img src="heart.png" class="lifee" >');
            }
    
}
function aaction(){
   $("#fruit1").show();
    choose();
    $("#fruit1").css({'left': Math.round(550*Math.random()), 'top': -50})
    //generate random set
    step = 1+Math.round(5*Math.random());
     action = setInterval(function(){
         $("#fruit1").css('top', $("#fruit1").position().top  + step);
         if($("#fruit1").position().top > $("#fc").height()){
             //check lives left
             if(lifeleft > 1){
                 $("#fruit1").show();
                 choose(); 
    $("#fruit1").css({'left': Math.round(550*Math.random()), 'top' : -50});
    //generate random set
    step = 1+Math.round(5*Math.random());
                 lifeleft-=1;
                 
                 addhearts();
                
                 
             }else{
                 //game over
                 
              play = false ;
                 $("startre").html("Start Game");
                 $("#over").show();
                
                 
                 $("#over").html('<p>Game Over!</p><p>Your score is '+ score +'</p>');
                  $("#life").hide();
                 stopAction();
                 
             }
             
         }
     }, 10);
}
function choose(){
    
     $("#fruit1").attr('src' , 'images/' + fruitss[Math.round(8*Math.random())] +'.png'); 
    
    
}
    function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
}
});