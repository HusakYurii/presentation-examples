function InteractiveRect() {
	PIXI.Container.call(this);

	this.localRect = this.addChild(Utils.drawRect(-20,-20, 40, 40, 0x00FFFF, 0.5));
	this.interactive = true;

	this._txt = this.addChild(Utils.drawText("x: 0\ny: 0", "0x000000"));
	this._txt.style.fontSize = 15;
};

InteractiveRect.prototype = Object.create(PIXI.Container.prototype);
InteractiveRect.prototype.constructor = Stage;
