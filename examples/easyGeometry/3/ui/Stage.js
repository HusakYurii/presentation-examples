function Stage(){
	PIXI.Container.call(this);
	
	this.arrowsContainer = null;

	this.isAnimated = false;

	this._speed = 20;
	this._dist = 0;
	this.animationDistance = 0;


	this.addAllComponents();
}
	
Stage.prototype = Object.create(PIXI.Container.prototype);
Stage.prototype.constructor = Stage;

Stage.prototype.addAllComponents = function () {
	this.arrowsContainer = this.addChild(new ArrowsContainer());
	this.arrowsContainer.scale.set(0.15);
	this.arrowsContainer.on("left", this.scrollScages, this);
	this.arrowsContainer.on("right", this.scrollScages, this);
}

Stage.prototype.addArrows = function () {

}

Stage.prototype.scrollScages = function (dir) {
	if(this.isAnimated){return;}
	this.isAnimated = true;
	this._dir = dir;
}

Stage.prototype.ticker = function(delta) {
	if(!this.isAnimated){return;}

	// this._dist += this._speed;
	// if(this._dist >= this.animationDistance){
	// 	this.isAnimated = false;
	// 	this._dist = 0;
	// }

	// this.someExample.move(this._speed * this._dir, 0);
};

Stage.prototype.resizeStage = function(glW, glH) {
	this.arrowsContainer.position.set((glW/2 - 100), -(glH/2 - 25));

	this.animationDistance = glW;
};

