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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSun();
    // drawBackground();
    drawAsphalt(lanePosition);
    car(carPosition);
    lanePosition += 30;
    lanePosition %= canvas.width / 2;
    carPosition += 1;
    wheelPosition += 1;
    wheelPosition %= 20;
    requestId = requestAnimationFrame(animationLoop);
}
function car(carPosition) {
    var waveFunction = 1.5 * Math.sin(carPosition / 3);

    ctx.save();
    ctx.translate(140, 335);
    ctx.scale(5, 5);
    drawTire();
    ctx.restore();

    ctx.save();
    ctx.translate(140, 335 + waveFunction);
    ctx.scale(5, 5);
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
    ctx.fillRect(x - canvas.width / 2, 460, canvas.width / 4, 8);
    ctx.fillRect(x, 460, canvas.width / 4, 8);
    ctx.fillRect(x + canvas.width / 2, 460, canvas.width / 4, 8);
}
function drawSun() {
    const colorSun = "#F7D303";
    const colorSunLight = "#F5DE4F";
    ctx.save();
    ctx.scale(0.25,0.25);
    ctx.beginPath();
    ctx.fillStyle = colorSunLight;
    ctx.moveTo(464,0);
    ctx.lineTo(506,197);
    ctx.lineTo(561,105);
    ctx.lineTo(562,212);
    ctx.lineTo(697,62);
    ctx.lineTo(634,253);
    ctx.lineTo(727,201);
    ctx.lineTo(677,295);
    ctx.lineTo(864,232);
    ctx.lineTo(716,366);

    ctx.lineTo(822,368);
    ctx.lineTo(731,424);
    ctx.lineTo(927,464);
    ctx.lineTo(731,505);
    ctx.lineTo(822,561);
    ctx.lineTo(716,561);
    ctx.lineTo(864,698);
    ctx.lineTo(677,633);
    ctx.lineTo(727,727);
    ctx.lineTo(634,675);
    ctx.lineTo(697,866);
    ctx.lineTo(562,715);
    ctx.lineTo(561,824);
    ctx.lineTo(506,731);
    ctx.lineTo(462,931);
    ctx.lineTo(424,731);
    ctx.lineTo(369,824);
    ctx.lineTo(363,715);
    ctx.lineTo(232,866);
    ctx.lineTo(296,675);
    ctx.lineTo(202,727);
    ctx.lineTo(253,633);
    ctx.lineTo(62,698);
    ctx.lineTo(213,561);
    ctx.lineTo(104,561);
    ctx.lineTo(197,505);
    ctx.lineTo(0,464);
    ctx.lineTo(197,424);
    ctx.lineTo(104,368);
    ctx.lineTo(213,366);
    ctx.lineTo(62,232);
    ctx.lineTo(253,295);
    ctx.lineTo(202,201);
    ctx.lineTo(296,253);
    ctx.lineTo(232,62);
    ctx.lineTo(363,212);
    ctx.lineTo(369,105);
    ctx.lineTo(424,197);


    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = colorSun;
    ctx.arc(462,462,256,0,2*Math.PI);
    ctx.fill();
    ctx.restore();
}