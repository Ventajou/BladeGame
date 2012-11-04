using System.Dom;

namespace Ventajou.Gaming.Config.UI
{
    /// <summary>
    /// A base class to represent a boolean setting to the user.
    /// </summary>
    public abstract class BoolSetting : SingleChoiceSetting
    {
        protected override void renderContent(Element parent)
        {
            renderValue("On", true, parent);
            renderValue("Off", false, parent);
        }
    }
}
