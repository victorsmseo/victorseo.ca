var canvas, ctx;
window.onload = init;
function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');
    ctx.translate(50, 50);
    drawMonster(0, 0);
}
function drawMonster(x, y) {
    // head
    ctx.fillStyle = 'lightgreen';
    ctx.fillRect(0, 0, 200, 200);
    // eyes
    ctx.fillStyle = 'red';
    ctx.fillRect(35, 30, 20, 20);
    ctx.fillRect(140, 30, 20, 20);
    // interior of eye
    ctx.fillStyle = 'yellow';
    ctx.fillRect(43, 37, 10, 10);
    ctx.fillRect(143, 37, 10, 10);
    // Nose
    ctx.fillStyle = 'black';
    ctx.fillRect(90, 70, 20, 80);
    // Mouth
    ctx.fillStyle = 'purple';
    ctx.fillRect(60, 165, 80, 20);
    // coordinate system at (0, 0)
    drawArrow(ctx, 0, 0, 100, 0, 10, 'red');
    drawArrow(ctx, 0, 0, 0, 100, 10, 'red');
}