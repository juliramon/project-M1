let health = {
    item: [],
    speedX: 10,
    frequency: 0,
    initialize: function () {
        let singleItem = {
            x: canvas.width,
            y: 250,
            width: 80,
            height: 80
        }
        this.item.push(singleItem);
    },
    show: function () {
        this.item.forEach(obs => {
            ctx.save();
            obs.x -= this.speedX;
            ctx.drawImage(sprite, 718, 319, 100, 68.69, obs.x, obs.y, obs.width, obs.height);
            ctx.restore();
        });
    }
};