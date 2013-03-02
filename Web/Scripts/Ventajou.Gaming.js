
if(typeof Ventajou == 'undefined') Ventajou = {};
if(!Ventajou.Gaming) Ventajou.Gaming = {};
if(!Ventajou.Gaming.Browser) Ventajou.Gaming.Browser = {};

Ventajou.Gaming.Browser.Events = (function() {
    function Events() {
    }
    return Events;
})();
Ventajou.Gaming.Browser.Events.attach = function (element, name, handler) {
    element.addEventListener(name, handler, false);
    return handler;
};

Ventajou.Gaming.Browser.Keyboard = (function() {
    function Keyboard() {
        this._keys = [Ventajou.Gaming.Browser.Keyboard.backspace, Ventajou.Gaming.Browser.Keyboard.tab, Ventajou.Gaming.Browser.Keyboard.enter, Ventajou.Gaming.Browser.Keyboard.shift, Ventajou.Gaming.Browser.Keyboard.ctrl, Ventajou.Gaming.Browser.Keyboard.alt, Ventajou.Gaming.Browser.Keyboard.pause, Ventajou.Gaming.Browser.Keyboard.capsLock, Ventajou.Gaming.Browser.Keyboard.esc, Ventajou.Gaming.Browser.Keyboard.pgUp, Ventajou.Gaming.Browser.Keyboard.pgDn, Ventajou.Gaming.Browser.Keyboard.end, Ventajou.Gaming.Browser.Keyboard.home, Ventajou.Gaming.Browser.Keyboard.left, Ventajou.Gaming.Browser.Keyboard.up, Ventajou.Gaming.Browser.Keyboard.right, Ventajou.Gaming.Browser.Keyboard.down, Ventajou.Gaming.Browser.Keyboard.insert, Ventajou.Gaming.Browser.Keyboard.delete, Ventajou.Gaming.Browser.Keyboard._0, Ventajou.Gaming.Browser.Keyboard._1, Ventajou.Gaming.Browser.Keyboard._2, Ventajou.Gaming.Browser.Keyboard._3, Ventajou.Gaming.Browser.Keyboard._4, Ventajou.Gaming.Browser.Keyboard._5, Ventajou.Gaming.Browser.Keyboard._6, Ventajou.Gaming.Browser.Keyboard._7, Ventajou.Gaming.Browser.Keyboard._8, Ventajou.Gaming.Browser.Keyboard._9, Ventajou.Gaming.Browser.Keyboard.a, Ventajou.Gaming.Browser.Keyboard.b, Ventajou.Gaming.Browser.Keyboard.c, Ventajou.Gaming.Browser.Keyboard.d, Ventajou.Gaming.Browser.Keyboard.e, Ventajou.Gaming.Browser.Keyboard.f, Ventajou.Gaming.Browser.Keyboard.g, Ventajou.Gaming.Browser.Keyboard.h, Ventajou.Gaming.Browser.Keyboard.i, Ventajou.Gaming.Browser.Keyboard.j, Ventajou.Gaming.Browser.Keyboard.k, Ventajou.Gaming.Browser.Keyboard.l, Ventajou.Gaming.Browser.Keyboard.m, Ventajou.Gaming.Browser.Keyboard.n, Ventajou.Gaming.Browser.Keyboard.o, Ventajou.Gaming.Browser.Keyboard.p, Ventajou.Gaming.Browser.Keyboard.q, Ventajou.Gaming.Browser.Keyboard.r, Ventajou.Gaming.Browser.Keyboard.s, Ventajou.Gaming.Browser.Keyboard.t, Ventajou.Gaming.Browser.Keyboard.u, Ventajou.Gaming.Browser.Keyboard.v, Ventajou.Gaming.Browser.Keyboard.w, Ventajou.Gaming.Browser.Keyboard.x, Ventajou.Gaming.Browser.Keyboard.y, Ventajou.Gaming.Browser.Keyboard.z, Ventajou.Gaming.Browser.Keyboard.leftWin, Ventajou.Gaming.Browser.Keyboard.rightWin, Ventajou.Gaming.Browser.Keyboard.select, Ventajou.Gaming.Browser.Keyboard.pad0, Ventajou.Gaming.Browser.Keyboard.pad1, Ventajou.Gaming.Browser.Keyboard.pad2, Ventajou.Gaming.Browser.Keyboard.pad3, Ventajou.Gaming.Browser.Keyboard.pad4, Ventajou.Gaming.Browser.Keyboard.pad5, Ventajou.Gaming.Browser.Keyboard.pad6, Ventajou.Gaming.Browser.Keyboard.pad7, Ventajou.Gaming.Browser.Keyboard.pad8, Ventajou.Gaming.Browser.Keyboard.pad9, Ventajou.Gaming.Browser.Keyboard.padAdd, Ventajou.Gaming.Browser.Keyboard.padDivide, Ventajou.Gaming.Browser.Keyboard.padDot, Ventajou.Gaming.Browser.Keyboard.padMultiply, Ventajou.Gaming.Browser.Keyboard.padSubtract, Ventajou.Gaming.Browser.Keyboard.f1, Ventajou.Gaming.Browser.Keyboard.f2, Ventajou.Gaming.Browser.Keyboard.f3, Ventajou.Gaming.Browser.Keyboard.f4, Ventajou.Gaming.Browser.Keyboard.f5, Ventajou.Gaming.Browser.Keyboard.f5, Ventajou.Gaming.Browser.Keyboard.f6, Ventajou.Gaming.Browser.Keyboard.f7, Ventajou.Gaming.Browser.Keyboard.f8, Ventajou.Gaming.Browser.Keyboard.f9, Ventajou.Gaming.Browser.Keyboard.f10, Ventajou.Gaming.Browser.Keyboard.f11, Ventajou.Gaming.Browser.Keyboard.f12, Ventajou.Gaming.Browser.Keyboard.numLock, Ventajou.Gaming.Browser.Keyboard.scrollLock, Ventajou.Gaming.Browser.Keyboard.semiColon, Ventajou.Gaming.Browser.Keyboard.equal, Ventajou.Gaming.Browser.Keyboard.comma, Ventajou.Gaming.Browser.Keyboard.dash, Ventajou.Gaming.Browser.Keyboard.period, Ventajou.Gaming.Browser.Keyboard.graveAccent, Ventajou.Gaming.Browser.Keyboard.openBracket, Ventajou.Gaming.Browser.Keyboard.backSlash, Ventajou.Gaming.Browser.Keyboard.closeBracket, Ventajou.Gaming.Browser.Keyboard.singleQuote];
    }
    return Keyboard;
})();
Ventajou.Gaming.Browser.Keyboard.backspace = {
    code: 8,
    name: 'Backspace'
};
Ventajou.Gaming.Browser.Keyboard.tab = {
    code: 9,
    name: 'Tab'
};
Ventajou.Gaming.Browser.Keyboard.enter = {
    code: 13,
    name: 'Enter'
};
Ventajou.Gaming.Browser.Keyboard.shift = {
    code: 16,
    name: 'Shift'
};
Ventajou.Gaming.Browser.Keyboard.ctrl = {
    code: 17,
    name: 'Ctrl'
};
Ventajou.Gaming.Browser.Keyboard.alt = {
    code: 18,
    name: 'Alt'
};
Ventajou.Gaming.Browser.Keyboard.pause = {
    code: 19,
    name: 'Pause'
};
Ventajou.Gaming.Browser.Keyboard.capsLock = {
    code: 20,
    name: 'Caps Lock'
};
Ventajou.Gaming.Browser.Keyboard.esc = {
    code: 27,
    name: 'Esc'
};
Ventajou.Gaming.Browser.Keyboard.pgUp = {
    code: 33,
    name: 'Pg Up'
};
Ventajou.Gaming.Browser.Keyboard.pgDn = {
    code: 34,
    name: 'Pg Dn'
};
Ventajou.Gaming.Browser.Keyboard.end = {
    code: 35,
    name: 'End'
};
Ventajou.Gaming.Browser.Keyboard.home = {
    code: 36,
    name: 'Home'
};
Ventajou.Gaming.Browser.Keyboard.left = {
    code: 37,
    name: 'Left'
};
Ventajou.Gaming.Browser.Keyboard.up = {
    code: 38,
    name: 'Up'
};
Ventajou.Gaming.Browser.Keyboard.right = {
    code: 39,
    name: 'Right'
};
Ventajou.Gaming.Browser.Keyboard.down = {
    code: 40,
    name: 'Down'
};
Ventajou.Gaming.Browser.Keyboard.insert = {
    code: 45,
    name: 'Insert'
};
Ventajou.Gaming.Browser.Keyboard.delete = {
    code: 46,
    name: 'Delete'
};
Ventajou.Gaming.Browser.Keyboard._0 = {
    code: 48,
    name: '0'
};
Ventajou.Gaming.Browser.Keyboard._1 = {
    code: 49,
    name: '1'
};
Ventajou.Gaming.Browser.Keyboard._2 = {
    code: 50,
    name: '2'
};
Ventajou.Gaming.Browser.Keyboard._3 = {
    code: 51,
    name: '3'
};
Ventajou.Gaming.Browser.Keyboard._4 = {
    code: 52,
    name: '4'
};
Ventajou.Gaming.Browser.Keyboard._5 = {
    code: 53,
    name: '5'
};
Ventajou.Gaming.Browser.Keyboard._6 = {
    code: 54,
    name: '6'
};
Ventajou.Gaming.Browser.Keyboard._7 = {
    code: 55,
    name: '7'
};
Ventajou.Gaming.Browser.Keyboard._8 = {
    code: 56,
    name: '8'
};
Ventajou.Gaming.Browser.Keyboard._9 = {
    code: 57,
    name: '9'
};
Ventajou.Gaming.Browser.Keyboard.a = {
    code: 65,
    name: 'a'
};
Ventajou.Gaming.Browser.Keyboard.b = {
    code: 66,
    name: 'b'
};
Ventajou.Gaming.Browser.Keyboard.c = {
    code: 67,
    name: 'c'
};
Ventajou.Gaming.Browser.Keyboard.d = {
    code: 68,
    name: 'd'
};
Ventajou.Gaming.Browser.Keyboard.e = {
    code: 69,
    name: 'e'
};
Ventajou.Gaming.Browser.Keyboard.f = {
    code: 70,
    name: 'f'
};
Ventajou.Gaming.Browser.Keyboard.g = {
    code: 71,
    name: 'g'
};
Ventajou.Gaming.Browser.Keyboard.h = {
    code: 72,
    name: 'h'
};
Ventajou.Gaming.Browser.Keyboard.i = {
    code: 73,
    name: 'i'
};
Ventajou.Gaming.Browser.Keyboard.j = {
    code: 74,
    name: 'j'
};
Ventajou.Gaming.Browser.Keyboard.k = {
    code: 75,
    name: 'k'
};
Ventajou.Gaming.Browser.Keyboard.l = {
    code: 76,
    name: 'l'
};
Ventajou.Gaming.Browser.Keyboard.m = {
    code: 77,
    name: 'm'
};
Ventajou.Gaming.Browser.Keyboard.n = {
    code: 78,
    name: 'n'
};
Ventajou.Gaming.Browser.Keyboard.o = {
    code: 79,
    name: 'o'
};
Ventajou.Gaming.Browser.Keyboard.p = {
    code: 80,
    name: 'p'
};
Ventajou.Gaming.Browser.Keyboard.q = {
    code: 81,
    name: 'q'
};
Ventajou.Gaming.Browser.Keyboard.r = {
    code: 82,
    name: 'r'
};
Ventajou.Gaming.Browser.Keyboard.s = {
    code: 83,
    name: 's'
};
Ventajou.Gaming.Browser.Keyboard.t = {
    code: 84,
    name: 't'
};
Ventajou.Gaming.Browser.Keyboard.u = {
    code: 85,
    name: 'u'
};
Ventajou.Gaming.Browser.Keyboard.v = {
    code: 86,
    name: 'v'
};
Ventajou.Gaming.Browser.Keyboard.w = {
    code: 87,
    name: 'w'
};
Ventajou.Gaming.Browser.Keyboard.x = {
    code: 88,
    name: 'x'
};
Ventajou.Gaming.Browser.Keyboard.y = {
    code: 89,
    name: 'y'
};
Ventajou.Gaming.Browser.Keyboard.z = {
    code: 90,
    name: 'z'
};
Ventajou.Gaming.Browser.Keyboard.leftWin = {
    code: 91,
    name: 'Left Windows'
};
Ventajou.Gaming.Browser.Keyboard.rightWin = {
    code: 92,
    name: 'Right Windows'
};
Ventajou.Gaming.Browser.Keyboard.select = {
    code: 93,
    name: 'Select'
};
Ventajou.Gaming.Browser.Keyboard.pad0 = {
    code: 96,
    name: 'Numpad 0'
};
Ventajou.Gaming.Browser.Keyboard.pad1 = {
    code: 97,
    name: 'Numpad 1'
};
Ventajou.Gaming.Browser.Keyboard.pad2 = {
    code: 98,
    name: 'Numpad 2'
};
Ventajou.Gaming.Browser.Keyboard.pad3 = {
    code: 99,
    name: 'Numpad 3'
};
Ventajou.Gaming.Browser.Keyboard.pad4 = {
    code: 100,
    name: 'Numpad 4'
};
Ventajou.Gaming.Browser.Keyboard.pad5 = {
    code: 101,
    name: 'Numpad 5'
};
Ventajou.Gaming.Browser.Keyboard.pad6 = {
    code: 102,
    name: 'Numpad 6'
};
Ventajou.Gaming.Browser.Keyboard.pad7 = {
    code: 103,
    name: 'Numpad 7'
};
Ventajou.Gaming.Browser.Keyboard.pad8 = {
    code: 104,
    name: 'Numpad 8'
};
Ventajou.Gaming.Browser.Keyboard.pad9 = {
    code: 105,
    name: 'Numpad 9'
};
Ventajou.Gaming.Browser.Keyboard.padMultiply = {
    code: 106,
    name: 'Numpad *'
};
Ventajou.Gaming.Browser.Keyboard.padAdd = {
    code: 107,
    name: 'Numpad +'
};
Ventajou.Gaming.Browser.Keyboard.padSubtract = {
    code: 109,
    name: 'Numpad -'
};
Ventajou.Gaming.Browser.Keyboard.padDot = {
    code: 110,
    name: 'Numpad .'
};
Ventajou.Gaming.Browser.Keyboard.padDivide = {
    code: 111,
    name: 'Numpad /'
};
Ventajou.Gaming.Browser.Keyboard.f1 = {
    code: 112,
    name: 'F1'
};
Ventajou.Gaming.Browser.Keyboard.f2 = {
    code: 113,
    name: 'F2'
};
Ventajou.Gaming.Browser.Keyboard.f3 = {
    code: 114,
    name: 'F3'
};
Ventajou.Gaming.Browser.Keyboard.f4 = {
    code: 115,
    name: 'F4'
};
Ventajou.Gaming.Browser.Keyboard.f5 = {
    code: 116,
    name: 'F5'
};
Ventajou.Gaming.Browser.Keyboard.f6 = {
    code: 117,
    name: 'F6'
};
Ventajou.Gaming.Browser.Keyboard.f7 = {
    code: 118,
    name: 'F7'
};
Ventajou.Gaming.Browser.Keyboard.f8 = {
    code: 119,
    name: 'F8'
};
Ventajou.Gaming.Browser.Keyboard.f9 = {
    code: 120,
    name: 'F9'
};
Ventajou.Gaming.Browser.Keyboard.f10 = {
    code: 121,
    name: 'F10'
};
Ventajou.Gaming.Browser.Keyboard.f11 = {
    code: 122,
    name: 'F11'
};
Ventajou.Gaming.Browser.Keyboard.f12 = {
    code: 123,
    name: 'F12'
};
Ventajou.Gaming.Browser.Keyboard.numLock = {
    code: 144,
    name: 'Num Lock'
};
Ventajou.Gaming.Browser.Keyboard.scrollLock = {
    code: 145,
    name: 'Scroll Lock'
};
Ventajou.Gaming.Browser.Keyboard.semiColon = {
    code: 186,
    name: ';'
};
Ventajou.Gaming.Browser.Keyboard.equal = {
    code: 187,
    name: '='
};
Ventajou.Gaming.Browser.Keyboard.comma = {
    code: 188,
    name: ','
};
Ventajou.Gaming.Browser.Keyboard.dash = {
    code: 189,
    name: '-'
};
Ventajou.Gaming.Browser.Keyboard.period = {
    code: 190,
    name: '.'
};
Ventajou.Gaming.Browser.Keyboard.slash = {
    code: 191,
    name: '/'
};
Ventajou.Gaming.Browser.Keyboard.graveAccent = {
    code: 192,
    name: '`'
};
Ventajou.Gaming.Browser.Keyboard.openBracket = {
    code: 219,
    name: '['
};
Ventajou.Gaming.Browser.Keyboard.backSlash = {
    code: 220,
    name: '\\'
};
Ventajou.Gaming.Browser.Keyboard.closeBracket = {
    code: 221,
    name: ']'
};
Ventajou.Gaming.Browser.Keyboard.singleQuote = {
    code: 222,
    name: '\u0027'
};
Ventajou.Gaming.Browser.Keyboard._singleton = new Ventajou.Gaming.Browser.Keyboard();
Ventajou.Gaming.Browser.Keyboard.getKey = function (code) {
    for(var i = 0; i < Ventajou.Gaming.Browser.Keyboard._singleton._keys.length; i++) {
        if (Ventajou.Gaming.Browser.Keyboard._singleton._keys[i].code !== code) {
            continue;
        }
        return Ventajou.Gaming.Browser.Keyboard._singleton._keys[i];
    }
    return null;
};
if(!Ventajou.Gaming.Config) Ventajou.Gaming.Config = {};

