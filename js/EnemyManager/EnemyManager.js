function EnemyManager(game) {
	this.game = game;
	this.waveNumber = null;
	this.enemyArray = new Array();
};

EnemyManager.prototype.create = function create() {
	this.enemyArray.push(new Enemy(this.game,0,"Dindon"300,300,0));
};

EnemyManager.prototype.update = function update() {
	for(i = 0; i < this.enemyArray.size(); i++){
		this.enemyArray[i].update();
	}
};