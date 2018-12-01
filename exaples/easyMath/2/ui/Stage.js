function Stage(){
	PIXI.Container.call(this);

	this.logo = null;
	this.timer = null;
	this.button = null;

	this.addAllComponents();

};
	
Stage.prototype = Object.create(PIXI.Container.prototype);
Stage.prototype.constructor = Stage;

Stage.prototype.addAllComponents = function(){

	this.logo = this.addChild(new Logo(Stage.CONFIG));
	this.timer = this.addChild(new Timer(Stage.CONFIG));
	this.timer.once("timeIsUp", this.onTimeIsUp, this);

	this.button = this.addChild(new Button(Stage.CONFIG));
};

Stage.prototype.onTimeIsUp = function(){
	this.logo.changeText();
};

Stage.prototype.ticker = function(delta) {
	if(this.timer){this.timer.ticker(delta);}
	if(this.button){this.button.ticker(delta);}
};

Stage.prototype.resizeStage = function(glW, glH) {
	this.logo.position.set(0, -glH/3);
	this.button.position.set(0, glH/3);
};


Stage.CONFIG = {
    logoText: {
    	before: "Retry?",
		after: "Time is up!"
	},
    time: 5000,
	btnScaleSpeed: 3.5
};