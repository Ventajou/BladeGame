using System;
using System.Dom;
using System.Html;
using Ventajou.Gaming;
using Ventajou.Gaming.Config;
using Ventajou.Gaming.Config.UI;
using Ventajou.Gaming.Config.Settings;

namespace Ventajou.Demos
{
    public class LargeMapGame : Game
    {
        protected override string Name
        {
            get { return "Large Map"; }
        }

        protected override GameSettings defaultSettings
        {
            get
            {
                return new GameSettings
                {
                    resolution = Resolution.auto,
                    fitToContainer = true,
                    fullScreen = false
                };
            }
        }

        public LargeMapGame(HTMLElement element)
            : base(element)
        {
            loadScene(new LargeMapScene(this));
        }

        public override Menu[] buildMenus()
        {
            return new[] 
				{
					new Menu("Display", "display", 
						new Setting[]
						{
							new FullScreenSetting()
						})
				};
        }
    }
}
