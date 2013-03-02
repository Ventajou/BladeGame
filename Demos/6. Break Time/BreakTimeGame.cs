using System;
using System.Dom;
using System.Html;
using Ventajou.Gaming;
using Ventajou.Gaming.Config.UI;
using Ventajou.Gaming.Config.Settings;
using Ventajou.Gaming.Config;

namespace Ventajou.Demos
{
    public class BreakTimeGame : Game
    {
        protected override string Name
        {
            get { return "Bouncing Ball"; }
        }

        protected override GameSettings defaultSettings
        {
            get
            {
                return new GameSettings
                {
                    resolution = Resolution.qvga,
                    fitToContainer = true,
                    fullScreen = false
                };
            }
        }

        public BreakTimeGame(HTMLElement element)
            : base(element)
        {
            loadScene(new BreakTimeScene(this));
        }

        public override Menu[] buildMenus()
        {
            return new[] 
				{
					new Menu("Display", "display", 
						new Setting[]
						{
							new FullScreenSetting(),
							new StretchToWindowSetting()
						})
				};
        }
    }
}
