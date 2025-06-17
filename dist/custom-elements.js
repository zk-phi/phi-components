var ve = Object.defineProperty;
var me = (t, e, r) => e in t ? ve(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var S = (t, e, r) => me(t, typeof e != "symbol" ? e + "" : e, r);
var N, g, le, C, re, se, ce, _e, K, G, Y, M = {}, pe = [], ye = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, I = Array.isArray;
function w(t, e) {
  for (var r in e) t[r] = e[r];
  return t;
}
function Q(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function T(t, e, r) {
  var i, a, o, l = {};
  for (o in e) o == "key" ? i = e[o] : o == "ref" ? a = e[o] : l[o] = e[o];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? N.call(arguments, 2) : r), typeof t == "function" && t.defaultProps != null) for (o in t.defaultProps) l[o] == null && (l[o] = t.defaultProps[o]);
  return E(t, l, i, a, null);
}
function E(t, e, r, i, a) {
  var o = { type: t, props: e, key: r, ref: i, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: a ?? ++le, __i: -1, __u: 0 };
  return a == null && g.vnode != null && g.vnode(o), o;
}
function O(t) {
  return t.children;
}
function W(t, e) {
  this.props = t, this.context = e;
}
function $(t, e) {
  if (e == null) return t.__ ? $(t.__, t.__i + 1) : null;
  for (var r; e < t.__k.length; e++) if ((r = t.__k[e]) != null && r.__e != null) return r.__e;
  return typeof t.type == "function" ? $(t) : null;
}
function ue(t) {
  var e, r;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++) if ((r = t.__k[e]) != null && r.__e != null) {
      t.__e = t.__c.base = r.__e;
      break;
    }
    return ue(t);
  }
}
function ne(t) {
  (!t.__d && (t.__d = !0) && C.push(t) && !H.__r++ || re != g.debounceRendering) && ((re = g.debounceRendering) || se)(H);
}
function H() {
  for (var t, e, r, i, a, o, l, s = 1; C.length; ) C.length > s && C.sort(ce), t = C.shift(), s = C.length, t.__d && (r = void 0, a = (i = (e = t).__v).__e, o = [], l = [], e.__P && ((r = w({}, i)).__v = i.__v + 1, g.vnode && g.vnode(r), X(e.__P, r, i, e.__n, e.__P.namespaceURI, 32 & i.__u ? [a] : null, o, a ?? $(i), !!(32 & i.__u), l), r.__v = i.__v, r.__.__k[r.__i] = r, fe(o, r, l), r.__e != a && ue(r)));
  H.__r = 0;
}
function he(t, e, r, i, a, o, l, s, p, c, u) {
  var n, f, _, h, m, v, d = i && i.__k || pe, b = e.length;
  for (p = we(r, e, d, p, b), n = 0; n < b; n++) (_ = r.__k[n]) != null && (f = _.__i == -1 ? M : d[_.__i] || M, _.__i = n, v = X(t, _, f, a, o, l, s, p, c, u), h = _.__e, _.ref && f.ref != _.ref && (f.ref && Z(f.ref, null, _), u.push(_.ref, _.__c || h, _)), m == null && h != null && (m = h), 4 & _.__u || f.__k === _.__k ? p = de(_, p, t) : typeof _.type == "function" && v !== void 0 ? p = v : h && (p = h.nextSibling), _.__u &= -7);
  return r.__e = m, p;
}
function we(t, e, r, i, a) {
  var o, l, s, p, c, u = r.length, n = u, f = 0;
  for (t.__k = new Array(a), o = 0; o < a; o++) (l = e[o]) != null && typeof l != "boolean" && typeof l != "function" ? (p = o + f, (l = t.__k[o] = typeof l == "string" || typeof l == "number" || typeof l == "bigint" || l.constructor == String ? E(null, l, null, null, null) : I(l) ? E(O, { children: l }, null, null, null) : l.constructor == null && l.__b > 0 ? E(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l).__ = t, l.__b = t.__b + 1, s = null, (c = l.__i = ke(l, r, p, n)) != -1 && (n--, (s = r[c]) && (s.__u |= 2)), s == null || s.__v == null ? (c == -1 && (a > u ? f-- : a < u && f++), typeof l.type != "function" && (l.__u |= 4)) : c != p && (c == p - 1 ? f-- : c == p + 1 ? f++ : (c > p ? f-- : f++, l.__u |= 4))) : t.__k[o] = null;
  if (n) for (o = 0; o < u; o++) (s = r[o]) != null && (2 & s.__u) == 0 && (s.__e == i && (i = $(s)), ge(s, s));
  return i;
}
function de(t, e, r) {
  var i, a;
  if (typeof t.type == "function") {
    for (i = t.__k, a = 0; i && a < i.length; a++) i[a] && (i[a].__ = t, e = de(i[a], e, r));
    return e;
  }
  t.__e != e && (e && t.type && !r.contains(e) && (e = $(t)), r.insertBefore(t.__e, e || null), e = t.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function ke(t, e, r, i) {
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
function oe(t, e, r) {
  e[0] == "-" ? t.setProperty(e, r ?? "") : t[e] = r == null ? "" : typeof r != "number" || ye.test(e) ? r : r + "px";
}
function U(t, e, r, i, a) {
  var o, l;
  e: if (e == "style") if (typeof r == "string") t.style.cssText = r;
  else {
    if (typeof i == "string" && (t.style.cssText = i = ""), i) for (e in i) r && e in r || oe(t.style, e, "");
    if (r) for (e in r) i && r[e] == i[e] || oe(t.style, e, r[e]);
  }
  else if (e[0] == "o" && e[1] == "n") o = e != (e = e.replace(_e, "$1")), l = e.toLowerCase(), e = l in t || e == "onFocusOut" || e == "onFocusIn" ? l.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = r, r ? i ? r.u = i.u : (r.u = K, t.addEventListener(e, o ? Y : G, o)) : t.removeEventListener(e, o ? Y : G, o);
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
function ie(t) {
  return function(e) {
    if (this.l) {
      var r = this.l[e.type + t];
      if (e.t == null) e.t = K++;
      else if (e.t < r.u) return;
      return r(g.event ? g.event(e) : e);
    }
  };
}
function X(t, e, r, i, a, o, l, s, p, c) {
  var u, n, f, _, h, m, v, d, b, P, x, F, z, te, L, A, V, y = e.type;
  if (e.constructor != null) return null;
  128 & r.__u && (p = !!(32 & r.__u), o = [s = e.__e = r.__e]), (u = g.__b) && u(e);
  e: if (typeof y == "function") try {
    if (d = e.props, b = "prototype" in y && y.prototype.render, P = (u = y.contextType) && i[u.__c], x = u ? P ? P.props.value : u.__ : i, r.__c ? v = (n = e.__c = r.__c).__ = n.__E : (b ? e.__c = n = new y(d, x) : (e.__c = n = new W(d, x), n.constructor = y, n.render = Se), P && P.sub(n), n.props = d, n.state || (n.state = {}), n.context = x, n.__n = i, f = n.__d = !0, n.__h = [], n._sb = []), b && n.__s == null && (n.__s = n.state), b && y.getDerivedStateFromProps != null && (n.__s == n.state && (n.__s = w({}, n.__s)), w(n.__s, y.getDerivedStateFromProps(d, n.__s))), _ = n.props, h = n.state, n.__v = e, f) b && y.getDerivedStateFromProps == null && n.componentWillMount != null && n.componentWillMount(), b && n.componentDidMount != null && n.__h.push(n.componentDidMount);
    else {
      if (b && y.getDerivedStateFromProps == null && d !== _ && n.componentWillReceiveProps != null && n.componentWillReceiveProps(d, x), !n.__e && n.shouldComponentUpdate != null && n.shouldComponentUpdate(d, n.__s, x) === !1 || e.__v == r.__v) {
        for (e.__v != r.__v && (n.props = d, n.state = n.__s, n.__d = !1), e.__e = r.__e, e.__k = r.__k, e.__k.some(function(j) {
          j && (j.__ = e);
        }), F = 0; F < n._sb.length; F++) n.__h.push(n._sb[F]);
        n._sb = [], n.__h.length && l.push(n);
        break e;
      }
      n.componentWillUpdate != null && n.componentWillUpdate(d, n.__s, x), b && n.componentDidUpdate != null && n.__h.push(function() {
        n.componentDidUpdate(_, h, m);
      });
    }
    if (n.context = x, n.props = d, n.__P = t, n.__e = !1, z = g.__r, te = 0, b) {
      for (n.state = n.__s, n.__d = !1, z && z(e), u = n.render(n.props, n.state, n.context), L = 0; L < n._sb.length; L++) n.__h.push(n._sb[L]);
      n._sb = [];
    } else do
      n.__d = !1, z && z(e), u = n.render(n.props, n.state, n.context), n.state = n.__s;
    while (n.__d && ++te < 25);
    n.state = n.__s, n.getChildContext != null && (i = w(w({}, i), n.getChildContext())), b && !f && n.getSnapshotBeforeUpdate != null && (m = n.getSnapshotBeforeUpdate(_, h)), A = u, u != null && u.type === O && u.key == null && (A = be(u.props.children)), s = he(t, I(A) ? A : [A], e, r, i, a, o, l, s, p, c), n.base = e.__e, e.__u &= -161, n.__h.length && l.push(n), v && (n.__E = n.__ = null);
  } catch (j) {
    if (e.__v = null, p || o != null) if (j.then) {
      for (e.__u |= p ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; ) s = s.nextSibling;
      o[o.indexOf(s)] = null, e.__e = s;
    } else for (V = o.length; V--; ) Q(o[V]);
    else e.__e = r.__e, e.__k = r.__k;
    g.__e(j, e, r);
  }
  else o == null && e.__v == r.__v ? (e.__k = r.__k, e.__e = r.__e) : s = e.__e = xe(r.__e, e, r, i, a, o, l, p, c);
  return (u = g.diffed) && u(e), 128 & e.__u ? void 0 : s;
}
function fe(t, e, r) {
  for (var i = 0; i < r.length; i++) Z(r[i], r[++i], r[++i]);
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
  return typeof t != "object" || t == null || t.__b && t.__b > 0 ? t : I(t) ? t.map(be) : w({}, t);
}
function xe(t, e, r, i, a, o, l, s, p) {
  var c, u, n, f, _, h, m, v = r.props, d = e.props, b = e.type;
  if (b == "svg" ? a = "http://www.w3.org/2000/svg" : b == "math" ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"), o != null) {
    for (c = 0; c < o.length; c++) if ((_ = o[c]) && "setAttribute" in _ == !!b && (b ? _.localName == b : _.nodeType == 3)) {
      t = _, o[c] = null;
      break;
    }
  }
  if (t == null) {
    if (b == null) return document.createTextNode(d);
    t = document.createElementNS(a, b, d.is && d), s && (g.__m && g.__m(e, o), s = !1), o = null;
  }
  if (b == null) v === d || s && t.data == d || (t.data = d);
  else {
    if (o = o && N.call(t.childNodes), v = r.props || M, !s && o != null) for (v = {}, c = 0; c < t.attributes.length; c++) v[(_ = t.attributes[c]).name] = _.value;
    for (c in v) if (_ = v[c], c != "children") {
      if (c == "dangerouslySetInnerHTML") n = _;
      else if (!(c in d)) {
        if (c == "value" && "defaultValue" in d || c == "checked" && "defaultChecked" in d) continue;
        U(t, c, null, _, a);
      }
    }
    for (c in d) _ = d[c], c == "children" ? f = _ : c == "dangerouslySetInnerHTML" ? u = _ : c == "value" ? h = _ : c == "checked" ? m = _ : s && typeof _ != "function" || v[c] === _ || U(t, c, _, v[c], a);
    if (u) s || n && (u.__html == n.__html || u.__html == t.innerHTML) || (t.innerHTML = u.__html), e.__k = [];
    else if (n && (t.innerHTML = ""), he(e.type == "template" ? t.content : t, I(f) ? f : [f], e, r, i, b == "foreignObject" ? "http://www.w3.org/1999/xhtml" : a, o, l, o ? o[0] : r.__k && $(r, 0), s, p), o != null) for (c = o.length; c--; ) Q(o[c]);
    s || (c = "value", b == "progress" && h == null ? t.removeAttribute("value") : h != null && (h !== t[c] || b == "progress" && !h || b == "option" && h != v[c]) && U(t, c, h, v[c], a), c = "checked", m != null && m != t[c] && U(t, c, m, v[c], a));
  }
  return t;
}
function Z(t, e, r) {
  try {
    if (typeof t == "function") {
      var i = typeof t.__u == "function";
      i && t.__u(), i && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (a) {
    g.__e(a, r);
  }
}
function ge(t, e, r) {
  var i, a;
  if (g.unmount && g.unmount(t), (i = t.ref) && (i.current && i.current != t.__e || Z(i, null, e)), (i = t.__c) != null) {
    if (i.componentWillUnmount) try {
      i.componentWillUnmount();
    } catch (o) {
      g.__e(o, e);
    }
    i.base = i.__P = null;
  }
  if (i = t.__k) for (a = 0; a < i.length; a++) i[a] && ge(i[a], e, r || typeof t.type != "function");
  r || Q(t.__e), t.__c = t.__ = t.__e = void 0;
}
function Se(t, e, r) {
  return this.constructor(t, r);
}
function q(t, e, r) {
  var i, a, o, l;
  e == document && (e = document.documentElement), g.__ && g.__(t, e), a = (i = !1) ? null : e.__k, o = [], l = [], X(e, t = e.__k = T(O, null, [t]), a || M, M, e.namespaceURI, a ? null : e.firstChild ? N.call(e.childNodes) : null, o, a ? a.__e : e.firstChild, i, l), fe(o, t, l);
}
function Ce(t, e, r) {
  var i, a, o, l, s = w({}, t.props);
  for (o in t.type && t.type.defaultProps && (l = t.type.defaultProps), e) o == "key" ? i = e[o] : o == "ref" ? a = e[o] : s[o] = e[o] == null && l != null ? l[o] : e[o];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? N.call(arguments, 2) : r), E(t.type, s, i || t.key, a || t.ref, null);
}
N = pe.slice, g = { __e: function(t, e, r, i) {
  for (var a, o, l; e = e.__; ) if ((a = e.__c) && !a.__) try {
    if ((o = a.constructor) && o.getDerivedStateFromError != null && (a.setState(o.getDerivedStateFromError(t)), l = a.__d), a.componentDidCatch != null && (a.componentDidCatch(t, i || {}), l = a.__d), l) return a.__E = a;
  } catch (s) {
    t = s;
  }
  throw t;
} }, le = 0, W.prototype.setState = function(t, e) {
  var r;
  r = this.__s != null && this.__s != this.state ? this.__s : this.__s = w({}, this.state), typeof t == "function" && (t = t(w({}, r), this.props)), t && w(r, t), t != null && this.__v && (e && this._sb.push(e), ne(this));
}, W.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), ne(this));
}, W.prototype.render = O, C = [], se = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ce = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, H.__r = 0, _e = /(PointerCapture)$|Capture$/i, K = 0, G = ie(!1), Y = ie(!0);
var $e = 0;
function k(t, e, r, i, a, o) {
  e || (e = {});
  var l, s, p = e;
  if ("ref" in p) for (s in p = {}, e) s == "ref" ? l = e[s] : p[s] = e[s];
  var c = { type: t, props: p, key: r, ref: l, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --$e, __i: -1, __u: 0, __source: a, __self: o };
  if (typeof t == "function" && (l = t.defaultProps)) for (s in l) p[s] === void 0 && (p[s] = l[s]);
  return g.vnode && g.vnode(c), c;
}
const ee = (t) => t && t !== "false" && t !== "0" || t === "", J = (t, e) => {
  const r = [t, ...e];
  return (i) => {
    const a = (i == null ? void 0 : i.toString()) ?? "";
    return r.find((o) => o === a) ?? t;
  };
}, ae = (t) => T("slot", t), Pe = (t) => {
  if (t == null)
    return "";
  if (typeof t != "object")
    return t.toString();
  Array.isArray(t) && t.map((i) => i.toString().replaceAll(",", "\\,")).join(",");
  const e = Object.keys(t), r = new FormData();
  return e.forEach((i) => {
    r.append(i, t[i].toString());
  }), r;
}, ze = (t, e) => {
  var c, u;
  const r = (e == null ? void 0 : e.properties) ?? [], i = (e == null ? void 0 : e.slots) ?? [], a = ((c = e == null ? void 0 : e.adoptedStyleSheets) == null ? void 0 : c.filter((n) => !!n)) ?? [], o = Object.fromEntries(
    r.filter((n) => "attribute" in n).map((n) => [n.attribute.name, { prop: n.name, parser: n.attribute.type }])
  ), l = Object.keys(o), s = (u = r.find((n) => n.formAssociated)) == null ? void 0 : u.name;
  class p extends HTMLElement {
    constructor() {
      super();
      S(this, "_root");
      S(this, "_vdom", null);
      S(this, "_internals");
      S(this, "_props");
      S(this, "_frameRequested", !1);
      this._root = this.attachShadow({ mode: "open" }), this._root.adoptedStyleSheets = a, this._vdom = null, this._internals = s ? this.attachInternals() : null;
      const _ = this;
      this._props = Object.fromEntries(
        r.map((h) => {
          const m = "initialValue" in h ? h.initialValue : this.parseAttribute(h.attribute);
          return [h.name, {
            _dirty: !1,
            _value: m,
            get value() {
              return this._value;
            },
            set value(v) {
              _.setProp(h.name, v, !0);
            }
          }];
        })
      );
    }
    parseAttribute(_) {
      return _.type(this.getAttribute(_.name));
    }
    setProp(_, h, m) {
      this._props[_]._value !== h && (this._props[_]._value = h, m && (this._props[_]._dirty = !0), s === _ && this._internals && this._internals.setFormValue(Pe(h)), this.rerender());
    }
    rerender() {
      this._frameRequested || requestAnimationFrame(() => {
        this._vdom && (this._frameRequested = !1, this._vdom = Ce(this._vdom, this._props), q(this._vdom, this._root));
      });
    }
    connectedCallback() {
      const _ = Object.fromEntries(
        i.map((m) => [m, T(ae, { name: m }, null)])
      ), h = { $el: this, ...this._props, ..._ };
      this._vdom = T(t, h, T(ae, { name: void 0 }, null)), q(this._vdom, this._root);
    }
    disconnectedCallback() {
      this._vdom = null, q(null, this._root);
    }
    attributeChangedCallback(_, h, m) {
      const { parser: v, prop: d } = o[_];
      this._props[d]._dirty || this.setProp(d, v(m), !1);
    }
  }
  return S(p, "observedAttributes", l), S(p, "formAssociated", !!s), r.forEach((n) => Object.defineProperty(p.prototype, n.name, {
    get() {
      return this._props[n.name]._value;
    },
    set(f) {
      this.setProp(n.name, f, !0);
    }
  })), p;
}, R = (t, e, r) => {
  const i = ze(t, r);
  return customElements.define(e, i);
}, D = (...t) => {
  if (typeof window > "u")
    return null;
  const e = new CSSStyleSheet();
  return e.replaceSync(t.join("")), e;
}, Ae = ({
  onClick: t,
  danger: e,
  variant: r = "default",
  icon: i,
  children: a
}) => /* @__PURE__ */ k("button", { className: `phi-button ${r} ${e ? "danger" : ""}`, onClick: t, children: [
  i && /* @__PURE__ */ k("span", { className: "icon", children: i }),
  a
] }), je = "/*! destyle.css v4.0.1 | MIT License | https://github.com/nicolas-cusan/destyle.min.css */*,:before,:after{box-sizing:border-box;border-style:solid;border-width:0;min-width:0}html{line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}body{margin:0}main{display:block}p,table,blockquote,address,pre,iframe,form,figure,dl{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit;margin:0}ul,ol{margin:0;padding:0;list-style:none}dt{font-weight:700}dd{margin-left:0}hr{box-sizing:content-box;height:0;overflow:visible;border-top-width:1px;margin:0;clear:both;color:inherit}pre{font-family:monospace,monospace;font-size:inherit}address{font-style:inherit}a{background-color:transparent;text-decoration:none;color:inherit}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:inherit}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}svg,img,embed,object,iframe{vertical-align:bottom}button,input,optgroup,select,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;vertical-align:middle;color:inherit;font:inherit;background:transparent;padding:0;margin:0;border-radius:0;text-align:inherit;text-transform:inherit}button,[type=button],[type=reset],[type=submit]{cursor:pointer}button:disabled,[type=button]:disabled,[type=reset]:disabled,[type=submit]:disabled{cursor:default}:-moz-focusring{outline:auto}select:disabled{opacity:inherit}option{padding:0}fieldset{margin:0;padding:0;min-width:0}legend{padding:0}progress{vertical-align:baseline}textarea{overflow:auto}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=number]{-moz-appearance:textfield}label[for]{cursor:pointer}details{display:block}summary{display:list-item}[contenteditable]:focus{outline:auto}table{border-color:inherit;border-collapse:collapse}caption{text-align:left}td,th{vertical-align:top;padding:0}th{text-align:left;font-weight:700}body,:host{font-family:Helvetica Neue,Arial,Hiragino Kaku Gothic ProN,Hiragino Sans,Meiryo,sans-serif;font-size:var(--phi-fontsize-md);background-color:var(--phi-color-bg);color:var(--phi-color-fg);line-height:1.25em}", B = D(je), Te = ".phi-button{--phi-color-accent-default: var(--phi-color-neutral-default);--phi-color-accent-hover: var(--phi-color-neutral-hover);--phi-color-accent-active: var(--phi-color-neutral-active);--phi-color-accent-bg: var(--phi-color-neutral-bg);--phi-shadow-pressable-accent-default: var(--phi-shadow-pressable-neutral-default);--phi-shadow-pressable-accent-hover: var(--phi-shadow-pressable-neutral-hover);display:flex;width:100%;align-items:center;justify-content:center;font-size:var(--phi-fontsize-md);height:calc(var(--phi-fontsize-md) * 3);padding:0 var(--phi-spacing-padding-md);gap:var(--phi-spacing-margin-inline);border-radius:var(--phi-radius-md);cursor:pointer;-webkit-user-select:none;user-select:none}.phi-button.danger{--phi-color-accent-default: var(--phi-color-danger-default);--phi-color-accent-hover: var(--phi-color-danger-hover);--phi-color-accent-active: var(--phi-color-danger-active);--phi-color-accent-bg: var(--phi-color-danger-bg);--phi-shadow-pressable-accent-default: var(--phi-shadow-pressable-danger-default);--phi-shadow-pressable-accent-hover: var(--phi-shadow-pressable-danger-hover)}.phi-button.primary{color:var(--phi-color-distant-fg);background-color:var(--phi-color-accent-default);border:1px solid var(--phi-color-accent-default);box-shadow:var(--phi-shadow-pressable-accent-default);transform:translateY(-1px)}.phi-button.primary:hover{color:var(--phi-color-distant-fg);background-color:var(--phi-color-accent-hover);border-color:var(--phi-color-accent-hover);box-shadow:var(--phi-shadow-pressable-accent-hover)}.phi-button.primary:active{transform:none;box-shadow:none}.phi-button.default{color:var(--phi-color-fg);background-color:transparent;border:1px solid currentColor;box-shadow:var(--phi-shadow-pressable-default);transform:translateY(-1px)}.phi-button.default:hover{color:var(--phi-color-accent-default);box-shadow:var(--phi-shadow-pressable-accent-hover)}.phi-button.default:active{transform:none;box-shadow:none}.phi-button.dotted{color:var(--phi-color-fg);background-color:transparent;border:1px dashed currentColor}.phi-button.dotted:hover:not(:active){color:var(--phi-color-accent-default)}.phi-button.dotted:active{color:var(--phi-color-accent-active);background-color:var(--phi-color-accent-bg)}.phi-button>.icon{display:inline-block;font-size:var(--phi-fontsize-icon-md);line-height:1em}", Ee = D(Te), Me = ({ $el: t, danger: e, variant: r, icon: i, children: a }) => /* @__PURE__ */ k(Ae, { icon: i, danger: e.value, variant: r.value, children: a }), Ne = () => R(Me, "phi-button", {
  adoptedStyleSheets: [B, Ee],
  slots: ["icon"],
  properties: [{
    name: "danger",
    attribute: { name: "danger", type: ee }
  }, {
    name: "variant",
    attribute: { name: "variant", type: J("default", ["primary", "dotted"]) }
  }]
}), De = ({
  onClick: t,
  danger: e,
  children: r
}) => /* @__PURE__ */ k("button", { className: `phi-icon-button ${e ? "danger" : ""}`, onClick: t, children: r }), Fe = ".phi-icon-button{--phi-color-accent-default: var(--phi-color-neutral-default);--phi-color-accent-active: var(--phi-color-neutral-active);--phi-color-accent-bg: var(--phi-color-neutral-bg);display:inline-block;padding:var(--phi-spacing-padding-sm);font-size:var(--phi-fontsize-icon-lg);line-height:1em;border-radius:50%;-webkit-user-select:none;user-select:none;cursor:pointer;color:var(--phi-color-border);background-color:transparent}.phi-icon-button.danger{--phi-color-accent-default: var(--phi-color-danger-default);--phi-color-accent-active: var(--phi-color-danger-active);--phi-color-accent-bg: var(--phi-color-danger-bg)}.phi-icon-button:hover:not(:active){color:var(--phi-color-accent-default)}.phi-icon-button:active{color:var(--phi-color-accent-active);background-color:var(--phi-color-accent-bg)}", Le = D(Fe), Ue = ({ $el: t, danger: e, children: r }) => /* @__PURE__ */ k(De, { danger: e.value, children: r }), We = () => R(Ue, "phi-icon-button", {
  adoptedStyleSheets: [B, Le],
  properties: [{
    name: "danger",
    attribute: { name: "danger", type: ee }
  }]
}), He = ({
  onClick: t,
  danger: e,
  children: r
}) => /* @__PURE__ */ k("button", { className: `phi-text-button ${e ? "danger" : ""}`, onClick: t, children: r }), Ie = ".phi-text-button{--phi-color-accent-default: var(--phi-color-neutral-default);--phi-color-accent-active: var(--phi-color-neutral-active);--phi-color-accent-bg: var(--phi-color-neutral-bg);display:inline;font-size:var(--phi-fontsize-md);cursor:pointer;-webkit-user-select:none;user-select:none;color:var(--phi-color-fg);background-color:transparent;border-bottom:1px dotted currentColor}.phi-text-button.danger{--phi-color-accent-default: var(--phi-color-danger-default);--phi-color-accent-active: var(--phi-color-danger-active);--phi-color-accent-bg: var(--phi-color-danger-bg)}.phi-text-button:hover:not(:active){color:var(--phi-color-accent-default)}.phi-text-button:active{color:var(--phi-color-accent-active);background-color:var(--phi-color-accent-bg)}", Oe = D(Ie), Re = ({ $el: t, danger: e, children: r }) => /* @__PURE__ */ k(He, { danger: e.value, children: r }), Be = () => R(Re, "phi-text-button", {
  adoptedStyleSheets: [B, Oe],
  properties: [{
    name: "danger",
    attribute: { name: "danger", type: ee }
  }]
}), Ve = ({ size: t, align: e, children: r }) => /* @__PURE__ */ k("div", { className: `phi-group ${t} ${e}`, children: r }), qe = ".phi-group{display:flex;width:100%;flex-wrap:wrap}.phi-group.left{justify-content:flex-start}.phi-group.right{justify-content:flex-end}.phi-group.center{justify-content:center}.phi-group.space-between{justify-content:space-between}.phi-group.md{gap:var(--phi-spacing-margin-md)}.phi-group.sm{gap:var(--phi-spacing-margin-sm)}", Ge = D(qe), Ye = ({ size: t, align: e, children: r }) => /* @__PURE__ */ k(Ve, { size: t.value, align: e.value, children: r }), Je = () => R(Ye, "phi-group", {
  adoptedStyleSheets: [B, Ge],
  properties: [{
    name: "size",
    attribute: { name: "size", type: J("md", ["sm"]) }
  }, {
    name: "align",
    attribute: { name: "align", type: J("left", ["center", "right", "space-between"]) }
  }]
}), Qe = () => {
  typeof window < "u" && (Ne(), We(), Be(), Je());
};
export {
  Qe as default
};
//# sourceMappingURL=custom-elements.js.map
