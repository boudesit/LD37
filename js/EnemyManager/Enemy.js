function Enemy(game, velocity, type, door, spriteNumber) {
	this.game = game;
	this.enemy = null;
	this.isDead = null;
	this.velocity = velocity;
	this.cursors = null;
	this.type = type;
	this.door = door;
	this.spriteNumber = spriteNumber;
};

var types = ["Canard", "Dindon", "Poule"];
var door1 = [50, 50];
var door2 = [200, 200];
var door3 = [350, 350];
var door4 = [500, 500];

Enemy.prototype.create = function create() {
	this.createEnemy();
};

Enemy.prototype.update = function update() {
	this.enemy.update();
};

Enemy.prototype.createEnemy = function createEnemy(){
	if(this.type === "Canard"){
		this.enemy = new Canard(this.game, this.velocity, chooseDoor());
	}else if(this.type === "Dindon"){
		this.enemy = new Dindon(this.game, this.velocity, chooseDoor());
	}else if(this.type === "Poule"){
		this.enemy = new Poule(this.game, this.velocity, chooseDoor());
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