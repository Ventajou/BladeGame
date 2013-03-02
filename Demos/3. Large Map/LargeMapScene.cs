using System;
using System.Dom;
using System.Html;
using Ventajou.Gaming;

namespace Ventajou.Demos
{
    public class LargeMapScene : Scene
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

        public LargeMapScene(Game game)
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
                map[i] = Math.floor(Math.random() * 3);
            }

            x = 0;
            y = 0;
            lastTimeStamp = Date.now();
            speedX = 0.1;
            speedY = 0.1;
        }

        public override void onPaint(CanvasRenderingContext2D context)
        {
            var now = Date.now();
            var elapsed = now - lastTimeStamp;
            lastTimeStamp = now;
            x += speedX * elapsed;
            y += speedY * elapsed;

            if (x + canvasWidth >= mapWidth * tileSize)
            {
                x = mapWidth * tileSize - canvasWidth;
                speedX *= -1;
            }
            else if (x < 0)
            {
                x = 0;
                speedX *= -1;
            }

            if (y + canvasHeight >= mapHeight * tileSize)
            {
                y = mapHeight * tileSize - canvasHeight;
                speedY *= -1;
            }
            else if (y < 0)
            {
                y = 0;
                speedY *= -1;
            }

            var tileY = Math.floor(y / tileSize);
            var cY = -(y % tileSize);

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
