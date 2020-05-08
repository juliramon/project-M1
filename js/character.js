let character = {
    x: 0,
    y: 240,
    width: 110,
    height: 110,
    jumpHeight: 10,
    speedY: 0,
    gravity: 0,
    gravitySpeed: 0,
    lives: 0,
    timer: 280,
    transition: 0,
    walk: function () {
        this.x < 100 ? this.x += 1 : null;
    },
    show: function () {
        if (character.lives > 28) {
            ctx.drawImage(sprite, 0, 0, 319, 388, this.x, this.y, this.width, this.height);
        } else if (character.lives <= 28) {
            ctx.drawImage(sprite, 319, 0, 319, 388, this.x, this.y, this.width, this.height);
        }
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
        let left = this.x + 10;
        let right = this.x + (this.width);
        let top = this.y;
        let bottom = this.y + (this.height) - 20;
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
        obstacles.obstacles.forEach(obs => {
            if (character.crash(obs)) {
                character.lives < 28 ? stopGame() : null;
                character.lives > 28 ? obs.y -= 10 : null;
            };
        });
        health.item.forEach(item => {
            if (character.crash(item)) {
                character.lives++;
                reward.play();
                character.x > item.x ? item.y -= 800 : null;
            }
        });
    },
    unlockUpgrade: function () {
        background.speed = -5;
        bgLoop.music.playbackRate = 2;
        setTimeout(() => {
            bgLoop.music.playbackRate = 1;
            background.speed = -2;
            this.lives = 0;
            counter = 510;
        }, 8000);
        clearInterval(intervalHealth);
        intervalHealth = setInterval(
            function () {
                health.initialize();
            }, health.frequency)
        setTimeout(intervalHealth, 8000);
    }
}