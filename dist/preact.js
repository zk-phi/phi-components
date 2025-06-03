import { jsxs as y, jsx as s } from "preact/jsx-runtime";
import { options as A } from "preact";
var a, u, i, l, f = 0, N = [], n = A, v = n.__b, p = n.__r, H = n.diffed, d = n.__c, g = n.unmount, b = n.__;
function F(_, t) {
  n.__h && n.__h(u, _, f || t), f = 0;
  var o = u.__H || (u.__H = { __: [], __h: [] });
  return _ >= o.__.length && o.__.push({}), o.__[_];
}
function T(_, t) {
  var o = F(a++, 7);
  return $(o.__H, t) && (o.__ = _(), o.__H = t, o.__h = _), o.__;
}
function q(_, t) {
  return f = 8, T(function() {
    return _;
  }, t);
}
function k() {
  for (var _; _ = N.shift(); ) if (_.__P && _.__H) try {
    _.__H.__h.forEach(e), _.__H.__h.forEach(h), _.__H.__h = [];
  } catch (t) {
    _.__H.__h = [], n.__e(t, _.__v);
  }
}
n.__b = function(_) {
  u = null, v && v(_);
}, n.__ = function(_, t) {
  _ && t.__k && t.__k.__m && (_.__m = t.__k.__m), b && b(_, t);
}, n.__r = function(_) {
  p && p(_), a = 0;
  var t = (u = _.__c).__H;
  t && (i === u ? (t.__h = [], u.__h = [], t.__.forEach(function(o) {
    o.__N && (o.__ = o.__N), o.u = o.__N = void 0;
  })) : (t.__h.forEach(e), t.__h.forEach(h), t.__h = [], a = 0)), i = u;
}, n.diffed = function(_) {
  H && H(_);
  var t = _.__c;
  t && t.__H && (t.__H.__h.length && (N.push(t) !== 1 && l === n.requestAnimationFrame || ((l = n.requestAnimationFrame) || B)(k)), t.__H.__.forEach(function(o) {
    o.u && (o.__H = o.u), o.u = void 0;
  })), i = u = null;
}, n.__c = function(_, t) {
  t.some(function(o) {
    try {
      o.__h.forEach(e), o.__h = o.__h.filter(function(r) {
        return !r.__ || h(r);
      });
    } catch (r) {
      t.some(function(c) {
        c.__h && (c.__h = []);
      }), t = [], n.__e(r, o.__v);
    }
  }), d && d(_, t);
}, n.unmount = function(_) {
  g && g(_);
  var t, o = _.__c;
  o && o.__H && (o.__H.__.forEach(function(r) {
    try {
      e(r);
    } catch (c) {
      t = c;
    }
  }), o.__H = void 0, t && n.__e(t, o.__v));
};
var E = typeof requestAnimationFrame == "function";
function B(_) {
  var t, o = function() {
    clearTimeout(r), E && cancelAnimationFrame(t), setTimeout(_);
  }, r = setTimeout(o, 35);
  E && (t = requestAnimationFrame(o));
}
function e(_) {
  var t = u, o = _.__c;
  typeof o == "function" && (_.__c = void 0, o()), u = t;
}
function h(_) {
  var t = u;
  _.__c = _.__(), u = t;
}
function $(_, t) {
  return !_ || _.length !== t.length || t.some(function(o, r) {
    return o !== _[r];
  });
}
const D = ({
  onClick: _,
  danger: t,
  variant: o = "default",
  icon: r,
  children: c
}) => {
  const x = q((m) => {
    _(), m.preventDefault(), m.stopPropagation();
  }, [_]);
  return /* @__PURE__ */ y(
    "button",
    {
      className: `phi-button ${o} ${t ? "danger" : ""}`,
      onClick: x,
      children: [
        r && /* @__PURE__ */ s("span", { className: "icon", children: r }),
        c
      ]
    }
  );
}, w = ({
  onClick: _,
  danger: t,
  children: o
}) => {
  const r = q((c) => {
    _(), c.preventDefault(), c.stopPropagation();
  }, [_]);
  return /* @__PURE__ */ s(
    "button",
    {
      className: `phi-icon-button ${t ? "danger" : ""}`,
      onClick: r,
      children: o
    }
  );
}, z = ({
  onClick: _,
  danger: t,
  children: o
}) => /* @__PURE__ */ s(
  "button",
  {
    className: `phi-text-button ${t ? "danger" : ""}`,
    onClick: _,
    children: o
  }
);
export {
  D as Button,
  w as IconButton,
  z as TextButton
};
//# sourceMappingURL=preact.js.map
