"use strict";

function Logo(config) {
    PIXI.Container.call(this);
    this.logo = null;
    this.txtBefore  = config.logoText.before;
    this.txtAfter  = config.logoText.after;

    this.addAllComponents();
}

Logo.prototype = Object.create(PIXI.Container.prototype);
Logo.prototype.constructor = Logo;

Logo.prototype.addAllComponents = function () {
    this.logo = this.addChild(Utils.drawText(this.txtBefore));
    this.logo.style.fontSize = 80;
    this.logo.anchor.set(0.5);
};

Logo.prototype.changeText = function () {
    this.logo.text = this.txtAfter;
};