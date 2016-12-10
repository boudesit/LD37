function WavesManager(game) {
	this.game = game;
  this.counterWaves= 0;
  this.timer = null;

};



WavesManager.prototype.create = function create() {

  this.game.stage.backgroundColor = '#000';

  this.timer = game.time.create(false);
  this.timer.loop(10000, updateCounter, this);

};

WavesManager.prototype.update = function update() {
  this.timer.start();
};

WavesManager.prototype.updateCounter = function updateCounter() {
    this.counterWaves++;
}

WavesManager.prototype.render = function render() {
  this.game.debug.text('Time until event: ' + this.timer.duration.toFixed(0), 32, 32);
  this.game.debug.text('Loop Count: ' + this.counterWaves, 32, 64);
};
