var canvas;
var ctx;
window.onload = init;
function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');
    busIcon(50, 50, 0);
    busIcon(250, 140, Math.PI);
    busLoop(10);
    busLoop(70);
    backgroundLine();
}
function backgroundLine() {
    ctx.moveTo(5, 5);
    ctx.lineTo(745, 5);
    ctx.lineTo(745, 495);
    ctx.lineTo(5, 495);
    ctx.lineTo(5, 5);
    ctx.stroke();
}
function busLoop(h) {
    busPattern(0, h);
    busPattern(Math.PI/4, h);
    busPattern(Math.PI/2, h);
    busPattern(3*Math.PI/4, h);
    busPattern(Math.PI, h);
    busPattern(5*Math.PI/4, h);
    busPattern(3*Math.PI/2, h);
    busPattern(7*Math.PI/4, h);
}
function busPattern(r, h) {
    ctx.save();
    ctx.translate(500, 250);
    ctx.rotate(r);
    ctx.translate(0, h);
    busIcon(0,0,0);
    ctx.restore();
}
function busIcon(x, y, r) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(r);
    upperBus();
    midBus();
    lowerBus();
    mirror();
    light();
    wipers();
    ctx.restore();
}
function upperBus() {
    ctx.fillStyle = '#EFEFEF';
    ctx.fillRect(10, 2, 70, 16);
    ctx.fillRect(30, 0, 30, 2);
    ctx.fillStyle = 'black';
    ctx.fillRect(30, 8, 30, 7);
}
function midBus() {
    ctx.fillStyle = 'grey';
    ctx.fillRect(10, 18, 70, 37);
    ctx.fillStyle = 'skyblue';
    ctx.fillRect(15, 22, 60, 30);
}
function lowerBus() {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(10, 55, 70, 20);
    ctx.fillStyle = 'darkgrey';
    ctx.fillRect(7, 75, 76, 7);
    ctx.fillStyle = 'black';
    ctx.fillRect(12, 82, 13, 8);
    ctx.fillRect(65, 82, 13, 8);
    ctx.fillRect(33, 67, 25, 3);
}
function mirror() {
    ctx.fillStyle = 'darkgrey';
    ctx.fillRect(0, 25, 8, 20);
    ctx.fillRect(82, 25, 8, 20);
    ctx.fillStyle = 'grey';
    ctx.fillRect(3, 30, 7, 2);
    ctx.fillRect(3, 36, 7, 2);
    ctx.fillRect(80, 30, 7, 2);
    ctx.fillRect(80, 36, 7, 2);
}
function light() {
    ctx.fillStyle = 'orange';
    ctx.fillRect(12, 65, 16, 7);
    ctx.fillRect(62, 65, 16, 7);
    ctx.fillRect(43, 3, 4, 2);
    ctx.fillRect(35, 3, 4, 2);
    ctx.fillRect(51, 3, 4, 2);
    ctx.fillStyle = 'yellow';
    ctx.fillRect(18, 65, 10, 7);
    ctx.fillRect(62, 65, 10, 7);
}
function wipers() {
    ctx.fillStyle = 'black';
    ctx.save();
    ctx.translate(32, 54);
    ctx.rotate(7*Math.PI/4);
    ctx.fillRect(0, 0, 20, 1);
    ctx.restore();
    ctx.save();
    ctx.translate(54, 54);
    ctx.rotate(7*Math.PI/4);
    ctx.fillRect(0, 0, 20, 1);
    ctx.restore();
}