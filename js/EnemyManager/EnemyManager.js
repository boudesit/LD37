function EnemyManager(game) {
	this.game = game;
	this.waveNumber = null;
	this.enemyArray = new Array();
	this.waveGo = false;
	this.doorsNumber = 0;
	this.allEnemyDead = false;
};

var doors = ["door1","door2","door3","door4"];
var enemys =["Dindon","Canard","Poule"];

EnemyManager.prototype.create = function create() {
	tempEnemy = new Enemy(this.game, 5, enemys[_randomEnemy()], doors[_randomDoor()] , 0);
	this.enemyArray.push(tempEnemy);
};

EnemyManager.prototype.update = function update() {
	if(this.waveGo === true){
		for(i = 0; i < this.waveNumber; i++){
			tempEnemy = new Enemy(this.game, 5, enemys[_randomEnemy()], doors[_randomDoor()] , 0);
			this.enemyArray.push(tempEnemy);
		}
		this.waveGo =  false;
	}
	for(i = 0; i < this.enemyArray.size(); i++){
		this.enemyArray[i].update();
	}
	if(this.enemyArray.size() === 0){
		this.allEnemyDead = true;
	}
};

EnemyManager.prototype._randomEnemy : function _randomEnemy() {
	return Math.floor(Math.random() * 3);
};

EnemyManager.prototype._randomEnemy : function _randomDoor() {
	return Math.floor(Math.random() * this.doorsNumber + 1);
};


EnemyManager.prototype.createEnemyWave = function setWaveNumber(doorsNumber, waveNumer){
	this._setWaveGo(true);
	this._setDoorsNumber(doorsNumber);
	this._setWaveNumber(waveNumer);
};

EnemyManager.prototype.isAllEnemyDead = function isAllEnemyDead(){
	return this.allEnemyDead;
};

EnemyManager.prototype._setWaveNumber = function _setWaveNumber(waveNumber){
	this.waveNumber = waveNumber;
};

EnemyManager.prototype._setWaveGo = function _setWaveNumber(waveGo){
	this.waveGo = waveGo;
};

EnemyManager.prototype._setDoorsNumber = function _setDoorsNumber(doorsNumber){
	this.waveGo = waveGo;
};