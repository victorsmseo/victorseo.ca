var canvas;
var ctx;

var backgroundColor = "rgb(251, 176, 66)";
var shadowColor = "rgb(228, 160, 60)";
var lightgrey = "rgb(206, 211, 210)";
var whitegrey = "rgb(243, 243, 245)";
var blue = "rgb(31, 60, 131)";
var lightblue = "rgb(81,106,168)";

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
    ctx.fillStyle = whitegrey;
    ctx.save();
    ctx.translate(99.6, 8);
    ctx.rotate(Math.PI/7);
    ctx.fillRect(0, 0, 3, 4);
    ctx.restore();
    ctx.fillStyle = lightgrey;
    ctx.save();
    ctx.translate(98, 9);
    ctx.rotate(Math.PI/7);
    ctx.fillRect(0, 0, 5, 4);
    ctx.restore();
    ctx.fillStyle = lightgrey;
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(90, 32, 23, Math.PI, 2*Math.PI);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(99, 28, 2, 0, 2*Math.PI);
    ctx.fill();
    ctx.fillRect(73, 25, 5, 5);
    ctx.fillRect(80, 29, 3, 1);
    ctx.fillRect(80, 26, 3, 1);
    ctx.fillRect(85, 24, 4, 1);
    ctx.fillStyle = blue;
    ctx.fillRect(102, 25, 4, 5);
    ctx.beginPath();
    ctx.moveTo(88, 16);
    ctx.lineTo(85, 24);
    ctx.lineTo(95, 24);
    ctx.lineTo(95, 16);
    ctx.fill();
    ctx.fillRect(85, 25, 2, 5);
    ctx.fillRect(88, 25, 7, 5);
    ctx.fillStyle = lightblue;
    ctx.fillRect(89, 24, 6, 1);
    ctx.beginPath();
    ctx.arc(91, 20, 3, 0, 2*Math.PI);
    ctx.fill();
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(92.5, 27.5, 1.5, 0, 2*Math.PI);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(91, 20, 2, 0, 2*Math.PI);
    ctx.fill();
}
function body() {
    ctx.fillStyle = lightgrey;
    ctx.fillRect(65, 40, 50, 14);
    // Bottom exhuast
    ctx.beginPath();
    ctx.moveTo(71, 92);
    ctx.lineTo(109, 92);
    ctx.lineTo(106, 100);
    ctx.lineTo(74, 100);
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.fillRect(67, 32, 46, 61);
    ctx.fillStyle = blue;
    ctx.fillRect(67, 32, 46, 1);
    ctx.fillRect(77, 36, 26, 1);
    ctx.fillRect(77, 42, 26, 1);
    ctx.fillRect(80, 42, 26, 1);
    ctx.fillRect(77, 48, 26, 1);
    ctx.fillStyle = lightgrey;
    ctx.fillRect(67, 33, 46, 3);
}
function legs() {
    ctx.fillStyle = whitegrey;
    ctx.fillRect(60, 36, 5, 64);
    ctx.fillRect(115, 36, 5, 64);
    ctx.fillStyle = "white";
    ctx.fillRect(56, 36, 9, 25);
    ctx.fillRect(115, 36, 9, 25);
    ctx.fillRect(58, 82, 8, 11);
    ctx.fillRect(114, 82, 8, 11);
    // Left leg
    ctx.beginPath();
    ctx.moveTo(52, 107);
    ctx.lineTo(58, 92);
    ctx.lineTo(66, 92);
    ctx.lineTo(69, 107);
    ctx.fill();
    // Right leg
    ctx.beginPath();
    ctx.moveTo(110, 107);
    ctx.lineTo(114, 92);
    ctx.lineTo(122, 92);
    ctx.lineTo(128, 107);
    ctx.fill();
}