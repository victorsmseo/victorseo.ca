var canvas;
var ctx;

var lanePosition = 0;
var carPosition = 0;
var wheelPosition = 0;
var sunPosition = 0;
var timeline;

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
    sky(timeline);
    sun(sunPosition);
    drawBackground();
    drawAsphalt(lanePosition);
    car(carPosition);
    shade(timeline);
    light(timeline);

    timeline = sunPosition % (2*Math.PI);
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
function sky(timeline) {
    var red;
    var green;
    var blue;
    var transparency;
    
    if ((timeline > 0) && (timeline < Math.PI/4)) {
        // Sunrise
        var temperature = Math.round(((600/Math.PI)*timeline));
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
        // Day
        red = 181;
        green = 205;
        blue = 255;
    } else if ((timeline > 3*Math.PI/4) && (timeline < Math.PI)) {
        // Sunset
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
    } else {
        // Night
        red = 19;
        green = 24;
        blue = 98;
    } 
    transparency = 1;
    ctx.fillStyle = "rgba(" + red.toString() + "," + green.toString() + "," + blue.toString() + "," + transparency.toString() + ")";
    ctx.fillRect(0,0,canvas.width, canvas.height);
}
function shade(timeline) {
    if ((timeline > 0) && (timeline < Math.PI/4)) {
        // Sunrise
        var temperature = Math.round(((600/Math.PI)*timeline));
        if (temperature <= 40) {
            red = 255;
            green = Math.round(2.227*temperature) + 108;
            blue = Math.round(3.86*temperature);
            transparency = 0.2;
        } else {
            red = Math.round(-0.5*temperature) + 255;
            green = Math.round(-0.6*temperature) + 294;
            blue = 255;
            transparency = 0;
        }
    } else if ((timeline > Math.PI/4) && (timeline < 3*Math.PI/4)) {
        // Day
        transparency = 0;
    } else if ((timeline > 3*Math.PI/4) && (timeline < Math.PI)) {
        // Sunset
        var temperature = Math.round(((-600/Math.PI)*((3*Math.PI/4)-timeline)));
        if (temperature <= 85) {
            red = Math.round(0.89*temperature) + 180;
            green = Math.round(0.6*temperature) + 205;
            blue = 255;
            transparency = 0;
        } else {
            red = 255;
            green = Math.round(-2.227*temperature) + 402;
            blue = Math.round(-3.86*temperature) + 510;
            transparency = 0.2;
        }
    } else {
        // Night
        red = 19;
        green = 24;
        blue = 98;
        transparency = 0.2;
    }
    ctx.fillStyle = "rgba(" + red.toString() + "," + green.toString() + "," + blue.toString() + "," + transparency.toString() + ")";
    ctx.fillRect(0,0,canvas.width, canvas.height);
}
function light(timeline) {
    red = 19;
    green = 24;
    blue = 98;
    if ((timeline > 0) && (timeline < Math.PI/4)) {
        // Sunrise
        var temperature = Math.round(((600/Math.PI)*timeline));
        transparency = (7*temperature/-1500)+0.7;
    } else if ((timeline > Math.PI/4) && (timeline < 3*Math.PI/4)) {
        // Day
        transparency = 0;
    } else if ((timeline > 3*Math.PI/4) && (timeline < Math.PI)) {
        // Sunset
        var temperature = Math.round(((-600/Math.PI)*((3*Math.PI/4)-timeline)));
        transparency = (7*temperature/1500);
    } else {
        // Night
        red = 0;
        green = 0;
        blue = 20;
        transparency = 0.7;
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