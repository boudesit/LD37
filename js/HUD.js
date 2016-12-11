function HUD(game) {
	this.game = game;
	this.HUDSprite = null;
  this.textHUD = null;
  this.enemy = null;
  this.hero = null;
  this.wavesManager = null;
	this.lives = null;
	this.score = 0;
	this.scoreText = '';
};

HUD.prototype.create = function create() {

	this.spriteBG = this.game.add.tileSprite(0, 0, 800, 600, 'background');
	this.spriteBG.animations.add('backgroundAnime');
	this.spriteBG.animations.play('backgroundAnime', 10, true);

	this.explosionSound = game.add.audio('explosionSound');
	this.explosion  = game.add.sprite(-100,-100, 'explosion');

  this.hero = new HeroManager(this.game);
  this.hero.create();

  this.enemy = new EnemyManager(this.game, this.hero._getSprite());
  this.enemy.create();

  this.wavesManager = new WavesManager(this.game, this.enemy);
  this.wavesManager.create();

	//  The score
	//scoreString = 'Score : ';
	this.scoreText = game.add.text(10, 10, this.score, { font: '34px Arial', fill: '#fff' });

	//Live HUD
	this.lives = game.add.group();
	//game.add.text(game.world.width - 100, 10, 'Lives : ', { font: '34px Arial', fill: '#fff' });

	for (var i = 0; i < 3; i++)
	{
			var hero_life = this.lives.create(game.world.width - 100 + (30 * i), 30, 'hero_idle');
			hero_life.anchor.setTo(0.5, 0.5);
			hero_life.alpha = 0.4;
	}
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
	 game.physics.arcade.collide(  this.enemy._getEnemyGroup() , this.enemy._getEnemyGroup() , null, null, this);
	 game.physics.arcade.overlap(  this.enemy._getEnemyGroup() , this.hero._getSprite()  , this.enemyHitHero, null, this);
};


HUD.prototype.fire1HitEnemy = function fire1HitEnemy(fire,enemy) {

	 this.shakeWorld = 10;
	 enemy.life -= 3;

	 if(enemy.life <= 0) {
		 this.explosion.reset(enemy.body.x, enemy.body.y - 50);
		 this.explosion.animations.add('boom');
		 this.explosion.play('boom', 30, false , true);
		 this.explosionSound.play();
		 enemy.kill();
	 }

	 fire.kill();

   this._incrementScore();
};

HUD.prototype.fire2HitEnemy = function fire2HitEnemy(fire,enemy) {

	 this.shakeWorld = 10;

	 enemy.life -= 1;

	 if(enemy.life <= 0) {
		 enemy.kill();
		 this.explosion.reset(enemy.body.x - 10, enemy.body.y - 10);
		 this.explosion.animations.add('boom');
		 this.explosion.play('boom', 30, false , true);
		 this.explosionSound.play();
	 }

	 fire.kill();

   this._incrementScore();
};



HUD.prototype.enemyHitHero = function enemyHitHero(hero,enemy) {

	enemy.kill();

	live = this.lives.getFirstAlive();

	if (live)
	{
			live.kill();
	}

	if(this.hero._heroIsHit() == 0){
			 //Lose
			 this.lose();
	}
};

HUD.prototype.lose = function lose() {
	this.game.state.start("GameOver");
};

HUD.prototype._incrementScore = function _incrementScore() {
		this.score += 50;
		this.scoreText.text = this.score;
};
