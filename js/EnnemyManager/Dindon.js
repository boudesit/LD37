function Dindon(game, velocity, posX, posY) {
	this.game = game;
	this.dindonSprite = null;
	this.isDead = null;
	this.velocity = velocity;
	this.posX = posX;
	this.posY = posY;
	this.isDead = false;
	this.isDraw = false;
	this.isSpriteDestroy = false;
};

Ennemy.prototype.create = function create() {
};


Ennemy.prototype.update = function update() {
	if(!this.isDraw && !this.isDead){
		this.ennemySprite.body.velocity.x = this.velocity;
	}
};