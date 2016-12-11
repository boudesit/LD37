function WavesManager(game, enemy) {
	this.game = game;
  	this.timer = null;
	this.go = true;
	this.enemy = enemy;
	this.population = 1;
	this.coeff = 1;
	this.doors = 0
};



WavesManager.prototype.create = function create() {

  this.game.stage.backgroundColor = '#000';
	this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  this.timer = game.time.create(false);
  this.timer.loop(10000, this.updateCounter, this);
	this.timer.start();

};

WavesManager.prototype.update = function update() {

	var style = { font: "32px Arial", fill: "#ff0044", align: "center", backgroundColor: "#ffff00" };

// text = this.game.add.text(0, 0, 'Time until event: ' + this.timer.duration.toFixed(0), style);
//text2 =this.game.add.text(0, 100,'Loop Count: ' + this.population + 'coeff: ' + this.coeff, style);
	if(this.enemy.isAllEnemyDead()) {
		this.endWaves();
	}

};

WavesManager.prototype.updateCounter = function updateCounter() {
	if((this.doors != this.coeff) && (this.doors < 4) && ((this.population % 5) == 0)) {
<<<<<<< HEAD
  		this.doors = this.coeff;
 	}
		this.enemy.createEnemyWave(this.doors, this.populateEnemy());
=======
		this.doors = this.coeff;
	}
		console.log(this.doors);
		this.enemy.createEnemyWave(this.doors, this.populateEnemy());		//	setWaveNumber(doorsNumber, waveNumer)
				//	setWaveNumber(doorsNumber, waveNumer)
>>>>>>> refs/remotes/origin/development

};

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
