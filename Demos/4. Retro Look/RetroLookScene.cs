using System;
using System.Dom;
using System.Html;
using Ventajou.Gaming;

namespace Ventajou.Demos
{
    public class RetroLookScene:Scene
    {
        HTMLImageElement sprite;

        public RetroLookScene(Game game)
            : base(game)
        {
            sprite = (HTMLImageElement)window.document.getElementById("sprite");
        }

        public override void onStart()
        {
        }

        public override void refresh()
        {
            var context = (CanvasRenderingContext2D)game.canvas.getContext("2d");
            context.fillStyle = "black";
            context.fillRect(0, 0, 320, 240);
            context.drawImage(sprite, 160, 120);
        }
    }
}
