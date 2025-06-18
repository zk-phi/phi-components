var je = Object.defineProperty;
var Ne = (t, e, o) => e in t ? je(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o;
var M = (t, e, o) => Ne(t, typeof e != "symbol" ? e + "" : e, o);
var D, f, He, T, _e, $e, Se, Ce, ae, te, oe, F = {}, Me = [], Fe = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Y = Array.isArray;
function z(t, e) {
  for (var o in e) t[o] = e[o];
  return t;
}
function ce(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function j(t, e, o) {
  var n, a, i, c = {};
  for (i in e) i == "key" ? n = e[i] : i == "ref" ? a = e[i] : c[i] = e[i];
  if (arguments.length > 2 && (c.children = arguments.length > 3 ? D.call(arguments, 2) : o), typeof t == "function" && t.defaultProps != null) for (i in t.defaultProps) c[i] == null && (c[i] = t.defaultProps[i]);
  return N(t, c, n, a, null);
}
function N(t, e, o, n, a) {
  var i = { type: t, props: e, key: o, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: a ?? ++He, __i: -1, __u: 0 };
  return a == null && f.vnode != null && f.vnode(i), i;
}
function G(t) {
  return t.children;
}
function O(t, e) {
  this.props = t, this.context = e;
}
function E(t, e) {
  if (e == null) return t.__ ? E(t.__, t.__i + 1) : null;
  for (var o; e < t.__k.length; e++) if ((o = t.__k[e]) != null && o.__e != null) return o.__e;
  return typeof t.type == "function" ? E(t) : null;
}
function Te(t) {
  var e, o;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++) if ((o = t.__k[e]) != null && o.__e != null) {
      t.__e = t.__c.base = o.__e;
      break;
    }
    return Te(t);
  }
}
function de(t) {
  (!t.__d && (t.__d = !0) && T.push(t) && !Z.__r++ || _e != f.debounceRendering) && ((_e = f.debounceRendering) || $e)(Z);
}
function Z() {
  for (var t, e, o, n, a, i, c, s = 1; T.length; ) T.length > s && T.sort(Se), t = T.shift(), s = T.length, t.__d && (o = void 0, a = (n = (e = t).__v).__e, i = [], c = [], e.__P && ((o = z({}, n)).__v = n.__v + 1, f.vnode && f.vnode(o), le(e.__P, o, n, e.__n, e.__P.namespaceURI, 32 & n.__u ? [a] : null, i, a ?? E(n), !!(32 & n.__u), c), o.__v = n.__v, o.__.__k[o.__i] = o, Ae(i, o, c), o.__e != a && Te(o)));
  Z.__r = 0;
}
function Ve(t, e, o, n, a, i, c, s, _, h, d) {
  var r, g, p, u, w, b, v = n && n.__k || Me, m = e.length;
  for (_ = De(o, e, v, _, m), r = 0; r < m; r++) (p = o.__k[r]) != null && (g = p.__i == -1 ? F : v[p.__i] || F, p.__i = r, b = le(t, p, g, a, i, c, s, _, h, d), u = p.__e, p.ref && g.ref != p.ref && (g.ref && se(g.ref, null, p), d.push(p.ref, p.__c || u, p)), w == null && u != null && (w = u), 4 & p.__u || g.__k === p.__k ? _ = Ee(p, _, t) : typeof p.type == "function" && b !== void 0 ? _ = b : u && (_ = u.nextSibling), p.__u &= -7);
  return o.__e = w, _;
}
function De(t, e, o, n, a) {
  var i, c, s, _, h, d = o.length, r = d, g = 0;
  for (t.__k = new Array(a), i = 0; i < a; i++) (c = e[i]) != null && typeof c != "boolean" && typeof c != "function" ? (_ = i + g, (c = t.__k[i] = typeof c == "string" || typeof c == "number" || typeof c == "bigint" || c.constructor == String ? N(null, c, null, null, null) : Y(c) ? N(G, { children: c }, null, null, null) : c.constructor == null && c.__b > 0 ? N(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c).__ = t, c.__b = t.__b + 1, s = null, (h = c.__i = We(c, o, _, r)) != -1 && (r--, (s = o[h]) && (s.__u |= 2)), s == null || s.__v == null ? (h == -1 && (a > d ? g-- : a < d && g++), typeof c.type != "function" && (c.__u |= 4)) : h != _ && (h == _ - 1 ? g-- : h == _ + 1 ? g++ : (h > _ ? g-- : g++, c.__u |= 4))) : t.__k[i] = null;
  if (r) for (i = 0; i < d; i++) (s = o[i]) != null && (2 & s.__u) == 0 && (s.__e == n && (n = E(s)), qe(s, s));
  return n;
}
function Ee(t, e, o) {
  var n, a;
  if (typeof t.type == "function") {
    for (n = t.__k, a = 0; n && a < n.length; a++) n[a] && (n[a].__ = t, e = Ee(n[a], e, o));
    return e;
  }
  t.__e != e && (e && t.type && !o.contains(e) && (e = E(t)), o.insertBefore(t.__e, e || null), e = t.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function We(t, e, o, n) {
  var a, i, c = t.key, s = t.type, _ = e[o];
  if (_ === null && t.key == null || _ && c == _.key && s == _.type && (2 & _.__u) == 0) return o;
  if (n > (_ != null && (2 & _.__u) == 0 ? 1 : 0)) for (a = o - 1, i = o + 1; a >= 0 || i < e.length; ) {
    if (a >= 0) {
      if ((_ = e[a]) && (2 & _.__u) == 0 && c == _.key && s == _.type) return a;
      a--;
    }
    if (i < e.length) {
      if ((_ = e[i]) && (2 & _.__u) == 0 && c == _.key && s == _.type) return i;
      i++;
    }
  }
  return -1;
}
function ue(t, e, o) {
  e[0] == "-" ? t.setProperty(e, o ?? "") : t[e] = o == null ? "" : typeof o != "number" || Fe.test(e) ? o : o + "px";
}
function U(t, e, o, n, a) {
  var i, c;
  e: if (e == "style") if (typeof o == "string") t.style.cssText = o;
  else {
    if (typeof n == "string" && (t.style.cssText = n = ""), n) for (e in n) o && e in o || ue(t.style, e, "");
    if (o) for (e in o) n && o[e] == n[e] || ue(t.style, e, o[e]);
  }
  else if (e[0] == "o" && e[1] == "n") i = e != (e = e.replace(Ce, "$1")), c = e.toLowerCase(), e = c in t || e == "onFocusOut" || e == "onFocusIn" ? c.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = o, o ? n ? o.u = n.u : (o.u = ae, t.addEventListener(e, i ? oe : te, i)) : t.removeEventListener(e, i ? oe : te, i);
  else {
    if (a == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in t) try {
      t[e] = o ?? "";
      break e;
    } catch {
    }
    typeof o == "function" || (o == null || o === !1 && e[4] != "-" ? t.removeAttribute(e) : t.setAttribute(e, e == "popover" && o == 1 ? "" : o));
  }
}
function ve(t) {
  return function(e) {
    if (this.l) {
      var o = this.l[e.type + t];
      if (e.t == null) e.t = ae++;
      else if (e.t < o.u) return;
      return o(f.event ? f.event(e) : e);
    }
  };
}
function le(t, e, o, n, a, i, c, s, _, h) {
  var d, r, g, p, u, w, b, v, m, P, C, W, q, pe, I, L, Q, k = e.type;
  if (e.constructor != null) return null;
  128 & o.__u && (_ = !!(32 & o.__u), i = [s = e.__e = o.__e]), (d = f.__b) && d(e);
  e: if (typeof k == "function") try {
    if (v = e.props, m = "prototype" in k && k.prototype.render, P = (d = k.contextType) && n[d.__c], C = d ? P ? P.props.value : d.__ : n, o.__c ? b = (r = e.__c = o.__c).__ = r.__E : (m ? e.__c = r = new k(v, C) : (e.__c = r = new O(v, C), r.constructor = k, r.render = Ue), P && P.sub(r), r.props = v, r.state || (r.state = {}), r.context = C, r.__n = n, g = r.__d = !0, r.__h = [], r._sb = []), m && r.__s == null && (r.__s = r.state), m && k.getDerivedStateFromProps != null && (r.__s == r.state && (r.__s = z({}, r.__s)), z(r.__s, k.getDerivedStateFromProps(v, r.__s))), p = r.props, u = r.state, r.__v = e, g) m && k.getDerivedStateFromProps == null && r.componentWillMount != null && r.componentWillMount(), m && r.componentDidMount != null && r.__h.push(r.componentDidMount);
    else {
      if (m && k.getDerivedStateFromProps == null && v !== p && r.componentWillReceiveProps != null && r.componentWillReceiveProps(v, C), !r.__e && r.shouldComponentUpdate != null && r.shouldComponentUpdate(v, r.__s, C) === !1 || e.__v == o.__v) {
        for (e.__v != o.__v && (r.props = v, r.state = r.__s, r.__d = !1), e.__e = o.__e, e.__k = o.__k, e.__k.some(function(B) {
          B && (B.__ = e);
        }), W = 0; W < r._sb.length; W++) r.__h.push(r._sb[W]);
        r._sb = [], r.__h.length && c.push(r);
        break e;
      }
      r.componentWillUpdate != null && r.componentWillUpdate(v, r.__s, C), m && r.componentDidUpdate != null && r.__h.push(function() {
        r.componentDidUpdate(p, u, w);
      });
    }
    if (r.context = C, r.props = v, r.__P = t, r.__e = !1, q = f.__r, pe = 0, m) {
      for (r.state = r.__s, r.__d = !1, q && q(e), d = r.render(r.props, r.state, r.context), I = 0; I < r._sb.length; I++) r.__h.push(r._sb[I]);
      r._sb = [];
    } else do
      r.__d = !1, q && q(e), d = r.render(r.props, r.state, r.context), r.state = r.__s;
    while (r.__d && ++pe < 25);
    r.state = r.__s, r.getChildContext != null && (n = z(z({}, n), r.getChildContext())), m && !g && r.getSnapshotBeforeUpdate != null && (w = r.getSnapshotBeforeUpdate(p, u)), L = d, d != null && d.type === G && d.key == null && (L = Pe(d.props.children)), s = Ve(t, Y(L) ? L : [L], e, o, n, a, i, c, s, _, h), r.base = e.__e, e.__u &= -161, r.__h.length && c.push(r), b && (r.__E = r.__ = null);
  } catch (B) {
    if (e.__v = null, _ || i != null) if (B.then) {
      for (e.__u |= _ ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; ) s = s.nextSibling;
      i[i.indexOf(s)] = null, e.__e = s;
    } else for (Q = i.length; Q--; ) ce(i[Q]);
    else e.__e = o.__e, e.__k = o.__k;
    f.__e(B, e, o);
  }
  else i == null && e.__v == o.__v ? (e.__k = o.__k, e.__e = o.__e) : s = e.__e = Ie(o.__e, e, o, n, a, i, c, _, h);
  return (d = f.diffed) && d(e), 128 & e.__u ? void 0 : s;
}
function Ae(t, e, o) {
  for (var n = 0; n < o.length; n++) se(o[n], o[++n], o[++n]);
  f.__c && f.__c(e, t), t.some(function(a) {
    try {
      t = a.__h, a.__h = [], t.some(function(i) {
        i.call(a);
      });
    } catch (i) {
      f.__e(i, a.__v);
    }
  });
}
function Pe(t) {
  return typeof t != "object" || t == null || t.__b && t.__b > 0 ? t : Y(t) ? t.map(Pe) : z({}, t);
}
function Ie(t, e, o, n, a, i, c, s, _) {
  var h, d, r, g, p, u, w, b = o.props, v = e.props, m = e.type;
  if (m == "svg" ? a = "http://www.w3.org/2000/svg" : m == "math" ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"), i != null) {
    for (h = 0; h < i.length; h++) if ((p = i[h]) && "setAttribute" in p == !!m && (m ? p.localName == m : p.nodeType == 3)) {
      t = p, i[h] = null;
      break;
    }
  }
  if (t == null) {
    if (m == null) return document.createTextNode(v);
    t = document.createElementNS(a, m, v.is && v), s && (f.__m && f.__m(e, i), s = !1), i = null;
  }
  if (m == null) b === v || s && t.data == v || (t.data = v);
  else {
    if (i = i && D.call(t.childNodes), b = o.props || F, !s && i != null) for (b = {}, h = 0; h < t.attributes.length; h++) b[(p = t.attributes[h]).name] = p.value;
    for (h in b) if (p = b[h], h != "children") {
      if (h == "dangerouslySetInnerHTML") r = p;
      else if (!(h in v)) {
        if (h == "value" && "defaultValue" in v || h == "checked" && "defaultChecked" in v) continue;
        U(t, h, null, p, a);
      }
    }
    for (h in v) p = v[h], h == "children" ? g = p : h == "dangerouslySetInnerHTML" ? d = p : h == "value" ? u = p : h == "checked" ? w = p : s && typeof p != "function" || b[h] === p || U(t, h, p, b[h], a);
    if (d) s || r && (d.__html == r.__html || d.__html == t.innerHTML) || (t.innerHTML = d.__html), e.__k = [];
    else if (r && (t.innerHTML = ""), Ve(e.type == "template" ? t.content : t, Y(g) ? g : [g], e, o, n, m == "foreignObject" ? "http://www.w3.org/1999/xhtml" : a, i, c, i ? i[0] : o.__k && E(o, 0), s, _), i != null) for (h = i.length; h--; ) ce(i[h]);
    s || (h = "value", m == "progress" && u == null ? t.removeAttribute("value") : u != null && (u !== t[h] || m == "progress" && !u || m == "option" && u != b[h]) && U(t, h, u, b[h], a), h = "checked", w != null && w != t[h] && U(t, h, w, b[h], a));
  }
  return t;
}
function se(t, e, o) {
  try {
    if (typeof t == "function") {
      var n = typeof t.__u == "function";
      n && t.__u(), n && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (a) {
    f.__e(a, o);
  }
}
function qe(t, e, o) {
  var n, a;
  if (f.unmount && f.unmount(t), (n = t.ref) && (n.current && n.current != t.__e || se(n, null, e)), (n = t.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (i) {
      f.__e(i, e);
    }
    n.base = n.__P = null;
  }
  if (n = t.__k) for (a = 0; a < n.length; a++) n[a] && qe(n[a], e, o || typeof t.type != "function");
  o || ce(t.__e), t.__c = t.__ = t.__e = void 0;
}
function Ue(t, e, o) {
  return this.constructor(t, o);
}
function X(t, e, o) {
  var n, a, i, c;
  e == document && (e = document.documentElement), f.__ && f.__(t, e), a = (n = !1) ? null : e.__k, i = [], c = [], le(e, t = e.__k = j(G, null, [t]), a || F, F, e.namespaceURI, a ? null : e.firstChild ? D.call(e.childNodes) : null, i, a ? a.__e : e.firstChild, n, c), Ae(i, t, c);
}
function Oe(t, e, o) {
  var n, a, i, c, s = z({}, t.props);
  for (i in t.type && t.type.defaultProps && (c = t.type.defaultProps), e) i == "key" ? n = e[i] : i == "ref" ? a = e[i] : s[i] = e[i] == null && c != null ? c[i] : e[i];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? D.call(arguments, 2) : o), N(t.type, s, n || t.key, a || t.ref, null);
}
D = Me.slice, f = { __e: function(t, e, o, n) {
  for (var a, i, c; e = e.__; ) if ((a = e.__c) && !a.__) try {
    if ((i = a.constructor) && i.getDerivedStateFromError != null && (a.setState(i.getDerivedStateFromError(t)), c = a.__d), a.componentDidCatch != null && (a.componentDidCatch(t, n || {}), c = a.__d), c) return a.__E = a;
  } catch (s) {
    t = s;
  }
  throw t;
} }, He = 0, O.prototype.setState = function(t, e) {
  var o;
  o = this.__s != null && this.__s != this.state ? this.__s : this.__s = z({}, this.state), typeof t == "function" && (t = t(z({}, o), this.props)), t && z(o, t), t != null && this.__v && (e && this._sb.push(e), de(this));
}, O.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), de(this));
}, O.prototype.render = G, T = [], $e = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Se = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, Z.__r = 0, Ce = /(PointerCapture)$|Capture$/i, ae = 0, te = ve(!1), oe = ve(!0);
var Re = 0;
function l(t, e, o, n, a, i) {
  e || (e = {});
  var c, s, _ = e;
  if ("ref" in _) for (s in _ = {}, e) s == "ref" ? c = e[s] : _[s] = e[s];
  var h = { type: t, props: _, key: o, ref: c, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Re, __i: -1, __u: 0, __source: a, __self: i };
  if (typeof t == "function" && (c = t.defaultProps)) for (s in c) _[s] === void 0 && (_[s] = c[s]);
  return f.vnode && f.vnode(h), h;
}
const K = (t) => t && t !== "false" && t !== "0" || t === "", V = (t) => t == null ? "" : t.toString(), J = (t, e) => {
  const o = [t, ...e];
  return (n) => {
    const a = (n == null ? void 0 : n.toString()) ?? "";
    return o.find((i) => i === a) ?? t;
  };
}, fe = (t) => j("slot", t), Ze = (t) => {
  if (t == null)
    return "";
  if (typeof t == "boolean")
    return t ? "1" : "0";
  if (typeof t != "object")
    return t.toString();
  Array.isArray(t) && t.map((n) => n.toString().replaceAll(",", "\\,")).join(",");
  const e = Object.keys(t), o = new FormData();
  return e.forEach((n) => {
    o.append(n, t[n].toString());
  }), o;
}, Je = (t, e) => {
  var h, d;
  const o = (e == null ? void 0 : e.properties) ?? [], n = (e == null ? void 0 : e.slots) ?? [], a = ((h = e == null ? void 0 : e.adoptedStyleSheets) == null ? void 0 : h.filter((r) => !!r)) ?? [], i = Object.fromEntries(
    o.filter((r) => "attribute" in r).map((r) => [r.attribute.name, { prop: r.name, parser: r.attribute.type }])
  ), c = Object.keys(i), s = (d = o.find((r) => r.formAssociated)) == null ? void 0 : d.name;
  class _ extends HTMLElement {
    constructor() {
      super();
      M(this, "_root");
      M(this, "_vdom", null);
      M(this, "_internals");
      M(this, "_props");
      M(this, "_frameRequested", !1);
      this._root = this.attachShadow({ mode: "open" }), this._root.adoptedStyleSheets = a, this._vdom = null, this._internals = s ? this.attachInternals() : null;
      const p = this;
      this._props = Object.fromEntries(
        o.map((u) => {
          const w = "initialValue" in u ? u.initialValue : this.parseAttribute(u.attribute);
          return [u.name, {
            _dirty: !1,
            _value: w,
            get value() {
              return this._value;
            },
            set value(b) {
              p.setProp(u.name, b, !0);
            }
          }];
        })
      );
    }
    parseAttribute(p) {
      return p.type(this.getAttribute(p.name));
    }
    setProp(p, u, w) {
      this._props[p]._value !== u && (this._props[p]._value = u, w && (this._props[p]._dirty = !0), s === p && this._internals && this._internals.setFormValue(Ze(u)), this.rerender());
    }
    rerender() {
      this._frameRequested || requestAnimationFrame(() => {
        this._vdom && (this._frameRequested = !1, this._vdom = Oe(this._vdom, this._props), X(this._vdom, this._root));
      });
    }
    connectedCallback() {
      const p = Object.fromEntries(
        n.map((w) => [w, j(fe, { name: w }, null)])
      ), u = { $el: this, ...this._props, ...p };
      this._vdom = j(t, u, j(fe, { name: void 0 }, null)), X(this._vdom, this._root);
    }
    disconnectedCallback() {
      this._vdom = null, X(null, this._root);
    }
    attributeChangedCallback(p, u, w) {
      const { parser: b, prop: v } = i[p];
      this._props[v]._dirty || this.setProp(v, b(w), !1);
    }
  }
  return M(_, "observedAttributes", c), M(_, "formAssociated", !!s), o.forEach((r) => Object.defineProperty(_.prototype, r.name, {
    get() {
      return this._props[r.name]._value;
    },
    set(g) {
      this.setProp(r.name, g, !0);
    }
  })), _;
}, $ = (t, e, o) => {
  const n = Je(t, o);
  return customElements.define(e, n);
}, H = (...t) => {
  if (typeof window > "u")
    return null;
  const e = new CSSStyleSheet();
  return e.replaceSync(t.join("")), e;
}, Ye = ({
  onClick: t,
  danger: e,
  variant: o = "default",
  icon: n,
  children: a
}) => /* @__PURE__ */ l("button", { className: `phi-button ${o} ${e ? "danger" : ""}`, onClick: t, children: [
  n && /* @__PURE__ */ l("span", { className: "icon", children: n }),
  a
] }), Ge = "/*! destyle.css v4.0.1 | MIT License | https://github.com/nicolas-cusan/destyle.min.css */*,:before,:after{box-sizing:border-box;border-style:solid;border-width:0;min-width:0}html{line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}body{margin:0}main{display:block}p,table,blockquote,address,pre,iframe,form,figure,dl{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit;margin:0}ul,ol{margin:0;padding:0;list-style:none}dt{font-weight:700}dd{margin-left:0}hr{box-sizing:content-box;height:0;overflow:visible;border-top-width:1px;margin:0;clear:both;color:inherit}pre{font-family:monospace,monospace;font-size:inherit}address{font-style:inherit}a{background-color:transparent;text-decoration:none;color:inherit}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:inherit}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}svg,img,embed,object,iframe{vertical-align:bottom}button,input,optgroup,select,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;vertical-align:middle;color:inherit;font:inherit;background:transparent;padding:0;margin:0;border-radius:0;text-align:inherit;text-transform:inherit}button,[type=button],[type=reset],[type=submit]{cursor:pointer}button:disabled,[type=button]:disabled,[type=reset]:disabled,[type=submit]:disabled{cursor:default}:-moz-focusring{outline:auto}select:disabled{opacity:inherit}option{padding:0}fieldset{margin:0;padding:0;min-width:0}legend{padding:0}progress{vertical-align:baseline}textarea{overflow:auto}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=number]{-moz-appearance:textfield}label[for]{cursor:pointer}details{display:block}summary{display:list-item}[contenteditable]:focus{outline:auto}table{border-color:inherit;border-collapse:collapse}caption{text-align:left}td,th{vertical-align:top;padding:0}th{text-align:left;font-weight:700}", S = H(Ge), Ke = ".phi-button{--phi-color-accent-default: var(--phi-color-neutral-default);--phi-color-accent-hover: var(--phi-color-neutral-hover);--phi-color-accent-active: var(--phi-color-neutral-active);--phi-color-accent-bg: var(--phi-color-neutral-bg);--phi-shadow-pressable-accent-default: var(--phi-shadow-pressable-neutral-default);--phi-shadow-pressable-accent-hover: var(--phi-shadow-pressable-neutral-hover);display:flex;width:100%;align-items:center;justify-content:center;font-size:var(--phi-fontsize-md);height:var(--phi-size-input);padding:0 var(--phi-spacing-padding-md);gap:var(--phi-spacing-horizontal-space);border-radius:var(--phi-radius-md);cursor:pointer;-webkit-user-select:none;user-select:none}.phi-button.danger{--phi-color-accent-default: var(--phi-color-danger-default);--phi-color-accent-hover: var(--phi-color-danger-hover);--phi-color-accent-active: var(--phi-color-danger-active);--phi-color-accent-bg: var(--phi-color-danger-bg);--phi-shadow-pressable-accent-default: var(--phi-shadow-pressable-danger-default);--phi-shadow-pressable-accent-hover: var(--phi-shadow-pressable-danger-hover)}.phi-button.primary{color:var(--phi-color-distant-fg);background-color:var(--phi-color-accent-default);border:1px solid var(--phi-color-accent-default);box-shadow:var(--phi-shadow-pressable-accent-default);transform:translateY(-1px)}.phi-button.primary:hover{color:var(--phi-color-distant-fg);background-color:var(--phi-color-accent-hover);border-color:var(--phi-color-accent-hover);box-shadow:var(--phi-shadow-pressable-accent-hover)}.phi-button.primary:active{transform:none;box-shadow:none}.phi-button.default{color:var(--phi-color-fg);background-color:transparent;border:1px solid currentColor;box-shadow:var(--phi-shadow-pressable-default);transform:translateY(-1px)}.phi-button.default:hover{color:var(--phi-color-accent-default);box-shadow:var(--phi-shadow-pressable-accent-hover)}.phi-button.default:active{transform:none;box-shadow:none}.phi-button.dotted{color:var(--phi-color-fg);background-color:transparent;border:1px dashed currentColor}.phi-button.dotted:hover:not(:active){color:var(--phi-color-accent-default)}.phi-button.dotted:active{color:var(--phi-color-accent-active);background-color:var(--phi-color-accent-bg)}.phi-button>.icon{display:inline-block;font-size:var(--phi-fontsize-icon-md);line-height:1em}", Qe = H(Ke), Xe = ({ danger: t, variant: e, icon: o, children: n }) => /* @__PURE__ */ l(Ye, { icon: o, danger: t.value, variant: e.value, children: n }), et = () => $(Xe, "phi-button", {
  adoptedStyleSheets: [S, Qe],
  slots: ["icon"],
  properties: [{
    name: "danger",
    attribute: { name: "danger", type: K }
  }, {
    name: "variant",
    attribute: { name: "variant", type: J("default", ["primary", "dotted"]) }
  }]
}), tt = ({
  onClick: t,
  danger: e,
  children: o
}) => /* @__PURE__ */ l("button", { className: `phi-icon-button ${e ? "danger" : ""}`, onClick: t, children: o }), ot = ".phi-icon-button{--phi-color-accent-default: var(--phi-color-neutral-default);--phi-color-accent-active: var(--phi-color-neutral-active);--phi-color-accent-bg: var(--phi-color-neutral-bg);display:inline-block;padding:var(--phi-spacing-padding-sm);font-size:var(--phi-fontsize-icon-lg);line-height:1em;border-radius:50%;-webkit-user-select:none;user-select:none;cursor:pointer;color:var(--phi-color-border);background-color:transparent}.phi-icon-button.danger{--phi-color-accent-default: var(--phi-color-danger-default);--phi-color-accent-active: var(--phi-color-danger-active);--phi-color-accent-bg: var(--phi-color-danger-bg)}.phi-icon-button:hover:not(:active){color:var(--phi-color-accent-default)}.phi-icon-button:active{color:var(--phi-color-accent-active);background-color:var(--phi-color-accent-bg)}", nt = H(ot), rt = ({ danger: t, children: e }) => /* @__PURE__ */ l(tt, { danger: t.value, children: e }), it = () => $(rt, "phi-icon-button", {
  adoptedStyleSheets: [S, nt],
  properties: [{
    name: "danger",
    attribute: { name: "danger", type: K }
  }]
}), at = ({
  onClick: t,
  danger: e,
  children: o
}) => /* @__PURE__ */ l("button", { className: `phi-text-button ${e ? "danger" : ""}`, onClick: t, children: o }), ct = ".phi-text-button{--phi-color-accent-default: var(--phi-color-neutral-default);--phi-color-accent-active: var(--phi-color-neutral-active);--phi-color-accent-bg: var(--phi-color-neutral-bg);display:inline;font-size:var(--phi-fontsize-md);cursor:pointer;-webkit-user-select:none;user-select:none;color:var(--phi-color-fg);background-color:transparent;border-bottom:1px dotted currentColor}.phi-text-button.danger{--phi-color-accent-default: var(--phi-color-danger-default);--phi-color-accent-active: var(--phi-color-danger-active);--phi-color-accent-bg: var(--phi-color-danger-bg)}.phi-text-button:hover:not(:active){color:var(--phi-color-accent-default)}.phi-text-button:active{color:var(--phi-color-accent-active);background-color:var(--phi-color-accent-bg)}", lt = H(ct), st = ({ danger: t, children: e }) => /* @__PURE__ */ l(at, { danger: t.value, children: e }), ht = () => $(st, "phi-text-button", {
  adoptedStyleSheets: [S, lt],
  properties: [{
    name: "danger",
    attribute: { name: "danger", type: K }
  }]
}), pt = ({ size: t, align: e, children: o }) => /* @__PURE__ */ l("div", { className: `phi-group ${t} ${e}`, children: o }), _t = ".phi-group{display:flex;width:100%;flex-wrap:wrap}.phi-group.left{justify-content:flex-start}.phi-group.right{justify-content:flex-end}.phi-group.center{justify-content:center}.phi-group.space-between{justify-content:space-between}.phi-group.md{gap:var(--phi-spacing-margin-md)}.phi-group.sm{gap:var(--phi-spacing-margin-sm)}", dt = H(_t), ut = ({ size: t, align: e, children: o }) => /* @__PURE__ */ l(pt, { size: t.value, align: e.value, children: o }), vt = () => $(ut, "phi-group", {
  adoptedStyleSheets: [S, dt],
  properties: [{
    name: "size",
    attribute: { name: "size", type: J("md", ["sm"]) }
  }, {
    name: "align",
    attribute: { name: "align", type: J("left", ["center", "right", "space-between"]) }
  }]
}), ft = ({ size: t, children: e }) => /* @__PURE__ */ l("div", { className: `phi-stack ${t}`, children: e }), gt = ".phi-stack{display:flex;width:100%;flex-direction:column}.phi-stack.md{gap:var(--phi-spacing-margin-md)}.phi-stack.sm{gap:var(--phi-spacing-margin-sm)}", mt = H(gt), bt = ({ size: t, children: e }) => /* @__PURE__ */ l(ft, { size: t.value, children: e }), wt = () => $(bt, "phi-stack", {
  adoptedStyleSheets: [S, mt],
  properties: [{
    name: "size",
    attribute: { name: "size", type: J("md", ["sm"]) }
  }]
});
var ne, x, ee, ge, re = 0, Le = [], y = f, me = y.__b, be = y.__r, we = y.diffed, ye = y.__c, xe = y.unmount, ke = y.__;
function yt(t, e) {
  y.__h && y.__h(x, t, re || e), re = 0;
  var o = x.__H || (x.__H = { __: [], __h: [] });
  return t >= o.__.length && o.__.push({}), o.__[t];
}
function he(t, e) {
  var o = yt(ne++, 7);
  return zt(o.__H, e) && (o.__ = t(), o.__H = e, o.__h = t), o.__;
}
function A(t, e) {
  return re = 8, he(function() {
    return t;
  }, e);
}
function xt() {
  for (var t; t = Le.shift(); ) if (t.__P && t.__H) try {
    t.__H.__h.forEach(R), t.__H.__h.forEach(ie), t.__H.__h = [];
  } catch (e) {
    t.__H.__h = [], y.__e(e, t.__v);
  }
}
y.__b = function(t) {
  x = null, me && me(t);
}, y.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), ke && ke(t, e);
}, y.__r = function(t) {
  be && be(t), ne = 0;
  var e = (x = t.__c).__H;
  e && (ee === x ? (e.__h = [], x.__h = [], e.__.forEach(function(o) {
    o.__N && (o.__ = o.__N), o.u = o.__N = void 0;
  })) : (e.__h.forEach(R), e.__h.forEach(ie), e.__h = [], ne = 0)), ee = x;
}, y.diffed = function(t) {
  we && we(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Le.push(e) !== 1 && ge === y.requestAnimationFrame || ((ge = y.requestAnimationFrame) || kt)(xt)), e.__H.__.forEach(function(o) {
    o.u && (o.__H = o.u), o.u = void 0;
  })), ee = x = null;
}, y.__c = function(t, e) {
  e.some(function(o) {
    try {
      o.__h.forEach(R), o.__h = o.__h.filter(function(n) {
        return !n.__ || ie(n);
      });
    } catch (n) {
      e.some(function(a) {
        a.__h && (a.__h = []);
      }), e = [], y.__e(n, o.__v);
    }
  }), ye && ye(t, e);
}, y.unmount = function(t) {
  xe && xe(t);
  var e, o = t.__c;
  o && o.__H && (o.__H.__.forEach(function(n) {
    try {
      R(n);
    } catch (a) {
      e = a;
    }
  }), o.__H = void 0, e && y.__e(e, o.__v));
};
var ze = typeof requestAnimationFrame == "function";
function kt(t) {
  var e, o = function() {
    clearTimeout(n), ze && cancelAnimationFrame(e), setTimeout(t);
  }, n = setTimeout(o, 35);
  ze && (e = requestAnimationFrame(o));
}
function R(t) {
  var e = x, o = t.__c;
  typeof o == "function" && (t.__c = void 0, o()), x = e;
}
function ie(t) {
  var e = x;
  t.__c = t.__(), x = e;
}
function zt(t, e) {
  return !t || t.length !== e.length || e.some(function(o, n) {
    return o !== t[n];
  });
}
const Ht = ({
  checked: t,
  onChange: e,
  children: o
}) => {
  const n = A((a) => {
    e == null || e(a.currentTarget.checked, a);
  }, [e]);
  return /* @__PURE__ */ l("label", { className: "phi-checkbox", children: [
    /* @__PURE__ */ l(
      "input",
      {
        type: "checkbox",
        className: "input",
        checked: t,
        onChange: n
      }
    ),
    " ",
    o
  ] });
}, Be = '.phi-checkbox{display:inline-flex;line-height:var(--phi-fontsize-checkbox);gap:var(--phi-spacing-horizontal-space);cursor:pointer;-webkit-user-select:none;user-select:none}.phi-checkbox>.input{content:"";position:relative;width:var(--phi-fontsize-checkbox);height:var(--phi-fontsize-checkbox);border:1px solid var(--phi-color-border);border-radius:var(--phi-radius-sm);background:var(--phi-color-bg);cursor:pointer}.phi-checkbox>.input:checked:before{content:"";position:absolute;top:2px;left:5px;transform:rotate(45deg);width:4px;height:9px;border-right:1px solid currentColor;border-bottom:1px solid currentColor}.phi-checkbox:hover{color:var(--phi-color-neutral-default)}.phi-checkbox:hover>.input{border-color:var(--phi-color-neutral-default)}.phi-checkbox:active{color:var(--phi-color-neutral-active);background:var(--phi-color-neutral-bg)}.phi-checkbox:active>.input{border-color:var(--phi-color-neutral-active)}', $t = H(Be), St = ({ $el: t, checked: e, children: o }) => {
  const n = A((a, i) => {
    i.stopPropagation(), e.value = a, t.dispatchEvent(new Event("change"));
  }, [t, e]);
  return /* @__PURE__ */ l(Ht, { checked: e.value, onChange: n, children: o });
}, Ct = () => $(St, "phi-checkbox", {
  adoptedStyleSheets: [S, $t],
  properties: [{
    name: "checked",
    formAssociated: !0,
    attribute: { name: "checked", type: K }
  }, {
    name: "value",
    attribute: { name: "variant", type: V }
  }]
}), Mt = ({
  checked: t,
  onChange: e,
  value: o,
  children: n
}) => {
  const a = he(() => t.findIndex((c) => c === o) !== -1, [t, o]), i = A((c) => {
    c.currentTarget.checked ? e == null || e([...t, o], c) : e == null || e(t.filter((_) => _ !== o), c);
  }, [t, o]);
  return /* @__PURE__ */ l("label", { className: "phi-checkbox", children: [
    /* @__PURE__ */ l(
      "input",
      {
        type: "checkbox",
        className: "input",
        checked: a,
        onChange: i
      }
    ),
    " ",
    n
  ] });
}, Tt = H(Be), Vt = ({ $el: t, checked: e, value: o, children: n }) => {
  const a = A((i, c) => {
    c.stopPropagation(), e.value = i, t.dispatchEvent(new Event("change"));
  }, [t, e]);
  return /* @__PURE__ */ l(Mt, { checked: e.value, value: o.value, onChange: a, children: n });
}, Et = () => $(Vt, "phi-option", {
  adoptedStyleSheets: [S, Tt],
  properties: [{
    name: "checked",
    formAssociated: !0,
    attribute: {
      name: "checked",
      type: (t) => typeof t == "string" ? t.split(",") : []
    }
  }, {
    name: "value",
    attribute: { name: "variant", type: V }
  }]
}), At = ({
  name: t,
  checked: e,
  onChange: o,
  value: n,
  children: a
}) => {
  const i = he(() => e === n, [e, n]), c = A((s) => {
    s.currentTarget.checked && (o == null || o(n, s));
  }, [n]);
  return /* @__PURE__ */ l("label", { className: "phi-radio", children: [
    /* @__PURE__ */ l(
      "input",
      {
        type: "radio",
        className: "input",
        name: t,
        checked: i,
        onChange: c
      }
    ),
    " ",
    a
  ] });
}, Pt = '.phi-radio{display:inline-flex;line-height:var(--phi-fontsize-checkbox);gap:var(--phi-spacing-horizontal-space);cursor:pointer;-webkit-user-select:none;user-select:none}.phi-radio>.input{content:"";position:relative;width:var(--phi-fontsize-checkbox);height:var(--phi-fontsize-checkbox);border:1px solid var(--phi-color-border);border-radius:calc(var(--phi-fontsize-checkbox) / 2);background:var(--phi-color-bg);cursor:pointer}.phi-radio>.input:checked:before{content:"";position:absolute;top:3px;left:3px;width:8px;height:8px;border-radius:4px;background:currentColor}.phi-radio:hover{color:var(--phi-color-neutral-default)}.phi-radio:hover>.input{border-color:var(--phi-color-neutral-default)}.phi-radio:active{color:var(--phi-color-neutral-active);background:var(--phi-color-neutral-bg)}.phi-radio:active>.input{border-color:var(--phi-color-neutral-active)}', qt = H(Pt), Lt = ({ $el: t, name: e, checked: o, value: n, children: a }) => {
  const i = A((c, s) => {
    s.stopPropagation(), o.value = c, t.dispatchEvent(new Event("change"));
  }, [t, o]);
  return /* @__PURE__ */ l(At, { name: e.value, checked: o.value, value: n.value, onChange: i, children: a });
}, Bt = () => $(Lt, "phi-radio", {
  adoptedStyleSheets: [S, qt],
  properties: [{
    name: "name",
    attribute: { name: "name", type: V }
  }, {
    name: "checked",
    formAssociated: !0,
    attribute: { name: "checked", type: V }
  }, {
    name: "value",
    attribute: { name: "variant", type: V }
  }]
}), jt = () => /* @__PURE__ */ l("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ l("path", { d: "M0 0h24v24H0z", fill: "none" }),
  /* @__PURE__ */ l("path", { d: "M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z" })
] }), Nt = () => /* @__PURE__ */ l("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ l("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ l("path", { d: "M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z" })
] }), Ft = () => /* @__PURE__ */ l("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ l("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ l("path", { d: "M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z" })
] }), Dt = () => /* @__PURE__ */ l("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ l("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ l("path", { d: "M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z" })
] }), Wt = () => /* @__PURE__ */ l("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ l("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ l("path", { d: "M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z" })
] }), It = () => /* @__PURE__ */ l("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 -960 960 960", width: "24px", children: /* @__PURE__ */ l("path", { d: "M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" }) }), Ut = () => /* @__PURE__ */ l("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 -960 960 960", width: "24px", children: /* @__PURE__ */ l("path", { d: "M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" }) }), Ot = () => /* @__PURE__ */ l("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ l("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ l("path", { d: "M19 13H5v-2h14v2z" })
] }), Rt = () => /* @__PURE__ */ l("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ l("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ l("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" })
] }), Zt = () => /* @__PURE__ */ l("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", "enable-background": "new 0 0 24 24", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ l("g", { children: /* @__PURE__ */ l("rect", { fill: "none", height: "24", width: "24", x: "0" }) }),
  /* @__PURE__ */ l("g", { children: /* @__PURE__ */ l("g", { children: [
    /* @__PURE__ */ l("polygon", { points: "20,7 20.94,4.94 23,4 20.94,3.06 20,1 19.06,3.06 17,4 19.06,4.94" }),
    /* @__PURE__ */ l("polygon", { points: "8.5,7 9.44,4.94 11.5,4 9.44,3.06 8.5,1 7.56,3.06 5.5,4 7.56,4.94" }),
    /* @__PURE__ */ l("polygon", { points: "20,12.5 19.06,14.56 17,15.5 19.06,16.44 20,18.5 20.94,16.44 23,15.5 20.94,14.56" }),
    /* @__PURE__ */ l("path", { d: "M17.71,9.12l-2.83-2.83C14.68,6.1,14.43,6,14.17,6c-0.26,0-0.51,0.1-0.71,0.29L2.29,17.46c-0.39,0.39-0.39,1.02,0,1.41 l2.83,2.83C5.32,21.9,5.57,22,5.83,22s0.51-0.1,0.71-0.29l11.17-11.17C18.1,10.15,18.1,9.51,17.71,9.12z M14.17,8.42l1.41,1.41 L14.41,11L13,9.59L14.17,8.42z M5.83,19.59l-1.41-1.41L11.59,11L13,12.41L5.83,19.59z" })
  ] }) })
] }), Jt = () => /* @__PURE__ */ l("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ l("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ l("path", { d: "M10.25 13c0 .69-.56 1.25-1.25 1.25S7.75 13.69 7.75 13s.56-1.25 1.25-1.25 1.25.56 1.25 1.25zM15 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm7 .25c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zM10.66 4.12C12.06 6.44 14.6 8 17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12zM4.42 9.47c1.71-.97 3.03-2.55 3.66-4.44C6.37 6 5.05 7.58 4.42 9.47zM20 12c0-.78-.12-1.53-.33-2.24-.7.15-1.42.24-2.17.24-3.13 0-5.92-1.44-7.76-3.69C8.69 8.87 6.6 10.88 4 11.86c.01.04 0 .09 0 .14 0 4.41 3.59 8 8 8s8-3.59 8-8z" })
] }), Yt = () => /* @__PURE__ */ l("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ l("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ l("path", { d: "M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" })
] }), Gt = () => /* @__PURE__ */ l("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ l("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ l("path", { d: "M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 9.67l1.69 2.26 2.48-3.1L19 15H9zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" })
] }), Kt = () => /* @__PURE__ */ l("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ l("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ l("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" })
] }), Qt = () => /* @__PURE__ */ l("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ l("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ l("path", { d: "M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z" })
] }), Xt = () => /* @__PURE__ */ l("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 -960 960 960", width: "24px", children: /* @__PURE__ */ l("path", { d: "M320-200h280v-400h-80q-28 0-46 14t-43 41q-20 22-46.5 45.5T320-465v265Zm-80 80v-346q-52-14-86-56t-34-98q0-53 30.5-94t78.5-57q23-48 68.5-78T400-879q35 0 65.5 12t55.5 32q10-2 19-3.5t20-1.5q66 0 113 47t47 113q0 22-5.5 42T698-600h62q33 0 56.5 23.5T840-520v240q0 33-23.5 56.5T760-200h-80v80H240Zm-40-500q0 33 23.5 56.5T280-540q32 0 54.5-21t46.5-47q25-27 56.5-49.5T520-680h120q0-33-23.5-56.5T560-760q-25 0-42 6.5l-17 6.5-31-26q-11-9-28.5-17.5T400-799q-32 0-58.5 17T301-736l-14 30-32 11q-25 8-40 28.5T200-620Zm480 340h80v-240h-80v240Zm-360 80h280-280Z" }) }), eo = () => /* @__PURE__ */ l("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ l("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ l("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
] }), to = {
  beer: Xt,
  text: jt,
  "align-center": Nt,
  "align-justify": Ft,
  "align-left": Dt,
  "align-right": Wt,
  back: It,
  next: Ut,
  decrement: Ot,
  delete: Rt,
  effect: Zt,
  emoji: Jt,
  file: Yt,
  image: Gt,
  increment: Kt,
  save: Qt,
  okay: eo
}, oo = ({ icon: t }) => {
  const e = to[t];
  return e ? /* @__PURE__ */ l(e, {}) : null;
}, no = ".phi-icon{display:inline;width:auto;height:1em;vertical-align:-.11em;fill:currentColor}", ro = H(no), io = ({ icon: t }) => /* @__PURE__ */ l(oo, { icon: t.value }), ao = () => $(io, "phi-icon", {
  adoptedStyleSheets: [S, ro],
  properties: [{
    name: "icon",
    attribute: { name: "icon", type: V }
  }]
}), lo = () => {
  typeof window < "u" && (et(), it(), ht(), vt(), wt(), Ct(), Et(), Bt(), ao());
};
export {
  lo as default
};
//# sourceMappingURL=custom-elements.js.map
