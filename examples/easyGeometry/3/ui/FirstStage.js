"use strict";

function FirstStage(w, h, x, y) {
    Axes.call(this, w, h, x, y);

    this.tank = this.addChild(new Tank(FirstStage.CONFIG));
    this.hitArea = new PIXI.Rectangle(-w/2, -h/2, w, h);

    this.interactive = true;
    this.isClick = false;

    this.on("pointerdown", this.onPointerDown, this);
    this.on("pointermove", this.onPointerMove, this);
    this.on("pointerup", this.onPointerUp, this);
    this.on("pointerupoutside", this.onPointerUp, this);
}

FirstStage.prototype = Object.create(Axes.prototype);
FirstStage.prototype.constructor = FirstStage;

FirstStage.prototype.onPointerDown = function (event) {
    this.isClick = true;

};

FirstStage.prototype.onPointerMove = function (event) {
    if(!this.isClick){return}

    var loc = event.data.getLocalPosition(this);

    if(event.target === this.tank){
        this.tank.position.set(loc.x, loc.y);
        return;
    }
    this.tank.aimTo(loc);
};

FirstStage.prototype.onPointerUp = function (event) {
    this.isClick = false;
};

FirstStage.prototype.resizeStage = function (glW, glH){
    this.hitArea = new PIXI.Rectangle(-glW/2, -glH/2, glW, glH);
};

FirstStage.prototype.ticker = function (delta) {
    if(this.tank){this.tank.ticker(delta);}
};

FirstStage.CONFIG = {
    base: {
        name: "base",
        scl: 0.5,
        x: 0,
        y: 0
    },
    muzzle: {
        name: "muzzle",
        scl: 0.5,
        x: 0,
        y: 0
    }
};