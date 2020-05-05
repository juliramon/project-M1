let health = {
    item: [],
    speedX: 10,
    frequency: 0,
    initialize: function () {
        let singleItem = {
            x: canvas.width,
            y: 250,
            img: new Image(),
            width: 80,
            height: 80
        }
        this.item.push(singleItem);
    },
    show: function () {
        this.item.forEach(obs => {
            ctx.save();
            obs.x -= this.speedX;
            obs.img.src = './img/face-mask.png';
            ctx.drawImage(obs.img, obs.x, obs.y, obs.width, obs.height);
            ctx.restore();
        });
    }
};