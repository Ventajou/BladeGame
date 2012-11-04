
namespace Ventajou.Gaming.Config
{
    /// <summary>
    /// Defines a display resolution supported by the game's canvas
    /// </summary>
    public class Resolution
    {
        #region Presets
        /// <summary>
        /// Automatically resizes to the container's dimensions.
        /// </summary>
        public static Resolution auto = new Resolution(0, 0, "Auto");

        /// <summary>
        /// QVGA resolution, 320x240 pixels.
        /// </summary>
        public static Resolution qvga = new Resolution(320, 240, "320 x 240");

        /// <summary>
        /// VGA resolution, 640x480 pixels.
        /// </summary>
        public static Resolution vga = new Resolution(640, 480, "640 x 480");

        /// <summary>
        /// SVGA resolution, 800x600 pixels.
        /// </summary>
        public static Resolution svga = new Resolution(800, 600, "800 x 600");

        /// <summary>
        /// XVGA resolution, 1024x768 pixels.
        /// </summary>
        public static Resolution xvga = new Resolution(1024, 768, "1024 x 768");
        #endregion

        /// <summary>
        /// Width, in pixels.
        /// </summary>
        public double width;

        /// <summary>
        /// Height, in pixels.
        /// </summary>
        public double height;

        /// <summary>
        /// Resolution name,.
        /// </summary>
        public string name;

        public Resolution(double width, double height, string name)
        {
            this.width = width;
            this.height = height;
            this.name = name;
        }

        /// <summary>
        /// Compares two resolution objects.
        /// </summary>
        /// <param name="a">First resolution to compare.</param>
        /// <param name="b">Second resolution to compare.</param>
        /// <returns><c>true</c> if the two objects represent the same resolution, <c>false</c> otherwise.</returns>
        public static bool equals(Resolution a, Resolution b)
        {
            if (!(dynamic)a || !(dynamic)b) return false;
            return (a.width == b.width && a.height == b.height);
        }
    }
}
