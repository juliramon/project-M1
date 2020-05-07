function showScore() {
    ctx.font = '18px Nunito';
    ctx.fillStyle = '#82368c';
    images.flag.src = './img/flag-points-bar.png';
    ctx.drawImage(images.flag, 30, 17, 30, 34);
    ctx.fillText(Math.floor(background.frames / 5), 70, 40);
    images.mask.src = './img/face-mask-bar.png';
    ctx.drawImage(images.mask, 130, 17, 40, 29);
    ctx.fillText(`${Math.ceil(character.lives / 13)} / 3`, 185, 40);
    images.docFace.src = './img/doc-face-bar.png';
    ctx.drawImage(images.docFace, 250, 17, 40, 29);
    ctx.fillText(localStorage.getItem('playerName'), 300, 40);
    if (character.lives > 28) {
        images.timer.src = './img/timer-bar.png';
        ctx.drawImage(images.timer, 605, 18, 30, 31);
        ctx.font = '55px Nunito';
        ctx.fillText(Math.round(counter / 60), 650, 55);
    }
};

function getHighestScore() {
    let score = Math.floor(background.frames / 5);
    highestScore = localStorage.highestScore ? localStorage.highestScore : 0;

    if (score > highestScore) {
        highestScore = localStorage.highestScore = score;
    }

    return highestScore;
};

function increaseDifficulty() {
    let checkPoints = [
        [100, 300, 500],
        [700, 1000, 1500, 2000]
    ];
    checkPoints[0].forEach(cp => {
        if (background.frames / 5 === cp) {
            console.log('cp L1');
            obstacles.frequency -= 1000;
            clearInterval(intervalObs);
            intervalObs = setInterval(
                function () {
                    obstacles.initialize();
                }, obstacles.frequency);
        }
    });
    checkPoints[1].forEach(cp => {
        if (background.frames / 5 === cp) {
            console.log('cp L2');
            obstacles.frequency -= Math.floor(Math.random() * (1000 - 100 + 1) + 100);
            clearInterval(intervalObs);
            intervalObs = setInterval(
                function () {
                    obstacles.initialize();
                }, obstacles.frequency);
        }
    })
};