"use strict";

function Ball(parentContainer, r, s) {
    PIXI.Container.call(this);

    this._parentContainer = parentContainer || this.parent;
    this._sizes = {width: this._parentContainer._w, height: this._parentContainer._h};
    this._r = r || 50;
    this._sX = s * 1.5;
    this._sY = s;

    this._xLine = this.addChild(new PIXI.Graphics());
    this._yLine = this.addChild(new PIXI.Graphics());

    this.ball = this.addChild(Utils.drawCircle(0,0,this._r, "0xFFFF00", 0.5));
    this._coord = this.ball.addChild(Utils.drawText("x: , y:", "0x0000FF", { fill: "0x0000FF", fontFamily: "Arial Black", fontSize: 15}));
    this._coord.position.set(15, -15);

}

Ball.prototype = Object.create(PIXI.Container.prototype);
Ball.prototype.constructor = Ball;

Ball.prototype.move = function (delta) {
    this.ball.x += this._sX;
    this.ball.y += this._sY;
    this._coord.text = "x: " + (this.ball.x | 0) + ", "+ " y: " + (this.ball.y | 0);
};

Ball.prototype.traceOut = function () {
    if((Math.abs(this.ball.x) + this._r) >= this._sizes.width/2){this._sX *= -1;}
    if((Math.abs(this.ball.y) + this._r) >= this._sizes.height/2){this._sY *= -1;}
};

Ball.prototype.drawLabels = function () {
    this._xLine.clear();
    this._yLine.clear();

    this._yLine.lineStyle(1, "0x00FF00", 1).moveTo(this.ball.x, 0).lineTo(this.ball.x, this.ball.y).endFill();
    this._yLine.lineStyle(1, "0x00FF00", 1).moveTo(0, this.ball.y).lineTo(this.ball.x, this.ball.y).endFill();

};

Ball.prototype.ticker = function (delta) {
    this.move(delta);
    this.traceOut();
    this.drawLabels();
};