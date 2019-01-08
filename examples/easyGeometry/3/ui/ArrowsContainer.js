function ArrowsContainer() {
	PIXI.Container.call(this);


	this.interactive = true;
	this.arrowRight = null;
	this.arrowLeft = null;

	this.addArrows();
	this.on("pointerdown", this.onArrowClick, this);

}

ArrowsContainer.prototype = Object.create(PIXI.Container.prototype);
ArrowsContainer.prototype.constructor = ArrowsContainer;

ArrowsContainer.prototype.addArrows = function () {
	this.arrowLeft = this.addChild(ArrowsContainer.addSprite("arrow", {x: -200, y:0}, {x: -1, y: 1}));
	this.arrowLeft.interactive = true;
	// this.arrowLeft.visible = true;

	this.arrowRight = this.addChild(ArrowsContainer.addSprite("arrow", {x: 200, y:0}, {x: 1, y: 1}));
	this.arrowRight.interactive = true;
	// this.arrowRight.visible = false;
}

ArrowsContainer.prototype.onArrowClick = function (event) {
	if(event.target === this.arrowLeft){this.emit("left", -1);}
	if(event.target === this.arrowRight){this.emit("right", 1);}

	// this.arrowLeft.visible = !this.arrowLeft.visible;
	// this.arrowRight.visible = !this.arrowRight.visible;

	event.stopPropagation();
}

ArrowsContainer.addSprite = function (name, loc, slc) {
	var s = new PIXI.Sprite.fromFrame("arrow");
	s.position.set(loc.x, loc.y);
	s.scale.set(slc.x, slc.y);
	s.anchor.set(0.5);
	return s;
}