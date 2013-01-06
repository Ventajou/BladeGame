
if(typeof Ventajou == 'undefined') Ventajou = {};
if(!Ventajou.Gaming) Ventajou.Gaming = {};
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
        this.canvas = document.createElement('CANVAS');
        this.wrapper.appendChild(this.canvas);
        var toolbar = document.createElement('DIV');
        toolbar.className = 'vtjToolbar';
        element.appendChild(toolbar);
        var title = document.createElement('SPAN');
        title.innerHTML = this.get_Name();
        toolbar.appendChild(title);
        if (localStorage !== null) {
            var s = JSON.parse(localStorage.getItem(this.get_SettingsKey()));
            if (s !== null) {
                Ventajou.Gaming.Game.settings = s;
            }
        }
        if (!Ventajou.Gaming.Game.settings) {
            Ventajou.Gaming.Game.settings = {};
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
    p.wrapper = null;
    p.canvas = null;
    p.requestAnimFrame = null;
    p.$Name = null;
    p.get_Name = function() {
        return this.$Name;
    };
    p.set_Name = function(value) {
        this.$Name = value;
    };
    p.get_SettingsKey = function() {
        return this.get_Name() + '.Settings';
    };
    p.requestAnimationFrameFallback = function (a) {
        setTimeout(a, 1000 / 60);
    };
    p.loadScene = function (scene) {
        if (this._currentScene !== null) {
            this._currentScene.Dispose();
        }
        this._currentScene = scene;
        scene.start();
    };
    p.buildMenus = function () {
        return [new Ventajou.Gaming.Config.UI.Menu('Display', 'display', [new Ventajou.Gaming.Config.Settings.FullScreenSetting(), new Ventajou.Gaming.Config.Settings.ResolutionSetting(), new Ventajou.Gaming.Config.Settings.StretchToWindowSetting()])];
    };
    p.menuChanged = function (menuName) {
        if (localStorage !== null) {
            localStorage.setItem(this.get_SettingsKey(), JSON.stringify(Ventajou.Gaming.Game.settings));
        }
        switch (menuName) {
            case 'Display':
                this.refresh();
                break;
        }
    };
    p.refresh = function () {
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
            this.canvas.style.top = '0';
            this.canvas.style.left = '0';
            this.canvas.style.width = '100%';
            this.canvas.style.height = '100%';
            this.canvas.height = this.canvas.offsetHeight;
            this.canvas.width = this.canvas.offsetWidth;
        } else {
            this.canvas.width = Ventajou.Gaming.Game.settings.resolution.width;
            this.canvas.height = Ventajou.Gaming.Game.settings.resolution.height;
            var ww = this.wrapper.offsetWidth;
            var wh = this.wrapper.offsetHeight;
            if (Ventajou.Gaming.Game.settings.fitToContainer) {
                var aspectRatio = Ventajou.Gaming.Game.settings.resolution.width / Ventajou.Gaming.Game.settings.resolution.height;
                var w = aspectRatio * wh;
                if (w <= ww) {
                    this.canvas.style.top = '0';
                    this.canvas.style.left = ((ww - w) / 2) + 'px';
                    this.canvas.style.width = w + 'px';
                    this.canvas.style.height = wh + 'px';
                } else {
                    var h = ww / aspectRatio;
                    this.canvas.style.top = ((wh - h) / 2) + 'px';
                    this.canvas.style.left = '0';
                    this.canvas.style.width = ww + 'px';
                    this.canvas.style.height = h + 'px';
                }
            } else {
                this.canvas.style.width = Ventajou.Gaming.Game.settings.resolution.width + 'px';
                this.canvas.style.height = Ventajou.Gaming.Game.settings.resolution.height + 'px';
                this.canvas.style.top = ((wh - Ventajou.Gaming.Game.settings.resolution.height) / 2) + 'px';
                this.canvas.style.left = ((ww - Ventajou.Gaming.Game.settings.resolution.width) / 2) + 'px';
            }
        }
        if (this._currentScene) {
            this._currentScene.refresh();
        }
    };
    return Game;
})();
Ventajou.Gaming.Game.settings = null;

Ventajou.Gaming.Scene = (function() {
    function Scene(game) {
        this.game = game;
    }
    var p = Scene.prototype;
    p.game = null;
    p.start = function () {
        this.onStart();
        setInterval((Blade.del(this, function() {
            this.update();
        })), 1000 / 60);
    };
    p.update = function () {
        this.refresh();
    };
    p.onStart = function () {
    };
    p.refresh = function () {
    };
    p.Dispose = function () {
    };
    Blade.impl(Scene, 'IDisposable');
    return Scene;
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
Ventajou.Gaming.Config.Settings.FullScreenSetting.settingKey = 'FullScreen';
Ventajou.Gaming.Config.Settings.ResolutionSetting.settingKey = 'Resolution';
Ventajou.Gaming.Config.Settings.ResolutionSetting._values = [Ventajou.Gaming.Config.Resolution.auto, Ventajou.Gaming.Config.Resolution.qvga, Ventajou.Gaming.Config.Resolution.vga, Ventajou.Gaming.Config.Resolution.svga];
Ventajou.Gaming.Config.Settings.StretchToWindowSetting.settingKey = 'StretchToWindow';
