let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let requestId = undefined;
let interval = undefined;
let int2 = undefined;

function startGame() {
    buttonPlay.removeEventListener('click', startGame);
    buttonPlay.innerHTML = 'Pause game';
    obstacles.frequency = 5000;
    obstacles.initialize();
    int2 = setInterval(() => health.initialize(), 3000);
    document.addEventListener('keydown', getKeyDown);
    document.addEventListener('keyup', getKeyUp);
    intervals();
    updateCanvas();
}

function getKeyDown(event) {
    if (event.code == 'ArrowUp' && character.y >= 430) {
        character.gravity = -2.2;
    } else if (event.code == 'ArrowUp' && character.y !== 430) {
        getKeyUp(event);
    }
}

function getKeyUp(event) {
    if (event.code == 'ArrowUp') {
        character.gravity = 0.6;
    }
    if (event.code == 'ArrowDown') {
        character.img.src = './img/doctor.svg';
    }
}

function updateCanvas() {
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    background.show();
    character.show();
    character.newPos();
    obstacles.show();
    health.show();
    background.frames++;
    showScore();
    increaseDifficulty();
    requestId = requestAnimationFrame(updateCanvas);
    character.checkCrash();
    ctx.restore();
}

function intervals() {
    interval = setInterval(
        function () {
            obstacles.initialize();
        }, obstacles.frequency);
}

function gameOver() {
    cancelAnimationFrame(requestId);
    buttonPlay.removeEventListener('click', startGame);
    buttonPlay.innerHTML = 'Start again'
    buttonPlay.addEventListener('click', cleanGame);
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