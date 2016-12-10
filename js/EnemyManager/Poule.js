function Poule(game, velocity, door) {
	this.game = game;
	this.pouleSprite = null;
	this.dead = false;
	this.velocity = velocity;
	this.door = door;
	this.isSpriteDestroy = false;
};

Poule.prototype.create = function create() {
	var style = { font: "32px Arial", fill: "#ff0044", align: "center", backgroundColor: "#ffff00" };

	this.pouleSprite = this.game.add.text(this.door[0], this.door[1], 'Time until event: ' + 20, style);
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