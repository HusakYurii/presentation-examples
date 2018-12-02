"use strict";

function Aim(config) {
    PIXI.Container.call(this);

    this.background = null;
    this.apple = null;
    this.damage = config.damage;

    this.addAllComponents();
}

Aim.prototype = Object.create(PIXI.Container.prototype);
Aim.prototype.constructor = Aim;

Aim.prototype.addAllComponents = function () {

    this.background = this.addChild(Utils.drawCircle(0,0,100, 0xFF0000, 0.8));
    this.apple = this.background.addChild(Utils.drawCircle(0,0,50,0x00FFFF, 0.8));

    this.apple.interactive = true;
    this.apple.on("pointerdown", this.appleHit, this);
};

Aim.prototype.appleHit = function () {
  /*As a player hits the apple, make an emit to update score and health*/
  this.emit("hit", this.damage);
};