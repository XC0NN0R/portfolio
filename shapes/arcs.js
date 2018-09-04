var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.linewidth = 4
ctx.strokeStyle = "red";


ctx. beginPath();
ctx.arc(50, 50, 20, 0, Math.PI / 2, false);
//(x, y, radius, starting angle, stopping angle, direction)
ctx.stroke();

ctx.beginPath();
ctx.arc(100, 50, 20, 0, Math.PI + 2, false);
ctx.stroke();

ctx.beginPath();
ctx.arc(150, 50, 20, 0, Math.PI * 2, false);
ctx.stroke();