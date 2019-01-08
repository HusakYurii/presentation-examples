function Stage(){
	PIXI.Container.call(this);
	
	this.arrowsContainer = null;
	this.firstStage = null;
	this.secondStage = null;

	this.isAnimated = false;

	this._speed = 20;
	this._dist = 0;
	this.animationDistance = 1000;


	this.addAllComponents();
}
	
Stage.prototype = Object.create(PIXI.Container.prototype);
Stage.prototype.constructor = Stage;

Stage.prototype.addAllComponents = function () {
	this.arrowsContainer = this.addChild(new ArrowsContainer());
	this.arrowsContainer.scale.set(0.15);
	this.arrowsContainer.on("left", this.scrollScages, this);
	this.arrowsContainer.on("right", this.scrollScages, this);

	this.firstStage = this.addChild(new FirstStage(600, 500, 0,0));
	this.secondStage = this.addChild(new FirstStage(300, 500, 1000,0));

};


Stage.prototype.scrollScages = function (dir) {
	if(this.isAnimated){return;}
	this.isAnimated = true;
	this._dir = dir;
};

Stage.prototype.ticker = function(delta) {
	if(!this.isAnimated){return;}

	this._dist += this._speed;
	if(this._dist >= this.animationDistance){
		this.isAnimated = false;
		this._dist = 0;
	}

	this.firstStage.move(this._speed * this._dir, 0);
    this.secondStage.move(this._speed * this._dir, 0);
};

Stage.prototype.resizeStage = function(glW, glH) {
	this.arrowsContainer.position.set((glW/2 - 100), -(glH/2 - 25));

	this.animationDistance = glW;
};

