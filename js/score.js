function showScore() {
    ctx.font = '18px Nunito';
    ctx.fillStyle = '#82368c';
    ctx.fillText(`Points: ${Math.round(background.frames / 5)}`, 30, 40);
    ctx.fillText(`Lives: ${Math.round(character.lives / 14)}`, 150, 40);
    ctx.fillText(`${playerName}`, 250, 40);
}

function increaseDifficulty() {
    let checkPointsL1 = [100, 300, 500];
    let checkpointL2 = [700, 1000, 1500, 2000];
    checkPointsL1.forEach(function (cp) {
        if (background.frames / 5 === cp) {
            console.log('checkpointL1' + cp);
            obstacles.frequency -= 1000;
            clearInterval(intervalObs);
            intervalObs = setInterval(
                function () {
                    obstacles.initialize();
                }, obstacles.frequency);
        }
    });
    checkpointL2.forEach(function (cp) {
        if (background.frames / 5 === cp) {
            console.log('checkpointL2' + cp);
            obstacles.frequency -= Math.floor(Math.random() * (1000 - 100 + 1) + 100);
            clearInterval(intervalObs);
            intervalObs = setInterval(
                function () {
                    obstacles.initialize();
                }, obstacles.frequency);
        }
    })
}