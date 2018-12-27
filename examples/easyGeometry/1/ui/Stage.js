function Stage(){
	PIXI.Container.call(this);

	this.stagesConfigs = [{r: 10,c: 10,cellSizes: 30},{r: 5,c: 5,cellSizes: 20},{r: 8,c: 8,cellSizes: 10}];
	this.stages = [];

	this.centerPoint = null;

	this.isClicked = false;
	this.isMoved = false;

	this.addAllComponents();
}
	
Stage.prototype = Object.create(PIXI.Container.prototype);
Stage.prototype.constructor = Stage;

Stage.prototype.addAllComponents = function () {
	this.centerPoint = this.addChild(Utils.drawCircle(0, 0, 7, 0xFFFF00, 1));

	for (var i = 0; i < this.stagesConfigs.length; i++) {
		var config = this.stagesConfigs[i];
		var stage = new LocalStage(config.r, config.c, config.cellSizes);

		this.stages.push(stage);
		this.addChild(stage);
	}
}


Stage.prototype.ticker = function(delta) {
	
};

Stage.prototype.resizeStage = function(glW, glH) {
	
};
