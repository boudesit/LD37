function Dindon(game, velocity, door) {
	this.game = game;
	this.dindonSprite = null;
	this.dead = false;
	this.velocity = velocity;
	this.door = door;
	this.isSpriteDestroy = false;
};

Dindon.prototype.create = function create() {
	// this.dindonSprite = this.game.add.sprite(this.posX, this.posY, "Dindon");
	// this.game.physics.arcade.enable(this.dindonSprite);
	var style = { font: "32px Arial", fill: "#ff0044", align: "center", backgroundColor: "#ffff00" };

	this.dindonSprite = this.game.add.text(this.door[0], this.door[1], 'Time until event: ' + 20, style);
	 
	// this.dindonSprite.animations.add('walk');
	// this.dindonSprite.enableBody = true;
	// this.dindonSprite.body.velocity.x = this.velocity;
	// this.dindonSprite.animations.play('walk', 10, true);
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