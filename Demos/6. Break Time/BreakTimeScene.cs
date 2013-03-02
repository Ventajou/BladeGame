using System;
using System.Dom;
using System.Html;
using Ventajou.Gaming;

namespace Ventajou.Demos
{
    public class BreakTimeScene : Scene
    {
        const int radius = 20;
        const int width = 320;
        const int height = 240;
        const int borderThickness = 10;

        private double ballX;
        private double ballY;
        private double speedX;
        private double speedY;

        public BreakTimeScene(Game game)
            : base(game)
        {
            canPause = true;
        }

        public override void onStart()
        {
            ballX = width / 2;
            ballY = height / 2;
            speedX = 0.1;
            speedY = 0.1;
        }

        public override void onUpdate(int tick, int deltaTime)
        {
            ballX += speedX * deltaTime;
            ballY += speedY * deltaTime;

            // This collision detection code is not accurrate, it's fine for a simple demo like this but please don't use that in a real game!
            if ((ballX + radius >= width - borderThickness && speedX > 0) ||
                (ballX - radius <= borderThickness && speedX < 0))
                speedX *= -1;

            if ((ballY + radius >= height - borderThickness && speedY > 0) ||
                (ballY - radius <= borderThickness && speedY < 0))
                speedY *= -1;
        }

        public override void onPaint(CanvasRenderingContext2D context)
        {
            context.fillStyle = "yellow";
            context.fillRect(0, 0, width, height);
            context.fillStyle = "black";
            context.fillRect(borderThickness, borderThickness, width - borderThickness * 2, height - borderThickness * 2);

            context.fillStyle = "blue";
            context.beginPath();
            context.arc(ballX, ballY, radius, 0, Math.PI * 2, true);
            context.closePath();
            context.fill();
        }
    }
}
