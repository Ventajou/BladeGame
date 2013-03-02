using System;
using System.Dom;
using System.Html;
using Ventajou.Gaming;
using Ventajou.Gaming.Browser;
using Ventajou.Gaming.Config.UI;

namespace Ventajou.Demos
{
    public class ControlFreakScene : Scene
    {
        const int mapWidth = 50;
        const int mapHeight = 50;
        const int tileSize = 32;
        int[] map;
        HTMLImageElement[] tiles;
        double x;
        double y;
        private int lastTimeStamp;
        private double speedX;
        private double speedY;

        EventHandler keyDownHandler;
        EventHandler keyUpHandler;

        public ControlFreakScene(Game game)
            : base(game)
        {
            tiles = new HTMLImageElement[3] 
            {
                (HTMLImageElement)window.document.getElementById("tile1"),
                (HTMLImageElement)window.document.getElementById("tile2"),
                (HTMLImageElement)window.document.getElementById("tile3")
            };
        }

        public override void onStart()
        {
            map = new int[mapWidth * mapHeight];
            for (int i = 0; i < map.length; i++)
            {
                map[i] = Math.floor(Math.random() * 4) % 3;
            }

            x = 0;
            y = 0;
            lastTimeStamp = Date.now();
            speedX = 0.1;
            speedY = 0.1;

            KeySetting.startListening(game.wrapper);
        }

        public override void Dispose()
        {
            KeySetting.stopListening();
            base.Dispose();
        }

        public override void onPaint(CanvasRenderingContext2D context)
        {
            var now = Date.now();
            var elapsed = now - lastTimeStamp;
            lastTimeStamp = now;

            var tileY = Math.floor(y / tileSize);
            var cY = -(y % tileSize);

            if (KeySetting.keyStatus[ControlFreakGame.up]) y -= speedY * elapsed;
            if (KeySetting.keyStatus[ControlFreakGame.down]) y += speedY * elapsed;
            if (KeySetting.keyStatus[ControlFreakGame.left]) x -= speedX * elapsed;
            if (KeySetting.keyStatus[ControlFreakGame.right]) x += speedX * elapsed;

            if (x + canvasWidth >= mapWidth * tileSize)
                x = mapWidth * tileSize - canvasWidth;
            else if (x < 0)
                x = 0;

            if (y + canvasHeight >= mapHeight * tileSize)
                y = mapHeight * tileSize - canvasHeight;
            else if (y < 0)
                y = 0;

            while (cY < (int)canvasHeight)
            {
                var tileX = Math.floor(x / tileSize);
                var cX = -(x % tileSize);
                while (cX < (int)canvasWidth)
                {
                    context.drawImage(tiles[map[tileX + tileY * mapWidth]], cX, cY);
                    tileX++;
                    cX += tileSize;
                }
                tileY++;
                cY += tileSize;
            }
        }
    }
}