Ventajou.Gaming.Config.Resolution = (function() {
    function Resolution(width, height, name) {
        this.width = width;
        this.height = height;
        this.name = name;
    }
    var p = Resolution.prototype;
    p.width = null;
    p.height = null;
    p.name = null;
    return Resolution;
})();
Ventajou.Gaming.Config.Resolution.auto = new Ventajou.Gaming.Config.Resolution(0, 0, 'Auto');
Ventajou.Gaming.Config.Resolution.qvga = new Ventajou.Gaming.Config.Resolution(320, 240, '320 x 240');
Ventajou.Gaming.Config.Resolution.vga = new Ventajou.Gaming.Config.Resolution(640, 480, '640 x 480');
Ventajou.Gaming.Config.Resolution.svga = new Ventajou.Gaming.Config.Resolution(800, 600, '800 x 600');
Ventajou.Gaming.Config.Resolution.xvga = new Ventajou.Gaming.Config.Resolution(1024, 768, '1024 x 768');
Ventajou.Gaming.Config.Resolution.equals = function (a, b) {
    if (!a || !b) {
        return false;
    }
    return (a.width === b.width && a.height === b.height);
};
if(!Ventajou.Gaming.Config.UI) Ventajou.Gaming.Config.UI = {};

Ventajou.Gaming.Config.UI.Menu = (function() {
    function Menu(name, className, settings) {
        this._name = name;
        this._className = className;
        this._settings = settings;
    }
    var p = Menu.prototype;
    p._name = null;
    p._className = null;
    p._settings = null;
    p._popup = null;
    p.$changed = new Blade.Event();
    p.changed = function() {
        this.$changed.pub.apply(this.$changed, arguments);
    }
    p.changed$add = function(func, ctx) {
        this.$changed.add(func, ctx);
    };
    p.changed$rem = function(func) {
        this.$changed.rem(func);
    };
    p.Render = function (parent) {
        var menu = document.createElement('A');
        menu.href = '#';
        menu.className = 'menu ' + this._className;
        this._popup = document.createElement('A');
        this._popup.href = '#';
        this._popup.className = 'popup';
        var title = document.createElement('H1');
        title.innerHTML = this._name;
        this._popup.appendChild(title);
        if (this._settings && this._settings.length) {
            var setting = null;
            var $setting_enum = this._settings.GetEnumerator();
            while($setting_enum.MoveNext()) {
                setting = $setting_enum.get_Current();
                setting.changed$add(this.settingChanged, this);
                setting.render(this._popup);
            }
            this._popup.appendChild(document.createElement('BR'));
            var applyButton = document.createElement('A');
            applyButton.innerHTML = 'Apply';
            applyButton.className = 'button ok';
            this._popup.appendChild(applyButton);
            applyButton.addEventListener('mousedown', Blade.del(this, function(e) {
                menu.className = menu.className.replace(' selected', '');
                this.persistSettings();
            }), false);
            var cancelButton = document.createElement('A');
            cancelButton.innerHTML = 'Cancel';
            cancelButton.className = 'button cancel';
            this._popup.appendChild(cancelButton);
            cancelButton.addEventListener('mousedown', Blade.del(this, function(e) {
                menu.className = menu.className.replace(' selected', '');
            }), false);
        } else {
            this._popup.appendChild(document.createTextNode('No settings available.'));
        }
        menu.addEventListener('click', Blade.del(this, function(e) {
            e.preventDefault();
        }), false);
        menu.addEventListener('mousedown', Blade.del(this, function(e) {
            e.preventDefault();
            if (this.contains(menu, e.target)) {
                return;
            }
            if (menu.className.indexOf('selected') < 0) {
                this.loadSettings();
                menu.className += ' selected';
            } else {
                menu.className = menu.className.replace(' selected', '');
            }
            this._popup.focus();
        }), false);
        this._popup.addEventListener('blur', Blade.del(this, function(e) {
            menu.className = menu.className.replace(' selected', '');
            e.preventDefault();
        }), false);
        menu.appendChild(this._popup);
        parent.appendChild(menu);
        this.loadSettings();
        this.persistSettings();
    };
    p.settingChanged = function (key, value) {
        var setting = null;
        var $setting_enum = this._settings.GetEnumerator();
        while($setting_enum.MoveNext()) {
            setting = $setting_enum.get_Current();
            setting.settingChanged(key, value);
        }
    };
    p.loadSettings = function () {
        if (this._settings && this._settings.length) {
            var setting = null;
            var $setting_enum = this._settings.GetEnumerator();
            while($setting_enum.MoveNext()) {
                setting = $setting_enum.get_Current();
                setting.load();
            }
        }
    };
    p.persistSettings = function () {
        if (this._settings && this._settings.length) {
            var setting = null;
            var $setting_enum = this._settings.GetEnumerator();
            while($setting_enum.MoveNext()) {
                setting = $setting_enum.get_Current();
                setting.persist();
            }
        }
        this.changed(this._name);
    };
    p.contains = function (parent, child) {
        while (child) {
            child = child.parentElement;
            if (child === parent) {
                return true;
            }
        }
        return false;
    };
    return Menu;
})();

