let buttonPlay = document.querySelector('button');
buttonPlay.addEventListener('click', getPlayerName);
let buttonPause, playerName, buttonRepeat, hidden, visibilityChange;

function getPlayerName() {
    let inputValue = document.getElementById('username').value;
    playerName = inputValue || 'Anonymous Player';
    startGame();
}

function showPauseButton() {
    let canvasWrapper = document.querySelector('.canvas-wrapper');
    buttonPause = document.createElement('button');
    buttonPause.setAttribute('id', 'pause');
    buttonPause.innerHTML = 'Pause game';
    canvasWrapper.appendChild(buttonPause);
    buttonPause.addEventListener('click', pauseGame);
}

// Pause / Stop Game - Check document visibility
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
        pauseGame();
    }
}

if (typeof document.addEventListener === 'undefined' || hidden === undefined) {
    console.log('This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.');
} else {
    document.addEventListener(visibilityChange, handleVisibilityChange, false);
};