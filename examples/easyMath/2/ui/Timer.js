"use strict";

function Timer(config) {
    PIXI.Container.call(this);

    this._initialTime = config.time;
    this._timer = 0;

    this.timerText = null;
    this.timerArc = null;

    this.isStopped = false;

    this.addAllComponents();
}

Timer.prototype = Object.create(PIXI.Container.prototype);
Timer.prototype.constructor = Timer;

Timer.prototype.addAllComponents = function(){

    this.timerText = this.addChild(Utils.drawText(String(this._initialTime/1000)));
    this.timerText.style.fontSize = 60;
    this.timerText.anchor.set(0.5);

    this.timerArc = this.addChild(Utils.arc(0, 0, 200, 0, 0, 40, 0x0000FF, 0.8));
};

Timer.prototype.redrawTimer = function(){
   /**
        3 * Math.PI = 3000;
        ? = this._timer //time left

        (3 * Math.PI * this._timer) / 3000 = new angle (radians)
    */
   /*Clean the old arc up*/
   this.timerArc.clear();
   /*Calculating a new angle*/
    var newAngle = -Math.PI/2 + ((2 * Math.PI * this._timer) / this._initialTime);
    /*Draw a new arc and text*/
    this.timerArc.lineStyle(40, 0x0000FF).arc(0, 0, 200, -Math.PI/2, newAngle);
    this.timerText.text = (this._initialTime - this._timer)/1000 | 0;

    if(this._timer <= this._initialTime){return;}
    this.isStopped = true;
    this.emit("timeIsUp", this);
};

Timer.prototype.ticker = function(delta) {
    if(this.isStopped){return;}

    this._timer += delta;
    this.redrawTimer(delta);
};
