
if(typeof Ventajou == 'undefined') Ventajou = {};
if(!Ventajou.Demos) Ventajou.Demos = {};

Ventajou.Demos.ControlFreakGame = (function() {
    Blade.derive(ControlFreakGame, Ventajou.Gaming.Game);
    var $base = Ventajou.Gaming.Game.prototype;
    function ControlFreakGame(element) {
        $base.constructor.call(this, element);
        this.loadScene(new Ventajou.Demos.ControlFreakScene(this));
    }
    var p = ControlFreakGame.prototype;
    p.get_Name = function() {
        return 'Control Freak';
    };
    p.get_defaultSettings = function() {
        return {
            resolution: Ventajou.Gaming.Config.Resolution.auto,
            fitToContainer: true,
            fullScreen: false,
            upKey: Ventajou.Gaming.Browser.Keyboard.up.code,
            downKey: Ventajou.Gaming.Browser.Keyboard.down.code,
            leftKey: Ventajou.Gaming.Browser.Keyboard.left.code,
            rightKey: Ventajou.Gaming.Browser.Keyboard.right.code
        };
    };
    p.buildMenus = function () {
        return [new Ventajou.Gaming.Config.UI.Menu('Display', 'display', [new Ventajou.Gaming.Config.Settings.FullScreenSetting()]), new Ventajou.Gaming.Config.UI.Menu('Input', 'input', [new Ventajou.Gaming.Config.UI.KeySetting('Up', 'upKey', Ventajou.Gaming.Browser.Keyboard.up, Ventajou.Demos.ControlFreakGame.up), new Ventajou.Gaming.Config.UI.KeySetting('Down', 'downKey', Ventajou.Gaming.Browser.Keyboard.down, Ventajou.Demos.ControlFreakGame.down), new Ventajou.Gaming.Config.UI.KeySetting('Left', 'leftKey', Ventajou.Gaming.Browser.Keyboard.left, Ventajou.Demos.ControlFreakGame.left), new Ventajou.Gaming.Config.UI.KeySetting('Right', 'rightKey', Ventajou.Gaming.Browser.Keyboard.right, Ventajou.Demos.ControlFreakGame.right)])];
    };
    return ControlFreakGame;
})();
Ventajou.Demos.ControlFreakGame.up = 0;
Ventajou.Demos.ControlFreakGame.down = 1;
Ventajou.Demos.ControlFreakGame.left = 2;
Ventajou.Demos.ControlFreakGame.right = 3;

Ventajou.Demos.ControlFreakScene = (function() {
    Blade.derive(ControlFreakScene, Ventajou.Gaming.Scene);
    var $base = Ventajou.Gaming.Scene.prototype;
    function ControlFreakScene(game) {
        $base.constructor.call(this, game);
        this.tiles = [document.getElementById('tile1'), document.getElementById('tile2'), document.getElementById('tile3')];
    }
    var p = ControlFreakScene.prototype;
    p.map = null;
    p.tiles = null;
    p.x = null;
    p.y = null;
    p.lastTimeStamp = null;
    p.speedX = null;
    p.speedY = null;
    p.keyDownHandler = null;
    p.keyUpHandler = null;
    p.onStart = function () {
        this.map = new Array(Ventajou.Demos.ControlFreakScene.mapWidth * Ventajou.Demos.ControlFreakScene.mapHeight);
        for(var i = 0; i < this.map.length; i++) {
            this.map[i] = Math.floor(Math.random() * 4) % 3;
        }
        this.x = 0;
        this.y = 0;
        this.lastTimeStamp = Date.now();
        this.speedX = 0.1;
        this.speedY = 0.1;
        Ventajou.Gaming.Config.UI.KeySetting.startListening(this.game.wrapper);
    };
    p.Dispose = function () {
        Ventajou.Gaming.Config.UI.KeySetting.stopListening();
        $base.Dispose.call(this);
    };
    p.onPaint = function (context) {
        var now = Date.now();
        var elapsed = now - this.lastTimeStamp;
        this.lastTimeStamp = now;
        var tileY = Math.floor(this.y / Ventajou.Demos.ControlFreakScene.tileSize);
        var cY = -(this.y % Ventajou.Demos.ControlFreakScene.tileSize);
        if (Ventajou.Gaming.Config.UI.KeySetting.keyStatus[Ventajou.Demos.ControlFreakGame.up]) {
            this.y -= this.speedY * elapsed;
        }
        if (Ventajou.Gaming.Config.UI.KeySetting.keyStatus[Ventajou.Demos.ControlFreakGame.down]) {
            this.y += this.speedY * elapsed;
        }
        if (Ventajou.Gaming.Config.UI.KeySetting.keyStatus[Ventajou.Demos.ControlFreakGame.left]) {
            this.x -= this.speedX * elapsed;
        }
        if (Ventajou.Gaming.Config.UI.KeySetting.keyStatus[Ventajou.Demos.ControlFreakGame.right]) {
            this.x += this.speedX * elapsed;
        }
        if (this.x + this.get_canvasWidth() >= Ventajou.Demos.ControlFreakScene.mapWidth * Ventajou.Demos.ControlFreakScene.tileSize) {
            this.x = Ventajou.Demos.ControlFreakScene.mapWidth * Ventajou.Demos.ControlFreakScene.tileSize - this.get_canvasWidth();
        } else if (this.x < 0) {
            this.x = 0;
        }
        if (this.y + this.get_canvasHeight() >= Ventajou.Demos.ControlFreakScene.mapHeight * Ventajou.Demos.ControlFreakScene.tileSize) {
            this.y = Ventajou.Demos.ControlFreakScene.mapHeight * Ventajou.Demos.ControlFreakScene.tileSize - this.get_canvasHeight();
        } else if (this.y < 0) {
            this.y = 0;
        }
        while (cY < this.get_canvasHeight()) {
            var tileX = Math.floor(this.x / Ventajou.Demos.ControlFreakScene.tileSize);
            var cX = -(this.x % Ventajou.Demos.ControlFreakScene.tileSize);
            while (cX < this.get_canvasWidth()) {
                context.drawImage(this.tiles[this.map[tileX + tileY * Ventajou.Demos.ControlFreakScene.mapWidth]], cX, cY);
                tileX++;
                cX += Ventajou.Demos.ControlFreakScene.tileSize;
            }
            tileY++;
            cY += Ventajou.Demos.ControlFreakScene.tileSize;
        }
    };
    Blade.impl(ControlFreakScene, 'IDisposable');
    return ControlFreakScene;
})();
Ventajou.Demos.ControlFreakScene.mapWidth = 50;
Ventajou.Demos.ControlFreakScene.mapHeight = 50;
Ventajou.Demos.ControlFreakScene.tileSize = 32;

Ventajou.Demos.ControlFreakGame.up = 0;
Ventajou.Demos.ControlFreakGame.down = 1;
Ventajou.Demos.ControlFreakGame.left = 2;
Ventajou.Demos.ControlFreakGame.right = 3;
Ventajou.Demos.ControlFreakScene.mapWidth = 50;
Ventajou.Demos.ControlFreakScene.mapHeight = 50;
Ventajou.Demos.ControlFreakScene.tileSize = 32;
