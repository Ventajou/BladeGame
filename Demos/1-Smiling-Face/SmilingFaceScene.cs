using System;
using System.Html;
using Ventajou.Gaming;

namespace Ventajou.Demos
{
    public class SmilingFaceScene : Scene
    {
        public SmilingFaceScene(Game game)
            : base(game)
        {
            refresh();
        }

        public override void refresh()
        {            
            var context = (CanvasRenderingContext2D)game.canvas.getContext("2d");
            context.fillStyle = "yellow";
            context.beginPath();
            context.arc(game.canvas.width / 2, game.canvas.height / 2, 100, Math.PI * 2, 0, true);
            context.closePath();
            context.fill();
            context.fillStyle = "black";
            context.beginPath();
            context.arc(game.canvas.width / 2 - 40, game.canvas.height / 2 - 30, 10, Math.PI * 2, 0, true);
            context.arc(game.canvas.width / 2 + 40, game.canvas.height / 2 - 30, 10, Math.PI * 2, 0, true);
            context.closePath();
            context.fill();
            context.beginPath();
            context.arc(game.canvas.width / 2, game.canvas.height / 2 + 30, 40, Math.PI, 0, true);
            context.closePath();
            context.fillStyle = "red";
            context.fill();
            context.stroke();
        }

        public override void onStart()
        {
        }
    }
}
