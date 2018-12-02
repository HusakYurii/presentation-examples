"use strict";

function Button(config) {
    PIXI.Container.call(this);

    this.background = null;
    this.btnText = null;

    this._sclDir = 1;
    this._baseScl = 1;
    this._speed = config.btnScaleSpeed / 1000;

    this.addAllComponents(config);
}

Button.prototype = Object.create(PIXI.Container.prototype);
Button.prototype.constructor = Button;


Button.prototype.addAllComponents = function(config){

    this.background = this.addChild(Utils.drawRoundedRect(-150, -40, 300, 80, 25, 0xC2C2C2));

    this.btnText = this.background.addChild(Utils.drawText(config.logoText.before, "0x000000"));
    this.btnText.style.fontSize = 50;
    this.btnText.anchor.set(0.5);
};

Button.prototype.changeScale = function () {
    this._baseScl += this._speed * this._sclDir;
    this.background.scale.set(this._baseScl);

    if(this._baseScl <= 1 || this._baseScl >= 1.2){this._sclDir *= -1;}
};

Button.prototype.ticker = function(delta) {
    this.changeScale();
};