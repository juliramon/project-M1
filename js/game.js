let buttonPlay = document.querySelector('button');
buttonPlay.addEventListener('click', getPlayerName);
let buttonPause, playerName;

function getPlayerName() {
    let inputValue = document.getElementById('username').value;
    playerName = inputValue || 'Anonymous Player';
    startGame();
    showPauseButton();
}

function showPauseButton() {
    let inputWrapper = document.querySelector('.input-wrapper');
    let canvasWrapper = document.querySelector('.canvas-wrapper');
    canvasWrapper.removeChild(inputWrapper);
    buttonPause = document.createElement('button');
    buttonPause.setAttribute('id', 'pause');
    buttonPause.innerHTML = 'Pause game';
    canvasWrapper.appendChild(buttonPause);
    buttonPause.addEventListener('click', pauseGame);
}

// Pause / Stop Game - Check document visibility
let hidden = '';
let visibilityChange = '';
if (typeof document.hidden !== 'undefined') {
    hidden = 'hidden';
    visibilityChange = 'visibilitychange';
} else if (typeof document.msHidden !== 'undefined') {
    hidden = 'msHidden';
    visibilityChange = 'msVisibilitychange';
} else if (typeof document.webkitHidden !== 'undefined') {
    hidden = 'webkitHidden';
    visibilityChange = 'webkitvisibilitychange';
}

function handleVisibilityChange() {
    if (document.hidden) {
        console.log('game paused');
        console.log('hidden: ' + document.hidden);
        pauseGame();
    } else {
        console.log('game resumed');
        console.log('hidden: ' + document.hidden);
        //updateCanvas();
    }
}

if (typeof document.addEventListener === 'undefined' || hidden === undefined) {
    console.log('This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.');
} else {
    document.addEventListener(visibilityChange, handleVisibilityChange, false);
};