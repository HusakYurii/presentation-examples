"use strict";

function Background(config) {
    var texture = PIXI.utils.TextureCache[config.name];
    PIXI.extras.TilingSprite.call(this, texture, texture.width, texture.height);

    this.anchor.set(0.5);
    this.speedY = config.speed;
    
}

Background.prototype = Object.create(PIXI.extras.TilingSprite.prototype);
Background.prototype.constructor = Background;

Background.prototype.move = function (delta) {
    this.tilePosition.y += this.speedY * delta / 15;
};

Background.prototype.ticker = function (delta) {
    this.move(delta);
};

Background.prototype.resizeStage = function (glW, glH) {
    this.width = glW;
    this.height = glH;
};