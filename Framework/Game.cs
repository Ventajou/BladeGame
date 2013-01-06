using System.Html;
using Ventajou.Gaming.Config;
using Ventajou.Gaming.Config.UI;
using Ventajou.Gaming.Config.Settings;
using System;

namespace Ventajou.Gaming
{
    /// <summary>
    /// Base class providing the core features useful to all games.
    /// Subclass this to create your game.
    /// </summary>
    public abstract class Game
    {
        #region Private fields
        private HTMLElement _element;
        private Scene _currentScene;
        #endregion

        #region Public fields
        /// <summary>
        /// Root DOM element for the game.
        /// </summary>
        public HTMLDivElement wrapper;

        /// <summary>
        /// Main canvas element for all draw operations.
        /// </summary>
        public HTMLCanvasElement canvas;

        /// <summary>
        /// The game configuration, kept in local storage.
        /// </summary>
        public static GameSettings settings;

        public Action<Action> requestAnimFrame;
        #endregion

        /// <summary>
        /// The game's name
        /// </summary>
        protected abstract string Name { get; }

        protected string SettingsKey { get { return Name + ".Settings"; } }

        public void requestAnimationFrameFallback(Action a)
        {
            window.setTimeout(a, 1000 / 60);
        }

        public Game(HTMLElement element)
        {
            _element = element;
            window.document.title = Name;

            wrapper = (HTMLDivElement)window.document.createElement("DIV");
            wrapper.className = "vtjGame";
            element.appendChild(wrapper);

            canvas = (HTMLCanvasElement)window.document.createElement("CANVAS");
            wrapper.appendChild(canvas);

            var toolbar = window.document.createElement("DIV");
            toolbar.className = "vtjToolbar";
            element.appendChild(toolbar);

            var title = (HTMLSpanElement)window.document.createElement("SPAN");
            title.innerHTML = Name;
            toolbar.appendChild(title);

            if (window.localStorage != null)
            {
                var s = (GameSettings)window.JSON.parse(window.localStorage.getItem(SettingsKey));
                if (s != null) settings = s;
            }

            if (!(dynamic)settings) settings = new GameSettings();

            window.addEventListener("resize", (e) => { refresh(); }, false);

            var m = buildMenus();
            if ((dynamic)m && (dynamic)m.length)
            {
                foreach (var menu in m)
                {
                    menu.Render(toolbar);
                    menu.changed += menuChanged;
                }
            }

            refresh();
        }
        
        /// <summary>
        /// Loads a game scene, unloading the current scene if needed.
        /// </summary>
        /// <param name="scene"></param>
        public void loadScene(Scene scene)
        {
            if (_currentScene != null)
            {
                _currentScene.Dispose();
            }

            _currentScene = scene;
            scene.start();
        }

        #region Game settings management
        /// <summary>
        /// Builds the settings menus.
        /// </summary>
        /// <remarks>
        /// The base implementation will build a set of default menus.
        /// Override this method to offer custom settings.
        /// </remarks>
        /// <returns></returns>
        public virtual Menu[] buildMenus()
        {
            return new[] 
				{
					new Menu("Display", "display", 
						new Setting[]
						{
							new FullScreenSetting(),
							new ResolutionSetting(),
							new StretchToWindowSetting()
						})
				};
        }

        private void menuChanged(string menuName)
        {
            // If local storage is available, persist the settings in there
            if (window.localStorage != null)
            {
                window.localStorage.setItem(SettingsKey, window.JSON.stringify(Game.settings));
            }

            switch (menuName)
            {
                case "Display":
                    refresh();
                    break;
            }
        }

        /// <summary>
        /// Ensures the game canvas size is correct based on the game settings and the size of the container element.
        /// </summary>
        public void refresh()
        {
            dynamic d = window.document;
            bool isFullScreen = d.mozFullScreen || d.webkitIsFullScreen;

            if (settings.fullScreen && !isFullScreen)
            {
                dynamic element = _element;
                dynamic requestMethod = element.requestFullScreen || element.mozRequestFullScreen || element.webkitRequestFullScreen;
                if (requestMethod) requestMethod.call(element);
            }
            else if (!settings.fullScreen && isFullScreen)
            {
                dynamic cancelMethod = d.cancelFullScreen || d.mozCancelFullScreen || d.webkitCancelFullScreen;
                if (cancelMethod) cancelMethod.call(d);
            }

            if (Resolution.equals(settings.resolution, Resolution.auto))
            {
                canvas.style.top = "0";
                canvas.style.left = "0";
                canvas.style.width = "100%";
                canvas.style.height = "100%";

                canvas.height = (ulong)canvas.offsetHeight;
                canvas.width = (ulong)canvas.offsetWidth;
            }
            else
            {
                canvas.width = (ulong)settings.resolution.width;
                canvas.height = (ulong)settings.resolution.height;

                var ww = wrapper.offsetWidth;
                var wh = wrapper.offsetHeight;

                if (settings.fitToContainer)
                {
                    var aspectRatio = settings.resolution.width / settings.resolution.height;

                    var w = aspectRatio * wh;

                    if (w <= ww)
                    {
                        canvas.style.top = "0";
                        canvas.style.left = ((ww - w) / 2) + "px";
                        canvas.style.width = w + "px";
                        canvas.style.height = wh + "px";
                    }
                    else
                    {
                        var h = ww / aspectRatio;
                        canvas.style.top = ((wh - h) / 2) + "px";
                        canvas.style.left = "0";
                        canvas.style.width = ww + "px";
                        canvas.style.height = h + "px";
                    }
                }
                else
                {
                    canvas.style.width = settings.resolution.width + "px";
                    canvas.style.height = settings.resolution.height + "px";
                    canvas.style.top = ((wh - settings.resolution.height) / 2) + "px";
                    canvas.style.left = ((ww - settings.resolution.width) / 2) + "px";
                }
            }

            if ((dynamic)_currentScene) _currentScene.refresh();
        }
        #endregion
    }
}
