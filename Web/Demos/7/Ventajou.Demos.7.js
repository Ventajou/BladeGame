
if(typeof Ventajou == 'undefined') Ventajou = {};
if(!Ventajou.Demos) Ventajou.Demos = {};

Ventajou.Demos.InGameMenuGame = (function() {
    Blade.derive(InGameMenuGame, Ventajou.Gaming.Game);
    var $base = Ventajou.Gaming.Game.prototype;
    function InGameMenuGame(element) {
        $base.constructor.call(this, element);
        this.loadScene(new Ventajou.Demos.Scenes.TitleScene(this));
    }
    var p = InGameMenuGame.prototype;
    p.get_Name = function() {
        return 'In Game Menu';
    };
    return InGameMenuGame;
})();
if(!Ventajou.Demos.Scenes) Ventajou.Demos.Scenes = {};

Ventajou.Demos.Scenes.HighScores = (function() {
    Blade.derive(HighScores, Ventajou.Gaming.Scene);
    var $base = Ventajou.Gaming.Scene.prototype;
    function HighScores(game) {
        $base.constructor.call(this, game);
    }
    Blade.impl(HighScores, 'IDisposable');
    return HighScores;
})();

Ventajou.Demos.Scenes.Level = (function() {
    Blade.derive(Level, Ventajou.Gaming.Scene);
    var $base = Ventajou.Gaming.Scene.prototype;
    function Level(game) {
        $base.constructor.call(this, game);
    }
    Blade.impl(Level, 'IDisposable');
    return Level;
})();

Ventajou.Demos.Scenes.TitleScene = (function() {
    Blade.derive(TitleScene, Ventajou.Gaming.Scene);
    var $base = Ventajou.Gaming.Scene.prototype;
    function TitleScene(game) {
        $base.constructor.call(this, game);
        this._menu = new Ventajou.Gaming.UI.InGame.Menu(game.overlay);
        this._menu.items = [new Ventajou.Gaming.UI.InGame.Title('Menus Demo'), new Ventajou.Gaming.UI.InGame.Label('Welcome'), new Ventajou.Gaming.UI.InGame.Button('Start'), new Ventajou.Gaming.UI.InGame.Button('High Scores')];
    }
    var p = TitleScene.prototype;
    p._menu = null;
    p.onStart = function () {
        this._menu.show();
    };
    Blade.impl(TitleScene, 'IDisposable');
    return TitleScene;
})();
