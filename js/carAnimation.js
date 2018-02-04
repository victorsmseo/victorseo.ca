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
    const colorGreen = "#8DC540"
    const colorGreenLight = "#C6D82C";
    
    // background.jpeg
    // width: 645, height: 334
    // Add 53 for extra height
    ctx.save();
    ctx.scale(1.1628,1.1628);
    ctx.fillStyle = colorWater;
    ctx.fillRect(0,268-17,645,119+17);

    // Hill 1
    ctx.fillStyle = colorGreenLight;
    ctx.beginPath();
    ctx.moveTo(0, 237);
    ctx.lineTo(0,251);
    ctx.lineTo(140,251);
    ctx.fill();
    // Hill 2
    ctx.fillStyle = colorGreen;
    ctx.moveTo(140,251);
    ctx.lineTo(216,207);
    ctx.lineTo(551,251);
    ctx.fill();
    // Hill 3
    ctx.fillStyle = colorGreen;
    ctx.moveTo(573,254);
    ctx.lineTo(645,226);
    ctx.lineTo(646,254);
    ctx.fill();
    // Hill 4
    ctx.fillStyle = colorGreen;
    ctx.moveTo(388,268);
    ctx.lineTo(509,232);
    ctx.lineTo(645,252);
    ctx.lineTo(645,268);
    ctx.fill();
    // Hill 5
    ctx.fillStyle = colorGreenLight;
    ctx.beginPath();
    ctx.moveTo(0, 258);
    ctx.lineTo(145,227);
    ctx.lineTo(336,268);
    ctx.lineTo(0,268);
    ctx.fill();
    

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