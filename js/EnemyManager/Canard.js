function Canard(game, velocity, door, heroSprite) {
	this.game = game;
	this.canardSprite = null;
	this.dead = false;
	this.velocity = velocity;
	this.door = door;
	this.isSpriteDestroy = false;
	this.heroSprite = heroSprite;
};

Canard.prototype.create = function create() {
	this.canardSprite = this.game.add.sprite(this.posX, this.posY, "Canard", 0);
	this.game.physics.arcade.enable(this.canardSprite);
	this.canardSprite.enableBody = true;
	this.canardSprite.body.velocity.x = this.velocity;
	this.canardSprite.body.velocity.y = this.velocity;
	this.canardSprite.physicsBodyType = Phaser.Physics.ARCADE;
	this.canardSprite.body.collideWorldBounds=true;
};

Canard.prototype.getSprite = function getSprite() {
	return this.canardSprite;
};

Canard.prototype.update = function update() {
	this.game.physics.arcade.moveToObject(this.canardSprite, this.heroSprite, 250);
};

Canard.prototype.destroy = function destroy() {
	this.canardSprite.destroy();
};

Canard.prototype.isDead = function isDead() {
	return this.dead;
};

Canard.prototype.die = function die() {
	this.dead = true;
};