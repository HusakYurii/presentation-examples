function InteractiveRect() {
	PIXI.Container.call(this);

	this.localRect = this.addChild(Utils.drawRect(-20,-20, 40, 40, 0x00FFFF, 0.5));
	this.interactive = true;
	this.isClicked = false;
	this.isMoved = false;

	this._txt = this.addChild(Utils.drawText("x: 0\ny: 0", "0x000000"));
	this._txt.style.fontSize = 15;


	this.on("pointerdown", this.onMousedown, this);
	this.on("pointermove", this.onMousemove, this);
	this.on("pointerup", this.onMouseup, this);
	this.on("pointerupouside", this.onMouseup, this);
};

InteractiveRect.prototype = Object.create(PIXI.Container.prototype);
InteractiveRect.prototype.constructor = InteractiveRect;


InteractiveRect.prototype.onMousedown = function (event) {
	if(this.isClicked){return;}
	this.isClicked = true;
	event.stopPropagation();
};

InteractiveRect.prototype.onMousemove = function (event) {
	if(!this.isClicked){return;}
	this.isMoved = true;

	var loc = event.data.getLocalPosition(this.parent);
	this.position.set(loc.x, loc.y);
	this._txt.text = "x: " + (loc.x | 0) + "\ny: " + (loc.y | 0);

	event.stopPropagation();

};

InteractiveRect.prototype.onMouseup = function (event) {
	this.isMoved = false;
	this.isClicked = false;
};
