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
	this.canardSprite = this.game.add.sprite(this.door[0], this.door[1], "Canard", 0);
	this.game.physics.arcade.enable(this.canardSprite);
	this.canardSprite.enableBody = true;
	this.canardSprite.body.velocity.x = this.velocity;
	this.canardSprite.body.velocity.y = this.velocity;
	this.canardSprite.physicsBodyType = Phaser.Physics.ARCADE;
	this.canardSprite.body.collideWorldBounds=true;
	this.canardSprite.scale.setTo(1.5,1.5);
	this.canardSprite.life = 3;
};

Canard.prototype.update = function update() {
	if (this.canardSprite.alive === true){
		this.game.physics.arcade.moveToObject(this.canardSprite, this.heroSprite, 175);
	}else{
		this.canardSprite.destroy();
	}
};

Canard.prototype.getSprite = function getSprite() {
	return this.canardSprite;
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
