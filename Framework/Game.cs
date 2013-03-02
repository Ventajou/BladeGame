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
        private bool _useDoubleBufferForBlocky;
        #endregion

        #region Public fields
        /// <summary>
        /// Root DOM element for the game.
        /// </summary>
        public HTMLDivElement wrapper;

        /// <summary>
        /// Main canvas element for all draw operations.
        /// </summary>
        internal HTMLCanvasElement canvas;

        /// <summary>
        /// Canvas element displayed to the user.
        /// </summary>
        internal HTMLCanvasElement displayCanvas;

        public HTMLDivElement overlay;

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

        protected virtual GameSettings defaultSettings { get { return new GameSettings(); } }

        protected string settingsKey { get { return Name + ".Settings"; } }

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

            displayCanvas = (HTMLCanvasElement)window.document.createElement("CANVAS");
            wrapper.appendChild(displayCanvas);
            canvas = displayCanvas;
            dynamic context = canvas.getContext("2d");
            _useDoubleBufferForBlocky = true; // context.webkitImageSmoothingEnabled != window.undefined;

            overlay = (HTMLDivElement)window.document.createElement("DIV");
            overlay.className = "canvasOverlay";
            wrapper.appendChild(overlay);

            var toolbar = window.document.createElement("DIV");
            toolbar.className = "vtjToolbar";
            element.appendChild(toolbar);

            var title = (HTMLSpanElement)window.document.createElement("SPAN");
            title.innerHTML = Name;
            toolbar.appendChild(title);

            if (window.localStorage != null)
            {
                var s = (GameSettings)window.JSON.parse(window.localStorage.getItem(settingsKey));
                if (s != null) settings = s;
            }

            if (!(dynamic)settings) settings = defaultSettings;

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

        public CanvasRenderingContext2D getContext()
        {
            var context = (CanvasRenderingContext2D)canvas.getContext("2d");
            setImageSmoothing(context, !settings.blockyPixels);
            return context;
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

        internal void sceneUpdated()
        {
            if (canvas != displayCanvas)
            {
                //var context = (CanvasRenderingContext2D)displayCanvas.getContext("2d");
                //setImageSmoothing(context, !settings.blockyPixels);
                //context.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, displayCanvas.width, displayCanvas.height);
                blitBuffer(canvas, displayCanvas);
            }
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
                window.localStorage.setItem(settingsKey, window.JSON.stringify(Game.settings));
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
            if (_useDoubleBufferForBlocky)
            {
                if (canvas == displayCanvas &&
                    settings.blockyPixels &&
                    !Resolution.equals(settings.resolution, Resolution.auto) &&
                    settings.fitToContainer)
                {
                    canvas = (HTMLCanvasElement)window.document.createElement("CANVAS");
                }
                else if (canvas != displayCanvas &&
                    (!settings.blockyPixels ||
                    Resolution.equals(settings.resolution, Resolution.auto) ||
                    !settings.fitToContainer))
                {
                    canvas = displayCanvas;
                }
            }

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
                displayCanvas.style.top = "0";
                displayCanvas.style.left = "0";
                displayCanvas.style.width = "100%";
                displayCanvas.style.height = "100%";

                displayCanvas.height = (ulong)displayCanvas.offsetHeight;
                displayCanvas.width = (ulong)displayCanvas.offsetWidth;
            }
            else
            {
                var ww = wrapper.offsetWidth;
                var wh = wrapper.offsetHeight;

                if (settings.fitToContainer)
                {
                    var aspectRatio = settings.resolution.width / settings.resolution.height;

                    var w = aspectRatio * wh;

                    if (w <= ww)
                    {
                        displayCanvas.style.top = "0";
                        displayCanvas.style.left = ((ww - w) / 2) + "px";
                        displayCanvas.style.width = w + "px";
                        displayCanvas.style.height = wh + "px";
                    }
                    else
                    {
                        var h = ww / aspectRatio;
                        displayCanvas.style.top = ((wh - h) / 2) + "px";
                        displayCanvas.style.left = "0";
                        displayCanvas.style.width = ww + "px";
                        displayCanvas.style.height = h + "px";
                    }
                }
                else
                {
                    displayCanvas.style.width = settings.resolution.width + "px";
                    displayCanvas.style.height = settings.resolution.height + "px";
                    displayCanvas.style.top = ((wh - settings.resolution.height) / 2) + "px";
                    displayCanvas.style.left = ((ww - settings.resolution.width) / 2) + "px";
                }

                canvas.width = (ulong)settings.resolution.width;
                canvas.height = (ulong)settings.resolution.height;
                if (canvas != displayCanvas)
                {
                    displayCanvas.width = (ulong)displayCanvas.offsetWidth;
                    displayCanvas.height = (ulong)displayCanvas.offsetHeight;
                }
            }

            overlay.style.top = displayCanvas.style.top;
            overlay.style.left = displayCanvas.style.left;
            overlay.style.width = displayCanvas.style.width;
            overlay.style.height = displayCanvas.style.height;
            overlay.style.fontSize = (overlay.offsetHeight / 20) + "px";

            displayCanvas.className = settings.blockyPixels ? "blockyPixels" : "";

            if ((dynamic)_currentScene) _currentScene.paint();
        }
        #endregion

        private void setImageSmoothing(dynamic context, bool value)
        {
            if (context.imageSmoothingEnabled != window.undefined) context.imageSmoothingEnabled = value;
            else if (context.mozImageSmoothingEnabled != window.undefined) context.mozImageSmoothingEnabled = value;
            else if (context.webkitImageSmoothingEnabled != window.undefined) context.webkitImageSmoothingEnabled = value;
        }

        private void blitBuffer(HTMLCanvasElement source, HTMLCanvasElement destination)
        {
            var sourceContext = (CanvasRenderingContext2D)source.getContext("2d");
            var sourceData = sourceContext.getImageData(0, 0, source.width, source.height);
            var destinationContext = (CanvasRenderingContext2D)destination.getContext("2d");
            var destinationData = destinationContext.getImageData(0, 0, destination.width, destination.height);

            var data = destinationData.data;

            for (ulong x = 0; x < destination.width; x++)
            {
                for (ulong y = 0; y < destination.height; y++)
                {
                    data[x * 4 + y * destination.width * 4] = 0xff;
                    data[(x * 4 + y * destination.width * 4) + 3] = 0xff;
                }
            }
            destinationContext.putImageData(destinationData, 0, 0);
        }
    }
}
