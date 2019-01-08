function Stage(){
	PIXI.Container.call(this);

	this.bg = null;
	this.player = null;
	this._timer = 0;
	this.rocksDelay = 1000;
	this.rocks = [];

	this.isLoding = true;
	this.oldWidth = 0;
	this.oldHeight = 0;

	this.addAllComponents();
}
	
Stage.prototype = Object.create(PIXI.Container.prototype);
Stage.prototype.constructor = Stage;

Stage.prototype.addAllComponents = function () {

	this.bg = this.addChild(new Background(Stage.CONFIG.back));
	this.player = this.addChild(new Player(Stage.CONFIG.player));

};

Stage.prototype.createRock = function () {
	var rock = Stage.createRock(Stage.CONFIG.rock);
    rock.once("deleteMe", this.deleteRock, this);
	this.rocks.push(rock);
	this.addChild(rock);
};

Stage.prototype.deleteRock = function(rock){
	var idx = this.rocks.indexOf(rock);
	this.rocks.splice(idx, 1);
	this.removeChild(rock);
};

Stage.prototype.changePlayerPosition = function(glW, glH){

	/**
	 * oldWidth / 3 = 1
	 * player.x = ?
	 *
	 * ( player.x * 3 ) / oldWidth = ratio
	 *
	 * new player position = newWidth/3 * ratio;
	 * */

    var newX = glW/2 * ( (this.player.x * 2) / this.oldWidth) | 0;
	var newY = glH/2 * ( (this.player.y * 2) / this.oldHeight) | 0;
	this.player.position.set(newX, newY);

	this.oldWidth = glW;
	this.oldHeight = glH;
};

Stage.prototype.ticker = function(delta) {
	if(this.bg){this.bg.ticker(delta);}

	for(var rock = this.rocks.length - 1; rock >= 0; --rock){
		this.rocks[rock].ticker(delta);
	}

    this._timer += delta;
    if(this._timer <= this.rocksDelay){return;}

    this._timer = 0;
    this.createRock();
};

Stage.prototype.resizeStage = function(glW, glH) {
	/*For the very first time when the stage is being resized*/
	if(this.isLoding){
		this.oldHeight = glH;
		this.oldWidth = glW;
		this.isLoding = false;
	}

	if(this.bg){this.bg.resizeStage(glW, glH);}
	this.changePlayerPosition(glW, glH);
};

Stage.createRock = function(config){
    var x = Utils.getRandomInt(-Layout.glW/2, Layout.glW/2);
    var y = Layout.glH;

    var rock = new Rock(config);
    rock.position.set(x, -y);
    return rock;
};

Stage.CONFIG = {
	back:{
		name: "spaceBg",
		speed: 5
	},
	player: {
		name: "ship",
		scl: 0.6
	},
	rock:{
		name: "rock",
		scl: {
			min: 0.5,
			max: 1.5
		},
        rockSpeed:{
            max: 5,
            min: 2
        }
	}
};