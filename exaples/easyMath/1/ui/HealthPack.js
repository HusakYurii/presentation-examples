"use strict";

function HealthPack(config) {
    PIXI.Container.call(this);

    this.background = null;
    this.cross = null;
    this._value = config.cureValue;

    this.addAllComponents();
}

HealthPack.prototype = Object.create(PIXI.Container.prototype);
HealthPack.prototype.constructor = HealthPack;

HealthPack.prototype.addAllComponents = function () {
    this.background = this.addChild(Utils.drawRoundedRect(-50, -50, 100, 100, 20, 0xFF0000, 0.8));
    this.background.interactive = true;
    this.background.on("pointerdown", this.onBackgroundClick, this);

    this.cross = this.addChild(new PIXI.Container());
    var vertLine = Utils.drawRect(-40, -10, 80, 20, 0x00FF00);
    var horLine = Utils.drawRect(-10, -40, 20, 80, 0x00FF00);
    this.cross.addChild(vertLine, horLine);
};

HealthPack.prototype.onBackgroundClick = function () {
  this.emit("cure", this._value);
};