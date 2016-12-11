function Enemy(game, velocity, type, door, heroSprite) {
	this.game = game;
	this.enemy = null;
	this.isDead = null;
	this.velocity = velocity;
	this.cursors = null;
	this.type = type;
	this.door = door;
	this.heroSprite = heroSprite;
};

var types = ["Canard", "Dindon", "Poule"];
var door1 = [800, 300];
var door2 = [0, 300];
var door3 = [400, 600];
var door4 = [400, 0];

Enemy.prototype.create = function create() {
	this.createEnemy();
};

Enemy.prototype.update = function update() {
	this.enemy.update();
};

Enemy.prototype.die = function die() {
	this.enemy.die();
};

Enemy.prototype.getSprite = function getSprite() {
	return this.enemy.getSprite();
};

Enemy.prototype.createEnemy = function createEnemy(){
	if(this.type === "Canard"){
		this.enemy = new Canard(this.game, this.velocity, this.chooseDoor(), this.heroSprite);
		this.enemy.create();
	}else if(this.type === "Dindon"){
		this.enemy = new Dindon(this.game, this.velocity, this.chooseDoor(), this.heroSprite);
		this.enemy.create();
	}else if(this.type === "Poule"){
		this.enemy = new Poule(this.game, this.velocity, this.chooseDoor(), this.heroSprite);
		this.enemy.create();
	}
};

Enemy.prototype.chooseDoor = function chooseDoor(){
	if(this.door === "door1"){
		return door1;
	}else if(this.door === "door2"){
		return door2;
	}else if(this.door === "door3"){
		return door3;
	}else if(this.door === "door4"){
		return door4;
	}
}

Enemy.prototype.destroy = function destroy() {
	this.enemy.destroy();
};
