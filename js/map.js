function map(game) {
	this.game = game;
  this.murGroup = this.game.add.group();
	this.murHG = null;
	this.murHD = null;
	this.murBG = null;
	this.murBD = null;
};

map.prototype.create = function create() {

	//mur HG
	this.murHG = this.game.add.sprite(0, 0, null);
	this.game.physics.enable(this.murHG);
	this.murHG.physicsBodyType = Phaser.Physics.ARCADE;
	this.murHG.enableBody = true;
	this.murHG.body.immovable = true;

	this.murHG.body.setSize(330, 58, 0, 0);

  this.murGroup.add(this.murHG);

  //mur HD
	this.murHD = this.game.add.sprite(0, 0, null);
	this.game.physics.enable(this.murHD);
	this.murHD.physicsBodyType = Phaser.Physics.ARCADE;
	this.murHD.enableBody = true;
	this.murHD.body.immovable = true;

	this.murHD.body.setSize(330, 58, 450, 0);

  this.murGroup.add(this.murHD);

  //mur BG
	this.murBG = this.game.add.sprite(0, 0, null);
	this.game.physics.enable(this.murBG);
	this.murBG.physicsBodyType = Phaser.Physics.ARCADE;
	this.murBG.enableBody = true;
	this.murBG.body.immovable = true;

	this.murBG.body.setSize(330, 58, 0, 542);

  this.murGroup.add(this.murBG);

  //mur BD
	this.murBD = this.game.add.sprite(0, 0, null);
	this.game.physics.enable(this.murBD);
	this.murBD.physicsBodyType = Phaser.Physics.ARCADE;
	this.murBD.enableBody = true;
	this.murBD.body.immovable = true;

	this.murBD.body.setSize(330, 58, 450, 542);

  this.murGroup.add(this.murBD);

  //mur GH
	this.murGH = this.game.add.sprite(0, 0, null);
	this.game.physics.enable(this.murGH);
	this.murGH.physicsBodyType = Phaser.Physics.ARCADE;
	this.murGH.enableBody = true;
	this.murGH.body.immovable = true;

	this.murGH.body.setSize(75, 236, 0, 0);

  this.murGroup.add(this.murGH);

  //mur GB
	this.murGB = this.game.add.sprite(0, 0, null);
	this.game.physics.enable(this.murGB);
	this.murGB.physicsBodyType = Phaser.Physics.ARCADE;
	this.murGB.enableBody = true;
	this.murGB.body.immovable = true;

	this.murGB.body.setSize(75, 283, 0, 317);

  this.murGroup.add(this.murGB);

  //mur DH
	this.murDH = this.game.add.sprite(0, 0, null);
	this.game.physics.enable(this.murDH);
	this.murDH.physicsBodyType = Phaser.Physics.ARCADE;
	this.murDH.enableBody = true;
	this.murDH.body.immovable = true;

	this.murDH.body.setSize(75, 236, 735, 0);

  this.murGroup.add(this.murDH);

  //mur DB
	this.murDB = this.game.add.sprite(0, 0, null);
	this.game.physics.enable(this.murDB);
	this.murDB.physicsBodyType = Phaser.Physics.ARCADE;
	this.murDB.enableBody = true;
	this.murDB.body.immovable = true;

	this.murDB.body.setSize(75, 283, 735, 317);

  this.murGroup.add(this.murDB);


};



map.prototype.update = function update() {


};



map.prototype._getMur = function _getMur() {
  return this.murGroup;
};
