function Stage(){
	PIXI.Container.call(this);

    this.healthPack = null;
    this.scoreBar = null;
	this.aim = null;

	this.addAllComponents();
}
	
Stage.prototype = Object.create(PIXI.Container.prototype);
Stage.prototype.constructor = Stage;

Stage.prototype.addAllComponents = function() {

    this.healthPack = this.addChild(new HealthPack(Stage.CONFIG));
	this.healthPack.on("cure", this.updateScore, this);

	this.scoreBar = this.addChild(new ScoreBar(Stage.CONFIG));

	this.aim = this.addChild(new Aim(Stage.CONFIG));
    this.aim.on("hit", this.updateScore, this);
};


Stage.prototype.updateScore = function(num) {
	this.scoreBar.updateScore(num);
};


Stage.prototype.ticker = function(delta) {
	
};

Stage.prototype.resizeStage = function(glW, glH) {
	this.scoreBar.position.set( -250, -glH/2.5);
	this.healthPack.position.set(glW/4, glH/4);

};

Stage.CONFIG = {
    aimHealth: 100,
    damage: -5,
    cureValue: 10
};