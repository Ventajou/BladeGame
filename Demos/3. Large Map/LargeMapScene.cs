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

        public override void refresh()
        {
            var now = Date.now();
            var elapsed = now - lastTimeStamp;
            lastTimeStamp = now;
            x += speedX * elapsed;
            y += speedY * elapsed;

            if (x + game.canvas.width >= mapWidth * tileSize)
            {
                x = mapWidth * tileSize - game.canvas.width;
                speedX *= -1;
            }
            else if (x < 0)
            {
                x = 0;
                speedX *= -1;
            }

            if (y + game.canvas.height >= mapHeight * tileSize)
            {
                y = mapHeight * tileSize - game.canvas.height;
                speedY *= -1;
            }
            else if (y < 0)
            {
                y = 0;
                speedY *= -1;
            }

            var context = (CanvasRenderingContext2D)game.canvas.getContext("2d");
            var tileY = Math.floor(y / tileSize);
            var cY = -(y % tileSize);

            while (cY < (int)game.canvas.height)
            {
                var tileX = Math.floor(x / tileSize);
                var cX = -(x % tileSize);
                while (cX < (int)game.canvas.width)
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
