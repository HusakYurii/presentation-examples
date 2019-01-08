"use strict";

function Stage(){
	PIXI.Container.call(this);
	
	this.arrowsContainer = null;
	this.currentStage = null;

	this.isAnimated = false;

	this._speed = 0.05;
    this._dir = null;


	this.addAllComponents();
}
	
Stage.prototype = Object.create(PIXI.Container.prototype);
Stage.prototype.constructor = Stage;

Stage.prototype.addAllComponents = function () {
	this.currentStage = this.addChild(new FirstStage(600, 500, 0,0));
    this._dir = -1;


    this.arrowsContainer = this.addChild(new ArrowsContainer());
    this.arrowsContainer.scale.set(0.15);
    this.arrowsContainer.on("left", this.scrollScages, this);
    this.arrowsContainer.on("right", this.scrollScages, this);
};


Stage.prototype.scrollScages = function (dir) {
	if(this.isAnimated || this._dir === dir){return;}
	this.isAnimated = true;
	this._dir = dir;
};

Stage.prototype.ticker = function(delta) {
    if(this.currentStage){this.currentStage.ticker(delta);}

	if(!this.isAnimated){return;}
    this.currentStage.alpha -= this._speed;
    if(this.currentStage.alpha <= 0){
        this.updateStage();

	}
};

Stage.prototype.updateStage = function () {

    this.removeChild(this.currentStage);
    this.currentStage = null;

    this.currentStage = this._dir === -1 ? new FirstStage(600, 500, 0,0) : new SecondStage(500, 500, 0,0);
    this.currentStage.alpha = 1;
    this.addChild(this.currentStage);

    this.isAnimated = false;
};

Stage.prototype.resizeStage = function(glW, glH) {
	this.arrowsContainer.position.set((glW/2 - 100), -(glH/2 - 25));
	if(this.currentStage){this.currentStage.resizeStage(glW, glH);}
};

