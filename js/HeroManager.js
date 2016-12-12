var HeroManager = function(game) {
	this.game = game;
	this.sprite = null;

	this.posX = 400;
	this.posY = 300;

	this.isDead = false;
	this.life = 3;

  this.fireButton = null;

  this.weapon = null;
	this.weapon2 = null;
	this.switch_Weapon = false;
	this.isSpacePress = false;

	this.live = null;
	this.renardhitSound = null;
	this.oeufSound  = null;
}

HeroManager.prototype = {
    create: function() {

		//sound
		this.renardhitSound = game.add.audio('renardhit');
		this.renardhitSound.volume = 20;

		this.oeufSound = game.add.audio('oeuf');
		this.oeufSound.volume = 10;
		//Sprite
		this.sprite = this.game.add.sprite(this.posX,this.posY, 'hero_idle');
		//this.sprite.animations.add('idle', [0,1]);
		//this.sprite.animations.play('idle', 5, true);

		this.game.physics.arcade.enable(this.sprite);
		this.sprite.physicsBodyType = Phaser.Physics.ARCADE;
		this.sprite.enableBody = true;
	  this.sprite.body.collideWorldBounds=true;
		this.sprite.anchor.set(0.5);
		this.sprite.scale.setTo(2,2);

    //  Arme 1
    this.weapon = this.game.add.weapon(5, 'bullet');
    this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    this.weapon.bulletSpeed = 500;
		this.weapon.fireRate = 900;
    this.weapon.trackSprite(this.sprite, 4, 4);

		//Arme 2
		this.weapon2 = this.game.add.weapon(50, 'bullet2');
		//this.weapon2.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
		this.weapon2.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
		this.weapon2.bulletKillDistance = 200;
		this.weapon2.bulletSpeed = 900;
		this.weapon2.fireRate = 200;
		this.weapon2.bulletAngleVariance = 10;
		this.weapon2.trackSprite(this.sprite, 4, 4);

		var key1 = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    key1.onDown.add(this._addPhaserDude, this);

		this.live = 3;
    },

    update: function() {

			//Sprite to mouse
			var radMouse = game.physics.arcade.angleToPointer(this.sprite);

			if( ( radMouse > Math.PI/2   &&  radMouse  < Math.PI )  ||  ( radMouse < -Math.PI/2   && radMouse  > -Math.PI )  )
			{
					this.sprite.scale.x = 1;
			}else{
					this.sprite.scale.x = -1;
			}


			//Deplacement

 				this.sprite.body.velocity.x = 0;
				this.sprite.body.velocity.y = 0;
				if(game.input.keyboard.isDown(Phaser.Keyboard.A)) {
						this.sprite.body.velocity.x = -500;
				}

				if(game.input.keyboard.isDown(Phaser.Keyboard.D)) {
						this.sprite.body.velocity.x = 500;
				}

				if(game.input.keyboard.isDown(Phaser.Keyboard.W)) {
				    this.sprite.body.velocity.y = -500;
				}

				if(game.input.keyboard.isDown(Phaser.Keyboard.S)) {
				    this.sprite.body.velocity.y  = 500;
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
						if (this.oeufSound.isPlaying == false)
						{
							 this.oeufSound.play();
						}

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
				this.renardhitSound.play();
				this.live -= 1;
				return this.live;
		}
}
