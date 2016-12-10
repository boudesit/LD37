function Dindon(game, velocity, door) {
	this.game = game;
	this.dindonSprite = null;
	this.dead = false;
	this.velocity = velocity;
	this.door = door;
	this.isSpriteDestroy = false;
};

Dindon.prototype.create = function create() {
	this.dindonSprite = this.game.add.sprite(this.posX, this.posY, "Dindon", 0);
	this.game.physics.arcade.enable(this.dindonSprite);
	this.dindonSprite.enableBody = true;
	this.dindonSprite.body.velocity.x = this.velocity;
	this.dindonSprite.visible = true;
};

Dindon.prototype.update = function update() {
	
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