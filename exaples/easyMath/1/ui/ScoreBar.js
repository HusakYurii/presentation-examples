"use strict";

function ScoreBar(config) {
    PIXI.Container.call(this);

    this.healthBarBg = null;
    this.healthBar = null;
    this.healthIndicator = null;
    /*Actual players health*/
    this.health = config.aimHealth;

    /*Private properties - constants for math calculating*/
    this._aimHealth = config.aimHealth;
    this._barWidth = 500;
    this._barHeigh = 25;

    this.addAllComponents(config);
}

ScoreBar.prototype = Object.create(PIXI.Container.prototype);
ScoreBar.prototype.constructor = ScoreBar;

ScoreBar.prototype.addAllComponents = function () {

    var w = this._barWidth;
    var h = this._barHeigh;
    var txt = this.health;

    this.healthBarBg = this.addChild(Utils.drawRect(0 , 0, w * 1.05, h * 1.4, 0x00FF00, 0.8));

    this.healthBar = this.healthBarBg.addChild(Utils.drawRect(0, 0, w, h, 0xFF0000, 0.9));
    this.healthBar.position.set(w * 0.025, h * 0.2);

    this.healthIndicator = this.healthBarBg.addChild(Utils.drawText(txt));
    this.healthIndicator.position.set(-50, 17.5);
    this.healthIndicator.anchor.set(0.5);
};

ScoreBar.prototype.updateScore = function (damage) {
    /*
        50 = 500px;
        50 + damage = ?

        ( 500 * (50 + damage) ) / 50 = new width
    */


    /* Updating a player HP */
    this.health += damage;

    /*Checking the score boundaries*/
    if(this.health <= 0) {this.health = 0;}
    if(this.health >= this._aimHealth) {this.health = this._aimHealth;}

    /*Score updating*/
    var newWidth = (this._barWidth * this.health) / this._aimHealth;

    this.healthBar.width = newWidth;

    /* Change text */
    this.healthIndicator.text = "" + this.health;
};