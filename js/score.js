function showScore() {
    ctx.font = '30px Verdana';
    ctx.fillText(`Points: ${Math.round(background.frames / 4)}`, character.x, 50);
    ctx.fillText(`Lives: ${Math.round(character.lives / 14)}`, character.x + 200, 50);
    ctx.fillText(`${playerName}`, canvas.width - 120, 50);
}

function increaseDifficulty() {
    let checkPointsL1 = [100, 300, 500];
    let checkpointL2 = [700, 1000, 1500, 2000]
    checkPointsL1.forEach(function (cp) {
        if (background.frames / 4 === cp) {
            console.log('checkpointL1');
            obstacles.frequency -= 1000;
            clearInterval(interval);
            interval = setInterval(
                function () {
                    obstacles.initialize();
                }, obstacles.frequency);
        }
    });
    checkpointL2.forEach(function (cp) {
        if (background.frames / 4 === cp) {
            console.log('checkpointL2');
            obstacles.frequency -= Math.floor(Math.random() * (1000 - 100 + 1) + 100);
            clearInterval(interval);
            interval = setInterval(
                function () {
                    obstacles.initialize();
                }, obstacles.frequency);
        }
    })
}