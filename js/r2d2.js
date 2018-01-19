var canvas;
var ctx;

var backgroundColor = "rgb(251, 176, 66)";
var shadowColor = "rgb(228, 160, 60)";
var lightgrey = "rgb(206, 211, 210)";

window.onload = init;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.scale(4.17, 4.17);
    background();
    head();
    body();
    legs();
}
function background() {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, 180, 120);
    ctx.fillStyle = shadowColor;
    ctx.beginPath();
    ctx.moveTo(52, 107);
    ctx.lineTo(101, 9);
    ctx.lineTo(180, 86);
    ctx.lineTo(180, 120);
    ctx.lineTo(64, 120);
    ctx.fill();
}
function head() {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(90, 32, 23, Math.PI, 2*Math.PI);
    ctx.fill();
}
function body() {
    ctx.fillStyle = lightgrey;
    ctx.fillRect(65, 40, 50, 14);
    ctx.fillStyle = "white";
    ctx.fillRect(67, 32, 46, 61);
}
function legs() {
    ctx.fillStyle = "white";
    ctx.fillRect(60, 36, 5, 64);
    ctx.fillRect(115, 36, 5, 64);
}