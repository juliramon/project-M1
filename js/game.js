let buttonPlay = document.querySelector('button');
buttonPlay.addEventListener('click', getPlayerName);

let playerName = '';

function getPlayerName() {
    let inputValue = document.getElementById('username').value;
    playerName = inputValue;
    //buildCanvas();
    startGame();
}

function buildCanvas() {
    let main = document.querySelector('main');
}