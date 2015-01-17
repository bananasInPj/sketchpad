$(document).ready(function(){

	//draw 4x4 GRID 
	$('div').append("<div id='container'></div>");
	for(var g = 0; g < 4; g++){
		for(var h = 0; h < 4; h++){
			$('#container').append("<div class='null'></div>");
		}
	}
	$('.null').width("" + ( 25 - ( 200 / 960 )) + "%");
	$('.null').height("" + ( 25 - ( 200 / 960 )) + "%");

	//Clear GRID
	$('#clear').click(function(){
		$('.simple, .random, .null, .trail').remove();
	});
	
	//Customize GRID
	$('#random').click(function(){
		$.fn.Grid('random');
	});
	
	$('#simple').click(function(){
		$.fn.Grid('simple');
	});
	
	$('#trail').click(function(){
		$.fn.Grid('trail');
	});
});


//Colour change GRID
$(document).on('mouseenter','.null',function(){
	$(this).css("background-color","green");
});

$(document).on('mouseenter','.simple',function(){
	$(this).css("background-color","green");
});

//Random colour change GRID
$(document).on('mouseenter','.random',function(){
	
	var colourCode = [];	
	for(var c = 0; c < 3; c++){
	colourCode[c]= Math.floor( Math.random() * 252 );
	}
	$(this).css( "background-color" , "rgb(" + colourCode[0] + "," + colourCode[1] + "," + colourCode[2] + ")" );
});

//CHANGE COLOR SIMPLE + leave trail
$(document).on('mouseenter','.trail',function(){
	$(this).css("background-color","grey");
});
$(document).on('mouseleave','.trail',function(){
	var $currentDiv = $(this);
	setTimeout(function () {
	$currentDiv.css("background", "blue");
	}, 
	150);
});

//Customize GRID function definition
$.fn.Grid=function(mode){
	$('.null, .simple, .random').remove();

	//Validation of input	
	while((isNaN(rowColNum)) || (rowColNum < 1 || rowColNum > 64) ){
			var rowColNum = prompt("Type in the number of rows/columns (between 1 and 64)");

		if(isNaN(rowColNum)){
			alert("Type in a number");
		}
		else if(rowColNum < 1 || rowColNum > 64){
			alert("Number not between 1 and 64");
		}
		else{
			break;
		}
	}

	//put GRID into container
	if(rowColNum> 1 && rowColNum < 64){
		var size = (100 / rowColNum)-(200 / 960);//Include border
		for(var i = 0; i < rowColNum; i++){
			for(var j = 0; j < rowColNum; j++){
				$('#container').append("<div class='" + mode + "'></div>");
			}
	}
	$("." + mode + "").width("" + size + "%");
	$("." + mode + "").height("" + size + "%");
	}
};