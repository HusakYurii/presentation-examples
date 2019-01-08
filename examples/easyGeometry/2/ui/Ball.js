"use strict";

function Ball(parentContainer, r) {
    PIXI.Container.call(this);

    this._parentContainer = parentContainer || this.parent;
    this._r = r || 50;
    this.ball = null;

    this.addBall();
}

Ball.prototype = Object.create(PIXI.Container.prototype);
Ball.prototype.constructor = Ball;

Ball.prototype.addBall = function () {
      this.ball = this.addChild(Utils.drawCircle(0,0,this._r, "0xFFFF00", 0.5));
};