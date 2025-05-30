var A, f, te, x, K, oe, re, ne, B, O, R, L = {}, ie = [], ge = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, j = Array.isArray;
function k(t, e) {
  for (var o in e) t[o] = e[o];
  return t;
}
function q(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function S(t, e, o) {
  var r, i, n, a = {};
  for (n in e) n == "key" ? r = e[n] : n == "ref" ? i = e[n] : a[n] = e[n];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? A.call(arguments, 2) : o), typeof t == "function" && t.defaultProps != null) for (n in t.defaultProps) a[n] == null && (a[n] = t.defaultProps[n]);
  return M(t, a, r, i, null);
}
function M(t, e, o, r, i) {
  var n = { type: t, props: e, key: o, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: i ?? ++te, __i: -1, __u: 0 };
  return i == null && f.vnode != null && f.vnode(n), n;
}
function F(t) {
  return t.children;
}
function $(t, e) {
  this.props = t, this.context = e;
}
function C(t, e) {
  if (e == null) return t.__ ? C(t.__, t.__i + 1) : null;
  for (var o; e < t.__k.length; e++) if ((o = t.__k[e]) != null && o.__e != null) return o.__e;
  return typeof t.type == "function" ? C(t) : null;
}
function le(t) {
  var e, o;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++) if ((o = t.__k[e]) != null && o.__e != null) {
      t.__e = t.__c.base = o.__e;
      break;
    }
    return le(t);
  }
}
function Q(t) {
  (!t.__d && (t.__d = !0) && x.push(t) && !N.__r++ || K != f.debounceRendering) && ((K = f.debounceRendering) || oe)(N);
}
function N() {
  for (var t, e, o, r, i, n, a, p = 1; x.length; ) x.length > p && x.sort(re), t = x.shift(), p = x.length, t.__d && (o = void 0, i = (r = (e = t).__v).__e, n = [], a = [], e.__P && ((o = k({}, r)).__v = r.__v + 1, f.vnode && f.vnode(o), G(e.__P, o, r, e.__n, e.__P.namespaceURI, 32 & r.__u ? [i] : null, n, i ?? C(r), !!(32 & r.__u), a), o.__v = r.__v, o.__.__k[o.__i] = o, se(n, o, a), o.__e != i && le(o)));
  N.__r = 0;
}
function ae(t, e, o, r, i, n, a, p, c, s, h) {
  var l, b, _, g, m, v, d = r && r.__k || ie, u = e.length;
  for (c = ve(o, e, d, c, u), l = 0; l < u; l++) (_ = o.__k[l]) != null && (b = _.__i == -1 ? L : d[_.__i] || L, _.__i = l, v = G(t, _, b, i, n, a, p, c, s, h), g = _.__e, _.ref && b.ref != _.ref && (b.ref && Y(b.ref, null, _), h.push(_.ref, _.__c || g, _)), m == null && g != null && (m = g), 4 & _.__u || b.__k === _.__k ? c = pe(_, c, t) : typeof _.type == "function" && v !== void 0 ? c = v : g && (c = g.nextSibling), _.__u &= -7);
  return o.__e = m, c;
}
function ve(t, e, o, r, i) {
  var n, a, p, c, s, h = o.length, l = h, b = 0;
  for (t.__k = new Array(i), n = 0; n < i; n++) (a = e[n]) != null && typeof a != "boolean" && typeof a != "function" ? (c = n + b, (a = t.__k[n] = typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? M(null, a, null, null, null) : j(a) ? M(F, { children: a }, null, null, null) : a.constructor == null && a.__b > 0 ? M(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a).__ = t, a.__b = t.__b + 1, p = null, (s = a.__i = me(a, o, c, l)) != -1 && (l--, (p = o[s]) && (p.__u |= 2)), p == null || p.__v == null ? (s == -1 && (i > h ? b-- : i < h && b++), typeof a.type != "function" && (a.__u |= 4)) : s != c && (s == c - 1 ? b-- : s == c + 1 ? b++ : (s > c ? b-- : b++, a.__u |= 4))) : t.__k[n] = null;
  if (l) for (n = 0; n < h; n++) (p = o[n]) != null && (2 & p.__u) == 0 && (p.__e == r && (r = C(p)), _e(p, p));
  return r;
}
function pe(t, e, o) {
  var r, i;
  if (typeof t.type == "function") {
    for (r = t.__k, i = 0; r && i < r.length; i++) r[i] && (r[i].__ = t, e = pe(r[i], e, o));
    return e;
  }
  t.__e != e && (e && t.type && !o.contains(e) && (e = C(t)), o.insertBefore(t.__e, e || null), e = t.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function me(t, e, o, r) {
  var i, n, a = t.key, p = t.type, c = e[o];
  if (c === null && t.key == null || c && a == c.key && p == c.type && (2 & c.__u) == 0) return o;
  if (r > (c != null && (2 & c.__u) == 0 ? 1 : 0)) for (i = o - 1, n = o + 1; i >= 0 || n < e.length; ) {
    if (i >= 0) {
      if ((c = e[i]) && (2 & c.__u) == 0 && a == c.key && p == c.type) return i;
      i--;
    }
    if (n < e.length) {
      if ((c = e[n]) && (2 & c.__u) == 0 && a == c.key && p == c.type) return n;
      n++;
    }
  }
  return -1;
}
function V(t, e, o) {
  e[0] == "-" ? t.setProperty(e, o ?? "") : t[e] = o == null ? "" : typeof o != "number" || ge.test(e) ? o : o + "px";
}
function H(t, e, o, r, i) {
  var n, a;
  e: if (e == "style") if (typeof o == "string") t.style.cssText = o;
  else {
    if (typeof r == "string" && (t.style.cssText = r = ""), r) for (e in r) o && e in o || V(t.style, e, "");
    if (o) for (e in o) r && o[e] == r[e] || V(t.style, e, o[e]);
  }
  else if (e[0] == "o" && e[1] == "n") n = e != (e = e.replace(ne, "$1")), a = e.toLowerCase(), e = a in t || e == "onFocusOut" || e == "onFocusIn" ? a.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + n] = o, o ? r ? o.u = r.u : (o.u = B, t.addEventListener(e, n ? R : O, n)) : t.removeEventListener(e, n ? R : O, n);
  else {
    if (i == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in t) try {
      t[e] = o ?? "";
      break e;
    } catch {
    }
    typeof o == "function" || (o == null || o === !1 && e[4] != "-" ? t.removeAttribute(e) : t.setAttribute(e, e == "popover" && o == 1 ? "" : o));
  }
}
function X(t) {
  return function(e) {
    if (this.l) {
      var o = this.l[e.type + t];
      if (e.t == null) e.t = B++;
      else if (e.t < o.u) return;
      return o(f.event ? f.event(e) : e);
    }
  };
}
function G(t, e, o, r, i, n, a, p, c, s) {
  var h, l, b, _, g, m, v, d, u, P, w, U, z, J, D, T, W, y = e.type;
  if (e.constructor != null) return null;
  128 & o.__u && (c = !!(32 & o.__u), n = [p = e.__e = o.__e]), (h = f.__b) && h(e);
  e: if (typeof y == "function") try {
    if (d = e.props, u = "prototype" in y && y.prototype.render, P = (h = y.contextType) && r[h.__c], w = h ? P ? P.props.value : h.__ : r, o.__c ? v = (l = e.__c = o.__c).__ = l.__E : (u ? e.__c = l = new y(d, w) : (e.__c = l = new $(d, w), l.constructor = y, l.render = ke), P && P.sub(l), l.props = d, l.state || (l.state = {}), l.context = w, l.__n = r, b = l.__d = !0, l.__h = [], l._sb = []), u && l.__s == null && (l.__s = l.state), u && y.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = k({}, l.__s)), k(l.__s, y.getDerivedStateFromProps(d, l.__s))), _ = l.props, g = l.state, l.__v = e, b) u && y.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), u && l.componentDidMount != null && l.__h.push(l.componentDidMount);
    else {
      if (u && y.getDerivedStateFromProps == null && d !== _ && l.componentWillReceiveProps != null && l.componentWillReceiveProps(d, w), !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(d, l.__s, w) === !1 || e.__v == o.__v) {
        for (e.__v != o.__v && (l.props = d, l.state = l.__s, l.__d = !1), e.__e = o.__e, e.__k = o.__k, e.__k.some(function(E) {
          E && (E.__ = e);
        }), U = 0; U < l._sb.length; U++) l.__h.push(l._sb[U]);
        l._sb = [], l.__h.length && a.push(l);
        break e;
      }
      l.componentWillUpdate != null && l.componentWillUpdate(d, l.__s, w), u && l.componentDidUpdate != null && l.__h.push(function() {
        l.componentDidUpdate(_, g, m);
      });
    }
    if (l.context = w, l.props = d, l.__P = t, l.__e = !1, z = f.__r, J = 0, u) {
      for (l.state = l.__s, l.__d = !1, z && z(e), h = l.render(l.props, l.state, l.context), D = 0; D < l._sb.length; D++) l.__h.push(l._sb[D]);
      l._sb = [];
    } else do
      l.__d = !1, z && z(e), h = l.render(l.props, l.state, l.context), l.state = l.__s;
    while (l.__d && ++J < 25);
    l.state = l.__s, l.getChildContext != null && (r = k(k({}, r), l.getChildContext())), u && !b && l.getSnapshotBeforeUpdate != null && (m = l.getSnapshotBeforeUpdate(_, g)), T = h, h != null && h.type === F && h.key == null && (T = ce(h.props.children)), p = ae(t, j(T) ? T : [T], e, o, r, i, n, a, p, c, s), l.base = e.__e, e.__u &= -161, l.__h.length && a.push(l), v && (l.__E = l.__ = null);
  } catch (E) {
    if (e.__v = null, c || n != null) if (E.then) {
      for (e.__u |= c ? 160 : 128; p && p.nodeType == 8 && p.nextSibling; ) p = p.nextSibling;
      n[n.indexOf(p)] = null, e.__e = p;
    } else for (W = n.length; W--; ) q(n[W]);
    else e.__e = o.__e, e.__k = o.__k;
    f.__e(E, e, o);
  }
  else n == null && e.__v == o.__v ? (e.__k = o.__k, e.__e = o.__e) : p = e.__e = ye(o.__e, e, o, r, i, n, a, c, s);
  return (h = f.diffed) && h(e), 128 & e.__u ? void 0 : p;
}
function se(t, e, o) {
  for (var r = 0; r < o.length; r++) Y(o[r], o[++r], o[++r]);
  f.__c && f.__c(e, t), t.some(function(i) {
    try {
      t = i.__h, i.__h = [], t.some(function(n) {
        n.call(i);
      });
    } catch (n) {
      f.__e(n, i.__v);
    }
  });
}
function ce(t) {
  return typeof t != "object" || t == null || t.__b && t.__b > 0 ? t : j(t) ? t.map(ce) : k({}, t);
}
function ye(t, e, o, r, i, n, a, p, c) {
  var s, h, l, b, _, g, m, v = o.props, d = e.props, u = e.type;
  if (u == "svg" ? i = "http://www.w3.org/2000/svg" : u == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), n != null) {
    for (s = 0; s < n.length; s++) if ((_ = n[s]) && "setAttribute" in _ == !!u && (u ? _.localName == u : _.nodeType == 3)) {
      t = _, n[s] = null;
      break;
    }
  }
  if (t == null) {
    if (u == null) return document.createTextNode(d);
    t = document.createElementNS(i, u, d.is && d), p && (f.__m && f.__m(e, n), p = !1), n = null;
  }
  if (u == null) v === d || p && t.data == d || (t.data = d);
  else {
    if (n = n && A.call(t.childNodes), v = o.props || L, !p && n != null) for (v = {}, s = 0; s < t.attributes.length; s++) v[(_ = t.attributes[s]).name] = _.value;
    for (s in v) if (_ = v[s], s != "children") {
      if (s == "dangerouslySetInnerHTML") l = _;
      else if (!(s in d)) {
        if (s == "value" && "defaultValue" in d || s == "checked" && "defaultChecked" in d) continue;
        H(t, s, null, _, i);
      }
    }
    for (s in d) _ = d[s], s == "children" ? b = _ : s == "dangerouslySetInnerHTML" ? h = _ : s == "value" ? g = _ : s == "checked" ? m = _ : p && typeof _ != "function" || v[s] === _ || H(t, s, _, v[s], i);
    if (h) p || l && (h.__html == l.__html || h.__html == t.innerHTML) || (t.innerHTML = h.__html), e.__k = [];
    else if (l && (t.innerHTML = ""), ae(e.type == "template" ? t.content : t, j(b) ? b : [b], e, o, r, u == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, n, a, n ? n[0] : o.__k && C(o, 0), p, c), n != null) for (s = n.length; s--; ) q(n[s]);
    p || (s = "value", u == "progress" && g == null ? t.removeAttribute("value") : g != null && (g !== t[s] || u == "progress" && !g || u == "option" && g != v[s]) && H(t, s, g, v[s], i), s = "checked", m != null && m != t[s] && H(t, s, m, v[s], i));
  }
  return t;
}
function Y(t, e, o) {
  try {
    if (typeof t == "function") {
      var r = typeof t.__u == "function";
      r && t.__u(), r && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (i) {
    f.__e(i, o);
  }
}
function _e(t, e, o) {
  var r, i;
  if (f.unmount && f.unmount(t), (r = t.ref) && (r.current && r.current != t.__e || Y(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (n) {
      f.__e(n, e);
    }
    r.base = r.__P = null;
  }
  if (r = t.__k) for (i = 0; i < r.length; i++) r[i] && _e(r[i], e, o || typeof t.type != "function");
  o || q(t.__e), t.__c = t.__ = t.__e = void 0;
}
function ke(t, e, o) {
  return this.constructor(t, o);
}
function I(t, e, o) {
  var r, i, n, a;
  e == document && (e = document.documentElement), f.__ && f.__(t, e), i = (r = typeof o == "function") ? null : o && o.__k || e.__k, n = [], a = [], G(e, t = (!r && o || e).__k = S(F, null, [t]), i || L, L, e.namespaceURI, !r && o ? [o] : i ? null : e.firstChild ? A.call(e.childNodes) : null, n, !r && o ? o : i ? i.__e : e.firstChild, r, a), se(n, t, a);
}
function he(t, e) {
  I(t, e, he);
}
function de(t, e, o) {
  var r, i, n, a, p = k({}, t.props);
  for (n in t.type && t.type.defaultProps && (a = t.type.defaultProps), e) n == "key" ? r = e[n] : n == "ref" ? i = e[n] : p[n] = e[n] == null && a != null ? a[n] : e[n];
  return arguments.length > 2 && (p.children = arguments.length > 3 ? A.call(arguments, 2) : o), M(t.type, p, r || t.key, i || t.ref, null);
}
A = ie.slice, f = { __e: function(t, e, o, r) {
  for (var i, n, a; e = e.__; ) if ((i = e.__c) && !i.__) try {
    if ((n = i.constructor) && n.getDerivedStateFromError != null && (i.setState(n.getDerivedStateFromError(t)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, r || {}), a = i.__d), a) return i.__E = i;
  } catch (p) {
    t = p;
  }
  throw t;
} }, te = 0, $.prototype.setState = function(t, e) {
  var o;
  o = this.__s != null && this.__s != this.state ? this.__s : this.__s = k({}, this.state), typeof t == "function" && (t = t(k({}, o), this.props)), t && k(o, t), t != null && this.__v && (e && this._sb.push(e), Q(this));
}, $.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Q(this));
}, $.prototype.render = F, x = [], oe = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, re = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, N.__r = 0, ne = /(PointerCapture)$|Capture$/i, B = 0, O = X(!1), R = X(!0);
var we = 0;
function Z(t, e, o, r, i, n) {
  e || (e = {});
  var a, p, c = e;
  if ("ref" in c) for (p in c = {}, e) p == "ref" ? a = e[p] : c[p] = e[p];
  var s = { type: t, props: c, key: o, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --we, __i: -1, __u: 0, __source: i, __self: n };
  if (typeof t == "function" && (a = t.defaultProps)) for (p in a) c[p] === void 0 && (c[p] = a[p]);
  return f.vnode && f.vnode(s), s;
}
const xe = ({
  onClick: t,
  danger: e,
  variant: o = "default",
  icon: r,
  children: i
}) => /* @__PURE__ */ Z(
  "button",
  {
    className: `phi-button ${o} ${e ? "danger" : ""}`,
    onClick: t,
    children: [
      r && /* @__PURE__ */ Z("span", { className: "icon", children: r }),
      i
    ]
  }
), Se = (t, e, o) => {
  function r() {
    const i = Reflect.construct(HTMLElement, [], r);
    return i._Component = t, i._root = o && o.shadow ? i.attachShadow({ mode: o.mode || "open" }) : i, o.adoptedStyleSheets && (i._root.adoptedStyleSheets = o.adoptedStyleSheets), i;
  }
  return r.prototype = Object.create(HTMLElement.prototype), r.prototype.constructor = r, r.prototype.connectedCallback = ze, r.prototype.attributeChangedCallback = Te, r.prototype.disconnectedCallback = Ee, e = e || t.observedAttributes || Object.keys(t.propTypes || {}), r.observedAttributes = e, e.forEach((i) => {
    Object.defineProperty(r.prototype, i, {
      get() {
        return this._vdom.props[i];
      },
      set(n) {
        this._vdom ? this.attributeChangedCallback(i, null, n) : (this._initialProps || (this._initialProps = {}), this._initialProps[i] = n, this.connectedCallback());
        const a = typeof n;
        (n == null || a === "string" || a === "boolean" || a === "number") && this.setAttribute(i, n);
      }
    });
  }), r;
};
function Ce(t, e, o, r) {
  const i = Se(t, o, r), n = e;
  return customElements.define(n, i);
}
function Pe({ context: t, children: e, ...o }) {
  return this.getChildContext = () => t, de(e, o);
}
function ze() {
  const t = new CustomEvent("_preact", {
    detail: {},
    bubbles: !0,
    cancelable: !0
  });
  this.dispatchEvent(t);
  const e = t.detail.context;
  this._vdom = S(
    Pe,
    { ...this._initialProps, context: e },
    fe(this, this._Component)
  ), (this.hasAttribute("hydrate") ? he : I)(this._vdom, this._root);
}
function ue(t) {
  return t.replace(/-(\w)/g, (e, o) => o ? o.toUpperCase() : "");
}
function Te(t, e, o) {
  if (!this._vdom) return;
  o = o ?? void 0;
  const r = {};
  r[t] = o, r[ue(t)] = o, this._vdom = de(this._vdom, r), I(this._vdom, this._root);
}
function Ee() {
  this._vdom = null, I(null, this._root);
}
function ee(t, e) {
  return S("slot", { ...t, ref: (r) => {
    r ? (this.ref = r, this._listener || (this._listener = (i) => {
      i.stopPropagation(), i.detail.context = e;
    }, r.addEventListener("_preact", this._listener))) : this.ref.removeEventListener("_preact", this._listener);
  } });
}
function fe(t, e) {
  if (t.nodeType === 3)
    return t.data;
  if (t.nodeType !== 1)
    return null;
  let o = {};
  const r = t.attributes;
  for (let p = r.length; p--; )
    r[p].name !== "slot" && (o[r[p].name] = r[p].value, o[ue(r[p].name)] = r[p].value);
  let i = [];
  const n = t.childNodes;
  for (let p = n.length; p--; ) {
    const c = fe(n[p], null), s = n[p].slot;
    s ? o[s] = S(ee, { name: s }, c) : i[p] = c;
  }
  const a = e ? S(ee, null, i) : i;
  return S(e || t.nodeName.toLowerCase(), o, a);
}
const be = (...t) => {
  const e = new CSSStyleSheet();
  return e.replaceSync(t.join("")), e;
}, Me = "/*! destyle.css v4.0.1 | MIT License | https://github.com/nicolas-cusan/destyle.min.css */*,:before,:after{box-sizing:border-box;border-style:solid;border-width:0;min-width:0}html{line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}body{margin:0}main{display:block}p,table,blockquote,address,pre,iframe,form,figure,dl{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit;margin:0}ul,ol{margin:0;padding:0;list-style:none}dt{font-weight:700}dd{margin-left:0}hr{box-sizing:content-box;height:0;overflow:visible;border-top-width:1px;margin:0;clear:both;color:inherit}pre{font-family:monospace,monospace;font-size:inherit}address{font-style:inherit}a{background-color:transparent;text-decoration:none;color:inherit}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:inherit}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}svg,img,embed,object,iframe{vertical-align:bottom}button,input,optgroup,select,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;vertical-align:middle;color:inherit;font:inherit;background:transparent;padding:0;margin:0;border-radius:0;text-align:inherit;text-transform:inherit}button,[type=button],[type=reset],[type=submit]{cursor:pointer}button:disabled,[type=button]:disabled,[type=reset]:disabled,[type=submit]:disabled{cursor:default}:-moz-focusring{outline:auto}select:disabled{opacity:inherit}option{padding:0}fieldset{margin:0;padding:0;min-width:0}legend{padding:0}progress{vertical-align:baseline}textarea{overflow:auto}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=number]{-moz-appearance:textfield}label[for]{cursor:pointer}details{display:block}summary{display:list-item}[contenteditable]:focus{outline:auto}table{border-color:inherit;border-collapse:collapse}caption{text-align:left}td,th{vertical-align:top;padding:0}th{text-align:left;font-weight:700}", Le = ":root,:host{--phi-color-palette-neutral-lighter: #ffb81cff;--phi-color-palette-neutral-base: #eeaa00ff;--phi-color-palette-neutral-darker: #cd9200ff;--phi-color-palette-neutral-bg: #eeaa0020;--phi-color-palette-neutral-outline: #eeaa0030;--phi-color-palette-danger-lighter: #fa837eff;--phi-color-palette-danger-base: #f76b68ff;--phi-color-palette-danger-darker: #e53c42ff;--phi-color-palette-danger-bg: #f76b6820;--phi-color-palette-danger-outline: #f76b6830;--phi-color-bg: #ffffffff;--phi-color-distant-fg: #ffffffff;--phi-color-fg: #000000d0;--phi-color-border: #00000040;--phi-color-neutral-bg: var(--phi-color-palette-neutral-bg);--phi-color-neutral-hover: var(--phi-color-palette-neutral-lighter);--phi-color-neutral-default: var(--phi-color-palette-neutral-base);--phi-color-neutral-active: var(--phi-color-palette-neutral-darker);--phi-color-danger-bg: var(--phi-color-palette-danger-bg);--phi-color-danger-hover: var(--phi-color-palette-danger-lighter);--phi-color-danger-default: var(--phi-color-palette-danger-base);--phi-color-danger-active: var(--phi-color-palette-danger-darker);--phi-shadow-pressable-default: 0 1px #00000040;--phi-shadow-pressable-neutral-default: 0 1px #00000020, 0 1px var(--phi-color-palette-neutral-base);--phi-shadow-pressable-neutral-hover: 0 1px #00000020, 0 1px var(--phi-color-palette-neutral-lighter);--phi-shadow-pressable-danger-default: 0 1px #00000020, 0 1px var(--phi-color-palette-danger-base);--phi-shadow-pressable-danger-hover: 0 1px #00000020, 0 1px var(--phi-color-palette-danger-lighter);--phi-shadow-focus-neutral: 0 0 0 2px var(--phi-color-palette-neutral-outline);--phi-shadow-focus-danger: 0 0 0 2px var(--phi-color-palette-danger-outline);--phi-fontsize-md: 14px;--phi-fontsize-icon-md: 17.5px;--phi-fontsize-icon-lg: 26.25px;--phi-radius-md: 8.75px;--phi-spacing-padding-sm: 4.25px ;--phi-spacing-padding-md: 13px ;--phi-spacing-margin-inline: 5.25px}@media (prefers-color-scheme: dark){:root{--phi-color-palette-neutral-lighter: #e6af47ff;--phi-color-palette-neutral-base: #d7a139ff;--phi-color-palette-neutral-darker: #c79431ff;--phi-color-palette-neutral-bg: #d7a13920;--phi-color-palette-neutral-outline: #d7a13930;--phi-color-palette-danger-lighter: #f38882ff;--phi-color-palette-danger-base: #ee736eff;--phi-color-palette-danger-darker: #e65f5cff;--phi-color-palette-danger-bg: #ee736e20;--phi-color-palette-danger-outline: #ee736e30;--phi-color-bg: #222222ff;--phi-color-distant-fg: #222222ff;--phi-color-fg: #ffffffd0;--phi-color-border: #ffffff40;--phi-color-neutral-hover: var(--phi-color-palette-neutral-darker);--phi-color-neutral-active: var(--phi-color-palette-neutral-lighter);--phi-color-danger-hover: var(--phi-color-palette-danger-darker);--phi-color-danger-active: var(--phi-color-palette-danger-lighter)}}", Ae = "body,:host{font-family:Helvetica Neue,Arial,Hiragino Kaku Gothic ProN,Hiragino Sans,Meiryo,sans-serif;font-size:var(--phi-fontsize-md);background-color:var(--phi-color-bg);color:var(--phi-color-fg);line-height:1.25em}", Ue = be(Me, Le, Ae), De = ".phi-button{--phi-color-accent-default: var(--phi-color-neutral-default);--phi-color-accent-hover: var(--phi-color-neutral-hover);--phi-color-accent-active: var(--phi-color-neutral-active);--phi-color-accent-bg: var(--phi-color-neutral-bg);--phi-shadow-pressable-accent-default: var(--phi-shadow-pressable-neutral-default);--phi-shadow-pressable-accent-hover: var(--phi-shadow-pressable-neutral-hover);display:inline-flex;align-items:center;font-size:var(--phi-fontsize-md);height:calc(var(--phi-fontsize-md) * 3);padding:0 var(--phi-spacing-padding-md);gap:var(--phi-spacing-margin-inline);border-radius:var(--phi-radius-md);cursor:pointer;-webkit-user-select:none;user-select:none}.phi-button.danger{--phi-color-accent-default: var(--phi-color-danger-default);--phi-color-accent-hover: var(--phi-color-danger-hover);--phi-color-accent-active: var(--phi-color-danger-active);--phi-color-accent-bg: var(--phi-color-danger-bg);--phi-shadow-pressable-accent-default: var(--phi-shadow-pressable-danger-default);--phi-shadow-pressable-accent-hover: var(--phi-shadow-pressable-danger-hover)}.phi-button.primary{color:var(--phi-color-distant-fg);background-color:var(--phi-color-accent-default);border:1px solid var(--phi-color-accent-default);box-shadow:var(--phi-shadow-pressable-accent-default);transform:translateY(-1px)}.phi-button.primary:hover{color:var(--phi-color-distant-fg);background-color:var(--phi-color-accent-hover);border-color:var(--phi-color-accent-hover);box-shadow:var(--phi-shadow-pressable-accent-hover)}.phi-button.primary:active{transform:none;box-shadow:none}.phi-button.default{color:var(--phi-color-fg);background-color:transparent;border:1px solid currentColor;box-shadow:var(--phi-shadow-pressable-default);transform:translateY(-1px)}.phi-button.default:hover{color:var(--phi-color-accent-default);box-shadow:var(--phi-shadow-pressable-accent-hover)}.phi-button.default:active{transform:none;box-shadow:none}.phi-button.dotted{color:var(--phi-color-fg);background-color:transparent;border:1px dashed currentColor}.phi-button.dotted:hover:not(:active){color:var(--phi-color-accent-default)}.phi-button.dotted:active{color:var(--phi-color-accent-active);background-color:var(--phi-color-accent-bg)}.phi-button>.icon{display:inline-block;font-size:var(--phi-fontsize-icon-md);line-height:1em}", He = be(De), $e = () => Ce(
  xe,
  "phi-button",
  ["onClick", "danger", "variant", "icon", "children"],
  { shadow: !0, adoptedStyleSheets: [Ue, He] }
), Ne = () => {
  $e();
};
export {
  Ne as default
};