Ventajou.Gaming.Config.UI.Setting = (function() {
    function Setting() {
    }
    var p = Setting.prototype;
    p._container = null;
    p.value = null;
    p.$changed = new Blade.Event();
    p.changed = function() {
        this.$changed.pub.apply(this.$changed, arguments);
    }
    p.changed$add = function(func, ctx) {
        this.$changed.add(func, ctx);
    };
    p.changed$rem = function(func) {
        this.$changed.rem(func);
    };
    p.$name = null;
    p.get_name = function() {
        return this.$name;
    };
    p.set_name = function(value) {
        this.$name = value;
    };
    p.load = function () {
    };
    p.persist = function () {
    };
    p.settingChanged = function (key, value) {
    };
    p.renderContent = function (parent) {
    };
    p.triggerChanged = function (key, value) {
        this.changed(key, value);
    };
    p.render = function (parent) {
        this._container = document.createElement('DIV');
        var h2 = document.createElement('H2');
        h2.innerHTML = this.get_name();
        this._container.appendChild(h2);
        this.renderContent(this._container);
        parent.appendChild(this._container);
    };
    p.show = function () {
        this._container.style.display = '';
    };
    p.hide = function () {
        this._container.style.display = 'none';
    };
    return Setting;
})();

Ventajou.Gaming.Game = (function() {
    function Game(element) {
        this._element = element;
        document.title = this.get_Name();
        this.wrapper = document.createElement('DIV');
        this.wrapper.className = 'vtjGame';
        element.appendChild(this.wrapper);
        this.displayCanvas = document.createElement('CANVAS');
        this.wrapper.appendChild(this.displayCanvas);
        this.canvas = this.displayCanvas;
        var context = this.canvas.getContext('2d');
        this._useDoubleBufferForBlocky = true;
        this.overlay = document.createElement('DIV');
        this.overlay.className = 'canvasOverlay';
        this.wrapper.appendChild(this.overlay);
        var toolbar = document.createElement('DIV');
        toolbar.className = 'vtjToolbar';
        element.appendChild(toolbar);
        var title = document.createElement('SPAN');
        title.innerHTML = this.get_Name();
        toolbar.appendChild(title);
        if (localStorage !== null) {
            var s = JSON.parse(localStorage.getItem(this.get_settingsKey()));
            if (s !== null) {
                Ventajou.Gaming.Game.settings = s;
            }
        }
        if (!Ventajou.Gaming.Game.settings) {
            Ventajou.Gaming.Game.settings = this.get_defaultSettings();
        }
        addEventListener('resize', Blade.del(this, function(e) {
            this.refresh();
        }), false);
        var m = this.buildMenus();
        if (m && m.length) {
            var menu = null;
            var $menu_enum = m.GetEnumerator();
            while($menu_enum.MoveNext()) {
                menu = $menu_enum.get_Current();
                menu.Render(toolbar);
                menu.changed$add(this.menuChanged, this);
            }
        }
        this.refresh();
    }
    var p = Game.prototype;
    p._element = null;
    p._currentScene = null;
    p._useDoubleBufferForBlocky = null;
    p.wrapper = null;
    p.canvas = null;
    p.displayCanvas = null;
    p.overlay = null;
    p.requestAnimFrame = null;
    p.$Name = null;
    p.get_Name = function() {
        return this.$Name;
    };
    p.set_Name = function(value) {
        this.$Name = value;
    };
    p.get_defaultSettings = function() {
        return {};
    };
    p.get_settingsKey = function() {
        return this.get_Name() + '.Settings';
    };
    p.requestAnimationFrameFallback = function (a) {
        setTimeout(a, 1000 / 60);
    };
    p.getContext = function () {
        var context = this.canvas.getContext('2d');
        this.setImageSmoothing(context, !Ventajou.Gaming.Game.settings.blockyPixels);
        return context;
    };
    p.loadScene = function (scene) {
        if (this._currentScene !== null) {
            this._currentScene.Dispose();
        }
        this._currentScene = scene;
        scene.start();
    };
    p.sceneUpdated = function () {
        if (this.canvas !== this.displayCanvas) {
            this.blitBuffer(this.canvas, this.displayCanvas);
        }
    };
    p.buildMenus = function () {
        return [new Ventajou.Gaming.Config.UI.Menu('Display', 'display', [new Ventajou.Gaming.Config.Settings.FullScreenSetting(), new Ventajou.Gaming.Config.Settings.ResolutionSetting(), new Ventajou.Gaming.Config.Settings.StretchToWindowSetting()])];
    };
    p.menuChanged = function (menuName) {
        if (localStorage !== null) {
            localStorage.setItem(this.get_settingsKey(), JSON.stringify(Ventajou.Gaming.Game.settings));
        }
        switch (menuName) {
            case 'Display':
                this.refresh();
                break;
        }
    };
    p.refresh = function () {
        if (this._useDoubleBufferForBlocky) {
            if (this.canvas === this.displayCanvas && Ventajou.Gaming.Game.settings.blockyPixels && !Ventajou.Gaming.Config.Resolution.equals(Ventajou.Gaming.Game.settings.resolution, Ventajou.Gaming.Config.Resolution.auto) && Ventajou.Gaming.Game.settings.fitToContainer) {
                this.canvas = document.createElement('CANVAS');
            } else if (this.canvas !== this.displayCanvas && (!Ventajou.Gaming.Game.settings.blockyPixels || Ventajou.Gaming.Config.Resolution.equals(Ventajou.Gaming.Game.settings.resolution, Ventajou.Gaming.Config.Resolution.auto) || !Ventajou.Gaming.Game.settings.fitToContainer)) {
                this.canvas = this.displayCanvas;
            }
        }
        var d = document;
        var isFullScreen = d.mozFullScreen || d.webkitIsFullScreen;
        if (Ventajou.Gaming.Game.settings.fullScreen && !isFullScreen) {
            var element = this._element;
            var requestMethod = element.requestFullScreen || element.mozRequestFullScreen || element.webkitRequestFullScreen;
            if (requestMethod) {
                requestMethod.call(element);
            }
        } else if (!Ventajou.Gaming.Game.settings.fullScreen && isFullScreen) {
            var cancelMethod = d.cancelFullScreen || d.mozCancelFullScreen || d.webkitCancelFullScreen;
            if (cancelMethod) {
                cancelMethod.call(d);
            }
        }
        if (Ventajou.Gaming.Config.Resolution.equals(Ventajou.Gaming.Game.settings.resolution, Ventajou.Gaming.Config.Resolution.auto)) {
            this.displayCanvas.style.top = '0';
            this.displayCanvas.style.left = '0';
            this.displayCanvas.style.width = '100%';
            this.displayCanvas.style.height = '100%';
            this.displayCanvas.height = this.displayCanvas.offsetHeight;
            this.displayCanvas.width = this.displayCanvas.offsetWidth;
        } else {
            var ww = this.wrapper.offsetWidth;
            var wh = this.wrapper.offsetHeight;
            if (Ventajou.Gaming.Game.settings.fitToContainer) {
                var aspectRatio = Ventajou.Gaming.Game.settings.resolution.width / Ventajou.Gaming.Game.settings.resolution.height;
                var w = aspectRatio * wh;
                if (w <= ww) {
                    this.displayCanvas.style.top = '0';
                    this.displayCanvas.style.left = ((ww - w) / 2) + 'px';
                    this.displayCanvas.style.width = w + 'px';
                    this.displayCanvas.style.height = wh + 'px';
                } else {
                    var h = ww / aspectRatio;
                    this.displayCanvas.style.top = ((wh - h) / 2) + 'px';
                    this.displayCanvas.style.left = '0';
                    this.displayCanvas.style.width = ww + 'px';
                    this.displayCanvas.style.height = h + 'px';
                }
            } else {
                this.displayCanvas.style.width = Ventajou.Gaming.Game.settings.resolution.width + 'px';
                this.displayCanvas.style.height = Ventajou.Gaming.Game.settings.resolution.height + 'px';
                this.displayCanvas.style.top = ((wh - Ventajou.Gaming.Game.settings.resolution.height) / 2) + 'px';
                this.displayCanvas.style.left = ((ww - Ventajou.Gaming.Game.settings.resolution.width) / 2) + 'px';
            }
            this.canvas.width = Ventajou.Gaming.Game.settings.resolution.width;
            this.canvas.height = Ventajou.Gaming.Game.settings.resolution.height;
            if (this.canvas !== this.displayCanvas) {
                this.displayCanvas.width = this.displayCanvas.offsetWidth;
                this.displayCanvas.height = this.displayCanvas.offsetHeight;
            }
        }
        this.overlay.style.top = this.displayCanvas.style.top;
        this.overlay.style.left = this.displayCanvas.style.left;
        this.overlay.style.width = this.displayCanvas.style.width;
        this.overlay.style.height = this.displayCanvas.style.height;
        this.overlay.style.fontSize = (this.overlay.offsetHeight / 20) + 'px';
        this.displayCanvas.className = Ventajou.Gaming.Game.settings.blockyPixels ? 'blockyPixels' : '';
        if (this._currentScene) {
            this._currentScene.paint();
        }
    };
    p.setImageSmoothing = function (context, value) {
        if (context.imageSmoothingEnabled !== undefined) {
            context.imageSmoothingEnabled = value;
        } else if (context.mozImageSmoothingEnabled !== undefined) {
            context.mozImageSmoothingEnabled = value;
        } else if (context.webkitImageSmoothingEnabled !== undefined) {
            context.webkitImageSmoothingEnabled = value;
        }
    };
    p.blitBuffer = function (source, destination) {
        var sourceContext = source.getContext('2d');
        var sourceData = sourceContext.getImageData(0, 0, source.width, source.height);
        var destinationContext = destination.getContext('2d');
        var destinationData = destinationContext.getImageData(0, 0, destination.width, destination.height);
        var data = destinationData.data;
        for(var x = 0; x < destination.width; x++) {
            for(var y = 0; y < destination.height; y++) {
                data[x * 4 + y * destination.width * 4] = 255;
                data[(x * 4 + y * destination.width * 4) + 3] = 255;
            }
        }
        destinationContext.putImageData(destinationData, 0, 0);
    };
    return Game;
})();
Ventajou.Gaming.Game.settings = null;

