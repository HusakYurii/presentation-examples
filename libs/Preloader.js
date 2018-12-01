var Preloader = {};
/*Assets will be passed later*/
Preloader.assets = null;
/*The call back function which will fire as
 the loader completes loading of all assets*/
Preloader.onComplete = null;

Preloader.isLoaded = false;

Preloader.load = function (callback){
    if(Preloader.isLoaded){return;}
    
    Preloader.onComplete = callback;






};