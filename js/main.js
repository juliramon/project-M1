let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let buttonPlay = document.querySelector('button');
buttonPlay.addEventListener('click', startGame);

function startGame() {
    obstacles.initialize();
    setInterval(() => obstacles.initialize(), 5000);
    setInterval(() => health.initialize(), 3000);
    document.addEventListener('keydown', getKeyDown);
    document.addEventListener('keyup', getKeyUp);
    buttonPlay.removeEventListener('click', startGame);
    buttonPlay.innerHTML = 'Pause game';
    buttonPlay.addEventListener('click', pauseGame);
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

let requestId = undefined;

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

function pauseGame() {
    cancelAnimationFrame(requestId);
    buttonPlay.removeEventListener('click', pauseGame);
    buttonPlay.innerHTML = 'Resume game';
    buttonPlay.addEventListener('click', startGame);
}

function gameOver() {
    cancelAnimationFrame(requestId);
    buttonPlay.innerHTML = 'Try again';
    buttonPlay.addEventListener('click', startGame);
};