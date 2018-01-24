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
    ctx.fillRect(95, 17, 1, 6);
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
    // Sliders
    ctx.fillRect(67, 32, 46, 1);
    ctx.fillRect(77, 36, 26, 1);
    ctx.fillRect(77, 42, 26, 1);
    ctx.fillRect(80, 41, 4, 3);
    ctx.fillRect(92, 41, 8, 3);
    ctx.fillRect(77, 48, 26, 1);
    ctx.fillRect(80, 47, 8, 3);
    ctx.fillRect(96, 47, 4, 3);
    ctx.fillStyle = lightgrey;
    ctx.fillRect(67, 33, 46, 3);
    // Grey stokes
    ctx.strokeStyle = lightgrey;
    ctx.lineWidth = 0.5;
    ctx.strokeRect(68, 37, 8, 12);
    ctx.strokeRect(104, 37, 8, 36);
    ctx.strokeRect(77, 52, 8, 21);
    ctx.strokeRect(95, 52, 8, 21);
    ctx.strokeRect(77, 75, 8, 4);
    ctx.strokeRect(86, 75, 8, 4);
    ctx.strokeRect(95, 75, 8, 4);
    ctx.strokeRect(104, 75, 8, 4);
    ctx.strokeRect(95, 81, 8, 10);
    ctx.strokeRect(104, 81, 8, 10);
    // Grey fills
    ctx.fillStyle = lightgrey;
    ctx.fillRect(68, 74.8, 8, 16.5);
    ctx.fillRect(77, 80.8, 8, 10.5);
    // Blue blades
    ctx.fillStyle = blue;
    ctx.fillRect(68, 52.17, 8, 2);
    ctx.fillRect(68, 55.33, 8, 2);
    ctx.fillRect(68, 58.48, 8, 2);
    ctx.fillRect(68, 61.64, 8, 2);
    ctx.fillRect(68, 64.8, 8, 2);
    ctx.fillRect(68, 67.69, 8, 2);
    ctx.fillRect(68, 71, 8, 2);
    // Blue fills
    ctx.fillRect(86, 80.8, 8, 10.5);
    ctx.fillRect(86, 51.8, 8, 21.3);
    // Lightblue fills
    ctx.fillStyle = lightblue;
    ctx.beginPath();
    ctx.arc(90, 86, 3, 0, 2*Math.PI);
    ctx.fill();
    // Black fills
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(90, 86, 1.5, 0, 2*Math.PI);
    ctx.fill();
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
    // Blue fill
    ctx.fillStyle = blue;
    ctx.fillRect(120, 61, 1, 18);
    ctx.fillRect(59, 61, 1, 18);
    // Grey strokes
    ctx.strokeStyle = lightgrey;
    ctx.strokeRect(120, 37, 3, 23);
    ctx.strokeRect(57, 37, 3, 23);
    ctx.strokeRect(118, 83, 3, 9);
    ctx.strokeRect(59, 83, 3, 9);
    ctx.beginPath();
    ctx.moveTo(118, 103);
    ctx.lineTo(118, 106);
    ctx.lineTo(126.5, 106);
    ctx.lineTo(125.2, 103);
    ctx.lineTo(118, 103);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(62, 103);
    ctx.lineTo(62, 106);
    ctx.lineTo(53.5, 106);
    ctx.lineTo(54.8, 103);
    ctx.lineTo(62, 103);
    ctx.stroke();
    // Grey fills
    ctx.fillStyle = lightgrey;
    ctx.beginPath();
    ctx.moveTo(117.2, 93);
    ctx.lineTo(117.2, 106.2);
    ctx.lineTo(111, 106.2);
    ctx.lineTo(114.5, 93);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(62.7, 93);
    ctx.lineTo(62.7, 106.2);
    ctx.lineTo(68.2, 106.2);
    ctx.lineTo(65.6, 93);
    ctx.fill();
    ctx.fillRect(120, 79, 1, 3);
    ctx.fillRect(59, 79, 1, 3);
}