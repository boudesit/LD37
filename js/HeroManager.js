var HeroManager = function(game) {
	this.game = game;
	this.sprite = null;

	this.posX = 130;
	this.posY = 450;

	this.isDead = false;
	this.life = 3;

  this.fireButton = null;

  this.weapon = null;
	this.weapon2 = null;
	this.switch_Weapon = false;
	this.isSpacePress = false;

	this.live = null;
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
    this.weapon = this.game.add.weapon(5, 'bullet');
    this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    this.weapon.bulletSpeed = 500;
		this.weapon.fireRate = 900;
    this.weapon.trackSprite(this.sprite, 4, 4);

		//Arme 2
		this.weapon2 = this.game.add.weapon(50, 'bullet2');
		this.weapon2.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
		this.weapon2.bulletSpeed = 900;
		this.weapon2.fireRate = 200;
		this.weapon2.bulletAngleVariance = 20;
		this.weapon2.trackSprite(this.sprite, 4, 4);

		var key1 = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    key1.onDown.add(this._addPhaserDude, this);

		this.live = 3;
    },

    update: function() {

			//Deplacement
				var vitesse = 4;

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
					if(this.switch_Weapon == false)
					{
						this.weapon.fireAngle = (( game.physics.arcade.angleToPointer(this.sprite) * 180) / Math.PI);
						this.weapon.fire();
					}
					if(this.switch_Weapon == true)
					{
						this.weapon2.fireAngle = (( game.physics.arcade.angleToPointer(this.sprite) * 180) / Math.PI);
						this.weapon2.fire();
					}
        }
    },

		 _addPhaserDude : function() {
			 //change weapon
			 if(this.switch_Weapon == false)
			 {
				 this.switch_Weapon = true;
			 }
			 else if(this.switch_Weapon == true)
			 {
				 this.switch_Weapon = false;
			 }
			 console.log( this.switch_Weapon);
		},

    _getSprite : function() {
    		return this.sprite;
    },

    _setIsDead : function(isDead) {
    	this.isDead = isDead;
    },

    _getIsDead : function() {
    	return this.isDead;
    },

		_getWeapons1 : function() {
				return this.weapon.bullets;
		},

		_getWeapons2 : function() {
				return this.weapon2.bullets;
		},

		_heroIsHit : function() {
				this.live -= 1;
				return this.live;
		}
}
