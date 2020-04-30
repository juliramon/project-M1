let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

startGame();

function startGame() {
    requestAnimationFrame(updateCanvas);
    obstacles.initialize();
    setInterval(() => obstacles.initialize(), 5000);
    setInterval(() => health.initialize(), 3000);
    document.addEventListener('keydown', getKeyDown);
    document.addEventListener('keyup', getKeyUp);
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
    background.move();
    background.show();
    character.show();
    character.newPos();
    obstacles.show();
    character.checkCrash();
    health.show();
    background.frames++;
    showScore();
    let animation = requestAnimationFrame(updateCanvas)
    ctx.restore();
}

function gameOver() {
    cancelAnimationFrame(animation);
    console.log('game over');
}