
if(typeof Ventajou == 'undefined') Ventajou = {};
if(!Ventajou.Demos) Ventajou.Demos = {};

Ventajou.Demos.SmilingFaceGame = (function() {
    Blade.derive(SmilingFaceGame, Ventajou.Gaming.Game);
    var $base = Ventajou.Gaming.Game.prototype;
    function SmilingFaceGame(element) {
        $base.constructor.call(this, element);
        this.loadScene(new Ventajou.Demos.SmilingFaceScene(this));
    }
    var p = SmilingFaceGame.prototype;
    p.get_Name = function() {
        return 'Smiling Face';
    };
    return SmilingFaceGame;
})();

Ventajou.Demos.SmilingFaceScene = (function() {
    Blade.derive(SmilingFaceScene, Ventajou.Gaming.Scene);
    var $base = Ventajou.Gaming.Scene.prototype;
    function SmilingFaceScene(game) {
        $base.constructor.call(this, game);
        this.refresh();
    }
    var p = SmilingFaceScene.prototype;
    p.refresh = function () {
        var context = this.game.canvas.getContext('2d');
        context.fillStyle = 'yellow';
        context.beginPath();
        context.arc(this.game.canvas.width / 2, this.game.canvas.height / 2, 100, Math.PI * 2, 0, true);
        context.closePath();
        context.fill();
        context.fillStyle = 'black';
        context.beginPath();
        context.arc(this.game.canvas.width / 2 - 40, this.game.canvas.height / 2 - 30, 10, Math.PI * 2, 0, true);
        context.arc(this.game.canvas.width / 2 + 40, this.game.canvas.height / 2 - 30, 10, Math.PI * 2, 0, true);
        context.closePath();
        context.fill();
        context.beginPath();
        context.arc(this.game.canvas.width / 2, this.game.canvas.height / 2 + 30, 40, Math.PI, 0, true);
        context.closePath();
        context.fillStyle = 'red';
        context.fill();
        context.stroke();
    };
    p.onStart = function () {
    };
    Blade.impl(SmilingFaceScene, 'IDisposable');
    return SmilingFaceScene;
})();
