"use strict";

var lose = false; // variable to store win/lose status

window.onload = function () {
	$("start").onclick = startClick;
	$("boundary1").onmouseover = overBoundary;
	$("end").onmouseover = finished;
	
	
	var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
    }

};


function overBoundary()  {
	//$("boundary1").style.backgroundColor = "#ff8888";
	//$("boundary1").addClassName("You lost the game!");
	
	var boundaries = $$("div#maze div.boundary");
	
	
	
	for (var k = 0; k < boundaries.length; k++){
	boundaries[k].style.backgroundColor = "#ff8888"; 
	boundaries[k].addClassName("You have lost the game.");
	}
	
	lose = true; //setting win/lose status to "lose"
	
	$("status").textContent = "Oh man! You've lost!";
	
}


function startClick() {
    lose = false;
    
   
    
    // If cursor move outside of maze, you lose. (No cheating!)
    //$("*").onmouseover = overBoundary; 
   
    $("status").textContent = "Find the end!";
    var boundaries = $$("div#maze div.boundary");
    for (var k = 0; k < boundaries.length; k++) {
        boundaries[k].removeClassName("You have lost the game.");
        boundaries[k].style.backgroundColor = "#eeeeee";
        
    }
    
     $("status").textContent = "Find the end!";
}


function finished(){
 if(lose){
 	//alert("You have lost!");
 	$("status").textContent = "You have lost!";
	}

	else {
	//alert("You have Won!");
	$("status").textContent = "You have won!";
	}
}