var canvas;
var ctx;
var colors = ["#000000", "#191919", "#333333"];

const colorGrey = "#373737";
const colorGreyDark1 = "#333333";
const colorGreyDark2 = "#191919";
const colorGreyLight1 = "#4F4F4F";
const colorGreyLight2 = "#7F7F7F";
const colorGreyLight3 = "#B3B3B3";
const colorGreyLight4 = "#BCBCBC";
const colorOrange = "#DD510C";
const colorOrangeLight = "#FF8C1A";
const colorOrangeDark = "#B04109";
const colorPurple = "#224FDF";
const colorPurpleLight1 = "#3C66E2";

window.onload = init;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    drawCar();
}
function drawCar() {
    ctx.save();
    ctx.scale(8, 8);
    drawFrame();
    drawPaint();
    drawFront();
    drawTireLeft();
    drawTireRight();
    ctx.restore();
}
function drawFrame() {
    ctx.fillStyle = colors[0];
    ctx.fillRect(2, 30, 15, 1);
    ctx.fillRect(4, 31, 12, 1);
    ctx.fillRect(5, 32, 10, 1);
    ctx.fillRect(26, 30, 21, 1);
    ctx.fillRect(37, 31, 11, 1);
    ctx.fillRect(38, 32, 16, 1);
    ctx.fillRect(51, 31, 4, 1);
    ctx.fillRect(52, 30, 32, 1);
    ctx.fillRect(77, 31, 8, 1);
    ctx.fillRect(78, 32, 12, 1);
    ctx.fillRect(88, 31, 2, 1);
    ctx.fillRect(89, 29, 1, 2);
    ctx.fillRect(90, 27, 1, 3);
    ctx.fillRect(91, 26, 1, 1);
    ctx.fillRect(92, 22, 1, 4);
    ctx.fillRect(93, 15, 1, 7);
    ctx.fillRect(92, 14, 1, 1);
    ctx.fillRect(91, 10, 1, 4);
    ctx.fillRect(89, 9, 2, 1);
    ctx.fillRect(83, 8, 6, 1);
    ctx.fillRect(82, 7, 1, 1);
    ctx.fillRect(80, 6, 2, 1);
    ctx.fillRect(79, 5, 1, 1);
    ctx.fillRect(78, 4, 1, 1);
    ctx.fillRect(76, 3, 2, 1);
    ctx.fillRect(74, 2, 2, 1);
    ctx.fillRect(71, 1, 3, 1);
    ctx.fillRect(35, 0, 36, 1);
    ctx.fillRect(33, 1, 2, 1);
    ctx.fillRect(31, 2, 2, 1);
    ctx.fillRect(30, 3, 1, 1);
    ctx.fillRect(28, 4, 2, 1);
    ctx.fillRect(27, 5, 1, 1);
    ctx.fillRect(26, 6, 1, 1);
    ctx.fillRect(25, 7, 1, 1);
    ctx.fillRect(19, 8, 6, 1);
    ctx.fillRect(8, 9, 11, 1);
    ctx.fillRect(5, 10, 3, 1);
    ctx.fillRect(3, 11, 2, 1);
    ctx.fillRect(2, 12, 1, 1);
    ctx.fillRect(1, 13, 1, 3);
    ctx.fillRect(0, 16, 1, 12);
    ctx.fillRect(1, 28, 1, 1);
    ctx.fillRect(2, 29, 45, 1);
    ctx.fillRect(44, 24, 1, 5);
    ctx.fillRect(45, 21, 1, 8);
    ctx.fillRect(46, 18, 1, 3);
    ctx.fillRect(47, 17, 1, 2);
    ctx.fillRect(48, 16, 3, 2);
    ctx.fillRect(51, 17, 2, 2);
    ctx.fillRect(52, 19, 2, 2);
    ctx.fillRect(53, 21, 1, 9);
    ctx.fillRect(52, 29, 1, 1);
    ctx.fillRect(80, 29, 4, 1);
    ctx.fillRect(81, 27, 2, 2);
    ctx.fillRect(82, 22, 1, 5);
    ctx.fillRect(82, 22, 1, 5);
    ctx.fillRect(83, 19, 1, 2);
    ctx.fillRect(84, 18, 1, 1);
    ctx.fillRect(85, 17, 3, 1);
    ctx.fillRect(88, 18, 1, 1);
    ctx.fillRect(89, 19, 1, 2);
    // Black parts
    // ctx.fillRect(7, 21, 21, 1);
    // ctx.fillRect(6, 23, 23, 1);
    // ctx.fillRect(6, 25, 24, 1);
    // ctx.fillRect(6, 14, 22, 2);
}
function drawPaint() {
    ctx.fillStyle = colorPurple;
    ctx.fillRect(1, 16, 43, 12);
    ctx.fillRect(54, 17, 27, 11);
    ctx.fillStyle = colorPurpleLight1;
    ctx.fillRect(40, 11, 51, 6);
}
function drawFront() {
    ctx.fillStyle = "black";
    ctx.fillRect(6,14,22,2);
    ctx.fillStyle = colorGreyDark2;
    ctx.fillRect(7,14,1,1);
    ctx.fillRect(9,14,1,1);
    ctx.fillRect(11,14,1,1);
    ctx.fillRect(19,14,1,1);
    ctx.fillRect(21,14,1,1);
    ctx.fillRect(23,14,1,1);
    ctx.fillRect(25,14,1,1);
    ctx.fillRect(8,15,1,1);
    ctx.fillRect(10,15,1,1);
    ctx.fillRect(20,15,1,1);
    ctx.fillRect(22,15,1,1);
    ctx.fillRect(24,15,1,1);
    ctx.fillRect(26,15,1,1);
    ctx.fillStyle = colorGreyDark1;
    ctx.fillRect(13,14,1,1);
    ctx.fillRect(12,15,1,1);
    ctx.fillRect(16,15,1,1);
    ctx.fillRect(18,15,1,1);
    ctx.fillRect(17,14,1,1);
    ctx.fillStyle = colorGreyLight1;
    ctx.fillRect(14,15,1,1);
    ctx.fillRect(15,14,1,1);
    // Left headlight
    ctx.fillStyle = colorGrey;
    ctx.fillRect(4,15,1,1);
    ctx.fillStyle = colorGreyLight1;
    ctx.fillRect(4,14,1,1);
    ctx.fillRect(3,15,1,1);
    ctx.fillRect(5,16,1,1);
    ctx.fillStyle = colorGreyLight2;
    ctx.fillRect(3,14,1,1);
    ctx.fillStyle = colorGreyLight3;
    ctx.fillRect(5,14,1,1);
    ctx.fillRect(6,15,1,1);
    ctx.fillStyle = "white";
    ctx.fillRect(5,5,1,1);
    ctx.fillRect(3,16,2,1);
    ctx.fillRect(2,14,1,2);
    // Right headlight
    ctx.fillStyle = colorGrey;
    ctx.fillRect(31,15,4,1);
    ctx.fillRect(32,14,2,1);
    ctx.fillRect(37,15,1,1);
    ctx.fillStyle = colorGreyLight1;
    ctx.fillRect(31,14,1,1);
    ctx.fillRect(34,14,1,1);
    ctx.fillRect(35,15,1,1);
    ctx.fillRect(37,14,1,1);
    ctx.fillRect(28,15,1,1);
    ctx.fillStyle = colorGreyLight2;
    ctx.fillRect(27,15,1,1);
    ctx.fillRect(28,14,3,1);
    ctx.fillRect(30,15,1,1);
    ctx.fillRect(35,14,1,1);
    ctx.fillRect(36,15,1,1);
    ctx.fillRect(38,14,1,1);
    ctx.fillStyle = colorGreyLight3;
    ctx.fillStyle = "white";
    ctx.fillRect(29,15,1,1);
    ctx.fillRect(36,14,1,1);
    ctx.fillRect(30,16,8,1);
    ctx.fillRect(38,15,1,1);
    ctx.fillRect(39,14,1,1);
    // Bottom
    ctx.fillStyle = "black";
    ctx.fillRect(7,21,21,1);
    ctx.fillRect(6,23,23,1);
    ctx.fillRect(6,25,24,1);
    ctx.fillStyle = colorGreyDark2;
    ctx.fillRect(6,20,22,1);
    ctx.fillRect(9,22,15,1);
    ctx.fillRect(10,24,13,1);
    ctx.fillStyle = colorGrey;
    ctx.fillRect(7,22,2,1);
    ctx.fillRect(6,24,4,1);
    ctx.fillRect(24,22,5,1);
    ctx.fillRect(22,24,8,1);
    ctx.fillStyle = colorGreyLight1;
    // Left bottom
    ctx.fillStyle = "white";
    ctx.fillRect(3,21,1,3);
    ctx.fillStyle = colorGrey;
    ctx.fillRect(2,20,1,1);
    ctx.fillRect(2,23,1,1);
    ctx.fillStyle = colorGreyDark1;
    ctx.fillRect(2,21,1,1);
    ctx.fillRect(2,24,1,1);
    ctx.fillRect(3,20,1,1);
    ctx.fillStyle = colorGreyDark2;
    ctx.fillRect(2,22,1,1);
    ctx.fillRect(2,25,1,1);
    ctx.fillStyle = colorGreyLight4;
    ctx.fillRect(3,22,1,1);
    ctx.fillRect(3,24,1,1);
    // Right bottom
    ctx.fillStyle = "black";
    ctx.fillRect(34,22,3,1);
    ctx.fillRect(35,23,3,2);
    ctx.fillRect(36,25,1,1);
    ctx.fillStyle = colorGreyDark2;
    ctx.fillRect(35,23,1,1);
    ctx.fillRect(37,25,1,1);
    ctx.fillStyle = colorGrey;
    ctx.fillRect(34,21,1,1);
    ctx.fillRect(34,20,3,1);
    ctx.fillRect(36,21,1,1);
    ctx.fillStyle = colorGreyLight4;
    ctx.fillRect(35,22,1,1);
    ctx.fillRect(36,24,1,1);
    ctx.fillStyle = "white";
    ctx.fillRect(35,21,1,1);
    ctx.fillRect(36,23,1,1);
}
function drawTireLeft() {
    ctx.fillStyle = "white";
    ctx.fillRect(46, 21, 7, 8);
    ctx.fillRect(47, 19, 5, 2);
    ctx.fillRect(48, 18, 3, 1);
    ctx.fillRect(47, 29, 5, 2);
    ctx.fillRect(48, 31, 3, 1);
    ctx.fillStyle = "black";
    ctx.fillRect(47, 21, 1, 2);
    ctx.fillRect(49, 24, 1, 2);
    ctx.fillRect(48, 27, 1, 2);
    ctx.fillRect(48,16,3,1);
    ctx.fillStyle = colorGrey;
    ctx.fillRect(48, 24, 1, 2);
    ctx.fillRect(49, 22, 1, 2);
    ctx.fillRect(47, 23, 1, 1);
    ctx.fillRect(48, 21, 1, 1);
    ctx.fillStyle = colorGreyLight1;
    ctx.fillRect(49, 26, 1, 1);
    ctx.fillRect(51,24,1,3);
    ctx.fillRect(51,20,1,3);
    ctx.fillRect(48,19,3,1);
    ctx.fillRect(48,20,2,1);
    ctx.fillStyle = colorGreyLight2;
    ctx.fillRect(48,26,1,1);
    ctx.fillRect(49,27,1,1);
    ctx.fillRect(47,24,1,5);
    ctx.fillRect(51,27,1,3);
    ctx.fillRect(48,30,1,1);
    ctx.fillRect(50,30,1,1);
    ctx.fillRect(50,25,1,2);
    ctx.fillRect(50,20,1,4);
    ctx.fillRect(51,23,1,1);
    ctx.fillRect(48,22,1,2);
    ctx.fillRect(49,21,1,1);
    ctx.fillStyle = colorGreyLight3;
    ctx.fillRect(49,30,1,1);
    ctx.fillRect(48,29,2,1);
    ctx.fillRect(50,27,1,3);
    ctx.fillRect(51,30,1,1);
    ctx.fillRect(50,24,1,1);
    ctx.fillStyle = colorOrange;
    ctx.fillRect(44,22,1,1);
    ctx.fillRect(45,19,1,1);
    ctx.fillRect(57,18,1,1);
    ctx.fillStyle = colorOrangeLight;
    ctx.fillRect(44,21,1,1);
    ctx.fillStyle = colorOrangeDark;
    ctx.fillRect(45,20,1,1);
}
function drawTireRight() {
    ctx.fillStyle = "white";
    ctx.fillRect(83,21,7,8);
    ctx.fillRect(84,29,5,2);
    ctx.fillRect(85,31,3,1);
    ctx.fillRect(84,19,5,2);
    ctx.fillRect(85,18,3,2);
    ctx.fillStyle = "black";
    ctx.fillRect(84,21,1,2);
    ctx.fillRect(86,24,1,2);
    ctx.fillRect(85,27,1,2);
    ctx.fillStyle = colorGrey;
    ctx.fillRect(84,23,1,1);
    ctx.fillRect(85,24,1,2);
    ctx.fillRect(86,22,1,2);
    ctx.fillRect(85,21,1,1);
    ctx.fillStyle = colorGreyLight1;
    ctx.fillRect(85,19,3,1);
    ctx.fillRect(85,20,2,1);
    ctx.fillRect(88,20,1,3);
    ctx.fillRect(86,26,1,1);
    ctx.fillRect(88,24,1,3);
    ctx.fillRect(84,25,1,2);
    ctx.fillStyle = colorGreyLight2;
    ctx.fillRect(84,24,1,1);
    ctx.fillRect(85,22,1,2);
    ctx.fillRect(85,26,1,1);
    ctx.fillRect(86,27,1,1);
    ctx.fillRect(84,27,1,2);
    ctx.fillRect(85,30,1,1);
    ctx.fillRect(87,30,1,1);
    ctx.fillRect(88,27,1,3);
    ctx.fillRect(86,21,1,1);
    ctx.fillRect(87,20,1,4);
    ctx.fillRect(88,23,1,1);
    ctx.fillStyle = colorGreyLight3;
    ctx.fillRect(85,29,1,1);
    ctx.fillRect(86,30,1,1);
    ctx.fillRect(86,28,2,2);
    ctx.fillRect(87,24,1,4);
}