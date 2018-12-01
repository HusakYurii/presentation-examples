var APP = {};
/*Initial sizes of a canvas*/
APP.w = 800;
APP.h = 600;
/*The current stage*/
APP.stage = null;

APP.isRun = false;

APP.run = function() {

    if(APP.isRun){return;}
    APP.isRun = true;

	var view = document.querySelector("canvas");

	APP.app = new PIXI.Application({
		width: APP.w,
		height: APP.h,
		view: view,
		transparent: false,
		backgroundColor: 0x000000
	});

	APP.app.ticker.add(APP.ticker);

    APP.addStage();
    Layout.resizeView();
};

APP.addStage = function(){
    APP.stage = APP.app.stage.addChild(new Stage());
};

APP.ticker = function () {
	var delta = APP.app.ticker.elapsedMS;
    APP.stage.ticker(delta);
};

APP.resizeStage = function(glW, glH){

    if(!APP.stage){return;}

    APP.stage.position.set(glW/2, glH/2);
    APP.stage.resizeStage(glW, glH);
};

window.addEventListener("load", APP.run);
