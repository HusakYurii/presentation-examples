function LocalStage(rows, columns, cellSize) {
	PIXI.Container.call(this);

	this.rows = rows;
	this.columns = columns;
	this.cellSize = cellSize;

	this._w = this.cellSize * this.columns;
	this._h = this.cellSize * this.rows

	this._txt = this.addChild(Utils.drawText("x: 0\ny: 0", "0x000000"));
	this._txt.position.set(-this._w/2, -this._h/2);
	this._txt.style.fontSize = 15;

	this.centerPoint = null;
	this.localRect = null;

	this.interactive = true;
	this.isClicked = false;
	this.isMoved = false;

	this.addGrid();

	//this one for global manipulation
	this.hitArea = new PIXI.Rectangle(-this._w/2, -this._h/2, this._w, this._h);


	this.on("pointerdown", this.onStageClick, this);
	this.on("pointermove", this.onStageMove, this);
	this.on("pointerup", this.onStageUp, this);
	this.on("pointerupouside", this.onStageUp, this);
};

LocalStage.prototype = Object.create(PIXI.Container.prototype);
LocalStage.prototype.constructor = LocalStage;

LocalStage.prototype.addGrid = function () {
	this.addLabes();
	
	for (var i = 0; i < this.rows; i++) {
		for (var j = 0; j < this.columns; j++) {

			var x = -this._w/2 + (this.cellSize * i);
			var y = -this._h/2 + (this.cellSize * j);

			this.addChild(Utils.drawTransparentRect(x, y, this.cellSize, this.cellSize, 1, "0x000000"));
		}
	}

	this.addCenterPoint();
	this.addIneractiveRect();
	this.addAxes();

};

LocalStage.prototype.addLabes = function () {
	this.addChild(Utils.drawText("X", 0xFF0000)).position.set(this._w/2 + 20, 0);
	this.addChild(Utils.drawText("Y", 0xFF0000)).position.set(0, this._h/2 + 20);
}

LocalStage.prototype.addCenterPoint = function () {
	this.centerPoint = this.addChild(Utils.drawCircle(0, 0, 5, 0xFF0000, 1));
}

LocalStage.prototype.addIneractiveRect = function () {
	this.localRect = this.addChild(new InteractiveRect());
}

LocalStage.prototype.addAxes = function () {
	this.addChild(Utils.drawLine({x: -this._w/2, y: 0}, {x: this._w/2, y: 0}, 2, 0xFF0000, 1));
	this.addChild(Utils.drawLine({x: 0, y: -this._h/2}, {x: 0, y: this._h/2}, 2, 0xFF0000, 1));
}

LocalStage.prototype.onStageClick = function (event) {
	if(this.isClicked){return;}
	this.isClicked = true;
	event.stopPropagation();
};

LocalStage.prototype.onStageMove = function (event) {
	if(!this.isClicked){return;}
	this.isMoved = true;

	var loc = event.data.getLocalPosition(this.parent);
	this.position.set(loc.x, loc.y);
	this._txt.text = "x: " + (loc.x | 0) + "\ny: " + (loc.y | 0);
	
	event.stopPropagation();
};

LocalStage.prototype.onStageUp = function (event) {
	this.isMoved = false;
	this.isClicked = false;
};