Ventajou.Gaming.Scene = (function() {
    function Scene(game) {
        this.game = game;
    }
    var p = Scene.prototype;
    p._startTimeStamp = null;
    p._lastTimeStamp = null;
    p._pausedTime = null;
    p._paused = false;
    p._pauseDialog = null;
    p._pauseHandler = null;
    p.canPause = false;
    p.game = null;
    p.get_pauseMessage = function() {
        return 'The game was automatically paused.';
    };
    p.get_canvasWidth = function() {
        return this.game.canvas.width;
    };
    p.get_canvasHeight = function() {
        return this.game.canvas.height;
    };
    p.start = function () {
        this.onStart();
        this._pauseHandler = Ventajou.Gaming.Browser.Events.attach(self, 'blur', Blade.del(this, function(e) {
            this.pause(this.get_pauseMessage());
        }));
        this._startTimeStamp = this._lastTimeStamp = Date.now();
        this.update();
    };
    p.update = function () {
        var timeStamp = Date.now();
        if (!this._paused) {
            requestAnimationFrame((Blade.del(this, function() {
                this.update();
            })));
            this.onUpdate(timeStamp - this._startTimeStamp, timeStamp - this._lastTimeStamp);
            this._lastTimeStamp = timeStamp;
        }
        var context = this.game.getContext();
        this.onPaint(context);
        this.game.sceneUpdated();
    };
    p.paint = function () {
        this.onPaint(this.game.getContext());
    };
    p.pause = function (message) {
        message = (message !== undefined) ? message : null;
        if (this._paused || !this.canPause) {
            return;
        }
        this._paused = true;
        this._pausedTime = Date.now();
        this.onPause();
        this._pauseDialog = Ventajou.Gaming.UI.Dialog.show('Paused', message, [{
            label: 'Resume',
            className: 'ok',
            clicked: Blade.del(this, function() {
                this.resume();
            })
        }], true);
    };
    p.resume = function () {
        if (!this._paused) {
            return;
        }
        this._pauseDialog.close();
        this._pauseDialog = null;
        this._paused = false;
        var pauseDuration = Date.now() - this._pausedTime;
        this._startTimeStamp += pauseDuration;
        this._lastTimeStamp += pauseDuration;
        this.onResume();
        this.update();
    };
    p.onStart = function () {
    };
    p.onPause = function () {
    };
    p.onResume = function () {
    };
    p.onUpdate = function (tick, deltaTime) {
    };
    p.onPaint = function (context) {
    };
    p.Dispose = function () {
        if (this._pauseHandler) {
            removeEventListener('blur', this._pauseHandler, false);
        }
    };
    Blade.impl(Scene, 'IDisposable');
    return Scene;
})();
if(!Ventajou.Gaming.UI) Ventajou.Gaming.UI = {};

Ventajou.Gaming.UI.Dialog = (function() {
    function Dialog() {
    }
    var p = Dialog.prototype;
    p.titleElement = null;
    p.contentElement = null;
    p.element = null;
    p.close = function () {
        this.element.parentElement.removeChild(this.element);
    };
    return Dialog;
})();
Ventajou.Gaming.UI.Dialog.show = function (title, content, buttons, modal) {
    modal = (modal !== undefined) ? modal : true;
    var dialog = new Ventajou.Gaming.UI.Dialog();
    dialog.element = document.createElement('DIV');
    dialog.element.className = 'dialog';
    if (modal) {
        dialog.element.className += ' modal';
    }
    var box = document.createElement('DIV');
    dialog.element.appendChild(box);
    if (title) {
        dialog.titleElement = document.createElement('H1');
        dialog.titleElement.innerHTML = title;
        box.appendChild(dialog.titleElement);
    }
    if (content !== null) {
        dialog.contentElement = document.createElement('DIV');
        dialog.contentElement.innerHTML = content;
        dialog.contentElement.className = 'content';
        box.appendChild(dialog.contentElement);
    }
    if (buttons && buttons.length) {
        var button = null;
        var $button_enum = buttons.GetEnumerator();
        while($button_enum.MoveNext()) {
            button = $button_enum.get_Current();
            Ventajou.Gaming.UI.Dialog.renderButton(box, button);
        }
    }
    dialog.element.addEventListener('mousedown', Blade.del(this, function(e) {
        e.stopPropagation();
        e.preventDefault();
    }), false);
    var element = document.getElementById('gameWrapper');
    element.insertBefore(dialog.element, element.firstChild);
    return dialog;
};
Ventajou.Gaming.UI.Dialog.renderButton = function (box, button) {
    if (!button.clicked || !button.label) {
        throw new Error('Cannot create a button with no label or event handler');
    }
    var element = document.createElement('A');
    element.className = 'button';
    if (button.className) {
        element.className += ' ' + button.className;
    }
    element.innerHTML = button.label;
    box.appendChild(element);
    element.addEventListener('mousedown', Blade.del(this, function(e) {
        button.clicked();
    }), false);
};
if(!Ventajou.Gaming.UI.InGame) Ventajou.Gaming.UI.InGame = {};

