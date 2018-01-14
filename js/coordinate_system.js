var canvas;
var ctx;
window.onload = init;
function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');
    upperBus();
    midBus();
    lowerBus();
    mirror();
    light();
}
function upperBus() {
    ctx.lineWidth = 3;
    ctx.fillStyle = 'white';
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