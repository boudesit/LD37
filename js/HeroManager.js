var HeroManager = function(game) {
	this.game = game;
	this.sprite = null;

	this.posX = 130;
	this.posY = 450;

	this.isDead = false;

  this.fireButton = null;
  this.weapon = null;
}

HeroManager.prototype = {
    create: function() {

		//Sprite
		this.sprite = this.game.add.sprite(this.posX,this.posY, 'hero_idle');
		this.sprite.animations.add('idle', [0,1,2,3]);
		this.game.physics.arcade.enable(this.sprite);
		this.sprite.physicsBodyType = Phaser.Physics.ARCADE;
		this.sprite.enableBody = true;
		this.sprite.animations.play('idle', 5, true);
	  this.sprite.body.collideWorldBounds=true;


    //  Arme 1
    this.weapon = this.game.add.weapon(1, 'bullet');
    this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    this.weapon.bulletSpeed = 400;
    this.weapon.trackSprite(this.sprite, 1, 0);
    this.weapon.rotation =  game.physics.arcade.moveToPointer(weapon, 1000, game.input.activePointer, 500);

    },

    update: function() {

			//Deplacement
				var force = 10;

				if(game.input.keyboard.isDown(Phaser.Keyboard.A)) {
				    this.sprite.body.velocity.x -= force;
				}

				if(game.input.keyboard.isDown(Phaser.Keyboard.D)) {
				    this.sprite.body.velocity.x += force;
				}

				if(game.input.keyboard.isDown(Phaser.Keyboard.S)) {
				    this.sprite.body.velocity.y -= force;
				}

				if(game.input.keyboard.isDown(Phaser.Keyboard.W)) {
				    this.sprite.body.velocity.y += force;
				}

        if ( game.input.activePointer.leftButton.isDown )
        {
            this.weapon.fire();
        }

				if ( game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
				{
						//change weapon
						this.weapon.fire();
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
