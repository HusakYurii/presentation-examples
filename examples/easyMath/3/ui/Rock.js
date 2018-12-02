"use strict";

function Rock(config) {
    var texture = PIXI.utils.TextureCache[config.name];
    PIXI.Sprite.call(this, texture);

    this.scale.set(Utils.getRandom(config.scl.min, config.scl.max));
    this.anchor.set(0.5);

    this.speedY = Utils.getRandomInt(config.rockSpeed.min, config.rockSpeed.max);

}

Rock.prototype = Object.create(PIXI.Sprite.prototype);
Rock.prototype.constructor = Rock;

Rock.prototype.move = function(delta){
    var glH = Layout.glH;

    this.position.y += this.speedY * delta /15;
    if(this.y >= glH){this.emit("deleteMe", this);}
};

Rock.prototype.ticker = function (delta) {
    this.move(delta);
};
