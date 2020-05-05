let canvas, ctx, requestId, intervalObs, intervalHealth, bgLoop, gameOver, jump, reward, randomChar;
canvas = document.querySelector('#canvas');
ctx = canvas.getContext('2d');
let counter = 580;
canvas.width = 900;
canvas.height = 400;
bgLoop = new music('./audio/bg-loop.wav');
jump = new music('./audio/jump.wav');
gameOver = new music('./audio/game-over.wav');
reward = new music('./audio/reward.wav');

function startGame() {
    bgLoop.play();
    let canvasWrapper = document.querySelector('.canvas-wrapper');
    let inputWrapper = document.querySelector('.input-wrapper');
    canvasWrapper.removeChild(inputWrapper);
    showPauseButton();
    obstacles.frequency = 4000;
    health.frequency = 7000;
    document.addEventListener('keydown', getKeyDown);
    document.addEventListener('keyup', getKeyUp);
    pickCharacter();
    intervals();
    updateCanvas();
}

function repeatGame() {
    bgLoop.play();
    showPauseButton();
    pickCharacter();
    obstacles.frequency = 4000;
    health.frequency = 7000;
    document.addEventListener('keydown', getKeyDown);
    document.addEventListener('keyup', getKeyUp);
    intervals();
    updateCanvas();
}

function getKeyDown(event) {
    if (event.code == 'ArrowUp' && character.y >= 240) {
        character.gravity = -2.2;
        jump.play();
    } else if (event.code == 'ArrowUp' && character.y !== 240) {
        getKeyUp(event);
    }
}

function getKeyUp(event) {
    if (event.code == 'ArrowUp') {
        character.gravity = 0.6;
    }
}

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
    character.lives > 12 ? counter-- : null;
    showScore();
    increaseDifficulty();
    requestId = requestAnimationFrame(updateCanvas);
    character.checkCrash();
    character.unlockUpgrade();
    ctx.restore();
}

function intervals() {
    intervalObs = setInterval(
        function () {
            obstacles.initialize();
        }, obstacles.frequency);
    intervalHealth = setInterval(
        function () {
            health.initialize();
        }, health.frequency);
}

function pauseGame() {
    cancelAnimationFrame(requestId);
    clearInterval(intervalObs);
    clearInterval(intervalHealth);
    bgLoop.stop();
    buttonPause.removeEventListener('click', pauseGame);
    buttonPause.innerHTML = 'Resume game';
    buttonPause.addEventListener('click', resumeGame);
}

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
}

function stopGame() {
    cancelAnimationFrame(requestId);
    bgLoop.stop();
    gameOver.play();
    ctx.save();
    ctx.fillStyle = 'rgba(0,0,0,.8';
    ctx.fillRect(0, 0, 900, 400);
    ctx.restore();
    ctx.save();
    ctx.font = '65px Nunito';
    ctx.fillStyle = '#D60B52';
    ctx.fillText('GAME OVER!', 250, 150);
    ctx.restore();
    let canvasWrapper = document.querySelector('.canvas-wrapper');
    canvasWrapper.removeChild(buttonPause);
    buttonRepeat = document.createElement('button');
    buttonRepeat.setAttribute('id', 'repeat');
    buttonRepeat.innerHTML = 'Try again';
    canvasWrapper.appendChild(buttonRepeat);
    buttonRepeat.addEventListener('click', cleanGame);
}

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
    counter = 580;
    clearInterval(intervalHealth);
    clearInterval(intervalObs);
    repeatGame();
}

function music(src) {
    this.music = document.createElement('audio');
    this.music.src = src;
    this.music.setAttribute('preload', 'auto');
    this.music.setAttribute('controls', 'none');
    if (src === './audio/bg-loop.wav') {
        this.music.setAttribute('loop', 'loop');
    }
    this.music.style.display = 'none';
    document.body.appendChild(this.music);
    this.play = function () {
        this.music.play();
    }
    this.stop = function () {
        this.music.pause();
    }
}

function pickCharacter() {
    randomChar = character.characters[Math.floor(Math.random() * character.characters.length)];
    return randomChar;
};