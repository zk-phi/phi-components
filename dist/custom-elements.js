var ge = Object.defineProperty;
var be = (t, e, r) => e in t ? ge(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var x = (t, e, r) => be(t, typeof e != "symbol" ? e + "" : e, r);
var U, f, oe, S, K, ne, ie, le, V, B, R, N = {}, ae = [], ve = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, I = Array.isArray;
function k(t, e) {
  for (var r in e) t[r] = e[r];
  return t;
}
function q(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function T(t, e, r) {
  var i, l, o, a = {};
  for (o in e) o == "key" ? i = e[o] : o == "ref" ? l = e[o] : a[o] = e[o];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? U.call(arguments, 2) : r), typeof t == "function" && t.defaultProps != null) for (o in t.defaultProps) a[o] == null && (a[o] = t.defaultProps[o]);
  return E(t, a, i, l, null);
}
function E(t, e, r, i, l) {
  var o = { type: t, props: e, key: r, ref: i, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: l ?? ++oe, __i: -1, __u: 0 };
  return l == null && f.vnode != null && f.vnode(o), o;
}
function W(t) {
  return t.children;
}
function F(t, e) {
  this.props = t, this.context = e;
}
function P(t, e) {
  if (e == null) return t.__ ? P(t.__, t.__i + 1) : null;
  for (var r; e < t.__k.length; e++) if ((r = t.__k[e]) != null && r.__e != null) return r.__e;
  return typeof t.type == "function" ? P(t) : null;
}
function se(t) {
  var e, r;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++) if ((r = t.__k[e]) != null && r.__e != null) {
      t.__e = t.__c.base = r.__e;
      break;
    }
    return se(t);
  }
}
function Q(t) {
  (!t.__d && (t.__d = !0) && S.push(t) && !j.__r++ || K != f.debounceRendering) && ((K = f.debounceRendering) || ne)(j);
}
function j() {
  for (var t, e, r, i, l, o, a, s = 1; S.length; ) S.length > s && S.sort(ie), t = S.shift(), s = S.length, t.__d && (r = void 0, l = (i = (e = t).__v).__e, o = [], a = [], e.__P && ((r = k({}, i)).__v = i.__v + 1, f.vnode && f.vnode(r), G(e.__P, r, i, e.__n, e.__P.namespaceURI, 32 & i.__u ? [l] : null, o, l ?? P(i), !!(32 & i.__u), a), r.__v = i.__v, r.__.__k[r.__i] = r, ce(o, r, a), r.__e != l && se(r)));
  j.__r = 0;
}
function pe(t, e, r, i, l, o, a, s, p, _, h) {
  var n, g, c, b, m, v, d = i && i.__k || ae, u = e.length;
  for (p = me(r, e, d, p, u), n = 0; n < u; n++) (c = r.__k[n]) != null && (g = c.__i == -1 ? N : d[c.__i] || N, c.__i = n, v = G(t, c, g, l, o, a, s, p, _, h), b = c.__e, c.ref && g.ref != c.ref && (g.ref && Y(g.ref, null, c), h.push(c.ref, c.__c || b, c)), m == null && b != null && (m = b), 4 & c.__u || g.__k === c.__k ? p = _e(c, p, t) : typeof c.type == "function" && v !== void 0 ? p = v : b && (p = b.nextSibling), c.__u &= -7);
  return r.__e = m, p;
}
function me(t, e, r, i, l) {
  var o, a, s, p, _, h = r.length, n = h, g = 0;
  for (t.__k = new Array(l), o = 0; o < l; o++) (a = e[o]) != null && typeof a != "boolean" && typeof a != "function" ? (p = o + g, (a = t.__k[o] = typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? E(null, a, null, null, null) : I(a) ? E(W, { children: a }, null, null, null) : a.constructor == null && a.__b > 0 ? E(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a).__ = t, a.__b = t.__b + 1, s = null, (_ = a.__i = ye(a, r, p, n)) != -1 && (n--, (s = r[_]) && (s.__u |= 2)), s == null || s.__v == null ? (_ == -1 && (l > h ? g-- : l < h && g++), typeof a.type != "function" && (a.__u |= 4)) : _ != p && (_ == p - 1 ? g-- : _ == p + 1 ? g++ : (_ > p ? g-- : g++, a.__u |= 4))) : t.__k[o] = null;
  if (n) for (o = 0; o < h; o++) (s = r[o]) != null && (2 & s.__u) == 0 && (s.__e == i && (i = P(s)), de(s, s));
  return i;
}
function _e(t, e, r) {
  var i, l;
  if (typeof t.type == "function") {
    for (i = t.__k, l = 0; i && l < i.length; l++) i[l] && (i[l].__ = t, e = _e(i[l], e, r));
    return e;
  }
  t.__e != e && (e && t.type && !r.contains(e) && (e = P(t)), r.insertBefore(t.__e, e || null), e = t.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function ye(t, e, r, i) {
  var l, o, a = t.key, s = t.type, p = e[r];
  if (p === null && t.key == null || p && a == p.key && s == p.type && (2 & p.__u) == 0) return r;
  if (i > (p != null && (2 & p.__u) == 0 ? 1 : 0)) for (l = r - 1, o = r + 1; l >= 0 || o < e.length; ) {
    if (l >= 0) {
      if ((p = e[l]) && (2 & p.__u) == 0 && a == p.key && s == p.type) return l;
      l--;
    }
    if (o < e.length) {
      if ((p = e[o]) && (2 & p.__u) == 0 && a == p.key && s == p.type) return o;
      o++;
    }
  }
  return -1;
}
function X(t, e, r) {
  e[0] == "-" ? t.setProperty(e, r ?? "") : t[e] = r == null ? "" : typeof r != "number" || ve.test(e) ? r : r + "px";
}
function $(t, e, r, i, l) {
  var o, a;
  e: if (e == "style") if (typeof r == "string") t.style.cssText = r;
  else {
    if (typeof i == "string" && (t.style.cssText = i = ""), i) for (e in i) r && e in r || X(t.style, e, "");
    if (r) for (e in r) i && r[e] == i[e] || X(t.style, e, r[e]);
  }
  else if (e[0] == "o" && e[1] == "n") o = e != (e = e.replace(le, "$1")), a = e.toLowerCase(), e = a in t || e == "onFocusOut" || e == "onFocusIn" ? a.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = r, r ? i ? r.u = i.u : (r.u = V, t.addEventListener(e, o ? R : B, o)) : t.removeEventListener(e, o ? R : B, o);
  else {
    if (l == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in t) try {
      t[e] = r ?? "";
      break e;
    } catch {
    }
    typeof r == "function" || (r == null || r === !1 && e[4] != "-" ? t.removeAttribute(e) : t.setAttribute(e, e == "popover" && r == 1 ? "" : r));
  }
}
function Z(t) {
  return function(e) {
    if (this.l) {
      var r = this.l[e.type + t];
      if (e.t == null) e.t = V++;
      else if (e.t < r.u) return;
      return r(f.event ? f.event(e) : e);
    }
  };
}
function G(t, e, r, i, l, o, a, s, p, _) {
  var h, n, g, c, b, m, v, d, u, C, w, D, z, J, L, A, O, y = e.type;
  if (e.constructor != null) return null;
  128 & r.__u && (p = !!(32 & r.__u), o = [s = e.__e = r.__e]), (h = f.__b) && h(e);
  e: if (typeof y == "function") try {
    if (d = e.props, u = "prototype" in y && y.prototype.render, C = (h = y.contextType) && i[h.__c], w = h ? C ? C.props.value : h.__ : i, r.__c ? v = (n = e.__c = r.__c).__ = n.__E : (u ? e.__c = n = new y(d, w) : (e.__c = n = new F(d, w), n.constructor = y, n.render = we), C && C.sub(n), n.props = d, n.state || (n.state = {}), n.context = w, n.__n = i, g = n.__d = !0, n.__h = [], n._sb = []), u && n.__s == null && (n.__s = n.state), u && y.getDerivedStateFromProps != null && (n.__s == n.state && (n.__s = k({}, n.__s)), k(n.__s, y.getDerivedStateFromProps(d, n.__s))), c = n.props, b = n.state, n.__v = e, g) u && y.getDerivedStateFromProps == null && n.componentWillMount != null && n.componentWillMount(), u && n.componentDidMount != null && n.__h.push(n.componentDidMount);
    else {
      if (u && y.getDerivedStateFromProps == null && d !== c && n.componentWillReceiveProps != null && n.componentWillReceiveProps(d, w), !n.__e && n.shouldComponentUpdate != null && n.shouldComponentUpdate(d, n.__s, w) === !1 || e.__v == r.__v) {
        for (e.__v != r.__v && (n.props = d, n.state = n.__s, n.__d = !1), e.__e = r.__e, e.__k = r.__k, e.__k.some(function(M) {
          M && (M.__ = e);
        }), D = 0; D < n._sb.length; D++) n.__h.push(n._sb[D]);
        n._sb = [], n.__h.length && a.push(n);
        break e;
      }
      n.componentWillUpdate != null && n.componentWillUpdate(d, n.__s, w), u && n.componentDidUpdate != null && n.__h.push(function() {
        n.componentDidUpdate(c, b, m);
      });
    }
    if (n.context = w, n.props = d, n.__P = t, n.__e = !1, z = f.__r, J = 0, u) {
      for (n.state = n.__s, n.__d = !1, z && z(e), h = n.render(n.props, n.state, n.context), L = 0; L < n._sb.length; L++) n.__h.push(n._sb[L]);
      n._sb = [];
    } else do
      n.__d = !1, z && z(e), h = n.render(n.props, n.state, n.context), n.state = n.__s;
    while (n.__d && ++J < 25);
    n.state = n.__s, n.getChildContext != null && (i = k(k({}, i), n.getChildContext())), u && !g && n.getSnapshotBeforeUpdate != null && (m = n.getSnapshotBeforeUpdate(c, b)), A = h, h != null && h.type === W && h.key == null && (A = he(h.props.children)), s = pe(t, I(A) ? A : [A], e, r, i, l, o, a, s, p, _), n.base = e.__e, e.__u &= -161, n.__h.length && a.push(n), v && (n.__E = n.__ = null);
  } catch (M) {
    if (e.__v = null, p || o != null) if (M.then) {
      for (e.__u |= p ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; ) s = s.nextSibling;
      o[o.indexOf(s)] = null, e.__e = s;
    } else for (O = o.length; O--; ) q(o[O]);
    else e.__e = r.__e, e.__k = r.__k;
    f.__e(M, e, r);
  }
  else o == null && e.__v == r.__v ? (e.__k = r.__k, e.__e = r.__e) : s = e.__e = ke(r.__e, e, r, i, l, o, a, p, _);
  return (h = f.diffed) && h(e), 128 & e.__u ? void 0 : s;
}
function ce(t, e, r) {
  for (var i = 0; i < r.length; i++) Y(r[i], r[++i], r[++i]);
  f.__c && f.__c(e, t), t.some(function(l) {
    try {
      t = l.__h, l.__h = [], t.some(function(o) {
        o.call(l);
      });
    } catch (o) {
      f.__e(o, l.__v);
    }
  });
}
function he(t) {
  return typeof t != "object" || t == null || t.__b && t.__b > 0 ? t : I(t) ? t.map(he) : k({}, t);
}
function ke(t, e, r, i, l, o, a, s, p) {
  var _, h, n, g, c, b, m, v = r.props, d = e.props, u = e.type;
  if (u == "svg" ? l = "http://www.w3.org/2000/svg" : u == "math" ? l = "http://www.w3.org/1998/Math/MathML" : l || (l = "http://www.w3.org/1999/xhtml"), o != null) {
    for (_ = 0; _ < o.length; _++) if ((c = o[_]) && "setAttribute" in c == !!u && (u ? c.localName == u : c.nodeType == 3)) {
      t = c, o[_] = null;
      break;
    }
  }
  if (t == null) {
    if (u == null) return document.createTextNode(d);
    t = document.createElementNS(l, u, d.is && d), s && (f.__m && f.__m(e, o), s = !1), o = null;
  }
  if (u == null) v === d || s && t.data == d || (t.data = d);
  else {
    if (o = o && U.call(t.childNodes), v = r.props || N, !s && o != null) for (v = {}, _ = 0; _ < t.attributes.length; _++) v[(c = t.attributes[_]).name] = c.value;
    for (_ in v) if (c = v[_], _ != "children") {
      if (_ == "dangerouslySetInnerHTML") n = c;
      else if (!(_ in d)) {
        if (_ == "value" && "defaultValue" in d || _ == "checked" && "defaultChecked" in d) continue;
        $(t, _, null, c, l);
      }
    }
    for (_ in d) c = d[_], _ == "children" ? g = c : _ == "dangerouslySetInnerHTML" ? h = c : _ == "value" ? b = c : _ == "checked" ? m = c : s && typeof c != "function" || v[_] === c || $(t, _, c, v[_], l);
    if (h) s || n && (h.__html == n.__html || h.__html == t.innerHTML) || (t.innerHTML = h.__html), e.__k = [];
    else if (n && (t.innerHTML = ""), pe(e.type == "template" ? t.content : t, I(g) ? g : [g], e, r, i, u == "foreignObject" ? "http://www.w3.org/1999/xhtml" : l, o, a, o ? o[0] : r.__k && P(r, 0), s, p), o != null) for (_ = o.length; _--; ) q(o[_]);
    s || (_ = "value", u == "progress" && b == null ? t.removeAttribute("value") : b != null && (b !== t[_] || u == "progress" && !b || u == "option" && b != v[_]) && $(t, _, b, v[_], l), _ = "checked", m != null && m != t[_] && $(t, _, m, v[_], l));
  }
  return t;
}
function Y(t, e, r) {
  try {
    if (typeof t == "function") {
      var i = typeof t.__u == "function";
      i && t.__u(), i && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (l) {
    f.__e(l, r);
  }
}
function de(t, e, r) {
  var i, l;
  if (f.unmount && f.unmount(t), (i = t.ref) && (i.current && i.current != t.__e || Y(i, null, e)), (i = t.__c) != null) {
    if (i.componentWillUnmount) try {
      i.componentWillUnmount();
    } catch (o) {
      f.__e(o, e);
    }
    i.base = i.__P = null;
  }
  if (i = t.__k) for (l = 0; l < i.length; l++) i[l] && de(i[l], e, r || typeof t.type != "function");
  r || q(t.__e), t.__c = t.__ = t.__e = void 0;
}
function we(t, e, r) {
  return this.constructor(t, r);
}
function H(t, e, r) {
  var i, l, o, a;
  e == document && (e = document.documentElement), f.__ && f.__(t, e), l = (i = typeof r == "function") ? null : r && r.__k || e.__k, o = [], a = [], G(e, t = (!i && r || e).__k = T(W, null, [t]), l || N, N, e.namespaceURI, !i && r ? [r] : l ? null : e.firstChild ? U.call(e.childNodes) : null, o, !i && r ? r : l ? l.__e : e.firstChild, i, a), ce(o, t, a);
}
function ue(t, e) {
  H(t, e, ue);
}
function xe(t, e, r) {
  var i, l, o, a, s = k({}, t.props);
  for (o in t.type && t.type.defaultProps && (a = t.type.defaultProps), e) o == "key" ? i = e[o] : o == "ref" ? l = e[o] : s[o] = e[o] == null && a != null ? a[o] : e[o];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? U.call(arguments, 2) : r), E(t.type, s, i || t.key, l || t.ref, null);
}
U = ae.slice, f = { __e: function(t, e, r, i) {
  for (var l, o, a; e = e.__; ) if ((l = e.__c) && !l.__) try {
    if ((o = l.constructor) && o.getDerivedStateFromError != null && (l.setState(o.getDerivedStateFromError(t)), a = l.__d), l.componentDidCatch != null && (l.componentDidCatch(t, i || {}), a = l.__d), a) return l.__E = l;
  } catch (s) {
    t = s;
  }
  throw t;
} }, oe = 0, F.prototype.setState = function(t, e) {
  var r;
  r = this.__s != null && this.__s != this.state ? this.__s : this.__s = k({}, this.state), typeof t == "function" && (t = t(k({}, r), this.props)), t && k(r, t), t != null && this.__v && (e && this._sb.push(e), Q(this));
}, F.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Q(this));
}, F.prototype.render = W, S = [], ne = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ie = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, j.__r = 0, le = /(PointerCapture)$|Capture$/i, V = 0, B = Z(!1), R = Z(!0);
var Se = 0;
function ee(t, e, r, i, l, o) {
  e || (e = {});
  var a, s, p = e;
  if ("ref" in p) for (s in p = {}, e) s == "ref" ? a = e[s] : p[s] = e[s];
  var _ = { type: t, props: p, key: r, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Se, __i: -1, __u: 0, __source: l, __self: o };
  if (typeof t == "function" && (a = t.defaultProps)) for (s in a) p[s] === void 0 && (p[s] = a[s]);
  return f.vnode && f.vnode(_), _;
}
const Pe = ({
  onClick: t,
  danger: e,
  variant: r = "default",
  icon: i,
  children: l
}) => /* @__PURE__ */ ee(
  "button",
  {
    className: `phi-button ${r} ${e ? "danger" : ""}`,
    onClick: t,
    children: [
      i && /* @__PURE__ */ ee("span", { className: "icon", children: i }),
      l
    ]
  }
), te = (t) => t.replace(/-(\w)/g, (e, r) => r ? r.toUpperCase() : ""), re = (t) => T("slot", t), Ce = (t, e) => {
  class r extends HTMLElement {
    constructor() {
      super();
      x(this, "_root");
      x(this, "_vdom");
      x(this, "_initialProps");
      x(this, "_internals");
      this._root = this.attachShadow({ mode: "open" }), this._vdom = null, this._internals = e.formAssociated ? this.attachInternals() : null, this._initialProps = {}, e.adoptedStyleSheets && (this._root.adoptedStyleSheets = e.adoptedStyleSheets);
    }
    // Reflect prop/attr change to Preact props
    // -- Maybe VALUE cannot be typed in TypeScript.
    updateProp(o, a) {
      if (!this._vdom) {
        this._initialProps[o] = a, this._initialProps[te(o)] = a;
        return;
      }
      const s = { [o]: a, [te(o)]: a };
      this._vdom = xe(this._vdom, s), H(this._vdom, this._root);
    }
    // Reflect raw attr value to Preact props if appropreate
    parseAttribute(o, a, s) {
      var p, _;
      if (!(s && ((p = this._initialProps) != null && p.hasOwnProperty(o))) && (_ = e.attributes) != null && _[o]) {
        const h = e.attributes[o], n = "parse" in h ? h.parse : h;
        n && this.updateProp(o, n(a ?? void 0));
      }
    }
    connectedCallback() {
      const { attributes: o, childNodes: a } = this;
      for (let p = 0; p < o.length; p++)
        this.parseAttribute(o[p].name, o[p].value, !0);
      const s = this._initialProps ?? {};
      (e.slots ?? []).forEach((p) => {
        s[p] = T(re, { name: p }, null);
      }), this._vdom = T(t, s, T(re, { name: void 0 }, null)), (this.hasAttribute("hydrate") ? ue : H)(this._vdom, this._root);
    }
    disconnectedCallback() {
      this._vdom = null, H(null, this._root);
    }
    attributeChangedCallback(o, a, s) {
      this.parseAttribute(o, s);
    }
  }
  return x(r, "observedAttributes", Object.keys(e.attributes ?? {})), x(r, "formAssociated", !!e.formAssociated), (e.properties ?? []).forEach((i) => {
    var s;
    const l = i === e.formAssociated, o = (s = e.attributes) == null ? void 0 : s[i], a = o && "reflect" in o && o.reflect;
    Object.defineProperty(r.prototype, i, {
      get() {
        return this._vdom.props[i];
      },
      set(p) {
        this.updateProp(i, p), a && this.setAttribute(i, a(p)), l && this._internals && this._internals.setFormValue(p);
      }
    });
  }), r;
}, ze = (t, e, r) => {
  const i = Ce(t, r);
  return customElements.define(e, i);
}, fe = (...t) => {
  const e = new CSSStyleSheet();
  return e.replaceSync(t.join("")), e;
}, Ae = {
  parse: (t) => t && t !== "false" && t !== "0" || t === "",
  reflect: (t) => t
}, Me = {
  parse: (t) => t == null ? "" : t.toString(),
  reflect: (t) => t
}, Te = "/*! destyle.css v4.0.1 | MIT License | https://github.com/nicolas-cusan/destyle.min.css */*,:before,:after{box-sizing:border-box;border-style:solid;border-width:0;min-width:0}html{line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}body{margin:0}main{display:block}p,table,blockquote,address,pre,iframe,form,figure,dl{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit;margin:0}ul,ol{margin:0;padding:0;list-style:none}dt{font-weight:700}dd{margin-left:0}hr{box-sizing:content-box;height:0;overflow:visible;border-top-width:1px;margin:0;clear:both;color:inherit}pre{font-family:monospace,monospace;font-size:inherit}address{font-style:inherit}a{background-color:transparent;text-decoration:none;color:inherit}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:inherit}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}svg,img,embed,object,iframe{vertical-align:bottom}button,input,optgroup,select,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;vertical-align:middle;color:inherit;font:inherit;background:transparent;padding:0;margin:0;border-radius:0;text-align:inherit;text-transform:inherit}button,[type=button],[type=reset],[type=submit]{cursor:pointer}button:disabled,[type=button]:disabled,[type=reset]:disabled,[type=submit]:disabled{cursor:default}:-moz-focusring{outline:auto}select:disabled{opacity:inherit}option{padding:0}fieldset{margin:0;padding:0;min-width:0}legend{padding:0}progress{vertical-align:baseline}textarea{overflow:auto}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=number]{-moz-appearance:textfield}label[for]{cursor:pointer}details{display:block}summary{display:list-item}[contenteditable]:focus{outline:auto}table{border-color:inherit;border-collapse:collapse}caption{text-align:left}td,th{vertical-align:top;padding:0}th{text-align:left;font-weight:700}", Ee = ":root,:host{--phi-color-palette-neutral-lighter: #ffb81cff;--phi-color-palette-neutral-base: #eeaa00ff;--phi-color-palette-neutral-darker: #cd9200ff;--phi-color-palette-neutral-bg: #eeaa0020;--phi-color-palette-neutral-outline: #eeaa0030;--phi-color-palette-danger-lighter: #fa837eff;--phi-color-palette-danger-base: #f76b68ff;--phi-color-palette-danger-darker: #e53c42ff;--phi-color-palette-danger-bg: #f76b6820;--phi-color-palette-danger-outline: #f76b6830;--phi-color-bg: #ffffffff;--phi-color-distant-fg: #ffffffff;--phi-color-fg: #000000d0;--phi-color-border: #00000040;--phi-color-neutral-bg: var(--phi-color-palette-neutral-bg);--phi-color-neutral-hover: var(--phi-color-palette-neutral-lighter);--phi-color-neutral-default: var(--phi-color-palette-neutral-base);--phi-color-neutral-active: var(--phi-color-palette-neutral-darker);--phi-color-danger-bg: var(--phi-color-palette-danger-bg);--phi-color-danger-hover: var(--phi-color-palette-danger-lighter);--phi-color-danger-default: var(--phi-color-palette-danger-base);--phi-color-danger-active: var(--phi-color-palette-danger-darker);--phi-shadow-pressable-default: 0 1px #00000040;--phi-shadow-pressable-neutral-default: 0 1px #00000020, 0 1px var(--phi-color-palette-neutral-base);--phi-shadow-pressable-neutral-hover: 0 1px #00000020, 0 1px var(--phi-color-palette-neutral-lighter);--phi-shadow-pressable-danger-default: 0 1px #00000020, 0 1px var(--phi-color-palette-danger-base);--phi-shadow-pressable-danger-hover: 0 1px #00000020, 0 1px var(--phi-color-palette-danger-lighter);--phi-shadow-focus-neutral: 0 0 0 2px var(--phi-color-palette-neutral-outline);--phi-shadow-focus-danger: 0 0 0 2px var(--phi-color-palette-danger-outline);--phi-fontsize-md: 14px;--phi-fontsize-icon-md: 17.5px;--phi-fontsize-icon-lg: 26.25px;--phi-radius-md: 8.75px;--phi-spacing-padding-sm: 4.25px ;--phi-spacing-padding-md: 13px ;--phi-spacing-margin-inline: 5.25px}@media (prefers-color-scheme: dark){:root{--phi-color-palette-neutral-lighter: #e6af47ff;--phi-color-palette-neutral-base: #d7a139ff;--phi-color-palette-neutral-darker: #c79431ff;--phi-color-palette-neutral-bg: #d7a13920;--phi-color-palette-neutral-outline: #d7a13930;--phi-color-palette-danger-lighter: #f38882ff;--phi-color-palette-danger-base: #ee736eff;--phi-color-palette-danger-darker: #e65f5cff;--phi-color-palette-danger-bg: #ee736e20;--phi-color-palette-danger-outline: #ee736e30;--phi-color-bg: #222222ff;--phi-color-distant-fg: #222222ff;--phi-color-fg: #ffffffd0;--phi-color-border: #ffffff40;--phi-color-neutral-hover: var(--phi-color-palette-neutral-darker);--phi-color-neutral-active: var(--phi-color-palette-neutral-lighter);--phi-color-danger-hover: var(--phi-color-palette-danger-darker);--phi-color-danger-active: var(--phi-color-palette-danger-lighter)}}", Ne = "body,:host{font-family:Helvetica Neue,Arial,Hiragino Kaku Gothic ProN,Hiragino Sans,Meiryo,sans-serif;font-size:var(--phi-fontsize-md);background-color:var(--phi-color-bg);color:var(--phi-color-fg);line-height:1.25em}", Ue = fe(Te, Ee, Ne), De = ".phi-button{--phi-color-accent-default: var(--phi-color-neutral-default);--phi-color-accent-hover: var(--phi-color-neutral-hover);--phi-color-accent-active: var(--phi-color-neutral-active);--phi-color-accent-bg: var(--phi-color-neutral-bg);--phi-shadow-pressable-accent-default: var(--phi-shadow-pressable-neutral-default);--phi-shadow-pressable-accent-hover: var(--phi-shadow-pressable-neutral-hover);display:inline-flex;align-items:center;font-size:var(--phi-fontsize-md);height:calc(var(--phi-fontsize-md) * 3);padding:0 var(--phi-spacing-padding-md);gap:var(--phi-spacing-margin-inline);border-radius:var(--phi-radius-md);cursor:pointer;-webkit-user-select:none;user-select:none}.phi-button.danger{--phi-color-accent-default: var(--phi-color-danger-default);--phi-color-accent-hover: var(--phi-color-danger-hover);--phi-color-accent-active: var(--phi-color-danger-active);--phi-color-accent-bg: var(--phi-color-danger-bg);--phi-shadow-pressable-accent-default: var(--phi-shadow-pressable-danger-default);--phi-shadow-pressable-accent-hover: var(--phi-shadow-pressable-danger-hover)}.phi-button.primary{color:var(--phi-color-distant-fg);background-color:var(--phi-color-accent-default);border:1px solid var(--phi-color-accent-default);box-shadow:var(--phi-shadow-pressable-accent-default);transform:translateY(-1px)}.phi-button.primary:hover{color:var(--phi-color-distant-fg);background-color:var(--phi-color-accent-hover);border-color:var(--phi-color-accent-hover);box-shadow:var(--phi-shadow-pressable-accent-hover)}.phi-button.primary:active{transform:none;box-shadow:none}.phi-button.default{color:var(--phi-color-fg);background-color:transparent;border:1px solid currentColor;box-shadow:var(--phi-shadow-pressable-default);transform:translateY(-1px)}.phi-button.default:hover{color:var(--phi-color-accent-default);box-shadow:var(--phi-shadow-pressable-accent-hover)}.phi-button.default:active{transform:none;box-shadow:none}.phi-button.dotted{color:var(--phi-color-fg);background-color:transparent;border:1px dashed currentColor}.phi-button.dotted:hover:not(:active){color:var(--phi-color-accent-default)}.phi-button.dotted:active{color:var(--phi-color-accent-active);background-color:var(--phi-color-accent-bg)}.phi-button>.icon{display:inline-block;font-size:var(--phi-fontsize-icon-md);line-height:1em}", Le = fe(De), $e = () => ze(Pe, "phi-button", {
  // Add styles to the ShadowDOM
  adoptedStyleSheets: [Ue, Le],
  // Create slots and pass to Preact component through its properties
  // eg. When set `["icon"]`, then `<slot name="icon" />` is passed through the `name` prop
  slots: ["icon"],
  // DOM properties that makes Preact component update.
  properties: ["onClick", "danger", "variant"],
  // Attribute parsers to get initial props passed to the Preact component
  attributes: {
    danger: Ae,
    variant: Me
  }
  // // DOM property which is associate with the enclosing form (for input elements)
  // formAssociated: "value"
}), He = () => {
  $e();
};
export {
  He as default
};
//# sourceMappingURL=custom-elements.js.map
