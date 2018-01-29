var canvas;
var ctx;
var colors = ["#000000", "#191919", "#333333"];

const colorGrey = "#373737";
const colorGreyDark1 = "#252525";
const colorGreyDark2 = "#191919";
const colorGreyLight1 = "#4F4F4F";
const colorGreyLight2 = "#7F7F7F";
const colorGreyLight3 = "#989898";
const colorGreyLight4 = "#BCBCBC";
const colorOrange = "#DD510C";
const colorOrangeLight = "#FF8C1A";
const colorOrangeDark = "#B04109";

const colorPurple = "#224FDF";
const colorPurpleDark1 = "#0D32AC";
const colorPurpleLight1 = "#3C66E2";
const colorPurpleLight2 = "#5A7CE7";
const colorPurpleLight3 = "#7993EC";

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
    drawWindow();
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
    ctx.fillRect(75,13,3,1);
}
function drawPaint() {
    paintDefault();
    paintLight1();
    paintLight2();
    paintLight3();
    paintDark1();
}
function paintDefault() {
    ctx.fillStyle = colorPurple;
    ctx.fillRect(3,13,38,1);
    ctx.fillRect(40,14,1,1);
    ctx.fillRect(39,15,1,1);
    ctx.fillRect(38,16,1,1);
    ctx.fillRect(38,17,2,1);
    ctx.fillRect(81,24,1,3);
    ctx.fillRect(1,18,41,1);
    ctx.fillRect(14,17,15,1);
    ctx.fillRect(15,16,11,1);
    ctx.fillRect(42,12,1,6);
    ctx.fillRect(28,19,17,1);
    ctx.fillRect(37,20,8,1);
    ctx.fillRect(1,19,13,1);
    ctx.fillRect(1,17,1,1);
    ctx.fillRect(37,21,7,1);
    ctx.fillRect(37,22,7,1);
    ctx.fillRect(38,23,6,1);
    ctx.fillRect(38,24,6,1);
    ctx.fillRect(38,25,6,1);
    ctx.fillRect(40,26,4,1);
    ctx.fillRect(41,27,3,1);
    ctx.fillRect(33,25,3,1);
    ctx.fillRect(30,26,2,1);
    ctx.fillRect(24,27,7,1);
    ctx.fillRect(5,27,2,1);
    ctx.fillRect(4,26,1,1);
    ctx.fillRect(5,25,1,1);
    ctx.fillRect(1,20,1,6);
    ctx.fillRect(3,25,1,1);
    ctx.fillRect(46,11,1,1);
    ctx.fillRect(55,18,1,6);
    ctx.fillRect(56,17,1,6);
    ctx.fillRect(58,17,1,5);
    ctx.fillRect(59,17,1,5);
    ctx.fillRect(57,19,1,3);
    ctx.fillRect(57,17,1,1);
    ctx.fillRect(61,17,18,4);
    ctx.fillRect(61,21,5,1);
    ctx.fillRect(54,24,1,1);
    ctx.fillRect(54,25,2,1);
    ctx.fillRect(54,27,27,1);
    ctx.fillRect(77,26,5,1);
    ctx.fillRect(80,25,1,1);
    ctx.fillRect(80,17,1,4);
    ctx.fillRect(81,18,1,3);
    ctx.fillRect(56,24,1,1);
    ctx.fillRect(57,23,1,1);
    ctx.fillRect(90,15,1,2);
    ctx.fillRect(91,14,1,4);
    ctx.fillRect(92,15,1,1);
    ctx.fillRect(60,14,1,3);
    ctx.fillRect(59,11,1,3);
    ctx.fillRect(60,10,1,1);
    ctx.fillRect(61,11,1,1);
    ctx.fillRect(62,12,5,1);
    ctx.fillRect(63,13,4,1);
    ctx.fillRect(79,13,1,4);
    ctx.fillRect(78,12,1,1);
    ctx.fillRect(77,11,1,1);
    ctx.fillRect(76,10,1,1);
    ctx.fillRect(75,4,1,1);
    ctx.fillRect(76,5,1,1);
    ctx.fillRect(77,6,1,1);
    ctx.fillRect(56,9,2,1);
    ctx.fillRect(57,8,2,1);
    ctx.fillRect(58,7,1,1);
    ctx.fillRect(59,6,1,1);
    ctx.fillRect(25,8,1,1);
    ctx.fillRect(60,23,1,2);
}
function paintLight1() {
    ctx.fillStyle = colorPurpleLight1;
    ctx.fillRect(1,16,1,1);
    ctx.fillRect(2,17,1,1);
    ctx.fillRect(5,17,9,1);
    ctx.fillRect(8,16,7,1);
    ctx.fillRect(26,16,3,1);
    ctx.fillRect(30,17,4,1);
    ctx.fillRect(2,13,1,1);
    ctx.fillRect(5,12,37,1);
    ctx.fillRect(41,13,1,5);
    ctx.fillRect(40,15,1,3);
    ctx.fillRect(39,16,1,1);
    ctx.fillRect(7,11,7,1);
    ctx.fillRect(30,11,7,1);
    ctx.fillRect(37,10,9,1);
    ctx.fillRect(43,9,2,1);
    ctx.fillRect(26,7,1,1);
    ctx.fillRect(27,6,1,1);
    ctx.fillRect(25,6,1,1);
    ctx.fillRect(23,7,1,1);
    ctx.fillRect(43,12,3,6);
    ctx.fillRect(46,12,1,4);
    ctx.fillRect(47,11,1,4);
    ctx.fillRect(48,11,11,3);
    ctx.fillRect(51,14,9,1);
    ctx.fillRect(53,15,7,1);
    ctx.fillRect(54,16,6,1);
    ctx.fillRect(54,17,1,2);
    ctx.fillRect(55,17,1,1);
    ctx.fillRect(60,11,1,3);
    ctx.fillRect(61,12,1,2);
    ctx.fillRect(62,13,1,1);
    ctx.fillRect(61,14,18,3);
    ctx.fillRect(62,11,15,1);
    ctx.fillRect(67,12,11,1);
    ctx.fillRect(67,13,8,1);
    ctx.fillRect(78,13,1,1);
    ctx.fillRect(80,12,1,5);
    ctx.fillRect(81,11,1,7);
    ctx.fillRect(82,11,1,8);
    ctx.fillRect(79,12,1,1);
    ctx.fillRect(83,10,1,7);
    ctx.fillRect(84,10,1,6);
    ctx.fillRect(85,10,2,5);
    ctx.fillRect(87,9,1,6);
    ctx.fillRect(88,9,1,7);
    ctx.fillRect(89,10,1,7);
    ctx.fillRect(90,10,1,5);
    ctx.fillRect(90,17,1,2);
    ctx.fillRect(77,9,1,2);
    ctx.fillRect(78,6,1,5);
    ctx.fillRect(79,7,1,3);
    ctx.fillRect(80,8,2,1);
    ctx.fillRect(77,5,1,1);
    ctx.fillRect(76,4,1,1);
    ctx.fillRect(62,8,4,1);
    ctx.fillRect(56,8,1,1);
    ctx.fillRect(57,7,1,1);
    ctx.fillRect(58,5,1,2);
    ctx.fillRect(59,5,1,1);
    ctx.fillRect(60,4,1,1);
    ctx.fillRect(57,24,1,1);
    ctx.fillRect(58,23,1,1);
    ctx.fillRect(67,23,5,1);
    ctx.fillRect(58,10,1,1);
}
function paintLight2() {
    ctx.fillStyle = colorPurpleLight2;
    ctx.fillRect(4,12,1,1);
    ctx.fillRect(6,11,1,1);
    ctx.fillRect(2,16,1,1);
    ctx.fillRect(3,17,2,1);
    ctx.fillRect(6,16,2,1);
    ctx.fillRect(29,16,1,2);
    ctx.fillRect(34,17,4,1);
    ctx.fillRect(1,27,4,1);
    ctx.fillRect(5,26,1,1);
    ctx.fillRect(7,27,1,1);
    ctx.fillRect(8,26,15,1);
    ctx.fillRect(24,27,1,1);
    ctx.fillRect(29,26,1,1);
    ctx.fillRect(31,27,10,1);
    ctx.fillRect(32,26,1,1);
    ctx.fillRect(39,26,1,1);
    ctx.fillRect(9,10,6,1);
    ctx.fillRect(15,11,15,1);
    ctx.fillRect(16,10,21,1);
    ctx.fillRect(37,11,9,1);
    ctx.fillRect(46,10,12,1);
    ctx.fillRect(59,10,1,1);
    ctx.fillRect(62,10,14,1);
    ctx.fillRect(76,9,1,1);
    ctx.fillRect(77,8,1,1);
    ctx.fillRect(61,8,1,1);
    ctx.fillRect(66,7,1,2);
    ctx.fillRect(78,11,3,1);
    ctx.fillRect(79,10,1,1);
    ctx.fillRect(80,9,1,1);
    ctx.fillRect(81,10,2,1);
    ctx.fillRect(86,9,1,1);
    ctx.fillRect(80,7,2,1);
    ctx.fillRect(79,6,1,1);
    ctx.fillRect(78,5,1,1);
    ctx.fillRect(77,4,1,1);
    ctx.fillRect(74,3,1,1);
    ctx.fillRect(56,7,1,1);
    ctx.fillRect(57,5,1,2);
    ctx.fillRect(58,4,2,1);
    ctx.fillRect(59,3,2,1);
    ctx.fillRect(60,2,2,1);
    ctx.fillRect(43,1,13,1);
    ctx.fillRect(28,5,1,1);
    ctx.fillRect(30,4,1,1);
    ctx.fillRect(46,16,1,1);
    ctx.fillRect(47,15,1,1);
    ctx.fillRect(48,14,3,1);
    ctx.fillRect(51,15,2,1);
    ctx.fillRect(53,16,1,1);
    ctx.fillRect(83,17,1,1);
    ctx.fillRect(84,16,1,1);
    ctx.fillRect(85,15,3,1);
    ctx.fillRect(88,16,1,1);
    ctx.fillRect(89,17,1,1);
}
function paintLight3() {
    ctx.fillStyle = colorPurpleLight3;
    ctx.fillRect(3,12,1,1);
    ctx.fillRect(5,11,1,1);
    ctx.fillRect(8,10,1,1);
    ctx.fillRect(14,11,1,1);
    ctx.fillRect(15,10,1,1);
    ctx.fillRect(19,9,24,1);
    ctx.fillRect(24,6,1,1);
    ctx.fillRect(1,26,3,1);
    ctx.fillRect(6,26,2,1);
    ctx.fillRect(8,27,16,1);
    ctx.fillRect(23,26,6,1);
    ctx.fillRect(33,26,6,1);
    ctx.fillRect(31,3,1,1);
    ctx.fillRect(33,2,1,1);
    ctx.fillRect(35,1,8,1,);
    ctx.fillRect(56,1,15,1);
    ctx.fillRect(58,24,2,1);
    ctx.fillRect(59,23,1,1);
    ctx.fillRect(61,23,6,1);
    ctx.fillRect(61,24,16,1);
    ctx.fillRect(80,10,1,1);
    ctx.fillRect(81,9,5,1);
    ctx.fillRect(82,8,1,1);
    ctx.fillRect(75,3,1,1);
    ctx.fillRect(71,2,3,1);
    ctx.fillRect(59,2,1,1);
    ctx.fillRect(58,3,1,1);
    ctx.fillRect(62,7,4,1);
}
function paintDark1() {
    ctx.fillStyle = colorPurpleDark1;
    ctx.fillRect(14,19,14,1);
    ctx.fillRect(28,20,2,1);
    ctx.fillRect(29,21,3,1);
    ctx.fillRect(30,22,4,1);
    ctx.fillRect(30,23,5,1);
    ctx.fillRect(31,24,4,1);
    ctx.fillRect(31,24,2,1);
    ctx.fillRect(4,20,1,6);
    ctx.fillRect(5,20,1,3);
    ctx.fillRect(5,24,1,1);
    ctx.fillRect(27,28,15,1);
    ctx.fillRect(3,28,5,1);
    ctx.fillRect(24,7,1,1);
    ctx.fillRect(42,18,4,1);
    ctx.fillRect(46,17,1,1);
    ctx.fillRect(47,16,1,1);
    ctx.fillRect(48,15,3,1);
    ctx.fillRect(51,16,2,1);
    ctx.fillRect(53,17,1,2);
    ctx.fillRect(54,19,1,5);
    ctx.fillRect(44,23,1,1);
    ctx.fillRect(61,10,1,1);
    ctx.fillRect(61,9,5,1);
    ctx.fillRect(55,24,1,1);
    ctx.fillRect(56,23,1,1);
    ctx.fillRect(57,22,21,1);
    ctx.fillRect(66,21,13,1);
    ctx.fillRect(60,17,1,5);
    ctx.fillRect(80,21,2,1);
    ctx.fillRect(79,22,3,2);
    ctx.fillRect(78,24,3,1);
    ctx.fillRect(77,25,3,1);
    ctx.fillRect(72,23,6,1);
    ctx.fillRect(76,26,1,1);
    ctx.fillRect(61,25,15,1);
    ctx.fillRect(56,25,4,1);
    ctx.fillRect(54,26,4,1);
    ctx.fillRect(54,28,9,1);
    ctx.fillRect(82,19,1,3);
    ctx.fillRect(83,18,1,1);
    ctx.fillRect(84,17,1,1);
    ctx.fillRect(85,16,3,1);
    ctx.fillRect(88,17,1,1);
    ctx.fillRect(89,18,1,1);
    ctx.fillRect(90,19,1,4);
    ctx.fillRect(91,18,1,4);
    ctx.fillRect(92,16,1,6);
    ctx.fillRect(90,24,1,3);
    ctx.fillRect(91,24,1,2);
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
function drawWindow() {
    ctx.fillStyle = "black";
    ctx.fillRect(22,7,1,1);
    ctx.fillRect(23,6,1,1);
    ctx.fillRect(24,5,2,1);
    ctx.fillRect(34,2,10,1);
    ctx.fillRect(49,2,10,1);
    ctx.fillRect(62,2,9,1);
    ctx.fillRect(58,9,3,1);
    ctx.fillRect(59,7,1,2);
    ctx.fillRect(72,9,2,1);
    ctx.fillRect(32,3,2,1);
    ctx.fillRect(26,8,2,1);
    ctx.fillRect(27,7,2,1);
    ctx.fillRect(28,6,2,1);
    ctx.fillRect(29,5,2,1);
    ctx.fillRect(31,4,1,1);
    ctx.fillStyle = colorGreyDark2;
    ctx.fillRect(32,4,1,1);
    ctx.fillRect(34,3,1,1);
    ctx.fillRect(46,2,1,1);
    ctx.fillRect(55,7,1,1);
    ctx.fillRect(76,8,1,1);
    ctx.fillRect(77,7,1,1);
    ctx.fillRect(52,9,3,1);
    ctx.fillRect(71,3,1,1);
    ctx.fillStyle = colorGreyDark1;
    ctx.fillRect(45,9,7,1);
    ctx.fillRect(53,8,1,1);
    ctx.fillRect(55,9,1,1);
    ctx.fillRect(60,7,1,2);
    ctx.fillRect(61,7,1,1);
    ctx.fillRect(67,9,5,1);
    ctx.fillRect(74,9,2,1);
    ctx.fillRect(75,8,1,1);
    ctx.fillRect(75,7,2,1);
    ctx.fillRect(71,8,3,1);
    ctx.fillRect(45,8,1,1);
    ctx.fillRect(45,7,5,1);
    ctx.fillRect(44,6,3,1);
    ctx.fillRect(45,2,1,1);
    ctx.fillRect(47,2,1,1);
    ctx.fillRect(67,7,6,1);
    ctx.fillStyle = colorGrey;
    ctx.fillRect(46,8,7,1);
    ctx.fillRect(54,8,2,1);
    ctx.fillRect(67,8,4,1);
    ctx.fillRect(74,8,1,1);
    ctx.fillRect(73,7,2,1);
    ctx.fillRect(72,6,2,1);
    ctx.fillRect(63,6,7,1);
    ctx.fillRect(44,4,2,2);
    ctx.fillRect(47,6,7,1);
    ctx.fillRect(44,2,1,1);
    ctx.fillRect(48,2,1,1);
    ctx.fillRect(45,3,3,1);
    ctx.fillStyle = colorGreyLight1;
    ctx.fillRect(50,7,5,1);
    ctx.fillRect(47,5,7,1);
    ctx.fillRect(48,4,5,1);
    ctx.fillRect(44,3,1,1);
    ctx.fillRect(48,3,1,1);
    ctx.fillRect(63,5,7,1);
    ctx.fillRect(64,4,5,1);
    ctx.fillRect(71,4,2,1);
    ctx.fillRect(72,5,1,1);
    ctx.fillStyle = colorGreyLight3;
    ctx.fillRect(28,8,17,1);
    ctx.fillRect(29,7,16,1);
    ctx.fillRect(30,6,14,1);
    ctx.fillRect(54,6,3,1);
    ctx.fillRect(56,5,1,1);
    ctx.fillRect(57,3,1,2);
    ctx.fillRect(61,3,1,2);
    ctx.fillRect(60,5,1,2);
    ctx.fillRect(61,6,2,1);
    ctx.fillRect(70,6,2,1);
    ctx.fillRect(74,6,3,1);
    ctx.fillRect(75,5,1,1);
    ctx.fillRect(74,4,1,1);
    ctx.fillRect(72,3,2,1);
    ctx.fillStyle = colorGreyLight4;
    ctx.fillRect(31,5,13,1);
    ctx.fillRect(33,4,11,1);
    ctx.fillRect(35,3,9,1);
    ctx.fillRect(46,4,2,1);
    ctx.fillRect(46,5,1,1);
    ctx.fillRect(49,3,8,1);
    ctx.fillRect(53,4,4,1);
    ctx.fillRect(54,5,2,1);
    ctx.fillRect(61,5,2,1);
    ctx.fillRect(62,4,2,1);
    ctx.fillRect(62,3,9,1);
    ctx.fillRect(69,4,2,1);
    ctx.fillRect(70,5,2,1);
    ctx.fillRect(73,4,1,1);
    ctx.fillRect(73,5,2,1);
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