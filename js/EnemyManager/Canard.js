function Canard(game, velocity, posX, posY) {
	this.game = game;
	this.canardSprite = null;
	this.dead = false;
	this.velocity = velocity;
	this.posX = posX;
	this.posY = posY;
	this.isSpriteDestroy = false;
};

Canard.prototype.create = function create() {
	// this.canardSprite = this.game.add.sprite(this.posX, this.posY, "Canard");
	// this.game.physics.arcade.enable(this.canardSprite);

	// this.canardSprite.animations.add('walk');
	// this.canardSprite.enableBody = true;
	// this.canardSprite.body.velocity.x = this.velocity;
	// this.canardSprite.animations.play('walk', 10, true);
};

Canard.prototype.update = function update() {
	
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