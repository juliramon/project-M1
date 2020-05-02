let background = {
    img: new Image(),
    x: canvas.width,
    y: 0,
    width: canvas.width,
    height: canvas.height,
    speed: -2,
    frames: 0,
    move: function () {
        this.x += this.speed;
        this.x %= canvas.width;
    },
    show: function () {
        this.img.src = './img/bg-game.svg';
        ctx.drawImage(this.img, this.x, 0);
        ctx.drawImage(this.img, this.x - this.img.width + 1, 0);
        this.x += this.speed;
        if (this.x <= 0) {
            this.x = canvas.width;
        }
    }
}