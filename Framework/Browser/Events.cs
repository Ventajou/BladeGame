using System;
using System.Dom;
using System.Html;

namespace Ventajou.Gaming.Browser
{
    public class Events
    {
        public static EventHandler attach(HTMLElement element, string name, EventHandler handler)
        {
            element.addEventListener(name, handler, false);
            return handler;
        }
    }
}
