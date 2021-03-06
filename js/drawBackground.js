const colorWater = "#0FB4D0";
const colorGreen = "#8DC540"
const colorGreenLight = "#C6D82C";
const colorIce = "#B8E8E8";
const colorNavy = "#36517A";
const colorNavyLight = "#1C6A88";

function drawBackground() {
    // background.jpeg
    // width: 645, height: 334
    // Add 53 for extra height
    ctx.save();
    ctx.scale(1.1628, 1.1628);

    drawIce();
    drawMountain();
    drawWater();
    drawHill();
    
    ctx.restore();
}
function drawIce() {
    // Ice 1
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(178, 74);
    ctx.lineTo(211, 168);
    ctx.lineTo(211, 200);
    ctx.lineTo(137, 200);
    ctx.lineTo(137, 114);
    ctx.fill();
    // Ice 2
    ctx.fillStyle = colorIce;
    ctx.beginPath();
    ctx.moveTo(178, 74);
    ctx.lineTo(226, 121);
    ctx.lineTo(211, 168);
    ctx.fill();
    // Ice 3
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(366, 64);
    ctx.lineTo(387, 92);
    ctx.lineTo(387, 140);
    ctx.lineTo(345, 140);
    ctx.lineTo(345, 95);
    ctx.fill();
    // Ice 4
    ctx.fillStyle = colorIce;
    ctx.beginPath();
    ctx.moveTo(576, 74);
    ctx.lineTo(556, 128);
    ctx.lineTo(527, 123);
    ctx.fill();
    // Ice 5
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(576, 74);
    ctx.lineTo(616, 114);
    ctx.lineTo(616, 140);
    ctx.lineTo(556, 140);
    ctx.lineTo(556, 128);
    ctx.fill();
}
function drawMountain() {
    ctx.save();
    // Mountain 1
    ctx.fillStyle = colorNavyLight;
    ctx.beginPath();
    ctx.moveTo(0, 94);
    ctx.lineTo(111, 227);
    ctx.lineTo(0, 227);
    ctx.fill();
    // Mountain 2
    ctx.fillStyle = colorNavy;
    ctx.beginPath();
    ctx.moveTo(180, 103);
    ctx.lineTo(186, 109);
    ctx.lineTo(186, 124);
    ctx.lineTo(192, 116);
    ctx.lineTo(211, 168);
    ctx.lineTo(183, 156);
    ctx.lineTo(144, 250);
    ctx.lineTo(0, 250);
    ctx.lineTo(0, 212);
    ctx.lineTo(68, 153);
    ctx.lineTo(103, 150);
    ctx.lineTo(137, 114);
    ctx.lineTo(140, 122);
    ctx.lineTo(145, 112);
    ctx.lineTo(148, 122);
    ctx.lineTo(154, 117);
    ctx.lineTo(155, 133);
    ctx.lineTo(162, 107);
    ctx.lineTo(166, 116);
    ctx.lineTo(171, 107);
    ctx.lineTo(174, 127);
    ctx.fill();
    // Mountain 3
    ctx.fillStyle = colorNavy;
    ctx.beginPath();
    ctx.moveTo(353, 89);
    ctx.lineTo(347, 102);
    ctx.lineTo(357, 90);
    ctx.lineTo(356, 104);
    ctx.lineTo(350, 130);
    ctx.lineTo(368, 130);
    ctx.lineTo(408, 250);
    ctx.lineTo(259, 250);
    ctx.lineTo(259, 153);
    ctx.lineTo(297, 115);
    ctx.lineTo(334, 113);
    ctx.lineTo(346, 95);
    ctx.fill();
    // Mountain 4
    ctx.fillStyle = colorNavyLight;
    ctx.beginPath();
    ctx.moveTo(196, 104);
    ctx.lineTo(206, 123);
    ctx.lineTo(206, 112);
    ctx.lineTo(213, 120);
    ctx.lineTo(209, 109);
    ctx.lineTo(228, 121);
    ctx.lineTo(365, 250);
    ctx.lineTo(144, 250);
    ctx.lineTo(183, 153);
    ctx.lineTo(210, 167);
    ctx.lineTo(196, 128);
    ctx.fill();
    // Mountain 5
    ctx.fillStyle = colorNavyLight;
    ctx.beginPath();
    ctx.moveTo(373, 82);
    ctx.lineTo(387, 92);
    ctx.lineTo(409, 129);
    ctx.lineTo(439, 132);
    ctx.lineTo(477, 169);
    ctx.lineTo(527, 123);
    ctx.lineTo(544, 110);
    ctx.lineTo(537, 122);
    ctx.lineTo(549, 112);
    ctx.lineTo(546, 128);
    ctx.lineTo(557, 103);
    ctx.lineTo(555, 129);
    ctx.lineTo(540, 170);
    ctx.lineTo(570, 156);
    ctx.lineTo(620, 268);
    ctx.lineTo(407, 250);
    ctx.lineTo(367, 131);
    ctx.lineTo(349, 131);
    ctx.lineTo(355, 104);
    ctx.lineTo(362, 89);
    ctx.lineTo(366, 106);
    ctx.lineTo(369, 88);
    ctx.lineTo(381, 103);
    ctx.fill();
    // // Mountain 6
    ctx.fillStyle = colorNavy;
    ctx.beginPath();
    ctx.moveTo(574, 101);
    ctx.lineTo(579, 128);
    ctx.lineTo(581, 106);
    ctx.lineTo(587, 116);
    ctx.lineTo(590, 107);
    ctx.lineTo(598, 133);
    ctx.lineTo(599, 117);
    ctx.lineTo(605, 122);
    ctx.lineTo(608, 112);
    ctx.lineTo(613, 123);
    ctx.lineTo(616, 114);
    ctx.lineTo(645, 144);
    ctx.lineTo(645, 267);
    ctx.lineTo(618, 267);
    ctx.lineTo(568, 158);
    ctx.lineTo(539, 171);
    ctx.lineTo(555, 128);
    ctx.lineTo(561, 116);
    ctx.lineTo(566, 122);
    ctx.lineTo(566, 110);
    ctx.fill();
    ctx.restore();
}
function drawWater() {
    ctx.fillStyle = colorWater;
    ctx.fillRect(0, 251, 645, 136);
}
function drawHill() {
    // Hill 1
    ctx.fillStyle = colorGreenLight;
    ctx.beginPath();
    ctx.moveTo(0, 237);
    ctx.lineTo(0, 251);
    ctx.lineTo(140, 251);
    ctx.fill();
    // Hill 2
    ctx.fillStyle = colorGreen;
    ctx.beginPath();
    ctx.moveTo(140, 251);
    ctx.lineTo(216, 207);
    ctx.lineTo(551, 251);
    ctx.fill();
    // Hill 3
    ctx.fillStyle = colorGreen;
    ctx.beginPath();
    ctx.moveTo(573, 254);
    ctx.lineTo(645, 226);
    ctx.lineTo(646, 254);
    ctx.fill();
    // Hill 4
    ctx.fillStyle = colorGreen;
    ctx.beginPath();
    ctx.moveTo(388, 268);
    ctx.lineTo(509, 232);
    ctx.lineTo(645, 252);
    ctx.lineTo(645, 268);
    ctx.fill();
    // Hill 5
    ctx.fillStyle = colorGreenLight;
    ctx.beginPath();
    ctx.moveTo(0, 258);
    ctx.lineTo(145, 227);
    ctx.lineTo(336, 268);
    ctx.lineTo(0, 268);
    ctx.fill();
}