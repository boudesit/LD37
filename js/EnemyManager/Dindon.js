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

Dindon.prototype.create = function create() {
	this.dindonSprite = this.game.add.sprite(this.posX, this.posY, "Dindon");
	this.game.physics.arcade.enable(this.dindonSprite);

	this.dindonSprite.animations.add('walk');
	this.dindonSprite.enableBody = true;
	this.dindonSprite.body.velocity.x = this.velocity;
	this.dindonSprite.animations.play('walk', 10, true);

};


Dindon.prototype.update = function update() {
	
};

Dindon.prototype.destroy = function destroy() {
	this.dindonSprite.destroy();
};