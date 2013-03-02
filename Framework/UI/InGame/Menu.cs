using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Html;
using Ventajou.Gaming.Browser;
using System.Dom;

namespace Ventajou.Gaming.UI.InGame
{
    public class Menu : IDisposable
    {
        private HTMLDivElement _containerElement;
        private HTMLDivElement _menuElement;
        private HTMLElement _parent;
        private static EventHandler _keyPressHandler;

        public MenuItem[] items;

        public Menu(HTMLElement parentElement)
        {
            _parent = parentElement;
        }

        public virtual void render(HTMLElement parent)
        {
            _containerElement = (HTMLDivElement)window.document.createElement("DIV");
            _containerElement.className = "InGameMenu";

            _menuElement = (HTMLDivElement)window.document.createElement("DIV");
            _containerElement.appendChild(_menuElement);

            foreach (var item in items)
            {
                item.render(_menuElement);
            }

            parent.appendChild(_containerElement);

            _keyPressHandler = Events.attach(_containerElement, "keydown", (e) =>
            {
                int code = ((dynamic)e).which;
                bool handled = false;

                if (code == Keyboard.up.code || code == Keyboard.left.code)
                {
                    focusNext(-1);
                    handled = true;
                }
                else if (code == Keyboard.down.code || code == Keyboard.right.code)
                {
                    focusNext(1);
                    handled = true;
                }

                if (handled)
                {
                    e.stopPropagation();
                    e.preventDefault();
                }
            });
        }

        public void show()
        {
            if (!(dynamic)_containerElement) render(_parent);
            _containerElement.style.display = "";

            focusFirst();
        }

        public void hide()
        {
            if (!(dynamic)_containerElement) return;
            _containerElement.style.display = "none";
        }

        public void Dispose()
        {
            hide();
            foreach (var item in items)
            {
                item.Dispose();
            }
        }

        private void focusNext(int direction)
        {
            int selected = -1;

            for (int i = 0; i < items.length; i++)
            {
                if (!items[i].focused()) continue;

                selected = i;
                break;
            }

            if (selected >= 0)
            {
                int i = (items.length + selected + direction) % items.length;
                while (i != selected)
                {
                    if (items[i].canFocus)
                    {
                        items[i].focus();
                        break;
                    }
                    i = (items.length + i + direction) % items.length;
                }
            }
            else focusFirst();
        }

        private void focusFirst()
        {
            foreach (var item in items)
            {
                if (!item.canFocus) continue;
                item.focus();
                break;
            }
        }
    }
}
