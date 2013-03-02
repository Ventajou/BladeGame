using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Html;

namespace Ventajou.Gaming.UI.InGame
{
    public class Label : MenuItem
    {
        private string _text;
        private HTMLDivElement _element;

        public override bool canFocus
        {
            get { return false; }
        }

        public Label(string text)
        {
            _text = text;
        }

        public override void render(HTMLElement parent)
        {
            _element = (HTMLDivElement)window.document.createElement("DIV");
            var span = (HTMLSpanElement)window.document.createElement("SPAN");
            span.innerHTML = _text;
            _element.appendChild(span);
            parent.appendChild(_element);
        }

        public override void Dispose()
        {
            _element = null;
        }
    }
}
