function Dindon(game, velocity, door, renard) {
	this.game = game;
	this.dindonSprite = null;
	this.dead = false;
	this.velocity = velocity;
	this.door = door;
	this.isSpriteDestroy = false;
	this.renard = renard;
};

Dindon.prototype.create = function create() {
	this.dindonSprite = this.game.add.sprite(this.posX, this.posY, "Dindon", 0);
	this.game.physics.arcade.enable(this.dindonSprite);
	this.dindonSprite.enableBody = true;
	this.dindonSprite.body.velocity.x = this.velocity;
	this.dindonSprite.physicsBodyType = Phaser.Physics.ARCADE;
	this.dindonSprite.body.collideWorldBounds=true;                        
	
};

Dindon.prototype.update = function update() {
	degrees = game.physics.arcade.angleBetween(this.dindonSprite, this.renard) * (180/Math.PI);
	this.game.physics.arcade.velocityFromAngle(degrees, 100, ufoSprite.body.velocity);
};

Dindon.prototype.destroy = function destroy() {
	this.dindonSprite.destroy();
};

Dindon.prototype.isDead = function isDead() {
	return this.dead;
};

Dindon.prototype.die = function die() {
	this.dead = true;
};