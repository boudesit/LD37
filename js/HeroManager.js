var HeroManager = function(game) {
	this.game = game;
	this.sprite = null;

	this.posX = 130;
	this.posY = 450;

	this.isDead = false;
	this.life = 3;

  this.fireButton = null;
  this.weapon = null;
}

HeroManager.prototype = {
    create: function() {

		//Sprite
		this.sprite = this.game.add.sprite(this.posX,this.posY, 'hero_idle');
		//this.sprite.animations.add('idle', [0,1]);
		//this.sprite.animations.play('idle', 5, true);

		this.game.physics.arcade.enable(this.sprite);
		this.sprite.physicsBodyType = Phaser.Physics.ARCADE;
		this.sprite.enableBody = true;
	  this.sprite.body.collideWorldBounds=true;


    //  Arme 1
    this.weapon = this.game.add.weapon(50, 'bullet');
    this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    this.weapon.bulletSpeed = 400;
		this.weapon.fireRate = 600;
		this.weapon.rotation   = true;
    this.weapon.trackSprite(this.sprite, 1, 0);


		var angle = null;
    },

    update: function() {

			//Deplacement
				var vitesse = 4;
				angle = game.physics.arcade.angleToPointer(this.sprite);
				this.sprite.rotation = angle;


				if(game.input.keyboard.isDown(Phaser.Keyboard.A)) {
				    this.sprite.x -= vitesse;
				}

				if(game.input.keyboard.isDown(Phaser.Keyboard.D)) {
				    this.sprite.x += vitesse;
				}

				if(game.input.keyboard.isDown(Phaser.Keyboard.W)) {
				    this.sprite.y -= vitesse;
				}

				if(game.input.keyboard.isDown(Phaser.Keyboard.S)) {
				    this.sprite.y += vitesse;
				}

        if ( game.input.activePointer.leftButton.isDown )
        {

						this.weapon.fireAngle = ((angle * 180) / Math.PI);

						this.weapon.fire();
        }

				if ( game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
				{
						//change weapon

				}
    },

    _getSprite : function() {
    		return this.sprite;
    },

    _setIsDead : function(isDead) {
    	this.isDead = isDead;
    },

    _getIsDead : function() {
    	return this.isDead;
    }
}
