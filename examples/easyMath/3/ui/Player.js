"use strict";

function Player(config) {
    var texture = PIXI.utils.TextureCache[config.name];
    PIXI.Sprite.call(this, texture);

    this.scale.set(config.scl);
    this.anchor.set(0.5);

    this.interactive = true;
    this.isClick = false;
    this.isMove = false;

    this.on("pointerdown", this.onPointerdown, this);
    this.on("pointermove", this.onPointermove, this);
    this.on("pointerup", this.onPointerup, this);
    this.on("pointerupoutside", this.onPointerup, this);
}

Player.prototype = Object.create(PIXI.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.onPointerdown = function (event) {
    this.isClick = true;
};

Player.prototype.onPointermove = function (event) {
    if(!this.isClick){return;}
    this.isMove = true;
    var loc = event.data.getLocalPosition(this.parent);
    this.position.set(loc.x, loc.y);
};

Player.prototype.onPointerup = function (event) {
    if(!this.isClick){return;}
    this.isClick = false;
    this.isMove = false;
};