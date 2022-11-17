var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var n$1, l$3, u$3, t$2, o$3, r$2, e$2 = {}, c$3 = [], s$2 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function a$3(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
function h$1(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
function v$1(l2, u2, i2) {
  var t2, o2, r2, f2 = {};
  for (r2 in u2)
    r2 == "key" ? t2 = u2[r2] : r2 == "ref" ? o2 = u2[r2] : f2[r2] = u2[r2];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n$1.call(arguments, 2) : i2), typeof l2 == "function" && l2.defaultProps != null)
    for (r2 in l2.defaultProps)
      f2[r2] === void 0 && (f2[r2] = l2.defaultProps[r2]);
  return y$1(l2, f2, t2, o2, null);
}
function y$1(n2, i2, t2, o2, r2) {
  var f2 = { type: n2, props: i2, key: t2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r2 == null ? ++u$3 : r2 };
  return r2 == null && l$3.vnode != null && l$3.vnode(f2), f2;
}
function d$1(n2) {
  return n2.children;
}
function _$2(n2, l2) {
  this.props = n2, this.context = l2;
}
function k$1(n2, l2) {
  if (l2 == null)
    return n2.__ ? k$1(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if ((u2 = n2.__k[l2]) != null && u2.__e != null)
      return u2.__e;
  return typeof n2.type == "function" ? k$1(n2) : null;
}
function b$1(n2) {
  var l2, u2;
  if ((n2 = n2.__) != null && n2.__c != null) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if ((u2 = n2.__k[l2]) != null && u2.__e != null) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return b$1(n2);
  }
}
function m$1(n2) {
  (!n2.__d && (n2.__d = true) && t$2.push(n2) && !g$1.__r++ || r$2 !== l$3.debounceRendering) && ((r$2 = l$3.debounceRendering) || o$3)(g$1);
}
function g$1() {
  for (var n2; g$1.__r = t$2.length; )
    n2 = t$2.sort(function(n3, l2) {
      return n3.__v.__b - l2.__v.__b;
    }), t$2 = [], n2.some(function(n3) {
      var l2, u2, i2, t2, o2, r2;
      n3.__d && (o2 = (t2 = (l2 = n3).__v).__e, (r2 = l2.__P) && (u2 = [], (i2 = a$3({}, t2)).__v = t2.__v + 1, j$1(r2, t2, i2, l2.__n, r2.ownerSVGElement !== void 0, t2.__h != null ? [o2] : null, u2, o2 == null ? k$1(t2) : o2, t2.__h), z(u2, t2), t2.__e != o2 && b$1(t2)));
    });
}
function w(n2, l2, u2, i2, t2, o2, r2, f2, s2, a2) {
  var h2, v2, p2, _2, b2, m2, g2, w2 = i2 && i2.__k || c$3, A2 = w2.length;
  for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
    if ((_2 = u2.__k[h2] = (_2 = l2[h2]) == null || typeof _2 == "boolean" ? null : typeof _2 == "string" || typeof _2 == "number" || typeof _2 == "bigint" ? y$1(null, _2, null, null, _2) : Array.isArray(_2) ? y$1(d$1, { children: _2 }, null, null, null) : _2.__b > 0 ? y$1(_2.type, _2.props, _2.key, null, _2.__v) : _2) != null) {
      if (_2.__ = u2, _2.__b = u2.__b + 1, (p2 = w2[h2]) === null || p2 && _2.key == p2.key && _2.type === p2.type)
        w2[h2] = void 0;
      else
        for (v2 = 0; v2 < A2; v2++) {
          if ((p2 = w2[v2]) && _2.key == p2.key && _2.type === p2.type) {
            w2[v2] = void 0;
            break;
          }
          p2 = null;
        }
      j$1(n2, _2, p2 = p2 || e$2, t2, o2, r2, f2, s2, a2), b2 = _2.__e, (v2 = _2.ref) && p2.ref != v2 && (g2 || (g2 = []), p2.ref && g2.push(p2.ref, null, _2), g2.push(v2, _2.__c || b2, _2)), b2 != null ? (m2 == null && (m2 = b2), typeof _2.type == "function" && _2.__k === p2.__k ? _2.__d = s2 = x$1(_2, s2, n2) : s2 = P(n2, _2, p2, w2, b2, s2), typeof u2.type == "function" && (u2.__d = s2)) : s2 && p2.__e == s2 && s2.parentNode != n2 && (s2 = k$1(p2));
    }
  for (u2.__e = m2, h2 = A2; h2--; )
    w2[h2] != null && (typeof u2.type == "function" && w2[h2].__e != null && w2[h2].__e == u2.__d && (u2.__d = k$1(i2, h2 + 1)), N(w2[h2], w2[h2]));
  if (g2)
    for (h2 = 0; h2 < g2.length; h2++)
      M(g2[h2], g2[++h2], g2[++h2]);
}
function x$1(n2, l2, u2) {
  for (var i2, t2 = n2.__k, o2 = 0; t2 && o2 < t2.length; o2++)
    (i2 = t2[o2]) && (i2.__ = n2, l2 = typeof i2.type == "function" ? x$1(i2, l2, u2) : P(u2, i2, i2, t2, i2.__e, l2));
  return l2;
}
function P(n2, l2, u2, i2, t2, o2) {
  var r2, f2, e2;
  if (l2.__d !== void 0)
    r2 = l2.__d, l2.__d = void 0;
  else if (u2 == null || t2 != o2 || t2.parentNode == null)
    n:
      if (o2 == null || o2.parentNode !== n2)
        n2.appendChild(t2), r2 = null;
      else {
        for (f2 = o2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 2)
          if (f2 == t2)
            break n;
        n2.insertBefore(t2, o2), r2 = o2;
      }
  return r2 !== void 0 ? r2 : t2.nextSibling;
}
function C(n2, l2, u2, i2, t2) {
  var o2;
  for (o2 in u2)
    o2 === "children" || o2 === "key" || o2 in l2 || H(n2, o2, null, u2[o2], i2);
  for (o2 in l2)
    t2 && typeof l2[o2] != "function" || o2 === "children" || o2 === "key" || o2 === "value" || o2 === "checked" || u2[o2] === l2[o2] || H(n2, o2, l2[o2], u2[o2], i2);
}
function $(n2, l2, u2) {
  l2[0] === "-" ? n2.setProperty(l2, u2) : n2[l2] = u2 == null ? "" : typeof u2 != "number" || s$2.test(l2) ? u2 : u2 + "px";
}
function H(n2, l2, u2, i2, t2) {
  var o2;
  n:
    if (l2 === "style")
      if (typeof u2 == "string")
        n2.style.cssText = u2;
      else {
        if (typeof i2 == "string" && (n2.style.cssText = i2 = ""), i2)
          for (l2 in i2)
            u2 && l2 in u2 || $(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            i2 && u2[l2] === i2[l2] || $(n2.style, l2, u2[l2]);
      }
    else if (l2[0] === "o" && l2[1] === "n")
      o2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? i2 || n2.addEventListener(l2, o2 ? T : I, o2) : n2.removeEventListener(l2, o2 ? T : I, o2);
    else if (l2 !== "dangerouslySetInnerHTML") {
      if (t2)
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (l2 !== "href" && l2 !== "list" && l2 !== "form" && l2 !== "tabIndex" && l2 !== "download" && l2 in n2)
        try {
          n2[l2] = u2 == null ? "" : u2;
          break n;
        } catch (n3) {
        }
      typeof u2 == "function" || (u2 != null && (u2 !== false || l2[0] === "a" && l2[1] === "r") ? n2.setAttribute(l2, u2) : n2.removeAttribute(l2));
    }
}
function I(n2) {
  this.l[n2.type + false](l$3.event ? l$3.event(n2) : n2);
}
function T(n2) {
  this.l[n2.type + true](l$3.event ? l$3.event(n2) : n2);
}
function j$1(n2, u2, i2, t2, o2, r2, f2, e2, c2) {
  var s2, h2, v2, y2, p2, k2, b2, m2, g2, x2, A2, P2 = u2.type;
  if (u2.constructor !== void 0)
    return null;
  i2.__h != null && (c2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, r2 = [e2]), (s2 = l$3.__b) && s2(u2);
  try {
    n:
      if (typeof P2 == "function") {
        if (m2 = u2.props, g2 = (s2 = P2.contextType) && t2[s2.__c], x2 = s2 ? g2 ? g2.props.value : s2.__ : t2, i2.__c ? b2 = (h2 = u2.__c = i2.__c).__ = h2.__E : ("prototype" in P2 && P2.prototype.render ? u2.__c = h2 = new P2(m2, x2) : (u2.__c = h2 = new _$2(m2, x2), h2.constructor = P2, h2.render = O), g2 && g2.sub(h2), h2.props = m2, h2.state || (h2.state = {}), h2.context = x2, h2.__n = t2, v2 = h2.__d = true, h2.__h = []), h2.__s == null && (h2.__s = h2.state), P2.getDerivedStateFromProps != null && (h2.__s == h2.state && (h2.__s = a$3({}, h2.__s)), a$3(h2.__s, P2.getDerivedStateFromProps(m2, h2.__s))), y2 = h2.props, p2 = h2.state, v2)
          P2.getDerivedStateFromProps == null && h2.componentWillMount != null && h2.componentWillMount(), h2.componentDidMount != null && h2.__h.push(h2.componentDidMount);
        else {
          if (P2.getDerivedStateFromProps == null && m2 !== y2 && h2.componentWillReceiveProps != null && h2.componentWillReceiveProps(m2, x2), !h2.__e && h2.shouldComponentUpdate != null && h2.shouldComponentUpdate(m2, h2.__s, x2) === false || u2.__v === i2.__v) {
            h2.props = m2, h2.state = h2.__s, u2.__v !== i2.__v && (h2.__d = false), h2.__v = u2, u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n3) {
              n3 && (n3.__ = u2);
            }), h2.__h.length && f2.push(h2);
            break n;
          }
          h2.componentWillUpdate != null && h2.componentWillUpdate(m2, h2.__s, x2), h2.componentDidUpdate != null && h2.__h.push(function() {
            h2.componentDidUpdate(y2, p2, k2);
          });
        }
        h2.context = x2, h2.props = m2, h2.state = h2.__s, (s2 = l$3.__r) && s2(u2), h2.__d = false, h2.__v = u2, h2.__P = n2, s2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s, h2.getChildContext != null && (t2 = a$3(a$3({}, t2), h2.getChildContext())), v2 || h2.getSnapshotBeforeUpdate == null || (k2 = h2.getSnapshotBeforeUpdate(y2, p2)), A2 = s2 != null && s2.type === d$1 && s2.key == null ? s2.props.children : s2, w(n2, Array.isArray(A2) ? A2 : [A2], u2, i2, t2, o2, r2, f2, e2, c2), h2.base = u2.__e, u2.__h = null, h2.__h.length && f2.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = false;
      } else
        r2 == null && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = L(i2.__e, u2, i2, t2, o2, r2, f2, c2);
    (s2 = l$3.diffed) && s2(u2);
  } catch (n3) {
    u2.__v = null, (c2 || r2 != null) && (u2.__e = e2, u2.__h = !!c2, r2[r2.indexOf(e2)] = null), l$3.__e(n3, u2, i2);
  }
}
function z(n2, u2) {
  l$3.__c && l$3.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$3.__e(n3, u3.__v);
    }
  });
}
function L(l2, u2, i2, t2, o2, r2, f2, c2) {
  var s2, a2, v2, y2 = i2.props, p2 = u2.props, d2 = u2.type, _2 = 0;
  if (d2 === "svg" && (o2 = true), r2 != null) {
    for (; _2 < r2.length; _2++)
      if ((s2 = r2[_2]) && "setAttribute" in s2 == !!d2 && (d2 ? s2.localName === d2 : s2.nodeType === 3)) {
        l2 = s2, r2[_2] = null;
        break;
      }
  }
  if (l2 == null) {
    if (d2 === null)
      return document.createTextNode(p2);
    l2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), r2 = null, c2 = false;
  }
  if (d2 === null)
    y2 === p2 || c2 && l2.data === p2 || (l2.data = p2);
  else {
    if (r2 = r2 && n$1.call(l2.childNodes), a2 = (y2 = i2.props || e$2).dangerouslySetInnerHTML, v2 = p2.dangerouslySetInnerHTML, !c2) {
      if (r2 != null)
        for (y2 = {}, _2 = 0; _2 < l2.attributes.length; _2++)
          y2[l2.attributes[_2].name] = l2.attributes[_2].value;
      (v2 || a2) && (v2 && (a2 && v2.__html == a2.__html || v2.__html === l2.innerHTML) || (l2.innerHTML = v2 && v2.__html || ""));
    }
    if (C(l2, p2, y2, o2, c2), v2)
      u2.__k = [];
    else if (_2 = u2.props.children, w(l2, Array.isArray(_2) ? _2 : [_2], u2, i2, t2, o2 && d2 !== "foreignObject", r2, f2, r2 ? r2[0] : i2.__k && k$1(i2, 0), c2), r2 != null)
      for (_2 = r2.length; _2--; )
        r2[_2] != null && h$1(r2[_2]);
    c2 || ("value" in p2 && (_2 = p2.value) !== void 0 && (_2 !== l2.value || d2 === "progress" && !_2 || d2 === "option" && _2 !== y2.value) && H(l2, "value", _2, y2.value, false), "checked" in p2 && (_2 = p2.checked) !== void 0 && _2 !== l2.checked && H(l2, "checked", _2, y2.checked, false));
  }
  return l2;
}
function M(n2, u2, i2) {
  try {
    typeof n2 == "function" ? n2(u2) : n2.current = u2;
  } catch (n3) {
    l$3.__e(n3, i2);
  }
}
function N(n2, u2, i2) {
  var t2, o2;
  if (l$3.unmount && l$3.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || M(t2, null, u2)), (t2 = n2.__c) != null) {
    if (t2.componentWillUnmount)
      try {
        t2.componentWillUnmount();
      } catch (n3) {
        l$3.__e(n3, u2);
      }
    t2.base = t2.__P = null;
  }
  if (t2 = n2.__k)
    for (o2 = 0; o2 < t2.length; o2++)
      t2[o2] && N(t2[o2], u2, typeof n2.type != "function");
  i2 || n2.__e == null || h$1(n2.__e), n2.__e = n2.__d = void 0;
}
function O(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function S(u2, i2, t2) {
  var o2, r2, f2;
  l$3.__ && l$3.__(u2, i2), r2 = (o2 = typeof t2 == "function") ? null : t2 && t2.__k || i2.__k, f2 = [], j$1(i2, u2 = (!o2 && t2 || i2).__k = v$1(d$1, null, [u2]), r2 || e$2, e$2, i2.ownerSVGElement !== void 0, !o2 && t2 ? [t2] : r2 ? null : i2.firstChild ? n$1.call(i2.childNodes) : null, f2, !o2 && t2 ? t2 : r2 ? r2.__e : i2.firstChild, o2), z(f2, u2);
}
n$1 = c$3.slice, l$3 = { __e: function(n2, l2, u2, i2) {
  for (var t2, o2, r2; l2 = l2.__; )
    if ((t2 = l2.__c) && !t2.__)
      try {
        if ((o2 = t2.constructor) && o2.getDerivedStateFromError != null && (t2.setState(o2.getDerivedStateFromError(n2)), r2 = t2.__d), t2.componentDidCatch != null && (t2.componentDidCatch(n2, i2 || {}), r2 = t2.__d), r2)
          return t2.__E = t2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u$3 = 0, _$2.prototype.setState = function(n2, l2) {
  var u2;
  u2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = a$3({}, this.state), typeof n2 == "function" && (n2 = n2(a$3({}, u2), this.props)), n2 && a$3(u2, n2), n2 != null && this.__v && (l2 && this.__h.push(l2), m$1(this));
}, _$2.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), m$1(this));
}, _$2.prototype.render = d$1, t$2 = [], o$3 = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g$1.__r = 0;
var classnames = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(module) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames2() {
      var classes = [];
      for (var i2 = 0; i2 < arguments.length; i2++) {
        var arg = arguments[i2];
        if (!arg)
          continue;
        var argType = typeof arg;
        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames2.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === "object") {
          if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
            classes.push(arg.toString());
            continue;
          }
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }
      return classes.join(" ");
    }
    if (module.exports) {
      classNames2.default = classNames2;
      module.exports = classNames2;
    } else {
      window.classNames = classNames2;
    }
  })();
})(classnames);
var classNames = classnames.exports;
var o$2;
!function(t2) {
  t2.Promise = "Error: Promises cannot be used for SSR", t2.Missing = "Error: Cannot find component in provided function", t2.Json = "Error: Invalid JSON string passed to component";
}(o$2 || (o$2 = {}));
const r$1 = (t2) => t2 && typeof t2.then == "function", s$1 = ["area", "base", "br", "col", "hr", "img", "input", "link", "meta", "source", "embed", "param", "track", "wbr"];
function i$2(t2) {
  const { tagName: e2 } = this, { formatProps: n2 } = this.__options;
  let r2 = {};
  try {
    r2 = JSON.parse(t2);
  } catch {
    console.error(o$2.Json, `: <${e2.toLowerCase()}>`);
  }
  return n2 && (r2 = n2(r2)), r2;
}
function c$2(t2) {
  const e2 = {};
  if (!(t2 == null ? void 0 : t2.length))
    return e2;
  for (let n2 = t2.length - 1; n2 >= 0; n2--) {
    const o2 = t2[n2];
    e2[o2.name] = o2.value;
  }
  return e2;
}
function l$2(t2) {
  const e2 = t2.trim().replace(/[\s_]/g, "-");
  return e2.charAt(0).toLowerCase() + e2.slice(1).replace(/-([a-z])/g, ({ 1: t3 }) => t3.toUpperCase());
}
function a$2() {
  const { attributes: t2 = [] } = this.__options;
  return this.hasAttributes() ? function(t3, e2) {
    const n2 = c$2(t3);
    let o2 = {};
    for (const t4 of Object.keys(n2))
      (e2 == null ? void 0 : e2.indexOf(t4)) !== -1 && (o2[l$2(t4)] = n2[t4]);
    return o2;
  }(this.attributes, t2) : {};
}
function p() {
  const t2 = function(t3) {
    const e3 = `<!DOCTYPE html>
<html><body>${t3}</body></html>`;
    let n2;
    try {
      n2 = new DOMParser().parseFromString(e3, "text/html");
    } catch {
    }
    if (n2)
      return n2.body;
  }(this.innerHTML);
  if (!t2)
    return;
  const e2 = u$2.call(this, t2);
  return () => e2;
}
function u$2(n2) {
  var _a;
  if (n2.nodeType === 3)
    return ((_a = n2.textContent) == null ? void 0 : _a.trim()) || "";
  if (n2.nodeType !== 1)
    return null;
  const o2 = String(n2.nodeName).toLowerCase(), r2 = Array.from(n2.childNodes), i2 = () => r2.map((t2) => u$2.call(this, t2)), _b = c$2(n2.attributes), { slot: a2 } = _b, p2 = __objRest(_b, ["slot"]);
  return o2 === "script" ? null : o2 === "body" ? v$1(d$1, {}, i2()) : s$1.includes(o2) ? v$1(o2, p2) : a2 ? (this.__slots[l$2(a2)] = function(n3) {
    return n3.every((t2) => typeof t2 == "string") ? n3.join(" ") : v$1(d$1, {}, n3);
  }(i2()), null) : v$1(o2, p2, i2());
}
function h(e2, n2, s2 = {}) {
  const { wrapComponent: i2 } = s2, c2 = typeof window == "undefined", l2 = function(t2) {
    let e3 = t2.toLowerCase();
    return e3.indexOf("-") < 0 && (e3 = "component-" + e3), e3;
  }(e2);
  if (!c2)
    return void customElements.define(l2, function(t2, e3 = {}) {
      var n3;
      const { attributes: o2 = [], formAssociated: r2 = false } = e3;
      if (typeof Reflect != "undefined" && Reflect.construct) {
        const n4 = function() {
          const o3 = Reflect.construct(HTMLElement, [], n4);
          return o3.__mounted = false, o3.__component = t2, o3.__properties = {}, o3.__slots = {}, o3.__children = void 0, o3.__options = e3, o3;
        };
        return n4.observedAttributes = ["props", ...o2], n4.formAssociated = r2, n4.prototype = Object.create(HTMLElement.prototype), n4.prototype.constructor = n4, n4.prototype.connectedCallback = _$1, n4.prototype.attributeChangedCallback = d, n4.prototype.disconnectedCallback = f$1, n4;
      }
      return n3 = class extends HTMLElement {
        constructor(...n4) {
          super(...n4), this.__mounted = false, this.__component = t2, this.__properties = {}, this.__slots = {}, this.__children = void 0, this.__options = e3;
        }
        connectedCallback() {
          _$1.call(this);
        }
        attributeChangedCallback() {
          d.call(this, ...[].slice.call(arguments));
        }
        disconnectedCallback() {
          f$1.call(this);
        }
      }, n3.observedAttributes = ["props", ...o2], n3.formAssociated = r2, n3;
    }(n2, s2));
  const a2 = n2();
  if (r$1(a2))
    throw new Error(`${o$2.Promise} : <${e2}>`);
  let p2 = a2;
  return i2 && (p2 = i2(a2)), (e3) => v$1(l2, { server: true }, [v$1("script", { type: "application/json", dangerouslySetInnerHTML: { __html: JSON.stringify(e3) } }), v$1(p2, e3)]);
}
function _$1() {
  const e2 = a$2.call(this), n2 = this.getAttribute("props"), o2 = this.querySelector('[type="application/json"]'), s2 = i$2.call(this, n2 || (o2 == null ? void 0 : o2.innerHTML) || "{}");
  o2 == null ? void 0 : o2.remove();
  let c2 = this.__children;
  this.__mounted || this.hasAttribute("server") || (c2 = v$1(p.call(this), {})), this.__properties = __spreadValues(__spreadValues(__spreadValues({}, this.__slots), s2), e2), this.__children = c2 || [], this.removeAttribute("server"), this.innerHTML = "";
  const l2 = this.__component(), u2 = (t2) => m.call(this, t2);
  var h2, _2;
  r$1(l2) ? (h2 = l2, _2 = this.tagName, h2.then((t2) => function(t3, e3) {
    let n3;
    return typeof t3 == "function" ? t3 : (typeof t3 == "object" && (n3 = t3[o3 = e3, (o3 = o3.toLowerCase()).replace(/(^\w|-\w)/g, (t4) => t4.replace(/-/, "").toUpperCase())] || void 0), n3);
    var o3;
  }(t2, _2))).then(u2) : u2(l2);
}
function d(e2, o2, r2) {
  if (!this.__mounted)
    return;
  r2 = r2 == null ? void 0 : r2;
  let s2 = this.__properties;
  e2 === "props" ? s2 = __spreadValues(__spreadValues({}, s2), i$2.call(this, r2)) : s2[l$2(e2)] = r2, this.__properties = s2, S(v$1(this.__instance, __spreadProps(__spreadValues({}, s2), { parent: this, children: this.__children })), this);
}
function f$1() {
  S(null, this);
}
function m(e2) {
  const { tagName: r2 } = this, { wrapComponent: s2 } = this.__options;
  if (!e2)
    return void console.error(o$2.Missing, `: <${r2.toLowerCase()}>`);
  s2 && (e2 = s2(e2)), this.__instance = e2, this.__mounted = true;
  const i2 = __spreadProps(__spreadValues({}, this.__properties), { parent: this, children: this.__children });
  S(v$1(e2, i2), this);
}
const font = "'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif";
const color = {
  fg: "#333333",
  distantFg: "#ffffff",
  bg: "#ffffff",
  border: "#aaaaaa",
  primaryActive: "#de9e00",
  primary: "#eeaa00",
  primaryHover: "#ffb81c",
  dangerActive: "#ff3a45",
  danger: "#ff6261",
  dangerHover: "#ff7f7a"
};
const boxShadow = {
  primary: "0 0 0 2px rgba(238, 170, 0, 0.2)",
  danger: "0 0 0 2px rgba(255, 98, 97, 0.2)"
};
const borderRadius = {
  md: "8px"
};
const padding = {
  minimal: "4px",
  sm: "5.6px 7.84px",
  md: "10.5px 14px"
};
const spacing = {
  minimal: "3.5px",
  inline: "5.25px "
};
const fontSize = {
  smallIcon: "16px",
  md: "14px",
  icon: "26px"
};
const pressable = {
  boxShadow: "0 1px rgba(0, 0, 0, 0.1)",
  "&:active": {
    boxShadow: "none",
    transform: "translateY(1px)"
  }
};
const clickable = (color2) => ({
  "&:active": {
    color: color2,
    backgroundColor: "rgba(238, 170, 0, 0.1)"
  }
});
let e$1 = { data: "" }, t$1 = (t2) => typeof window == "object" ? ((t2 ? t2.querySelector("#_goober") : window._goober) || Object.assign((t2 || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : t2 || e$1, l$1 = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, a$1 = /\/\*[^]*?\*\/|\s\s+|\n/g, n = (e2, t2) => {
  let r2 = "", l2 = "", a2 = "";
  for (let o2 in e2) {
    let s2 = e2[o2];
    o2[0] == "@" ? o2[1] == "i" ? r2 = o2 + " " + s2 + ";" : l2 += o2[1] == "f" ? n(s2, o2) : o2 + "{" + n(s2, o2[1] == "k" ? "" : t2) + "}" : typeof s2 == "object" ? l2 += n(s2, t2 ? t2.replace(/([^,])+/g, (e3) => o2.replace(/(^:.*)|([^,])+/g, (t3) => /&/.test(t3) ? t3.replace(/&/g, e3) : e3 ? e3 + " " + t3 : t3)) : o2) : s2 != null && (o2 = /^--/.test(o2) ? o2 : o2.replace(/[A-Z]/g, "-$&").toLowerCase(), a2 += n.p ? n.p(o2, s2) : o2 + ":" + s2 + ";");
  }
  return r2 + (t2 && a2 ? t2 + "{" + a2 + "}" : a2) + l2;
}, o$1 = {}, s = (e2) => {
  if (typeof e2 == "object") {
    let t2 = "";
    for (let r2 in e2)
      t2 += r2 + s(e2[r2]);
    return t2;
  }
  return e2;
}, c$1 = (e2, t2, r2, c2, i2) => {
  let u2 = s(e2), p2 = o$1[u2] || (o$1[u2] = ((e3) => {
    let t3 = 0, r3 = 11;
    for (; t3 < e3.length; )
      r3 = 101 * r3 + e3.charCodeAt(t3++) >>> 0;
    return "go" + r3;
  })(u2));
  if (!o$1[p2]) {
    let t3 = u2 !== e2 ? e2 : ((e3) => {
      let t4, r3 = [{}];
      for (; t4 = l$1.exec(e3.replace(a$1, "")); )
        t4[4] ? r3.shift() : t4[3] ? r3.unshift(r3[0][t4[3]] = r3[0][t4[3]] || {}) : r3[0][t4[1]] = t4[2];
      return r3[0];
    })(e2);
    o$1[p2] = n(i2 ? { ["@keyframes " + p2]: t3 } : t3, r2 ? "" : "." + p2);
  }
  return ((e3, t3, r3) => {
    t3.data.indexOf(e3) == -1 && (t3.data = r3 ? e3 + t3.data : t3.data + e3);
  })(o$1[p2], t2, c2), p2;
}, i$1 = (e2, t2, r2) => e2.reduce((e3, l2, a2) => {
  let o2 = t2[a2];
  if (o2 && o2.call) {
    let e4 = o2(r2), t3 = e4 && e4.props && e4.props.className || /^go/.test(e4) && e4;
    o2 = t3 ? "." + t3 : e4 && typeof e4 == "object" ? e4.props ? "" : n(e4, "") : e4 === false ? "" : e4;
  }
  return e3 + l2 + (o2 == null ? "" : o2);
}, "");
function u$1(e2) {
  let r2 = this || {}, l2 = e2.call ? e2(r2.p) : e2;
  return c$1(l2.unshift ? l2.raw ? i$1(l2, [].slice.call(arguments, 1), r2.p) : l2.reduce((e3, t2) => Object.assign(e3, t2 && t2.call ? t2(r2.p) : t2), {}) : l2, t$1(r2.target), r2.g, r2.o, r2.k);
}
u$1.bind({ g: 1 });
u$1.bind({ k: 1 });
const buttonStyle = u$1({
  "--baseAccent": color.primary,
  "--hoverAccent": color.primaryHover,
  "--activeAccent": color.primaryActive,
  "&.danger": {
    "--baseAccent": color.danger,
    "--hoverAccent": color.dangerHover,
    "--activeAccent": color.dangerActive
  },
  fontFamily: font,
  outline: "none",
  lineHeight: 1,
  cursor: "pointer",
  textAlign: "center",
  fontSize: fontSize.md,
  "&.primary": __spreadProps(__spreadValues({
    padding: padding.md,
    borderRadius: borderRadius.md,
    color: color.distantFg,
    background: "var(--baseAccent)",
    border: "1px solid var(--baseAccent)"
  }, pressable), {
    "&:hover": {
      color: color.distantFg,
      background: "var(--hoverAccent)",
      border: "1px solid var(--hoverAccent)"
    }
  }),
  "&.default": __spreadProps(__spreadValues({
    padding: padding.md,
    borderRadius: borderRadius.md,
    color: color.fg,
    background: "transparent",
    border: "1px solid currentColor"
  }, pressable), {
    "&:hover": {
      color: "var(--baseAccent)"
    }
  }),
  "&.dotted": __spreadProps(__spreadValues({
    padding: padding.md,
    borderRadius: borderRadius.md,
    color: color.fg,
    background: "transparent",
    border: "1px dashed currentColor"
  }, clickable("var(--activeAccent)")), {
    "&:hover:not(:active)": {
      color: "var(--baseAccent)"
    }
  }),
  "&.text": __spreadProps(__spreadValues({
    padding: 0,
    borderRadius: 0,
    color: color.fg,
    background: "transparent",
    border: "none",
    borderBottom: "1px dotted currentColor"
  }, clickable("var(--activeAccent)")), {
    "&:hover:not(:active)": {
      color: "var(--baseAccent)"
    }
  }),
  "&.icon": __spreadProps(__spreadValues({
    color: color.border,
    display: "inline-block",
    padding: padding.minimal,
    fontSize: fontSize.icon,
    lineHeight: 1,
    background: "transparent",
    border: "none",
    borderRadius: "50%"
  }, clickable("var(--activeAccent)")), {
    "&:hover:not(:active)": {
      color: "var(--baseAccent)"
    }
  })
});
const iconStyle$g = u$1({
  display: "inline-block",
  fontSize: fontSize.smallIcon,
  lineHeight: 0,
  marginRight: spacing.minimal,
  verticalAlign: "-0.05em"
});
const Button = ({
  icon,
  children,
  variant = "default",
  danger = false,
  onClick
}) => {
  const isDanger = danger || danger === "";
  const className = classNames([buttonStyle, variant, { danger: isDanger }]);
  return /* @__PURE__ */ v$1("button", {
    class: className,
    onClick
  }, icon && /* @__PURE__ */ v$1("span", {
    class: iconStyle$g
  }, icon), children);
};
const register$3 = () => {
  h("phi-button", () => Button, {
    attributes: ["variant", "danger"]
  });
};
var t, u, r, o = 0, i = [], c = l$3.__b, f = l$3.__r, e = l$3.diffed, a = l$3.__c, v = l$3.unmount;
function l(t2, r2) {
  l$3.__h && l$3.__h(u, t2, o || r2), o = 0;
  var i2 = u.__H || (u.__H = { __: [], __h: [] });
  return t2 >= i2.__.length && i2.__.push({}), i2.__[t2];
}
function y(r2, o2) {
  var i2 = l(t++, 3);
  !l$3.__s && k(i2.__H, o2) && (i2.__ = r2, i2.__H = o2, u.__H.__h.push(i2));
}
function _(n2, u2) {
  var r2 = l(t++, 7);
  return k(r2.__H, u2) && (r2.__ = n2(), r2.__H = u2, r2.__h = n2), r2.__;
}
function A(n2, t2) {
  return o = 8, _(function() {
    return n2;
  }, t2);
}
function x() {
  for (var t2; t2 = i.shift(); )
    if (t2.__P)
      try {
        t2.__H.__h.forEach(g), t2.__H.__h.forEach(j), t2.__H.__h = [];
      } catch (u2) {
        t2.__H.__h = [], l$3.__e(u2, t2.__v);
      }
}
l$3.__b = function(n2) {
  u = null, c && c(n2);
}, l$3.__r = function(n2) {
  f && f(n2), t = 0;
  var r2 = (u = n2.__c).__H;
  r2 && (r2.__h.forEach(g), r2.__h.forEach(j), r2.__h = []);
}, l$3.diffed = function(t2) {
  e && e(t2);
  var o2 = t2.__c;
  o2 && o2.__H && o2.__H.__h.length && (i.push(o2) !== 1 && r === l$3.requestAnimationFrame || ((r = l$3.requestAnimationFrame) || function(n2) {
    var t3, u2 = function() {
      clearTimeout(r2), b && cancelAnimationFrame(t3), setTimeout(n2);
    }, r2 = setTimeout(u2, 100);
    b && (t3 = requestAnimationFrame(u2));
  })(x)), u = null;
}, l$3.__c = function(t2, u2) {
  u2.some(function(t3) {
    try {
      t3.__h.forEach(g), t3.__h = t3.__h.filter(function(n2) {
        return !n2.__ || j(n2);
      });
    } catch (r2) {
      u2.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), u2 = [], l$3.__e(r2, t3.__v);
    }
  }), a && a(t2, u2);
}, l$3.unmount = function(t2) {
  v && v(t2);
  var u2, r2 = t2.__c;
  r2 && r2.__H && (r2.__H.__.forEach(function(n2) {
    try {
      g(n2);
    } catch (n3) {
      u2 = n3;
    }
  }), u2 && l$3.__e(u2, r2.__v));
};
var b = typeof requestAnimationFrame == "function";
function g(n2) {
  var t2 = u, r2 = n2.__c;
  typeof r2 == "function" && (n2.__c = void 0, r2()), u = t2;
}
function j(n2) {
  var t2 = u;
  n2.__c = n2.__(), u = t2;
}
function k(n2, t2) {
  return !n2 || n2.length !== t2.length || t2.some(function(t3, u2) {
    return t3 !== n2[u2];
  });
}
const useInputValue = (parent, value) => {
  const internals = _(() => {
    var _a;
    return (_a = parent == null ? void 0 : parent.attachInternals) == null ? void 0 : _a.call(parent);
  }, [parent]);
  const updater = A((newValue, e2) => {
    var _a;
    if (parent) {
      parent.value = newValue;
      if (e2) {
        e2.stopPropagation();
        parent.dispatchEvent(new Event("input"));
      }
    }
    if (internals) {
      (_a = internals.setFormValue) == null ? void 0 : _a.call(internals, newValue);
    }
  }, [parent, internals]);
  y(() => {
    updater(value);
  }, [updater, value]);
  return updater;
};
const style = u$1({
  "--baseAccent": color.primary,
  "--hoverAccent": color.primaryHover,
  "--activeAccent": color.primaryActive,
  "--boxShadow": boxShadow.primary,
  fontFamily: font,
  padding: padding.md,
  fontSize: fontSize.md,
  lineHeight: 1,
  color: color.fg,
  backgroundColor: color.bg,
  border: `1px solid ${color.border}`,
  borderRadius: borderRadius.md,
  outline: "none",
  "&.error": {
    "--baseAccent": color.danger,
    "--hoverAccent": color.dangerHover,
    "--activeAccent": color.dangerActive,
    "--boxShadow": boxShadow.danger,
    color: "var(--baseAccent)"
  },
  "&:focus": {
    boxShadow: "var(--boxShadow)"
  },
  "&:hover": {
    borderColor: "var(--hoverAccent)"
  },
  "&.error:not(:hover)": {
    borderColor: "var(--baseAccent)"
  },
  "&:focus:not(:hover)": {
    borderColor: "var(--baseAccent)"
  },
  "&:active": {
    borderColor: "var(--activeAccent)"
  },
  "&.small": {
    padding: padding.sm
  }
});
const Input = ({
  value = "",
  size = "normal",
  error = false,
  onChange,
  parent
}) => {
  const isError = error || error === "";
  const className = classNames([style, size, { error: isError }]);
  const handleInputValue = useInputValue(parent, value);
  const onInput = A((e2) => {
    if (e2.target instanceof HTMLInputElement) {
      if (onChange) {
        onChange(e2.target.value);
      }
      handleInputValue(e2.target.value, e2);
    }
  }, [onChange, handleInputValue]);
  return /* @__PURE__ */ v$1("input", {
    type: "text",
    class: className,
    value,
    onInput
  });
};
const register$2 = () => {
  h("phi-input", () => Input, {
    attributes: ["value", "size", "error"],
    formAssociated: true
  });
};
const iconStyle$f = u$1({
  display: "inline",
  width: "auto",
  height: "1em",
  verticalAlign: "-0.11em",
  fill: "currentColor"
});
const Text = () => /* @__PURE__ */ v$1("svg", {
  class: iconStyle$f,
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, /* @__PURE__ */ v$1("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), /* @__PURE__ */ v$1("path", {
  d: "M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"
}));
const iconStyle$e = u$1({
  display: "inline",
  width: "auto",
  height: "1em",
  verticalAlign: "-0.11em",
  fill: "currentColor"
});
const AlignCenter = () => /* @__PURE__ */ v$1("svg", {
  class: iconStyle$e,
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, /* @__PURE__ */ v$1("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /* @__PURE__ */ v$1("path", {
  d: "M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"
}));
const iconStyle$d = u$1({
  display: "inline",
  width: "auto",
  height: "1em",
  verticalAlign: "-0.11em",
  fill: "currentColor"
});
const AlignJustify = () => /* @__PURE__ */ v$1("svg", {
  class: iconStyle$d,
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, /* @__PURE__ */ v$1("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /* @__PURE__ */ v$1("path", {
  d: "M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"
}));
const iconStyle$c = u$1({
  display: "inline",
  width: "auto",
  height: "1em",
  verticalAlign: "-0.11em",
  fill: "currentColor"
});
const AlignLeft = () => /* @__PURE__ */ v$1("svg", {
  class: iconStyle$c,
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, /* @__PURE__ */ v$1("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /* @__PURE__ */ v$1("path", {
  d: "M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"
}));
const iconStyle$b = u$1({
  display: "inline",
  width: "auto",
  height: "1em",
  verticalAlign: "-0.11em",
  fill: "currentColor"
});
const AlignRight = () => /* @__PURE__ */ v$1("svg", {
  class: iconStyle$b,
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, /* @__PURE__ */ v$1("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /* @__PURE__ */ v$1("path", {
  d: "M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"
}));
const iconStyle$a = u$1({
  display: "inline",
  width: "auto",
  height: "1em",
  verticalAlign: "-0.11em",
  fill: "currentColor"
});
const Back = () => /* @__PURE__ */ v$1("svg", {
  class: iconStyle$a,
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, /* @__PURE__ */ v$1("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /* @__PURE__ */ v$1("g", null, /* @__PURE__ */ v$1("polygon", {
  points: "17.77,3.77 16,2 6,12 16,22 17.77,20.23 9.54,12"
})));
const iconStyle$9 = u$1({
  display: "inline",
  width: "auto",
  height: "1em",
  verticalAlign: "-0.11em",
  fill: "currentColor"
});
const Check = () => /* @__PURE__ */ v$1("svg", {
  class: iconStyle$9,
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, /* @__PURE__ */ v$1("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /* @__PURE__ */ v$1("path", {
  d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
}));
const iconStyle$8 = u$1({
  display: "inline",
  width: "auto",
  height: "1em",
  verticalAlign: "-0.11em",
  fill: "currentColor"
});
const Decrement = () => /* @__PURE__ */ v$1("svg", {
  class: iconStyle$8,
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, /* @__PURE__ */ v$1("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /* @__PURE__ */ v$1("path", {
  d: "M19 13H5v-2h14v2z"
}));
const iconStyle$7 = u$1({
  display: "inline",
  width: "auto",
  height: "1em",
  verticalAlign: "-0.11em",
  fill: "currentColor"
});
const Delete = () => /* @__PURE__ */ v$1("svg", {
  class: iconStyle$7,
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, /* @__PURE__ */ v$1("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /* @__PURE__ */ v$1("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
}));
const iconStyle$6 = u$1({
  display: "inline",
  width: "auto",
  height: "1em",
  verticalAlign: "-0.11em",
  fill: "currentColor"
});
const Effect = () => /* @__PURE__ */ v$1("svg", {
  class: iconStyle$6,
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, /* @__PURE__ */ v$1("g", null, /* @__PURE__ */ v$1("rect", {
  fill: "none",
  height: "24",
  width: "24",
  x: "0"
})), /* @__PURE__ */ v$1("g", null, /* @__PURE__ */ v$1("g", null, /* @__PURE__ */ v$1("polygon", {
  points: "20,7 20.94,4.94 23,4 20.94,3.06 20,1 19.06,3.06 17,4 19.06,4.94"
}), /* @__PURE__ */ v$1("polygon", {
  points: "8.5,7 9.44,4.94 11.5,4 9.44,3.06 8.5,1 7.56,3.06 5.5,4 7.56,4.94"
}), /* @__PURE__ */ v$1("polygon", {
  points: "20,12.5 19.06,14.56 17,15.5 19.06,16.44 20,18.5 20.94,16.44 23,15.5 20.94,14.56"
}), /* @__PURE__ */ v$1("path", {
  d: "M17.71,9.12l-2.83-2.83C14.68,6.1,14.43,6,14.17,6c-0.26,0-0.51,0.1-0.71,0.29L2.29,17.46c-0.39,0.39-0.39,1.02,0,1.41 l2.83,2.83C5.32,21.9,5.57,22,5.83,22s0.51-0.1,0.71-0.29l11.17-11.17C18.1,10.15,18.1,9.51,17.71,9.12z M14.17,8.42l1.41,1.41 L14.41,11L13,9.59L14.17,8.42z M5.83,19.59l-1.41-1.41L11.59,11L13,12.41L5.83,19.59z"
}))));
const iconStyle$5 = u$1({
  display: "inline",
  width: "auto",
  height: "1em",
  verticalAlign: "-0.11em",
  fill: "currentColor"
});
const Emoji = () => /* @__PURE__ */ v$1("svg", {
  class: iconStyle$5,
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, /* @__PURE__ */ v$1("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /* @__PURE__ */ v$1("path", {
  d: "M10.25 13c0 .69-.56 1.25-1.25 1.25S7.75 13.69 7.75 13s.56-1.25 1.25-1.25 1.25.56 1.25 1.25zM15 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm7 .25c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zM10.66 4.12C12.06 6.44 14.6 8 17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12zM4.42 9.47c1.71-.97 3.03-2.55 3.66-4.44C6.37 6 5.05 7.58 4.42 9.47zM20 12c0-.78-.12-1.53-.33-2.24-.7.15-1.42.24-2.17.24-3.13 0-5.92-1.44-7.76-3.69C8.69 8.87 6.6 10.88 4 11.86c.01.04 0 .09 0 .14 0 4.41 3.59 8 8 8s8-3.59 8-8z"
}));
const iconStyle$4 = u$1({
  display: "inline",
  width: "auto",
  height: "1em",
  verticalAlign: "-0.11em",
  fill: "currentColor"
});
const File = () => /* @__PURE__ */ v$1("svg", {
  class: iconStyle$4,
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, /* @__PURE__ */ v$1("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /* @__PURE__ */ v$1("path", {
  d: "M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"
}));
const iconStyle$3 = u$1({
  display: "inline",
  width: "auto",
  height: "1em",
  verticalAlign: "-0.11em",
  fill: "currentColor"
});
const Image = () => /* @__PURE__ */ v$1("svg", {
  class: iconStyle$3,
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, /* @__PURE__ */ v$1("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /* @__PURE__ */ v$1("path", {
  d: "M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 9.67l1.69 2.26 2.48-3.1L19 15H9zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"
}));
const iconStyle$2 = u$1({
  display: "inline",
  width: "auto",
  height: "1em",
  verticalAlign: "-0.11em",
  fill: "currentColor"
});
const Increment = () => /* @__PURE__ */ v$1("svg", {
  class: iconStyle$2,
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, /* @__PURE__ */ v$1("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /* @__PURE__ */ v$1("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}));
const iconStyle$1 = u$1({
  display: "inline",
  width: "auto",
  height: "1em",
  verticalAlign: "-0.11em",
  fill: "currentColor"
});
const CheckRadio = () => /* @__PURE__ */ v$1("svg", {
  class: iconStyle$1,
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, /* @__PURE__ */ v$1("circle", {
  cx: "12",
  cy: "12",
  r: "7"
}));
const iconStyle = u$1({
  display: "inline",
  width: "auto",
  height: "1em",
  verticalAlign: "-0.11em",
  fill: "currentColor"
});
const Save = () => /* @__PURE__ */ v$1("svg", {
  class: iconStyle,
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, /* @__PURE__ */ v$1("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /* @__PURE__ */ v$1("path", {
  d: "M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z"
}));
const icons = {
  "text": Text,
  "align-center": AlignCenter,
  "align-justify": AlignJustify,
  "align-left": AlignLeft,
  "align-right": AlignRight,
  "back": Back,
  "check": Check,
  "check-radio": CheckRadio,
  "decrement": Decrement,
  "delete": Delete,
  "effect": Effect,
  "emoji": Emoji,
  "file": File,
  "image": Image,
  "increment": Increment,
  "save": Save
};
const Icon = ({ icon }) => {
  const Component = icons[icon];
  return /* @__PURE__ */ v$1(Component, null);
};
const register$1 = () => {
  h("phi-icon", () => Icon, {
    attributes: ["icon"]
  });
};
const register = () => {
  register$3();
  register$2();
  register$1();
};
export { Button, Icon, Input, register };
//# sourceMappingURL=phi-components.es.js.map
