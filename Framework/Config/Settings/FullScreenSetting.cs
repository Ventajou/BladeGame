using Ventajou.Gaming.Config.UI;

namespace Ventajou.Gaming.Config.Settings
{
    /// <summary>
    /// Setting control allowing the user to switch the game into fullscreen mode when available.
    /// </summary>
    public class FullScreenSetting : BoolSetting
    {
        public const string settingKey = "FullScreen";

        public override string name { get { return "Full Screen"; } }
        protected override string key { get { return settingKey; } }

        public override void load()
        {
            // Checks if the browser supports the full screen API
            dynamic d = window.document;
            if (!d.cancelFullScreen && !d.mozCancelFullScreen && !d.webkitCancelFullScreen)
            {
                // If not, hide the setting
                hide();
                return;
            }

            // default value is off
            value = false;

            // but if the browser is in full screen, then switch on
            if (d.mozFullScreen || d.webkitIsFullScreen || d.msFullScreen) value = true;
            select(value);
        }

        public override void persist()
        {
            Game.settings.fullScreen = (bool)value;
        }
    }
}
