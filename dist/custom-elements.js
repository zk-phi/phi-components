var Ye = Object.defineProperty;
var Ge = (e, t, r) => t in e ? Ye(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var E = (e, t, r) => Ge(e, typeof t != "symbol" ? t + "" : t, r);
var I, g, Te, A, ge, Ee, Pe, Ve, he, se, le, O = {}, qe = [], Je = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ee = Array.isArray;
function H(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function de(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function D(e, t, r) {
  var o, i, n, s = {};
  for (n in t) n == "key" ? o = t[n] : n == "ref" ? i = t[n] : s[n] = t[n];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? I.call(arguments, 2) : r), typeof e == "function" && e.defaultProps != null) for (n in e.defaultProps) s[n] == null && (s[n] = e.defaultProps[n]);
  return U(e, s, o, i, null);
}
function U(e, t, r, o, i) {
  var n = { type: e, props: t, key: r, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: i ?? ++Te, __i: -1, __u: 0 };
  return i == null && g.vnode != null && g.vnode(n), n;
}
function te(e) {
  return e.children;
}
function J(e, t) {
  this.props = e, this.context = t;
}
function W(e, t) {
  if (t == null) return e.__ ? W(e.__, e.__i + 1) : null;
  for (var r; t < e.__k.length; t++) if ((r = e.__k[t]) != null && r.__e != null) return r.__e;
  return typeof e.type == "function" ? W(e) : null;
}
function Ae(e) {
  var t, r;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if ((r = e.__k[t]) != null && r.__e != null) {
      e.__e = e.__c.base = r.__e;
      break;
    }
    return Ae(e);
  }
}
function fe(e) {
  (!e.__d && (e.__d = !0) && A.push(e) && !Q.__r++ || ge != g.debounceRendering) && ((ge = g.debounceRendering) || Ee)(Q);
}
function Q() {
  for (var e, t, r, o, i, n, s, c = 1; A.length; ) A.length > c && A.sort(Pe), e = A.shift(), c = A.length, e.__d && (r = void 0, i = (o = (t = e).__v).__e, n = [], s = [], t.__P && ((r = H({}, o)).__v = o.__v + 1, g.vnode && g.vnode(r), ue(t.__P, r, o, t.__n, t.__P.namespaceURI, 32 & o.__u ? [i] : null, n, i ?? W(o), !!(32 & o.__u), s), r.__v = o.__v, r.__.__k[r.__i] = r, Le(n, r, s), r.__e != i && Ae(r)));
  Q.__r = 0;
}
function je(e, t, r, o, i, n, s, c, h, p, u) {
  var a, _, d, v, y, b, m = o && o.__k || qe, f = t.length;
  for (h = Ke(r, t, m, h, f), a = 0; a < f; a++) (d = r.__k[a]) != null && (_ = d.__i == -1 ? O : m[d.__i] || O, d.__i = a, b = ue(e, d, _, i, n, s, c, h, p, u), v = d.__e, d.ref && _.ref != d.ref && (_.ref && _e(_.ref, null, d), u.push(d.ref, d.__c || v, d)), y == null && v != null && (y = v), 4 & d.__u || _.__k === d.__k ? h = We(d, h, e) : typeof d.type == "function" && b !== void 0 ? h = b : v && (h = v.nextSibling), d.__u &= -7);
  return r.__e = y, h;
}
function Ke(e, t, r, o, i) {
  var n, s, c, h, p, u = r.length, a = u, _ = 0;
  for (e.__k = new Array(i), n = 0; n < i; n++) (s = t[n]) != null && typeof s != "boolean" && typeof s != "function" ? (h = n + _, (s = e.__k[n] = typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? U(null, s, null, null, null) : ee(s) ? U(te, { children: s }, null, null, null) : s.constructor == null && s.__b > 0 ? U(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : s).__ = e, s.__b = e.__b + 1, c = null, (p = s.__i = Qe(s, r, h, a)) != -1 && (a--, (c = r[p]) && (c.__u |= 2)), c == null || c.__v == null ? (p == -1 && (i > u ? _-- : i < u && _++), typeof s.type != "function" && (s.__u |= 4)) : p != h && (p == h - 1 ? _-- : p == h + 1 ? _++ : (p > h ? _-- : _++, s.__u |= 4))) : e.__k[n] = null;
  if (a) for (n = 0; n < u; n++) (c = r[n]) != null && (2 & c.__u) == 0 && (c.__e == o && (o = W(c)), Be(c, c));
  return o;
}
function We(e, t, r) {
  var o, i;
  if (typeof e.type == "function") {
    for (o = e.__k, i = 0; o && i < o.length; i++) o[i] && (o[i].__ = e, t = We(o[i], t, r));
    return t;
  }
  e.__e != t && (t && e.type && !r.contains(t) && (t = W(e)), r.insertBefore(e.__e, t || null), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function Qe(e, t, r, o) {
  var i, n, s = e.key, c = e.type, h = t[r];
  if (h === null && e.key == null || h && s == h.key && c == h.type && (2 & h.__u) == 0) return r;
  if (o > (h != null && (2 & h.__u) == 0 ? 1 : 0)) for (i = r - 1, n = r + 1; i >= 0 || n < t.length; ) {
    if (i >= 0) {
      if ((h = t[i]) && (2 & h.__u) == 0 && s == h.key && c == h.type) return i;
      i--;
    }
    if (n < t.length) {
      if ((h = t[n]) && (2 & h.__u) == 0 && s == h.key && c == h.type) return n;
      n++;
    }
  }
  return -1;
}
function be(e, t, r) {
  t[0] == "-" ? e.setProperty(t, r ?? "") : e[t] = r == null ? "" : typeof r != "number" || Je.test(t) ? r : r + "px";
}
function G(e, t, r, o, i) {
  var n, s;
  e: if (t == "style") if (typeof r == "string") e.style.cssText = r;
  else {
    if (typeof o == "string" && (e.style.cssText = o = ""), o) for (t in o) r && t in r || be(e.style, t, "");
    if (r) for (t in r) o && r[t] == o[t] || be(e.style, t, r[t]);
  }
  else if (t[0] == "o" && t[1] == "n") n = t != (t = t.replace(Ve, "$1")), s = t.toLowerCase(), t = s in e || t == "onFocusOut" || t == "onFocusIn" ? s.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + n] = r, r ? o ? r.u = o.u : (r.u = he, e.addEventListener(t, n ? le : se, n)) : e.removeEventListener(t, n ? le : se, n);
  else {
    if (i == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = r ?? "";
      break e;
    } catch {
    }
    typeof r == "function" || (r == null || r === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && r == 1 ? "" : r));
  }
}
function we(e) {
  return function(t) {
    if (this.l) {
      var r = this.l[t.type + e];
      if (t.t == null) t.t = he++;
      else if (t.t < r.u) return;
      return r(g.event ? g.event(t) : t);
    }
  };
}
function ue(e, t, r, o, i, n, s, c, h, p) {
  var u, a, _, d, v, y, b, m, f, L, V, Z, N, me, Y, B, re, S = t.type;
  if (t.constructor != null) return null;
  128 & r.__u && (h = !!(32 & r.__u), n = [c = t.__e = r.__e]), (u = g.__b) && u(t);
  e: if (typeof S == "function") try {
    if (m = t.props, f = "prototype" in S && S.prototype.render, L = (u = S.contextType) && o[u.__c], V = u ? L ? L.props.value : u.__ : o, r.__c ? b = (a = t.__c = r.__c).__ = a.__E : (f ? t.__c = a = new S(m, V) : (t.__c = a = new J(m, V), a.constructor = S, a.render = et), L && L.sub(a), a.props = m, a.state || (a.state = {}), a.context = V, a.__n = o, _ = a.__d = !0, a.__h = [], a._sb = []), f && a.__s == null && (a.__s = a.state), f && S.getDerivedStateFromProps != null && (a.__s == a.state && (a.__s = H({}, a.__s)), H(a.__s, S.getDerivedStateFromProps(m, a.__s))), d = a.props, v = a.state, a.__v = t, _) f && S.getDerivedStateFromProps == null && a.componentWillMount != null && a.componentWillMount(), f && a.componentDidMount != null && a.__h.push(a.componentDidMount);
    else {
      if (f && S.getDerivedStateFromProps == null && m !== d && a.componentWillReceiveProps != null && a.componentWillReceiveProps(m, V), !a.__e && a.shouldComponentUpdate != null && a.shouldComponentUpdate(m, a.__s, V) === !1 || t.__v == r.__v) {
        for (t.__v != r.__v && (a.props = m, a.state = a.__s, a.__d = !1), t.__e = r.__e, t.__k = r.__k, t.__k.some(function(F) {
          F && (F.__ = t);
        }), Z = 0; Z < a._sb.length; Z++) a.__h.push(a._sb[Z]);
        a._sb = [], a.__h.length && s.push(a);
        break e;
      }
      a.componentWillUpdate != null && a.componentWillUpdate(m, a.__s, V), f && a.componentDidUpdate != null && a.__h.push(function() {
        a.componentDidUpdate(d, v, y);
      });
    }
    if (a.context = V, a.props = m, a.__P = e, a.__e = !1, N = g.__r, me = 0, f) {
      for (a.state = a.__s, a.__d = !1, N && N(t), u = a.render(a.props, a.state, a.context), Y = 0; Y < a._sb.length; Y++) a.__h.push(a._sb[Y]);
      a._sb = [];
    } else do
      a.__d = !1, N && N(t), u = a.render(a.props, a.state, a.context), a.state = a.__s;
    while (a.__d && ++me < 25);
    a.state = a.__s, a.getChildContext != null && (o = H(H({}, o), a.getChildContext())), f && !_ && a.getSnapshotBeforeUpdate != null && (y = a.getSnapshotBeforeUpdate(d, v)), B = u, u != null && u.type === te && u.key == null && (B = Ne(u.props.children)), c = je(e, ee(B) ? B : [B], t, r, o, i, n, s, c, h, p), a.base = t.__e, t.__u &= -161, a.__h.length && s.push(a), b && (a.__E = a.__ = null);
  } catch (F) {
    if (t.__v = null, h || n != null) if (F.then) {
      for (t.__u |= h ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) c = c.nextSibling;
      n[n.indexOf(c)] = null, t.__e = c;
    } else for (re = n.length; re--; ) de(n[re]);
    else t.__e = r.__e, t.__k = r.__k;
    g.__e(F, t, r);
  }
  else n == null && t.__v == r.__v ? (t.__k = r.__k, t.__e = r.__e) : c = t.__e = Xe(r.__e, t, r, o, i, n, s, h, p);
  return (u = g.diffed) && u(t), 128 & t.__u ? void 0 : c;
}
function Le(e, t, r) {
  for (var o = 0; o < r.length; o++) _e(r[o], r[++o], r[++o]);
  g.__c && g.__c(t, e), e.some(function(i) {
    try {
      e = i.__h, i.__h = [], e.some(function(n) {
        n.call(i);
      });
    } catch (n) {
      g.__e(n, i.__v);
    }
  });
}
function Ne(e) {
  return typeof e != "object" || e == null || e.__b && e.__b > 0 ? e : ee(e) ? e.map(Ne) : H({}, e);
}
function Xe(e, t, r, o, i, n, s, c, h) {
  var p, u, a, _, d, v, y, b = r.props, m = t.props, f = t.type;
  if (f == "svg" ? i = "http://www.w3.org/2000/svg" : f == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), n != null) {
    for (p = 0; p < n.length; p++) if ((d = n[p]) && "setAttribute" in d == !!f && (f ? d.localName == f : d.nodeType == 3)) {
      e = d, n[p] = null;
      break;
    }
  }
  if (e == null) {
    if (f == null) return document.createTextNode(m);
    e = document.createElementNS(i, f, m.is && m), c && (g.__m && g.__m(t, n), c = !1), n = null;
  }
  if (f == null) b === m || c && e.data == m || (e.data = m);
  else {
    if (n = n && I.call(e.childNodes), b = r.props || O, !c && n != null) for (b = {}, p = 0; p < e.attributes.length; p++) b[(d = e.attributes[p]).name] = d.value;
    for (p in b) if (d = b[p], p != "children") {
      if (p == "dangerouslySetInnerHTML") a = d;
      else if (!(p in m)) {
        if (p == "value" && "defaultValue" in m || p == "checked" && "defaultChecked" in m) continue;
        G(e, p, null, d, i);
      }
    }
    for (p in m) d = m[p], p == "children" ? _ = d : p == "dangerouslySetInnerHTML" ? u = d : p == "value" ? v = d : p == "checked" ? y = d : c && typeof d != "function" || b[p] === d || G(e, p, d, b[p], i);
    if (u) c || a && (u.__html == a.__html || u.__html == e.innerHTML) || (e.innerHTML = u.__html), t.__k = [];
    else if (a && (e.innerHTML = ""), je(t.type == "template" ? e.content : e, ee(_) ? _ : [_], t, r, o, f == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, n, s, n ? n[0] : r.__k && W(r, 0), c, h), n != null) for (p = n.length; p--; ) de(n[p]);
    c || (p = "value", f == "progress" && v == null ? e.removeAttribute("value") : v != null && (v !== e[p] || f == "progress" && !v || f == "option" && v != b[p]) && G(e, p, v, b[p], i), p = "checked", y != null && y != e[p] && G(e, p, y, b[p], i));
  }
  return e;
}
function _e(e, t, r) {
  try {
    if (typeof e == "function") {
      var o = typeof e.__u == "function";
      o && e.__u(), o && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (i) {
    g.__e(i, r);
  }
}
function Be(e, t, r) {
  var o, i;
  if (g.unmount && g.unmount(e), (o = e.ref) && (o.current && o.current != e.__e || _e(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount) try {
      o.componentWillUnmount();
    } catch (n) {
      g.__e(n, t);
    }
    o.base = o.__P = null;
  }
  if (o = e.__k) for (i = 0; i < o.length; i++) o[i] && Be(o[i], t, r || typeof e.type != "function");
  r || de(e.__e), e.__c = e.__ = e.__e = void 0;
}
function et(e, t, r) {
  return this.constructor(e, r);
}
function oe(e, t, r) {
  var o, i, n, s;
  t == document && (t = document.documentElement), g.__ && g.__(e, t), i = (o = !1) ? null : t.__k, n = [], s = [], ue(t, e = t.__k = D(te, null, [e]), i || O, O, t.namespaceURI, i ? null : t.firstChild ? I.call(t.childNodes) : null, n, i ? i.__e : t.firstChild, o, s), Le(n, e, s);
}
function tt(e, t, r) {
  var o, i, n, s, c = H({}, e.props);
  for (n in e.type && e.type.defaultProps && (s = e.type.defaultProps), t) n == "key" ? o = t[n] : n == "ref" ? i = t[n] : c[n] = t[n] == null && s != null ? s[n] : t[n];
  return arguments.length > 2 && (c.children = arguments.length > 3 ? I.call(arguments, 2) : r), U(e.type, c, o || e.key, i || e.ref, null);
}
I = qe.slice, g = { __e: function(e, t, r, o) {
  for (var i, n, s; t = t.__; ) if ((i = t.__c) && !i.__) try {
    if ((n = i.constructor) && n.getDerivedStateFromError != null && (i.setState(n.getDerivedStateFromError(e)), s = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, o || {}), s = i.__d), s) return i.__E = i;
  } catch (c) {
    e = c;
  }
  throw e;
} }, Te = 0, J.prototype.setState = function(e, t) {
  var r;
  r = this.__s != null && this.__s != this.state ? this.__s : this.__s = H({}, this.state), typeof e == "function" && (e = e(H({}, r), this.props)), e && H(r, e), e != null && this.__v && (t && this._sb.push(t), fe(this));
}, J.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), fe(this));
}, J.prototype.render = te, A = [], Ee = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Pe = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Q.__r = 0, Ve = /(PointerCapture)$|Capture$/i, he = 0, se = we(!1), le = we(!0);
var rt = 0;
function l(e, t, r, o, i, n) {
  t || (t = {});
  var s, c, h = t;
  if ("ref" in h) for (c in h = {}, t) c == "ref" ? s = t[c] : h[c] = t[c];
  var p = { type: e, props: h, key: r, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --rt, __i: -1, __u: 0, __source: i, __self: n };
  if (typeof e == "function" && (s = e.defaultProps)) for (c in s) h[c] === void 0 && (h[c] = s[c]);
  return g.vnode && g.vnode(p), p;
}
const q = (e) => e && e !== "false" && e !== "0" || e === "", T = (e) => e == null ? "" : e.toString(), M = (e) => typeof e == "number" ? e : e == null || e === "" ? void 0 : typeof e == "string" ? Number(e) : Number.NaN, ne = (e) => (t) => M(t) ?? e, ot = (e) => e == null || e === "" ? [] : typeof e == "string" ? (
  // non-empty string
  e.split(",")
) : (
  // boolean or number
  [e.toString()]
), Fe = (e) => (t) => {
  const r = (t == null ? void 0 : t.toString()) ?? "";
  return e.find((o) => o === r) ?? void 0;
}, P = (e, t) => {
  const r = Fe(t);
  return (o) => r(o) ?? e;
}, De = (e) => {
  const t = Fe(e);
  return (r) => t(r) ?? M(r);
}, ie = (e, t = []) => {
  const r = De([e, ...t]);
  return (o) => r(o) ?? e;
}, ye = (e) => D("slot", e), nt = (e) => {
  if (e == null)
    return "";
  if (typeof e == "boolean")
    return e ? "1" : "0";
  if (typeof e != "object")
    return e.toString();
  Array.isArray(e) && e.map((o) => o.toString().replaceAll(",", "\\,")).join(",");
  const t = Object.keys(e), r = new FormData();
  for (const o of t)
    r.append(o, e[o].toString());
  return r;
}, it = (e) => e.replace(/-(\w)/g, (t, r) => r ? r.toUpperCase() : ""), at = (e, t) => {
  var p, u;
  const r = (t == null ? void 0 : t.properties) ?? [], o = (t == null ? void 0 : t.slots) ?? [], i = ((p = t == null ? void 0 : t.adoptedStyleSheets) == null ? void 0 : p.filter((a) => !!a)) ?? [], n = Object.fromEntries(
    r.filter((a) => "attribute" in a).map((a) => [a.attribute.name, { prop: a.name, parser: a.attribute.type }])
  ), s = Object.keys(n), c = (u = r.find((a) => a.formAssociated)) == null ? void 0 : u.name;
  class h extends HTMLElement {
    constructor() {
      super();
      E(this, "_root");
      E(this, "_vdom", null);
      E(this, "_internals");
      E(this, "_props");
      E(this, "_camelCaseProps");
      E(this, "_frameRequested", !1);
      this._root = this.attachShadow({ mode: "open" }), this._root.adoptedStyleSheets = i, this._vdom = null, this._internals = c ? this.attachInternals() : null;
      const d = this;
      this._props = Object.fromEntries(
        r.map((v) => {
          const y = "initialValue" in v ? v.initialValue : this.parseAttribute(v.attribute);
          return [v.name, {
            _dirty: !1,
            _value: y,
            get value() {
              return this._value;
            },
            set value(b) {
              d.setProp(v.name, b, !0);
            }
          }];
        })
      ), this._camelCaseProps = Object.fromEntries(
        Object.entries(this._props).map((v) => [it(v[0]), v[1]])
      );
    }
    parseAttribute(d) {
      return d.type(this.getAttribute(d.name));
    }
    setProp(d, v, y) {
      this._props[d]._value !== v && (this._props[d]._value = v, y && (this._props[d]._dirty = !0), c === d && this._internals && this._internals.setFormValue(nt(v)), this.rerender());
    }
    rerender() {
      this._frameRequested || requestAnimationFrame(() => {
        this._vdom && (this._frameRequested = !1, this._vdom = tt(this._vdom, this._camelCaseProps), oe(this._vdom, this._root));
      });
    }
    connectedCallback() {
      const d = Object.fromEntries(
        o.map((y) => [y, D(ye, { name: y }, null)])
      ), v = { $el: this, ...this._camelCaseProps, ...d };
      this._vdom = D(e, v, D(ye, { name: void 0 }, null)), oe(this._vdom, this._root);
    }
    disconnectedCallback() {
      this._vdom = null, oe(null, this._root);
    }
    attributeChangedCallback(d, v, y) {
      const { parser: b, prop: m } = n[d];
      this._props[m]._dirty || this.setProp(m, b(y), !1);
    }
  }
  E(h, "observedAttributes", s), E(h, "formAssociated", !!c);
  for (const a of r)
    Object.defineProperty(h.prototype, a.name, {
      get() {
        return this._props[a.name]._value;
      },
      set(_) {
        this.setProp(a.name, _, !0);
      }
    });
  return h;
}, z = (e, t, r) => {
  const o = at(e, r);
  return customElements.define(t, o);
}, k = (...e) => {
  if (typeof window > "u")
    return null;
  const t = new CSSStyleSheet();
  return t.replaceSync(e.join("")), t;
}, ct = ({
  onClick: e,
  danger: t,
  variant: r = "default",
  icon: o,
  style: i,
  children: n
}) => /* @__PURE__ */ l(
  "button",
  {
    type: "button",
    class: `phi-button ${r} ${t ? "danger" : ""}`,
    style: i,
    onClick: e,
    children: [
      o && /* @__PURE__ */ l("span", { class: "icon", children: o }),
      n
    ]
  }
), st = "/*! destyle.css v4.0.1 | MIT License | https://github.com/nicolas-cusan/destyle.min.css */*,:before,:after{box-sizing:border-box;border-style:solid;border-width:0;min-width:0}html{line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}body{margin:0}main{display:block}p,table,blockquote,address,pre,iframe,form,figure,dl{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit;margin:0}ul,ol{margin:0;padding:0;list-style:none}dt{font-weight:700}dd{margin-left:0}hr{box-sizing:content-box;height:0;overflow:visible;border-top-width:1px;margin:0;clear:both;color:inherit}pre{font-family:monospace,monospace;font-size:inherit}address{font-style:inherit}a{background-color:transparent;text-decoration:none;color:inherit}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:inherit}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}svg,img,embed,object,iframe{vertical-align:bottom}button,input,optgroup,select,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;vertical-align:middle;color:inherit;font:inherit;background:transparent;padding:0;margin:0;border-radius:0;text-align:inherit;text-transform:inherit}button,[type=button],[type=reset],[type=submit]{cursor:pointer}button:disabled,[type=button]:disabled,[type=reset]:disabled,[type=submit]:disabled{cursor:default}:-moz-focusring{outline:auto}select:disabled{opacity:inherit}option{padding:0}fieldset{margin:0;padding:0;min-width:0}legend{padding:0}progress{vertical-align:baseline}textarea{overflow:auto}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=number]{-moz-appearance:textfield}label[for]{cursor:pointer}details{display:block}summary{display:list-item}[contenteditable]:focus{outline:auto}table{border-color:inherit;border-collapse:collapse}caption{text-align:left}td,th{vertical-align:top;padding:0}th{text-align:left;font-weight:700}:root,:host{--phi-color-bg: var(--phi-color-palette-bg);--phi-color-distant-fg: var(--phi-color-palette-bg);--phi-color-fg: var(--phi-color-palette-fg);--phi-color-border: var(--phi-color-palette-border);--phi-color-neutral-bg: var(--phi-color-palette-neutral-bg);--phi-color-neutral-hover: var(--phi-color-palette-neutral-weaker);--phi-color-neutral-default: var(--phi-color-palette-neutral-base);--phi-color-neutral-active: var(--phi-color-palette-neutral-stronger);--phi-color-danger-bg: var(--phi-color-palette-danger-bg);--phi-color-danger-hover: var(--phi-color-palette-danger-weaker);--phi-color-danger-default: var(--phi-color-palette-danger-base);--phi-color-danger-active: var(--phi-color-palette-danger-stronger);--phi-shadow-pressable-default: 0 1px var(--phi-color-palette-border);--phi-shadow-pressable-neutral-default: 0 1px var(--phi-color-palette-shadow), 0 1px var(--phi-color-palette-neutral-base);--phi-shadow-pressable-neutral-hover: 0 1px var(--phi-color-palette-shadow), 0 1px var(--phi-color-palette-neutral-weaker);--phi-shadow-pressable-danger-default: 0 1px var(--phi-color-palette-shadow), 0 1px var(--phi-color-palette-danger-base);--phi-shadow-pressable-danger-hover: 0 1px var(--phi-color-palette-shadow), 0 1px var(--phi-color-palette-danger-weaker);--phi-shadow-focus-neutral: 0 0 0 2px var(--phi-color-palette-neutral-outline);--phi-shadow-focus-danger: 0 0 0 2px var(--phi-color-palette-danger-outline);--phi-lineheight: 1.25rem;--phi-fontsize-md: 1rem;--phi-fontsize-icon-md: 1.25rem;--phi-fontsize-icon-lg: 1.875rem;--phi-fontsize-checkbox: 1.125rem;--phi-size-icon-button: 2.5rem;--phi-size-input-sm: 2rem;--phi-size-input-md: 3rem;--phi-size-range-track: .625rem;--phi-size-range-thumb-scale: 2;--phi-radius-sm: .25rem;--phi-radius-md: .625rem;--phi-spacing-padding-sm: .625rem;--phi-spacing-padding-md: 1rem;--phi-spacing-margin-sm: .25rem;--phi-spacing-margin-md: .5rem;--phi-spacing-horizontal-space: .375rem}*:focus-visible{outline:none}", $ = k(st), lt = ".phi-button{--phi-color-accent-default: var(--phi-color-neutral-default);--phi-color-accent-hover: var(--phi-color-neutral-hover);--phi-color-accent-active: var(--phi-color-neutral-active);--phi-color-accent-bg: var(--phi-color-neutral-bg);--phi-shadow-pressable-accent-default: var(--phi-shadow-pressable-neutral-default);--phi-shadow-pressable-accent-hover: var(--phi-shadow-pressable-neutral-hover);display:flex;width:100%;align-items:center;justify-content:center;font-size:var(--phi-fontsize-md);height:var(--phi-size-input-md);padding:0 var(--phi-spacing-padding-md);gap:var(--phi-spacing-horizontal-space);border-radius:var(--phi-radius-md);cursor:pointer;-webkit-user-select:none;user-select:none}.phi-button.danger{--phi-color-accent-default: var(--phi-color-danger-default);--phi-color-accent-hover: var(--phi-color-danger-hover);--phi-color-accent-active: var(--phi-color-danger-active);--phi-color-accent-bg: var(--phi-color-danger-bg);--phi-shadow-pressable-accent-default: var(--phi-shadow-pressable-danger-default);--phi-shadow-pressable-accent-hover: var(--phi-shadow-pressable-danger-hover)}.phi-button.primary{color:var(--phi-color-distant-fg);background-color:var(--phi-color-accent-default);box-shadow:var(--phi-shadow-pressable-accent-default);transform:translateY(-1px)}.phi-button.primary:hover{color:var(--phi-color-distant-fg);background-color:var(--phi-color-accent-hover);box-shadow:var(--phi-shadow-pressable-accent-hover)}.phi-button.primary:active{transform:none;box-shadow:none}.phi-button.default{color:var(--phi-color-fg);background-color:transparent;border:1px solid currentColor;box-shadow:var(--phi-shadow-pressable-default);transform:translateY(-1px)}.phi-button.default:hover{color:var(--phi-color-accent-default);box-shadow:var(--phi-shadow-pressable-accent-hover)}.phi-button.default:active{transform:none;box-shadow:none}.phi-button.dotted{color:var(--phi-color-fg);background-color:transparent;border:1px dashed currentColor}.phi-button.dotted:hover:not(:active){color:var(--phi-color-accent-default)}.phi-button.dotted:active{color:var(--phi-color-accent-active);background-color:var(--phi-color-accent-bg)}.phi-button>.icon{display:inline-block;font-size:var(--phi-fontsize-icon-md);line-height:1em}", pt = k(lt), ht = ({ danger: e, variant: t, icon: r, children: o }) => /* @__PURE__ */ l(ct, { icon: r, danger: e.value, variant: t.value, children: o }), dt = () => z(ht, "phi-button", {
  adoptedStyleSheets: [$, pt],
  slots: ["icon"],
  properties: [{
    name: "danger",
    attribute: { name: "danger", type: q }
  }, {
    name: "variant",
    attribute: { name: "variant", type: P("default", ["primary", "dotted"]) }
  }]
}), ut = ({
  onClick: e,
  danger: t,
  style: r,
  children: o
}) => /* @__PURE__ */ l(
  "button",
  {
    type: "button",
    class: `phi-icon-button ${t ? "danger" : ""}`,
    style: r,
    onClick: e,
    children: o
  }
), _t = ".phi-icon-button{--phi-color-accent-default: var(--phi-color-neutral-default);--phi-color-accent-active: var(--phi-color-neutral-active);--phi-color-accent-bg: var(--phi-color-neutral-bg);display:inline-flex;align-items:center;justify-content:center;width:var(--phi-size-icon-button);height:var(--phi-size-icon-button);font-size:var(--phi-fontsize-icon-lg);line-height:1em;border-radius:50%;-webkit-user-select:none;user-select:none;cursor:pointer;color:var(--phi-color-border);background-color:transparent}.phi-icon-button.danger{--phi-color-accent-default: var(--phi-color-danger-default);--phi-color-accent-active: var(--phi-color-danger-active);--phi-color-accent-bg: var(--phi-color-danger-bg)}.phi-icon-button:hover:not(:active){color:var(--phi-color-accent-default)}.phi-icon-button:active{color:var(--phi-color-accent-active);background-color:var(--phi-color-accent-bg)}", vt = k(_t), mt = ({ danger: e, children: t }) => /* @__PURE__ */ l(ut, { danger: e.value, children: t }), gt = () => z(mt, "phi-icon-button", {
  adoptedStyleSheets: [$, vt],
  properties: [{
    name: "danger",
    attribute: { name: "danger", type: q }
  }]
}), ft = ({
  onClick: e,
  danger: t,
  style: r,
  children: o
}) => /* @__PURE__ */ l(
  "button",
  {
    type: "button",
    class: `phi-text-button ${t ? "danger" : ""}`,
    onClick: e,
    style: r,
    children: o
  }
), bt = ".phi-text-button{--phi-color-accent-default: var(--phi-color-neutral-default);--phi-color-accent-active: var(--phi-color-neutral-active);--phi-color-accent-bg: var(--phi-color-neutral-bg);display:inline;font-size:var(--phi-fontsize-md);cursor:pointer;-webkit-user-select:none;user-select:none;color:var(--phi-color-fg);background-color:transparent;border-bottom:1px dotted currentColor}.phi-text-button.danger{--phi-color-accent-default: var(--phi-color-danger-default);--phi-color-accent-active: var(--phi-color-danger-active);--phi-color-accent-bg: var(--phi-color-danger-bg)}.phi-text-button:hover:not(:active){color:var(--phi-color-accent-default)}.phi-text-button:active{color:var(--phi-color-accent-active);background-color:var(--phi-color-accent-bg)}", wt = k(bt), yt = ({ danger: e, children: t }) => /* @__PURE__ */ l(ft, { danger: e.value, children: t }), xt = () => z(yt, "phi-text-button", {
  adoptedStyleSheets: [$, wt],
  properties: [{
    name: "danger",
    attribute: { name: "danger", type: q }
  }]
}), kt = ({ gap: e, align: t = "left", style: r, children: o }) => /* @__PURE__ */ l("div", { class: `phi-group ${e} ${t}`, style: r, children: o }), zt = ".phi-group{display:flex;width:100%;flex-wrap:wrap}.phi-group.left{justify-content:flex-start}.phi-group.right{justify-content:flex-end}.phi-group.center{justify-content:center}.phi-group.space-between{justify-content:space-between}.phi-group.md{gap:var(--phi-spacing-margin-md)}.phi-group.sm{gap:var(--phi-spacing-margin-sm)}", $t = k(zt), Ct = ({ gap: e, align: t, children: r }) => /* @__PURE__ */ l(kt, { gap: e.value, align: t.value, children: r }), St = () => z(Ct, "phi-group", {
  adoptedStyleSheets: [$, $t],
  properties: [{
    name: "gap",
    attribute: { name: "gap", type: P("md", ["sm"]) }
  }, {
    name: "align",
    attribute: { name: "align", type: P("left", ["center", "right", "space-between"]) }
  }]
}), Ht = ({ gap: e, style: t, children: r }) => /* @__PURE__ */ l("div", { class: `phi-stack ${e}`, style: t, children: r }), Mt = ".phi-stack{display:flex;width:100%;flex-direction:column}.phi-stack.md{gap:var(--phi-spacing-margin-md)}.phi-stack.sm{gap:var(--phi-spacing-margin-sm)}", Tt = k(Mt), Et = ({ gap: e, children: t }) => /* @__PURE__ */ l(Ht, { gap: e.value, children: t }), Pt = () => z(Et, "phi-stack", {
  adoptedStyleSheets: [$, Tt],
  properties: [{
    name: "gap",
    attribute: { name: "gap", type: P("md", ["sm"]) }
  }]
});
var R, w, ae, xe, X = 0, Ue = [], x = g, ke = x.__b, ze = x.__r, $e = x.diffed, Ce = x.__c, Se = x.unmount, He = x.__;
function ve(e, t) {
  x.__h && x.__h(w, e, X || t), X = 0;
  var r = w.__H || (w.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({}), r.__[e];
}
function Oe(e) {
  return X = 1, Vt(Ie, e);
}
function Vt(e, t, r) {
  var o = ve(R++, 2);
  if (o.t = e, !o.__c && (o.__ = [Ie(void 0, t), function(c) {
    var h = o.__N ? o.__N[0] : o.__[0], p = o.t(h, c);
    h !== p && (o.__N = [p, o.__[1]], o.__c.setState({}));
  }], o.__c = w, !w.__f)) {
    var i = function(c, h, p) {
      if (!o.__c.__H) return !0;
      var u = o.__c.__H.__.filter(function(_) {
        return !!_.__c;
      });
      if (u.every(function(_) {
        return !_.__N;
      })) return !n || n.call(this, c, h, p);
      var a = o.__c.props !== c;
      return u.forEach(function(_) {
        if (_.__N) {
          var d = _.__[0];
          _.__ = _.__N, _.__N = void 0, d !== _.__[0] && (a = !0);
        }
      }), n && n.call(this, c, h, p) || a;
    };
    w.__f = !0;
    var n = w.shouldComponentUpdate, s = w.componentWillUpdate;
    w.componentWillUpdate = function(c, h, p) {
      if (this.__e) {
        var u = n;
        n = void 0, i(c, h, p), n = u;
      }
      s && s.call(this, c, h, p);
    }, w.shouldComponentUpdate = i;
  }
  return o.__N || o.__;
}
function qt(e, t) {
  var r = ve(R++, 3);
  !x.__s && Re(r.__H, t) && (r.__ = e, r.u = t, w.__H.__h.push(r));
}
function j(e, t) {
  var r = ve(R++, 7);
  return Re(r.__H, t) && (r.__ = e(), r.__H = t, r.__h = e), r.__;
}
function C(e, t) {
  return X = 8, j(function() {
    return e;
  }, t);
}
function At() {
  for (var e; e = Ue.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(K), e.__H.__h.forEach(pe), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], x.__e(t, e.__v);
  }
}
x.__b = function(e) {
  w = null, ke && ke(e);
}, x.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), He && He(e, t);
}, x.__r = function(e) {
  ze && ze(e), R = 0;
  var t = (w = e.__c).__H;
  t && (ae === w ? (t.__h = [], w.__h = [], t.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.u = r.__N = void 0;
  })) : (t.__h.forEach(K), t.__h.forEach(pe), t.__h = [], R = 0)), ae = w;
}, x.diffed = function(e) {
  $e && $e(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Ue.push(t) !== 1 && xe === x.requestAnimationFrame || ((xe = x.requestAnimationFrame) || jt)(At)), t.__H.__.forEach(function(r) {
    r.u && (r.__H = r.u), r.u = void 0;
  })), ae = w = null;
}, x.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.forEach(K), r.__h = r.__h.filter(function(o) {
        return !o.__ || pe(o);
      });
    } catch (o) {
      t.some(function(i) {
        i.__h && (i.__h = []);
      }), t = [], x.__e(o, r.__v);
    }
  }), Ce && Ce(e, t);
}, x.unmount = function(e) {
  Se && Se(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.forEach(function(o) {
    try {
      K(o);
    } catch (i) {
      t = i;
    }
  }), r.__H = void 0, t && x.__e(t, r.__v));
};
var Me = typeof requestAnimationFrame == "function";
function jt(e) {
  var t, r = function() {
    clearTimeout(o), Me && cancelAnimationFrame(t), setTimeout(e);
  }, o = setTimeout(r, 35);
  Me && (t = requestAnimationFrame(r));
}
function K(e) {
  var t = w, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), w = t;
}
function pe(e) {
  var t = w;
  e.__c = e.__(), w = t;
}
function Re(e, t) {
  return !e || e.length !== t.length || t.some(function(r, o) {
    return r !== e[o];
  });
}
function Ie(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const ce = (e) => typeof e == "number" ? `${e}px` : e, Wt = ({
  gap: e,
  align: t = "left",
  cols: r = "auto-fit",
  colWidth: o,
  colMinWidth: i = "min-content",
  colMaxWidth: n = "min-content",
  style: s,
  children: c
}) => {
  const h = j(() => {
    const p = o ? ce(o) : `minmax(${ce(i)}, ${ce(n)})`;
    return `repeat(${r}, ${p})`;
  }, [r, o, i, n]);
  return /* @__PURE__ */ l(
    "div",
    {
      class: `phi-grid ${e} ${t}`,
      style: { gridTemplateColumns: h, ...s },
      children: c
    }
  );
}, Lt = ".phi-grid{display:grid;width:100%}.phi-grid.left{justify-content:flex-start}.phi-grid.right{justify-content:flex-end}.phi-grid.center{justify-content:center}.phi-grid.space-between{justify-content:space-between}.phi-grid.md{gap:var(--phi-spacing-margin-md)}.phi-grid.sm{gap:var(--phi-spacing-margin-sm)}", Nt = k(Lt), Bt = ({ gap: e, align: t, cols: r, colWidth: o, colMinWidth: i, colMaxWidth: n, children: s }) => /* @__PURE__ */ l(
  Wt,
  {
    gap: e.value,
    align: t.value,
    cols: r.value,
    colWidth: o.value,
    colMinWidth: i.value,
    colMaxWidth: n.value,
    children: s
  }
), Ft = () => z(Bt, "phi-grid", {
  adoptedStyleSheets: [$, Nt],
  properties: [{
    name: "gap",
    attribute: { name: "gap", type: P("md", ["sm"]) }
  }, {
    name: "align",
    attribute: { name: "align", type: P("left", ["center", "right", "space-between"]) }
  }, {
    name: "cols",
    attribute: {
      name: "cols",
      type: ie("auto-fit")
    }
  }, {
    name: "col-width",
    attribute: {
      name: "col-width",
      type: De(["max-content", "min-content"])
    }
  }, {
    name: "col-min-width",
    attribute: {
      name: "col-min-width",
      type: ie("max-content", ["min-content"])
    }
  }, {
    name: "col-max-width",
    attribute: {
      name: "col-max-width",
      type: ie("max-content", ["min-content"])
    }
  }]
}), Dt = ({
  gap: e,
  configuration: t,
  style: r,
  children: o
}) => {
  const [i, n] = Oe(() => document.body.clientWidth), s = j(() => t.sort((h, p) => p.width - h.width), [t]), c = j(() => (s.find((p) => p.width <= i) ?? { columns: [1] }).columns.map((p) => `${p}fr`).join(" "), [s, i]);
  return qt(() => {
    const h = () => {
      const p = document.body.clientWidth;
      i !== p && n(p);
    };
    return window.addEventListener("resize", h), () => window.removeEventListener("resize", h);
  }, [i]), /* @__PURE__ */ l(
    "div",
    {
      class: `phi-responsive-columns ${e}`,
      style: { gridTemplateColumns: c, ...r },
      children: o
    }
  );
}, Ut = ".phi-responsive-columns{display:grid;width:100%}.phi-responsive-columns.md{gap:var(--phi-spacing-margin-md)}.phi-responsive-columns.sm{gap:var(--phi-spacing-margin-sm)}", Ot = k(Ut), Rt = ({ gap: e, configuration: t, children: r }) => /* @__PURE__ */ l(
  Dt,
  {
    gap: e.value,
    configuration: t.value,
    children: r
  }
), It = () => z(Rt, "phi-responsive-columns", {
  adoptedStyleSheets: [$, Ot],
  properties: [{
    name: "gap",
    attribute: { name: "gap", type: P("md", ["sm"]) }
  }, {
    name: "configuration",
    initialValue: [{ width: 0, columns: [1] }]
  }]
}), Zt = ({
  padding: e,
  maxWidth: t = "100%",
  style: r,
  children: o
}) => /* @__PURE__ */ l(
  "div",
  {
    class: `phi-responsive-container ${e}`,
    style: { maxWidth: t, ...r },
    children: o
  }
), Yt = ".phi-responsive-container{display:block;min-height:100%;width:100%;margin:auto}.phi-responsive-container.md{padding:var(--phi-spacing-margin-md)}.phi-responsive-container.sm{padding:var(--phi-spacing-margin-sm)}", Gt = k(Yt), Jt = ({ padding: e, maxWidth: t, children: r }) => /* @__PURE__ */ l(Zt, { padding: e.value, maxWidth: t.value, children: r }), Kt = () => z(Jt, "phi-responsive-container", {
  adoptedStyleSheets: [$, Gt],
  properties: [{
    name: "padding",
    attribute: { name: "padding", type: P("md", ["sm"]) }
  }, {
    name: "max-width",
    attribute: { name: "max-width", type: M }
  }]
}), Qt = ({
  checked: e,
  onChange: t,
  style: r,
  children: o
}) => {
  const i = C((n) => {
    t == null || t(n.currentTarget.checked, n);
  }, [t]);
  return /* @__PURE__ */ l("label", { class: "phi-checkbox", style: r, children: [
    /* @__PURE__ */ l(
      "input",
      {
        type: "checkbox",
        class: "input",
        checked: e,
        onChange: i
      }
    ),
    " ",
    o
  ] });
}, Ze = '.phi-checkbox{display:inline-flex;line-height:var(--phi-fontsize-checkbox);gap:var(--phi-spacing-horizontal-space);cursor:pointer;-webkit-user-select:none;user-select:none}.phi-checkbox>.input{content:"";position:relative;width:var(--phi-fontsize-checkbox);height:var(--phi-fontsize-checkbox);border:1px solid var(--phi-color-border);border-radius:var(--phi-radius-sm);background:var(--phi-color-bg);cursor:pointer}.phi-checkbox>.input:checked:before{content:"";position:absolute;top:2px;left:5px;transform:rotate(45deg);width:4px;height:9px;border-right:1px solid var(--phi-color-fg);border-bottom:1px solid var(--phi-color-fg)}.phi-checkbox:hover{color:var(--phi-color-neutral-default)}.phi-checkbox:hover>.input{border-color:var(--phi-color-neutral-default)}.phi-checkbox:active{color:var(--phi-color-neutral-active);background:var(--phi-color-neutral-bg)}.phi-checkbox:active>.input{border-color:var(--phi-color-neutral-active)}', Xt = k(Ze), er = ({ $el: e, checked: t, children: r }) => {
  const o = C((i, n) => {
    n.stopPropagation(), t.value = i, e.dispatchEvent(new Event("change"));
  }, [e, t]);
  return /* @__PURE__ */ l(Qt, { checked: t.value, onChange: o, children: r });
}, tr = () => z(er, "phi-checkbox", {
  adoptedStyleSheets: [$, Xt],
  properties: [{
    name: "checked",
    formAssociated: !0,
    attribute: { name: "checked", type: q }
  }, {
    name: "value",
    attribute: { name: "value", type: T }
  }]
}), rr = ({
  checked: e,
  onChange: t,
  value: r,
  style: o,
  children: i
}) => {
  const n = j(() => e.findIndex((c) => c === r) !== -1, [e, r]), s = C((c) => {
    c.currentTarget.checked ? t == null || t([...e, r], c) : t == null || t(e.filter((p) => p !== r), c);
  }, [e, r, t]);
  return /* @__PURE__ */ l("label", { class: "phi-checkbox", style: o, children: [
    /* @__PURE__ */ l(
      "input",
      {
        type: "checkbox",
        class: "input",
        checked: n,
        onChange: s
      }
    ),
    " ",
    i
  ] });
}, or = k(Ze), nr = ({ $el: e, checked: t, value: r, children: o }) => {
  const i = C((n, s) => {
    s.stopPropagation(), t.value = n, e.dispatchEvent(new Event("change"));
  }, [e, t]);
  return /* @__PURE__ */ l(rr, { checked: t.value, value: r.value, onChange: i, children: o });
}, ir = () => z(nr, "phi-option", {
  adoptedStyleSheets: [$, or],
  properties: [{
    name: "checked",
    formAssociated: !0,
    attribute: { name: "checked", type: ot }
  }, {
    name: "value",
    attribute: { name: "value", type: T }
  }]
}), ar = ({
  name: e,
  checked: t,
  onChange: r,
  value: o,
  style: i,
  children: n
}) => {
  const s = j(() => t === o, [t, o]), c = C((h) => {
    h.currentTarget.checked && (r == null || r(o, h));
  }, [o, r]);
  return /* @__PURE__ */ l("label", { class: "phi-radio", style: i, children: [
    /* @__PURE__ */ l(
      "input",
      {
        type: "radio",
        class: "input",
        name: e,
        checked: s,
        onChange: c
      }
    ),
    " ",
    n
  ] });
}, cr = '.phi-radio{display:inline-flex;line-height:var(--phi-fontsize-checkbox);gap:var(--phi-spacing-horizontal-space);cursor:pointer;-webkit-user-select:none;user-select:none}.phi-radio>.input{content:"";position:relative;width:var(--phi-fontsize-checkbox);height:var(--phi-fontsize-checkbox);border:1px solid var(--phi-color-border);border-radius:calc(var(--phi-fontsize-checkbox) / 2);background:var(--phi-color-bg);cursor:pointer}.phi-radio>.input:checked:before{content:"";position:absolute;top:3px;left:3px;width:8px;height:8px;border-radius:4px;background:currentColor}.phi-radio:hover{color:var(--phi-color-neutral-default)}.phi-radio:hover>.input{border-color:var(--phi-color-neutral-default)}.phi-radio:active{color:var(--phi-color-neutral-active);background:var(--phi-color-neutral-bg)}.phi-radio:active>.input{border-color:var(--phi-color-neutral-active)}', sr = k(cr), lr = ({ $el: e, name: t, checked: r, value: o, children: i }) => {
  const n = C((s, c) => {
    c.stopPropagation(), r.value = s, e.dispatchEvent(new Event("change"));
  }, [e, r]);
  return /* @__PURE__ */ l(ar, { name: t.value, checked: r.value, value: o.value, onChange: n, children: i });
}, pr = () => z(lr, "phi-radio", {
  adoptedStyleSheets: [$, sr],
  properties: [{
    name: "name",
    attribute: { name: "name", type: T }
  }, {
    name: "checked",
    formAssociated: !0,
    attribute: { name: "checked", type: T }
  }, {
    name: "value",
    attribute: { name: "value", type: T }
  }]
}), hr = ({
  value: e,
  placeholder: t = "",
  required: r = !1,
  minlength: o,
  maxlength: i,
  size: n = "md",
  error: s,
  onInput: c,
  style: h
}) => {
  const p = C((u) => {
    c == null || c(u.currentTarget.value, u);
  }, [c]);
  return /* @__PURE__ */ l(
    "input",
    {
      type: "text",
      class: `phi-text-input ${s ? "error" : ""} ${n}`,
      placeholder: t,
      required: r,
      minlength: o,
      maxlength: i,
      value: e,
      onInput: p,
      style: h
    }
  );
}, dr = ".phi-text-input{--text-color: var(--phi-color-fg);--border-color: var(--phi-color-border);--selected-color: var(--phi-color-neutral-default);--hover-color: var(--phi-color-neutral-hover);--active-color: var(--phi-color-neutral-active);--focus-shadow: var(--phi-shadow-focus-neutral);display:block;width:100%;border-radius:var(--phi-radius-md);color:var(--text-color);background:var(--phi-color-bg);border:1px solid var(--border-color)}.phi-text-input.error,.phi-text-input:user-invalid{--text-color: var(--phi-color-danger-default);--border-color: var(--phi-color-danger-default);--selected-color: var(--phi-color-danger-default);--hover-color: var(--phi-color-danger-hover);--active-color: var(--phi-color-danger-active);--focus-shadow: var(--phi-shadow-focus-danger)}.phi-text-input.md{height:var(--phi-size-input-md);padding:0 var(--phi-spacing-padding-md)}.phi-text-input.sm{height:var(--phi-size-input-sm);padding:0 var(--phi-spacing-padding-sm)}.phi-text-input::placeholder{color:var(--phi-color-border)}.phi-text-input:focus{box-shadow:var(--focus-shadow)}.phi-text-input:hover{border-color:var(--hover-color)}.phi-text-input:focus:not(:hover){border-color:var(--selected-color)}.phi-text-input:active{border-color:var(--active-color)}", ur = k(dr), _r = ({
  $el: e,
  value: t,
  placeholder: r,
  required: o,
  minlength: i,
  maxlength: n,
  size: s,
  error: c
}) => {
  const h = C((p, u) => {
    u.stopPropagation(), t.value = p, e.dispatchEvent(new Event("input"));
  }, [e, t]);
  return /* @__PURE__ */ l(
    hr,
    {
      value: t.value,
      placeholder: r.value,
      required: o.value,
      minlength: i.value,
      maxlength: n.value,
      size: s.value,
      error: c.value,
      onInput: h
    }
  );
}, vr = () => z(_r, "phi-text-input", {
  adoptedStyleSheets: [$, ur],
  properties: [{
    name: "value",
    formAssociated: !0,
    attribute: { name: "value", type: T }
  }, {
    name: "placeholder",
    attribute: { name: "placeholder", type: T }
  }, {
    name: "required",
    attribute: { name: "required", type: q }
  }, {
    name: "minlength",
    attribute: { name: "minlength", type: M }
  }, {
    name: "maxlength",
    attribute: { name: "maxlength", type: M }
  }, {
    name: "size",
    attribute: { name: "size", type: P("md", ["sm"]) }
  }, {
    name: "error",
    attribute: { name: "error", type: q }
  }]
}), mr = ({
  value: e,
  placeholder: t = "",
  required: r = !1,
  min: o,
  max: i,
  step: n,
  error: s,
  onInput: c,
  style: h
}) => {
  const [p, u] = Oe(e == null ? "" : e.toString()), a = C((_) => {
    const d = _.currentTarget.value;
    u(d), c == null || c(d === "" ? void 0 : Number(d), _);
  }, [c]);
  return /* @__PURE__ */ l(
    "input",
    {
      type: "number",
      class: `phi-number-input ${s ? "error" : ""}`,
      placeholder: t,
      value: p,
      required: r,
      max: i,
      min: o,
      step: n,
      onInput: a,
      style: h
    }
  );
}, gr = ".phi-number-input{--text-color: var(--phi-color-fg);--border-color: var(--phi-color-border);--selected-color: var(--phi-color-neutral-default);--hover-color: var(--phi-color-neutral-hover);--active-color: var(--phi-color-neutral-active);--focus-shadow: var(--phi-shadow-focus-neutral);display:block;width:100%;height:var(--phi-size-input-md);padding:0 var(--phi-spacing-padding-md);border-radius:var(--phi-radius-md);color:var(--text-color);background:var(--phi-color-bg);border:1px solid var(--border-color)}.phi-number-input.error,.phi-number-input:user-invalid{--text-color: var(--phi-color-danger-default);--border-color: var(--phi-color-danger-default);--selected-color: var(--phi-color-danger-default);--hover-color: var(--phi-color-danger-hover);--active-color: var(--phi-color-danger-active);--focus-shadow: var(--phi-shadow-focus-danger)}.phi-number-input::placeholder{color:var(--phi-color-border)}.phi-number-input:focus{box-shadow:var(--focus-shadow)}.phi-number-input:hover{border-color:var(--hover-color)}.phi-number-input:focus:not(:hover){border-color:var(--selected-color)}.phi-number-input:active{border-color:var(--active-color)}", fr = k(gr), br = ({ $el: e, value: t, required: r, min: o, max: i, step: n, placeholder: s, error: c }) => {
  const h = C((p, u) => {
    u.stopPropagation(), t.value = p, e.dispatchEvent(new Event("input"));
  }, [e, t]);
  return /* @__PURE__ */ l(
    mr,
    {
      placeholder: s.value,
      value: t.value,
      required: r.value,
      min: o.value,
      max: i.value,
      step: n.value,
      error: c.value,
      onInput: h
    }
  );
}, wr = () => z(br, "phi-number-input", {
  adoptedStyleSheets: [$, fr],
  properties: [{
    name: "value",
    formAssociated: !0,
    attribute: { name: "value", type: M }
  }, {
    name: "required",
    attribute: { name: "required", type: q }
  }, {
    name: "min",
    attribute: { name: "min", type: M }
  }, {
    name: "max",
    attribute: { name: "max", type: M }
  }, {
    name: "step",
    attribute: { name: "step", type: M }
  }, {
    name: "placeholder",
    attribute: { name: "placeholder", type: T }
  }, {
    name: "error",
    attribute: { name: "error", type: q }
  }]
}), yr = ({
  value: e,
  min: t,
  max: r,
  step: o,
  onInput: i,
  style: n
}) => {
  const s = C((h) => {
    const p = h.currentTarget.value;
    i == null || i(Number(p), h);
  }, [i]), c = j(() => {
    const h = (e - t) / (r - t) * 100;
    return `linear-gradient(to right,  var(--phi-color-border) ${h}%, var(--phi-color-bg) ${h}%)`;
  }, [e, t, r]);
  return /* @__PURE__ */ l(
    "input",
    {
      type: "range",
      class: "phi-slider",
      value: e,
      max: r,
      min: t,
      step: o,
      style: { background: c, ...n },
      onInput: s
    }
  );
}, xr = ".phi-slider{width:100%;height:var(--phi-size-range-track);background:var(--phi-color-bg);border-radius:calc(var(--phi-size-range-track) / 2)}.phi-slider::-webkit-slider-runnable-track{height:var(--phi-size-range-track);border-radius:calc(var(--phi-size-range-track) / 2);border:1px solid var(--phi-color-border)}.phi-slider::-webkit-slider-thumb{-webkit-appearance:none;height:var(--phi-size-range-track);width:var(--phi-size-range-track);margin-top:-1px;transform:scale(var(--phi-size-range-thumb-scale));border:.5px solid var(--phi-color-border);border-radius:calc(var(--phi-size-range-track) / 2);background:var(--phi-color-bg);cursor:pointer}.phi-slider::-webkit-slider-thumb:hover{border-color:var(--phi-color-neutral-default)}.phi-slider::-webkit-slider-thumb:active{border-color:var(--phi-color-neutral-active);box-shadow:var(--phi-shadow-focus-neutral);transform:translateY(-1px) scale(var(--phi-size-range-thumb-scale))}.phi-slider::-moz-range-track{height:var(--phi-size-range-track);border-radius:calc(var(--phi-size-range-track) / 2);border:1px solid var(--phi-color-border)}.phi-slider::-moz-range-thumb{-webkit-appearance:none;height:var(--phi-size-range-track);width:var(--phi-size-range-track);transform:scale(var(--phi-size-range-thumb-scale));border:.5px solid var(--phi-color-border);border-radius:calc(var(--phi-size-range-track) / 2);background:var(--phi-color-bg);cursor:pointer}.phi-slider::-moz-range-thumb:hover{border-color:var(--phi-color-neutral-default)}.phi-slider::-moz-range-thumb:active{border-color:var(--phi-color-neutral-active);box-shadow:var(--phi-shadow-focus-neutral);transform:translateY(-1px) scale(var(--phi-size-range-thumb-scale))}", kr = k(xr), zr = ({ $el: e, value: t, min: r, max: o, step: i }) => {
  const n = C((s, c) => {
    c.stopPropagation(), t.value = s, e.dispatchEvent(new Event("input"));
  }, [e, t]);
  return /* @__PURE__ */ l(
    yr,
    {
      value: t.value ?? r.value,
      min: r.value,
      max: o.value,
      step: i.value,
      onInput: n
    }
  );
}, $r = () => z(zr, "phi-slider", {
  adoptedStyleSheets: [$, kr],
  properties: [{
    name: "value",
    formAssociated: !0,
    attribute: { name: "value", type: M }
  }, {
    name: "min",
    attribute: { name: "min", type: ne(0) }
  }, {
    name: "max",
    attribute: { name: "max", type: ne(100) }
  }, {
    name: "step",
    attribute: { name: "step", type: ne(1) }
  }]
}), Cr = () => /* @__PURE__ */ l("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ l("path", { d: "M0 0h24v24H0z", fill: "none" }),
  /* @__PURE__ */ l("path", { d: "M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z" })
] }), Sr = () => /* @__PURE__ */ l("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ l("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ l("path", { d: "M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z" })
] }), Hr = () => /* @__PURE__ */ l("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ l("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ l("path", { d: "M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z" })
] }), Mr = () => /* @__PURE__ */ l("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ l("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ l("path", { d: "M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z" })
] }), Tr = () => /* @__PURE__ */ l("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ l("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ l("path", { d: "M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z" })
] }), Er = () => /* @__PURE__ */ l("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 -960 960 960", width: "24px", children: /* @__PURE__ */ l("path", { d: "M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" }) }), Pr = () => /* @__PURE__ */ l("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 -960 960 960", width: "24px", children: /* @__PURE__ */ l("path", { d: "M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" }) }), Vr = () => /* @__PURE__ */ l("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ l("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ l("path", { d: "M19 13H5v-2h14v2z" })
] }), qr = () => /* @__PURE__ */ l("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ l("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ l("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" })
] }), Ar = () => /* @__PURE__ */ l("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", "enable-background": "new 0 0 24 24", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ l("g", { children: /* @__PURE__ */ l("rect", { fill: "none", height: "24", width: "24", x: "0" }) }),
  /* @__PURE__ */ l("g", { children: /* @__PURE__ */ l("g", { children: [
    /* @__PURE__ */ l("polygon", { points: "20,7 20.94,4.94 23,4 20.94,3.06 20,1 19.06,3.06 17,4 19.06,4.94" }),
    /* @__PURE__ */ l("polygon", { points: "8.5,7 9.44,4.94 11.5,4 9.44,3.06 8.5,1 7.56,3.06 5.5,4 7.56,4.94" }),
    /* @__PURE__ */ l("polygon", { points: "20,12.5 19.06,14.56 17,15.5 19.06,16.44 20,18.5 20.94,16.44 23,15.5 20.94,14.56" }),
    /* @__PURE__ */ l("path", { d: "M17.71,9.12l-2.83-2.83C14.68,6.1,14.43,6,14.17,6c-0.26,0-0.51,0.1-0.71,0.29L2.29,17.46c-0.39,0.39-0.39,1.02,0,1.41 l2.83,2.83C5.32,21.9,5.57,22,5.83,22s0.51-0.1,0.71-0.29l11.17-11.17C18.1,10.15,18.1,9.51,17.71,9.12z M14.17,8.42l1.41,1.41 L14.41,11L13,9.59L14.17,8.42z M5.83,19.59l-1.41-1.41L11.59,11L13,12.41L5.83,19.59z" })
  ] }) })
] }), jr = () => /* @__PURE__ */ l("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ l("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ l("path", { d: "M10.25 13c0 .69-.56 1.25-1.25 1.25S7.75 13.69 7.75 13s.56-1.25 1.25-1.25 1.25.56 1.25 1.25zM15 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm7 .25c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zM10.66 4.12C12.06 6.44 14.6 8 17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12zM4.42 9.47c1.71-.97 3.03-2.55 3.66-4.44C6.37 6 5.05 7.58 4.42 9.47zM20 12c0-.78-.12-1.53-.33-2.24-.7.15-1.42.24-2.17.24-3.13 0-5.92-1.44-7.76-3.69C8.69 8.87 6.6 10.88 4 11.86c.01.04 0 .09 0 .14 0 4.41 3.59 8 8 8s8-3.59 8-8z" })
] }), Wr = () => /* @__PURE__ */ l("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ l("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ l("path", { d: "M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" })
] }), Lr = () => /* @__PURE__ */ l("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ l("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ l("path", { d: "M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 9.67l1.69 2.26 2.48-3.1L19 15H9zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" })
] }), Nr = () => /* @__PURE__ */ l("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ l("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ l("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" })
] }), Br = () => /* @__PURE__ */ l("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ l("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ l("path", { d: "M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z" })
] }), Fr = () => /* @__PURE__ */ l("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 -960 960 960", width: "24px", children: /* @__PURE__ */ l("path", { d: "M320-200h280v-400h-80q-28 0-46 14t-43 41q-20 22-46.5 45.5T320-465v265Zm-80 80v-346q-52-14-86-56t-34-98q0-53 30.5-94t78.5-57q23-48 68.5-78T400-879q35 0 65.5 12t55.5 32q10-2 19-3.5t20-1.5q66 0 113 47t47 113q0 22-5.5 42T698-600h62q33 0 56.5 23.5T840-520v240q0 33-23.5 56.5T760-200h-80v80H240Zm-40-500q0 33 23.5 56.5T280-540q32 0 54.5-21t46.5-47q25-27 56.5-49.5T520-680h120q0-33-23.5-56.5T560-760q-25 0-42 6.5l-17 6.5-31-26q-11-9-28.5-17.5T400-799q-32 0-58.5 17T301-736l-14 30-32 11q-25 8-40 28.5T200-620Zm480 340h80v-240h-80v240Zm-360 80h280-280Z" }) }), Dr = () => /* @__PURE__ */ l("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ l("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ l("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
] }), Ur = {
  beer: Fr,
  text: Cr,
  "align-center": Sr,
  "align-justify": Hr,
  "align-left": Mr,
  "align-right": Tr,
  back: Er,
  next: Pr,
  decrement: Vr,
  delete: qr,
  effect: Ar,
  emoji: jr,
  file: Wr,
  image: Lr,
  increment: Nr,
  save: Br,
  okay: Dr
}, Or = ({ icon: e }) => {
  const t = Ur[e];
  return t ? /* @__PURE__ */ l(t, {}) : null;
}, Rr = ".phi-icon{display:inline;width:auto;height:1em;vertical-align:-.11em;fill:currentColor}", Ir = k(Rr), Zr = ({ icon: e }) => /* @__PURE__ */ l(Or, { icon: e.value }), Yr = () => z(Zr, "phi-icon", {
  adoptedStyleSheets: [$, Ir],
  properties: [{
    name: "icon",
    attribute: { name: "icon", type: T }
  }]
}), Gr = ({ color: e }) => /* @__PURE__ */ l("span", { class: "phi-color-swatch", style: { background: e } }), Jr = ".phi-color-swatch{display:inline-block;width:calc(1.6 * var(--phi-fontsize-icon-md));height:var(--phi-fontsize-icon-md);border:1px solid var(--phi-color-border);border-radius:var(--phi-radius-sm)}", Kr = k(Jr), Qr = ({ color: e }) => /* @__PURE__ */ l(Gr, { color: e.value }), Xr = () => z(Qr, "phi-color-swatch", {
  adoptedStyleSheets: [$, Kr],
  properties: [{
    name: "color",
    attribute: { name: "color", type: T }
  }]
}), to = () => {
  typeof window < "u" && (dt(), gt(), xt(), St(), Pt(), Ft(), It(), Kt(), tr(), ir(), pr(), vr(), wr(), $r(), Yr(), Xr());
};
export {
  to as default
};
//# sourceMappingURL=custom-elements.js.map
