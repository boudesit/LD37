function HUD(game) {
	this.game = game;
	this.HUDSprite = null;
  this.textHUD = null;
  this.enemy = null;
  this.hero = null;
  this.wavesManager = null;

};

HUD.prototype.create = function create() {
  this.enemy = new EnemyManager(this.game);
  this.enemy.create();

  // this.hero = new HeroManager(this.game);
  // this.hero.create();

  this.wavesManager = new WavesManager(this.game);
  this.wavesManager.create();

};

HUD.prototype.update = function update() {
  this.enemy.update();
  // this.hero.update();
   this.wavesManager.update();

};
