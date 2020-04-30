function showScore() {
    ctx.font = '30px Verdana';
    ctx.fillText(`Points: ${Math.round(background.frames / 4)}`, character.x, 50);
    ctx.fillText(`Lives: ${Math.round(character.lives / 14)}`, character.x + 200, 50);
}