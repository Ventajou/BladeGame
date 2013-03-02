
if(typeof Ventajou == 'undefined') Ventajou = {};
if(!Ventajou.Demos) Ventajou.Demos = {};

Ventajou.Demos.LargeMapGame = (function() {
    Blade.derive(LargeMapGame, Ventajou.Gaming.Game);
    var $base = Ventajou.Gaming.Game.prototype;
    function LargeMapGame(element) {
        $base.constructor.call(this, element);
        this.loadScene(new Ventajou.Demos.LargeMapScene(this));
    }
    var p = LargeMapGame.prototype;
    p.get_Name = function() {
        return 'Large Map';
    };
    p.get_defaultSettings = function() {
        return {
            resolution: Ventajou.Gaming.Config.Resolution.auto,
            fitToContainer: true,
            fullScreen: false
        };
    };
    p.buildMenus = function () {
        return [new Ventajou.Gaming.Config.UI.Menu('Display', 'display', [new Ventajou.Gaming.Config.Settings.FullScreenSetting()])];
    };
    return LargeMapGame;
})();

Ventajou.Demos.LargeMapScene = (function() {
    Blade.derive(LargeMapScene, Ventajou.Gaming.Scene);
    var $base = Ventajou.Gaming.Scene.prototype;
    function LargeMapScene(game) {
        $base.constructor.call(this, game);
        this.tiles = [document.getElementById('tile1'), document.getElementById('tile2'), document.getElementById('tile3')];
    }
    var p = LargeMapScene.prototype;
    p.map = null;
    p.tiles = null;
    p.x = null;
    p.y = null;
    p.lastTimeStamp = null;
    p.speedX = null;
    p.speedY = null;
    p.onStart = function () {
        this.map = new Array(Ventajou.Demos.LargeMapScene.mapWidth * Ventajou.Demos.LargeMapScene.mapHeight);
        for(var i = 0; i < this.map.length; i++) {
            this.map[i] = Math.floor(Math.random() * 3);
        }
        this.x = 0;
        this.y = 0;
        this.lastTimeStamp = Date.now();
        this.speedX = 0.1;
        this.speedY = 0.1;
    };
    p.onPaint = function (context) {
        var now = Date.now();
        var elapsed = now - this.lastTimeStamp;
        this.lastTimeStamp = now;
        this.x += this.speedX * elapsed;
        this.y += this.speedY * elapsed;
        if (this.x + this.get_canvasWidth() >= Ventajou.Demos.LargeMapScene.mapWidth * Ventajou.Demos.LargeMapScene.tileSize) {
            this.x = Ventajou.Demos.LargeMapScene.mapWidth * Ventajou.Demos.LargeMapScene.tileSize - this.get_canvasWidth();
            this.speedX *= -1;
        } else if (this.x < 0) {
            this.x = 0;
            this.speedX *= -1;
        }
        if (this.y + this.get_canvasHeight() >= Ventajou.Demos.LargeMapScene.mapHeight * Ventajou.Demos.LargeMapScene.tileSize) {
            this.y = Ventajou.Demos.LargeMapScene.mapHeight * Ventajou.Demos.LargeMapScene.tileSize - this.get_canvasHeight();
            this.speedY *= -1;
        } else if (this.y < 0) {
            this.y = 0;
            this.speedY *= -1;
        }
        var tileY = Math.floor(this.y / Ventajou.Demos.LargeMapScene.tileSize);
        var cY = -(this.y % Ventajou.Demos.LargeMapScene.tileSize);
        while (cY < this.get_canvasHeight()) {
            var tileX = Math.floor(this.x / Ventajou.Demos.LargeMapScene.tileSize);
            var cX = -(this.x % Ventajou.Demos.LargeMapScene.tileSize);
            while (cX < this.get_canvasWidth()) {
                context.drawImage(this.tiles[this.map[tileX + tileY * Ventajou.Demos.LargeMapScene.mapWidth]], cX, cY);
                tileX++;
                cX += Ventajou.Demos.LargeMapScene.tileSize;
            }
            tileY++;
            cY += Ventajou.Demos.LargeMapScene.tileSize;
        }
    };
    Blade.impl(LargeMapScene, 'IDisposable');
    return LargeMapScene;
})();
Ventajou.Demos.LargeMapScene.mapWidth = 50;
Ventajou.Demos.LargeMapScene.mapHeight = 50;
Ventajou.Demos.LargeMapScene.tileSize = 32;

Ventajou.Demos.LargeMapScene.mapWidth = 50;
Ventajou.Demos.LargeMapScene.mapHeight = 50;
Ventajou.Demos.LargeMapScene.tileSize = 32;
