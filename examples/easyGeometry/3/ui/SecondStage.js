"use strict";

function SecondStage(w, h, x, y) {
    Axes.call(this, w, h, x, y);
    
};

SecondStage.prototype = Object.create(Axes.prototype);
SecondStage.prototype.constructor = SecondStage;

FirstStage.prototype.move = function (x, y) {
    this.x += x;
    this.y += y;
};