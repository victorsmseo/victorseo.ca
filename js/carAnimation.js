var canvas;
var ctx;

var lanePosition = 0;
var carPosition = 0;
var wheelPosition = 0;

window.onload = init;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    startAnimation();
}
function startAnimation() {
    requestId = requestAnimationFrame(animationLoop);
}
function animationLoop(timestamp) {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawBackground();
    drawAsphalt(lanePosition);
    car(carPosition);
    lanePosition += 30;
    lanePosition %= canvas.width/2;
    carPosition += 1;
    wheelPosition += 1;
    wheelPosition %= 20;
    requestId = requestAnimationFrame(animationLoop);
}
function drawBackground() {
    const colorWater = "#0FB4D0";
    // background.jpeg
    // width: 645, height: 334
    // Add 53 for extra height
    ctx.save();
    ctx.scale(1.1628,1.1628);
    ctx.fillStyle = colorWater;
    ctx.fillRect(0,268,645,119);
    ctx.restore();
}
function car(carPosition) {
    var waveFunction = 1.5*Math.sin(carPosition/3);

    ctx.save();
    ctx.translate(140,335);
    ctx.scale(5,5);
    drawTire();
    ctx.restore();

    ctx.save();
    ctx.translate(140,335+waveFunction);
    ctx.scale(5,5);
    drawCar();
    ctx.restore();

    rotateTireLeft(wheelPosition);
    rotateTireRight(wheelPosition);
}
function drawAsphalt(x) {
    const colorYellow = "#EEC830";
    const colorAsphalt = "#373737";
    ctx.fillStyle = colorAsphalt;
    ctx.fillRect(0, 450, canvas.width, 50);
    ctx.fillStyle = colorYellow;
    ctx.fillRect(x-canvas.width/2, 460, canvas.width/4, 8);
    ctx.fillRect(x, 460, canvas.width/4, 8);
    ctx.fillRect(x+canvas.width/2, 460, canvas.width/4, 8);
}