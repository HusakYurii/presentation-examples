var Utils = {};

Utils.drawRect = function (x, y,  w, h, color, alpha) {
    color = color || 0xFF0000;
    alpha = alpha || 1;
    return new PIXI.Graphics().beginFill(color, alpha).drawRect(x, y, w, h).endFill();
};

Utils.drawCircle = function (x, y, r, color, alpha) {
    color = color || 0xFF0000;
    alpha = alpha || 1;
    return new PIXI.Graphics().beginFill(color, alpha).drawCircle(x, y, r).endFill();
};

Utils.drawRoundedRect = function (x, y,  w, h, r, color, alpha){
    color = color || 0xFF0000;
    alpha = alpha || 1;
    return new PIXI.Graphics().beginFill(color, alpha).drawRoundedRect (x, y, w, h, r).endFill();
};

Utils.drawText = function (txt, style) {
    style = style || { fill: "#adf5d9", fontFamily: "Arial Black", fontSize: 30};
    return new PIXI.Text(String(txt), style);
};

Utils.toRadians = function (degrees) {
    return degrees * (Math.PI/180);
};

Utils.toDegrees = function (radians) {
    return radians * (180 / Math.PI);
};
