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
	this.game.physics.arcade.enable(this.pouleSprite);
	this.pouleSprite.enableBody = true;
	this.pouleSprite.body.velocity.x = this.velocity;
	this.pouleSprite.body.velocity.y = this.velocity;
	this.pouleSprite.physicsBodyType = Phaser.Physics.ARCADE;
	this.pouleSprite.body.collideWorldBounds=true;
	this.pouleSprite.scale.setTo(1.5,1.5);
	this.pouleSprite.life = 1;
};

Poule.prototype.getSprite = function getSprite() {
	return this.pouleSprite;
};

Poule.prototype.update = function update() {
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
