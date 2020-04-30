let health = {
    item: [],
    speedX: 10,
    period: 3000,
    initialize: function () {
        let singleObstacle = {
            x: canvas.width,
            y: 0,
            minY: canvas.height - 200,
            maxY: canvas.height - 100,
            img: new Image(),
            width: 80,
            height: 80
        }
        singleObstacle.y = Math.floor(Math.random() * (singleObstacle.maxY - singleObstacle.minY + 1) + singleObstacle.minY);
        this.item.push(singleObstacle);
    },
    show: function () {
        this.item.forEach(obs => obs.x -= this.speedX);
        this.item.forEach(obs => {
            obs.img.src = './img/face-mask.svg';
            ctx.drawImage(obs.img, obs.x, obs.y, obs.width, obs.height);
        })
    }
}