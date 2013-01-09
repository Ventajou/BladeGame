
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
            resolution: Ventajou.Gaming.Config.Resolution.qvga,
            fitToContainer: true,
            fullScreen: false
        };
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
    p.refresh = function () {
        var context = this.game.canvas.getContext('2d');
        context.fillStyle = 'black';
        context.fillRect(0, 0, 320, 240);
        context.drawImage(this.sprite, 160, 120);
    };
    Blade.impl(RetroLookScene, 'IDisposable');
    return RetroLookScene;
})();
