var canvas = document.getElementById("can");
var div = document.getElementById("asd");
var btn=document.getElementById("clear");
var context = canvas.getContext("2d");


var x = 0;
var y = 0;
var pencil = function(e){
	context.beginPath();
	x1 = x;
	y1 = y;
    context.moveTo(x1,y1);
	context.lineTo(e.clientX,e.clientY);
	context.stroke();
	x = e.clientX;
	y = e.clientY;
}
div.addEventListener("mousedown", function(e){
	 x = e.clientX;
	 y = e.clientY;
	console.log(e)
	div.addEventListener("mousemove", pencil)
})
div.addEventListener("mouseup", function(){
	div.removeEventListener("mousemove", pencil)
})

btn.addEventListener("click", function(){
	context.clearRect(0,0,1000,1000);
})