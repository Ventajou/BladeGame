using System.Html;
using Ventajou.Gaming;

namespace Ventajou.Demos
{
    public class SmilingFaceGame : Game
    {
        protected override string Name
        {
            get { return "Smiling Face"; }
        }

        public SmilingFaceGame(HTMLElement element)
            : base(element)
        {
            loadScene(new SmilingFaceScene(this));
        }
    }
}
