function Stage(){
	PIXI.Container.call(this);

	this.localStage = null;

	this.isClicked = false;
	this.isMoved = false;

	this.addAllComponents();
}
	
Stage.prototype = Object.create(PIXI.Container.prototype);
Stage.prototype.constructor = Stage;

Stage.prototype.addAllComponents = function () {
	this.localStage = this.addChild(new LocalStage(10,10,30));

}

Stage.prototype.ticker = function(delta) {
	
};

Stage.prototype.resizeStage = function(glW, glH) {
	
};
