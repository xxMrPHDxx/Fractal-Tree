export default class Leaf{
	constructor(){
		this.pos = {x:Math.random() * width,y:Math.random() * (height - 100)};
		this.reached = false;
	}

	draw(ctx){
		ctx.fillStyle = '#fff';
		ctx.beginPath();
		ctx.ellipse(this.pos.x,this.pos.y,4,4,0,Math.PI * 2,0);
		ctx.fill();
	}
}