"use strict";

function Tank(config) {
    PIXI.Container.call(this);

    this._angle = 0;

    this.base = this.addChild(Tank.addElement(config.base));
    this.muzzle = this.addChild(Tank.addElement(config.muzzle));


    this.visualized = false;
    this._arc = null;

    this.isClick = false;
    this.interactive = true;

}

Tank.prototype = Object.create(PIXI.Container.prototype);
Tank.prototype.constructor = Tank;


Tank.prototype.aimTo = function (obj) {

    var dX = obj.x - this.x;
    var dY = obj.y - this.y;
    this._angle = +Math.atan2(dY, dX).toFixed(2);

    this.muzzle.rotation = -Math.PI/2 + this._angle;
    //console.log(this._angle);
    this.visualizeAngle();
};

Tank.prototype.visualizeAngle = function () {
    //THIS FUNCTION AND ALL THIS MATH ARE JUST TO VISUALIZE THE ANGLE
    if(!this.visualized){
        this.visualized = true;

        this.base.addChild(Utils.drawLine({x:0, y:0}, {x: 0, y: 300}, 4, "0xFF0000"));
        this.muzzle.addChild(Utils.drawLine({x:0, y:0}, {x: 0, y: 300}, 4, "0xFF0000"));
        this._arc = this.addChild(new PIXI.Graphics());
    }

    this._arc.clear();
    var isClockwise = (Math.PI/2 > this._angle && -Math.PI/2 < this._angle);
    this._arc.lineStyle(2, "0x00FFFF", 1).arc(0,0, 100, Math.PI/2, this._angle, isClockwise).endFill();
};

Tank.prototype.move = function (delta) {

};

Tank.prototype.ticker = function (delta) {

};

Tank.addElement = function (conf) {
    var t =  new PIXI.Sprite(PIXI.utils.TextureCache[conf.name]);
    t.position.set(conf.x, conf.y);
    t.scale.set(conf.scl);
    t.anchor.set(0.5);
    return t;
};