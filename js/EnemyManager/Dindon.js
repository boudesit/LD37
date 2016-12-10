function Dindon(game, velocity, door, heroSprite) {
	this.game = game;
	this.dindonSprite = null;
	this.dead = false;
	this.velocity = velocity;
	this.door = door;
	this.isSpriteDestroy = false;
	this.heroSprite = heroSprite;
};

Dindon.prototype.create = function create() {
	this.dindonSprite = this.game.add.sprite(this.posX, this.posY, "Dindon", 0);
	this.game.physics.arcade.enable(this.dindonSprite);
	this.dindonSprite.enableBody = true;
	this.dindonSprite.body.velocity.x = this.velocity;
	this.dindonSprite.body.velocity.y = this.velocity;
	this.dindonSprite.physicsBodyType = Phaser.Physics.ARCADE;
	this.dindonSprite.body.collideWorldBounds=true;                        
};

Dindon.prototype.getSprite = function getSprite() {
	return this.dindonSprite;
};

Dindon.prototype.update = function update() {
	this.game.physics.arcade.moveToObject(this.dindonSprite, this.heroSprite, 250);
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