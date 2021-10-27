var mouseEvent = "empty";
var last_position_of_x , last_position_of_y;

color = "black";
width_of_line = 2;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext ("2d");

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
color = document.getElementById("color").value;
width_of_line = document.getElementById("width_of_line");
mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup" , my_mouseup);

function my_mouseup(e){
mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave" , my_mouseleave);

function my_mouseleave(e){
mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove" , my_mousemove);

function my_mousemove(e){
var current_position_of_x = e.clientX - canvas.offsetLeft;
var current_position_of_y = e.clientY - canvas.offsetTop;

if(mouseEvent == "mouseDown") {
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;

console.log("last_position_of_x and y = ");
console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
ctx.moveTo(last_position_of_x , last_position_of_y);

console.log("current_position_of_x and y = ");
console.log("x = " + current_position_of_x + "y = " + current_position_of_y);
ctx.lineTo(current_position_of_x , current_position_of_y);
ctx.stroke();

last_position_of_x = current_position_of_x;
last_position_of_y = current_position_of_y;
}
}

function Clear_Area(){
ctx.clearRect(0 , 0 , ctx.canvas.width , ctx.canvas.height);

}