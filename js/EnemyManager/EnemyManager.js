function EnemyManager(game) {
	this.game = game;
	this.waveNumber = null;
	this.enemyArray = new Array();
};

var doors = ["door1","door2","door3","door4"]

EnemyManager.prototype.create = function create() {
	enemy = new Enemy(this.game, 0, "Dindon", doors[0], 0)
	this.enemyArray.push(enemy);
	enemy.create();
};

EnemyManager.prototype.update = function update() {
	for(i = 0; i < this.enemyArray.size(); i++){
		this.enemyArray[i].update();
	}
};