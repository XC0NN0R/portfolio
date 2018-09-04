// Example of abstraction
// How can we abstract the creation of circles

// First make it a function
// give it a name that represents its function
// and pass it everything we need to make a
// circle
function drawCircle\(x, y, radius, width, color)
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.stroke();
}

// now we can make all kinds of circles
drawCircle(50, 50, 20, 5, "red");
drawCircle(100, 100, 24, 8, "green");
drawCircle(50, 50, 20, 5, "blue");