let counter = 10;

function showScore() {
    ctx.font = '18px Nunito';
    ctx.fillStyle = '#82368c';
    let flag = new Image();
    flag.src = './img/flag-points.png';
    ctx.drawImage(flag, 10, 12, 65, 49);
    ctx.fillText(`${Math.round(background.frames / 5)}`, 70, 40);
    let mask = new Image();
    mask.src = './img/face-mask-bar.png';
    ctx.drawImage(mask, 125, 17, 50, 34);
    ctx.fillText(`${Math.ceil(character.lives / 13)} / 5`, 185, 40);
    let docFace = new Image();
    docFace.src = './img/doc-face.png';
    ctx.drawImage(docFace, 250, 17, 50, 33);
    ctx.fillText(`${playerName}`, 300, 40);

}

function increaseDifficulty() {
    let checkPointsL1 = [100, 300, 500];
    let checkpointL2 = [700, 1000, 1500, 2000];
    checkPointsL1.forEach(function (cp) {
        if (background.frames / 5 === cp) {
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
            obstacles.frequency -= Math.floor(Math.random() * (1000 - 100 + 1) + 100);
            clearInterval(intervalObs);
            intervalObs = setInterval(
                function () {
                    obstacles.initialize();
                }, obstacles.frequency);
        }
    })
}