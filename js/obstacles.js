let obstacles = {
    obstacles: [],
    speedX: 10,
    frequency: 0,
    initialize: function () {
        let singleObstacle = {
            x: canvas.width,
            y: 0,
            minY: canvas.height - 230,
            maxY: canvas.height - 100,
            width: 65,
            height: 65
        }
        singleObstacle.y = Math.floor(Math.random() * (singleObstacle.maxY - singleObstacle.minY + 1) + singleObstacle.minY);
        this.obstacles.push(singleObstacle);
    },
    show: function () {
        this.obstacles.forEach(obs => {
            ctx.save();
            obs.x -= this.speedX;
            ctx.drawImage(sprite, 638, 309, 80, 78.4, obs.x, obs.y, obs.width, obs.height);
            ctx.restore();
        });
    }
};