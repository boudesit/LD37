function map(game) {
	this.game = game;
  this.murGroup = this.game.add.group();
	this.murHG = null;
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


  //mur BG


  //mur BD


  //mur GH


  //mur GB


  //mur DH


  //mur DB

	//this.MurHG.body.setSize(10, 50, 330, 58); // set the size of the rectangle

	//this.MurHG.body.immovable = true;
	//this.MurHG.backgroundColor = '#992d2d';


	//this.MurHG.body.moves = false
	//this.MurHG.body.static = true;

};



map.prototype.update = function update() {


};



map.prototype._getMur = function _getMur() {
  return this.murHG;
};
