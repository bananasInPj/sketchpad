$(document).ready(function(){
//4x4 GRID
$('div').append("<div id='container'></div>");
for(var g = 0; g < 4;g++){
for(var h = 0; h < 4; h++){
$('#container').append("<div class='null'></div>");
}
}
$('.null').width(""+(25-(200/960))+"%");
$('.null').height(""+(25-(200/960))+"%");
//Clear GRID
$('#clear').click(function(){
$('.simple').remove();
$('.random').remove();
$('.null').remove();
$('.trail').remove();
});
//If Button clicked, customized GRID
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
//CHANGE COLOR SIMPLE
$(document).on('mouseenter','.null',function(){
$(this).css("background-color","green");
});
$(document).on('mouseenter','.simple',function(){
$(this).css("background-color","green");
});
//CHANGE COLOR RANDOMLY
$(document).on('mouseenter','.random',function(){
var colorRange = [];
for(var c = 0; c < 3; c++){
colorRange[c]= Math.floor(Math.random()*252);
}
$(this).css("background-color","rgb("+colorRange[0]+","+colorRange[1]+","+colorRange[2]+")");
});
//CHANGE COLOR SIMPLE + leave trail
$(document).on('mouseenter','.trail',function(){
$(this).css("background-color","grey");});
$(document).on('mouseleave','.trail',function(){
var $di = $(this);
setTimeout(function () {
$di.css("background", "blue");
}, 150);
});
//FUNCTION DEFINITION
$.fn.Grid=function(id){
$('.null, .simple, .random').remove();
do{
var ein = prompt("type in a number between 1 and 64");
if(isNaN(ein)){
alert("type in a number");
}
else if(ein< 1 || ein > 64){
alert("Number not between 1 and 64");
}
else {break;}
}
while((isNaN(ein)) || (ein < 1 || ein > 64) )
if(ein> 1 && ein < 64){
var size = (100/ein)-(200/960);//include border
for(var i = 0; i < ein; i++){
for(var j = 0; j < ein; j++){
$('#container').append("<div class='"+id+"'></div>");
}
}
$("."+id+"").width(""+size+"%");
$("."+id+"").height(""+size+"%");
}
};