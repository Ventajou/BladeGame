using System;
using System.Dom;
using System.Html;
using Ventajou.Gaming;
using Ventajou.Gaming.Config;
using Ventajou.Gaming.Config.UI;
using Ventajou.Gaming.Config.Settings;
using Ventajou.Gaming.Browser;

namespace Ventajou.Demos
{
    public class ControlFreakGame : Game
    {
        public const int up = 0;
        public const int down = 1;
        public const int left = 2;
        public const int right = 3;

        protected override string Name
        {
            get { return "Control Freak"; }
        }

        protected override GameSettings defaultSettings
        {
            get
            {
                return new ControlFreakSettings
                {
                    resolution = Resolution.auto,
                    fitToContainer = true,
                    fullScreen = false,
                    upKey = Keyboard.up.code,
                    downKey = Keyboard.down.code,
                    leftKey = Keyboard.left.code,
                    rightKey = Keyboard.right.code
                };
            }
        }

        public ControlFreakGame(HTMLElement element)
            : base(element)
        {
            loadScene(new ControlFreakScene(this));
        }

        public override Menu[] buildMenus()
        {
            return new[] 
				{
					new Menu("Display", "display", 
						new Setting[]
						{
							new FullScreenSetting()
						}),
					new Menu("Input", "input", 
                        new Setting[]
                        {
                            new KeySetting("Up", "upKey", Keyboard.up, up),
                            new KeySetting("Down", "downKey", Keyboard.down, down),
                            new KeySetting("Left", "leftKey", Keyboard.left, left),
                            new KeySetting("Right", "rightKey", Keyboard.right, right) 
                        })
				};
        }
    }
}
