function Canard(game, velocity, door) {
	this.game = game;
	this.canardSprite = null;
	this.dead = false;
	this.velocity = velocity;
	this.door = door;
	this.isSpriteDestroy = false;
};

Canard.prototype.create = function create() {
	var style = { font: "32px Arial", fill: "#ff0044", align: "center", backgroundColor: "#ffff00" };

	this.canardSprite = this.game.add.text(this.door[0], this.door[1], 'Time until event: ' + 20, style);
};

Canard.prototype.update = function update() {
	
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