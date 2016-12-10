function WavesManager(game) {
	this.game = game;
  this.counterWaves= 0;
  this.timer = null;

};



WavesManager.prototype.create = function create() {

  this.game.stage.backgroundColor = '#000';

  this.timer = game.time.create(false);
  this.timer.loop(10000, this.updateCounter, this);
	this.timer.start();

};

WavesManager.prototype.update = function update() {

	var style = { font: "32px Arial", fill: "#ff0044", align: "center", backgroundColor: "#ffff00" };

text = this.game.add.text(0, 0, 'Time until event: ' + this.timer.duration.toFixed(0), style);
text2 =this.game.add.text(0, 100,'Loop Count: ' + this.counterWaves, style);

};

WavesManager.prototype.updateCounter = function updateCounter() {
    this.counterWaves++;
}

WavesManager.prototype.render = function render() {
  this.game.debug.text('Time until event: ' + this.timer.duration.toFixed(0), 32, 32);
  this.game.debug.text('Loop Count: ' + this.counterWaves, 32, 64);
};
