var Ne = Object.defineProperty;
var De = (t, e, r) => e in t ? Ne(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var $ = (t, e, r) => De(t, typeof e != "symbol" ? e + "" : e, r);
var M, f, we, P, ce, xe, Se, $e, te, K, Q, D = {}, Pe = [], Me = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, W = Array.isArray;
function x(t, e) {
  for (var r in e) t[r] = e[r];
  return t;
}
function re(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function F(t, e, r) {
  var n, a, o, _ = {};
  for (o in e) o == "key" ? n = e[o] : o == "ref" ? a = e[o] : _[o] = e[o];
  if (arguments.length > 2 && (_.children = arguments.length > 3 ? M.call(arguments, 2) : r), typeof t == "function" && t.defaultProps != null) for (o in t.defaultProps) _[o] == null && (_[o] = t.defaultProps[o]);
  return N(t, _, n, a, null);
}
function N(t, e, r, n, a) {
  var o = { type: t, props: e, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: a ?? ++we, __i: -1, __u: 0 };
  return a == null && f.vnode != null && f.vnode(o), o;
}
function O(t) {
  return t.children;
}
function B(t, e) {
  this.props = t, this.context = e;
}
function H(t, e) {
  if (e == null) return t.__ ? H(t.__, t.__i + 1) : null;
  for (var r; e < t.__k.length; e++) if ((r = t.__k[e]) != null && r.__e != null) return r.__e;
  return typeof t.type == "function" ? H(t) : null;
}
function Ee(t) {
  var e, r;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++) if ((r = t.__k[e]) != null && r.__e != null) {
      t.__e = t.__c.base = r.__e;
      break;
    }
    return Ee(t);
  }
}
function se(t) {
  (!t.__d && (t.__d = !0) && P.push(t) && !V.__r++ || ce != f.debounceRendering) && ((ce = f.debounceRendering) || xe)(V);
}
function V() {
  for (var t, e, r, n, a, o, _, l = 1; P.length; ) P.length > l && P.sort(Se), t = P.shift(), l = P.length, t.__d && (r = void 0, a = (n = (e = t).__v).__e, o = [], _ = [], e.__P && ((r = x({}, n)).__v = n.__v + 1, f.vnode && f.vnode(r), ne(e.__P, r, n, e.__n, e.__P.namespaceURI, 32 & n.__u ? [a] : null, o, a ?? H(n), !!(32 & n.__u), _), r.__v = n.__v, r.__.__k[r.__i] = r, ze(o, r, _), r.__e != a && Ee(r)));
  V.__r = 0;
}
function He(t, e, r, n, a, o, _, l, u, c, p) {
  var i, h, s, d, y, m, v = n && n.__k || Pe, b = e.length;
  for (u = je(r, e, v, u, b), i = 0; i < b; i++) (s = r.__k[i]) != null && (h = s.__i == -1 ? D : v[s.__i] || D, s.__i = i, m = ne(t, s, h, a, o, _, l, u, c, p), d = s.__e, s.ref && h.ref != s.ref && (h.ref && oe(h.ref, null, s), p.push(s.ref, s.__c || d, s)), y == null && d != null && (y = d), 4 & s.__u || h.__k === s.__k ? u = Ae(s, u, t) : typeof s.type == "function" && m !== void 0 ? u = m : d && (u = d.nextSibling), s.__u &= -7);
  return r.__e = y, u;
}
function je(t, e, r, n, a) {
  var o, _, l, u, c, p = r.length, i = p, h = 0;
  for (t.__k = new Array(a), o = 0; o < a; o++) (_ = e[o]) != null && typeof _ != "boolean" && typeof _ != "function" ? (u = o + h, (_ = t.__k[o] = typeof _ == "string" || typeof _ == "number" || typeof _ == "bigint" || _.constructor == String ? N(null, _, null, null, null) : W(_) ? N(O, { children: _ }, null, null, null) : _.constructor == null && _.__b > 0 ? N(_.type, _.props, _.key, _.ref ? _.ref : null, _.__v) : _).__ = t, _.__b = t.__b + 1, l = null, (c = _.__i = Le(_, r, u, i)) != -1 && (i--, (l = r[c]) && (l.__u |= 2)), l == null || l.__v == null ? (c == -1 && (a > p ? h-- : a < p && h++), typeof _.type != "function" && (_.__u |= 4)) : c != u && (c == u - 1 ? h-- : c == u + 1 ? h++ : (c > u ? h-- : h++, _.__u |= 4))) : t.__k[o] = null;
  if (i) for (o = 0; o < p; o++) (l = r[o]) != null && (2 & l.__u) == 0 && (l.__e == n && (n = H(l)), Te(l, l));
  return n;
}
function Ae(t, e, r) {
  var n, a;
  if (typeof t.type == "function") {
    for (n = t.__k, a = 0; n && a < n.length; a++) n[a] && (n[a].__ = t, e = Ae(n[a], e, r));
    return e;
  }
  t.__e != e && (e && t.type && !r.contains(e) && (e = H(t)), r.insertBefore(t.__e, e || null), e = t.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function Le(t, e, r, n) {
  var a, o, _ = t.key, l = t.type, u = e[r];
  if (u === null && t.key == null || u && _ == u.key && l == u.type && (2 & u.__u) == 0) return r;
  if (n > (u != null && (2 & u.__u) == 0 ? 1 : 0)) for (a = r - 1, o = r + 1; a >= 0 || o < e.length; ) {
    if (a >= 0) {
      if ((u = e[a]) && (2 & u.__u) == 0 && _ == u.key && l == u.type) return a;
      a--;
    }
    if (o < e.length) {
      if ((u = e[o]) && (2 & u.__u) == 0 && _ == u.key && l == u.type) return o;
      o++;
    }
  }
  return -1;
}
function ue(t, e, r) {
  e[0] == "-" ? t.setProperty(e, r ?? "") : t[e] = r == null ? "" : typeof r != "number" || Me.test(e) ? r : r + "px";
}
function q(t, e, r, n, a) {
  var o, _;
  e: if (e == "style") if (typeof r == "string") t.style.cssText = r;
  else {
    if (typeof n == "string" && (t.style.cssText = n = ""), n) for (e in n) r && e in r || ue(t.style, e, "");
    if (r) for (e in r) n && r[e] == n[e] || ue(t.style, e, r[e]);
  }
  else if (e[0] == "o" && e[1] == "n") o = e != (e = e.replace($e, "$1")), _ = e.toLowerCase(), e = _ in t || e == "onFocusOut" || e == "onFocusIn" ? _.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = r, r ? n ? r.u = n.u : (r.u = te, t.addEventListener(e, o ? Q : K, o)) : t.removeEventListener(e, o ? Q : K, o);
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
function pe(t) {
  return function(e) {
    if (this.l) {
      var r = this.l[e.type + t];
      if (e.t == null) e.t = te++;
      else if (e.t < r.u) return;
      return r(f.event ? f.event(e) : e);
    }
  };
}
function ne(t, e, r, n, a, o, _, l, u, c) {
  var p, i, h, s, d, y, m, v, b, A, S, L, z, le, U, C, Y, w = e.type;
  if (e.constructor != null) return null;
  128 & r.__u && (u = !!(32 & r.__u), o = [l = e.__e = r.__e]), (p = f.__b) && p(e);
  e: if (typeof w == "function") try {
    if (v = e.props, b = "prototype" in w && w.prototype.render, A = (p = w.contextType) && n[p.__c], S = p ? A ? A.props.value : p.__ : n, r.__c ? m = (i = e.__c = r.__c).__ = i.__E : (b ? e.__c = i = new w(v, S) : (e.__c = i = new B(v, S), i.constructor = w, i.render = qe), A && A.sub(i), i.props = v, i.state || (i.state = {}), i.context = S, i.__n = n, h = i.__d = !0, i.__h = [], i._sb = []), b && i.__s == null && (i.__s = i.state), b && w.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = x({}, i.__s)), x(i.__s, w.getDerivedStateFromProps(v, i.__s))), s = i.props, d = i.state, i.__v = e, h) b && w.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), b && i.componentDidMount != null && i.__h.push(i.componentDidMount);
    else {
      if (b && w.getDerivedStateFromProps == null && v !== s && i.componentWillReceiveProps != null && i.componentWillReceiveProps(v, S), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(v, i.__s, S) === !1 || e.__v == r.__v) {
        for (e.__v != r.__v && (i.props = v, i.state = i.__s, i.__d = !1), e.__e = r.__e, e.__k = r.__k, e.__k.some(function(T) {
          T && (T.__ = e);
        }), L = 0; L < i._sb.length; L++) i.__h.push(i._sb[L]);
        i._sb = [], i.__h.length && _.push(i);
        break e;
      }
      i.componentWillUpdate != null && i.componentWillUpdate(v, i.__s, S), b && i.componentDidUpdate != null && i.__h.push(function() {
        i.componentDidUpdate(s, d, y);
      });
    }
    if (i.context = S, i.props = v, i.__P = t, i.__e = !1, z = f.__r, le = 0, b) {
      for (i.state = i.__s, i.__d = !1, z && z(e), p = i.render(i.props, i.state, i.context), U = 0; U < i._sb.length; U++) i.__h.push(i._sb[U]);
      i._sb = [];
    } else do
      i.__d = !1, z && z(e), p = i.render(i.props, i.state, i.context), i.state = i.__s;
    while (i.__d && ++le < 25);
    i.state = i.__s, i.getChildContext != null && (n = x(x({}, n), i.getChildContext())), b && !h && i.getSnapshotBeforeUpdate != null && (y = i.getSnapshotBeforeUpdate(s, d)), C = p, p != null && p.type === O && p.key == null && (C = Ce(p.props.children)), l = He(t, W(C) ? C : [C], e, r, n, a, o, _, l, u, c), i.base = e.__e, e.__u &= -161, i.__h.length && _.push(i), m && (i.__E = i.__ = null);
  } catch (T) {
    if (e.__v = null, u || o != null) if (T.then) {
      for (e.__u |= u ? 160 : 128; l && l.nodeType == 8 && l.nextSibling; ) l = l.nextSibling;
      o[o.indexOf(l)] = null, e.__e = l;
    } else for (Y = o.length; Y--; ) re(o[Y]);
    else e.__e = r.__e, e.__k = r.__k;
    f.__e(T, e, r);
  }
  else o == null && e.__v == r.__v ? (e.__k = r.__k, e.__e = r.__e) : l = e.__e = Ue(r.__e, e, r, n, a, o, _, u, c);
  return (p = f.diffed) && p(e), 128 & e.__u ? void 0 : l;
}
function ze(t, e, r) {
  for (var n = 0; n < r.length; n++) oe(r[n], r[++n], r[++n]);
  f.__c && f.__c(e, t), t.some(function(a) {
    try {
      t = a.__h, a.__h = [], t.some(function(o) {
        o.call(a);
      });
    } catch (o) {
      f.__e(o, a.__v);
    }
  });
}
function Ce(t) {
  return typeof t != "object" || t == null || t.__b && t.__b > 0 ? t : W(t) ? t.map(Ce) : x({}, t);
}
function Ue(t, e, r, n, a, o, _, l, u) {
  var c, p, i, h, s, d, y, m = r.props, v = e.props, b = e.type;
  if (b == "svg" ? a = "http://www.w3.org/2000/svg" : b == "math" ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"), o != null) {
    for (c = 0; c < o.length; c++) if ((s = o[c]) && "setAttribute" in s == !!b && (b ? s.localName == b : s.nodeType == 3)) {
      t = s, o[c] = null;
      break;
    }
  }
  if (t == null) {
    if (b == null) return document.createTextNode(v);
    t = document.createElementNS(a, b, v.is && v), l && (f.__m && f.__m(e, o), l = !1), o = null;
  }
  if (b == null) m === v || l && t.data == v || (t.data = v);
  else {
    if (o = o && M.call(t.childNodes), m = r.props || D, !l && o != null) for (m = {}, c = 0; c < t.attributes.length; c++) m[(s = t.attributes[c]).name] = s.value;
    for (c in m) if (s = m[c], c != "children") {
      if (c == "dangerouslySetInnerHTML") i = s;
      else if (!(c in v)) {
        if (c == "value" && "defaultValue" in v || c == "checked" && "defaultChecked" in v) continue;
        q(t, c, null, s, a);
      }
    }
    for (c in v) s = v[c], c == "children" ? h = s : c == "dangerouslySetInnerHTML" ? p = s : c == "value" ? d = s : c == "checked" ? y = s : l && typeof s != "function" || m[c] === s || q(t, c, s, m[c], a);
    if (p) l || i && (p.__html == i.__html || p.__html == t.innerHTML) || (t.innerHTML = p.__html), e.__k = [];
    else if (i && (t.innerHTML = ""), He(e.type == "template" ? t.content : t, W(h) ? h : [h], e, r, n, b == "foreignObject" ? "http://www.w3.org/1999/xhtml" : a, o, _, o ? o[0] : r.__k && H(r, 0), l, u), o != null) for (c = o.length; c--; ) re(o[c]);
    l || (c = "value", b == "progress" && d == null ? t.removeAttribute("value") : d != null && (d !== t[c] || b == "progress" && !d || b == "option" && d != m[c]) && q(t, c, d, m[c], a), c = "checked", y != null && y != t[c] && q(t, c, y, m[c], a));
  }
  return t;
}
function oe(t, e, r) {
  try {
    if (typeof t == "function") {
      var n = typeof t.__u == "function";
      n && t.__u(), n && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (a) {
    f.__e(a, r);
  }
}
function Te(t, e, r) {
  var n, a;
  if (f.unmount && f.unmount(t), (n = t.ref) && (n.current && n.current != t.__e || oe(n, null, e)), (n = t.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (o) {
      f.__e(o, e);
    }
    n.base = n.__P = null;
  }
  if (n = t.__k) for (a = 0; a < n.length; a++) n[a] && Te(n[a], e, r || typeof t.type != "function");
  r || re(t.__e), t.__c = t.__ = t.__e = void 0;
}
function qe(t, e, r) {
  return this.constructor(t, r);
}
function G(t, e, r) {
  var n, a, o, _;
  e == document && (e = document.documentElement), f.__ && f.__(t, e), a = (n = !1) ? null : e.__k, o = [], _ = [], ne(e, t = e.__k = F(O, null, [t]), a || D, D, e.namespaceURI, a ? null : e.firstChild ? M.call(e.childNodes) : null, o, a ? a.__e : e.firstChild, n, _), ze(o, t, _);
}
function Be(t, e, r) {
  var n, a, o, _, l = x({}, t.props);
  for (o in t.type && t.type.defaultProps && (_ = t.type.defaultProps), e) o == "key" ? n = e[o] : o == "ref" ? a = e[o] : l[o] = e[o] == null && _ != null ? _[o] : e[o];
  return arguments.length > 2 && (l.children = arguments.length > 3 ? M.call(arguments, 2) : r), N(t.type, l, n || t.key, a || t.ref, null);
}
M = Pe.slice, f = { __e: function(t, e, r, n) {
  for (var a, o, _; e = e.__; ) if ((a = e.__c) && !a.__) try {
    if ((o = a.constructor) && o.getDerivedStateFromError != null && (a.setState(o.getDerivedStateFromError(t)), _ = a.__d), a.componentDidCatch != null && (a.componentDidCatch(t, n || {}), _ = a.__d), _) return a.__E = a;
  } catch (l) {
    t = l;
  }
  throw t;
} }, we = 0, B.prototype.setState = function(t, e) {
  var r;
  r = this.__s != null && this.__s != this.state ? this.__s : this.__s = x({}, this.state), typeof t == "function" && (t = t(x({}, r), this.props)), t && x(r, t), t != null && this.__v && (e && this._sb.push(e), se(this));
}, B.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), se(this));
}, B.prototype.render = O, P = [], xe = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Se = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, V.__r = 0, $e = /(PointerCapture)$|Capture$/i, te = 0, K = pe(!1), Q = pe(!0);
var Ie = 0;
function E(t, e, r, n, a, o) {
  e || (e = {});
  var _, l, u = e;
  if ("ref" in u) for (l in u = {}, e) l == "ref" ? _ = e[l] : u[l] = e[l];
  var c = { type: t, props: u, key: r, ref: _, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Ie, __i: -1, __u: 0, __source: a, __self: o };
  if (typeof t == "function" && (_ = t.defaultProps)) for (l in _) u[l] === void 0 && (u[l] = _[l]);
  return f.vnode && f.vnode(c), c;
}
var X, k, J, he, Z = 0, Fe = [], g = f, de = g.__b, fe = g.__r, ve = g.diffed, be = g.__c, me = g.unmount, ge = g.__;
function Ve(t, e) {
  g.__h && g.__h(k, t, Z || e), Z = 0;
  var r = k.__H || (k.__H = { __: [], __h: [] });
  return t >= r.__.length && r.__.push({}), r.__[t];
}
function We(t, e) {
  var r = Ve(X++, 7);
  return Ye(r.__H, e) && (r.__ = t(), r.__H = e, r.__h = t), r.__;
}
function j(t, e) {
  return Z = 8, We(function() {
    return t;
  }, e);
}
function Oe() {
  for (var t; t = Fe.shift(); ) if (t.__P && t.__H) try {
    t.__H.__h.forEach(I), t.__H.__h.forEach(ee), t.__H.__h = [];
  } catch (e) {
    t.__H.__h = [], g.__e(e, t.__v);
  }
}
g.__b = function(t) {
  k = null, de && de(t);
}, g.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), ge && ge(t, e);
}, g.__r = function(t) {
  fe && fe(t), X = 0;
  var e = (k = t.__c).__H;
  e && (J === k ? (e.__h = [], k.__h = [], e.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.u = r.__N = void 0;
  })) : (e.__h.forEach(I), e.__h.forEach(ee), e.__h = [], X = 0)), J = k;
}, g.diffed = function(t) {
  ve && ve(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Fe.push(e) !== 1 && he === g.requestAnimationFrame || ((he = g.requestAnimationFrame) || Re)(Oe)), e.__H.__.forEach(function(r) {
    r.u && (r.__H = r.u), r.u = void 0;
  })), J = k = null;
}, g.__c = function(t, e) {
  e.some(function(r) {
    try {
      r.__h.forEach(I), r.__h = r.__h.filter(function(n) {
        return !n.__ || ee(n);
      });
    } catch (n) {
      e.some(function(a) {
        a.__h && (a.__h = []);
      }), e = [], g.__e(n, r.__v);
    }
  }), be && be(t, e);
}, g.unmount = function(t) {
  me && me(t);
  var e, r = t.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      I(n);
    } catch (a) {
      e = a;
    }
  }), r.__H = void 0, e && g.__e(e, r.__v));
};
var ye = typeof requestAnimationFrame == "function";
function Re(t) {
  var e, r = function() {
    clearTimeout(n), ye && cancelAnimationFrame(e), setTimeout(t);
  }, n = setTimeout(r, 35);
  ye && (e = requestAnimationFrame(r));
}
function I(t) {
  var e = k, r = t.__c;
  typeof r == "function" && (t.__c = void 0, r()), k = e;
}
function ee(t) {
  var e = k;
  t.__c = t.__(), k = e;
}
function Ye(t, e) {
  return !t || t.length !== e.length || e.some(function(r, n) {
    return r !== t[n];
  });
}
const ke = (t) => F("slot", t), Ge = (t) => {
  if (t == null)
    return "";
  if (typeof t != "object")
    return t.toString();
  Array.isArray(t) && t.map((n) => n.toString().replaceAll(",", "\\,")).join(",");
  const e = Object.keys(t), r = new FormData();
  return e.forEach((n) => {
    r.append(n, t[n].toString());
  }), r;
}, Je = (t, e) => {
  var c;
  const r = (e == null ? void 0 : e.properties) ?? [], n = (e == null ? void 0 : e.slots) ?? [], a = (e == null ? void 0 : e.adoptedStyleSheets) ?? [], o = Object.fromEntries(
    r.filter((p) => "attribute" in p).map((p) => [p.attribute.name, { prop: p.name, parser: p.attribute.type }])
  ), _ = Object.keys(o), l = (c = r.find((p) => p.formAssociated)) == null ? void 0 : c.name;
  class u extends HTMLElement {
    constructor() {
      super();
      $(this, "_root");
      $(this, "_vdom", null);
      $(this, "_internals");
      $(this, "_props");
      $(this, "_frameRequested", !1);
      this._root = this.attachShadow({ mode: "open" }), this._root.adoptedStyleSheets = a, this._vdom = null, this._internals = l ? this.attachInternals() : null;
      const h = this;
      this._props = Object.fromEntries(
        r.map((s) => {
          const d = "initialValue" in s ? s.initialValue : this.parseAttribute(s.attribute);
          return [s.name, {
            _dirty: !1,
            _value: d,
            get value() {
              return this._value;
            },
            set value(y) {
              h.setProp(s.name, y, !0);
            }
          }];
        })
      );
    }
    parseAttribute(h) {
      return h.type(this.getAttribute(h.name));
    }
    setProp(h, s, d) {
      this._props[h]._value !== s && (this._props[h]._value = s, d && (this._props[h]._dirty = !0), l === h && this._internals && this._internals.setFormValue(Ge(s)), this.rerender());
    }
    rerender() {
      this._frameRequested || requestAnimationFrame(() => {
        this._vdom && (this._frameRequested = !1, this._vdom = Be(this._vdom, this._props), G(this._vdom, this._root));
      });
    }
    connectedCallback() {
      const h = Object.fromEntries(
        n.map((d) => [d, F(ke, { name: d }, null)])
      ), s = { $el: this, ...this._props, ...h };
      this._vdom = F(t, s, F(ke, { name: void 0 }, null)), G(this._vdom, this._root);
    }
    disconnectedCallback() {
      this._vdom = null, G(null, this._root);
    }
    attributeChangedCallback(h, s, d) {
      const { parser: y, prop: m } = o[h];
      this._props[m]._dirty || this.setProp(m, y(d), !1);
    }
  }
  return $(u, "observedAttributes", _), $(u, "formAssociated", !!l), r.forEach((p) => Object.defineProperty(u.prototype, p.name, {
    get() {
      return this._props[p.name]._value;
    },
    set(i) {
      this.setProp(p.name, i, !0);
    }
  })), u;
}, ie = (t, e, r) => {
  const n = Je(t, r);
  return customElements.define(e, n);
}, ae = (t) => t && t !== "false" && t !== "0" || t === "", R = (...t) => {
  if (typeof window > "u")
    return null;
  const e = new CSSStyleSheet();
  return e.replaceSync(t.join("")), e;
}, Ke = "/*! destyle.css v4.0.1 | MIT License | https://github.com/nicolas-cusan/destyle.min.css */*,:before,:after{box-sizing:border-box;border-style:solid;border-width:0;min-width:0}html{line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}body{margin:0}main{display:block}p,table,blockquote,address,pre,iframe,form,figure,dl{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit;margin:0}ul,ol{margin:0;padding:0;list-style:none}dt{font-weight:700}dd{margin-left:0}hr{box-sizing:content-box;height:0;overflow:visible;border-top-width:1px;margin:0;clear:both;color:inherit}pre{font-family:monospace,monospace;font-size:inherit}address{font-style:inherit}a{background-color:transparent;text-decoration:none;color:inherit}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:inherit}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}svg,img,embed,object,iframe{vertical-align:bottom}button,input,optgroup,select,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;vertical-align:middle;color:inherit;font:inherit;background:transparent;padding:0;margin:0;border-radius:0;text-align:inherit;text-transform:inherit}button,[type=button],[type=reset],[type=submit]{cursor:pointer}button:disabled,[type=button]:disabled,[type=reset]:disabled,[type=submit]:disabled{cursor:default}:-moz-focusring{outline:auto}select:disabled{opacity:inherit}option{padding:0}fieldset{margin:0;padding:0;min-width:0}legend{padding:0}progress{vertical-align:baseline}textarea{overflow:auto}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=number]{-moz-appearance:textfield}label[for]{cursor:pointer}details{display:block}summary{display:list-item}[contenteditable]:focus{outline:auto}table{border-color:inherit;border-collapse:collapse}caption{text-align:left}td,th{vertical-align:top;padding:0}th{text-align:left;font-weight:700}body,:host{font-family:Helvetica Neue,Arial,Hiragino Kaku Gothic ProN,Hiragino Sans,Meiryo,sans-serif;font-size:var(--phi-fontsize-md);background-color:var(--phi-color-bg);color:var(--phi-color-fg);line-height:1.25em}", _e = R(Ke), Qe = ".phi-button{--phi-color-accent-default: var(--phi-color-neutral-default);--phi-color-accent-hover: var(--phi-color-neutral-hover);--phi-color-accent-active: var(--phi-color-neutral-active);--phi-color-accent-bg: var(--phi-color-neutral-bg);--phi-shadow-pressable-accent-default: var(--phi-shadow-pressable-neutral-default);--phi-shadow-pressable-accent-hover: var(--phi-shadow-pressable-neutral-hover);display:inline-flex;align-items:center;font-size:var(--phi-fontsize-md);height:calc(var(--phi-fontsize-md) * 3);padding:0 var(--phi-spacing-padding-md);gap:var(--phi-spacing-margin-inline);border-radius:var(--phi-radius-md);cursor:pointer;-webkit-user-select:none;user-select:none}.phi-button.danger{--phi-color-accent-default: var(--phi-color-danger-default);--phi-color-accent-hover: var(--phi-color-danger-hover);--phi-color-accent-active: var(--phi-color-danger-active);--phi-color-accent-bg: var(--phi-color-danger-bg);--phi-shadow-pressable-accent-default: var(--phi-shadow-pressable-danger-default);--phi-shadow-pressable-accent-hover: var(--phi-shadow-pressable-danger-hover)}.phi-button.primary{color:var(--phi-color-distant-fg);background-color:var(--phi-color-accent-default);border:1px solid var(--phi-color-accent-default);box-shadow:var(--phi-shadow-pressable-accent-default);transform:translateY(-1px)}.phi-button.primary:hover{color:var(--phi-color-distant-fg);background-color:var(--phi-color-accent-hover);border-color:var(--phi-color-accent-hover);box-shadow:var(--phi-shadow-pressable-accent-hover)}.phi-button.primary:active{transform:none;box-shadow:none}.phi-button.default{color:var(--phi-color-fg);background-color:transparent;border:1px solid currentColor;box-shadow:var(--phi-shadow-pressable-default);transform:translateY(-1px)}.phi-button.default:hover{color:var(--phi-color-accent-default);box-shadow:var(--phi-shadow-pressable-accent-hover)}.phi-button.default:active{transform:none;box-shadow:none}.phi-button.dotted{color:var(--phi-color-fg);background-color:transparent;border:1px dashed currentColor}.phi-button.dotted:hover:not(:active){color:var(--phi-color-accent-default)}.phi-button.dotted:active{color:var(--phi-color-accent-active);background-color:var(--phi-color-accent-bg)}.phi-button>.icon{display:inline-block;font-size:var(--phi-fontsize-icon-md);line-height:1em}", Xe = ({
  onClick: t,
  danger: e,
  variant: r = "default",
  icon: n,
  children: a
}) => {
  const o = j((_) => {
    t(), _.preventDefault(), _.stopPropagation();
  }, [t]);
  return /* @__PURE__ */ E(
    "button",
    {
      className: `phi-button ${r} ${e ? "danger" : ""}`,
      onClick: o,
      children: [
        n && /* @__PURE__ */ E("span", { className: "icon", children: n }),
        a
      ]
    }
  );
}, Ze = R(Qe), et = (t) => {
  const e = (t == null ? void 0 : t.toString()) ?? "";
  return e === "default" || e === "primary" || e === "dotted" ? e : "default";
}, tt = ({ $el: t, danger: e, variant: r, icon: n, onClick: a, children: o }) => {
  const _ = j(() => {
    var l;
    t.dispatchEvent(new Event("click", { bubbles: !0 })), (l = a.value) == null || l.call(a);
  }, [t, a.value]);
  return /* @__PURE__ */ E(Xe, { icon: n, danger: e.value, variant: r.value, onClick: _, children: o });
}, rt = () => ie(tt, "phi-button", {
  adoptedStyleSheets: [_e, Ze],
  slots: ["icon"],
  properties: [{
    name: "danger",
    attribute: { name: "danger", type: ae }
  }, {
    name: "variant",
    attribute: { name: "variant", type: et }
  }, {
    name: "onClick",
    initialValue: void 0
  }]
}), nt = ".phi-icon-button{--phi-color-accent-default: var(--phi-color-neutral-default);--phi-color-accent-active: var(--phi-color-neutral-active);--phi-color-accent-bg: var(--phi-color-neutral-bg);display:inline-block;padding:var(--phi-spacing-padding-sm);font-size:var(--phi-fontsize-icon-lg);line-height:1em;border-radius:50%;-webkit-user-select:none;user-select:none;cursor:pointer;color:var(--phi-color-border);background-color:transparent}.phi-icon-button.danger{--phi-color-accent-default: var(--phi-color-danger-default);--phi-color-accent-active: var(--phi-color-danger-active);--phi-color-accent-bg: var(--phi-color-danger-bg)}.phi-icon-button:hover:not(:active){color:var(--phi-color-accent-default)}.phi-icon-button:active{color:var(--phi-color-accent-active);background-color:var(--phi-color-accent-bg)}", ot = ({
  onClick: t,
  danger: e,
  children: r
}) => {
  const n = j((a) => {
    t(), a.preventDefault(), a.stopPropagation();
  }, [t]);
  return /* @__PURE__ */ E(
    "button",
    {
      className: `phi-icon-button ${e ? "danger" : ""}`,
      onClick: n,
      children: r
    }
  );
}, it = R(nt), at = ({ $el: t, danger: e, onClick: r, children: n }) => {
  const a = j(() => {
    var o;
    t.dispatchEvent(new Event("click", { bubbles: !0 })), (o = r.value) == null || o.call(r);
  }, [t, r.value]);
  return /* @__PURE__ */ E(ot, { danger: e.value, onClick: a, children: n });
}, _t = () => ie(at, "phi-icon-button", {
  adoptedStyleSheets: [_e, it],
  properties: [{
    name: "danger",
    attribute: { name: "danger", type: ae }
  }, {
    name: "onClick",
    initialValue: void 0
  }]
}), lt = ".phi-text-button{--phi-color-accent-default: var(--phi-color-neutral-default);--phi-color-accent-active: var(--phi-color-neutral-active);--phi-color-accent-bg: var(--phi-color-neutral-bg);display:inline;font-size:var(--phi-fontsize-md);cursor:pointer;-webkit-user-select:none;user-select:none;color:var(--phi-color-fg);background-color:transparent;border-bottom:1px dotted currentColor}.phi-text-button.danger{--phi-color-accent-default: var(--phi-color-danger-default);--phi-color-accent-active: var(--phi-color-danger-active);--phi-color-accent-bg: var(--phi-color-danger-bg)}.phi-text-button:hover:not(:active){color:var(--phi-color-accent-default)}.phi-text-button:active{color:var(--phi-color-accent-active);background-color:var(--phi-color-accent-bg)}", ct = ({
  onClick: t,
  danger: e,
  children: r
}) => /* @__PURE__ */ E(
  "button",
  {
    className: `phi-text-button ${e ? "danger" : ""}`,
    onClick: t,
    children: r
  }
), st = R(lt), ut = ({ $el: t, danger: e, onClick: r, children: n }) => {
  const a = j(() => {
    var o;
    t.dispatchEvent(new Event("click", { bubbles: !0 })), (o = r.value) == null || o.call(r);
  }, [t, r.value]);
  return /* @__PURE__ */ E(ct, { danger: e.value, onClick: a, children: n });
}, pt = () => ie(ut, "phi-text-button", {
  adoptedStyleSheets: [_e, st],
  properties: [{
    name: "danger",
    attribute: { name: "danger", type: ae }
  }, {
    name: "onClick",
    initialValue: void 0
  }]
}), dt = () => {
  typeof window < "u" && (rt(), _t(), pt());
};
export {
  dt as default
};
//# sourceMappingURL=custom-elements.js.map
