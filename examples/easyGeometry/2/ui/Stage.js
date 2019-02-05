function Stage(){
	PIXI.Container.call(this);

	this.outerStage = null;
	this.outerBall = null;

	this.innerStage = null;
	this.innerBall = null;


	this.addAllComponents();
}
	
Stage.prototype = Object.create(PIXI.Container.prototype);
Stage.prototype.constructor = Stage;

Stage.prototype.addAllComponents = function () {
    this.outerStage = this.addChild(new Axes(400, 400));
    this.outerBall = this.outerStage.addChild(new Ball(this.outerStage, 20, 1));

    this.innerStage = this.addChild(new Axes(250, 250, 200, -250));
    this.innerBall = this.innerStage.addChild(new Ball(this.innerStage, 10, -0.5));
};

Stage.prototype.ticker = function(delta) {
	if(this.outerBall){this.outerBall.ticker(delta);}
	if(this.innerBall){this.innerBall.ticker(delta);}
};

Stage.prototype.resizeStage = function(glW, glH) {

};

