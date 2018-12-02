function Stage(){
	PIXI.Container.call(this)

}
	
Stage.prototype = Object.create(PIXI.Container.prototype);
Stage.prototype.constructor = Stage;


Stage.prototype.ticker = function(delta) {
	
};

Stage.prototype.resizeStage = function(glW, glH) {

};
