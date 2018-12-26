function LocalStage(rows, columns, cellSize) {
	PIXI.Container.call(this);

	this.rows = rows;
	this.columns = columns;
	this.cellSize = cellSize;

	this._w = this.cellSize * this.columns;
	this._h = this.cellSize * this.rows

	this.centerPoint = null;

	this.interactive = true;
	this.isClicked = false;
	this.isMoved = false;

	this.addGrid();


};

LocalStage.prototype = Object.create(PIXI.Container.prototype);
LocalStage.prototype.constructor = LocalStage;

LocalStage.prototype.addGrid = function () {

	this.centerPoint = this.addChild(Utils.drawCircle(0, 0, 5, "0x000000", 1));

	this.addChild(Utils.drawLine({x: -this._w/2, y: 0}, {x: this._w/2, y: 0}, 2, 0xFF0000, 1));
	this.addChild(Utils.drawLine({x: 0, y: -this._h/2}, {x: 0, y: this._h/2}, 2, 0xFF0000, 1));

	this.addChild(Utils.drawText("X", 0xFF0000)).position.set(this._w/2 + 20, 0);
	this.addChild(Utils.drawText("Y", 0xFF0000)).position.set(0, this._h/2 + 20);

	for (var i = 0; i < this.rows; i++) {
		for (var j = 0; j < this.columns; j++) {

			var x = -this._w/2 + (this.cellSize * i);
			var y = -this._h/2 + (this.cellSize * j);

			this.addChild(Utils.drawTransparentRect(x, y, this.cellSize, this.cellSize, 1, "0x000000"));
		}
	}


};

LocalStage.prototype.resizeStage = function (glW, glH) {
	
}