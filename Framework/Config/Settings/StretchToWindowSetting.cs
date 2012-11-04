using Ventajou.Gaming.Config.UI;

namespace Ventajou.Gaming.Config.Settings
{
    /// <summary>
    /// Setting control allowing the user to stretch the game canvas to its container element.
    /// </summary>
    public class StretchToWindowSetting : BoolSetting
    {
        public const string settingKey = "StretchToWindow";

        public override string name { get { return "Stretch to Window"; } }
        protected override string key { get { return settingKey; } }

        public override void load()
        {
            value = (dynamic)Game.settings.fitToContainer ?? false;
            select(value);

            // When the resolution is set to auto, the canvas already fits the container so this setting is automatically hidden.
            if (Resolution.equals(Resolution.auto, Game.settings.resolution)) hide();
            else show();
        }

        public override void persist()
        {
            Game.settings.fitToContainer = (bool)value;
        }

        public override void settingChanged(string key, object value)
        {
            if (key != ResolutionSetting.settingKey) return;

            // if the user selects the 'auto' resolution, make sure this setting is hidden.
            if (Resolution.equals(Resolution.auto, (Resolution)value))
            {
                hide();
                select(false);
            }
            else show();
        }
    }
}
