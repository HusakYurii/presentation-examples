var Layout = {};
/*Global canvas sizes */
Layout.glW = 0;
Layout.glH = 0;

Layout.resizeView = function() {

    var currW = window.innerWidth;
    var currH = window.innerHeight;

    if(Layout.glW === currW && Layout.glH === currH){return;}

    Layout.glW = currW;

    Layout.glH = currH;
    APP.app.view.style.width = currW + "px";
    APP.app.view.style.height = currH + "px";

    APP.app.renderer.resize(currW, currH);

    APP.resizeStage(currW, currH);
};

window.addEventListener("resize", Layout.resizeView);
