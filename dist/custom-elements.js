var fe = Object.defineProperty;
var ge = (t, e, r) => e in t ? fe(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var x = (t, e, r) => ge(t, typeof e != "symbol" ? e + "" : e, r);
var D, b, re, S, Q, oe, ne, ae, q, V, B, H = {}, ie = [], be = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, I = Array.isArray;
function k(t, e) {
  for (var r in e) t[r] = e[r];
  return t;
}
function G(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function T(t, e, r) {
  var a, i, n, l = {};
  for (n in e) n == "key" ? a = e[n] : n == "ref" ? i = e[n] : l[n] = e[n];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? D.call(arguments, 2) : r), typeof t == "function" && t.defaultProps != null) for (n in t.defaultProps) l[n] == null && (l[n] = t.defaultProps[n]);
  return E(t, l, a, i, null);
}
function E(t, e, r, a, i) {
  var n = { type: t, props: e, key: r, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: i ?? ++re, __i: -1, __u: 0 };
  return i == null && b.vnode != null && b.vnode(n), n;
}
function W(t) {
  return t.children;
}
function U(t, e) {
  this.props = t, this.context = e;
}
function C(t, e) {
  if (e == null) return t.__ ? C(t.__, t.__i + 1) : null;
  for (var r; e < t.__k.length; e++) if ((r = t.__k[e]) != null && r.__e != null) return r.__e;
  return typeof t.type == "function" ? C(t) : null;
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
  (!t.__d && (t.__d = !0) && S.push(t) && !j.__r++ || Q != b.debounceRendering) && ((Q = b.debounceRendering) || oe)(j);
}
function j() {
  for (var t, e, r, a, i, n, l, s = 1; S.length; ) S.length > s && S.sort(ne), t = S.shift(), s = S.length, t.__d && (r = void 0, i = (a = (e = t).__v).__e, n = [], l = [], e.__P && ((r = k({}, a)).__v = a.__v + 1, b.vnode && b.vnode(r), Y(e.__P, r, a, e.__n, e.__P.namespaceURI, 32 & a.__u ? [i] : null, n, i ?? C(a), !!(32 & a.__u), l), r.__v = a.__v, r.__.__k[r.__i] = r, _e(n, r, l), r.__e != i && le(r)));
  j.__r = 0;
}
function se(t, e, r, a, i, n, l, s, _, p, c) {
  var o, d, h, v, m, g, u = a && a.__k || ie, f = e.length;
  for (_ = ve(r, e, u, _, f), o = 0; o < f; o++) (h = r.__k[o]) != null && (d = h.__i == -1 ? H : u[h.__i] || H, h.__i = o, g = Y(t, h, d, i, n, l, s, _, p, c), v = h.__e, h.ref && d.ref != h.ref && (d.ref && J(d.ref, null, h), c.push(h.ref, h.__c || v, h)), m == null && v != null && (m = v), 4 & h.__u || d.__k === h.__k ? _ = pe(h, _, t) : typeof h.type == "function" && g !== void 0 ? _ = g : v && (_ = v.nextSibling), h.__u &= -7);
  return r.__e = m, _;
}
function ve(t, e, r, a, i) {
  var n, l, s, _, p, c = r.length, o = c, d = 0;
  for (t.__k = new Array(i), n = 0; n < i; n++) (l = e[n]) != null && typeof l != "boolean" && typeof l != "function" ? (_ = n + d, (l = t.__k[n] = typeof l == "string" || typeof l == "number" || typeof l == "bigint" || l.constructor == String ? E(null, l, null, null, null) : I(l) ? E(W, { children: l }, null, null, null) : l.constructor == null && l.__b > 0 ? E(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l).__ = t, l.__b = t.__b + 1, s = null, (p = l.__i = me(l, r, _, o)) != -1 && (o--, (s = r[p]) && (s.__u |= 2)), s == null || s.__v == null ? (p == -1 && (i > c ? d-- : i < c && d++), typeof l.type != "function" && (l.__u |= 4)) : p != _ && (p == _ - 1 ? d-- : p == _ + 1 ? d++ : (p > _ ? d-- : d++, l.__u |= 4))) : t.__k[n] = null;
  if (o) for (n = 0; n < c; n++) (s = r[n]) != null && (2 & s.__u) == 0 && (s.__e == a && (a = C(s)), he(s, s));
  return a;
}
function pe(t, e, r) {
  var a, i;
  if (typeof t.type == "function") {
    for (a = t.__k, i = 0; a && i < a.length; i++) a[i] && (a[i].__ = t, e = pe(a[i], e, r));
    return e;
  }
  t.__e != e && (e && t.type && !r.contains(e) && (e = C(t)), r.insertBefore(t.__e, e || null), e = t.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function me(t, e, r, a) {
  var i, n, l = t.key, s = t.type, _ = e[r];
  if (_ === null && t.key == null || _ && l == _.key && s == _.type && (2 & _.__u) == 0) return r;
  if (a > (_ != null && (2 & _.__u) == 0 ? 1 : 0)) for (i = r - 1, n = r + 1; i >= 0 || n < e.length; ) {
    if (i >= 0) {
      if ((_ = e[i]) && (2 & _.__u) == 0 && l == _.key && s == _.type) return i;
      i--;
    }
    if (n < e.length) {
      if ((_ = e[n]) && (2 & _.__u) == 0 && l == _.key && s == _.type) return n;
      n++;
    }
  }
  return -1;
}
function Z(t, e, r) {
  e[0] == "-" ? t.setProperty(e, r ?? "") : t[e] = r == null ? "" : typeof r != "number" || be.test(e) ? r : r + "px";
}
function L(t, e, r, a, i) {
  var n, l;
  e: if (e == "style") if (typeof r == "string") t.style.cssText = r;
  else {
    if (typeof a == "string" && (t.style.cssText = a = ""), a) for (e in a) r && e in r || Z(t.style, e, "");
    if (r) for (e in r) a && r[e] == a[e] || Z(t.style, e, r[e]);
  }
  else if (e[0] == "o" && e[1] == "n") n = e != (e = e.replace(ae, "$1")), l = e.toLowerCase(), e = l in t || e == "onFocusOut" || e == "onFocusIn" ? l.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + n] = r, r ? a ? r.u = a.u : (r.u = q, t.addEventListener(e, n ? B : V, n)) : t.removeEventListener(e, n ? B : V, n);
  else {
    if (i == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
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
      return r(b.event ? b.event(e) : e);
    }
  };
}
function Y(t, e, r, a, i, n, l, s, _, p) {
  var c, o, d, h, v, m, g, u, f, P, w, F, A, K, N, z, O, y = e.type;
  if (e.constructor != null) return null;
  128 & r.__u && (_ = !!(32 & r.__u), n = [s = e.__e = r.__e]), (c = b.__b) && c(e);
  e: if (typeof y == "function") try {
    if (u = e.props, f = "prototype" in y && y.prototype.render, P = (c = y.contextType) && a[c.__c], w = c ? P ? P.props.value : c.__ : a, r.__c ? g = (o = e.__c = r.__c).__ = o.__E : (f ? e.__c = o = new y(u, w) : (e.__c = o = new U(u, w), o.constructor = y, o.render = ke), P && P.sub(o), o.props = u, o.state || (o.state = {}), o.context = w, o.__n = a, d = o.__d = !0, o.__h = [], o._sb = []), f && o.__s == null && (o.__s = o.state), f && y.getDerivedStateFromProps != null && (o.__s == o.state && (o.__s = k({}, o.__s)), k(o.__s, y.getDerivedStateFromProps(u, o.__s))), h = o.props, v = o.state, o.__v = e, d) f && y.getDerivedStateFromProps == null && o.componentWillMount != null && o.componentWillMount(), f && o.componentDidMount != null && o.__h.push(o.componentDidMount);
    else {
      if (f && y.getDerivedStateFromProps == null && u !== h && o.componentWillReceiveProps != null && o.componentWillReceiveProps(u, w), !o.__e && o.shouldComponentUpdate != null && o.shouldComponentUpdate(u, o.__s, w) === !1 || e.__v == r.__v) {
        for (e.__v != r.__v && (o.props = u, o.state = o.__s, o.__d = !1), e.__e = r.__e, e.__k = r.__k, e.__k.some(function(M) {
          M && (M.__ = e);
        }), F = 0; F < o._sb.length; F++) o.__h.push(o._sb[F]);
        o._sb = [], o.__h.length && l.push(o);
        break e;
      }
      o.componentWillUpdate != null && o.componentWillUpdate(u, o.__s, w), f && o.componentDidUpdate != null && o.__h.push(function() {
        o.componentDidUpdate(h, v, m);
      });
    }
    if (o.context = w, o.props = u, o.__P = t, o.__e = !1, A = b.__r, K = 0, f) {
      for (o.state = o.__s, o.__d = !1, A && A(e), c = o.render(o.props, o.state, o.context), N = 0; N < o._sb.length; N++) o.__h.push(o._sb[N]);
      o._sb = [];
    } else do
      o.__d = !1, A && A(e), c = o.render(o.props, o.state, o.context), o.state = o.__s;
    while (o.__d && ++K < 25);
    o.state = o.__s, o.getChildContext != null && (a = k(k({}, a), o.getChildContext())), f && !d && o.getSnapshotBeforeUpdate != null && (m = o.getSnapshotBeforeUpdate(h, v)), z = c, c != null && c.type === W && c.key == null && (z = ce(c.props.children)), s = se(t, I(z) ? z : [z], e, r, a, i, n, l, s, _, p), o.base = e.__e, e.__u &= -161, o.__h.length && l.push(o), g && (o.__E = o.__ = null);
  } catch (M) {
    if (e.__v = null, _ || n != null) if (M.then) {
      for (e.__u |= _ ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; ) s = s.nextSibling;
      n[n.indexOf(s)] = null, e.__e = s;
    } else for (O = n.length; O--; ) G(n[O]);
    else e.__e = r.__e, e.__k = r.__k;
    b.__e(M, e, r);
  }
  else n == null && e.__v == r.__v ? (e.__k = r.__k, e.__e = r.__e) : s = e.__e = ye(r.__e, e, r, a, i, n, l, _, p);
  return (c = b.diffed) && c(e), 128 & e.__u ? void 0 : s;
}
function _e(t, e, r) {
  for (var a = 0; a < r.length; a++) J(r[a], r[++a], r[++a]);
  b.__c && b.__c(e, t), t.some(function(i) {
    try {
      t = i.__h, i.__h = [], t.some(function(n) {
        n.call(i);
      });
    } catch (n) {
      b.__e(n, i.__v);
    }
  });
}
function ce(t) {
  return typeof t != "object" || t == null || t.__b && t.__b > 0 ? t : I(t) ? t.map(ce) : k({}, t);
}
function ye(t, e, r, a, i, n, l, s, _) {
  var p, c, o, d, h, v, m, g = r.props, u = e.props, f = e.type;
  if (f == "svg" ? i = "http://www.w3.org/2000/svg" : f == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), n != null) {
    for (p = 0; p < n.length; p++) if ((h = n[p]) && "setAttribute" in h == !!f && (f ? h.localName == f : h.nodeType == 3)) {
      t = h, n[p] = null;
      break;
    }
  }
  if (t == null) {
    if (f == null) return document.createTextNode(u);
    t = document.createElementNS(i, f, u.is && u), s && (b.__m && b.__m(e, n), s = !1), n = null;
  }
  if (f == null) g === u || s && t.data == u || (t.data = u);
  else {
    if (n = n && D.call(t.childNodes), g = r.props || H, !s && n != null) for (g = {}, p = 0; p < t.attributes.length; p++) g[(h = t.attributes[p]).name] = h.value;
    for (p in g) if (h = g[p], p != "children") {
      if (p == "dangerouslySetInnerHTML") o = h;
      else if (!(p in u)) {
        if (p == "value" && "defaultValue" in u || p == "checked" && "defaultChecked" in u) continue;
        L(t, p, null, h, i);
      }
    }
    for (p in u) h = u[p], p == "children" ? d = h : p == "dangerouslySetInnerHTML" ? c = h : p == "value" ? v = h : p == "checked" ? m = h : s && typeof h != "function" || g[p] === h || L(t, p, h, g[p], i);
    if (c) s || o && (c.__html == o.__html || c.__html == t.innerHTML) || (t.innerHTML = c.__html), e.__k = [];
    else if (o && (t.innerHTML = ""), se(e.type == "template" ? t.content : t, I(d) ? d : [d], e, r, a, f == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, n, l, n ? n[0] : r.__k && C(r, 0), s, _), n != null) for (p = n.length; p--; ) G(n[p]);
    s || (p = "value", f == "progress" && v == null ? t.removeAttribute("value") : v != null && (v !== t[p] || f == "progress" && !v || f == "option" && v != g[p]) && L(t, p, v, g[p], i), p = "checked", m != null && m != t[p] && L(t, p, m, g[p], i));
  }
  return t;
}
function J(t, e, r) {
  try {
    if (typeof t == "function") {
      var a = typeof t.__u == "function";
      a && t.__u(), a && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (i) {
    b.__e(i, r);
  }
}
function he(t, e, r) {
  var a, i;
  if (b.unmount && b.unmount(t), (a = t.ref) && (a.current && a.current != t.__e || J(a, null, e)), (a = t.__c) != null) {
    if (a.componentWillUnmount) try {
      a.componentWillUnmount();
    } catch (n) {
      b.__e(n, e);
    }
    a.base = a.__P = null;
  }
  if (a = t.__k) for (i = 0; i < a.length; i++) a[i] && he(a[i], e, r || typeof t.type != "function");
  r || G(t.__e), t.__c = t.__ = t.__e = void 0;
}
function ke(t, e, r) {
  return this.constructor(t, r);
}
function $(t, e, r) {
  var a, i, n, l;
  e == document && (e = document.documentElement), b.__ && b.__(t, e), i = (a = typeof r == "function") ? null : r && r.__k || e.__k, n = [], l = [], Y(e, t = (!a && r || e).__k = T(W, null, [t]), i || H, H, e.namespaceURI, !a && r ? [r] : i ? null : e.firstChild ? D.call(e.childNodes) : null, n, !a && r ? r : i ? i.__e : e.firstChild, a, l), _e(n, t, l);
}
function de(t, e) {
  $(t, e, de);
}
function we(t, e, r) {
  var a, i, n, l, s = k({}, t.props);
  for (n in t.type && t.type.defaultProps && (l = t.type.defaultProps), e) n == "key" ? a = e[n] : n == "ref" ? i = e[n] : s[n] = e[n] == null && l != null ? l[n] : e[n];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? D.call(arguments, 2) : r), E(t.type, s, a || t.key, i || t.ref, null);
}
D = ie.slice, b = { __e: function(t, e, r, a) {
  for (var i, n, l; e = e.__; ) if ((i = e.__c) && !i.__) try {
    if ((n = i.constructor) && n.getDerivedStateFromError != null && (i.setState(n.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, a || {}), l = i.__d), l) return i.__E = i;
  } catch (s) {
    t = s;
  }
  throw t;
} }, re = 0, U.prototype.setState = function(t, e) {
  var r;
  r = this.__s != null && this.__s != this.state ? this.__s : this.__s = k({}, this.state), typeof t == "function" && (t = t(k({}, r), this.props)), t && k(r, t), t != null && this.__v && (e && this._sb.push(e), X(this));
}, U.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), X(this));
}, U.prototype.render = W, S = [], oe = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ne = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, j.__r = 0, ae = /(PointerCapture)$|Capture$/i, q = 0, V = ee(!1), B = ee(!0);
var xe = 0;
function R(t, e, r, a, i, n) {
  e || (e = {});
  var l, s, _ = e;
  if ("ref" in _) for (s in _ = {}, e) s == "ref" ? l = e[s] : _[s] = e[s];
  var p = { type: t, props: _, key: r, ref: l, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --xe, __i: -1, __u: 0, __source: i, __self: n };
  if (typeof t == "function" && (l = t.defaultProps)) for (s in l) _[s] === void 0 && (_[s] = l[s]);
  return b.vnode && b.vnode(p), p;
}
const te = (t) => T("slot", t), Se = (t) => {
  if (t == null)
    return "";
  if (typeof t != "object")
    return t.toString();
  Array.isArray(t) && t.map((a) => a.toString().replaceAll(",", "\\,")).join(",");
  const e = Object.keys(t), r = new FormData();
  return e.forEach((a) => {
    r.append(a, t[a].toString());
  }), r;
}, Ce = (t, e, r) => {
  t[e] ? t[e].push(r) : t[e] = [r];
}, Pe = (t, e) => {
  var s;
  const r = (e == null ? void 0 : e.properties) ?? [], a = (e == null ? void 0 : e.adoptedStyleSheets) ?? [], i = r.filter((_) => "attribute" in _).map((_) => _.attribute.name), n = (s = r.find((_) => _.formAssociated)) == null ? void 0 : s.name;
  class l extends HTMLElement {
    constructor() {
      super();
      x(this, "_root");
      x(this, "_vdom");
      x(this, "_internals");
      x(this, "_props");
      x(this, "_attributeChangeHooks");
      this._root = this.attachShadow({ mode: "open" }), this._root.adoptedStyleSheets = a, this._vdom = null, this._internals = n ? this.attachInternals() : null, this._props = {}, this._attributeChangeHooks = {}, r.forEach((c) => this.registerProperty(c));
    }
    parseAttribute(c) {
      return c.type(this.getAttribute(c.name));
    }
    registerProperty(c) {
      const o = c.name, d = n === o, h = () => this._props[o].value, v = (g, u) => {
        g !== this._props[o].value && (this._props[o]._value = g, u && (this._props[o]._dirty = !0), d && this._internals && this._internals.setFormValue(Se(g)), this.rerender());
      };
      Object.defineProperty(this, o, {
        get: h,
        set: (g) => v(g, !0)
      });
      const m = "initialValue" in c ? c.initialValue : this.parseAttribute(c.attribute);
      if (this._props[o] = {
        _value: m,
        _dirty: !1,
        get value() {
          return this._value;
        },
        set value(g) {
          v(g, !0);
        }
      }, "attribute" in c) {
        const g = (u) => {
          var f;
          (f = this._props[o]) != null && f._dirty || v(c.attribute.type(u), !1);
        };
        Ce(this._attributeChangeHooks, o, g);
      }
    }
    rerender() {
      this._vdom && (this._vdom = we(this._vdom, this._props), $(this._vdom, this._root));
    }
    connectedCallback() {
      const c = Object.fromEntries(
        ((e == null ? void 0 : e.slots) ?? []).map((d) => [
          d,
          T(te, { name: d }, null)
        ])
      ), o = { ...this._props, ...c };
      this._vdom = T(t, o, T(te, { name: void 0 }, null)), (this.hasAttribute("hydrate") ? de : $)(this._vdom, this._root);
    }
    disconnectedCallback() {
      this._vdom = null, $(null, this._root);
    }
    attributeChangedCallback(c, o, d) {
      this._attributeChangeHooks[c] && this._attributeChangeHooks[c].forEach((h) => h(d));
    }
  }
  return x(l, "observedAttributes", i), x(l, "formAssociated", !!n), l;
}, Ae = (t, e, r) => {
  const a = Pe(t, r);
  return customElements.define(e, a);
}, ze = (t) => t && t !== "false" && t !== "0" || t === "", ue = (...t) => {
  const e = new CSSStyleSheet();
  return e.replaceSync(t.join("")), e;
}, Me = "/*! destyle.css v4.0.1 | MIT License | https://github.com/nicolas-cusan/destyle.min.css */*,:before,:after{box-sizing:border-box;border-style:solid;border-width:0;min-width:0}html{line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}body{margin:0}main{display:block}p,table,blockquote,address,pre,iframe,form,figure,dl{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit;margin:0}ul,ol{margin:0;padding:0;list-style:none}dt{font-weight:700}dd{margin-left:0}hr{box-sizing:content-box;height:0;overflow:visible;border-top-width:1px;margin:0;clear:both;color:inherit}pre{font-family:monospace,monospace;font-size:inherit}address{font-style:inherit}a{background-color:transparent;text-decoration:none;color:inherit}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:inherit}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}svg,img,embed,object,iframe{vertical-align:bottom}button,input,optgroup,select,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;vertical-align:middle;color:inherit;font:inherit;background:transparent;padding:0;margin:0;border-radius:0;text-align:inherit;text-transform:inherit}button,[type=button],[type=reset],[type=submit]{cursor:pointer}button:disabled,[type=button]:disabled,[type=reset]:disabled,[type=submit]:disabled{cursor:default}:-moz-focusring{outline:auto}select:disabled{opacity:inherit}option{padding:0}fieldset{margin:0;padding:0;min-width:0}legend{padding:0}progress{vertical-align:baseline}textarea{overflow:auto}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=number]{-moz-appearance:textfield}label[for]{cursor:pointer}details{display:block}summary{display:list-item}[contenteditable]:focus{outline:auto}table{border-color:inherit;border-collapse:collapse}caption{text-align:left}td,th{vertical-align:top;padding:0}th{text-align:left;font-weight:700}:root,:host{--phi-color-palette-neutral-lighter: #ffb81cff;--phi-color-palette-neutral-base: #eeaa00ff;--phi-color-palette-neutral-darker: #cd9200ff;--phi-color-palette-neutral-bg: #eeaa0020;--phi-color-palette-neutral-outline: #eeaa0030;--phi-color-palette-danger-lighter: #fa837eff;--phi-color-palette-danger-base: #f76b68ff;--phi-color-palette-danger-darker: #e53c42ff;--phi-color-palette-danger-bg: #f76b6820;--phi-color-palette-danger-outline: #f76b6830;--phi-color-bg: #ffffffff;--phi-color-distant-fg: #ffffffff;--phi-color-fg: #000000d0;--phi-color-border: #00000040;--phi-color-neutral-bg: var(--phi-color-palette-neutral-bg);--phi-color-neutral-hover: var(--phi-color-palette-neutral-lighter);--phi-color-neutral-default: var(--phi-color-palette-neutral-base);--phi-color-neutral-active: var(--phi-color-palette-neutral-darker);--phi-color-danger-bg: var(--phi-color-palette-danger-bg);--phi-color-danger-hover: var(--phi-color-palette-danger-lighter);--phi-color-danger-default: var(--phi-color-palette-danger-base);--phi-color-danger-active: var(--phi-color-palette-danger-darker);--phi-shadow-pressable-default: 0 1px #00000040;--phi-shadow-pressable-neutral-default: 0 1px #00000020, 0 1px var(--phi-color-palette-neutral-base);--phi-shadow-pressable-neutral-hover: 0 1px #00000020, 0 1px var(--phi-color-palette-neutral-lighter);--phi-shadow-pressable-danger-default: 0 1px #00000020, 0 1px var(--phi-color-palette-danger-base);--phi-shadow-pressable-danger-hover: 0 1px #00000020, 0 1px var(--phi-color-palette-danger-lighter);--phi-shadow-focus-neutral: 0 0 0 2px var(--phi-color-palette-neutral-outline);--phi-shadow-focus-danger: 0 0 0 2px var(--phi-color-palette-danger-outline);--phi-fontsize-md: 14px;--phi-fontsize-icon-md: 17.5px;--phi-fontsize-icon-lg: 26.25px;--phi-radius-md: 8.75px;--phi-spacing-padding-sm: 4.25px ;--phi-spacing-padding-md: 13px ;--phi-spacing-margin-inline: 5.25px}@media (prefers-color-scheme: dark){:root{--phi-color-palette-neutral-lighter: #e6af47ff;--phi-color-palette-neutral-base: #d7a139ff;--phi-color-palette-neutral-darker: #c79431ff;--phi-color-palette-neutral-bg: #d7a13920;--phi-color-palette-neutral-outline: #d7a13930;--phi-color-palette-danger-lighter: #f38882ff;--phi-color-palette-danger-base: #ee736eff;--phi-color-palette-danger-darker: #e65f5cff;--phi-color-palette-danger-bg: #ee736e20;--phi-color-palette-danger-outline: #ee736e30;--phi-color-bg: #222222ff;--phi-color-distant-fg: #222222ff;--phi-color-fg: #ffffffd0;--phi-color-border: #ffffff40;--phi-color-neutral-hover: var(--phi-color-palette-neutral-darker);--phi-color-neutral-active: var(--phi-color-palette-neutral-lighter);--phi-color-danger-hover: var(--phi-color-palette-danger-darker);--phi-color-danger-active: var(--phi-color-palette-danger-lighter)}}body,:host{font-family:Helvetica Neue,Arial,Hiragino Kaku Gothic ProN,Hiragino Sans,Meiryo,sans-serif;font-size:var(--phi-fontsize-md);background-color:var(--phi-color-bg);color:var(--phi-color-fg);line-height:1.25em}", Te = ue(Me), Ee = ".phi-button{--phi-color-accent-default: var(--phi-color-neutral-default);--phi-color-accent-hover: var(--phi-color-neutral-hover);--phi-color-accent-active: var(--phi-color-neutral-active);--phi-color-accent-bg: var(--phi-color-neutral-bg);--phi-shadow-pressable-accent-default: var(--phi-shadow-pressable-neutral-default);--phi-shadow-pressable-accent-hover: var(--phi-shadow-pressable-neutral-hover);display:inline-flex;align-items:center;font-size:var(--phi-fontsize-md);height:calc(var(--phi-fontsize-md) * 3);padding:0 var(--phi-spacing-padding-md);gap:var(--phi-spacing-margin-inline);border-radius:var(--phi-radius-md);cursor:pointer;-webkit-user-select:none;user-select:none}.phi-button.danger{--phi-color-accent-default: var(--phi-color-danger-default);--phi-color-accent-hover: var(--phi-color-danger-hover);--phi-color-accent-active: var(--phi-color-danger-active);--phi-color-accent-bg: var(--phi-color-danger-bg);--phi-shadow-pressable-accent-default: var(--phi-shadow-pressable-danger-default);--phi-shadow-pressable-accent-hover: var(--phi-shadow-pressable-danger-hover)}.phi-button.primary{color:var(--phi-color-distant-fg);background-color:var(--phi-color-accent-default);border:1px solid var(--phi-color-accent-default);box-shadow:var(--phi-shadow-pressable-accent-default);transform:translateY(-1px)}.phi-button.primary:hover{color:var(--phi-color-distant-fg);background-color:var(--phi-color-accent-hover);border-color:var(--phi-color-accent-hover);box-shadow:var(--phi-shadow-pressable-accent-hover)}.phi-button.primary:active{transform:none;box-shadow:none}.phi-button.default{color:var(--phi-color-fg);background-color:transparent;border:1px solid currentColor;box-shadow:var(--phi-shadow-pressable-default);transform:translateY(-1px)}.phi-button.default:hover{color:var(--phi-color-accent-default);box-shadow:var(--phi-shadow-pressable-accent-hover)}.phi-button.default:active{transform:none;box-shadow:none}.phi-button.dotted{color:var(--phi-color-fg);background-color:transparent;border:1px dashed currentColor}.phi-button.dotted:hover:not(:active){color:var(--phi-color-accent-default)}.phi-button.dotted:active{color:var(--phi-color-accent-active);background-color:var(--phi-color-accent-bg)}.phi-button>.icon{display:inline-block;font-size:var(--phi-fontsize-icon-md);line-height:1em}", He = ({
  onClick: t,
  danger: e,
  variant: r = "default",
  icon: a,
  children: i
}) => /* @__PURE__ */ R(
  "button",
  {
    className: `phi-button ${r} ${e ? "danger" : ""}`,
    onClick: t,
    children: [
      a && /* @__PURE__ */ R("span", { className: "icon", children: a }),
      i
    ]
  }
), De = ue(Ee), Fe = ({ danger: t, variant: e, icon: r, children: a }) => /* @__PURE__ */ R(He, { icon: r, danger: t.value, variant: e.value, children: a }), Ne = () => Ae(Fe, "phi-button", {
  // Add styles to the ShadowDOM
  adoptedStyleSheets: [Te, De],
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
    // attribute: { name: "variant", type: parseVariant }
    initialValue: "primary"
  }]
}), Ue = () => {
  Ne();
};
export {
  Ue as default
};
//# sourceMappingURL=custom-elements.js.map
