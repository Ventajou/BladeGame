using System.Dom;

namespace Ventajou.Gaming.Config.UI
{
    /// <summary>
    /// Base class that ovvers the user a choice between multiple values.
    /// </summary>
    /// <typeparam name="T">The type of values to choose from.</typeparam>
    public abstract class ArraySetting<T> : SingleChoiceSetting
    {
        /// <summary>
        /// The available values to choose from.
        /// </summary>
        protected abstract T[] values { get; }

        /// <summary>
        /// Name of the field on the value object that will be used as a label.
        /// </summary>
        protected abstract string valueLabel { get; }

        protected override void renderContent(Element parent)
        {
            var vals = values;
            if (!(dynamic)vals || !(dynamic)vals.length) return;

            foreach (var val in vals)
            {
                renderValue(val[valueLabel], val, parent);
            }
        }
    }
}
