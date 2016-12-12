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
	this.dindonSprite = this.game.add.sprite(this.door[0], this.door[1], "Dindon", 0);
	this.dindonSprite.animations.add('idle', [0,1,2]);
	this.dindonSprite.animations.play('idle', 5, true);
	this.game.physics.arcade.enable(this.dindonSprite);
	this.dindonSprite.enableBody = true;
	this.dindonSprite.body.velocity.x = this.velocity;
	this.dindonSprite.body.velocity.y = this.velocity;
	this.dindonSprite.physicsBodyType = Phaser.Physics.ARCADE;
	this.dindonSprite.body.collideWorldBounds=true;
	this.dindonSprite.anchor.set(0.5);
	this.dindonSprite.scale.setTo(2,2);
	this.dindonSprite.life = 6;
};

Dindon.prototype.getSprite = function getSprite() {
	return this.dindonSprite;
};

Dindon.prototype.update = function update() {
	if(this.dindonSprite.body != null) {
		if(this.dindonSprite.body.velocity.x < 0) {
			this.dindonSprite.scale.x = 1;
		} else {
			this.dindonSprite.scale.x = -1;
		}
	}
	if (this.dindonSprite.alive === true){
		this.game.physics.arcade.moveToObject(this.dindonSprite, this.heroSprite, 100);
	}else{
		this.dindonSprite.destroy();
	}
};

Dindon.prototype.destroy = function destroy() {
	this.dindonSprite.destroy();
};

Enemy.prototype.die = function die() {
	this.dead = true;
};

Dindon.prototype.isDead = function isDead() {
	return this.dead;
};

Dindon.prototype.die = function die() {
	this.dead = true;
};
