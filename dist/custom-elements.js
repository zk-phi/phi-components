var Le = Object.defineProperty;
var Ue = (t, e, r) => e in t ? Le(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var $ = (t, e, r) => Ue(t, typeof e != "symbol" ? e + "" : e, r);
var M, f, xe, P, se, Se, $e, Pe, te, K, Q, D = {}, Ee = [], qe = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, O = Array.isArray;
function x(t, e) {
  for (var r in e) t[r] = e[r];
  return t;
}
function re(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function F(t, e, r) {
  var o, a, n, _ = {};
  for (n in e) n == "key" ? o = e[n] : n == "ref" ? a = e[n] : _[n] = e[n];
  if (arguments.length > 2 && (_.children = arguments.length > 3 ? M.call(arguments, 2) : r), typeof t == "function" && t.defaultProps != null) for (n in t.defaultProps) _[n] == null && (_[n] = t.defaultProps[n]);
  return N(t, _, o, a, null);
}
function N(t, e, r, o, a) {
  var n = { type: t, props: e, key: r, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: a ?? ++xe, __i: -1, __u: 0 };
  return a == null && f.vnode != null && f.vnode(n), n;
}
function R(t) {
  return t.children;
}
function q(t, e) {
  this.props = t, this.context = e;
}
function A(t, e) {
  if (e == null) return t.__ ? A(t.__, t.__i + 1) : null;
  for (var r; e < t.__k.length; e++) if ((r = t.__k[e]) != null && r.__e != null) return r.__e;
  return typeof t.type == "function" ? A(t) : null;
}
function Ae(t) {
  var e, r;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++) if ((r = t.__k[e]) != null && r.__e != null) {
      t.__e = t.__c.base = r.__e;
      break;
    }
    return Ae(t);
  }
}
function ue(t) {
  (!t.__d && (t.__d = !0) && P.push(t) && !W.__r++ || se != f.debounceRendering) && ((se = f.debounceRendering) || Se)(W);
}
function W() {
  for (var t, e, r, o, a, n, _, l = 1; P.length; ) P.length > l && P.sort($e), t = P.shift(), l = P.length, t.__d && (r = void 0, a = (o = (e = t).__v).__e, n = [], _ = [], e.__P && ((r = x({}, o)).__v = o.__v + 1, f.vnode && f.vnode(r), oe(e.__P, r, o, e.__n, e.__P.namespaceURI, 32 & o.__u ? [a] : null, n, a ?? A(o), !!(32 & o.__u), _), r.__v = o.__v, r.__.__k[r.__i] = r, Ce(n, r, _), r.__e != a && Ae(r)));
  W.__r = 0;
}
function He(t, e, r, o, a, n, _, l, u, c, p) {
  var i, h, s, d, y, m, v = o && o.__k || Ee, b = e.length;
  for (u = Ie(r, e, v, u, b), i = 0; i < b; i++) (s = r.__k[i]) != null && (h = s.__i == -1 ? D : v[s.__i] || D, s.__i = i, m = oe(t, s, h, a, n, _, l, u, c, p), d = s.__e, s.ref && h.ref != s.ref && (h.ref && ne(h.ref, null, s), p.push(s.ref, s.__c || d, s)), y == null && d != null && (y = d), 4 & s.__u || h.__k === s.__k ? u = ze(s, u, t) : typeof s.type == "function" && m !== void 0 ? u = m : d && (u = d.nextSibling), s.__u &= -7);
  return r.__e = y, u;
}
function Ie(t, e, r, o, a) {
  var n, _, l, u, c, p = r.length, i = p, h = 0;
  for (t.__k = new Array(a), n = 0; n < a; n++) (_ = e[n]) != null && typeof _ != "boolean" && typeof _ != "function" ? (u = n + h, (_ = t.__k[n] = typeof _ == "string" || typeof _ == "number" || typeof _ == "bigint" || _.constructor == String ? N(null, _, null, null, null) : O(_) ? N(R, { children: _ }, null, null, null) : _.constructor == null && _.__b > 0 ? N(_.type, _.props, _.key, _.ref ? _.ref : null, _.__v) : _).__ = t, _.__b = t.__b + 1, l = null, (c = _.__i = Ve(_, r, u, i)) != -1 && (i--, (l = r[c]) && (l.__u |= 2)), l == null || l.__v == null ? (c == -1 && (a > p ? h-- : a < p && h++), typeof _.type != "function" && (_.__u |= 4)) : c != u && (c == u - 1 ? h-- : c == u + 1 ? h++ : (c > u ? h-- : h++, _.__u |= 4))) : t.__k[n] = null;
  if (i) for (n = 0; n < p; n++) (l = r[n]) != null && (2 & l.__u) == 0 && (l.__e == o && (o = A(l)), Fe(l, l));
  return o;
}
function ze(t, e, r) {
  var o, a;
  if (typeof t.type == "function") {
    for (o = t.__k, a = 0; o && a < o.length; a++) o[a] && (o[a].__ = t, e = ze(o[a], e, r));
    return e;
  }
  t.__e != e && (e && t.type && !r.contains(e) && (e = A(t)), r.insertBefore(t.__e, e || null), e = t.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function Ve(t, e, r, o) {
  var a, n, _ = t.key, l = t.type, u = e[r];
  if (u === null && t.key == null || u && _ == u.key && l == u.type && (2 & u.__u) == 0) return r;
  if (o > (u != null && (2 & u.__u) == 0 ? 1 : 0)) for (a = r - 1, n = r + 1; a >= 0 || n < e.length; ) {
    if (a >= 0) {
      if ((u = e[a]) && (2 & u.__u) == 0 && _ == u.key && l == u.type) return a;
      a--;
    }
    if (n < e.length) {
      if ((u = e[n]) && (2 & u.__u) == 0 && _ == u.key && l == u.type) return n;
      n++;
    }
  }
  return -1;
}
function pe(t, e, r) {
  e[0] == "-" ? t.setProperty(e, r ?? "") : t[e] = r == null ? "" : typeof r != "number" || qe.test(e) ? r : r + "px";
}
function U(t, e, r, o, a) {
  var n, _;
  e: if (e == "style") if (typeof r == "string") t.style.cssText = r;
  else {
    if (typeof o == "string" && (t.style.cssText = o = ""), o) for (e in o) r && e in r || pe(t.style, e, "");
    if (r) for (e in r) o && r[e] == o[e] || pe(t.style, e, r[e]);
  }
  else if (e[0] == "o" && e[1] == "n") n = e != (e = e.replace(Pe, "$1")), _ = e.toLowerCase(), e = _ in t || e == "onFocusOut" || e == "onFocusIn" ? _.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + n] = r, r ? o ? r.u = o.u : (r.u = te, t.addEventListener(e, n ? Q : K, n)) : t.removeEventListener(e, n ? Q : K, n);
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
function he(t) {
  return function(e) {
    if (this.l) {
      var r = this.l[e.type + t];
      if (e.t == null) e.t = te++;
      else if (e.t < r.u) return;
      return r(f.event ? f.event(e) : e);
    }
  };
}
function oe(t, e, r, o, a, n, _, l, u, c) {
  var p, i, h, s, d, y, m, v, b, H, S, B, z, ce, L, C, Y, w = e.type;
  if (e.constructor != null) return null;
  128 & r.__u && (u = !!(32 & r.__u), n = [l = e.__e = r.__e]), (p = f.__b) && p(e);
  e: if (typeof w == "function") try {
    if (v = e.props, b = "prototype" in w && w.prototype.render, H = (p = w.contextType) && o[p.__c], S = p ? H ? H.props.value : p.__ : o, r.__c ? m = (i = e.__c = r.__c).__ = i.__E : (b ? e.__c = i = new w(v, S) : (e.__c = i = new q(v, S), i.constructor = w, i.render = Oe), H && H.sub(i), i.props = v, i.state || (i.state = {}), i.context = S, i.__n = o, h = i.__d = !0, i.__h = [], i._sb = []), b && i.__s == null && (i.__s = i.state), b && w.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = x({}, i.__s)), x(i.__s, w.getDerivedStateFromProps(v, i.__s))), s = i.props, d = i.state, i.__v = e, h) b && w.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), b && i.componentDidMount != null && i.__h.push(i.componentDidMount);
    else {
      if (b && w.getDerivedStateFromProps == null && v !== s && i.componentWillReceiveProps != null && i.componentWillReceiveProps(v, S), !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(v, i.__s, S) === !1 || e.__v == r.__v) {
        for (e.__v != r.__v && (i.props = v, i.state = i.__s, i.__d = !1), e.__e = r.__e, e.__k = r.__k, e.__k.some(function(T) {
          T && (T.__ = e);
        }), B = 0; B < i._sb.length; B++) i.__h.push(i._sb[B]);
        i._sb = [], i.__h.length && _.push(i);
        break e;
      }
      i.componentWillUpdate != null && i.componentWillUpdate(v, i.__s, S), b && i.componentDidUpdate != null && i.__h.push(function() {
        i.componentDidUpdate(s, d, y);
      });
    }
    if (i.context = S, i.props = v, i.__P = t, i.__e = !1, z = f.__r, ce = 0, b) {
      for (i.state = i.__s, i.__d = !1, z && z(e), p = i.render(i.props, i.state, i.context), L = 0; L < i._sb.length; L++) i.__h.push(i._sb[L]);
      i._sb = [];
    } else do
      i.__d = !1, z && z(e), p = i.render(i.props, i.state, i.context), i.state = i.__s;
    while (i.__d && ++ce < 25);
    i.state = i.__s, i.getChildContext != null && (o = x(x({}, o), i.getChildContext())), b && !h && i.getSnapshotBeforeUpdate != null && (y = i.getSnapshotBeforeUpdate(s, d)), C = p, p != null && p.type === R && p.key == null && (C = Te(p.props.children)), l = He(t, O(C) ? C : [C], e, r, o, a, n, _, l, u, c), i.base = e.__e, e.__u &= -161, i.__h.length && _.push(i), m && (i.__E = i.__ = null);
  } catch (T) {
    if (e.__v = null, u || n != null) if (T.then) {
      for (e.__u |= u ? 160 : 128; l && l.nodeType == 8 && l.nextSibling; ) l = l.nextSibling;
      n[n.indexOf(l)] = null, e.__e = l;
    } else for (Y = n.length; Y--; ) re(n[Y]);
    else e.__e = r.__e, e.__k = r.__k;
    f.__e(T, e, r);
  }
  else n == null && e.__v == r.__v ? (e.__k = r.__k, e.__e = r.__e) : l = e.__e = We(r.__e, e, r, o, a, n, _, u, c);
  return (p = f.diffed) && p(e), 128 & e.__u ? void 0 : l;
}
function Ce(t, e, r) {
  for (var o = 0; o < r.length; o++) ne(r[o], r[++o], r[++o]);
  f.__c && f.__c(e, t), t.some(function(a) {
    try {
      t = a.__h, a.__h = [], t.some(function(n) {
        n.call(a);
      });
    } catch (n) {
      f.__e(n, a.__v);
    }
  });
}
function Te(t) {
  return typeof t != "object" || t == null || t.__b && t.__b > 0 ? t : O(t) ? t.map(Te) : x({}, t);
}
function We(t, e, r, o, a, n, _, l, u) {
  var c, p, i, h, s, d, y, m = r.props, v = e.props, b = e.type;
  if (b == "svg" ? a = "http://www.w3.org/2000/svg" : b == "math" ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"), n != null) {
    for (c = 0; c < n.length; c++) if ((s = n[c]) && "setAttribute" in s == !!b && (b ? s.localName == b : s.nodeType == 3)) {
      t = s, n[c] = null;
      break;
    }
  }
  if (t == null) {
    if (b == null) return document.createTextNode(v);
    t = document.createElementNS(a, b, v.is && v), l && (f.__m && f.__m(e, n), l = !1), n = null;
  }
  if (b == null) m === v || l && t.data == v || (t.data = v);
  else {
    if (n = n && M.call(t.childNodes), m = r.props || D, !l && n != null) for (m = {}, c = 0; c < t.attributes.length; c++) m[(s = t.attributes[c]).name] = s.value;
    for (c in m) if (s = m[c], c != "children") {
      if (c == "dangerouslySetInnerHTML") i = s;
      else if (!(c in v)) {
        if (c == "value" && "defaultValue" in v || c == "checked" && "defaultChecked" in v) continue;
        U(t, c, null, s, a);
      }
    }
    for (c in v) s = v[c], c == "children" ? h = s : c == "dangerouslySetInnerHTML" ? p = s : c == "value" ? d = s : c == "checked" ? y = s : l && typeof s != "function" || m[c] === s || U(t, c, s, m[c], a);
    if (p) l || i && (p.__html == i.__html || p.__html == t.innerHTML) || (t.innerHTML = p.__html), e.__k = [];
    else if (i && (t.innerHTML = ""), He(e.type == "template" ? t.content : t, O(h) ? h : [h], e, r, o, b == "foreignObject" ? "http://www.w3.org/1999/xhtml" : a, n, _, n ? n[0] : r.__k && A(r, 0), l, u), n != null) for (c = n.length; c--; ) re(n[c]);
    l || (c = "value", b == "progress" && d == null ? t.removeAttribute("value") : d != null && (d !== t[c] || b == "progress" && !d || b == "option" && d != m[c]) && U(t, c, d, m[c], a), c = "checked", y != null && y != t[c] && U(t, c, y, m[c], a));
  }
  return t;
}
function ne(t, e, r) {
  try {
    if (typeof t == "function") {
      var o = typeof t.__u == "function";
      o && t.__u(), o && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (a) {
    f.__e(a, r);
  }
}
function Fe(t, e, r) {
  var o, a;
  if (f.unmount && f.unmount(t), (o = t.ref) && (o.current && o.current != t.__e || ne(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount) try {
      o.componentWillUnmount();
    } catch (n) {
      f.__e(n, e);
    }
    o.base = o.__P = null;
  }
  if (o = t.__k) for (a = 0; a < o.length; a++) o[a] && Fe(o[a], e, r || typeof t.type != "function");
  r || re(t.__e), t.__c = t.__ = t.__e = void 0;
}
function Oe(t, e, r) {
  return this.constructor(t, r);
}
function I(t, e, r) {
  var o, a, n, _;
  e == document && (e = document.documentElement), f.__ && f.__(t, e), a = (o = typeof r == "function") ? null : r && r.__k || e.__k, n = [], _ = [], oe(e, t = (!o && r || e).__k = F(R, null, [t]), a || D, D, e.namespaceURI, !o && r ? [r] : a ? null : e.firstChild ? M.call(e.childNodes) : null, n, !o && r ? r : a ? a.__e : e.firstChild, o, _), Ce(n, t, _);
}
function Ne(t, e) {
  I(t, e, Ne);
}
function Re(t, e, r) {
  var o, a, n, _, l = x({}, t.props);
  for (n in t.type && t.type.defaultProps && (_ = t.type.defaultProps), e) n == "key" ? o = e[n] : n == "ref" ? a = e[n] : l[n] = e[n] == null && _ != null ? _[n] : e[n];
  return arguments.length > 2 && (l.children = arguments.length > 3 ? M.call(arguments, 2) : r), N(t.type, l, o || t.key, a || t.ref, null);
}
M = Ee.slice, f = { __e: function(t, e, r, o) {
  for (var a, n, _; e = e.__; ) if ((a = e.__c) && !a.__) try {
    if ((n = a.constructor) && n.getDerivedStateFromError != null && (a.setState(n.getDerivedStateFromError(t)), _ = a.__d), a.componentDidCatch != null && (a.componentDidCatch(t, o || {}), _ = a.__d), _) return a.__E = a;
  } catch (l) {
    t = l;
  }
  throw t;
} }, xe = 0, q.prototype.setState = function(t, e) {
  var r;
  r = this.__s != null && this.__s != this.state ? this.__s : this.__s = x({}, this.state), typeof t == "function" && (t = t(x({}, r), this.props)), t && x(r, t), t != null && this.__v && (e && this._sb.push(e), ue(this));
}, q.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), ue(this));
}, q.prototype.render = R, P = [], Se = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $e = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, W.__r = 0, Pe = /(PointerCapture)$|Capture$/i, te = 0, K = he(!1), Q = he(!0);
var Ge = 0;
function E(t, e, r, o, a, n) {
  e || (e = {});
  var _, l, u = e;
  if ("ref" in u) for (l in u = {}, e) l == "ref" ? _ = e[l] : u[l] = e[l];
  var c = { type: t, props: u, key: r, ref: _, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Ge, __i: -1, __u: 0, __source: a, __self: n };
  if (typeof t == "function" && (_ = t.defaultProps)) for (l in _) u[l] === void 0 && (u[l] = _[l]);
  return f.vnode && f.vnode(c), c;
}
var X, k, J, de, Z = 0, De = [], g = f, fe = g.__b, ve = g.__r, be = g.diffed, me = g.__c, ge = g.unmount, ye = g.__;
function Ye(t, e) {
  g.__h && g.__h(k, t, Z || e), Z = 0;
  var r = k.__H || (k.__H = { __: [], __h: [] });
  return t >= r.__.length && r.__.push({}), r.__[t];
}
function Je(t, e) {
  var r = Ye(X++, 7);
  return Xe(r.__H, e) && (r.__ = t(), r.__H = e, r.__h = t), r.__;
}
function j(t, e) {
  return Z = 8, Je(function() {
    return t;
  }, e);
}
function Ke() {
  for (var t; t = De.shift(); ) if (t.__P && t.__H) try {
    t.__H.__h.forEach(V), t.__H.__h.forEach(ee), t.__H.__h = [];
  } catch (e) {
    t.__H.__h = [], g.__e(e, t.__v);
  }
}
g.__b = function(t) {
  k = null, fe && fe(t);
}, g.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), ye && ye(t, e);
}, g.__r = function(t) {
  ve && ve(t), X = 0;
  var e = (k = t.__c).__H;
  e && (J === k ? (e.__h = [], k.__h = [], e.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.u = r.__N = void 0;
  })) : (e.__h.forEach(V), e.__h.forEach(ee), e.__h = [], X = 0)), J = k;
}, g.diffed = function(t) {
  be && be(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (De.push(e) !== 1 && de === g.requestAnimationFrame || ((de = g.requestAnimationFrame) || Qe)(Ke)), e.__H.__.forEach(function(r) {
    r.u && (r.__H = r.u), r.u = void 0;
  })), J = k = null;
}, g.__c = function(t, e) {
  e.some(function(r) {
    try {
      r.__h.forEach(V), r.__h = r.__h.filter(function(o) {
        return !o.__ || ee(o);
      });
    } catch (o) {
      e.some(function(a) {
        a.__h && (a.__h = []);
      }), e = [], g.__e(o, r.__v);
    }
  }), me && me(t, e);
}, g.unmount = function(t) {
  ge && ge(t);
  var e, r = t.__c;
  r && r.__H && (r.__H.__.forEach(function(o) {
    try {
      V(o);
    } catch (a) {
      e = a;
    }
  }), r.__H = void 0, e && g.__e(e, r.__v));
};
var ke = typeof requestAnimationFrame == "function";
function Qe(t) {
  var e, r = function() {
    clearTimeout(o), ke && cancelAnimationFrame(e), setTimeout(t);
  }, o = setTimeout(r, 35);
  ke && (e = requestAnimationFrame(r));
}
function V(t) {
  var e = k, r = t.__c;
  typeof r == "function" && (t.__c = void 0, r()), k = e;
}
function ee(t) {
  var e = k;
  t.__c = t.__(), k = e;
}
function Xe(t, e) {
  return !t || t.length !== e.length || e.some(function(r, o) {
    return r !== t[o];
  });
}
const we = (t) => F("slot", t), Ze = (t) => {
  if (t == null)
    return "";
  if (typeof t != "object")
    return t.toString();
  Array.isArray(t) && t.map((o) => o.toString().replaceAll(",", "\\,")).join(",");
  const e = Object.keys(t), r = new FormData();
  return e.forEach((o) => {
    r.append(o, t[o].toString());
  }), r;
}, et = (t, e) => {
  var c;
  const r = (e == null ? void 0 : e.properties) ?? [], o = (e == null ? void 0 : e.slots) ?? [], a = (e == null ? void 0 : e.adoptedStyleSheets) ?? [], n = Object.fromEntries(
    r.filter((p) => "attribute" in p).map((p) => [p.attribute.name, { prop: p.name, parser: p.attribute.type }])
  ), _ = Object.keys(n), l = (c = r.find((p) => p.formAssociated)) == null ? void 0 : c.name;
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
      this._props[h]._value !== s && (this._props[h]._value = s, d && (this._props[h]._dirty = !0), l === h && this._internals && this._internals.setFormValue(Ze(s)), this.rerender());
    }
    rerender() {
      this._frameRequested || requestAnimationFrame(() => {
        this._vdom && (this._frameRequested = !1, this._vdom = Re(this._vdom, this._props), I(this._vdom, this._root));
      });
    }
    connectedCallback() {
      const h = Object.fromEntries(
        o.map((d) => [d, F(we, { name: d }, null)])
      ), s = { $el: this, ...this._props, ...h };
      this._vdom = F(t, s, F(we, { name: void 0 }, null)), (this.hasAttribute("hydrate") ? Ne : I)(this._vdom, this._root);
    }
    disconnectedCallback() {
      this._vdom = null, I(null, this._root);
    }
    attributeChangedCallback(h, s, d) {
      const { parser: y, prop: m } = n[h];
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
  const o = et(t, r);
  return customElements.define(e, o);
}, ae = (t) => t && t !== "false" && t !== "0" || t === "", G = (...t) => {
  const e = new CSSStyleSheet();
  return e.replaceSync(t.join("")), e;
}, tt = "/*! destyle.css v4.0.1 | MIT License | https://github.com/nicolas-cusan/destyle.min.css */*,:before,:after{box-sizing:border-box;border-style:solid;border-width:0;min-width:0}html{line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}body{margin:0}main{display:block}p,table,blockquote,address,pre,iframe,form,figure,dl{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit;margin:0}ul,ol{margin:0;padding:0;list-style:none}dt{font-weight:700}dd{margin-left:0}hr{box-sizing:content-box;height:0;overflow:visible;border-top-width:1px;margin:0;clear:both;color:inherit}pre{font-family:monospace,monospace;font-size:inherit}address{font-style:inherit}a{background-color:transparent;text-decoration:none;color:inherit}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:inherit}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}svg,img,embed,object,iframe{vertical-align:bottom}button,input,optgroup,select,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;vertical-align:middle;color:inherit;font:inherit;background:transparent;padding:0;margin:0;border-radius:0;text-align:inherit;text-transform:inherit}button,[type=button],[type=reset],[type=submit]{cursor:pointer}button:disabled,[type=button]:disabled,[type=reset]:disabled,[type=submit]:disabled{cursor:default}:-moz-focusring{outline:auto}select:disabled{opacity:inherit}option{padding:0}fieldset{margin:0;padding:0;min-width:0}legend{padding:0}progress{vertical-align:baseline}textarea{overflow:auto}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=number]{-moz-appearance:textfield}label[for]{cursor:pointer}details{display:block}summary{display:list-item}[contenteditable]:focus{outline:auto}table{border-color:inherit;border-collapse:collapse}caption{text-align:left}td,th{vertical-align:top;padding:0}th{text-align:left;font-weight:700}body,:host{font-family:Helvetica Neue,Arial,Hiragino Kaku Gothic ProN,Hiragino Sans,Meiryo,sans-serif;font-size:var(--phi-fontsize-md);background-color:var(--phi-color-bg);color:var(--phi-color-fg);line-height:1.25em}", _e = G(tt), rt = ".phi-button{--phi-color-accent-default: var(--phi-color-neutral-default);--phi-color-accent-hover: var(--phi-color-neutral-hover);--phi-color-accent-active: var(--phi-color-neutral-active);--phi-color-accent-bg: var(--phi-color-neutral-bg);--phi-shadow-pressable-accent-default: var(--phi-shadow-pressable-neutral-default);--phi-shadow-pressable-accent-hover: var(--phi-shadow-pressable-neutral-hover);display:inline-flex;align-items:center;font-size:var(--phi-fontsize-md);height:calc(var(--phi-fontsize-md) * 3);padding:0 var(--phi-spacing-padding-md);gap:var(--phi-spacing-margin-inline);border-radius:var(--phi-radius-md);cursor:pointer;-webkit-user-select:none;user-select:none}.phi-button.danger{--phi-color-accent-default: var(--phi-color-danger-default);--phi-color-accent-hover: var(--phi-color-danger-hover);--phi-color-accent-active: var(--phi-color-danger-active);--phi-color-accent-bg: var(--phi-color-danger-bg);--phi-shadow-pressable-accent-default: var(--phi-shadow-pressable-danger-default);--phi-shadow-pressable-accent-hover: var(--phi-shadow-pressable-danger-hover)}.phi-button.primary{color:var(--phi-color-distant-fg);background-color:var(--phi-color-accent-default);border:1px solid var(--phi-color-accent-default);box-shadow:var(--phi-shadow-pressable-accent-default);transform:translateY(-1px)}.phi-button.primary:hover{color:var(--phi-color-distant-fg);background-color:var(--phi-color-accent-hover);border-color:var(--phi-color-accent-hover);box-shadow:var(--phi-shadow-pressable-accent-hover)}.phi-button.primary:active{transform:none;box-shadow:none}.phi-button.default{color:var(--phi-color-fg);background-color:transparent;border:1px solid currentColor;box-shadow:var(--phi-shadow-pressable-default);transform:translateY(-1px)}.phi-button.default:hover{color:var(--phi-color-accent-default);box-shadow:var(--phi-shadow-pressable-accent-hover)}.phi-button.default:active{transform:none;box-shadow:none}.phi-button.dotted{color:var(--phi-color-fg);background-color:transparent;border:1px dashed currentColor}.phi-button.dotted:hover:not(:active){color:var(--phi-color-accent-default)}.phi-button.dotted:active{color:var(--phi-color-accent-active);background-color:var(--phi-color-accent-bg)}.phi-button>.icon{display:inline-block;font-size:var(--phi-fontsize-icon-md);line-height:1em}", ot = ({
  onClick: t,
  danger: e,
  variant: r = "default",
  icon: o,
  children: a
}) => {
  const n = j((_) => {
    t(), _.preventDefault(), _.stopPropagation();
  }, [t]);
  return /* @__PURE__ */ E(
    "button",
    {
      className: `phi-button ${r} ${e ? "danger" : ""}`,
      onClick: n,
      children: [
        o && /* @__PURE__ */ E("span", { className: "icon", children: o }),
        a
      ]
    }
  );
}, nt = G(rt), it = (t) => {
  const e = (t == null ? void 0 : t.toString()) ?? "";
  return e === "default" || e === "primary" || e === "dotted" ? e : "default";
}, at = ({ $el: t, danger: e, variant: r, icon: o, onClick: a, children: n }) => {
  const _ = j(() => {
    var l;
    t.dispatchEvent(new Event("click", { bubbles: !0 })), (l = a.value) == null || l.call(a);
  }, [t, a.value]);
  return /* @__PURE__ */ E(ot, { icon: o, danger: e.value, variant: r.value, onClick: _, children: n });
}, Me = () => ie(at, "phi-button", {
  adoptedStyleSheets: [_e, nt],
  slots: ["icon"],
  properties: [{
    name: "danger",
    attribute: { name: "danger", type: ae }
  }, {
    name: "variant",
    attribute: { name: "variant", type: it }
  }, {
    name: "onClick",
    initialValue: void 0
  }]
}), _t = ".phi-icon-button{--phi-color-accent-default: var(--phi-color-neutral-default);--phi-color-accent-active: var(--phi-color-neutral-active);--phi-color-accent-bg: var(--phi-color-neutral-bg);display:inline-block;padding:var(--phi-spacing-padding-sm);font-size:var(--phi-fontsize-icon-lg);line-height:1em;border-radius:50%;-webkit-user-select:none;user-select:none;cursor:pointer;color:var(--phi-color-border);background-color:transparent}.phi-icon-button.danger{--phi-color-accent-default: var(--phi-color-danger-default);--phi-color-accent-active: var(--phi-color-danger-active);--phi-color-accent-bg: var(--phi-color-danger-bg)}.phi-icon-button:hover:not(:active){color:var(--phi-color-accent-default)}.phi-icon-button:active{color:var(--phi-color-accent-active);background-color:var(--phi-color-accent-bg)}", lt = ({
  onClick: t,
  danger: e,
  children: r
}) => {
  const o = j((a) => {
    t(), a.preventDefault(), a.stopPropagation();
  }, [t]);
  return /* @__PURE__ */ E(
    "button",
    {
      className: `phi-icon-button ${e ? "danger" : ""}`,
      onClick: o,
      children: r
    }
  );
}, ct = G(_t), st = ({ $el: t, danger: e, onClick: r, children: o }) => {
  const a = j(() => {
    var n;
    t.dispatchEvent(new Event("click", { bubbles: !0 })), (n = r.value) == null || n.call(r);
  }, [t, r.value]);
  return /* @__PURE__ */ E(lt, { danger: e.value, onClick: a, children: o });
}, je = () => ie(st, "phi-icon-button", {
  adoptedStyleSheets: [_e, ct],
  properties: [{
    name: "danger",
    attribute: { name: "danger", type: ae }
  }, {
    name: "onClick",
    initialValue: void 0
  }]
}), ut = ".phi-text-button{--phi-color-accent-default: var(--phi-color-neutral-default);--phi-color-accent-active: var(--phi-color-neutral-active);--phi-color-accent-bg: var(--phi-color-neutral-bg);display:inline;font-size:var(--phi-fontsize-md);cursor:pointer;-webkit-user-select:none;user-select:none;color:var(--phi-color-fg);background-color:transparent;border-bottom:1px dotted currentColor}.phi-text-button.danger{--phi-color-accent-default: var(--phi-color-danger-default);--phi-color-accent-active: var(--phi-color-danger-active);--phi-color-accent-bg: var(--phi-color-danger-bg)}.phi-text-button:hover:not(:active){color:var(--phi-color-accent-default)}.phi-text-button:active{color:var(--phi-color-accent-active);background-color:var(--phi-color-accent-bg)}", pt = ({
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
), ht = G(ut), dt = ({ $el: t, danger: e, onClick: r, children: o }) => {
  const a = j(() => {
    var n;
    t.dispatchEvent(new Event("click", { bubbles: !0 })), (n = r.value) == null || n.call(r);
  }, [t, r.value]);
  return /* @__PURE__ */ E(pt, { danger: e.value, onClick: a, children: o });
}, Be = () => ie(dt, "phi-text-button", {
  adoptedStyleSheets: [_e, ht],
  properties: [{
    name: "danger",
    attribute: { name: "danger", type: ae }
  }, {
    name: "onClick",
    initialValue: void 0
  }]
}), le = () => {
  Me(), je(), Be();
};
le.button = Me;
le.iconButton = je;
le.textButton = Be;
export {
  le as default
};
//# sourceMappingURL=custom-elements.js.map
