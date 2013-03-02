using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Html;

namespace Ventajou.Gaming.UI.InGame
{
    public abstract class MenuItem : IDisposable
    {
        public abstract bool canFocus { get; }

        public abstract void render(HTMLElement parent);

        public virtual void Dispose()
        {
        }

        public virtual void focus()
        {
        }

        public virtual bool focused()
        {
            return false;
        }
    }
}
