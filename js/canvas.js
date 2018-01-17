var canvas;
var ctx;
window.onload = init;

function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');
    filledRect();
    strokedRect();
    windowRect();
    thickRect();
    filledStrokedRect();
    drawText();
}
function filledRect() {
    ctx.fillStyle = 'red';
    ctx.fillRect(10, 10, 100, 100);
}
function strokedRect() {
    ctx.strokeStyle = 'green';
    ctx.strokeRect(120, 10, 100, 100);
}
function windowRect() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(230, 10, 100, 100);
    ctx.clearRect(240, 20, 35, 35);
    ctx.clearRect(240, 65, 35, 35);
    ctx.clearRect(285, 20, 35, 35);
    ctx.clearRect(285, 65, 35, 35);
}
function thickRect() {
    ctx.strokeStyle = 'orange';
    ctx.lineWidth = 20;
    ctx.strokeRect(350, 20, 100, 100);
}
function filledStrokedRect() {
    ctx.strokeStyle = 'blue';
    ctx.fillStyle = 'pink';
    ctx.lineWidth = 10;
    ctx.strokeRect(10, 120, 100, 100);
    ctx.fillRect(10, 120, 100, 100);
}
function drawText() {
    ctx.fillStyle = 'black';
    ctx.font = 'bold 40pt Monospace';
    ctx.fillText("Hello", 140, 180);
}