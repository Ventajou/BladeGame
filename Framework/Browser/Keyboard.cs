using System;
using System.Dom;
using System.Html;

namespace Ventajou.Gaming.Browser
{
    public class Keyboard
    {
        public static Key backspace = new Key { code = 8, name = "Backspace" };
        public static Key tab = new Key { code = 9, name = "Tab" };
        public static Key enter = new Key { code = 13, name = "Enter" };
        public static Key shift = new Key { code = 16, name = "Shift" };
        public static Key ctrl = new Key { code = 17, name = "Ctrl" };
        public static Key alt = new Key { code = 18, name = "Alt" };
        public static Key pause = new Key { code = 19, name = "Pause" };
        public static Key capsLock = new Key { code = 20, name = "Caps Lock" };
        public static Key esc = new Key { code = 27, name = "Esc" };
        public static Key pgUp = new Key { code = 33, name = "Pg Up" };
        public static Key pgDn = new Key { code = 34, name = "Pg Dn" };
        public static Key end = new Key { code = 35, name = "End" };
        public static Key home = new Key { code = 36, name = "Home" };
        public static Key left = new Key { code = 37, name = "Left" };
        public static Key up = new Key { code = 38, name = "Up" };
        public static Key right = new Key { code = 39, name = "Right" };
        public static Key down = new Key { code = 40, name = "Down" };
        public static Key insert = new Key { code = 45, name = "Insert" };
        public static Key delete = new Key { code = 46, name = "Delete" };
        public static Key _0 = new Key { code = 48, name = "0" };
        public static Key _1 = new Key { code = 49, name = "1" };
        public static Key _2 = new Key { code = 50, name = "2" };
        public static Key _3 = new Key { code = 51, name = "3" };
        public static Key _4 = new Key { code = 52, name = "4" };
        public static Key _5 = new Key { code = 53, name = "5" };
        public static Key _6 = new Key { code = 54, name = "6" };
        public static Key _7 = new Key { code = 55, name = "7" };
        public static Key _8 = new Key { code = 56, name = "8" };
        public static Key _9 = new Key { code = 57, name = "9" };
        public static Key a = new Key { code = 65, name = "a" };
        public static Key b = new Key { code = 66, name = "b" };
        public static Key c = new Key { code = 67, name = "c" };
        public static Key d = new Key { code = 68, name = "d" };
        public static Key e = new Key { code = 69, name = "e" };
        public static Key f = new Key { code = 70, name = "f" };
        public static Key g = new Key { code = 71, name = "g" };
        public static Key h = new Key { code = 72, name = "h" };
        public static Key i = new Key { code = 73, name = "i" };
        public static Key j = new Key { code = 74, name = "j" };
        public static Key k = new Key { code = 75, name = "k" };
        public static Key l = new Key { code = 76, name = "l" };
        public static Key m = new Key { code = 77, name = "m" };
        public static Key n = new Key { code = 78, name = "n" };
        public static Key o = new Key { code = 79, name = "o" };
        public static Key p = new Key { code = 80, name = "p" };
        public static Key q = new Key { code = 81, name = "q" };
        public static Key r = new Key { code = 82, name = "r" };
        public static Key s = new Key { code = 83, name = "s" };
        public static Key t = new Key { code = 84, name = "t" };
        public static Key u = new Key { code = 85, name = "u" };
        public static Key v = new Key { code = 86, name = "v" };
        public static Key w = new Key { code = 87, name = "w" };
        public static Key x = new Key { code = 88, name = "x" };
        public static Key y = new Key { code = 89, name = "y" };
        public static Key z = new Key { code = 90, name = "z" };
        public static Key leftWin = new Key { code = 91, name = "Left Windows" };
        public static Key rightWin = new Key { code = 92, name = "Right Windows" };
        public static Key select = new Key { code = 93, name = "Select" };
        public static Key pad0 = new Key { code = 96, name = "Numpad 0" };
        public static Key pad1 = new Key { code = 97, name = "Numpad 1" };
        public static Key pad2 = new Key { code = 98, name = "Numpad 2" };
        public static Key pad3 = new Key { code = 99, name = "Numpad 3" };
        public static Key pad4 = new Key { code = 100, name = "Numpad 4" };
        public static Key pad5 = new Key { code = 101, name = "Numpad 5" };
        public static Key pad6 = new Key { code = 102, name = "Numpad 6" };
        public static Key pad7 = new Key { code = 103, name = "Numpad 7" };
        public static Key pad8 = new Key { code = 104, name = "Numpad 8" };
        public static Key pad9 = new Key { code = 105, name = "Numpad 9" };
        public static Key padMultiply = new Key { code = 106, name = "Numpad *" };
        public static Key padAdd = new Key { code = 107, name = "Numpad +" };
        public static Key padSubtract = new Key { code = 109, name = "Numpad -" };
        public static Key padDot = new Key { code = 110, name = "Numpad ." };
        public static Key padDivide = new Key { code = 111, name = "Numpad /" };
        public static Key f1 = new Key { code = 112, name = "F1" };
        public static Key f2 = new Key { code = 113, name = "F2" };
        public static Key f3 = new Key { code = 114, name = "F3" };
        public static Key f4 = new Key { code = 115, name = "F4" };
        public static Key f5 = new Key { code = 116, name = "F5" };
        public static Key f6 = new Key { code = 117, name = "F6" };
        public static Key f7 = new Key { code = 118, name = "F7" };
        public static Key f8 = new Key { code = 119, name = "F8" };
        public static Key f9 = new Key { code = 120, name = "F9" };
        public static Key f10 = new Key { code = 121, name = "F10" };
        public static Key f11 = new Key { code = 122, name = "F11" };
        public static Key f12 = new Key { code = 123, name = "F12" };
        public static Key numLock = new Key { code = 144, name = "Num Lock" };
        public static Key scrollLock = new Key { code = 145, name = "Scroll Lock" };
        public static Key semiColon = new Key { code = 186, name = ";" };
        public static Key equal = new Key { code = 187, name = "=" };
        public static Key comma = new Key { code = 188, name = "," };
        public static Key dash = new Key { code = 189, name = "-" };
        public static Key period = new Key { code = 190, name = "." };
        public static Key slash = new Key { code = 191, name = "/" };
        public static Key graveAccent = new Key { code = 192, name = "`" };
        public static Key openBracket = new Key { code = 219, name = "[" };
        public static Key backSlash = new Key { code = 220, name = @"\" };
        public static Key closeBracket = new Key { code = 221, name = "]" };
        public static Key singleQuote = new Key { code = 222, name = "'" };

        public Key[] _keys = new Key[]
        {
            backspace,
            tab,
            enter,
            shift,
            ctrl,
            alt,
            pause,
            capsLock,
            esc,
            pgUp,
            pgDn,
            end,
            home,
            left,
            up,
            right,
            down,
            insert,
            delete,
            _0, _1, _2, _3, _4, _5, _6, _7, _8, _9,
            a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z,
            leftWin, rightWin, select,
            pad0, pad1, pad2, pad3, pad4, pad5, pad6, pad7, pad8, pad9, padAdd, padDivide, padDot, padMultiply, padSubtract,
            f1, f2, f3, f4, f5, f5, f6, f7, f8, f9, f10, f11, f12,
            numLock, scrollLock, semiColon, equal, comma, dash, period, graveAccent, openBracket, backSlash, closeBracket, singleQuote
        };

        private static Keyboard _singleton = new Keyboard();

        public static Key getKey(int code)
        {
            for (int i = 0; i < _singleton._keys.length; i++)
            {
                if (_singleton._keys[i].code != code) continue;
                return _singleton._keys[i];
            }

            return null;
        }
    }
}
