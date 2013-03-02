using System;
using System.Dom;
using System.Html;
using Ventajou.Gaming.Browser;
using Ventajou.Gaming.UI;

namespace Ventajou.Gaming.Config.UI
{
    public class KeySetting : Setting
    {
        private string _name;
        private string _key;
        private int _defaultValue;
        private int _index;
        private HTMLSpanElement _span;
        private static KeySetting[] _allKeySettings = new KeySetting[0];

        public static bool[] keyStatus = new bool[0];

        private static EventHandler keyDownHandler;
        private static EventHandler keyUpHandler;
        private static HTMLElement keyboardTarget;

        public KeySetting(string name, string key, Key defaultValue, int index)
        {
            _name = name;
            _key = key;
            _defaultValue = defaultValue.code;
            _index = index;
            if (!Game.settings[_key]) Game.settings[_key] = _defaultValue;

            _allKeySettings.push(this);
        }

        public override string name { get { return _name; } }

        public override void load()
        {
            value = Game.settings[_key] ?? _defaultValue;
            var key = Keyboard.getKey((int)value) ?? Keyboard.getKey(_defaultValue);
            _span.innerHTML = key.name;
        }

        public override void persist()
        {
            Game.settings[_key] = value;
        }

        protected override void renderContent(Element parent)
        {
            _span = (HTMLSpanElement)window.document.createElement("SPAN");
            parent.appendChild(_span);
            _span.addEventListener("mousedown", (e) =>
            {
                e.preventDefault();
                e.stopPropagation();
                GetKey();
            }, true);
            parent.appendChild(_span);
        }

        public void GetKey()
        {
            Dialog dialog = null;
            EventHandler keydownHandler = null;

            // Show a little dialog box to ask the user to press a key
            dialog = Dialog.show(null,
                "Press the key you'd like to use for <em>" + name + "</em>.",
                new[] { new DialogButton { 
                    label = "Cancel", 
                    className = "cancel",
                    clicked = () => {
                        window.removeEventListener("keydown", keydownHandler, false);
                        dialog.close(); 
                    } } 
                });

            // attaching a keydown event handler to the window to ensure key events are caught
            keydownHandler = Events.attach((HTMLElement)window.self, "keydown", (e) =>
                {
                    // Retrieve the key that was pressed
                    Key key = Keyboard.getKey(((dynamic)e).which);

                    // Loop through all of the available key settings to make sure the key is not already in use
                    foreach (var keySetting in _allKeySettings)
                    {
                        if (keySetting == this || (int)keySetting.value != key.code) continue;
                        dialog.contentElement.innerHTML = "<em>" + key.name + "</em> is already used for <em>" + keySetting.name + "</em>, please use a different key for <em>" + name + "</em>.";
                        return;
                    }

                    // detach the event handler, close the dialog and update the menu
                    window.removeEventListener("keydown", keydownHandler, false);
                    dialog.close();
                    _span.innerHTML = key.name;
                    value = key.code;
                });

            // Discards any mouse click to keep the blur event from being triggered on the parent menu, which would close it
            dialog.element.addEventListener("mousedown", (e) =>
                {
                    e.stopPropagation();
                    e.preventDefault();
                }, false);
        }

        /// <summary>
        /// Starts listening to keyboard events and updates the <c>keyStatus</c> array accordingly.
        /// </summary>
        /// <param name="target">The target element which will receive the keyboard events.</param>
        public static void startListening(HTMLElement target)
        {
            keyboardTarget = target;

            foreach (var keySetting in _allKeySettings)
            {
                keyStatus[keySetting._index] = false;
            }
            
            keyDownHandler = Events.attach((HTMLElement)window.self, "keydown", (e) => handleKey(e, true));
            keyUpHandler = Events.attach((HTMLElement)window.self, "keyup", (e) => handleKey(e, false));
        }

        private static void handleKey(Event e, bool pressed)
        {
            int code = ((dynamic)e).which;
            bool handled = false;

            foreach (var keySetting in _allKeySettings)
            {
                if (code == (int)keySetting.value)
                {
                    keyStatus[keySetting._index] = pressed;
                    handled = true;
                }
            }

            if (handled)
            {
                e.stopPropagation();
                e.preventDefault();
            }
        }

        /// <summary>
        /// Stops listening to keyboard events.
        /// </summary>
        public static void stopListening()
        {
            keyboardTarget.removeEventListener("keydown", keyDownHandler, false);
            keyboardTarget.removeEventListener("keyup", keyUpHandler, false);
        }
    }
}
