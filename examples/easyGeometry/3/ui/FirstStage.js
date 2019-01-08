"use strict";

function FirstStage(w, h, x, y) {
    Axes.call(this, w, h, x, y);

}

FirstStage.prototype = Object.create(Axes.prototype);
FirstStage.prototype.constructor = FirstStage;

FirstStage.prototype.move = function (x, y) {
    this.x += x;
    this.y += y;
};