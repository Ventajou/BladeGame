using System;
using System.Html;
using Ventajou.Gaming.UI;
using System.Dom;
using Ventajou.Gaming.Browser;

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
        private int _startTimeStamp;
        private int _lastTimeStamp;

        private int _pausedTime;
        private bool _paused = false;
        private Dialog _pauseDialog;
        private EventHandler _pauseHandler;

        protected bool canPause = false;
        protected virtual string pauseMessage
        {
            get { return "The game was automatically paused."; }
        }

        /// <summary>
        /// A reference to the current game.
        /// </summary>
        public Game game;

        public ulong canvasWidth { get { return game.canvas.width; } }
        public ulong canvasHeight { get { return game.canvas.height; } }

        public Scene(Game game)
        {
            this.game = game;
        }

        public void start()
        {
            onStart();
            _pauseHandler = Events.attach((HTMLElement)window.self, "blur", (e) => { pause(pauseMessage); });
            _startTimeStamp = _lastTimeStamp = Date.now();
            update();
        }

        public void update()
        {
            var timeStamp = Date.now();
            if (!_paused)
            {
                window.requestAnimationFrame((Action)(() => { update(); }));
                onUpdate(timeStamp - _startTimeStamp, timeStamp - _lastTimeStamp);
                _lastTimeStamp = timeStamp;
            }
            var context = game.getContext();
            onPaint(context);
            game.sceneUpdated();
        }

        public void paint()
        {
            onPaint(game.getContext());
        }

        protected void pause(string message = null)
        {
            if (_paused || !canPause) return;
            _paused = true;
            _pausedTime = Date.now();
            onPause();
            _pauseDialog = Dialog.show("Paused", message, new[] { 
                new DialogButton { 
                    label ="Resume", 
                    className = "ok",
                    clicked = () => { resume(); }
                }
            }, true);
        }

        protected void resume()
        {
            if (!_paused) return;
            _pauseDialog.close();
            _pauseDialog = null;
            _paused = false;
            var pauseDuration = Date.now() - _pausedTime;
            _startTimeStamp += pauseDuration;
            _lastTimeStamp += pauseDuration;
            onResume();
            update();
        }

        /// <summary>
        /// Called by the game after the scene is loaded.
        /// </summary>
        public virtual void onStart()
        { }

        /// <summary>
        /// Called when the game is paused.
        /// </summary>
        public virtual void onPause()
        { }

        /// <summary>
        /// Called when the game is resumed from pause.
        /// </summary>
        public virtual void onResume()
        { }

        /// <summary>
        /// Called when the scene logic needs to be updated
        /// </summary>
        /// <param name="tick"></param>
        public virtual void onUpdate(int tick, int deltaTime)
        { }

        /// <summary>
        /// Called when the scene needs to be repainted
        /// </summary>
        public virtual void onPaint(CanvasRenderingContext2D context)
        { }

        /// <summary>
        /// Override this method to free any resource used by the scene.
        /// </summary>
        public virtual void Dispose()
        {
            if ((dynamic)_pauseHandler) window.removeEventListener("blur", _pauseHandler, false);
        }
    }
}
