using Ventajou.Gaming.Config.UI;

namespace Ventajou.Gaming.Config.Settings
{
    /// <summary>
    /// Setting control allowing the user to switch the resolution used for the game canvas.
    /// </summary>
    public class ResolutionSetting : ArraySetting<Resolution>
    {
        public const string settingKey = "Resolution";

        // Default set of resolutions
        private static Resolution[] _values = new Resolution[] { Resolution.auto, Resolution.qvga, Resolution.vga, Resolution.svga };

        /// <summary>
        /// Override this to provide a different set of resolutions.
        /// </summary>
        protected override Resolution[] values
        {
            get { return _values; }
        }

        protected override string valueLabel { get { return "name"; } }
        protected override string key { get { return settingKey; } }

        public override string name { get { return "Resolution"; } }

        public override void load()
        {
            var r = (dynamic)Game.settings.resolution || Resolution.auto;
            value = _values[0];

            foreach (var resolution in _values)
            {
                if (!Resolution.equals(r, resolution)) continue;

                value = resolution;
                break;
            }

            select(value);
        }

        public override void persist()
        {
            Game.settings.resolution = (Resolution)value;
        }
    }
}
