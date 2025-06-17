var me = Object.defineProperty;
var ve = (t, e, n) => e in t ? me(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var S = (t, e, n) => ve(t, typeof e != "symbol" ? e + "" : e, n);
var D, g, le, C, ne, se, ce, pe, K, Y, J, N = {}, _e = [], ye = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, B = Array.isArray;
function w(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function Q(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function E(t, e, n) {
  var i, a, o, l = {};
  for (o in e) o == "key" ? i = e[o] : o == "ref" ? a = e[o] : l[o] = e[o];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? D.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null) for (o in t.defaultProps) l[o] == null && (l[o] = t.defaultProps[o]);
  return M(t, l, i, a, null);
}
function M(t, e, n, i, a) {
  var o = { type: t, props: e, key: n, ref: i, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: a ?? ++le, __i: -1, __u: 0 };
  return a == null && g.vnode != null && g.vnode(o), o;
}
function V(t) {
  return t.children;
}
function I(t, e) {
  this.props = t, this.context = e;
}
function $(t, e) {
  if (e == null) return t.__ ? $(t.__, t.__i + 1) : null;
  for (var n; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) return n.__e;
  return typeof t.type == "function" ? $(t) : null;
}
function he(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) {
      t.__e = t.__c.base = n.__e;
      break;
    }
    return he(t);
  }
}
function re(t) {
  (!t.__d && (t.__d = !0) && C.push(t) && !O.__r++ || ne != g.debounceRendering) && ((ne = g.debounceRendering) || se)(O);
}
function O() {
  for (var t, e, n, i, a, o, l, s = 1; C.length; ) C.length > s && C.sort(ce), t = C.shift(), s = C.length, t.__d && (n = void 0, a = (i = (e = t).__v).__e, o = [], l = [], e.__P && ((n = w({}, i)).__v = i.__v + 1, g.vnode && g.vnode(n), X(e.__P, n, i, e.__n, e.__P.namespaceURI, 32 & i.__u ? [a] : null, o, a ?? $(i), !!(32 & i.__u), l), n.__v = i.__v, n.__.__k[n.__i] = n, fe(o, n, l), n.__e != a && he(n)));
  O.__r = 0;
}
function ue(t, e, n, i, a, o, l, s, _, c, h) {
  var r, f, p, u, v, m, d = i && i.__k || _e, b = e.length;
  for (_ = ke(n, e, d, _, b), r = 0; r < b; r++) (p = n.__k[r]) != null && (f = p.__i == -1 ? N : d[p.__i] || N, p.__i = r, m = X(t, p, f, a, o, l, s, _, c, h), u = p.__e, p.ref && f.ref != p.ref && (f.ref && Z(f.ref, null, p), h.push(p.ref, p.__c || u, p)), v == null && u != null && (v = u), 4 & p.__u || f.__k === p.__k ? _ = de(p, _, t) : typeof p.type == "function" && m !== void 0 ? _ = m : u && (_ = u.nextSibling), p.__u &= -7);
  return n.__e = v, _;
}
function ke(t, e, n, i, a) {
  var o, l, s, _, c, h = n.length, r = h, f = 0;
  for (t.__k = new Array(a), o = 0; o < a; o++) (l = e[o]) != null && typeof l != "boolean" && typeof l != "function" ? (_ = o + f, (l = t.__k[o] = typeof l == "string" || typeof l == "number" || typeof l == "bigint" || l.constructor == String ? M(null, l, null, null, null) : B(l) ? M(V, { children: l }, null, null, null) : l.constructor == null && l.__b > 0 ? M(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l).__ = t, l.__b = t.__b + 1, s = null, (c = l.__i = we(l, n, _, r)) != -1 && (r--, (s = n[c]) && (s.__u |= 2)), s == null || s.__v == null ? (c == -1 && (a > h ? f-- : a < h && f++), typeof l.type != "function" && (l.__u |= 4)) : c != _ && (c == _ - 1 ? f-- : c == _ + 1 ? f++ : (c > _ ? f-- : f++, l.__u |= 4))) : t.__k[o] = null;
  if (r) for (o = 0; o < h; o++) (s = n[o]) != null && (2 & s.__u) == 0 && (s.__e == i && (i = $(s)), ge(s, s));
  return i;
}
function de(t, e, n) {
  var i, a;
  if (typeof t.type == "function") {
    for (i = t.__k, a = 0; i && a < i.length; a++) i[a] && (i[a].__ = t, e = de(i[a], e, n));
    return e;
  }
  t.__e != e && (e && t.type && !n.contains(e) && (e = $(t)), n.insertBefore(t.__e, e || null), e = t.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function we(t, e, n, i) {
  var a, o, l = t.key, s = t.type, _ = e[n];
  if (_ === null && t.key == null || _ && l == _.key && s == _.type && (2 & _.__u) == 0) return n;
  if (i > (_ != null && (2 & _.__u) == 0 ? 1 : 0)) for (a = n - 1, o = n + 1; a >= 0 || o < e.length; ) {
    if (a >= 0) {
      if ((_ = e[a]) && (2 & _.__u) == 0 && l == _.key && s == _.type) return a;
      a--;
    }
    if (o < e.length) {
      if ((_ = e[o]) && (2 & _.__u) == 0 && l == _.key && s == _.type) return o;
      o++;
    }
  }
  return -1;
}
function oe(t, e, n) {
  e[0] == "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || ye.test(e) ? n : n + "px";
}
function H(t, e, n, i, a) {
  var o, l;
  e: if (e == "style") if (typeof n == "string") t.style.cssText = n;
  else {
    if (typeof i == "string" && (t.style.cssText = i = ""), i) for (e in i) n && e in n || oe(t.style, e, "");
    if (n) for (e in n) i && n[e] == i[e] || oe(t.style, e, n[e]);
  }
  else if (e[0] == "o" && e[1] == "n") o = e != (e = e.replace(pe, "$1")), l = e.toLowerCase(), e = l in t || e == "onFocusOut" || e == "onFocusIn" ? l.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = n, n ? i ? n.u = i.u : (n.u = K, t.addEventListener(e, o ? J : Y, o)) : t.removeEventListener(e, o ? J : Y, o);
  else {
    if (a == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in t) try {
      t[e] = n ?? "";
      break e;
    } catch {
    }
    typeof n == "function" || (n == null || n === !1 && e[4] != "-" ? t.removeAttribute(e) : t.setAttribute(e, e == "popover" && n == 1 ? "" : n));
  }
}
function ie(t) {
  return function(e) {
    if (this.l) {
      var n = this.l[e.type + t];
      if (e.t == null) e.t = K++;
      else if (e.t < n.u) return;
      return n(g.event ? g.event(e) : e);
    }
  };
}
function X(t, e, n, i, a, o, l, s, _, c) {
  var h, r, f, p, u, v, m, d, b, P, x, U, A, te, W, j, q, k = e.type;
  if (e.constructor != null) return null;
  128 & n.__u && (_ = !!(32 & n.__u), o = [s = e.__e = n.__e]), (h = g.__b) && h(e);
  e: if (typeof k == "function") try {
    if (d = e.props, b = "prototype" in k && k.prototype.render, P = (h = k.contextType) && i[h.__c], x = h ? P ? P.props.value : h.__ : i, n.__c ? m = (r = e.__c = n.__c).__ = r.__E : (b ? e.__c = r = new k(d, x) : (e.__c = r = new I(d, x), r.constructor = k, r.render = Se), P && P.sub(r), r.props = d, r.state || (r.state = {}), r.context = x, r.__n = i, f = r.__d = !0, r.__h = [], r._sb = []), b && r.__s == null && (r.__s = r.state), b && k.getDerivedStateFromProps != null && (r.__s == r.state && (r.__s = w({}, r.__s)), w(r.__s, k.getDerivedStateFromProps(d, r.__s))), p = r.props, u = r.state, r.__v = e, f) b && k.getDerivedStateFromProps == null && r.componentWillMount != null && r.componentWillMount(), b && r.componentDidMount != null && r.__h.push(r.componentDidMount);
    else {
      if (b && k.getDerivedStateFromProps == null && d !== p && r.componentWillReceiveProps != null && r.componentWillReceiveProps(d, x), !r.__e && r.shouldComponentUpdate != null && r.shouldComponentUpdate(d, r.__s, x) === !1 || e.__v == n.__v) {
        for (e.__v != n.__v && (r.props = d, r.state = r.__s, r.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.some(function(T) {
          T && (T.__ = e);
        }), U = 0; U < r._sb.length; U++) r.__h.push(r._sb[U]);
        r._sb = [], r.__h.length && l.push(r);
        break e;
      }
      r.componentWillUpdate != null && r.componentWillUpdate(d, r.__s, x), b && r.componentDidUpdate != null && r.__h.push(function() {
        r.componentDidUpdate(p, u, v);
      });
    }
    if (r.context = x, r.props = d, r.__P = t, r.__e = !1, A = g.__r, te = 0, b) {
      for (r.state = r.__s, r.__d = !1, A && A(e), h = r.render(r.props, r.state, r.context), W = 0; W < r._sb.length; W++) r.__h.push(r._sb[W]);
      r._sb = [];
    } else do
      r.__d = !1, A && A(e), h = r.render(r.props, r.state, r.context), r.state = r.__s;
    while (r.__d && ++te < 25);
    r.state = r.__s, r.getChildContext != null && (i = w(w({}, i), r.getChildContext())), b && !f && r.getSnapshotBeforeUpdate != null && (v = r.getSnapshotBeforeUpdate(p, u)), j = h, h != null && h.type === V && h.key == null && (j = be(h.props.children)), s = ue(t, B(j) ? j : [j], e, n, i, a, o, l, s, _, c), r.base = e.__e, e.__u &= -161, r.__h.length && l.push(r), m && (r.__E = r.__ = null);
  } catch (T) {
    if (e.__v = null, _ || o != null) if (T.then) {
      for (e.__u |= _ ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; ) s = s.nextSibling;
      o[o.indexOf(s)] = null, e.__e = s;
    } else for (q = o.length; q--; ) Q(o[q]);
    else e.__e = n.__e, e.__k = n.__k;
    g.__e(T, e, n);
  }
  else o == null && e.__v == n.__v ? (e.__k = n.__k, e.__e = n.__e) : s = e.__e = xe(n.__e, e, n, i, a, o, l, _, c);
  return (h = g.diffed) && h(e), 128 & e.__u ? void 0 : s;
}
function fe(t, e, n) {
  for (var i = 0; i < n.length; i++) Z(n[i], n[++i], n[++i]);
  g.__c && g.__c(e, t), t.some(function(a) {
    try {
      t = a.__h, a.__h = [], t.some(function(o) {
        o.call(a);
      });
    } catch (o) {
      g.__e(o, a.__v);
    }
  });
}
function be(t) {
  return typeof t != "object" || t == null || t.__b && t.__b > 0 ? t : B(t) ? t.map(be) : w({}, t);
}
function xe(t, e, n, i, a, o, l, s, _) {
  var c, h, r, f, p, u, v, m = n.props, d = e.props, b = e.type;
  if (b == "svg" ? a = "http://www.w3.org/2000/svg" : b == "math" ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"), o != null) {
    for (c = 0; c < o.length; c++) if ((p = o[c]) && "setAttribute" in p == !!b && (b ? p.localName == b : p.nodeType == 3)) {
      t = p, o[c] = null;
      break;
    }
  }
  if (t == null) {
    if (b == null) return document.createTextNode(d);
    t = document.createElementNS(a, b, d.is && d), s && (g.__m && g.__m(e, o), s = !1), o = null;
  }
  if (b == null) m === d || s && t.data == d || (t.data = d);
  else {
    if (o = o && D.call(t.childNodes), m = n.props || N, !s && o != null) for (m = {}, c = 0; c < t.attributes.length; c++) m[(p = t.attributes[c]).name] = p.value;
    for (c in m) if (p = m[c], c != "children") {
      if (c == "dangerouslySetInnerHTML") r = p;
      else if (!(c in d)) {
        if (c == "value" && "defaultValue" in d || c == "checked" && "defaultChecked" in d) continue;
        H(t, c, null, p, a);
      }
    }
    for (c in d) p = d[c], c == "children" ? f = p : c == "dangerouslySetInnerHTML" ? h = p : c == "value" ? u = p : c == "checked" ? v = p : s && typeof p != "function" || m[c] === p || H(t, c, p, m[c], a);
    if (h) s || r && (h.__html == r.__html || h.__html == t.innerHTML) || (t.innerHTML = h.__html), e.__k = [];
    else if (r && (t.innerHTML = ""), ue(e.type == "template" ? t.content : t, B(f) ? f : [f], e, n, i, b == "foreignObject" ? "http://www.w3.org/1999/xhtml" : a, o, l, o ? o[0] : n.__k && $(n, 0), s, _), o != null) for (c = o.length; c--; ) Q(o[c]);
    s || (c = "value", b == "progress" && u == null ? t.removeAttribute("value") : u != null && (u !== t[c] || b == "progress" && !u || b == "option" && u != m[c]) && H(t, c, u, m[c], a), c = "checked", v != null && v != t[c] && H(t, c, v, m[c], a));
  }
  return t;
}
function Z(t, e, n) {
  try {
    if (typeof t == "function") {
      var i = typeof t.__u == "function";
      i && t.__u(), i && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (a) {
    g.__e(a, n);
  }
}
function ge(t, e, n) {
  var i, a;
  if (g.unmount && g.unmount(t), (i = t.ref) && (i.current && i.current != t.__e || Z(i, null, e)), (i = t.__c) != null) {
    if (i.componentWillUnmount) try {
      i.componentWillUnmount();
    } catch (o) {
      g.__e(o, e);
    }
    i.base = i.__P = null;
  }
  if (i = t.__k) for (a = 0; a < i.length; a++) i[a] && ge(i[a], e, n || typeof t.type != "function");
  n || Q(t.__e), t.__c = t.__ = t.__e = void 0;
}
function Se(t, e, n) {
  return this.constructor(t, n);
}
function G(t, e, n) {
  var i, a, o, l;
  e == document && (e = document.documentElement), g.__ && g.__(t, e), a = (i = !1) ? null : e.__k, o = [], l = [], X(e, t = e.__k = E(V, null, [t]), a || N, N, e.namespaceURI, a ? null : e.firstChild ? D.call(e.childNodes) : null, o, a ? a.__e : e.firstChild, i, l), fe(o, t, l);
}
function Ce(t, e, n) {
  var i, a, o, l, s = w({}, t.props);
  for (o in t.type && t.type.defaultProps && (l = t.type.defaultProps), e) o == "key" ? i = e[o] : o == "ref" ? a = e[o] : s[o] = e[o] == null && l != null ? l[o] : e[o];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? D.call(arguments, 2) : n), M(t.type, s, i || t.key, a || t.ref, null);
}
D = _e.slice, g = { __e: function(t, e, n, i) {
  for (var a, o, l; e = e.__; ) if ((a = e.__c) && !a.__) try {
    if ((o = a.constructor) && o.getDerivedStateFromError != null && (a.setState(o.getDerivedStateFromError(t)), l = a.__d), a.componentDidCatch != null && (a.componentDidCatch(t, i || {}), l = a.__d), l) return a.__E = a;
  } catch (s) {
    t = s;
  }
  throw t;
} }, le = 0, I.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = w({}, this.state), typeof t == "function" && (t = t(w({}, n), this.props)), t && w(n, t), t != null && this.__v && (e && this._sb.push(e), re(this));
}, I.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), re(this));
}, I.prototype.render = V, C = [], se = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ce = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, O.__r = 0, pe = /(PointerCapture)$|Capture$/i, K = 0, Y = ie(!1), J = ie(!0);
var $e = 0;
function y(t, e, n, i, a, o) {
  e || (e = {});
  var l, s, _ = e;
  if ("ref" in _) for (s in _ = {}, e) s == "ref" ? l = e[s] : _[s] = e[s];
  var c = { type: t, props: _, key: n, ref: l, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --$e, __i: -1, __u: 0, __source: a, __self: o };
  if (typeof t == "function" && (l = t.defaultProps)) for (s in l) _[s] === void 0 && (_[s] = l[s]);
  return g.vnode && g.vnode(c), c;
}
const ee = (t) => t && t !== "false" && t !== "0" || t === "", R = (t, e) => {
  const n = [t, ...e];
  return (i) => {
    const a = (i == null ? void 0 : i.toString()) ?? "";
    return n.find((o) => o === a) ?? t;
  };
}, ae = (t) => E("slot", t), ze = (t) => {
  if (t == null)
    return "";
  if (typeof t != "object")
    return t.toString();
  Array.isArray(t) && t.map((i) => i.toString().replaceAll(",", "\\,")).join(",");
  const e = Object.keys(t), n = new FormData();
  return e.forEach((i) => {
    n.append(i, t[i].toString());
  }), n;
}, Pe = (t, e) => {
  var c, h;
  const n = (e == null ? void 0 : e.properties) ?? [], i = (e == null ? void 0 : e.slots) ?? [], a = ((c = e == null ? void 0 : e.adoptedStyleSheets) == null ? void 0 : c.filter((r) => !!r)) ?? [], o = Object.fromEntries(
    n.filter((r) => "attribute" in r).map((r) => [r.attribute.name, { prop: r.name, parser: r.attribute.type }])
  ), l = Object.keys(o), s = (h = n.find((r) => r.formAssociated)) == null ? void 0 : h.name;
  class _ extends HTMLElement {
    constructor() {
      super();
      S(this, "_root");
      S(this, "_vdom", null);
      S(this, "_internals");
      S(this, "_props");
      S(this, "_frameRequested", !1);
      this._root = this.attachShadow({ mode: "open" }), this._root.adoptedStyleSheets = a, this._vdom = null, this._internals = s ? this.attachInternals() : null;
      const p = this;
      this._props = Object.fromEntries(
        n.map((u) => {
          const v = "initialValue" in u ? u.initialValue : this.parseAttribute(u.attribute);
          return [u.name, {
            _dirty: !1,
            _value: v,
            get value() {
              return this._value;
            },
            set value(m) {
              p.setProp(u.name, m, !0);
            }
          }];
        })
      );
    }
    parseAttribute(p) {
      return p.type(this.getAttribute(p.name));
    }
    setProp(p, u, v) {
      this._props[p]._value !== u && (this._props[p]._value = u, v && (this._props[p]._dirty = !0), s === p && this._internals && this._internals.setFormValue(ze(u)), this.rerender());
    }
    rerender() {
      this._frameRequested || requestAnimationFrame(() => {
        this._vdom && (this._frameRequested = !1, this._vdom = Ce(this._vdom, this._props), G(this._vdom, this._root));
      });
    }
    connectedCallback() {
      const p = Object.fromEntries(
        i.map((v) => [v, E(ae, { name: v }, null)])
      ), u = { $el: this, ...this._props, ...p };
      this._vdom = E(t, u, E(ae, { name: void 0 }, null)), G(this._vdom, this._root);
    }
    disconnectedCallback() {
      this._vdom = null, G(null, this._root);
    }
    attributeChangedCallback(p, u, v) {
      const { parser: m, prop: d } = o[p];
      this._props[d]._dirty || this.setProp(d, m(v), !1);
    }
  }
  return S(_, "observedAttributes", l), S(_, "formAssociated", !!s), n.forEach((r) => Object.defineProperty(_.prototype, r.name, {
    get() {
      return this._props[r.name]._value;
    },
    set(f) {
      this.setProp(r.name, f, !0);
    }
  })), _;
}, F = (t, e, n) => {
  const i = Pe(t, n);
  return customElements.define(e, i);
}, z = (...t) => {
  if (typeof window > "u")
    return null;
  const e = new CSSStyleSheet();
  return e.replaceSync(t.join("")), e;
}, Ae = ({
  onClick: t,
  danger: e,
  variant: n = "default",
  icon: i,
  children: a
}) => /* @__PURE__ */ y("button", { className: `phi-button ${n} ${e ? "danger" : ""}`, onClick: t, children: [
  i && /* @__PURE__ */ y("span", { className: "icon", children: i }),
  a
] }), je = "/*! destyle.css v4.0.1 | MIT License | https://github.com/nicolas-cusan/destyle.min.css */*,:before,:after{box-sizing:border-box;border-style:solid;border-width:0;min-width:0}html{line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}body{margin:0}main{display:block}p,table,blockquote,address,pre,iframe,form,figure,dl{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit;margin:0}ul,ol{margin:0;padding:0;list-style:none}dt{font-weight:700}dd{margin-left:0}hr{box-sizing:content-box;height:0;overflow:visible;border-top-width:1px;margin:0;clear:both;color:inherit}pre{font-family:monospace,monospace;font-size:inherit}address{font-style:inherit}a{background-color:transparent;text-decoration:none;color:inherit}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:inherit}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}svg,img,embed,object,iframe{vertical-align:bottom}button,input,optgroup,select,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;vertical-align:middle;color:inherit;font:inherit;background:transparent;padding:0;margin:0;border-radius:0;text-align:inherit;text-transform:inherit}button,[type=button],[type=reset],[type=submit]{cursor:pointer}button:disabled,[type=button]:disabled,[type=reset]:disabled,[type=submit]:disabled{cursor:default}:-moz-focusring{outline:auto}select:disabled{opacity:inherit}option{padding:0}fieldset{margin:0;padding:0;min-width:0}legend{padding:0}progress{vertical-align:baseline}textarea{overflow:auto}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=number]{-moz-appearance:textfield}label[for]{cursor:pointer}details{display:block}summary{display:list-item}[contenteditable]:focus{outline:auto}table{border-color:inherit;border-collapse:collapse}caption{text-align:left}td,th{vertical-align:top;padding:0}th{text-align:left;font-weight:700}body,:host{font-family:Helvetica Neue,Arial,Hiragino Kaku Gothic ProN,Hiragino Sans,Meiryo,sans-serif;font-size:var(--phi-fontsize-md);background-color:var(--phi-color-bg);color:var(--phi-color-fg);line-height:1.25em}", L = z(je), Te = ".phi-button{--phi-color-accent-default: var(--phi-color-neutral-default);--phi-color-accent-hover: var(--phi-color-neutral-hover);--phi-color-accent-active: var(--phi-color-neutral-active);--phi-color-accent-bg: var(--phi-color-neutral-bg);--phi-shadow-pressable-accent-default: var(--phi-shadow-pressable-neutral-default);--phi-shadow-pressable-accent-hover: var(--phi-shadow-pressable-neutral-hover);display:flex;width:100%;align-items:center;justify-content:center;font-size:var(--phi-fontsize-md);height:calc(var(--phi-fontsize-md) * 3);padding:0 var(--phi-spacing-padding-md);gap:var(--phi-spacing-margin-inline);border-radius:var(--phi-radius-md);cursor:pointer;-webkit-user-select:none;user-select:none}.phi-button.danger{--phi-color-accent-default: var(--phi-color-danger-default);--phi-color-accent-hover: var(--phi-color-danger-hover);--phi-color-accent-active: var(--phi-color-danger-active);--phi-color-accent-bg: var(--phi-color-danger-bg);--phi-shadow-pressable-accent-default: var(--phi-shadow-pressable-danger-default);--phi-shadow-pressable-accent-hover: var(--phi-shadow-pressable-danger-hover)}.phi-button.primary{color:var(--phi-color-distant-fg);background-color:var(--phi-color-accent-default);border:1px solid var(--phi-color-accent-default);box-shadow:var(--phi-shadow-pressable-accent-default);transform:translateY(-1px)}.phi-button.primary:hover{color:var(--phi-color-distant-fg);background-color:var(--phi-color-accent-hover);border-color:var(--phi-color-accent-hover);box-shadow:var(--phi-shadow-pressable-accent-hover)}.phi-button.primary:active{transform:none;box-shadow:none}.phi-button.default{color:var(--phi-color-fg);background-color:transparent;border:1px solid currentColor;box-shadow:var(--phi-shadow-pressable-default);transform:translateY(-1px)}.phi-button.default:hover{color:var(--phi-color-accent-default);box-shadow:var(--phi-shadow-pressable-accent-hover)}.phi-button.default:active{transform:none;box-shadow:none}.phi-button.dotted{color:var(--phi-color-fg);background-color:transparent;border:1px dashed currentColor}.phi-button.dotted:hover:not(:active){color:var(--phi-color-accent-default)}.phi-button.dotted:active{color:var(--phi-color-accent-active);background-color:var(--phi-color-accent-bg)}.phi-button>.icon{display:inline-block;font-size:var(--phi-fontsize-icon-md);line-height:1em}", Ee = z(Te), Me = ({ $el: t, danger: e, variant: n, icon: i, children: a }) => /* @__PURE__ */ y(Ae, { icon: i, danger: e.value, variant: n.value, children: a }), Ne = () => F(Me, "phi-button", {
  adoptedStyleSheets: [L, Ee],
  slots: ["icon"],
  properties: [{
    name: "danger",
    attribute: { name: "danger", type: ee }
  }, {
    name: "variant",
    attribute: { name: "variant", type: R("default", ["primary", "dotted"]) }
  }]
}), De = ({
  onClick: t,
  danger: e,
  children: n
}) => /* @__PURE__ */ y("button", { className: `phi-icon-button ${e ? "danger" : ""}`, onClick: t, children: n }), Fe = ".phi-icon-button{--phi-color-accent-default: var(--phi-color-neutral-default);--phi-color-accent-active: var(--phi-color-neutral-active);--phi-color-accent-bg: var(--phi-color-neutral-bg);display:inline-block;padding:var(--phi-spacing-padding-sm);font-size:var(--phi-fontsize-icon-lg);line-height:1em;border-radius:50%;-webkit-user-select:none;user-select:none;cursor:pointer;color:var(--phi-color-border);background-color:transparent}.phi-icon-button.danger{--phi-color-accent-default: var(--phi-color-danger-default);--phi-color-accent-active: var(--phi-color-danger-active);--phi-color-accent-bg: var(--phi-color-danger-bg)}.phi-icon-button:hover:not(:active){color:var(--phi-color-accent-default)}.phi-icon-button:active{color:var(--phi-color-accent-active);background-color:var(--phi-color-accent-bg)}", Le = z(Fe), Ue = ({ $el: t, danger: e, children: n }) => /* @__PURE__ */ y(De, { danger: e.value, children: n }), We = () => F(Ue, "phi-icon-button", {
  adoptedStyleSheets: [L, Le],
  properties: [{
    name: "danger",
    attribute: { name: "danger", type: ee }
  }]
}), He = ({
  onClick: t,
  danger: e,
  children: n
}) => /* @__PURE__ */ y("button", { className: `phi-text-button ${e ? "danger" : ""}`, onClick: t, children: n }), Ie = ".phi-text-button{--phi-color-accent-default: var(--phi-color-neutral-default);--phi-color-accent-active: var(--phi-color-neutral-active);--phi-color-accent-bg: var(--phi-color-neutral-bg);display:inline;font-size:var(--phi-fontsize-md);cursor:pointer;-webkit-user-select:none;user-select:none;color:var(--phi-color-fg);background-color:transparent;border-bottom:1px dotted currentColor}.phi-text-button.danger{--phi-color-accent-default: var(--phi-color-danger-default);--phi-color-accent-active: var(--phi-color-danger-active);--phi-color-accent-bg: var(--phi-color-danger-bg)}.phi-text-button:hover:not(:active){color:var(--phi-color-accent-default)}.phi-text-button:active{color:var(--phi-color-accent-active);background-color:var(--phi-color-accent-bg)}", Oe = z(Ie), Re = ({ $el: t, danger: e, children: n }) => /* @__PURE__ */ y(He, { danger: e.value, children: n }), Be = () => F(Re, "phi-text-button", {
  adoptedStyleSheets: [L, Oe],
  properties: [{
    name: "danger",
    attribute: { name: "danger", type: ee }
  }]
}), Ve = ({ size: t, align: e, children: n }) => /* @__PURE__ */ y("div", { className: `phi-group ${t} ${e}`, children: n }), qe = ".phi-group{display:flex;width:100%;flex-wrap:wrap}.phi-group.left{justify-content:flex-start}.phi-group.right{justify-content:flex-end}.phi-group.center{justify-content:center}.phi-group.space-between{justify-content:space-between}.phi-group.md{gap:var(--phi-spacing-margin-md)}.phi-group.sm{gap:var(--phi-spacing-margin-sm)}", Ge = z(qe), Ye = ({ size: t, align: e, children: n }) => /* @__PURE__ */ y(Ve, { size: t.value, align: e.value, children: n }), Je = () => F(Ye, "phi-group", {
  adoptedStyleSheets: [L, Ge],
  properties: [{
    name: "size",
    attribute: { name: "size", type: R("md", ["sm"]) }
  }, {
    name: "align",
    attribute: { name: "align", type: R("left", ["center", "right", "space-between"]) }
  }]
}), Ke = ({ size: t, children: e }) => /* @__PURE__ */ y("div", { className: `phi-stack ${t}`, children: e }), Qe = ".phi-stack{display:flex;width:100%;flex-direction:column}.phi-stack.md{gap:var(--phi-spacing-margin-md)}.phi-stack.sm{gap:var(--phi-spacing-margin-sm)}", Xe = z(Qe), Ze = ({ size: t, children: e }) => /* @__PURE__ */ y(Ke, { size: t.value, children: e }), et = () => F(Ze, "phi-stack", {
  adoptedStyleSheets: [L, Xe],
  properties: [{
    name: "size",
    attribute: { name: "size", type: R("md", ["sm"]) }
  }]
}), nt = () => {
  typeof window < "u" && (Ne(), We(), Be(), Je(), et());
};
export {
  nt as default
};
//# sourceMappingURL=custom-elements.js.map
