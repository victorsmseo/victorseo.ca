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
    car();
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
function car() {
    ctx.save();
    ctx.translate(140,335);
    ctx.scale(5,5);
    drawCar();
    ctx.restore();
    rotateTire(wheelPosition);
}
function rotateTire(wheelPosition) {
    if ((wheelPosition >= 0) && (wheelPosition < 5)) {
        tire1(5,5,75,86);
        tire2(5,5,75,86);
        tire3(5,5,75,86);
        tire4(5,5,75,86);
        ctx.restore();
    } else if (wheelPosition < 10) {
        tire1(5,-5,75,-98);
        tire2(-5,5,-80,86);
        tire3(-5,5,-80,86);
        tire4(5,-5,75,-98);
        ctx.restore();
    } else if (wheelPosition < 15) {
        tire1(-5,-5,-80,-98);
        tire2(-5,-5,-80,-98);
        tire3(-5,-5,-80,-98);
        tire4(-5,-5,-80,-98);
        ctx.restore();
    } else if (wheelPosition < 20) {
        tire1(-5,5,-80,86);
        tire2(5,-5,75,-98);
        tire3(5,-5,75,-98);
        tire4(-5,5,-80,86);
        ctx.restore();
    }
}
function tire1(scaleX, scaleY, translateX, translateY) {
    const colorGrey = "#373737";
    const colorGreyLight1 = "#4F4F4F";
    const colorGreyLight2 = "#7F7F7F";

    ctx.save();
    ctx.scale(scaleX,scaleY);
    ctx.translate(translateX,translateY);

    ctx.fillStyle = "white";
    ctx.fillRect(0,0,1,2);
    ctx.fillStyle = "black";
    ctx.fillRect(0,2,1,2);
    ctx.fillRect(2,5,1,1);
    ctx.fillStyle = colorGrey;
    ctx.fillRect(1,2,1,1);
    ctx.fillRect(2,3,1,2);
    ctx.fillRect(0,4,1,1);
    ctx.fillRect(1,5,1,1);
    ctx.fillStyle = colorGreyLight1;
    ctx.fillRect(1,0,2,2);
    ctx.fillStyle = colorGreyLight2;
    ctx.fillRect(2,2,1,1);
    ctx.fillRect(1,3,1,2);

    ctx.restore();
}
function tire2(scaleX, scaleY, translateX, translateY) {
    const colorGrey = "#373737";
    const colorGreyLight1 = "#4F4F4F";
    const colorGreyLight2 = "#7F7F7F";
    const colorGreyLight3 = "#989898";

    ctx.save();
    ctx.scale(scaleX,scaleY);
    ctx.translate(translateX,translateY);

    ctx.fillStyle = "white";
    ctx.fillRect(4,0,1,1);
    ctx.fillStyle = colorGreyLight1;
    ctx.fillRect(3,0,1,1);
    ctx.fillRect(4,1,1,3);
    ctx.fillRect(4,5,1,1);
    ctx.fillStyle = colorGreyLight2;
    ctx.fillRect(3,1,1,4);
    ctx.fillRect(4,4,1,1);
    ctx.fillStyle = colorGreyLight3;
    ctx.fillRect(3,5,1,1);

    ctx.restore();
}
function tire3(scaleX, scaleY, translateX, translateY) {
    const colorGrey = "#373737";
    const colorGreyLight1 = "#4F4F4F";
    const colorGreyLight2 = "#7F7F7F";
    const colorGreyLight3 = "#989898";

    ctx.save();
    ctx.scale(scaleX,scaleY);
    ctx.translate(translateX,translateY);

    ctx.fillStyle = "white";
    ctx.fillRect(0,10,1,2);
    ctx.fillStyle = "black";
    ctx.fillRect(1,8,1,2);
    ctx.fillStyle = colorGrey;
    ctx.fillRect(1,6,1,1);
    ctx.fillStyle = colorGreyLight1;
    ctx.fillRect(0,6,1,2);
    ctx.fillStyle = colorGreyLight2;
    ctx.fillRect(1,7,1,1);
    ctx.fillRect(0,8,1,2);
    ctx.fillRect(1,11,1,1);
    ctx.fillStyle = colorGreyLight3;
    ctx.fillRect(1,10,1,1);

    ctx.restore();
}
function tire4(scaleX, scaleY, translateX, translateY) {
    const colorGrey = "#373737";
    const colorGreyLight1 = "#4F4F4F";
    const colorGreyLight2 = "#7F7F7F";
    const colorGreyLight3 = "#989898";
    const colorGreyLight4 = "#BCBCBC";

    ctx.save();
    ctx.scale(scaleX,scaleY);
    ctx.translate(translateX,translateY);

    ctx.fillStyle = "white";
    ctx.fillRect(4,11,1,1);
    ctx.fillStyle = "black";
    ctx.fillRect(2,6,1,1);
    ctx.fillStyle = colorGreyLight1;
    ctx.fillRect(4,6,1,2);
    ctx.fillRect(2,7,1,1);
    ctx.fillStyle = colorGreyLight2;
    ctx.fillRect(3,6,1,2);
    ctx.fillRect(2,8,1,1);
    ctx.fillRect(4,8,1,3);
    ctx.fillRect(3,11,1,1);
    ctx.fillStyle = colorGreyLight3;
    ctx.fillRect(3,8,1,2);
    ctx.fillRect(2,10,1,2);
    ctx.fillStyle = colorGreyLight4;
    ctx.fillRect(2,9,1,1);
    ctx.fillRect(3,10,1,1);

    ctx.restore();
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