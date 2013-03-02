using System;
using System.Dom;
using System.Html;
using Ventajou.Gaming;
using Ventajou.Gaming.UI.InGame;

namespace Ventajou.Demos.Scenes
{
    public class TitleScene : Scene
    {
        Menu _menu;

        public TitleScene(Game game)
            : base(game)
        {
            _menu = new Menu(game.overlay);
            _menu.items = new MenuItem[]{
                new Title("Menus Demo"),
                new Label("Welcome"),
                new Button("Start"),
                new Button("High Scores")
            };
        }

        public override void onStart()
        {
            _menu.show();
        }
    }
}
