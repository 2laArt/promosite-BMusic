
export class particleCluster {
	constructor(ctx, count, width, height) {
		this.ctx = ctx;
		this.x = Math.random() * width;
		this.y = Math.random() * height;
		// this.bg = "hsl(" + (Math.floor(Math.random() * 360)) + ", 100%,50%)"
		this.bg = "hsl(" + (count % 360) + ",100%,50%"
		this.arr = [...new Array(50)].map(() => new Particle(this.ctx, this.x, this.y, this.bg));
	}
	update() {
		for (let i = 0; i < this.arr.length; i++) {
			this.arr[i].size < 0.2 ? (this.arr.splice(i, 1), i--) : this.arr[i].draw()
		}
	}
}

export class Particle {
	constructor(ctx, x, y, bg) {
		this.x = x;
		this.y = y;
		this.ctx = ctx;
		this.speed = { min: 1.5, max: 3 };
		this.size = Math.random() * 5 + 2;
		this.speedX = Math.random() * this.speed.max - this.speed.min;
		this.speedY = Math.random() * this.speed.max - this.speed.min;
		this.bg = bg;
	}
	update() {
		this.x += this.speedX;
		this.y += this.speedY;
		this.size > 0.2 ? this.size -= 0.1 : false;
	}
	draw() {
		this.update()
		this.ctx.beginPath();
		this.ctx.fillStyle = this.bg;
		this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		this.ctx.fill();
		this.ctx.stroke();
	}
}