let character = {
    img: new Image(),
    x: 50,
    y: 430,
    width: 150,
    height: 150,
    jumpHeight: 10,
    speedY: 0,
    gravity: 0,
    gravitySpeed: 0,
    lives: 0,
    show: function () {
        this.img.src = './img/doctor.svg';
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    },
    newPos: function () {
        this.gravitySpeed += this.gravity;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();
        this.hitTop();
    },
    hitBottom: function () {
        let rockbottom = 430;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = 0;
        }
    },
    hitTop: function () {
        let rockTop = 200;
        if (this.y < rockTop) {
            this.y = rockTop;
            this.gravitySpeed = 0;
        }
    },
    crash: function (item) {
        let left = this.x + 50;
        let right = this.x + (this.width) - 50;
        let top = this.y;
        let bottom = this.y + (this.height) - 50;
        let obsLeft = item.x;
        let obsRight = item.x + (item.width);
        let obsTop = item.y;
        let obsBottom = item.y + (item.height);

        if ((bottom < obsTop) || (top > obsBottom) || (right < obsLeft) || (left > obsRight)) {
            return false;
        }
        return true;
    },
    checkCrash: function () {
        obstacles.obstacles.forEach(obs => character.crash(obs) ? gameOver() : null);

        health.item.forEach(item => character.crash(item) ? character.lives++ : null);
    }
}