Ventajou.Gaming.UI.InGame.Menu = (function() {
    function Menu(parentElement) {
        this._parent = parentElement;
    }
    var p = Menu.prototype;
    p._containerElement = null;
    p._menuElement = null;
    p._parent = null;
    p.items = null;
    p.render = function (parent) {
        this._containerElement = document.createElement('DIV');
        this._containerElement.className = 'InGameMenu';
        this._menuElement = document.createElement('DIV');
        this._containerElement.appendChild(this._menuElement);
        var item = null;
        var $item_enum = this.items.GetEnumerator();
        while($item_enum.MoveNext()) {
            item = $item_enum.get_Current();
            item.render(this._menuElement);
        }
        parent.appendChild(this._containerElement);
        Ventajou.Gaming.UI.InGame.Menu._keyPressHandler = Ventajou.Gaming.Browser.Events.attach(this._containerElement, 'keydown', Blade.del(this, function(e) {
            var code = (e).which;
            var handled = false;
            if (code === Ventajou.Gaming.Browser.Keyboard.up.code || code === Ventajou.Gaming.Browser.Keyboard.left.code) {
                this.focusNext(-1);
                handled = true;
            } else if (code === Ventajou.Gaming.Browser.Keyboard.down.code || code === Ventajou.Gaming.Browser.Keyboard.right.code) {
                this.focusNext(1);
                handled = true;
            }
            if (handled) {
                e.stopPropagation();
                e.preventDefault();
            }
        }));
    };
    p.show = function () {
        if (!this._containerElement) {
            this.render(this._parent);
        }
        this._containerElement.style.display = '';
        this.focusFirst();
    };
    p.hide = function () {
        if (!this._containerElement) {
            return;
        }
        this._containerElement.style.display = 'none';
    };
    p.Dispose = function () {
        this.hide();
        var item = null;
        var $item_enum = this.items.GetEnumerator();
        while($item_enum.MoveNext()) {
            item = $item_enum.get_Current();
            item.Dispose();
        }
    };
    p.focusNext = function (direction) {
        var selected = -1;
        for(var i = 0; i < this.items.length; i++) {
            if (!this.items[i].focused()) {
                continue;
            }
            selected = i;
            break;
        }
        if (selected >= 0) {
            var i = (this.items.length + selected + direction) % this.items.length;
            while (i !== selected) {
                if (this.items[i].get_canFocus()) {
                    this.items[i].focus();
                    break;
                }
                i = (this.items.length + i + direction) % this.items.length;
            }
        } else {
            this.focusFirst();
        }
    };
    p.focusFirst = function () {
        var item = null;
        var $item_enum = this.items.GetEnumerator();
        while($item_enum.MoveNext()) {
            item = $item_enum.get_Current();
            if (!item.get_canFocus()) {
                continue;
            }
            item.focus();
            break;
        }
    };
    Blade.impl(Menu, 'IDisposable');
    return Menu;
})();
Ventajou.Gaming.UI.InGame.Menu._keyPressHandler = null;

Ventajou.Gaming.UI.InGame.MenuItem = (function() {
    function MenuItem() {
    }
    var p = MenuItem.prototype;
    p.$canFocus = null;
    p.get_canFocus = function() {
        return this.$canFocus;
    };
    p.set_canFocus = function(value) {
        this.$canFocus = value;
    };
    p.render = function (parent) {
    };
    p.Dispose = function () {
    };
    p.focus = function () {
    };
    p.focused = function () {
        return false;
    };
    Blade.impl(MenuItem, 'IDisposable');
    return MenuItem;
})();

Ventajou.Gaming.Config.UI.SingleChoiceSetting = (function() {
    Blade.derive(SingleChoiceSetting, Ventajou.Gaming.Config.UI.Setting);
    var $base = Ventajou.Gaming.Config.UI.Setting.prototype;
    function SingleChoiceSetting() {
        this.spans = new Array(0);
        $base.constructor.call(this);
    }
    var p = SingleChoiceSetting.prototype;
    p.$key = null;
    p.get_key = function() {
        return this.$key;
    };
    p.set_key = function(value) {
        this.$key = value;
    };
    p.renderValue = function (label, value, parent) {
        var span = document.createElement('SPAN');
        span.innerHTML = label;
        span.addEventListener('mousedown', Blade.del(this, function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (this.value === value) {
                return;
            }
            this.value = value;
            this.select(value);
            this.triggerChanged(this.get_key(), value);
        }), false);
        span['value'] = value;
        this.spans.push(span);
        parent.appendChild(span);
    };
    p.select = function (value) {
        var span = null;
        var $span_enum = this.spans.GetEnumerator();
        while($span_enum.MoveNext()) {
            span = $span_enum.get_Current();
            if (span['value'] === value) {
                if (span.className.indexOf('selected') < 0) {
                    span.className += ' selected';
                }
            } else {
                span.className = span.className.replace(' selected', '');
            }
        }
    };
    return SingleChoiceSetting;
})();

Ventajou.Gaming.Config.UI.BoolSetting = (function() {
    Blade.derive(BoolSetting, Ventajou.Gaming.Config.UI.SingleChoiceSetting);
    var $base = Ventajou.Gaming.Config.UI.SingleChoiceSetting.prototype;
    function BoolSetting() {
        $base.constructor.call(this);
    }
    var p = BoolSetting.prototype;
    p.renderContent = function (parent) {
        this.renderValue('On', true, parent);
        this.renderValue('Off', false, parent);
    };
    return BoolSetting;
})();
if(!Ventajou.Gaming.Config.Settings) Ventajou.Gaming.Config.Settings = {};

Ventajou.Gaming.Config.Settings.FullScreenSetting = (function() {
    Blade.derive(FullScreenSetting, Ventajou.Gaming.Config.UI.BoolSetting);
    var $base = Ventajou.Gaming.Config.UI.BoolSetting.prototype;
    function FullScreenSetting() {
        $base.constructor.call(this);
    }
    var p = FullScreenSetting.prototype;
    p.get_name = function() {
        return 'Full Screen';
    };
    p.get_key = function() {
        return Ventajou.Gaming.Config.Settings.FullScreenSetting.settingKey;
    };
    p.load = function () {
        var d = document;
        if (!d.cancelFullScreen && !d.mozCancelFullScreen && !d.webkitCancelFullScreen) {
            this.hide();
            return;
        }
        this.value = false;
        if (d.mozFullScreen || d.webkitIsFullScreen || d.msFullScreen) {
            this.value = true;
        }
        this.select(this.value);
    };
    p.persist = function () {
        Ventajou.Gaming.Game.settings.fullScreen = this.value;
    };
    return FullScreenSetting;
})();
Ventajou.Gaming.Config.Settings.FullScreenSetting.settingKey = 'FullScreen';

Ventajou.Gaming.Config.UI.ArraySetting = (function() {
    Blade.derive(ArraySetting, Ventajou.Gaming.Config.UI.SingleChoiceSetting);
    var $base = Ventajou.Gaming.Config.UI.SingleChoiceSetting.prototype;
    function ArraySetting() {
        $base.constructor.call(this);
    }
    var p = ArraySetting.prototype;
    p.$values = null;
    p.get_values = function() {
        return this.$values;
    };
    p.set_values = function(value) {
        this.$values = value;
    };
    p.$valueLabel = null;
    p.get_valueLabel = function() {
        return this.$valueLabel;
    };
    p.set_valueLabel = function(value) {
        this.$valueLabel = value;
    };
    p.renderContent = function (parent) {
        var vals = this.get_values();
        if (!vals || !vals.length) {
            return;
        }
        var val = null;
        var $val_enum = vals.GetEnumerator();
        while($val_enum.MoveNext()) {
            val = $val_enum.get_Current();
            this.renderValue(val[this.get_valueLabel()], val, parent);
        }
    };
    return ArraySetting;
})();

Ventajou.Gaming.Config.Settings.ResolutionSetting = (function() {
    Blade.derive(ResolutionSetting, Ventajou.Gaming.Config.UI.ArraySetting);
    var $base = Ventajou.Gaming.Config.UI.ArraySetting.prototype;
    function ResolutionSetting(resolutions) {
        $base.constructor.call(this);
        if (resolutions) {
            Ventajou.Gaming.Config.Settings.ResolutionSetting._values = resolutions;
        }
    }
    var p = ResolutionSetting.prototype;
    p.get_values = function() {
        return Ventajou.Gaming.Config.Settings.ResolutionSetting._values;
    };
    p.get_valueLabel = function() {
        return 'name';
    };
    p.get_key = function() {
        return Ventajou.Gaming.Config.Settings.ResolutionSetting.settingKey;
    };
    p.get_name = function() {
        return 'Resolution';
    };
    p.load = function () {
        var r = Ventajou.Gaming.Game.settings.resolution || Ventajou.Gaming.Config.Resolution.auto;
        this.value = Ventajou.Gaming.Config.Settings.ResolutionSetting._values[0];
        var resolution = null;
        var $resolution_enum = Ventajou.Gaming.Config.Settings.ResolutionSetting._values.GetEnumerator();
        while($resolution_enum.MoveNext()) {
            resolution = $resolution_enum.get_Current();
            if (!Ventajou.Gaming.Config.Resolution.equals(r, resolution)) {
                continue;
            }
            this.value = resolution;
            break;
        }
        this.select(this.value);
    };
    p.persist = function () {
        Ventajou.Gaming.Game.settings.resolution = this.value;
    };
    return ResolutionSetting;
})();
Ventajou.Gaming.Config.Settings.ResolutionSetting.settingKey = 'Resolution';
Ventajou.Gaming.Config.Settings.ResolutionSetting._values = [Ventajou.Gaming.Config.Resolution.auto, Ventajou.Gaming.Config.Resolution.qvga, Ventajou.Gaming.Config.Resolution.vga, Ventajou.Gaming.Config.Resolution.svga];

