var canvas;
var ctx;

var lanePosition = 0;
var carPosition = 0;
var wheelPosition = 0;
var sunPosition = 0;

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
    sky(sunPosition);
    sun(sunPosition);
    drawBackground();
    drawAsphalt(lanePosition);
    car(carPosition);
    // shade(sunPosition);
    sunPosition += 0.01;
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
function sun(sunPosition) {
    ctx.save();
    ctx.translate(305,270);
    ctx.translate(-320*Math.cos(sunPosition),-320*Math.sin(sunPosition));
    drawSun();
    ctx.restore();
}
function sky(sunPosition) {
    var red;
    var green;
    var blue;
    var transparency;

    var timeline = sunPosition % (2*Math.PI);
    if ((timeline > 0) && (timeline < Math.PI/4)) {
        var temperature = Math.round(((60000/Math.PI)*timeline))/100;
        if (temperature <= 66) {
            red = 255;
            green = Math.round(2.227*temperature) + 108;
            blue = Math.round(3.86*temperature);
        } else {
            red = Math.round(-0.89*temperature) + 314;
            green = Math.round(-0.6*temperature) + 294;
            blue = 255;
        }
    } else if ((timeline > Math.PI/4) && (timeline < 3*Math.PI/4)) {
        red = 181;
        green = 205;
        blue = 255;
    } else if ((timeline > 3*Math.PI/4) && (timeline < Math.PI)) {
        var temperature = Math.round(((-600/Math.PI)*((3*Math.PI/4)-timeline)));
        if (temperature <= 66) {
            red = Math.round(0.89*temperature) + 180;
            green = Math.round(0.6*temperature) + 205;
            blue = 255;
        } else {
            red = 255;
            green = Math.round(-2.227*temperature) + 402;
            blue = Math.round(-3.86*temperature) + 510;
        }
    } else if ((timeline > Math.PI) && (timeline < 2*Math.PI)) {
        red = 0;
        green = 0;
        blue = 20;
    } else {
        red = 0;
        green = 0;
        blue = 200;
    }
    transparency = 1;
    ctx.fillStyle = "rgba(" + red.toString() + "," + green.toString() + "," + blue.toString() + "," + transparency.toString() + ")";
    ctx.fillRect(0,0,canvas.width, canvas.height);
}
function shade(sunPosition) {
    var timeline = sunPosition % (2*Math.PI);
    if ((timeline > 0) && (timeline < Math.PI/4)) {
        var temperature = Math.round(((60000/Math.PI)*timeline))/100;
        if (temperature <= 40.0) {
            red = 255;
            green = Math.round(2.227*temperature) + 108;
            blue = Math.round(3.86*temperature);
            transparency = 0.3;
        } else {
            red = Math.round(-0.5*temperature) + 255;
            green = Math.round(-0.6*temperature) + 294;
            blue = 255;
            transparency = 0;
        }
    } else if ((timeline > Math.PI/4) && (timeline < 3*Math.PI/4)) {
        red = 181;
        green = 205;
        blue = 255;
        transparency = 0;
    } else if ((timeline > 3*Math.PI/4) && (timeline < Math.PI)) {
        var temperature = Math.round(((60000/Math.PI)*timeline))/100;
        if (temperature <= 66) {
            red = 255;
            green = Math.round(2.227*temperature) + 108;
            blue = Math.round(3.86*temperature);
        } else {
            red = Math.round(-0.5*temperature) + 255;
            green = Math.round(-0.6*temperature) + 294;
            blue = 255;
        }
        transparency = 0;
    } else if ((timeline > Math.PI) && (timeline < 2*Math.PI)) {
        red = 0;
        green = 0;
        blue = 20;
        transparency = 0.7;
    } else {
        red = 0;
        green = 0;
        blue = 200;
        transparency = 0.5;
    }
    ctx.fillStyle = "rgba(" + red.toString() + "," + green.toString() + "," + blue.toString() + "," + transparency.toString() + ")";
    ctx.fillRect(0,0,canvas.width, canvas.height);
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