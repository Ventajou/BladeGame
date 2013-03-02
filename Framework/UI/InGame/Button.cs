using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Html;
using Ventajou.Gaming.Browser;
using System.Dom;

namespace Ventajou.Gaming.UI.InGame
{
    public class Button : MenuItem
    {
        private string _text;
        private HTMLDivElement _element;
        private HTMLButtonElement _button;
        private EventHandler _clickHandler;

        public event Action clicked;

        public override bool canFocus
        {
            get { return true; }
        }

        public Button(string text)
        {
            _text = text;
        }

        public override void render(HTMLElement parent)
        {
            _element = (HTMLDivElement)window.document.createElement("DIV");
            _button = (HTMLButtonElement)window.document.createElement("BUTTON");
            _element.appendChild(_button);
            _button.innerHTML = _text;
            parent.appendChild(_element);

            _clickHandler = Events.attach(_button, "click", (e) => clicked());
        }

        public override void focus()
        {
            _button.focus();
        }

        public override bool focused()
        {
            return _button == window.document.activeElement;
        }

        public override void Dispose()
        {
            _element = null;
        }
    }
}
