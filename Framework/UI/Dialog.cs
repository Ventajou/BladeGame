using System;
using System.Dom;
using System.Html;

namespace Ventajou.Gaming.UI
{
    public class Dialog
    {
        public HTMLElement titleElement;
        public HTMLDivElement contentElement;
        public HTMLElement element;

        private Dialog() { }

        public void close()
        {
            element.parentElement.removeChild(element);
        }

        public static Dialog show(string title, string content, DialogButton[] buttons, bool modal = true)
        {
            var dialog = new Dialog();

            dialog.element = (HTMLElement)window.document.createElement("DIV");
            dialog.element.className = "dialog";
            if (modal) dialog.element.className += " modal";

            var box = (HTMLDivElement)window.document.createElement("DIV");
            dialog.element.appendChild(box);

            if ((dynamic)title)
            {
                dialog.titleElement = (HTMLElement)window.document.createElement("H1");
                dialog.titleElement.innerHTML = title;
                box.appendChild(dialog.titleElement);
            }

            if (content != null
                )
            {
                dialog.contentElement = (HTMLDivElement)window.document.createElement("DIV");
                dialog.contentElement.innerHTML = content;
                dialog.contentElement.className = "content";
                box.appendChild(dialog.contentElement);
            }

            if ((dynamic)buttons && (dynamic)buttons.length)
            {
                foreach (var button in buttons) renderButton(box, button);
            }

            dialog.element.addEventListener("mousedown", (e) =>
            {
                e.stopPropagation();
                e.preventDefault();
            }, false);

            var element = window.document.getElementById("gameWrapper");

            //window.document.body
            element.insertBefore(dialog.element, element.firstChild);
            return dialog;
        }

        private static void renderButton(HTMLDivElement box, DialogButton button)
        {
            if (!(dynamic)button.clicked || !(dynamic)button.label) throw new Error("Cannot create a button with no label or event handler");

            var element = (HTMLAnchorElement)window.document.createElement("A");
            element.className = "button";
            if ((dynamic)button.className) element.className += " " + button.className;
            element.innerHTML = button.label;
            box.appendChild(element);

            element.addEventListener("mousedown", (e) =>
                {
                    button.clicked();
                }, false);
        }
    }
}
