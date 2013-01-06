using System;

namespace Ventajou.Gaming
{
    /// <summary>
    /// Base class for a game scene.
    /// A scene will typically represent a specific environment in the game: a level, the title screen, etc...
    /// </summary>
    /// <remarks>
    /// There can only be one scene loaded at the same time.
    /// </remarks>
    public abstract class Scene : IDisposable
    {
        /// <summary>
        /// A reference to the current game.
        /// </summary>
        public Game game;

        public Scene(Game game)
        {
            this.game = game;
        }

        public void start()
        {
            onStart();
            window.requestAnimationFrame((Action)(() => { update(); }));
        }

        public void update()
        {
            window.requestAnimationFrame((Action)(() => { update(); }));
            refresh();
        }

        /// <summary>
        /// Called by the game after the scene is loaded.
        /// </summary>
        public abstract void onStart();    

        /// <summary>
        /// Called by the game when the canvas may need to be repainted.
        /// </summary>
        public abstract void refresh();

        /// <summary>
        /// Override this method to free any resource used by the scene.
        /// </summary>
        public virtual void Dispose()
        {
        }
    }
}
