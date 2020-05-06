let handleVisibilityChange = () => document.hidden ? pauseGame() : null;
document.addEventListener('visibilitychange', handleVisibilityChange);
let buttonPlay, canvasWrapper, inputWrapper, canvas, ctx, playerName, buttonPause, buttonRepeat, checkPause;

buttonPlay = document.querySelector('button');
buttonPlay.addEventListener('click', getPlayerName);
canvasWrapper = document.querySelector('.canvas-wrapper');
inputWrapper = document.querySelector('.input-wrapper');
canvas = document.querySelector('#canvas');
ctx = canvas.getContext('2d');
canvas.width = 900;
canvas.height = 400;

function getPlayerName() {
    let inputValue = document.getElementById('username').value;
    playerName = inputValue || 'Anonymous Player';
    localStorage.setItem('playerName', playerName);
    startGame();
};

function showPauseButton() {
    buttonPause = document.createElement('button');
    buttonPause.setAttribute('id', 'pause');
    buttonPause.innerHTML = 'Pause game';
    canvasWrapper.appendChild(buttonPause);
    buttonPause.addEventListener('click', pauseGame);
};