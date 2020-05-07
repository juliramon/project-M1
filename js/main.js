let requestId, intervalObs, intervalHealth, bgLoop, gameOver, jump, reward, highestScore, counter;
counter = 510;
bgLoop = new Music('./audio/bg-loop.wav');
jump = new Music('./audio/jump.wav');
gameOver = new Music('./audio/game-over.wav');
reward = new Music('./audio/reward.wav');

let images = {
    flag: new Image(),
    mask: new Image(),
    docFace: new Image(),
    timer: new Image(),
};

function startGame() {
    bgLoop.play();
    canvasWrapper.removeChild(inputWrapper);
    showPauseButton();
    obstacles.frequency = 4000;
    health.frequency = 7000;
    document.addEventListener('keydown', getKeyDown);
    document.addEventListener('keyup', getKeyUp);
    intervals();
    updateCanvas();
};

function getKeyDown(event) {
    if (event.code == 'ArrowUp' && character.y >= 240) {
        character.gravity = -2.2;
        jump.play();
    } else if (event.code == 'ArrowUp' && character.y !== 240) {
        getKeyUp(event);
    }
    if (event.code == 'Space' && !checkPause) {
        pauseGame();
    } else if (event.code == 'Space' && checkPause) {
        resumeGame();
    }
};

function getKeyUp(event) {
    if (event.code == 'ArrowUp') {
        character.gravity = 0.6;
    }
};

function updateCanvas() {
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    background.show();
    character.show();
    character.walk();
    character.newPos();
    obstacles.show();
    health.show();
    background.frames++;
    character.lives > 28 ? counter-- : null;
    showScore();
    increaseDifficulty();
    requestId = requestAnimationFrame(updateCanvas);
    character.checkCrash();
    character.lives > 28 ? character.unlockUpgrade() : null;
    ctx.restore();
};

function intervals() {
    intervalObs = setInterval(
        function () {
            obstacles.initialize();
        }, obstacles.frequency);
    intervalHealth = setInterval(
        function () {
            health.initialize();
        }, health.frequency);
};

function repeatGame() {
    bgLoop.play();
    showPauseButton();
    obstacles.frequency = 4000;
    health.frequency = 7000;
    document.addEventListener('keydown', getKeyDown);
    document.addEventListener('keyup', getKeyUp);
    intervals();
    updateCanvas();
};

function pauseGame() {
    cancelAnimationFrame(requestId);
    clearInterval(intervalObs);
    clearInterval(intervalHealth);
    bgLoop.stop();
    buttonPause.removeEventListener('click', pauseGame);
    buttonPause.innerHTML = 'Resume game';
    buttonPause.addEventListener('click', resumeGame);
    checkPause = true;
};

function resumeGame() {
    bgLoop.play();
    obstacles.frequency = 4000;
    health.frequency = 7000;
    document.addEventListener('keydown', getKeyDown);
    document.addEventListener('keyup', getKeyUp);
    buttonPause.removeEventListener('click', resumeGame);
    buttonPause.innerHTML = 'Pause game';
    buttonPause.addEventListener('click', pauseGame);
    intervals();
    updateCanvas();
    checkPause = false;
};

function stopGame() {
    cancelAnimationFrame(requestId);
    getHighestScore();
    bgLoop.stop();
    gameOver.play();
    ctx.save();
    ctx.fillStyle = 'rgba(0,0,0,.8';
    ctx.fillRect(0, 0, 900, 400);
    ctx.restore();
    ctx.save();
    ctx.font = '65px Nunito';
    ctx.fillStyle = '#D60B52';
    ctx.fillText('GAME OVER!', 250, 130);
    ctx.restore();
    ctx.save();
    ctx.font = '30px Nunito';
    ctx.fillStyle = 'white';
    ctx.fillText(`Score: ${Math.floor(background.frames / 5)} I Highest score: ${localStorage.highestScore}`, 244, 180);
    ctx.restore();
    let canvasWrapper = document.querySelector('.canvas-wrapper');
    canvasWrapper.removeChild(buttonPause);
    buttonRepeat = document.createElement('button');
    buttonRepeat.setAttribute('id', 'repeat');
    buttonRepeat.innerHTML = 'Try again';
    canvasWrapper.appendChild(buttonRepeat);
    buttonRepeat.addEventListener('click', cleanGame);
};

function cleanGame() {
    let canvasWrapper = document.querySelector('.canvas-wrapper');
    canvasWrapper.removeChild(buttonRepeat);
    buttonPlay.removeEventListener('click', cleanGame);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    health.item = [];
    character.lives = 0;
    character.x = 0;
    background.frames = 0;
    obstacles.obstacles = [];
    obstacles.frequency = 0;
    clearInterval(intervalHealth);
    clearInterval(intervalObs);
    repeatGame();
};

function Music(src) {
    this.music = document.createElement('audio');
    this.music.src = src;
    this.music.setAttribute('preload', 'auto');
    this.music.setAttribute('controls', 'none');
    src === './audio/bg-loop.wav' ? this.music.setAttribute('loop', 'loop') : null;
    this.music.style.display = 'none';
    document.body.appendChild(this.music);
    this.play = function () {
        this.music.play();
    }
    this.stop = function () {
        this.music.pause();
    }
};