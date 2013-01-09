
if(typeof Ventajou == 'undefined') Ventajou = {};
if(!Ventajou.Demos) Ventajou.Demos = {};

Ventajou.Demos.BouncingBallGame = (function() {
    Blade.derive(BouncingBallGame, Ventajou.Gaming.Game);
    var $base = Ventajou.Gaming.Game.prototype;
    function BouncingBallGame(element) {
        $base.constructor.call(this, element);
        this.loadScene(new Ventajou.Demos.BouncingBallScene(this));
    }
    var p = BouncingBallGame.prototype;
    p.get_Name = function() {
        return 'Bouncing Ball';
    };
    p.get_defaultSettings = function() {
        return {
            resolution: Ventajou.Gaming.Config.Resolution.qvga,
            fitToContainer: true,
            fullScreen: false
        };
    };
    p.buildMenus = function () {
        return [new Ventajou.Gaming.Config.UI.Menu('Display', 'display', [new Ventajou.Gaming.Config.Settings.FullScreenSetting(), new Ventajou.Gaming.Config.Settings.StretchToWindowSetting()])];
    };
    return BouncingBallGame;
})();

Ventajou.Demos.BouncingBallScene = (function() {
    Blade.derive(BouncingBallScene, Ventajou.Gaming.Scene);
    var $base = Ventajou.Gaming.Scene.prototype;
    function BouncingBallScene(game) {
        $base.constructor.call(this, game);
    }
    var p = BouncingBallScene.prototype;
    p.ballX = null;
    p.ballY = null;
    p.lastTimeStamp = null;
    p.speedX = null;
    p.speedY = null;
    p.onStart = function () {
        this.ballX = Ventajou.Demos.BouncingBallScene.width / 2;
        this.ballY = Ventajou.Demos.BouncingBallScene.height / 2;
        this.lastTimeStamp = Date.now();
        this.speedX = 0.1;
        this.speedY = 0.1;
    };
    p.refresh = function () {
        var now = Date.now();
        var elapsed = now - this.lastTimeStamp;
        this.lastTimeStamp = now;
        this.ballX += this.speedX * elapsed;
        this.ballY += this.speedY * elapsed;
        if ((this.ballX + Ventajou.Demos.BouncingBallScene.radius >= Ventajou.Demos.BouncingBallScene.width - Ventajou.Demos.BouncingBallScene.borderThickness && this.speedX > 0) || (this.ballX - Ventajou.Demos.BouncingBallScene.radius <= Ventajou.Demos.BouncingBallScene.borderThickness && this.speedX < 0)) {
            this.speedX *= -1;
        }
        if ((this.ballY + Ventajou.Demos.BouncingBallScene.radius >= Ventajou.Demos.BouncingBallScene.height - Ventajou.Demos.BouncingBallScene.borderThickness && this.speedY > 0) || (this.ballY - Ventajou.Demos.BouncingBallScene.radius <= Ventajou.Demos.BouncingBallScene.borderThickness && this.speedY < 0)) {
            this.speedY *= -1;
        }
        var context = this.game.canvas.getContext('2d');
        context.fillStyle = 'yellow';
        context.fillRect(0, 0, Ventajou.Demos.BouncingBallScene.width, Ventajou.Demos.BouncingBallScene.height);
        context.fillStyle = 'black';
        context.fillRect(Ventajou.Demos.BouncingBallScene.borderThickness, Ventajou.Demos.BouncingBallScene.borderThickness, Ventajou.Demos.BouncingBallScene.width - Ventajou.Demos.BouncingBallScene.borderThickness * 2, Ventajou.Demos.BouncingBallScene.height - Ventajou.Demos.BouncingBallScene.borderThickness * 2);
        context.fillStyle = 'blue';
        context.beginPath();
        context.arc(this.ballX, this.ballY, Ventajou.Demos.BouncingBallScene.radius, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();
    };
    Blade.impl(BouncingBallScene, 'IDisposable');
    return BouncingBallScene;
})();
Ventajou.Demos.BouncingBallScene.radius = 20;
Ventajou.Demos.BouncingBallScene.width = 320;
Ventajou.Demos.BouncingBallScene.height = 240;
Ventajou.Demos.BouncingBallScene.borderThickness = 10;

Ventajou.Demos.BouncingBallScene.radius = 20;
Ventajou.Demos.BouncingBallScene.width = 320;
Ventajou.Demos.BouncingBallScene.height = 240;
Ventajou.Demos.BouncingBallScene.borderThickness = 10;
