"use strict";

function SecondStage(w, h, x, y) {
    Axes.call(this, w, h, x, y);
    
};

SecondStage.prototype = Object.create(Axes.prototype);
SecondStage.prototype.constructor = SecondStage;


SecondStage.prototype.ticker = function (delta) {

};