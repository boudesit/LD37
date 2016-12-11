function EnemyManager(game, heroSprite) {
	this.game = game;
	this.waveNumber = null;
	this.enemyArray = new Array();
	this.waveGo = false;
	this.doorsNumber = 0;
	this.allEnemyDead = false;
	this.spawnAllowed = false;
	this.increment = 0;
	this.enemyGroup = this.game.add.group();
	this.heroSprite = heroSprite;
};

var doors = ["door1","door2","door3","door4"];
var enemys =["Dindon","Canard","Poule"];

EnemyManager.prototype.create = function create() {
	this._createEnemy();
};

EnemyManager.prototype.update = function update() {
	if(this.waveGo === true){
		for(i = 0; i < this.waveNumber; i++){
				
				this.game.time.events.add(Phaser.Timer.SECOND * this.increment, this._createEnemy, this);
				this.increment += 1.5;
		}
		this.waveNumber = 0;
		this.waveGo = false;
		this.increment = 0;
	}
	var ennemyArrayAlive = new Array();
	for(i = 0; i < this.enemyArray.length; i++){
		if(this.enemyArray[i].getSprite().alive === true){
			ennemyArrayAlive.push(this.enemyArray[i]);
		}
	}

	for(i = 0; i < this.enemyArray.length; i++){
		this.enemyArray[i].update();
	}
	if(ennemyArrayAlive.length === 0){
		this.allEnemyDead = true;
	}else{
		this.allEnemyDead = false;
	}

	this.enemyArray = ennemyArrayAlive;
};

EnemyManager.prototype._createEnemy = function _createEnemy(){
	tempEnemy = new Enemy(this.game, 100, enemys[this._randomEnemy()], doors[this._randomDoor()], this.heroSprite);
	tempEnemy.create();
	this.enemyArray.push(tempEnemy);
	this.enemyGroup.add(tempEnemy.getSprite())
}

EnemyManager.prototype.startSpawn = function startSpawn() {
	this.spawnAllowed = true;
};

EnemyManager.prototype._randomEnemy = function _randomEnemy() {
	return Math.floor(Math.random() * 3);
};

EnemyManager.prototype._randomDoor = function _randomDoor() {
	return Math.floor(Math.random() * this.doorsNumber + 1) -1;
};


EnemyManager.prototype.createEnemyWave = function setWaveNumber(doorsNumber, waveNumber){
	this._setWaveGo(true);
	this._setDoorsNumber(doorsNumber);
	this.waveNumber += waveNumber;
	this._setWaveNumber(this.waveNumber);
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
	this.doorsNumber = doorsNumber;
};

EnemyManager.prototype._getEnemyGroup = function _getEnemyGroup(){
	return this.enemyGroup;
};
