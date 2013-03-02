using System;

namespace Ventajou.Gaming.Config
{
    /// <summary>
    /// Represents game settings.
    /// </summary>
    [ScriptObjectLiteral]
    public class GameSettings
    {
        #region Audio
        #endregion

        #region Graphics
        /// <summary>
        /// The resolution of the game canvas.
        /// </summary>
        public Resolution resolution = Resolution.auto;

        /// <summary>
        /// Defines whether the game should stretch its canvas to fit the containing DOM element.
        /// </summary>
        public bool fitToContainer = true;

        /// <summary>
        /// Defines whether the game should be displayed in full screen.
        /// </summary>
        public bool fullScreen = false;

        /// <summary>
        /// Defines the kind of filtering used by the blitting operations
        /// </summary>
        public bool blockyPixels = false;
        #endregion

        #region Input
        #endregion
    }
}
