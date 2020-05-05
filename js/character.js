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
    //characters: ['./img/firefighter.png', './img/police.png', './img/doctor.png'],
    walk: function () {
        if (this.x < 100) {
            this.x += 1;
        }
    },
    show: function () {
        if (character.lives > 30) { // 60
            this.img.src = './img/doctor-mask.png';
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } else if (character.lives <= 30) {
            this.img.src = './img/doctor.png';
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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
                if (character.lives < 30) {
                    stopGame();
                }
                if (character.lives > 30) {
                    obs.y -= 10;
                }
            };
        });
        health.item.forEach(item => {
            if (character.crash(item)) {
                console.log(character.lives++);
                reward.play();
                if (character.x > item.x) {
                    item.y -= 800;
                }
            }
        });
    },
    unlockUpgrade: function () {
        if (this.lives > 30) {
            bgLoop.music.playbackRate = 2;
            setTimeout(() => {
                bgLoop.music.playbackRate = 1;
            }, 8000);
            clearInterval(intervalHealth);
            console.log('interval health anulat');
            intervalHealth = setInterval(
                function () {
                    health.initialize();
                }, health.frequency)
            setTimeout(intervalHealth, 8000);
            let resetCounter = () => counter = 510;
            setTimeout(resetCounter, 10000);
            let resetLives = () => this.lives = 0;
            setTimeout(resetLives, 8000);
        }
    }
}