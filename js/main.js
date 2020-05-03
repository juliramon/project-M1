let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
canvas.width = 900;
canvas.height = 400;
let requestId, intervalObs, intervalHealth, bgLoop, gameOver, jump, reward;

function startGame() {
    bgLoop = new music('./audio/bg-loop.wav');
    bgLoop.play();
    buttonPlay.removeEventListener('click', startGame);
    buttonPlay.innerHTML = 'Pause game';
    buttonPlay.addEventListener('click', pauseGame);
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
        jump = new music('./audio/jump.wav');
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
    counter--;
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

function stopGame() {
    cancelAnimationFrame(requestId);
    bgLoop.stop();
    gameOver = new music('./audio/game-over.wav');
    gameOver.play();
    buttonPause.innerHTML = 'Play again';
    buttonPause.addEventListener('click', cleanGame);
};

function cleanGame() {
    buttonPlay.removeEventListener('click', cleanGame);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    health.item = [];
    character.lives = 0;
    background.frames = 0;
    obstacles.obstacles = [];
    obstacles.frequency = 0;
    clearInterval(interval);
    startGame();
}

function pauseGame() {
    cancelAnimationFrame(requestId);
    clearInterval(intervalObs);
    clearInterval(intervalHealth);
    bgLoop.stop();
    buttonPause.removeEventListener('click', pauseGame);
    buttonPause.innerHTML = 'Resume game';
    buttonPause.addEventListener('click', updateCanvas);
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