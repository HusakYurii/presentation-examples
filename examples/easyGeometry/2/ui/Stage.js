function Stage(){
	PIXI.Container.call(this);
	

	this.addAllComponents();
}
	
Stage.prototype = Object.create(PIXI.Container.prototype);
Stage.prototype.constructor = Stage;

Stage.prototype.addAllComponents = function () {

};
Stage.prototype.ticker = function(delta) {

};

Stage.prototype.resizeStage = function(glW, glH) {

};

