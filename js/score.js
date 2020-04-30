function showScore() {
    ctx.font = '30px Verdana';
    ctx.fillText(`Points: ${background.frames}`, character.x, 50);
    ctx.fillText(`Lives: ${character.lives}`, character.x + 200, 50);
}