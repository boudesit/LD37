function Poule(game, velocity, door) {
	this.game = game;
	this.pouleSprite = null;
	this.dead = false;
	this.velocity = velocity;
	this.door = door;
	this.isSpriteDestroy = false;
};

Poule.prototype.create = function create() {
	this.pouleSprite = this.game.add.sprite(this.posX, this.posY, "Poule", 0);
	this.game.physics.arcade.enable(this.pouleSprite);
	this.pouleSprite.enableBody = true;
	this.pouleSprite.body.velocity.x = this.velocity;
	this.pouleSprite.physicsBodyType = Phaser.Physics.ARCADE;
	this.pouleSprite.body.collideWorldBounds=true;
};

Poule.prototype.update = function update() {

};

Poule.prototype.destroy = function destroy() {
	this.pouleSprite.destroy();
};

Poule.prototype.isDead = function isDead() {
	return this.dead;
};

Poule.prototype.die = function die() {
	this.dead = true;
};