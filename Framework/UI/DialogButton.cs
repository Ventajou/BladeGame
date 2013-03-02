using System;
using System.Dom;
using System.Html;

namespace Ventajou.Gaming.UI
{
    [ScriptObjectLiteral]
    public class DialogButton
    {
        public string label;
        public string className;
        public Action clicked;
    }
}
