function HUD(game) {
	this.game = game;
	this.HUDSprite = null;
  this.textHUD = null;
  this.enemy = null;
  this.hero = null;
  this.wavesManager = null;

};

HUD.prototype.create = function create() {

	this.explosionSound = game.add.audio('explosionSound');
	this.explosion  = game.add.sprite(-100,-100, 'explosion');

  this.hero = new HeroManager(this.game);
  this.hero.create();

  this.enemy = new EnemyManager(this.game, this.hero._getSprite());
  this.enemy.create();

  this.wavesManager = new WavesManager(this.game, this.enemy);
  this.wavesManager.create();
};



HUD.prototype.update = function update() {
   this.hero.update();
   this.wavesManager.update();
   this.enemy.update();

	  if (this.shakeWorld > 0)
	  {
	  	var rand1 = game.rnd.integerInRange(-5,5);
	  	var rand2 = game.rnd.integerInRange(-5,5);
	  	game.world.setBounds(rand1, rand2, game.width + rand1, game.height + rand2);
	 	  this.shakeWorld--;
	  }

	  if (this.shakeWorld == 0) {
	  	game.world.setBounds(0, 0, game.width,game.height);
	  }

	 	//  Run collision
	 game.physics.arcade.overlap(  this.hero._getWeapons1() , this.enemy._getEnemyGroup()  , this.fire1HitEnemy, null, this);
	 game.physics.arcade.overlap(  this.hero._getWeapons2() , this.enemy._getEnemyGroup()  , this.fire2HitEnemy, null, this);

	 game.physics.arcade.overlap(  this.enemy._getEnemyGroup() , this.hero._getSprite()  , this.enemyHitHero, null, this);
};


HUD.prototype.fire1HitEnemy = function fire1HitEnemy(fire,enemy) {

 this.explosion.reset(enemy.body.x, enemy.body.y - 50);
 this.explosion.animations.add('boom');
 this.explosion.play('boom', 30, false , true);
 this.explosionSound.play();

 this.shakeWorld = 10;

 enemy.kill();
 fire.kill();

 //this._incrementScore();
};

HUD.prototype.fire2HitEnemy = function fire2HitEnemy(fire,enemy) {
	 this.explosion.reset(enemy.body.x - 10, enemy.body.y - 10);
	 this.explosion.animations.add('boom');
	 this.explosion.play('boom', 30, false , true);
	 this.explosionSound.play();

	 this.shakeWorld = 10;

	 enemy.kill();
	 fire.kill();

 //this._incrementScore();
};



HUD.prototype.enemyHitHero = function enemyHitHero(hero,enemy) {

			 //Lose
			 this.lose();
	}
};

HUD.prototype.lose = function lose() {
	this.game.state.start("GameOver");
};
