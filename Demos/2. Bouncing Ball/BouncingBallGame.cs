using System;
using System.Dom;
using System.Html;
using Ventajou.Gaming;
using Ventajou.Gaming.Config.UI;
using Ventajou.Gaming.Config.Settings;
using Ventajou.Gaming.Config;

namespace Ventajou.Demos
{
    public class BouncingBallGame : Game
    {
        protected override string Name
        {
            get { return "Bouncing Ball"; }
        }

        public BouncingBallGame(HTMLElement element)
            : base(element)
        {
            loadScene(new BouncingBallScene(this));
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
