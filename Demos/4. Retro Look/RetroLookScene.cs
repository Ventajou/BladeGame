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

        public override void onPaint(CanvasRenderingContext2D context)
        {
            context.fillStyle = "black";
            context.fillRect(0, 0, canvasWidth, canvasHeight);
            context.drawImage(sprite, ((int)canvasWidth - sprite.naturalWidth) / 2, ((int)canvasHeight - sprite.naturalHeight) / 2);
        }
    }
}
