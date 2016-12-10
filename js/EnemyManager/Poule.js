function Poule(game, velocity, posX, posY) {
	this.game = game;
	this.pouleSprite = null;
	this.dead = false;
	this.velocity = velocity;
	this.posX = posX;
	this.posY = posY;
	this.isSpriteDestroy = false;
};

Poule.prototype.create = function create() {
	this.pouleSprite = this.game.add.sprite(this.posX, this.posY, "Poule");
	this.game.physics.arcade.enable(this.pouleSprite);

	this.pouleSprite.animations.add('walk');
	this.pouleSprite.enableBody = true;
	this.pouleSprite.body.velocity.x = this.velocity;
	this.pouleSprite.animations.play('walk', 10, true);
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