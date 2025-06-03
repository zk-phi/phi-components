var be = Object.defineProperty;
var me = (t, e, r) => e in t ? be(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var x = (t, e, r) => me(t, typeof e != "symbol" ? e + "" : e, r);
var D, m, re, S, Q, ne, oe, ie, q, V, W, j = {}, ae = [], ve = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, O = Array.isArray;
function k(t, e) {
  for (var r in e) t[r] = e[r];
  return t;
}
function G(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function M(t, e, r) {
  var i, a, o, l = {};
  for (o in e) o == "key" ? i = e[o] : o == "ref" ? a = e[o] : l[o] = e[o];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? D.call(arguments, 2) : r), typeof t == "function" && t.defaultProps != null) for (o in t.defaultProps) l[o] == null && (l[o] = t.defaultProps[o]);
  return T(t, l, i, a, null);
}
function T(t, e, r, i, a) {
  var o = { type: t, props: e, key: r, ref: i, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: a ?? ++re, __i: -1, __u: 0 };
  return a == null && m.vnode != null && m.vnode(o), o;
}
function I(t) {
  return t.children;
}
function U(t, e) {
  this.props = t, this.context = e;
}
function P(t, e) {
  if (e == null) return t.__ ? P(t.__, t.__i + 1) : null;
  for (var r; e < t.__k.length; e++) if ((r = t.__k[e]) != null && r.__e != null) return r.__e;
  return typeof t.type == "function" ? P(t) : null;
}
function le(t) {
  var e, r;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++) if ((r = t.__k[e]) != null && r.__e != null) {
      t.__e = t.__c.base = r.__e;
      break;
    }
    return le(t);
  }
}
function X(t) {
  (!t.__d && (t.__d = !0) && S.push(t) && !H.__r++ || Q != m.debounceRendering) && ((Q = m.debounceRendering) || ne)(H);
}
function H() {
  for (var t, e, r, i, a, o, l, s = 1; S.length; ) S.length > s && S.sort(oe), t = S.shift(), s = S.length, t.__d && (r = void 0, a = (i = (e = t).__v).__e, o = [], l = [], e.__P && ((r = k({}, i)).__v = i.__v + 1, m.vnode && m.vnode(r), Y(e.__P, r, i, e.__n, e.__P.namespaceURI, 32 & i.__u ? [a] : null, o, a ?? P(i), !!(32 & i.__u), l), r.__v = i.__v, r.__.__k[r.__i] = r, ce(o, r, l), r.__e != a && le(r)));
  H.__r = 0;
}
function se(t, e, r, i, a, o, l, s, p, _, u) {
  var n, h, c, d, g, v, f = i && i.__k || ae, b = e.length;
  for (p = ge(r, e, f, p, b), n = 0; n < b; n++) (c = r.__k[n]) != null && (h = c.__i == -1 ? j : f[c.__i] || j, c.__i = n, v = Y(t, c, h, a, o, l, s, p, _, u), d = c.__e, c.ref && h.ref != c.ref && (h.ref && J(h.ref, null, c), u.push(c.ref, c.__c || d, c)), g == null && d != null && (g = d), 4 & c.__u || h.__k === c.__k ? p = _e(c, p, t) : typeof c.type == "function" && v !== void 0 ? p = v : d && (p = d.nextSibling), c.__u &= -7);
  return r.__e = g, p;
}
function ge(t, e, r, i, a) {
  var o, l, s, p, _, u = r.length, n = u, h = 0;
  for (t.__k = new Array(a), o = 0; o < a; o++) (l = e[o]) != null && typeof l != "boolean" && typeof l != "function" ? (p = o + h, (l = t.__k[o] = typeof l == "string" || typeof l == "number" || typeof l == "bigint" || l.constructor == String ? T(null, l, null, null, null) : O(l) ? T(I, { children: l }, null, null, null) : l.constructor == null && l.__b > 0 ? T(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l).__ = t, l.__b = t.__b + 1, s = null, (_ = l.__i = ye(l, r, p, n)) != -1 && (n--, (s = r[_]) && (s.__u |= 2)), s == null || s.__v == null ? (_ == -1 && (a > u ? h-- : a < u && h++), typeof l.type != "function" && (l.__u |= 4)) : _ != p && (_ == p - 1 ? h-- : _ == p + 1 ? h++ : (_ > p ? h-- : h++, l.__u |= 4))) : t.__k[o] = null;
  if (n) for (o = 0; o < u; o++) (s = r[o]) != null && (2 & s.__u) == 0 && (s.__e == i && (i = P(s)), ue(s, s));
  return i;
}
function _e(t, e, r) {
  var i, a;
  if (typeof t.type == "function") {
    for (i = t.__k, a = 0; i && a < i.length; a++) i[a] && (i[a].__ = t, e = _e(i[a], e, r));
    return e;
  }
  t.__e != e && (e && t.type && !r.contains(e) && (e = P(t)), r.insertBefore(t.__e, e || null), e = t.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function ye(t, e, r, i) {
  var a, o, l = t.key, s = t.type, p = e[r];
  if (p === null && t.key == null || p && l == p.key && s == p.type && (2 & p.__u) == 0) return r;
  if (i > (p != null && (2 & p.__u) == 0 ? 1 : 0)) for (a = r - 1, o = r + 1; a >= 0 || o < e.length; ) {
    if (a >= 0) {
      if ((p = e[a]) && (2 & p.__u) == 0 && l == p.key && s == p.type) return a;
      a--;
    }
    if (o < e.length) {
      if ((p = e[o]) && (2 & p.__u) == 0 && l == p.key && s == p.type) return o;
      o++;
    }
  }
  return -1;
}
function Z(t, e, r) {
  e[0] == "-" ? t.setProperty(e, r ?? "") : t[e] = r == null ? "" : typeof r != "number" || ve.test(e) ? r : r + "px";
}
function N(t, e, r, i, a) {
  var o, l;
  e: if (e == "style") if (typeof r == "string") t.style.cssText = r;
  else {
    if (typeof i == "string" && (t.style.cssText = i = ""), i) for (e in i) r && e in r || Z(t.style, e, "");
    if (r) for (e in r) i && r[e] == i[e] || Z(t.style, e, r[e]);
  }
  else if (e[0] == "o" && e[1] == "n") o = e != (e = e.replace(ie, "$1")), l = e.toLowerCase(), e = l in t || e == "onFocusOut" || e == "onFocusIn" ? l.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = r, r ? i ? r.u = i.u : (r.u = q, t.addEventListener(e, o ? W : V, o)) : t.removeEventListener(e, o ? W : V, o);
  else {
    if (a == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in t) try {
      t[e] = r ?? "";
      break e;
    } catch {
    }
    typeof r == "function" || (r == null || r === !1 && e[4] != "-" ? t.removeAttribute(e) : t.setAttribute(e, e == "popover" && r == 1 ? "" : r));
  }
}
function ee(t) {
  return function(e) {
    if (this.l) {
      var r = this.l[e.type + t];
      if (e.t == null) e.t = q++;
      else if (e.t < r.u) return;
      return r(m.event ? m.event(e) : e);
    }
  };
}
function Y(t, e, r, i, a, o, l, s, p, _) {
  var u, n, h, c, d, g, v, f, b, C, w, F, A, K, L, z, R, y = e.type;
  if (e.constructor != null) return null;
  128 & r.__u && (p = !!(32 & r.__u), o = [s = e.__e = r.__e]), (u = m.__b) && u(e);
  e: if (typeof y == "function") try {
    if (f = e.props, b = "prototype" in y && y.prototype.render, C = (u = y.contextType) && i[u.__c], w = u ? C ? C.props.value : u.__ : i, r.__c ? v = (n = e.__c = r.__c).__ = n.__E : (b ? e.__c = n = new y(f, w) : (e.__c = n = new U(f, w), n.constructor = y, n.render = we), C && C.sub(n), n.props = f, n.state || (n.state = {}), n.context = w, n.__n = i, h = n.__d = !0, n.__h = [], n._sb = []), b && n.__s == null && (n.__s = n.state), b && y.getDerivedStateFromProps != null && (n.__s == n.state && (n.__s = k({}, n.__s)), k(n.__s, y.getDerivedStateFromProps(f, n.__s))), c = n.props, d = n.state, n.__v = e, h) b && y.getDerivedStateFromProps == null && n.componentWillMount != null && n.componentWillMount(), b && n.componentDidMount != null && n.__h.push(n.componentDidMount);
    else {
      if (b && y.getDerivedStateFromProps == null && f !== c && n.componentWillReceiveProps != null && n.componentWillReceiveProps(f, w), !n.__e && n.shouldComponentUpdate != null && n.shouldComponentUpdate(f, n.__s, w) === !1 || e.__v == r.__v) {
        for (e.__v != r.__v && (n.props = f, n.state = n.__s, n.__d = !1), e.__e = r.__e, e.__k = r.__k, e.__k.some(function(E) {
          E && (E.__ = e);
        }), F = 0; F < n._sb.length; F++) n.__h.push(n._sb[F]);
        n._sb = [], n.__h.length && l.push(n);
        break e;
      }
      n.componentWillUpdate != null && n.componentWillUpdate(f, n.__s, w), b && n.componentDidUpdate != null && n.__h.push(function() {
        n.componentDidUpdate(c, d, g);
      });
    }
    if (n.context = w, n.props = f, n.__P = t, n.__e = !1, A = m.__r, K = 0, b) {
      for (n.state = n.__s, n.__d = !1, A && A(e), u = n.render(n.props, n.state, n.context), L = 0; L < n._sb.length; L++) n.__h.push(n._sb[L]);
      n._sb = [];
    } else do
      n.__d = !1, A && A(e), u = n.render(n.props, n.state, n.context), n.state = n.__s;
    while (n.__d && ++K < 25);
    n.state = n.__s, n.getChildContext != null && (i = k(k({}, i), n.getChildContext())), b && !h && n.getSnapshotBeforeUpdate != null && (g = n.getSnapshotBeforeUpdate(c, d)), z = u, u != null && u.type === I && u.key == null && (z = pe(u.props.children)), s = se(t, O(z) ? z : [z], e, r, i, a, o, l, s, p, _), n.base = e.__e, e.__u &= -161, n.__h.length && l.push(n), v && (n.__E = n.__ = null);
  } catch (E) {
    if (e.__v = null, p || o != null) if (E.then) {
      for (e.__u |= p ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; ) s = s.nextSibling;
      o[o.indexOf(s)] = null, e.__e = s;
    } else for (R = o.length; R--; ) G(o[R]);
    else e.__e = r.__e, e.__k = r.__k;
    m.__e(E, e, r);
  }
  else o == null && e.__v == r.__v ? (e.__k = r.__k, e.__e = r.__e) : s = e.__e = ke(r.__e, e, r, i, a, o, l, p, _);
  return (u = m.diffed) && u(e), 128 & e.__u ? void 0 : s;
}
function ce(t, e, r) {
  for (var i = 0; i < r.length; i++) J(r[i], r[++i], r[++i]);
  m.__c && m.__c(e, t), t.some(function(a) {
    try {
      t = a.__h, a.__h = [], t.some(function(o) {
        o.call(a);
      });
    } catch (o) {
      m.__e(o, a.__v);
    }
  });
}
function pe(t) {
  return typeof t != "object" || t == null || t.__b && t.__b > 0 ? t : O(t) ? t.map(pe) : k({}, t);
}
function ke(t, e, r, i, a, o, l, s, p) {
  var _, u, n, h, c, d, g, v = r.props, f = e.props, b = e.type;
  if (b == "svg" ? a = "http://www.w3.org/2000/svg" : b == "math" ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"), o != null) {
    for (_ = 0; _ < o.length; _++) if ((c = o[_]) && "setAttribute" in c == !!b && (b ? c.localName == b : c.nodeType == 3)) {
      t = c, o[_] = null;
      break;
    }
  }
  if (t == null) {
    if (b == null) return document.createTextNode(f);
    t = document.createElementNS(a, b, f.is && f), s && (m.__m && m.__m(e, o), s = !1), o = null;
  }
  if (b == null) v === f || s && t.data == f || (t.data = f);
  else {
    if (o = o && D.call(t.childNodes), v = r.props || j, !s && o != null) for (v = {}, _ = 0; _ < t.attributes.length; _++) v[(c = t.attributes[_]).name] = c.value;
    for (_ in v) if (c = v[_], _ != "children") {
      if (_ == "dangerouslySetInnerHTML") n = c;
      else if (!(_ in f)) {
        if (_ == "value" && "defaultValue" in f || _ == "checked" && "defaultChecked" in f) continue;
        N(t, _, null, c, a);
      }
    }
    for (_ in f) c = f[_], _ == "children" ? h = c : _ == "dangerouslySetInnerHTML" ? u = c : _ == "value" ? d = c : _ == "checked" ? g = c : s && typeof c != "function" || v[_] === c || N(t, _, c, v[_], a);
    if (u) s || n && (u.__html == n.__html || u.__html == t.innerHTML) || (t.innerHTML = u.__html), e.__k = [];
    else if (n && (t.innerHTML = ""), se(e.type == "template" ? t.content : t, O(h) ? h : [h], e, r, i, b == "foreignObject" ? "http://www.w3.org/1999/xhtml" : a, o, l, o ? o[0] : r.__k && P(r, 0), s, p), o != null) for (_ = o.length; _--; ) G(o[_]);
    s || (_ = "value", b == "progress" && d == null ? t.removeAttribute("value") : d != null && (d !== t[_] || b == "progress" && !d || b == "option" && d != v[_]) && N(t, _, d, v[_], a), _ = "checked", g != null && g != t[_] && N(t, _, g, v[_], a));
  }
  return t;
}
function J(t, e, r) {
  try {
    if (typeof t == "function") {
      var i = typeof t.__u == "function";
      i && t.__u(), i && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (a) {
    m.__e(a, r);
  }
}
function ue(t, e, r) {
  var i, a;
  if (m.unmount && m.unmount(t), (i = t.ref) && (i.current && i.current != t.__e || J(i, null, e)), (i = t.__c) != null) {
    if (i.componentWillUnmount) try {
      i.componentWillUnmount();
    } catch (o) {
      m.__e(o, e);
    }
    i.base = i.__P = null;
  }
  if (i = t.__k) for (a = 0; a < i.length; a++) i[a] && ue(i[a], e, r || typeof t.type != "function");
  r || G(t.__e), t.__c = t.__ = t.__e = void 0;
}
function we(t, e, r) {
  return this.constructor(t, r);
}
function $(t, e, r) {
  var i, a, o, l;
  e == document && (e = document.documentElement), m.__ && m.__(t, e), a = (i = typeof r == "function") ? null : r && r.__k || e.__k, o = [], l = [], Y(e, t = (!i && r || e).__k = M(I, null, [t]), a || j, j, e.namespaceURI, !i && r ? [r] : a ? null : e.firstChild ? D.call(e.childNodes) : null, o, !i && r ? r : a ? a.__e : e.firstChild, i, l), ce(o, t, l);
}
function he(t, e) {
  $(t, e, he);
}
function xe(t, e, r) {
  var i, a, o, l, s = k({}, t.props);
  for (o in t.type && t.type.defaultProps && (l = t.type.defaultProps), e) o == "key" ? i = e[o] : o == "ref" ? a = e[o] : s[o] = e[o] == null && l != null ? l[o] : e[o];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? D.call(arguments, 2) : r), T(t.type, s, i || t.key, a || t.ref, null);
}
D = ae.slice, m = { __e: function(t, e, r, i) {
  for (var a, o, l; e = e.__; ) if ((a = e.__c) && !a.__) try {
    if ((o = a.constructor) && o.getDerivedStateFromError != null && (a.setState(o.getDerivedStateFromError(t)), l = a.__d), a.componentDidCatch != null && (a.componentDidCatch(t, i || {}), l = a.__d), l) return a.__E = a;
  } catch (s) {
    t = s;
  }
  throw t;
} }, re = 0, U.prototype.setState = function(t, e) {
  var r;
  r = this.__s != null && this.__s != this.state ? this.__s : this.__s = k({}, this.state), typeof t == "function" && (t = t(k({}, r), this.props)), t && k(r, t), t != null && this.__v && (e && this._sb.push(e), X(this));
}, U.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), X(this));
}, U.prototype.render = I, S = [], ne = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, oe = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, H.__r = 0, ie = /(PointerCapture)$|Capture$/i, q = 0, V = ee(!1), W = ee(!0);
var Se = 0;
function B(t, e, r, i, a, o) {
  e || (e = {});
  var l, s, p = e;
  if ("ref" in p) for (s in p = {}, e) s == "ref" ? l = e[s] : p[s] = e[s];
  var _ = { type: t, props: p, key: r, ref: l, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Se, __i: -1, __u: 0, __source: a, __self: o };
  if (typeof t == "function" && (l = t.defaultProps)) for (s in l) p[s] === void 0 && (p[s] = l[s]);
  return m.vnode && m.vnode(_), _;
}
const te = (t) => M("slot", t), Pe = (t) => {
  if (t == null)
    return "";
  if (typeof t != "object")
    return t.toString();
  Array.isArray(t) && t.map((i) => i.toString().replaceAll(",", "\\,")).join(",");
  const e = Object.keys(t), r = new FormData();
  return e.forEach((i) => {
    r.append(i, t[i].toString());
  }), r;
}, Ce = (t, e) => {
  var _;
  const r = (e == null ? void 0 : e.properties) ?? [], i = (e == null ? void 0 : e.slots) ?? [], a = (e == null ? void 0 : e.adoptedStyleSheets) ?? [], o = Object.fromEntries(
    r.filter((u) => "attribute" in u).map((u) => [u.attribute.name, { prop: u.name, parser: u.attribute.type }])
  ), l = Object.keys(o), s = (_ = r.find((u) => u.formAssociated)) == null ? void 0 : _.name;
  class p extends HTMLElement {
    constructor() {
      super();
      x(this, "_root");
      x(this, "_vdom", null);
      x(this, "_internals");
      x(this, "_props");
      x(this, "_frameRequested", !1);
      this._root = this.attachShadow({ mode: "open" }), this._root.adoptedStyleSheets = a, this._vdom = null, this._internals = s ? this.attachInternals() : null;
      const h = this;
      this._props = Object.fromEntries(
        r.map((c) => {
          const d = "initialValue" in c ? c.initialValue : this.parseAttribute(c.attribute);
          return [c.name, {
            _dirty: !1,
            _value: d,
            get value() {
              return this._value;
            },
            set value(g) {
              h.setProp(c.name, g, !0);
            }
          }];
        })
      );
    }
    parseAttribute(h) {
      return h.type(this.getAttribute(h.name));
    }
    setProp(h, c, d) {
      this._props[h]._value !== c && (this._props[h]._value = c, d && (this._props[h]._dirty = !0), s === h && this._internals && this._internals.setFormValue(Pe(c)), this.rerender());
    }
    rerender() {
      this._frameRequested || requestAnimationFrame(() => {
        this._vdom && (this._frameRequested = !1, this._vdom = xe(this._vdom, this._props), $(this._vdom, this._root));
      });
    }
    connectedCallback() {
      const h = Object.fromEntries(
        i.map((d) => [d, M(te, { name: d }, null)])
      ), c = { ...this._props, ...h };
      this._vdom = M(t, c, M(te, { name: void 0 }, null)), (this.hasAttribute("hydrate") ? he : $)(this._vdom, this._root);
    }
    disconnectedCallback() {
      this._vdom = null, $(null, this._root);
    }
    attributeChangedCallback(h, c, d) {
      const { parser: g, prop: v } = o[h];
      this._props[v]._dirty || this.setProp(v, g(d), !1);
    }
  }
  return x(p, "observedAttributes", l), x(p, "formAssociated", !!s), r.forEach((u) => Object.defineProperty(p.prototype, u.name, {
    get() {
      return this._props[u.name]._value;
    },
    set(n) {
      this.setProp(u.name, n, !0);
    }
  })), p;
}, Ae = (t, e, r) => {
  const i = Ce(t, r);
  return customElements.define(e, i);
}, ze = (t) => t && t !== "false" && t !== "0" || t === "", de = (...t) => {
  const e = new CSSStyleSheet();
  return e.replaceSync(t.join("")), e;
}, Ee = "/*! destyle.css v4.0.1 | MIT License | https://github.com/nicolas-cusan/destyle.min.css */*,:before,:after{box-sizing:border-box;border-style:solid;border-width:0;min-width:0}html{line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}body{margin:0}main{display:block}p,table,blockquote,address,pre,iframe,form,figure,dl{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit;margin:0}ul,ol{margin:0;padding:0;list-style:none}dt{font-weight:700}dd{margin-left:0}hr{box-sizing:content-box;height:0;overflow:visible;border-top-width:1px;margin:0;clear:both;color:inherit}pre{font-family:monospace,monospace;font-size:inherit}address{font-style:inherit}a{background-color:transparent;text-decoration:none;color:inherit}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:inherit}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}svg,img,embed,object,iframe{vertical-align:bottom}button,input,optgroup,select,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;vertical-align:middle;color:inherit;font:inherit;background:transparent;padding:0;margin:0;border-radius:0;text-align:inherit;text-transform:inherit}button,[type=button],[type=reset],[type=submit]{cursor:pointer}button:disabled,[type=button]:disabled,[type=reset]:disabled,[type=submit]:disabled{cursor:default}:-moz-focusring{outline:auto}select:disabled{opacity:inherit}option{padding:0}fieldset{margin:0;padding:0;min-width:0}legend{padding:0}progress{vertical-align:baseline}textarea{overflow:auto}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=number]{-moz-appearance:textfield}label[for]{cursor:pointer}details{display:block}summary{display:list-item}[contenteditable]:focus{outline:auto}table{border-color:inherit;border-collapse:collapse}caption{text-align:left}td,th{vertical-align:top;padding:0}th{text-align:left;font-weight:700}body,:host{font-family:Helvetica Neue,Arial,Hiragino Kaku Gothic ProN,Hiragino Sans,Meiryo,sans-serif;font-size:var(--phi-fontsize-md);background-color:var(--phi-color-bg);color:var(--phi-color-fg);line-height:1.25em}", Me = de(Ee), Te = ".phi-button{--phi-color-accent-default: var(--phi-color-neutral-default);--phi-color-accent-hover: var(--phi-color-neutral-hover);--phi-color-accent-active: var(--phi-color-neutral-active);--phi-color-accent-bg: var(--phi-color-neutral-bg);--phi-shadow-pressable-accent-default: var(--phi-shadow-pressable-neutral-default);--phi-shadow-pressable-accent-hover: var(--phi-shadow-pressable-neutral-hover);display:inline-flex;align-items:center;font-size:var(--phi-fontsize-md);height:calc(var(--phi-fontsize-md) * 3);padding:0 var(--phi-spacing-padding-md);gap:var(--phi-spacing-margin-inline);border-radius:var(--phi-radius-md);cursor:pointer;-webkit-user-select:none;user-select:none}.phi-button.danger{--phi-color-accent-default: var(--phi-color-danger-default);--phi-color-accent-hover: var(--phi-color-danger-hover);--phi-color-accent-active: var(--phi-color-danger-active);--phi-color-accent-bg: var(--phi-color-danger-bg);--phi-shadow-pressable-accent-default: var(--phi-shadow-pressable-danger-default);--phi-shadow-pressable-accent-hover: var(--phi-shadow-pressable-danger-hover)}.phi-button.primary{color:var(--phi-color-distant-fg);background-color:var(--phi-color-accent-default);border:1px solid var(--phi-color-accent-default);box-shadow:var(--phi-shadow-pressable-accent-default);transform:translateY(-1px)}.phi-button.primary:hover{color:var(--phi-color-distant-fg);background-color:var(--phi-color-accent-hover);border-color:var(--phi-color-accent-hover);box-shadow:var(--phi-shadow-pressable-accent-hover)}.phi-button.primary:active{transform:none;box-shadow:none}.phi-button.default{color:var(--phi-color-fg);background-color:transparent;border:1px solid currentColor;box-shadow:var(--phi-shadow-pressable-default);transform:translateY(-1px)}.phi-button.default:hover{color:var(--phi-color-accent-default);box-shadow:var(--phi-shadow-pressable-accent-hover)}.phi-button.default:active{transform:none;box-shadow:none}.phi-button.dotted{color:var(--phi-color-fg);background-color:transparent;border:1px dashed currentColor}.phi-button.dotted:hover:not(:active){color:var(--phi-color-accent-default)}.phi-button.dotted:active{color:var(--phi-color-accent-active);background-color:var(--phi-color-accent-bg)}.phi-button>.icon{display:inline-block;font-size:var(--phi-fontsize-icon-md);line-height:1em}", je = ({
  onClick: t,
  danger: e,
  variant: r = "default",
  icon: i,
  children: a
}) => /* @__PURE__ */ B(
  "button",
  {
    className: `phi-button ${r} ${e ? "danger" : ""}`,
    onClick: t,
    children: [
      i && /* @__PURE__ */ B("span", { className: "icon", children: i }),
      a
    ]
  }
), De = de(Te), Fe = (t) => {
  const e = (t == null ? void 0 : t.toString()) ?? "";
  return e === "default" || e === "primary" || e === "dotted" ? e : "default";
}, Le = ({ danger: t, variant: e, icon: r, onClick: i, children: a }) => /* @__PURE__ */ B(je, { icon: r, danger: t.value, variant: e.value, children: a }), fe = () => Ae(Le, "phi-button", {
  // Add styles to the ShadowDOM
  adoptedStyleSheets: [Me, De],
  // Create slots and pass to Preact component through its properties
  // eg. When set `["icon"]`, then `<slot name="icon" />` is passed through the `name` prop
  slots: ["icon"],
  // List of states, that are both accessible from the Preact component,
  // and from the vanilla JS world.
  // Initial values will be retrieved from each corresponding attributes.
  properties: [{
    name: "danger",
    attribute: { name: "danger", type: ze }
  }, {
    name: "variant",
    attribute: { name: "variant", type: Fe }
  }, {
    name: "onClick",
    initialValue: void 0
  }]
}), Ne = () => {
  fe();
};
Ne.button = fe;
export {
  Ne as default
};
//# sourceMappingURL=custom-elements.js.map
