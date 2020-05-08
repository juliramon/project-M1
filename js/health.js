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
            ctx.drawImage(mask, obs.x, obs.y, obs.width, obs.height);
            ctx.restore();
        });
    }
};