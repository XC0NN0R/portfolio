function welcomeMessage()
{
    var name = prompt("What is your name?");
    var message = "<h1>Nice to meet you, " + name + "&#x263A</h1>"
    document.getElementById("line1").innerHTML = message;
}

function changeColor() {
    var myColor = prompt ("Think of an color and type it in the box!");
    document.body.style.color = myColor;
}

function changeBG() {
    var myColor = prompt("Think of any color and type it in the box!");
    document.body.style.backgroundColor = myColor;

}