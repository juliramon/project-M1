let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let requestId = undefined;
let int1 = undefined;
let int2 = undefined;

let buttonPlay = document.querySelector('button');
buttonPlay.addEventListener('click', startGame);

function startGame() {
    buttonPlay.innerHTML = 'Pause';
    obstacles.initialize();
    int1 = setInterval(() => obstacles.initialize(), 5000);
    int2 = setInterval(() => health.initialize(), 3000);
    document.addEventListener('keydown', getKeyDown);
    document.addEventListener('keyup', getKeyUp);
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
    requestId = requestAnimationFrame(updateCanvas);
    character.checkCrash();
    ctx.restore();
}

function gameOver() {
    cancelAnimationFrame(requestId);
    buttonPlay.removeEventListener('click', startGame);
    buttonPlay.innerHTML = 'Try again';
    buttonPlay.addEventListener('click', cleanGame);
};

function cleanGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    clearInterval(int1);
    clearInterval(int2);
    obstacles.obstacles = [];
    health.item = [];
    character.lives = 0;
    background.frames = 0;
    buttonPlay.removeEventListener('click', cleanGame);
    buttonPlay.innerHTML = 'Pause';
    buttonPlay.addEventListener('click', startGame);
    startGame();
}