using System;
using System.Dom;
using System.Html;

namespace Ventajou.Gaming.Config.UI
{
    /// <summary>
    /// Renders a configuration menu that will group game settings.
    /// </summary>
    public class Menu
    {
        #region Private fields
        private string _name;
        private string _className;
        private Setting[] _settings;
        private HTMLAnchorElement _popup;
        #endregion

        /// <summary>
        /// Triggered when the user validates the changes to the menu settings.
        /// </summary>
        public event Action<string> changed;

        /// <summary>
        /// Instantiates a new menu.
        /// </summary>
        /// <param name="name">The menu's name, shown as header.</param>
        /// <param name="className">CSS class used to customize the menu.</param>
        /// <param name="settings">Array of settings to be displayed in the menu.</param>
        public Menu(string name, string className, Setting[] settings)
        {
            _name = name;
            _className = className;
            _settings = settings;
        }

        /// <summary>
        /// Renders the menu and its settings.
        /// </summary>
        /// <param name="parent"></param>
        public void Render(Element parent)
        {
            // The menu's button in the toolbar and also the root element.
            var menu = (HTMLAnchorElement)window.document.createElement("A");
            menu.href = "#";
            menu.className = "menu " + _className;

            // The menu popup element
            _popup = (HTMLAnchorElement)window.document.createElement("A");
            _popup.href = "#";
            _popup.className = "popup";

            // Shows the menu name as a title
            var title = (HTMLDivElement)window.document.createElement("H1");
            title.innerHTML = _name;
            _popup.appendChild(title);

            if ((dynamic)_settings && (dynamic)_settings.length)
            {
                // Renders all of the menu settings
                foreach (var setting in _settings)
                {
                    // Attach the changed event to the settings controls
                    setting.changed += settingChanged;
                    setting.render(_popup);
                }

                _popup.appendChild(window.document.createElement("BR"));

                // Button to apply the setting changes.
                var applyButton = (HTMLAnchorElement)window.document.createElement("A");
                applyButton.innerHTML = "Apply";
                applyButton.className = "button ok";
                _popup.appendChild(applyButton);
                // Handling the mousedown event to ensure the click is captured on all browsers.
                applyButton.addEventListener("mousedown", (e) =>
                    {
                        // Deselect menu to hide it
                        menu.className = menu.className.replace(" selected", "");
                        // Save the changes.
                        persistSettings();
                    }, false);

                // Button to exit the menu and discard changes
                var cancelButton = (HTMLAnchorElement)window.document.createElement("A");
                cancelButton.innerHTML = "Cancel";
                cancelButton.className = "button cancel";
                _popup.appendChild(cancelButton);
                // Handling the mousedown event to ensure the click is captured on all browsers.
                cancelButton.addEventListener("mousedown", (e) =>
                    {
                        menu.className = menu.className.replace(" selected", "");
                    }, false);
            }
            else
            {
                // Just in case a developer creates a menu with no settings
                _popup.appendChild(window.document.createTextNode("No settings available."));
            }

            // Prevents the # from being appended to the URL
            menu.addEventListener("click", (e) => { e.preventDefault(); }, false);

            // Certain browsers will trigger the blur event unless we capture and dispose of the mousedown event
            menu.addEventListener("mousedown", (e) =>
                {
                    // Make sure nothing catches the event as this could close the menu.
                    e.preventDefault();

                    // If the mouse event target occured inside the menu, then 
                    if (contains(menu, (Element)e.target)) return;

                    // Check if the menu is open or closed
                    if (menu.className.indexOf("selected") < 0)
                    {
                        // If closed, set the setting controls from the game settings object
                        loadSettings();

                        // Showing the menu by setting the 'selected' CSS class
                        menu.className += " selected";
                    }
                    else
                    {
                        // Hiding the menu by removing the 'selected' CSS class
                        menu.className = menu.className.replace(" selected", "");
                    }

                    // Set the focus because when the popup is blurred, ir needs to close.
                    _popup.focus();
                }, false);

            // Catching the popup's blur event, this lets us close the popup no matter what gets clicked
            _popup.addEventListener("blur", (e) =>
                {
                    menu.className = menu.className.replace(" selected", "");
                    e.preventDefault();
                }, false);

            menu.appendChild(_popup);
            parent.appendChild(menu);

            // Forcing the settings to load in order to save the default values, then persist them in local storage
            loadSettings();
            persistSettings();
        }

        // Handles the changed event of the setting controls
        private void settingChanged(string key, object value)
        {
            // Pass down the change to the other controls so they may react to the change
            foreach (var setting in _settings) setting.settingChanged(key, value);
        }

        // Load the settings to the setting controls
        private void loadSettings()
        {
            if ((dynamic)_settings && (dynamic)_settings.length)
            {
                foreach (var setting in _settings) setting.load();
            }
        }

        // Save the settings from the controls into local storage
        private void persistSettings()
        {
            // Tell each settings control to save its value into the settings object
            if ((dynamic)_settings && (dynamic)_settings.length)
            {
                foreach (var setting in _settings) setting.persist();
            }

            // Trigger the changed event so the game can account for the settings change.
            changed(_name);
        }

        private bool contains(Element parent, Element child)
        {
            while ((dynamic)child)
            {
                child = child.parentElement;
                if (child == parent) return true;
            }

            return false;
        }
    }
}