Ventajou.Gaming.Config.Settings.StretchToWindowSetting = (function() {
    Blade.derive(StretchToWindowSetting, Ventajou.Gaming.Config.UI.BoolSetting);
    var $base = Ventajou.Gaming.Config.UI.BoolSetting.prototype;
    function StretchToWindowSetting() {
        $base.constructor.call(this);
    }
    var p = StretchToWindowSetting.prototype;
    p.get_name = function() {
        return 'Stretch to Window';
    };
    p.get_key = function() {
        return Ventajou.Gaming.Config.Settings.StretchToWindowSetting.settingKey;
    };
    p.load = function () {
        this.value = Ventajou.Gaming.Game.settings.fitToContainer || false;
        this.select(this.value);
        if (Ventajou.Gaming.Config.Resolution.equals(Ventajou.Gaming.Config.Resolution.auto, Ventajou.Gaming.Game.settings.resolution)) {
            this.hide();
        } else {
            this.show();
        }
    };
    p.persist = function () {
        Ventajou.Gaming.Game.settings.fitToContainer = this.value;
    };
    p.settingChanged = function (key, value) {
        if (key !== Ventajou.Gaming.Config.Settings.ResolutionSetting.settingKey) {
            return;
        }
        if (Ventajou.Gaming.Config.Resolution.equals(Ventajou.Gaming.Config.Resolution.auto, value)) {
            this.hide();
            this.select(false);
        } else {
            this.show();
        }
    };
    return StretchToWindowSetting;
})();
Ventajou.Gaming.Config.Settings.StretchToWindowSetting.settingKey = 'StretchToWindow';

Ventajou.Gaming.Config.UI.KeySetting = (function() {
    Blade.derive(KeySetting, Ventajou.Gaming.Config.UI.Setting);
    var $base = Ventajou.Gaming.Config.UI.Setting.prototype;
    function KeySetting(name, key, defaultValue, index) {
        $base.constructor.call(this);
        this._name = name;
        this._key = key;
        this._defaultValue = defaultValue.code;
        this._index = index;
        if (!Ventajou.Gaming.Game.settings[this._key]) {
            Ventajou.Gaming.Game.settings[this._key] = this._defaultValue;
        }
        Ventajou.Gaming.Config.UI.KeySetting._allKeySettings.push(this);
    }
    var p = KeySetting.prototype;
    p._name = null;
    p._key = null;
    p._defaultValue = null;
    p._index = null;
    p._span = null;
    p.get_name = function() {
        return this._name;
    };
    p.load = function () {
        this.value = Ventajou.Gaming.Game.settings[this._key] || this._defaultValue;
        var key = Ventajou.Gaming.Browser.Keyboard.getKey(this.value) || Ventajou.Gaming.Browser.Keyboard.getKey(this._defaultValue);
        this._span.innerHTML = key.name;
    };
    p.persist = function () {
        Ventajou.Gaming.Game.settings[this._key] = this.value;
    };
    p.renderContent = function (parent) {
        this._span = document.createElement('SPAN');
        parent.appendChild(this._span);
        this._span.addEventListener('mousedown', Blade.del(this, function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.GetKey();
        }), true);
        parent.appendChild(this._span);
    };
    p.GetKey = function () {
        var dialog = null;
        var keydownHandler = null;
        dialog = Ventajou.Gaming.UI.Dialog.show(null, 'Press the key you\u0027d like to use for \u003cem\u003e' + this.get_name() + '\u003c/em\u003e.', [{
            label: 'Cancel',
            className: 'cancel',
            clicked: Blade.del(this, function() {
                removeEventListener('keydown', keydownHandler, false);
                dialog.close();
            })
        }]);
        keydownHandler = Ventajou.Gaming.Browser.Events.attach(self, 'keydown', Blade.del(this, function(e) {
            var key = Ventajou.Gaming.Browser.Keyboard.getKey((e).which);
            var keySetting = null;
            var $keySetting_enum = Ventajou.Gaming.Config.UI.KeySetting._allKeySettings.GetEnumerator();
            while($keySetting_enum.MoveNext()) {
                keySetting = $keySetting_enum.get_Current();
                if (keySetting === this || keySetting.value !== key.code) {
                    continue;
                }
                dialog.contentElement.innerHTML = '\u003cem\u003e' + key.name + '\u003c/em\u003e is already used for \u003cem\u003e' + keySetting.get_name() + '\u003c/em\u003e, please use a different key for \u003cem\u003e' + this.get_name() + '\u003c/em\u003e.';
                return;
            }
            removeEventListener('keydown', keydownHandler, false);
            dialog.close();
            this._span.innerHTML = key.name;
            this.value = key.code;
        }));
        dialog.element.addEventListener('mousedown', Blade.del(this, function(e) {
            e.stopPropagation();
            e.preventDefault();
        }), false);
    };
    return KeySetting;
})();
Ventajou.Gaming.Config.UI.KeySetting._allKeySettings = new Array(0);
Ventajou.Gaming.Config.UI.KeySetting.keyStatus = new Array(0);
Ventajou.Gaming.Config.UI.KeySetting.keyDownHandler = null;
Ventajou.Gaming.Config.UI.KeySetting.keyUpHandler = null;
Ventajou.Gaming.Config.UI.KeySetting.keyboardTarget = null;
Ventajou.Gaming.Config.UI.KeySetting.startListening = function (target) {
    Ventajou.Gaming.Config.UI.KeySetting.keyboardTarget = target;
    var keySetting = null;
    var $keySetting_enum = Ventajou.Gaming.Config.UI.KeySetting._allKeySettings.GetEnumerator();
    while($keySetting_enum.MoveNext()) {
        keySetting = $keySetting_enum.get_Current();
        Ventajou.Gaming.Config.UI.KeySetting.keyStatus[keySetting._index] = false;
    }
    Ventajou.Gaming.Config.UI.KeySetting.keyDownHandler = Ventajou.Gaming.Browser.Events.attach(self, 'keydown', Blade.del(this, function(e) {
        Ventajou.Gaming.Config.UI.KeySetting.handleKey(e, true)}));
    Ventajou.Gaming.Config.UI.KeySetting.keyUpHandler = Ventajou.Gaming.Browser.Events.attach(self, 'keyup', Blade.del(this, function(e) {
        Ventajou.Gaming.Config.UI.KeySetting.handleKey(e, false)}));
};
Ventajou.Gaming.Config.UI.KeySetting.handleKey = function (e, pressed) {
    var code = (e).which;
    var handled = false;
    var keySetting = null;
    var $keySetting_enum = Ventajou.Gaming.Config.UI.KeySetting._allKeySettings.GetEnumerator();
    while($keySetting_enum.MoveNext()) {
        keySetting = $keySetting_enum.get_Current();
        if (code === keySetting.value) {
            Ventajou.Gaming.Config.UI.KeySetting.keyStatus[keySetting._index] = pressed;
            handled = true;
        }
    }
    if (handled) {
        e.stopPropagation();
        e.preventDefault();
    }
};
Ventajou.Gaming.Config.UI.KeySetting.stopListening = function () {
    Ventajou.Gaming.Config.UI.KeySetting.keyboardTarget.removeEventListener('keydown', Ventajou.Gaming.Config.UI.KeySetting.keyDownHandler, false);
    Ventajou.Gaming.Config.UI.KeySetting.keyboardTarget.removeEventListener('keyup', Ventajou.Gaming.Config.UI.KeySetting.keyUpHandler, false);
};

Ventajou.Gaming.UI.InGame.Button = (function() {
    Blade.derive(Button, Ventajou.Gaming.UI.InGame.MenuItem);
    var $base = Ventajou.Gaming.UI.InGame.MenuItem.prototype;
    function Button(text) {
        $base.constructor.call(this);
        this._text = text;
    }
    var p = Button.prototype;
    p._text = null;
    p._element = null;
    p._button = null;
    p._clickHandler = null;
    p.$clicked = new Blade.Event();
    p.clicked = function() {
        this.$clicked.pub.apply(this.$clicked, arguments);
    }
    p.clicked$add = function(func, ctx) {
        this.$clicked.add(func, ctx);
    };
    p.clicked$rem = function(func) {
        this.$clicked.rem(func);
    };
    p.get_canFocus = function() {
        return true;
    };
    p.render = function (parent) {
        this._element = document.createElement('DIV');
        this._button = document.createElement('BUTTON');
        this._element.appendChild(this._button);
        this._button.innerHTML = this._text;
        parent.appendChild(this._element);
        this._clickHandler = Ventajou.Gaming.Browser.Events.attach(this._button, 'click', Blade.del(this, function(e) {
            this.clicked()}));
    };
    p.focus = function () {
        this._button.focus();
    };
    p.focused = function () {
        return this._button === document.activeElement;
    };
    p.Dispose = function () {
        this._element = null;
    };
    Blade.impl(Button, 'IDisposable');
    return Button;
})();

