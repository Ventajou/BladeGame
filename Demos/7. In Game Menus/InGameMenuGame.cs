using System;
using System.Dom;
using System.Html;
using Ventajou.Gaming;
using Ventajou.Demos.Scenes;

namespace Ventajou.Demos
{
    public class InGameMenuGame : Game
    {
        protected override string Name
        {
            get { return "In Game Menu"; }
        }

        public InGameMenuGame(HTMLElement element)
            : base(element)
        {
            loadScene(new TitleScene(this));
        }
    }
}
