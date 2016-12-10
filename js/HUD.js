function HUD(game) {
	this.game = game;
	this.HUDSprite = null;
  this.textHUD = null;
  this.enemy = null;
  this.hero = null;

};

HUD.prototype.create = function create() {
  this.enemy = new Enemy(this.game);
  this.enemy.create();

  this.hero = new HeroManager(this.game);
  this.hero.create();

};

HUD.prototype.update = function update() {
  this.enemy.update();
  this.hero.update();

};
