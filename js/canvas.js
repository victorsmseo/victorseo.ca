

var canvas;
var ctx;
window.onload = init;
function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');
    drawRectangle();
    drawText();
    drawRectCoord(0, 0);
}
function drawRectangle() {
    ctx.fillStyle = 'red';
    ctx.fillRect(10, 10, 100, 100);

    ctx.strokeStyle = 'blue';
    ctx.strokeRect(120, 10, 100, 100);

    ctx.fillStyle = 'green';
    ctx.fillRect(230, 10, 100, 100);
    ctx.clearRect(240, 20, 30, 30);

    ctx.strokeStyle = 'orange';
    ctx.lineWidth = 5;
    ctx.strokeRect(340, 10, 100, 100);
}
function drawText() {
    ctx.font = 'italic 20pt Monospace';

    ctx.fillStyle = 'blue';
    ctx.fillText("Hello", 450, 30);

    ctx.strokeStyle = 'purple';
    ctx.strokeText("Hello", 560, 30);
}
function drawRectCoord(x, y) {
    ctx.fillStyle = 'pink';
    ctx.fillRect(10 + x, 120 + y, 100, 100);
}