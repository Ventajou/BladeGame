
if(typeof Ventajou == 'undefined') Ventajou = {};
if(!Ventajou.Demos) Ventajou.Demos = {};

Ventajou.Demos.RetroLookGame = (function() {
    Blade.derive(RetroLookGame, Ventajou.Gaming.Game);
    var $base = Ventajou.Gaming.Game.prototype;
    function RetroLookGame(element) {
        $base.constructor.call(this, element);
        this.loadScene(new Ventajou.Demos.RetroLookScene(this));
    }
    var p = RetroLookGame.prototype;
    p.get_Name = function() {
        return 'Retro Look';
    };
    p.get_defaultSettings = function() {
        return {
            resolution: new Ventajou.Gaming.Config.Resolution(160, 100, '160x100'),
            fitToContainer: true,
            fullScreen: false,
            blockyPixels: true
        };
    };
    p.buildMenus = function () {
        return [new Ventajou.Gaming.Config.UI.Menu('Display', 'display', [new Ventajou.Gaming.Config.Settings.FullScreenSetting(), new Ventajou.Gaming.Config.Settings.StretchToWindowSetting()])];
    };
    return RetroLookGame;
})();

Ventajou.Demos.RetroLookScene = (function() {
    Blade.derive(RetroLookScene, Ventajou.Gaming.Scene);
    var $base = Ventajou.Gaming.Scene.prototype;
    function RetroLookScene(game) {
        $base.constructor.call(this, game);
        this.sprite = document.getElementById('sprite');
    }
    var p = RetroLookScene.prototype;
    p.sprite = null;
    p.onStart = function () {
    };
    p.onPaint = function (context) {
        context.fillStyle = 'black';
        context.fillRect(0, 0, this.get_canvasWidth(), this.get_canvasHeight());
        context.drawImage(this.sprite, (this.get_canvasWidth() - this.sprite.naturalWidth) / 2, (this.get_canvasHeight() - this.sprite.naturalHeight) / 2);
    };
    Blade.impl(RetroLookScene, 'IDisposable');
    return RetroLookScene;
})();
