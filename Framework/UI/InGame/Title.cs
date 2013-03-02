using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Html;

namespace Ventajou.Gaming.UI.InGame
{
    public class Title : MenuItem
    {
        private string _text;
        private HTMLElement _element;

        public override bool canFocus
        {
            get { return false; }
        }

        public Title(string text)
        {
            _text = text;
        }

        public override void render(HTMLElement parent)
        {
            _element = (HTMLElement)window.document.createElement("H1");
            _element.innerHTML = _text;
            parent.appendChild(_element);
        }

        public override void Dispose()
        {
            _element = null;
        }
    }
}
