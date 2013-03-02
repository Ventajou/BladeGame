
if(typeof Ventajou == 'undefined') Ventajou = {};
if(!Ventajou.Demos) Ventajou.Demos = {};

Ventajou.Demos.BreakTimeGame = (function() {
    Blade.derive(BreakTimeGame, Ventajou.Gaming.Game);
    var $base = Ventajou.Gaming.Game.prototype;
    function BreakTimeGame(element) {
        $base.constructor.call(this, element);
        this.loadScene(new Ventajou.Demos.BreakTimeScene(this));
    }
    var p = BreakTimeGame.prototype;
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
    return BreakTimeGame;
})();

Ventajou.Demos.BreakTimeScene = (function() {
    Blade.derive(BreakTimeScene, Ventajou.Gaming.Scene);
    var $base = Ventajou.Gaming.Scene.prototype;
    function BreakTimeScene(game) {
        $base.constructor.call(this, game);
        this.canPause = true;
    }
    var p = BreakTimeScene.prototype;
    p.ballX = null;
    p.ballY = null;
    p.speedX = null;
    p.speedY = null;
    p.onStart = function () {
        this.ballX = Ventajou.Demos.BreakTimeScene.width / 2;
        this.ballY = Ventajou.Demos.BreakTimeScene.height / 2;
        this.speedX = 0.1;
        this.speedY = 0.1;
    };
    p.onUpdate = function (tick, deltaTime) {
        this.ballX += this.speedX * deltaTime;
        this.ballY += this.speedY * deltaTime;
        if ((this.ballX + Ventajou.Demos.BreakTimeScene.radius >= Ventajou.Demos.BreakTimeScene.width - Ventajou.Demos.BreakTimeScene.borderThickness && this.speedX > 0) || (this.ballX - Ventajou.Demos.BreakTimeScene.radius <= Ventajou.Demos.BreakTimeScene.borderThickness && this.speedX < 0)) {
            this.speedX *= -1;
        }
        if ((this.ballY + Ventajou.Demos.BreakTimeScene.radius >= Ventajou.Demos.BreakTimeScene.height - Ventajou.Demos.BreakTimeScene.borderThickness && this.speedY > 0) || (this.ballY - Ventajou.Demos.BreakTimeScene.radius <= Ventajou.Demos.BreakTimeScene.borderThickness && this.speedY < 0)) {
            this.speedY *= -1;
        }
    };
    p.onPaint = function (context) {
        context.fillStyle = 'yellow';
        context.fillRect(0, 0, Ventajou.Demos.BreakTimeScene.width, Ventajou.Demos.BreakTimeScene.height);
        context.fillStyle = 'black';
        context.fillRect(Ventajou.Demos.BreakTimeScene.borderThickness, Ventajou.Demos.BreakTimeScene.borderThickness, Ventajou.Demos.BreakTimeScene.width - Ventajou.Demos.BreakTimeScene.borderThickness * 2, Ventajou.Demos.BreakTimeScene.height - Ventajou.Demos.BreakTimeScene.borderThickness * 2);
        context.fillStyle = 'blue';
        context.beginPath();
        context.arc(this.ballX, this.ballY, Ventajou.Demos.BreakTimeScene.radius, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();
    };
    Blade.impl(BreakTimeScene, 'IDisposable');
    return BreakTimeScene;
})();
Ventajou.Demos.BreakTimeScene.radius = 20;
Ventajou.Demos.BreakTimeScene.width = 320;
Ventajou.Demos.BreakTimeScene.height = 240;
Ventajou.Demos.BreakTimeScene.borderThickness = 10;

Ventajou.Demos.BreakTimeScene.radius = 20;
Ventajou.Demos.BreakTimeScene.width = 320;
Ventajou.Demos.BreakTimeScene.height = 240;
Ventajou.Demos.BreakTimeScene.borderThickness = 10;
