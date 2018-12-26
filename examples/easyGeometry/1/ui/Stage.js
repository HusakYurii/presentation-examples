function Stage(){
	PIXI.Container.call(this);

	this.stagesAmount = 4;
	this.stages = [];

	this.centerPoint = null;

	this.firstLocalStage = null;
	this.secondLocalStage = null;

	this.isClicked = false;
	this.isMoved = false;

	this.addAllComponents();
}
	
Stage.prototype = Object.create(PIXI.Container.prototype);
Stage.prototype.constructor = Stage;

Stage.prototype.addAllComponents = function () {
	this.centerPoint = this.addChild(Utils.drawCircle(0, 0, 7, 0xFFFF00, 1));

	this.firstLocalStage = this.addChild(new LocalStage(10,10,30));

	this.secondLocalStage = this.addChild(new LocalStage(5,5,30));
	//Uncoment this one to set the initial positions to the secondLocalStage
	//this.secondLocalStage.position.set(250,250);
	this.secondLocalStage.interactive = true;

	this.secondLocalStage.on("pointerdown", this.onStageClick, this);
	this.secondLocalStage.on("pointermove", this.onStageMove, this);
	this.secondLocalStage.on("pointerup", this.onStageUp, this);
	this.secondLocalStage.on("pointerupouside", this.onStageUp, this);
}

Stage.prototype.onStageClick = function (event) {
	if(this.isClicked){return;}
	this.isClicked = true;
	event.stopPropagation();
};

Stage.prototype.onStageMove = function (event) {
	if(!this.isClicked){return;}
	this.isMoved = true;

	var loc = event.data.getLocalPosition(this);
	this.secondLocalStage.position.set(loc.x, loc.y);
	this.secondLocalStage._txt.text = "x: " + (loc.x | 0) + "\ny: " + (loc.y | 0);
	
	event.stopPropagation();
};

Stage.prototype.onStageUp = function (event) {
	this.isMoved = false;
	this.isClicked = false;
};

Stage.prototype.ticker = function(delta) {
	
};

Stage.prototype.resizeStage = function(glW, glH) {
	
};
