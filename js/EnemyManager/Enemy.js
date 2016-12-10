function Enemy(game, velocity, type, posX, posY, spriteNumber) {
	this.game = game;
	this.enemy = null;
	this.isDead = null;
	this.velocity = velocity;
	this.cursors = null;
	this.posX = posX;
	this.posY = posY;
	this.isDead = false;
	this.isDraw = false;
	this.isSpriteDestroy;
};

var types = ["Canard", "Dindon", "Poule"];

Enemy.prototype.create = function create() {
	this.createEnemy();
};

Enemy.prototype.update = function update() {
	this.enemy.update();
};

Enemy.prototype.createEnemy = function createEnemy(){
	if(type === "Canard"){
		this.enemy = new Canard(this.game, this.velocity, this.posX, this.posY);
	}else if(type === "Dindon"){
		this.enemy = new Dindon(this.game, this.velocity, this.posX, this.posY);
	}else if(type === "Poule"){
		this.enemy = new Poule(this.game, this.velocity, this.posX, this.posY);
	}
};

Enemy.prototype.destroy = function destroy() {
	this.enemy.destroy();
};