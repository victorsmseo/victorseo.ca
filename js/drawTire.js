function drawTire() {
    // Leftmost tire
    ctx.fillStyle = "black";
    ctx.fillRect(2, 21, 15, 10);
    ctx.fillRect(4, 31, 12, 1);
    ctx.fillRect(5, 32, 10, 1);
    // Left tire
    ctx.fillStyle = "white";
    ctx.fillRect(48,31,3,1);
    ctx.fillRect(46,21,1,8);
    ctx.fillRect(48,18,3,1);
    ctx.fillRect(52,21,1,8);
    ctx.fillStyle = "black";
    ctx.fillRect(37,30,10,1);
    ctx.fillRect(37,31,11,1);
    ctx.fillRect(38,32,16,1);
    ctx.fillRect(51,31,4,1);
    ctx.fillRect(52,29,1,2);
    ctx.fillRect(36,29,11,1);
    ctx.fillRect(36,21,10,8);
    ctx.fillRect(36,20,11,1);
    ctx.fillRect(37,19,10,1);
    ctx.fillRect(37,18,11,1);
    ctx.fillRect(53,18,2,13);
    ctx.fillRect(52,16,1,5);
    ctx.fillRect(38,17,14,1);
    ctx.fillRect(51,18,1,1);
    ctx.fillRect(39,15,14,2);
    ctx.fillRect(53,17,1,1);
    // Right tire
    ctx.fillStyle = "white";
    ctx.fillRect(48+37,31,3,1);
    ctx.fillRect(46+37,21,1,8);
    ctx.fillRect(48+37,18,3,1);
    ctx.fillRect(52+37,21,1,8);
    ctx.fillStyle = "black";
    ctx.fillRect(37+37,30,10,1);
    ctx.fillRect(37+37,31,11,1);
    ctx.fillRect(38+37,32,15,1);
    ctx.fillRect(51+37,31,2,1);
    ctx.fillRect(52+37,29,1,2);
    ctx.fillRect(36+37,29,11,1);
    ctx.fillRect(36+37,21,10,8);
    ctx.fillRect(36+37,20,11,1);
    ctx.fillRect(37+37,19,10,1);
    ctx.fillRect(37+37,18,11,1);
    ctx.fillRect(53+37,18,1,12);
    ctx.fillRect(52+37,16,1,5);
    ctx.fillRect(38+37,17,14,1);
    ctx.fillRect(51+37,18,1,1);
    ctx.fillRect(39+37,16,14,1);
    ctx.fillRect(53+37,17,1,1);
}
function rotateTireLeft(wheelPosition) {
    if ((wheelPosition >= 0) && (wheelPosition < 5)) {
        tire1(5, 5, 75, 86);
        tire2(5, 5, 75, 86);
        tire3(5, 5, 75, 86);
        tire4(5, 5, 75, 86);
    } else if (wheelPosition < 5) {
        tire1(5, -5, 75, -98);
        tire2(-5, 5, -80, 86);
        tire3(-5, 5, -80, 86);
        tire4(5, -5, 75, -98);
    } else if (wheelPosition < 15) {
        tire1(-5, -5, -80, -98);
        tire2(-5, -5, -80, -98);
        tire3(-5, -5, -80, -98);
        tire4(-5, -5, -80, -98);
    } else {
        tire1(-5, 5, -80, 86);
        tire2(5, -5, 75, -98);
        tire3(5, -5, 75, -98);
        tire4(-5, 5, -80, 86);
    }
}
function rotateTireRight(wheelPosition) {
    if ((wheelPosition >= 0) && (wheelPosition < 5)) {
        tire1(5, 5, 112, 86);
        tire2(5, 5, 112, 86);
        tire3(5, 5, 112, 86);
        tire4(5, 5, 112, 86);
    } else if (wheelPosition < 10) {
        tire1(5, -5, 112, -98);
        tire2(-5, 5, -117, 86);
        tire3(-5, 5, -117, 86);
        tire4(5, -5, 112, -98);
    } else if (wheelPosition < 15) {
        tire1(-5, -5, -117, -98);
        tire2(-5, -5, -117, -98);
        tire3(-5, -5, -117, -98);
        tire4(-5, -5, -117, -98);
    } else {
        tire1(-5, 5, -117, 86);
        tire2(5, -5, 112, -98);
        tire3(5, -5, 112, -98);
        tire4(-5, 5, -117, 86);
    }
}
function tire1(scaleX, scaleY, translateX, translateY) {
    ctx.save();
    ctx.scale(scaleX, scaleY);
    ctx.translate(translateX, translateY);

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 1, 2);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 2, 1, 2);
    ctx.fillRect(2, 5, 1, 1);
    ctx.fillStyle = colorGrey;
    ctx.fillRect(1, 2, 1, 1);
    ctx.fillRect(2, 3, 1, 2);
    ctx.fillRect(0, 4, 1, 1);
    ctx.fillRect(1, 5, 1, 1);
    ctx.fillStyle = colorGreyLight1;
    ctx.fillRect(1, 0, 2, 2);
    ctx.fillStyle = colorGreyLight2;
    ctx.fillRect(2, 2, 1, 1);
    ctx.fillRect(1, 3, 1, 2);
    ctx.fillRect(0,5,1,1);

    ctx.restore();
}
function tire2(scaleX, scaleY, translateX, translateY) {
    ctx.save();
    ctx.scale(scaleX, scaleY);
    ctx.translate(translateX, translateY);

    ctx.fillStyle = "white";
    ctx.fillRect(4, 0, 1, 1);
    ctx.fillStyle = colorGreyLight1;
    ctx.fillRect(3, 0, 1, 1);
    ctx.fillRect(4, 1, 1, 3);
    ctx.fillRect(4, 5, 1, 1);
    ctx.fillStyle = colorGreyLight2;
    ctx.fillRect(3, 1, 1, 4);
    ctx.fillRect(4, 4, 1, 1);
    ctx.fillStyle = colorGreyLight3;
    ctx.fillRect(3, 5, 1, 1);

    ctx.restore();
}
function tire3(scaleX, scaleY, translateX, translateY) {
    ctx.save();
    ctx.scale(scaleX, scaleY);
    ctx.translate(translateX, translateY);

    ctx.fillStyle = "white";
    ctx.fillRect(0, 10, 1, 2);
    ctx.fillStyle = "black";
    ctx.fillRect(1, 8, 1, 2);
    ctx.fillStyle = colorGrey;
    ctx.fillRect(1, 6, 1, 1);
    ctx.fillStyle = colorGreyLight1;
    ctx.fillRect(0, 6, 1, 2);
    ctx.fillStyle = colorGreyLight2;
    ctx.fillRect(1, 7, 1, 1);
    ctx.fillRect(0, 8, 1, 2);
    ctx.fillRect(1, 11, 1, 1);
    ctx.fillStyle = colorGreyLight3;
    ctx.fillRect(1, 10, 1, 1);

    ctx.restore();
}
function tire4(scaleX, scaleY, translateX, translateY) {
    ctx.save();
    ctx.scale(scaleX, scaleY);
    ctx.translate(translateX, translateY);

    ctx.fillStyle = "white";
    ctx.fillRect(4, 11, 1, 1);
    ctx.fillStyle = "black";
    ctx.fillRect(2, 6, 1, 1);
    ctx.fillStyle = colorGreyLight1;
    ctx.fillRect(4, 6, 1, 2);
    ctx.fillRect(2, 7, 1, 1);
    ctx.fillStyle = colorGreyLight2;
    ctx.fillRect(3, 6, 1, 2);
    ctx.fillRect(2, 8, 1, 1);
    ctx.fillRect(4, 8, 1, 3);
    ctx.fillRect(3, 11, 1, 1);
    ctx.fillStyle = colorGreyLight3;
    ctx.fillRect(3, 8, 1, 2);
    ctx.fillRect(2, 10, 1, 2);
    ctx.fillStyle = colorGreyLight4;
    ctx.fillRect(2, 9, 1, 1);
    ctx.fillRect(3, 10, 1, 1);

    ctx.restore();
}