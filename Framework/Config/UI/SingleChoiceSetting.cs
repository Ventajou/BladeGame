using System.Dom;
using System.Html;

namespace Ventajou.Gaming.Config.UI
{
    /// <summary>
    /// Base class for setting controls that give the user a single choice among several.
    /// </summary>
    public abstract class SingleChoiceSetting : Setting
    {
        /// <summary>
        /// The setting's key used in the changed event
        /// </summary>
        protected abstract string key { get; }

        // Each choice is a SPAN element
        internal HTMLElement[] spans = new HTMLElement[0];

        /// <summary>
        /// Renders a single value that can be selected by the user.
        /// </summary>
        /// <param name="label">Text representing the value to the user.</param>
        /// <param name="value">The value that will be applied to the setting if chosen by the user.</param>
        /// <param name="parent">DOM element that should be the parent of the value's DOM fragment.</param>
        protected void renderValue(string label, object value, Element parent)
        {
            // Creates a SPAN element
            var span = (HTMLSpanElement)window.document.createElement("SPAN");
            span.innerHTML = label;

            // As with the menu, handling the mousedown event prevents focus changes caused by the click event on some browsers
            span.addEventListener("mousedown", (e) =>
            {
                e.preventDefault();
                e.stopPropagation();

                // do nothing if this is already the selected value
                if (this.value == value) return;

                // select the new value
                this.value = value;
                select(value);

                // notify the menu and other settings of the selection
                triggerChanged(key, value);
            }, false);

            span["value"] = value;
            spans.push(span);
            parent.appendChild(span);
        }

        /// <summary>
        /// Visually selects the given value by setting the 'selected' CSS class on the correct SPAN element.
        /// </summary>
        /// <param name="value">The value to select.</param>
        protected void select(object value)
        {
            foreach (var span in spans)
            {
                if (span["value"] == value)
                {
                    if (span.className.indexOf("selected") < 0) span.className += " selected";
                }
                else
                    span.className = span.className.replace(" selected", "");
            }
        }
    }
}