Ventajou.Gaming.UI.InGame.Label = (function() {
    Blade.derive(Label, Ventajou.Gaming.UI.InGame.MenuItem);
    var $base = Ventajou.Gaming.UI.InGame.MenuItem.prototype;
    function Label(text) {
        $base.constructor.call(this);
        this._text = text;
    }
    var p = Label.prototype;
    p._text = null;
    p._element = null;
    p.get_canFocus = function() {
        return false;
    };
    p.render = function (parent) {
        this._element = document.createElement('DIV');
        var span = document.createElement('SPAN');
        span.innerHTML = this._text;
        this._element.appendChild(span);
        parent.appendChild(this._element);
    };
    p.Dispose = function () {
        this._element = null;
    };
    Blade.impl(Label, 'IDisposable');
    return Label;
})();

Ventajou.Gaming.UI.InGame.Title = (function() {
    Blade.derive(Title, Ventajou.Gaming.UI.InGame.MenuItem);
    var $base = Ventajou.Gaming.UI.InGame.MenuItem.prototype;
    function Title(text) {
        $base.constructor.call(this);
        this._text = text;
    }
    var p = Title.prototype;
    p._text = null;
    p._element = null;
    p.get_canFocus = function() {
        return false;
    };
    p.render = function (parent) {
        this._element = document.createElement('H1');
        this._element.innerHTML = this._text;
        parent.appendChild(this._element);
    };
    p.Dispose = function () {
        this._element = null;
    };
    Blade.impl(Title, 'IDisposable');
    return Title;
})();

