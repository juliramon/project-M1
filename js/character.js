let character = {
    img: new Image(),
    x: 0,
    y: 240,
    width: 110,
    height: 110,
    jumpHeight: 10,
    speedY: 0,
    gravity: 0,
    gravitySpeed: 0,
    lives: 0,
    timer: 300,
    transition: 0,
    walk: function () {
        if (this.x < 100) {
            this.x += 1;
        }
    },
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
        let rockbottom = 240;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = 0;
        }
    },
    hitTop: function () {
        let rockTop = 80;
        if (this.y < rockTop) {
            this.y = rockTop;
            this.gravitySpeed = 0;
        }
    },
    crash: function (item) {
        let left = this.x;
        let right = this.x + (this.width);
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
        obstacles.obstacles.forEach(obs => character.crash(obs) ? stopGame() : null);
        health.item.forEach(item => {
            if (character.crash(item)) {
                character.lives++;
                if (character.x > item.x) {
                    item.y -= 800;
                }
            }
        });
    }
}