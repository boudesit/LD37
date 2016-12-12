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
	this.canardSprite.animations.add('idle', [0,1,2]);
	this.canardSprite.animations.play('idle', 5, true);
	this.game.physics.arcade.enable(this.canardSprite);
	this.canardSprite.enableBody = true;
	this.canardSprite.body.velocity.x = this.velocity;
	this.canardSprite.body.velocity.y = this.velocity;
	this.canardSprite.physicsBodyType = Phaser.Physics.ARCADE;
	this.canardSprite.body.collideWorldBounds=true;
	this.canardSprite.anchor.set(0.5);
	this.canardSprite.scale.setTo(2,2);
	this.canardSprite.life = 3;
};

Canard.prototype.update = function update() {
	if(this.canardSprite.body != null) {
		if(this.canardSprite.body.velocity.x < 0) {
			this.canardSprite.scale.x = 1;
		} else {
			this.canardSprite.scale.x = -1;
		}
	}
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
