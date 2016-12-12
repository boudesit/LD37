function Poule(game, velocity, door, heroSprite) {
	this.game = game;
	this.pouleSprite = null;
	this.dead = false;
	this.velocity = velocity;
	this.door = door;
	this.isSpriteDestroy = false;
	this.heroSprite = heroSprite;
	this.life = 1;
};

Poule.prototype.create = function create() {
	this.pouleSprite = this.game.add.sprite(this.door[0], this.door[1], "Poule", 0);
	this.pouleSprite.animations.add('idle', [0,1,2]);
	this.pouleSprite.animations.play('idle', 5, true);
	this.game.physics.arcade.enable(this.pouleSprite);
	this.pouleSprite.enableBody = true;
	this.pouleSprite.body.velocity.x = this.velocity;
	this.pouleSprite.body.velocity.y = this.velocity;
	this.pouleSprite.physicsBodyType = Phaser.Physics.ARCADE;
	this.pouleSprite.body.collideWorldBounds=true;
	this.pouleSprite.anchor.set(0.5);
	this.pouleSprite.scale.setTo(2,2);
	this.pouleSprite.life = 1;
};

Poule.prototype.getSprite = function getSprite() {
	return this.pouleSprite;
};

Poule.prototype.update = function update() {
	if(this.pouleSprite.body != null) {
		if(this.pouleSprite.body.velocity.x < 0) {
			this.pouleSprite.scale.x = 1;
		} else {
			this.pouleSprite.scale.x = -1;
		}
	}
	if (this.pouleSprite.alive === true){
		this.game.physics.arcade.moveToObject(this.pouleSprite, this.heroSprite, 250);
	}else{
		this.pouleSprite.destroy();
	}
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

Poule.prototype.getLife = function getLife() {
	return this.life;
};

Poule.prototype.setLife = function setLife(life) {
	this.life = life;
};
