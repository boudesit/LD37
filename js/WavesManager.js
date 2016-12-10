function WavesManager(game) {
	this.game = game;
  this.counterWaves= 0;
  this.timer = null;

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

text = this.game.add.text(0, 0, 'Time until event: ' + this.timer.duration.toFixed(0), style);
text2 =this.game.add.text(0, 100,'Loop Count: ' + this.counterWaves, style);
	if(this.spaceKey.isDown) {
		this.endWaves();
	}

};

WavesManager.prototype.updateCounter = function updateCounter() {
    this.counterWaves++;
};

WavesManager.prototype.endWaves = function endWaves() {
		this.timer.destroy();
		this.updateCounter();

		this.timer = game.time.create(false);
		this.timer.loop(10000, this.updateCounter, this);
		this.timer.start();
}