Ventajou.Gaming.Browser.Events.attach = function (element, name, handler) {
    element.addEventListener(name, handler, false);
    return handler;
};
Ventajou.Gaming.Browser.Keyboard.backspace = {
    code: 8,
    name: 'Backspace'
};
Ventajou.Gaming.Browser.Keyboard.tab = {
    code: 9,
    name: 'Tab'
};
Ventajou.Gaming.Browser.Keyboard.enter = {
    code: 13,
    name: 'Enter'
};
Ventajou.Gaming.Browser.Keyboard.shift = {
    code: 16,
    name: 'Shift'
};
Ventajou.Gaming.Browser.Keyboard.ctrl = {
    code: 17,
    name: 'Ctrl'
};
Ventajou.Gaming.Browser.Keyboard.alt = {
    code: 18,
    name: 'Alt'
};
Ventajou.Gaming.Browser.Keyboard.pause = {
    code: 19,
    name: 'Pause'
};
Ventajou.Gaming.Browser.Keyboard.capsLock = {
    code: 20,
    name: 'Caps Lock'
};
Ventajou.Gaming.Browser.Keyboard.esc = {
    code: 27,
    name: 'Esc'
};
Ventajou.Gaming.Browser.Keyboard.pgUp = {
    code: 33,
    name: 'Pg Up'
};
Ventajou.Gaming.Browser.Keyboard.pgDn = {
    code: 34,
    name: 'Pg Dn'
};
Ventajou.Gaming.Browser.Keyboard.end = {
    code: 35,
    name: 'End'
};
Ventajou.Gaming.Browser.Keyboard.home = {
    code: 36,
    name: 'Home'
};
Ventajou.Gaming.Browser.Keyboard.left = {
    code: 37,
    name: 'Left'
};
Ventajou.Gaming.Browser.Keyboard.up = {
    code: 38,
    name: 'Up'
};
Ventajou.Gaming.Browser.Keyboard.right = {
    code: 39,
    name: 'Right'
};
Ventajou.Gaming.Browser.Keyboard.down = {
    code: 40,
    name: 'Down'
};
Ventajou.Gaming.Browser.Keyboard.insert = {
    code: 45,
    name: 'Insert'
};
Ventajou.Gaming.Browser.Keyboard.delete = {
    code: 46,
    name: 'Delete'
};
Ventajou.Gaming.Browser.Keyboard._0 = {
    code: 48,
    name: '0'
};
Ventajou.Gaming.Browser.Keyboard._1 = {
    code: 49,
    name: '1'
};
Ventajou.Gaming.Browser.Keyboard._2 = {
    code: 50,
    name: '2'
};
Ventajou.Gaming.Browser.Keyboard._3 = {
    code: 51,
    name: '3'
};
Ventajou.Gaming.Browser.Keyboard._4 = {
    code: 52,
    name: '4'
};
Ventajou.Gaming.Browser.Keyboard._5 = {
    code: 53,
    name: '5'
};
Ventajou.Gaming.Browser.Keyboard._6 = {
    code: 54,
    name: '6'
};
Ventajou.Gaming.Browser.Keyboard._7 = {
    code: 55,
    name: '7'
};
Ventajou.Gaming.Browser.Keyboard._8 = {
    code: 56,
    name: '8'
};
Ventajou.Gaming.Browser.Keyboard._9 = {
    code: 57,
    name: '9'
};
Ventajou.Gaming.Browser.Keyboard.a = {
    code: 65,
    name: 'a'
};
Ventajou.Gaming.Browser.Keyboard.b = {
    code: 66,
    name: 'b'
};
Ventajou.Gaming.Browser.Keyboard.c = {
    code: 67,
    name: 'c'
};
Ventajou.Gaming.Browser.Keyboard.d = {
    code: 68,
    name: 'd'
};
Ventajou.Gaming.Browser.Keyboard.e = {
    code: 69,
    name: 'e'
};
Ventajou.Gaming.Browser.Keyboard.f = {
    code: 70,
    name: 'f'
};
Ventajou.Gaming.Browser.Keyboard.g = {
    code: 71,
    name: 'g'
};
Ventajou.Gaming.Browser.Keyboard.h = {
    code: 72,
    name: 'h'
};
Ventajou.Gaming.Browser.Keyboard.i = {
    code: 73,
    name: 'i'
};
Ventajou.Gaming.Browser.Keyboard.j = {
    code: 74,
    name: 'j'
};
Ventajou.Gaming.Browser.Keyboard.k = {
    code: 75,
    name: 'k'
};
Ventajou.Gaming.Browser.Keyboard.l = {
    code: 76,
    name: 'l'
};
Ventajou.Gaming.Browser.Keyboard.m = {
    code: 77,
    name: 'm'
};
Ventajou.Gaming.Browser.Keyboard.n = {
    code: 78,
    name: 'n'
};
Ventajou.Gaming.Browser.Keyboard.o = {
    code: 79,
    name: 'o'
};
Ventajou.Gaming.Browser.Keyboard.p = {
    code: 80,
    name: 'p'
};
Ventajou.Gaming.Browser.Keyboard.q = {
    code: 81,
    name: 'q'
};
Ventajou.Gaming.Browser.Keyboard.r = {
    code: 82,
    name: 'r'
};
Ventajou.Gaming.Browser.Keyboard.s = {
    code: 83,
    name: 's'
};
Ventajou.Gaming.Browser.Keyboard.t = {
    code: 84,
    name: 't'
};
Ventajou.Gaming.Browser.Keyboard.u = {
    code: 85,
    name: 'u'
};
Ventajou.Gaming.Browser.Keyboard.v = {
    code: 86,
    name: 'v'
};
Ventajou.Gaming.Browser.Keyboard.w = {
    code: 87,
    name: 'w'
};
Ventajou.Gaming.Browser.Keyboard.x = {
    code: 88,
    name: 'x'
};
Ventajou.Gaming.Browser.Keyboard.y = {
    code: 89,
    name: 'y'
};
Ventajou.Gaming.Browser.Keyboard.z = {
    code: 90,
    name: 'z'
};
Ventajou.Gaming.Browser.Keyboard.leftWin = {
    code: 91,
    name: 'Left Windows'
};
Ventajou.Gaming.Browser.Keyboard.rightWin = {
    code: 92,
    name: 'Right Windows'
};
Ventajou.Gaming.Browser.Keyboard.select = {
    code: 93,
    name: 'Select'
};
Ventajou.Gaming.Browser.Keyboard.pad0 = {
    code: 96,
    name: 'Numpad 0'
};
Ventajou.Gaming.Browser.Keyboard.pad1 = {
    code: 97,
    name: 'Numpad 1'
};
Ventajou.Gaming.Browser.Keyboard.pad2 = {
    code: 98,
    name: 'Numpad 2'
};
Ventajou.Gaming.Browser.Keyboard.pad3 = {
    code: 99,
    name: 'Numpad 3'
};
Ventajou.Gaming.Browser.Keyboard.pad4 = {
    code: 100,
    name: 'Numpad 4'
};
Ventajou.Gaming.Browser.Keyboard.pad5 = {
    code: 101,
    name: 'Numpad 5'
};
Ventajou.Gaming.Browser.Keyboard.pad6 = {
    code: 102,
    name: 'Numpad 6'
};
Ventajou.Gaming.Browser.Keyboard.pad7 = {
    code: 103,
    name: 'Numpad 7'
};
Ventajou.Gaming.Browser.Keyboard.pad8 = {
    code: 104,
    name: 'Numpad 8'
};
Ventajou.Gaming.Browser.Keyboard.pad9 = {
    code: 105,
    name: 'Numpad 9'
};
Ventajou.Gaming.Browser.Keyboard.padMultiply = {
    code: 106,
    name: 'Numpad *'
};
Ventajou.Gaming.Browser.Keyboard.padAdd = {
    code: 107,
    name: 'Numpad +'
};
Ventajou.Gaming.Browser.Keyboard.padSubtract = {
    code: 109,
    name: 'Numpad -'
};
Ventajou.Gaming.Browser.Keyboard.padDot = {
    code: 110,
    name: 'Numpad .'
};
Ventajou.Gaming.Browser.Keyboard.padDivide = {
    code: 111,
    name: 'Numpad /'
};
Ventajou.Gaming.Browser.Keyboard.f1 = {
    code: 112,
    name: 'F1'
};
Ventajou.Gaming.Browser.Keyboard.f2 = {
    code: 113,
    name: 'F2'
};
Ventajou.Gaming.Browser.Keyboard.f3 = {
    code: 114,
    name: 'F3'
};
Ventajou.Gaming.Browser.Keyboard.f4 = {
    code: 115,
    name: 'F4'
};
Ventajou.Gaming.Browser.Keyboard.f5 = {
    code: 116,
    name: 'F5'
};
Ventajou.Gaming.Browser.Keyboard.f6 = {
    code: 117,
    name: 'F6'
};
Ventajou.Gaming.Browser.Keyboard.f7 = {
    code: 118,
    name: 'F7'
};
Ventajou.Gaming.Browser.Keyboard.f8 = {
    code: 119,
    name: 'F8'
};
Ventajou.Gaming.Browser.Keyboard.f9 = {
    code: 120,
    name: 'F9'
};
Ventajou.Gaming.Browser.Keyboard.f10 = {
    code: 121,
    name: 'F10'
};
Ventajou.Gaming.Browser.Keyboard.f11 = {
    code: 122,
    name: 'F11'
};
Ventajou.Gaming.Browser.Keyboard.f12 = {
    code: 123,
    name: 'F12'
};
Ventajou.Gaming.Browser.Keyboard.numLock = {
    code: 144,
    name: 'Num Lock'
};
Ventajou.Gaming.Browser.Keyboard.scrollLock = {
    code: 145,
    name: 'Scroll Lock'
};
Ventajou.Gaming.Browser.Keyboard.semiColon = {
    code: 186,
    name: ';'
};
Ventajou.Gaming.Browser.Keyboard.equal = {
    code: 187,
    name: '='
};
Ventajou.Gaming.Browser.Keyboard.comma = {
    code: 188,
    name: ','
};
Ventajou.Gaming.Browser.Keyboard.dash = {
    code: 189,
    name: '-'
};
Ventajou.Gaming.Browser.Keyboard.period = {
    code: 190,
    name: '.'
};
Ventajou.Gaming.Browser.Keyboard.slash = {
    code: 191,
    name: '/'
};
Ventajou.Gaming.Browser.Keyboard.graveAccent = {
    code: 192,
    name: '`'
};
Ventajou.Gaming.Browser.Keyboard.openBracket = {
    code: 219,
    name: '['
};
Ventajou.Gaming.Browser.Keyboard.backSlash = {
    code: 220,
    name: '\\'
};
Ventajou.Gaming.Browser.Keyboard.closeBracket = {
    code: 221,
    name: ']'
};
Ventajou.Gaming.Browser.Keyboard.singleQuote = {
    code: 222,
    name: '\u0027'
};
Ventajou.Gaming.Browser.Keyboard._singleton = new Ventajou.Gaming.Browser.Keyboard();
Ventajou.Gaming.Browser.Keyboard.getKey = function (code) {
    for(var i = 0; i < Ventajou.Gaming.Browser.Keyboard._singleton._keys.length; i++) {
        if (Ventajou.Gaming.Browser.Keyboard._singleton._keys[i].code !== code) {
            continue;
        }
        return Ventajou.Gaming.Browser.Keyboard._singleton._keys[i];
    }
    return null;
};
Ventajou.Gaming.Config.Resolution.auto = new Ventajou.Gaming.Config.Resolution(0, 0, 'Auto');
Ventajou.Gaming.Config.Resolution.qvga = new Ventajou.Gaming.Config.Resolution(320, 240, '320 x 240');
Ventajou.Gaming.Config.Resolution.vga = new Ventajou.Gaming.Config.Resolution(640, 480, '640 x 480');
Ventajou.Gaming.Config.Resolution.svga = new Ventajou.Gaming.Config.Resolution(800, 600, '800 x 600');
Ventajou.Gaming.Config.Resolution.xvga = new Ventajou.Gaming.Config.Resolution(1024, 768, '1024 x 768');
Ventajou.Gaming.Config.Resolution.equals = function (a, b) {
    if (!a || !b) {
        return false;
    }
    return (a.width === b.width && a.height === b.height);
};
Ventajou.Gaming.Game.settings = null;
Ventajou.Gaming.UI.Dialog.show = function (title, content, buttons, modal) {
    modal = (modal !== undefined) ? modal : true;
    var dialog = new Ventajou.Gaming.UI.Dialog();
    dialog.element = document.createElement('DIV');
    dialog.element.className = 'dialog';
    if (modal) {
        dialog.element.className += ' modal';
    }
    var box = document.createElement('DIV');
    dialog.element.appendChild(box);
    if (title) {
        dialog.titleElement = document.createElement('H1');
        dialog.titleElement.innerHTML = title;
        box.appendChild(dialog.titleElement);
    }
    if (content !== null) {
        dialog.contentElement = document.createElement('DIV');
        dialog.contentElement.innerHTML = content;
        dialog.contentElement.className = 'content';
        box.appendChild(dialog.contentElement);
    }
    if (buttons && buttons.length) {
        var button = null;
        var $button_enum = buttons.GetEnumerator();
        while($button_enum.MoveNext()) {
            button = $button_enum.get_Current();
            Ventajou.Gaming.UI.Dialog.renderButton(box, button);
        }
    }
    dialog.element.addEventListener('mousedown', Blade.del(this, function(e) {
        e.stopPropagation();
        e.preventDefault();
    }), false);
    var element = document.getElementById('gameWrapper');
    element.insertBefore(dialog.element, element.firstChild);
    return dialog;
};
Ventajou.Gaming.UI.Dialog.renderButton = function (box, button) {
    if (!button.clicked || !button.label) {
        throw new Error('Cannot create a button with no label or event handler');
    }
    var element = document.createElement('A');
    element.className = 'button';
    if (button.className) {
        element.className += ' ' + button.className;
    }
    element.innerHTML = button.label;
    box.appendChild(element);
    element.addEventListener('mousedown', Blade.del(this, function(e) {
        button.clicked();
    }), false);
};
Ventajou.Gaming.UI.InGame.Menu._keyPressHandler = null;
Ventajou.Gaming.Config.Settings.FullScreenSetting.settingKey = 'FullScreen';
Ventajou.Gaming.Config.Settings.ResolutionSetting.settingKey = 'Resolution';
Ventajou.Gaming.Config.Settings.ResolutionSetting._values = [Ventajou.Gaming.Config.Resolution.auto, Ventajou.Gaming.Config.Resolution.qvga, Ventajou.Gaming.Config.Resolution.vga, Ventajou.Gaming.Config.Resolution.svga];
Ventajou.Gaming.Config.Settings.StretchToWindowSetting.settingKey = 'StretchToWindow';
Ventajou.Gaming.Config.UI.KeySetting._allKeySettings = new Array(0);
Ventajou.Gaming.Config.UI.KeySetting.keyStatus = new Array(0);
Ventajou.Gaming.Config.UI.KeySetting.keyDownHandler = null;
Ventajou.Gaming.Config.UI.KeySetting.keyUpHandler = null;
Ventajou.Gaming.Config.UI.KeySetting.keyboardTarget = null;
Ventajou.Gaming.Config.UI.KeySetting.startListening = function (target) {
    Ventajou.Gaming.Config.UI.KeySetting.keyboardTarget = target;
    var keySetting = null;
    var $keySetting_enum = Ventajou.Gaming.Config.UI.KeySetting._allKeySettings.GetEnumerator();
    while($keySetting_enum.MoveNext()) {
        keySetting = $keySetting_enum.get_Current();
        Ventajou.Gaming.Config.UI.KeySetting.keyStatus[keySetting._index] = false;
    }
    Ventajou.Gaming.Config.UI.KeySetting.keyDownHandler = Ventajou.Gaming.Browser.Events.attach(self, 'keydown', Blade.del(this, function(e) {
        Ventajou.Gaming.Config.UI.KeySetting.handleKey(e, true)}));
    Ventajou.Gaming.Config.UI.KeySetting.keyUpHandler = Ventajou.Gaming.Browser.Events.attach(self, 'keyup', Blade.del(this, function(e) {
        Ventajou.Gaming.Config.UI.KeySetting.handleKey(e, false)}));
};
Ventajou.Gaming.Config.UI.KeySetting.handleKey = function (e, pressed) {
    var code = (e).which;
    var handled = false;
    var keySetting = null;
    var $keySetting_enum = Ventajou.Gaming.Config.UI.KeySetting._allKeySettings.GetEnumerator();
    while($keySetting_enum.MoveNext()) {
        keySetting = $keySetting_enum.get_Current();
        if (code === keySetting.value) {
            Ventajou.Gaming.Config.UI.KeySetting.keyStatus[keySetting._index] = pressed;
            handled = true;
        }
    }
    if (handled) {
        e.stopPropagation();
        e.preventDefault();
    }
};
Ventajou.Gaming.Config.UI.KeySetting.stopListening = function () {
    Ventajou.Gaming.Config.UI.KeySetting.keyboardTarget.removeEventListener('keydown', Ventajou.Gaming.Config.UI.KeySetting.keyDownHandler, false);
    Ventajou.Gaming.Config.UI.KeySetting.keyboardTarget.removeEventListener('keyup', Ventajou.Gaming.Config.UI.KeySetting.keyUpHandler, false);
};
