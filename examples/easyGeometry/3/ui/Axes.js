"use strict";

function Axes(w, h, x, y) {
    PIXI.Container.call(this);

    this._w = w || 200;
    this._h = h || 200;
    this.x = x || 0;
    this.y = y || 0;

    this.xAxis = null;
    this.yAxis = null;

    this.addAxes();
    this.addLabels();

}

Axes.prototype = Object.create(PIXI.Container.prototype);
Axes.prototype.constructor = Axes;

Axes.prototype.addAxes = function () {
    var x = this._w;
    var h = this._h;

    this.xAxis = this.addChild(Utils.drawLine({x: -x/2, y: 0}, {x: x/2, y: 0}, 3, "0x000000"));
    this.yAxis = this.addChild(Utils.drawLine({x: -0, y: -h/2}, {x: 0, y: h/2}, 3, "0x000000"));
};

Axes.prototype.addLabels = function () {
    this.addChild(Utils.drawText("X", "0x000000")).position.set(this._w / 2 + 20, 0);
    this.addChild(Utils.drawText("Y", "0x000000")).position.set(0, this._h / 2 + 20);
    this.addChild(Utils.drawText(String(this.x + ", " + this.y), "0xFF0000", { fill: "0xFF0000", fontFamily: "Arial Black", fontSize: 15})).position.set(10, 10);
};