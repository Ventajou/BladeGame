using System;
using System.Dom;
using System.Html;

namespace Ventajou.Gaming.Config.UI
{
    /// <summary>
    /// Base class representing a setting control
    /// </summary>
    public abstract class Setting
    {
        private HTMLElement _container;
        
        /// <summary>
        /// The current value of the setting.
        /// </summary>
        protected object value;

        /// <summary>
        /// Triggered when the setting value is changed.
        /// </summary>
        public event Action<string, object> changed;

        /// <summary>
        /// The setting display name.
        /// </summary>
        public abstract string name { get; }

        /// <summary>
        /// Load the game setting into the control's value.
        /// </summary>
        public abstract void load();

        /// <summary>
        /// Saves the control's value in the game settings
        /// </summary>
        public abstract void persist();
        
        /// <summary>
        /// Triggered when another menu setting has changed.
        /// </summary>
        /// <param name="key">Identifies which setting changed.</param>
        /// <param name="value">The setting's new value</param>
        public virtual void settingChanged(string key, object value)
        { }

        /// <summary>
        /// Override this method to render the setting content.
        /// </summary>
        /// <param name="parent"></param>
        protected virtual void renderContent(Element parent)
        { }

        /// <summary>
        /// Triggers the changed event.
        /// </summary>
        /// <param name="key">Identifies this setting.</param>
        /// <param name="value">The setting's new value.</param>
        protected void triggerChanged(string key, object value)
        {
            changed(key, value);
        }

        /// <summary>
        /// Renders the setting control's markup
        /// </summary>
        /// <param name="parent">The parent DOM element</param>
        public void render(Element parent)
        {
            _container = (HTMLElement)window.document.createElement("DIV");
            var h2 = (HTMLElement)window.document.createElement("H2");
            h2.innerHTML = name;
            _container.appendChild(h2);
            renderContent(_container);
            parent.appendChild(_container);
        }

        /// <summary>
        /// Shows the setting
        /// </summary>
        public void show()
        {
            _container.style.display = "";
        }

        /// <summary>
        /// Hides the setting
        /// </summary>
        public void hide()
        {
            _container.style.display = "none";
        }
    }
}
