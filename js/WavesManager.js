function WavesManager(game, enemy) {
	this.game = game;
  	this.timer = null;
	this.go = true;
	this.enemy = enemy;
	this.population = 1;
	this.coeff = 1;
	this.doors = 0;
};



WavesManager.prototype.create = function create() {

  this.game.stage.backgroundColor = '#000';
	this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  this.timer = game.time.create(false);
  this.timer.loop(10000, this.updateCounter, this);
	this.timer.start();

	this.timer1 = game.time.create(false);
	this.timer1.loop(1250, this.isWaveIsFinnish, this);
	this.timer1.start();

};

WavesManager.prototype.update = function update() {};

WavesManager.prototype.updateCounter = function updateCounter() {
	if((this.doors != this.coeff) && (this.doors < 4) && ((this.population % 5) == 0)) {
		this.doors = this.coeff;
 	}
		this.enemy.createEnemyWave(this.doors, this.populateEnemy());

};

WavesManager.prototype.isWaveIsFinnish = function isWaveIsFinnish() {
	if(this.enemy.isAllEnemyDead() && (this.enemy._getIncrement() == 0)) {
		this.endWaves();
	}
}


WavesManager.prototype.endWaves = function endWaves() {
		this.timer.destroy();
		this.updateCounter();
		this.timer = game.time.create(false);
		this.timer.loop(10000, this.updateCounter, this);
		this.timer.start();
};

WavesManager.prototype.populateEnemy = function populateEnemy(){
	this.population++;
	if((this.population % 5) == 0) {
		this.coeff++;
	}
	return this.population * this.coeff;
}
