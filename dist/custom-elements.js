var nt = Object.defineProperty;
var at = (t, e, r) => e in t ? nt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var S = (t, e, r) => at(t, typeof e != "symbol" ? e + "" : e, r);
var Q, v, Ue, Te, H, ge, Fe, Me, De, fe, ie, ne, L = {}, je = [], lt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, X = Array.isArray;
function C(t, e) {
  for (var r in e) t[r] = e[r];
  return t;
}
function ue(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function D(t, e, r) {
  var o, a, i, l = {};
  for (i in e) i == "key" ? o = e[i] : i == "ref" ? a = e[i] : l[i] = e[i];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Q.call(arguments, 2) : r), typeof t == "function" && t.defaultProps != null) for (i in t.defaultProps) l[i] == null && (l[i] = t.defaultProps[i]);
  return G(t, l, o, a, null);
}
function G(t, e, r, o, a) {
  var i = { type: t, props: e, key: r, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: a ?? ++Ue, __i: -1, __u: 0 };
  return a == null && v.vnode != null && v.vnode(i), i;
}
function W(t) {
  return t.children;
}
function j(t, e) {
  this.props = t, this.context = e;
}
function N(t, e) {
  if (e == null) return t.__ ? N(t.__, t.__i + 1) : null;
  for (var r; e < t.__k.length; e++) if ((r = t.__k[e]) != null && r.__e != null) return r.__e;
  return typeof t.type == "function" ? N(t) : null;
}
function Oe(t) {
  var e, r;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++) if ((r = t.__k[e]) != null && r.__e != null) {
      t.__e = t.__c.base = r.__e;
      break;
    }
    return Oe(t);
  }
}
function ye(t) {
  (!t.__d && (t.__d = !0) && H.push(t) && !Y.__r++ || ge != v.debounceRendering) && ((ge = v.debounceRendering) || Fe)(Y);
}
function Y() {
  for (var t, e, r, o, a, i, l, s = 1; H.length; ) H.length > s && H.sort(Me), t = H.shift(), s = H.length, t.__d && (r = void 0, a = (o = (e = t).__v).__e, i = [], l = [], e.__P && ((r = C({}, o)).__v = o.__v + 1, v.vnode && v.vnode(r), he(e.__P, r, o, e.__n, e.__P.namespaceURI, 32 & o.__u ? [a] : null, i, a ?? N(o), !!(32 & o.__u), l), r.__v = o.__v, r.__.__k[r.__i] = r, qe(i, r, l), r.__e != a && Oe(r)));
  Y.__r = 0;
}
function Le(t, e, r, o, a, i, l, s, c, _, f) {
  var n, h, u, y, k, b, p = o && o.__k || je, g = e.length;
  for (c = st(r, e, p, c, g), n = 0; n < g; n++) (u = r.__k[n]) != null && (h = u.__i == -1 ? L : p[u.__i] || L, u.__i = n, b = he(t, u, h, a, i, l, s, c, _, f), y = u.__e, u.ref && h.ref != u.ref && (h.ref && pe(h.ref, null, u), f.push(u.ref, u.__c || y, u)), k == null && y != null && (k = y), 4 & u.__u || h.__k === u.__k ? c = We(u, c, t) : typeof u.type == "function" && b !== void 0 ? c = b : y && (c = y.nextSibling), u.__u &= -7);
  return r.__e = k, c;
}
function st(t, e, r, o, a) {
  var i, l, s, c, _, f = r.length, n = f, h = 0;
  for (t.__k = new Array(a), i = 0; i < a; i++) (l = e[i]) != null && typeof l != "boolean" && typeof l != "function" ? (c = i + h, (l = t.__k[i] = typeof l == "string" || typeof l == "number" || typeof l == "bigint" || l.constructor == String ? G(null, l, null, null, null) : X(l) ? G(W, { children: l }, null, null, null) : l.constructor == null && l.__b > 0 ? G(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l).__ = t, l.__b = t.__b + 1, s = null, (_ = l.__i = _t(l, r, c, n)) != -1 && (n--, (s = r[_]) && (s.__u |= 2)), s == null || s.__v == null ? (_ == -1 && (a > f ? h-- : a < f && h++), typeof l.type != "function" && (l.__u |= 4)) : _ != c && (_ == c - 1 ? h-- : _ == c + 1 ? h++ : (_ > c ? h-- : h++, l.__u |= 4))) : t.__k[i] = null;
  if (n) for (i = 0; i < f; i++) (s = r[i]) != null && (2 & s.__u) == 0 && (s.__e == o && (o = N(s)), Ve(s, s));
  return o;
}
function We(t, e, r) {
  var o, a;
  if (typeof t.type == "function") {
    for (o = t.__k, a = 0; o && a < o.length; a++) o[a] && (o[a].__ = t, e = We(o[a], e, r));
    return e;
  }
  t.__e != e && (e && t.type && !r.contains(e) && (e = N(t)), r.insertBefore(t.__e, e || null), e = t.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function _t(t, e, r, o) {
  var a, i, l = t.key, s = t.type, c = e[r];
  if (c === null && t.key == null || c && l == c.key && s == c.type && (2 & c.__u) == 0) return r;
  if (o > (c != null && (2 & c.__u) == 0 ? 1 : 0)) for (a = r - 1, i = r + 1; a >= 0 || i < e.length; ) {
    if (a >= 0) {
      if ((c = e[a]) && (2 & c.__u) == 0 && l == c.key && s == c.type) return a;
      a--;
    }
    if (i < e.length) {
      if ((c = e[i]) && (2 & c.__u) == 0 && l == c.key && s == c.type) return i;
      i++;
    }
  }
  return -1;
}
function me(t, e, r) {
  e[0] == "-" ? t.setProperty(e, r ?? "") : t[e] = r == null ? "" : typeof r != "number" || lt.test(e) ? r : r + "px";
}
function R(t, e, r, o, a) {
  var i, l;
  e: if (e == "style") if (typeof r == "string") t.style.cssText = r;
  else {
    if (typeof o == "string" && (t.style.cssText = o = ""), o) for (e in o) r && e in r || me(t.style, e, "");
    if (r) for (e in r) o && r[e] == o[e] || me(t.style, e, r[e]);
  }
  else if (e[0] == "o" && e[1] == "n") i = e != (e = e.replace(De, "$1")), l = e.toLowerCase(), e = l in t || e == "onFocusOut" || e == "onFocusIn" ? l.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = r, r ? o ? r.u = o.u : (r.u = fe, t.addEventListener(e, i ? ne : ie, i)) : t.removeEventListener(e, i ? ne : ie, i);
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
function we(t) {
  return function(e) {
    if (this.l) {
      var r = this.l[e.type + t];
      if (e.t == null) e.t = fe++;
      else if (e.t < r.u) return;
      return r(v.event ? v.event(e) : e);
    }
  };
}
function he(t, e, r, o, a, i, l, s, c, _) {
  var f, n, h, u, y, k, b, p, g, U, A, V, T, be, B, F, te, $ = e.type;
  if (e.constructor != null) return null;
  128 & r.__u && (c = !!(32 & r.__u), i = [s = e.__e = r.__e]), (f = v.__b) && f(e);
  e: if (typeof $ == "function") try {
    if (p = e.props, g = "prototype" in $ && $.prototype.render, U = (f = $.contextType) && o[f.__c], A = f ? U ? U.props.value : f.__ : o, r.__c ? b = (n = e.__c = r.__c).__ = n.__E : (g ? e.__c = n = new $(p, A) : (e.__c = n = new j(p, A), n.constructor = $, n.render = ft), U && U.sub(n), n.props = p, n.state || (n.state = {}), n.context = A, n.__n = o, h = n.__d = !0, n.__h = [], n._sb = []), g && n.__s == null && (n.__s = n.state), g && $.getDerivedStateFromProps != null && (n.__s == n.state && (n.__s = C({}, n.__s)), C(n.__s, $.getDerivedStateFromProps(p, n.__s))), u = n.props, y = n.state, n.__v = e, h) g && $.getDerivedStateFromProps == null && n.componentWillMount != null && n.componentWillMount(), g && n.componentDidMount != null && n.__h.push(n.componentDidMount);
    else {
      if (g && $.getDerivedStateFromProps == null && p !== u && n.componentWillReceiveProps != null && n.componentWillReceiveProps(p, A), !n.__e && n.shouldComponentUpdate != null && n.shouldComponentUpdate(p, n.__s, A) === !1 || e.__v == r.__v) {
        for (e.__v != r.__v && (n.props = p, n.state = n.__s, n.__d = !1), e.__e = r.__e, e.__k = r.__k, e.__k.some(function(M) {
          M && (M.__ = e);
        }), V = 0; V < n._sb.length; V++) n.__h.push(n._sb[V]);
        n._sb = [], n.__h.length && l.push(n);
        break e;
      }
      n.componentWillUpdate != null && n.componentWillUpdate(p, n.__s, A), g && n.componentDidUpdate != null && n.__h.push(function() {
        n.componentDidUpdate(u, y, k);
      });
    }
    if (n.context = A, n.props = p, n.__P = t, n.__e = !1, T = v.__r, be = 0, g) {
      for (n.state = n.__s, n.__d = !1, T && T(e), f = n.render(n.props, n.state, n.context), B = 0; B < n._sb.length; B++) n.__h.push(n._sb[B]);
      n._sb = [];
    } else do
      n.__d = !1, T && T(e), f = n.render(n.props, n.state, n.context), n.state = n.__s;
    while (n.__d && ++be < 25);
    n.state = n.__s, n.getChildContext != null && (o = C(C({}, o), n.getChildContext())), g && !h && n.getSnapshotBeforeUpdate != null && (k = n.getSnapshotBeforeUpdate(u, y)), F = f, f != null && f.type === W && f.key == null && (F = Ie(f.props.children)), s = Le(t, X(F) ? F : [F], e, r, o, a, i, l, s, c, _), n.base = e.__e, e.__u &= -161, n.__h.length && l.push(n), b && (n.__E = n.__ = null);
  } catch (M) {
    if (e.__v = null, c || i != null) if (M.then) {
      for (e.__u |= c ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; ) s = s.nextSibling;
      i[i.indexOf(s)] = null, e.__e = s;
    } else for (te = i.length; te--; ) ue(i[te]);
    else e.__e = r.__e, e.__k = r.__k;
    v.__e(M, e, r);
  }
  else i == null && e.__v == r.__v ? (e.__k = r.__k, e.__e = r.__e) : s = e.__e = ct(r.__e, e, r, o, a, i, l, c, _);
  return (f = v.diffed) && f(e), 128 & e.__u ? void 0 : s;
}
function qe(t, e, r) {
  for (var o = 0; o < r.length; o++) pe(r[o], r[++o], r[++o]);
  v.__c && v.__c(e, t), t.some(function(a) {
    try {
      t = a.__h, a.__h = [], t.some(function(i) {
        i.call(a);
      });
    } catch (i) {
      v.__e(i, a.__v);
    }
  });
}
function Ie(t) {
  return typeof t != "object" || t == null || t.__b && t.__b > 0 ? t : X(t) ? t.map(Ie) : C({}, t);
}
function ct(t, e, r, o, a, i, l, s, c) {
  var _, f, n, h, u, y, k, b = r.props, p = e.props, g = e.type;
  if (g == "svg" ? a = "http://www.w3.org/2000/svg" : g == "math" ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"), i != null) {
    for (_ = 0; _ < i.length; _++) if ((u = i[_]) && "setAttribute" in u == !!g && (g ? u.localName == g : u.nodeType == 3)) {
      t = u, i[_] = null;
      break;
    }
  }
  if (t == null) {
    if (g == null) return document.createTextNode(p);
    t = document.createElementNS(a, g, p.is && p), s && (v.__m && v.__m(e, i), s = !1), i = null;
  }
  if (g == null) b === p || s && t.data == p || (t.data = p);
  else {
    if (i = i && Q.call(t.childNodes), b = r.props || L, !s && i != null) for (b = {}, _ = 0; _ < t.attributes.length; _++) b[(u = t.attributes[_]).name] = u.value;
    for (_ in b) if (u = b[_], _ != "children") {
      if (_ == "dangerouslySetInnerHTML") n = u;
      else if (!(_ in p)) {
        if (_ == "value" && "defaultValue" in p || _ == "checked" && "defaultChecked" in p) continue;
        R(t, _, null, u, a);
      }
    }
    for (_ in p) u = p[_], _ == "children" ? h = u : _ == "dangerouslySetInnerHTML" ? f = u : _ == "value" ? y = u : _ == "checked" ? k = u : s && typeof u != "function" || b[_] === u || R(t, _, u, b[_], a);
    if (f) s || n && (f.__html == n.__html || f.__html == t.innerHTML) || (t.innerHTML = f.__html), e.__k = [];
    else if (n && (t.innerHTML = ""), Le(e.type == "template" ? t.content : t, X(h) ? h : [h], e, r, o, g == "foreignObject" ? "http://www.w3.org/1999/xhtml" : a, i, l, i ? i[0] : r.__k && N(r, 0), s, c), i != null) for (_ = i.length; _--; ) ue(i[_]);
    s || (_ = "value", g == "progress" && y == null ? t.removeAttribute("value") : y != null && (y !== t[_] || g == "progress" && !y || g == "option" && y != b[_]) && R(t, _, y, b[_], a), _ = "checked", k != null && k != t[_] && R(t, _, k, b[_], a));
  }
  return t;
}
function pe(t, e, r) {
  try {
    if (typeof t == "function") {
      var o = typeof t.__u == "function";
      o && t.__u(), o && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (a) {
    v.__e(a, r);
  }
}
function Ve(t, e, r) {
  var o, a;
  if (v.unmount && v.unmount(t), (o = t.ref) && (o.current && o.current != t.__e || pe(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount) try {
      o.componentWillUnmount();
    } catch (i) {
      v.__e(i, e);
    }
    o.base = o.__P = null;
  }
  if (o = t.__k) for (a = 0; a < o.length; a++) o[a] && Ve(o[a], e, r || typeof t.type != "function");
  r || ue(t.__e), t.__c = t.__ = t.__e = void 0;
}
function ft(t, e, r) {
  return this.constructor(t, r);
}
function ae(t, e, r) {
  var o, a, i, l;
  e == document && (e = document.documentElement), v.__ && v.__(t, e), a = (o = typeof r == "function") ? null : r && r.__k || e.__k, i = [], l = [], he(e, t = (!o && r || e).__k = D(W, null, [t]), a || L, L, e.namespaceURI, !o && r ? [r] : a ? null : e.firstChild ? Q.call(e.childNodes) : null, i, !o && r ? r : a ? a.__e : e.firstChild, o, l), qe(i, t, l);
}
function Be(t, e) {
  ae(t, e, Be);
}
Q = je.slice, v = { __e: function(t, e, r, o) {
  for (var a, i, l; e = e.__; ) if ((a = e.__c) && !a.__) try {
    if ((i = a.constructor) && i.getDerivedStateFromError != null && (a.setState(i.getDerivedStateFromError(t)), l = a.__d), a.componentDidCatch != null && (a.componentDidCatch(t, o || {}), l = a.__d), l) return a.__E = a;
  } catch (s) {
    t = s;
  }
  throw t;
} }, Ue = 0, Te = function(t) {
  return t != null && t.constructor == null;
}, j.prototype.setState = function(t, e) {
  var r;
  r = this.__s != null && this.__s != this.state ? this.__s : this.__s = C({}, this.state), typeof t == "function" && (t = t(C({}, r), this.props)), t && C(r, t), t != null && this.__v && (e && this._sb.push(e), ye(this));
}, j.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), ye(this));
}, j.prototype.render = W, H = [], Fe = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Me = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, Y.__r = 0, De = /(PointerCapture)$|Capture$/i, fe = 0, ie = we(!1), ne = we(!0);
var ut = 0;
function le(t, e, r, o, a, i) {
  e || (e = {});
  var l, s, c = e;
  if ("ref" in c) for (s in c = {}, e) s == "ref" ? l = e[s] : c[s] = e[s];
  var _ = { type: t, props: c, key: r, ref: l, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --ut, __i: -1, __u: 0, __source: a, __self: i };
  if (typeof t == "function" && (l = t.defaultProps)) for (s in l) c[s] === void 0 && (c[s] = l[s]);
  return v.vnode && v.vnode(_), _;
}
var se, x, re, ke, xe = 0, Re = [], m = v, $e = m.__b, Se = m.__r, Ce = m.diffed, Ae = m.__c, Pe = m.unmount, He = m.__;
function ht(t, e) {
  m.__h && m.__h(x, t, xe || e), xe = 0;
  var r = x.__H || (x.__H = { __: [], __h: [] });
  return t >= r.__.length && r.__.push({}), r.__[t];
}
function Ge(t, e) {
  var r = ht(se++, 7);
  return vt(r.__H, e) && (r.__ = t(), r.__H = e, r.__h = t), r.__;
}
function pt() {
  for (var t; t = Re.shift(); ) if (t.__P && t.__H) try {
    t.__H.__h.forEach(Z), t.__H.__h.forEach(_e), t.__H.__h = [];
  } catch (e) {
    t.__H.__h = [], m.__e(e, t.__v);
  }
}
m.__b = function(t) {
  x = null, $e && $e(t);
}, m.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), He && He(t, e);
}, m.__r = function(t) {
  Se && Se(t), se = 0;
  var e = (x = t.__c).__H;
  e && (re === x ? (e.__h = [], x.__h = [], e.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.u = r.__N = void 0;
  })) : (e.__h.forEach(Z), e.__h.forEach(_e), e.__h = [], se = 0)), re = x;
}, m.diffed = function(t) {
  Ce && Ce(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Re.push(e) !== 1 && ke === m.requestAnimationFrame || ((ke = m.requestAnimationFrame) || dt)(pt)), e.__H.__.forEach(function(r) {
    r.u && (r.__H = r.u), r.u = void 0;
  })), re = x = null;
}, m.__c = function(t, e) {
  e.some(function(r) {
    try {
      r.__h.forEach(Z), r.__h = r.__h.filter(function(o) {
        return !o.__ || _e(o);
      });
    } catch (o) {
      e.some(function(a) {
        a.__h && (a.__h = []);
      }), e = [], m.__e(o, r.__v);
    }
  }), Ae && Ae(t, e);
}, m.unmount = function(t) {
  Pe && Pe(t);
  var e, r = t.__c;
  r && r.__H && (r.__H.__.forEach(function(o) {
    try {
      Z(o);
    } catch (a) {
      e = a;
    }
  }), r.__H = void 0, e && m.__e(e, r.__v));
};
var Ee = typeof requestAnimationFrame == "function";
function dt(t) {
  var e, r = function() {
    clearTimeout(o), Ee && cancelAnimationFrame(e), setTimeout(t);
  }, o = setTimeout(r, 35);
  Ee && (e = requestAnimationFrame(r));
}
function Z(t) {
  var e = x, r = t.__c;
  typeof r == "function" && (t.__c = void 0, r()), x = e;
}
function _e(t) {
  var e = x;
  t.__c = t.__(), x = e;
}
function vt(t, e) {
  return !t || t.length !== e.length || e.some(function(r, o) {
    return r !== t[o];
  });
}
var bt = Symbol.for("preact-signals");
function ee() {
  if (P > 1)
    P--;
  else {
    for (var t, e = !1; O !== void 0; ) {
      var r = O;
      for (O = void 0, ce++; r !== void 0; ) {
        var o = r.o;
        if (r.o = void 0, r.f &= -3, !(8 & r.f) && Je(r)) try {
          r.c();
        } catch (a) {
          e || (t = a, e = !0);
        }
        r = o;
      }
    }
    if (ce = 0, P--, e) throw t;
  }
}
function gt(t) {
  if (P > 0) return t();
  P++;
  try {
    return t();
  } finally {
    ee();
  }
}
var d = void 0;
function Ze(t) {
  var e = d;
  d = void 0;
  try {
    return t();
  } finally {
    d = e;
  }
}
var O = void 0, P = 0, ce = 0, J = 0;
function Ye(t) {
  if (d !== void 0) {
    var e = t.n;
    if (e === void 0 || e.t !== d)
      return e = { i: 0, S: t, p: d.s, n: void 0, t: d, e: void 0, x: void 0, r: e }, d.s !== void 0 && (d.s.n = e), d.s = e, t.n = e, 32 & d.f && t.S(e), e;
    if (e.i === -1)
      return e.i = 0, e.n !== void 0 && (e.n.p = e.p, e.p !== void 0 && (e.p.n = e.n), e.p = d.s, e.n = void 0, d.s.n = e, d.s = e), e;
  }
}
function w(t, e) {
  this.v = t, this.i = 0, this.n = void 0, this.t = void 0, this.W = e == null ? void 0 : e.watched, this.Z = e == null ? void 0 : e.unwatched;
}
w.prototype.brand = bt;
w.prototype.h = function() {
  return !0;
};
w.prototype.S = function(t) {
  var e = this, r = this.t;
  r !== t && t.e === void 0 && (t.x = r, this.t = t, r !== void 0 ? r.e = t : Ze(function() {
    var o;
    (o = e.W) == null || o.call(e);
  }));
};
w.prototype.U = function(t) {
  var e = this;
  if (this.t !== void 0) {
    var r = t.e, o = t.x;
    r !== void 0 && (r.x = o, t.e = void 0), o !== void 0 && (o.e = r, t.x = void 0), t === this.t && (this.t = o, o === void 0 && Ze(function() {
      var a;
      (a = e.Z) == null || a.call(e);
    }));
  }
};
w.prototype.subscribe = function(t) {
  var e = this;
  return I(function() {
    var r = e.value, o = d;
    d = void 0;
    try {
      t(r);
    } finally {
      d = o;
    }
  });
};
w.prototype.valueOf = function() {
  return this.value;
};
w.prototype.toString = function() {
  return this.value + "";
};
w.prototype.toJSON = function() {
  return this.value;
};
w.prototype.peek = function() {
  var t = d;
  d = void 0;
  try {
    return this.value;
  } finally {
    d = t;
  }
};
Object.defineProperty(w.prototype, "value", { get: function() {
  var t = Ye(this);
  return t !== void 0 && (t.i = this.i), this.v;
}, set: function(t) {
  if (t !== this.v) {
    if (ce > 100) throw new Error("Cycle detected");
    this.v = t, this.i++, J++, P++;
    try {
      for (var e = this.t; e !== void 0; e = e.x) e.t.N();
    } finally {
      ee();
    }
  }
} });
function de(t, e) {
  return new w(t, e);
}
function Je(t) {
  for (var e = t.s; e !== void 0; e = e.n) if (e.S.i !== e.i || !e.S.h() || e.S.i !== e.i) return !0;
  return !1;
}
function Ke(t) {
  for (var e = t.s; e !== void 0; e = e.n) {
    var r = e.S.n;
    if (r !== void 0 && (e.r = r), e.S.n = e, e.i = -1, e.n === void 0) {
      t.s = e;
      break;
    }
  }
}
function Qe(t) {
  for (var e = t.s, r = void 0; e !== void 0; ) {
    var o = e.p;
    e.i === -1 ? (e.S.U(e), o !== void 0 && (o.n = e.n), e.n !== void 0 && (e.n.p = o)) : r = e, e.S.n = e.r, e.r !== void 0 && (e.r = void 0), e = o;
  }
  t.s = r;
}
function E(t, e) {
  w.call(this, void 0), this.x = t, this.s = void 0, this.g = J - 1, this.f = 4, this.W = e == null ? void 0 : e.watched, this.Z = e == null ? void 0 : e.unwatched;
}
E.prototype = new w();
E.prototype.h = function() {
  if (this.f &= -3, 1 & this.f) return !1;
  if ((36 & this.f) == 32 || (this.f &= -5, this.g === J)) return !0;
  if (this.g = J, this.f |= 1, this.i > 0 && !Je(this))
    return this.f &= -2, !0;
  var t = d;
  try {
    Ke(this), d = this;
    var e = this.x();
    (16 & this.f || this.v !== e || this.i === 0) && (this.v = e, this.f &= -17, this.i++);
  } catch (r) {
    this.v = r, this.f |= 16, this.i++;
  }
  return d = t, Qe(this), this.f &= -2, !0;
};
E.prototype.S = function(t) {
  if (this.t === void 0) {
    this.f |= 36;
    for (var e = this.s; e !== void 0; e = e.n) e.S.S(e);
  }
  w.prototype.S.call(this, t);
};
E.prototype.U = function(t) {
  if (this.t !== void 0 && (w.prototype.U.call(this, t), this.t === void 0)) {
    this.f &= -33;
    for (var e = this.s; e !== void 0; e = e.n) e.S.U(e);
  }
};
E.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var t = this.t; t !== void 0; t = t.x) t.t.N();
  }
};
Object.defineProperty(E.prototype, "value", { get: function() {
  if (1 & this.f) throw new Error("Cycle detected");
  var t = Ye(this);
  if (this.h(), t !== void 0 && (t.i = this.i), 16 & this.f) throw this.v;
  return this.v;
} });
function Ne(t, e) {
  return new E(t, e);
}
function Xe(t) {
  var e = t.u;
  if (t.u = void 0, typeof e == "function") {
    P++;
    var r = d;
    d = void 0;
    try {
      e();
    } catch (o) {
      throw t.f &= -2, t.f |= 8, ve(t), o;
    } finally {
      d = r, ee();
    }
  }
}
function ve(t) {
  for (var e = t.s; e !== void 0; e = e.n) e.S.U(e);
  t.x = void 0, t.s = void 0, Xe(t);
}
function yt(t) {
  if (d !== this) throw new Error("Out-of-order effect");
  Qe(this), d = t, this.f &= -2, 8 & this.f && ve(this), ee();
}
function q(t) {
  this.x = t, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32;
}
q.prototype.c = function() {
  var t = this.S();
  try {
    if (8 & this.f || this.x === void 0) return;
    var e = this.x();
    typeof e == "function" && (this.u = e);
  } finally {
    t();
  }
};
q.prototype.S = function() {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= 1, this.f &= -9, Xe(this), Ke(this), P++;
  var t = d;
  return d = this, yt.bind(this, t);
};
q.prototype.N = function() {
  2 & this.f || (this.f |= 2, this.o = O, O = this);
};
q.prototype.d = function() {
  this.f |= 8, 1 & this.f || ve(this);
};
function I(t) {
  var e = new q(t);
  try {
    e.c();
  } catch (r) {
    throw e.d(), r;
  }
  return e.d.bind(e);
}
var et, oe, tt = [];
I(function() {
  et = this.N;
})();
function z(t, e) {
  v[t] = e.bind(null, v[t] || function() {
  });
}
function K(t) {
  oe && oe(), oe = t && t.S();
}
function rt(t) {
  var e = this, r = t.data, o = wt(r);
  o.value = r;
  var a = Ge(function() {
    for (var s = e, c = e.__v; c = c.__; ) if (c.__c) {
      c.__c.__$f |= 4;
      break;
    }
    var _ = Ne(function() {
      var u = o.value.value;
      return u === 0 ? 0 : u === !0 ? "" : u || "";
    }), f = Ne(function() {
      return !Array.isArray(_.value) && !Te(_.value);
    }), n = I(function() {
      if (this.N = ot, f.value) {
        var u = _.value;
        s.__v && s.__v.__e && s.__v.__e.nodeType === 3 && (s.__v.__e.data = u);
      }
    }), h = e.__$u.d;
    return e.__$u.d = function() {
      n(), h.call(this);
    }, [f, _];
  }, []), i = a[0], l = a[1];
  return i.value ? l.peek() : l.value;
}
rt.displayName = "_st";
Object.defineProperties(w.prototype, { constructor: { configurable: !0, value: void 0 }, type: { configurable: !0, value: rt }, props: { configurable: !0, get: function() {
  return { data: this };
} }, __b: { configurable: !0, value: 1 } });
z("__b", function(t, e) {
  if (typeof e.type == "string") {
    var r, o = e.props;
    for (var a in o) if (a !== "children") {
      var i = o[a];
      i instanceof w && (r || (e.__np = r = {}), r[a] = i, o[a] = i.peek());
    }
  }
  t(e);
});
z("__r", function(t, e) {
  if (e.type !== W) {
    K();
    var r, o = e.__c;
    o && (o.__$f &= -2, (r = o.__$u) === void 0 && (o.__$u = r = function(a) {
      var i;
      return I(function() {
        i = this;
      }), i.c = function() {
        o.__$f |= 1, o.setState({});
      }, i;
    }())), K(r);
  }
  t(e);
});
z("__e", function(t, e, r, o) {
  K(), t(e, r, o);
});
z("diffed", function(t, e) {
  K();
  var r;
  if (typeof e.type == "string" && (r = e.__e)) {
    var o = e.__np, a = e.props;
    if (o) {
      var i = r.U;
      if (i) for (var l in i) {
        var s = i[l];
        s !== void 0 && !(l in o) && (s.d(), i[l] = void 0);
      }
      else
        i = {}, r.U = i;
      for (var c in o) {
        var _ = i[c], f = o[c];
        _ === void 0 ? (_ = mt(r, c, f, a), i[c] = _) : _.o(f, a);
      }
    }
  }
  t(e);
});
function mt(t, e, r, o) {
  var a = e in t && t.ownerSVGElement === void 0, i = de(r);
  return { o: function(l, s) {
    i.value = l, o = s;
  }, d: I(function() {
    this.N = ot;
    var l = i.value.value;
    o[e] !== l && (o[e] = l, a ? t[e] = l : l ? t.setAttribute(e, l) : t.removeAttribute(e));
  }) };
}
z("unmount", function(t, e) {
  if (typeof e.type == "string") {
    var r = e.__e;
    if (r) {
      var o = r.U;
      if (o) {
        r.U = void 0;
        for (var a in o) {
          var i = o[a];
          i && i.d();
        }
      }
    }
  } else {
    var l = e.__c;
    if (l) {
      var s = l.__$u;
      s && (l.__$u = void 0, s.d());
    }
  }
  t(e);
});
z("__h", function(t, e, r, o) {
  (o < 3 || o === 9) && (e.__$f |= 2), t(e, r, o);
});
j.prototype.shouldComponentUpdate = function(t, e) {
  var r = this.__$u, o = r && r.s !== void 0;
  for (var a in e) return !0;
  if (this.__f || typeof this.u == "boolean" && this.u === !0) {
    var i = 2 & this.__$f;
    if (!(o || i || 4 & this.__$f) || 1 & this.__$f) return !0;
  } else if (!(o || 4 & this.__$f) || 3 & this.__$f) return !0;
  for (var l in t) if (l !== "__source" && t[l] !== this.props[l]) return !0;
  for (var s in this.props) if (!(s in t)) return !0;
  return !1;
};
function wt(t, e) {
  return Ge(function() {
    return de(t, e);
  }, []);
}
var kt = function(t) {
  queueMicrotask(function() {
    queueMicrotask(t);
  });
};
function xt() {
  gt(function() {
    for (var t; t = tt.shift(); ) et.call(t);
  });
}
function ot() {
  tt.push(this) === 1 && (v.requestAnimationFrame || kt)(xt);
}
const ze = (t) => D("slot", t), $t = (t) => {
  if (t == null)
    return "";
  if (typeof t != "object")
    return t.toString();
  Array.isArray(t) && t.map((o) => o.toString().replaceAll(",", "\\,")).join(",");
  const e = Object.keys(t), r = new FormData();
  return e.forEach((o) => {
    r.append(o, t[o].toString());
  }), r;
}, St = (t, e, r) => {
  t[e] ? t[e].push(r) : t[e] = [r];
}, Ct = (t, e) => {
  var s;
  const r = (e == null ? void 0 : e.properties) ?? [], o = (e == null ? void 0 : e.adoptedStyleSheets) ?? [], a = r.filter((c) => "attribute" in c).map((c) => c.attribute.name), i = (s = r.find((c) => c.formAssociated)) == null ? void 0 : s.name;
  class l extends HTMLElement {
    constructor() {
      super();
      S(this, "_root");
      S(this, "_vdom");
      S(this, "_internals");
      S(this, "_props");
      S(this, "_dirtyProps");
      S(this, "_attributeChangeHooks");
      this._root = this.attachShadow({ mode: "open" }), this._root.adoptedStyleSheets = o, this._vdom = null, this._internals = i ? this.attachInternals() : null, this._props = {}, this._dirtyProps = {}, this._attributeChangeHooks = {}, r.forEach((f) => this.registerProperty(f));
    }
    parseAttribute(f) {
      return f.type(this.getAttribute(f.name));
    }
    registerProperty(f) {
      const n = f.name, h = i === n, u = () => this._props[n].value, y = (b, p) => {
        b !== this._props[n].value && (this._props[n].value = b, p && (this._dirtyProps[n] = !0), h && this._internals && this._internals.setFormValue($t(b)));
      };
      Object.defineProperty(this, n, {
        get: u,
        set: (b) => y(b, !0)
      });
      const k = "initialValue" in f ? f.initialValue : this.parseAttribute(f.attribute);
      if (this._props[n] = de(k), "attribute" in f) {
        const b = (p) => {
          this._dirtyProps[n] || y(f.attribute.type(p), !1);
        };
        St(this._attributeChangeHooks, n, b);
      }
    }
    connectedCallback() {
      const f = Object.fromEntries(
        ((e == null ? void 0 : e.slots) ?? []).map((h) => [
          h,
          D(ze, { name: h }, null)
        ])
      ), n = { ...this._props, ...f };
      this._vdom = D(t, n, D(ze, { name: void 0 }, null)), (this.hasAttribute("hydrate") ? Be : ae)(this._vdom, this._root);
    }
    disconnectedCallback() {
      this._vdom = null, ae(null, this._root);
    }
    attributeChangedCallback(f, n, h) {
      this._attributeChangeHooks[f] && this._attributeChangeHooks[f].forEach((u) => u(h));
    }
  }
  return S(l, "observedAttributes", a), S(l, "formAssociated", !!i), l;
}, At = (t, e, r) => {
  const o = Ct(t, r);
  return customElements.define(e, o);
}, Pt = (t) => t && t !== "false" && t !== "0" || t === "", it = (...t) => {
  const e = new CSSStyleSheet();
  return e.replaceSync(t.join("")), e;
}, Ht = "/*! destyle.css v4.0.1 | MIT License | https://github.com/nicolas-cusan/destyle.min.css */*,:before,:after{box-sizing:border-box;border-style:solid;border-width:0;min-width:0}html{line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}body{margin:0}main{display:block}p,table,blockquote,address,pre,iframe,form,figure,dl{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit;margin:0}ul,ol{margin:0;padding:0;list-style:none}dt{font-weight:700}dd{margin-left:0}hr{box-sizing:content-box;height:0;overflow:visible;border-top-width:1px;margin:0;clear:both;color:inherit}pre{font-family:monospace,monospace;font-size:inherit}address{font-style:inherit}a{background-color:transparent;text-decoration:none;color:inherit}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:inherit}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}svg,img,embed,object,iframe{vertical-align:bottom}button,input,optgroup,select,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;vertical-align:middle;color:inherit;font:inherit;background:transparent;padding:0;margin:0;border-radius:0;text-align:inherit;text-transform:inherit}button,[type=button],[type=reset],[type=submit]{cursor:pointer}button:disabled,[type=button]:disabled,[type=reset]:disabled,[type=submit]:disabled{cursor:default}:-moz-focusring{outline:auto}select:disabled{opacity:inherit}option{padding:0}fieldset{margin:0;padding:0;min-width:0}legend{padding:0}progress{vertical-align:baseline}textarea{overflow:auto}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=number]{-moz-appearance:textfield}label[for]{cursor:pointer}details{display:block}summary{display:list-item}[contenteditable]:focus{outline:auto}table{border-color:inherit;border-collapse:collapse}caption{text-align:left}td,th{vertical-align:top;padding:0}th{text-align:left;font-weight:700}:root,:host{--phi-color-palette-neutral-lighter: #ffb81cff;--phi-color-palette-neutral-base: #eeaa00ff;--phi-color-palette-neutral-darker: #cd9200ff;--phi-color-palette-neutral-bg: #eeaa0020;--phi-color-palette-neutral-outline: #eeaa0030;--phi-color-palette-danger-lighter: #fa837eff;--phi-color-palette-danger-base: #f76b68ff;--phi-color-palette-danger-darker: #e53c42ff;--phi-color-palette-danger-bg: #f76b6820;--phi-color-palette-danger-outline: #f76b6830;--phi-color-bg: #ffffffff;--phi-color-distant-fg: #ffffffff;--phi-color-fg: #000000d0;--phi-color-border: #00000040;--phi-color-neutral-bg: var(--phi-color-palette-neutral-bg);--phi-color-neutral-hover: var(--phi-color-palette-neutral-lighter);--phi-color-neutral-default: var(--phi-color-palette-neutral-base);--phi-color-neutral-active: var(--phi-color-palette-neutral-darker);--phi-color-danger-bg: var(--phi-color-palette-danger-bg);--phi-color-danger-hover: var(--phi-color-palette-danger-lighter);--phi-color-danger-default: var(--phi-color-palette-danger-base);--phi-color-danger-active: var(--phi-color-palette-danger-darker);--phi-shadow-pressable-default: 0 1px #00000040;--phi-shadow-pressable-neutral-default: 0 1px #00000020, 0 1px var(--phi-color-palette-neutral-base);--phi-shadow-pressable-neutral-hover: 0 1px #00000020, 0 1px var(--phi-color-palette-neutral-lighter);--phi-shadow-pressable-danger-default: 0 1px #00000020, 0 1px var(--phi-color-palette-danger-base);--phi-shadow-pressable-danger-hover: 0 1px #00000020, 0 1px var(--phi-color-palette-danger-lighter);--phi-shadow-focus-neutral: 0 0 0 2px var(--phi-color-palette-neutral-outline);--phi-shadow-focus-danger: 0 0 0 2px var(--phi-color-palette-danger-outline);--phi-fontsize-md: 14px;--phi-fontsize-icon-md: 17.5px;--phi-fontsize-icon-lg: 26.25px;--phi-radius-md: 8.75px;--phi-spacing-padding-sm: 4.25px ;--phi-spacing-padding-md: 13px ;--phi-spacing-margin-inline: 5.25px}@media (prefers-color-scheme: dark){:root{--phi-color-palette-neutral-lighter: #e6af47ff;--phi-color-palette-neutral-base: #d7a139ff;--phi-color-palette-neutral-darker: #c79431ff;--phi-color-palette-neutral-bg: #d7a13920;--phi-color-palette-neutral-outline: #d7a13930;--phi-color-palette-danger-lighter: #f38882ff;--phi-color-palette-danger-base: #ee736eff;--phi-color-palette-danger-darker: #e65f5cff;--phi-color-palette-danger-bg: #ee736e20;--phi-color-palette-danger-outline: #ee736e30;--phi-color-bg: #222222ff;--phi-color-distant-fg: #222222ff;--phi-color-fg: #ffffffd0;--phi-color-border: #ffffff40;--phi-color-neutral-hover: var(--phi-color-palette-neutral-darker);--phi-color-neutral-active: var(--phi-color-palette-neutral-lighter);--phi-color-danger-hover: var(--phi-color-palette-danger-darker);--phi-color-danger-active: var(--phi-color-palette-danger-lighter)}}body,:host{font-family:Helvetica Neue,Arial,Hiragino Kaku Gothic ProN,Hiragino Sans,Meiryo,sans-serif;font-size:var(--phi-fontsize-md);background-color:var(--phi-color-bg);color:var(--phi-color-fg);line-height:1.25em}", Et = it(Ht), Nt = ".phi-button{--phi-color-accent-default: var(--phi-color-neutral-default);--phi-color-accent-hover: var(--phi-color-neutral-hover);--phi-color-accent-active: var(--phi-color-neutral-active);--phi-color-accent-bg: var(--phi-color-neutral-bg);--phi-shadow-pressable-accent-default: var(--phi-shadow-pressable-neutral-default);--phi-shadow-pressable-accent-hover: var(--phi-shadow-pressable-neutral-hover);display:inline-flex;align-items:center;font-size:var(--phi-fontsize-md);height:calc(var(--phi-fontsize-md) * 3);padding:0 var(--phi-spacing-padding-md);gap:var(--phi-spacing-margin-inline);border-radius:var(--phi-radius-md);cursor:pointer;-webkit-user-select:none;user-select:none}.phi-button.danger{--phi-color-accent-default: var(--phi-color-danger-default);--phi-color-accent-hover: var(--phi-color-danger-hover);--phi-color-accent-active: var(--phi-color-danger-active);--phi-color-accent-bg: var(--phi-color-danger-bg);--phi-shadow-pressable-accent-default: var(--phi-shadow-pressable-danger-default);--phi-shadow-pressable-accent-hover: var(--phi-shadow-pressable-danger-hover)}.phi-button.primary{color:var(--phi-color-distant-fg);background-color:var(--phi-color-accent-default);border:1px solid var(--phi-color-accent-default);box-shadow:var(--phi-shadow-pressable-accent-default);transform:translateY(-1px)}.phi-button.primary:hover{color:var(--phi-color-distant-fg);background-color:var(--phi-color-accent-hover);border-color:var(--phi-color-accent-hover);box-shadow:var(--phi-shadow-pressable-accent-hover)}.phi-button.primary:active{transform:none;box-shadow:none}.phi-button.default{color:var(--phi-color-fg);background-color:transparent;border:1px solid currentColor;box-shadow:var(--phi-shadow-pressable-default);transform:translateY(-1px)}.phi-button.default:hover{color:var(--phi-color-accent-default);box-shadow:var(--phi-shadow-pressable-accent-hover)}.phi-button.default:active{transform:none;box-shadow:none}.phi-button.dotted{color:var(--phi-color-fg);background-color:transparent;border:1px dashed currentColor}.phi-button.dotted:hover:not(:active){color:var(--phi-color-accent-default)}.phi-button.dotted:active{color:var(--phi-color-accent-active);background-color:var(--phi-color-accent-bg)}.phi-button>.icon{display:inline-block;font-size:var(--phi-fontsize-icon-md);line-height:1em}", zt = ({
  onClick: t,
  danger: e,
  variant: r = "default",
  icon: o,
  children: a
}) => /* @__PURE__ */ le(
  "button",
  {
    className: `phi-button ${r} ${e ? "danger" : ""}`,
    onClick: t,
    children: [
      o && /* @__PURE__ */ le("span", { className: "icon", children: o }),
      a
    ]
  }
), Ut = it(Nt), Tt = (t) => {
  const e = (t == null ? void 0 : t.toString()) ?? "";
  return e === "default" || e === "primary" || e === "dotted" || e === "icon" ? e : "default";
}, Ft = ({ danger: t, variant: e, icon: r, children: o }) => /* @__PURE__ */ le(zt, { icon: r, danger: t.value, variant: e.value, children: o }), Mt = () => At(Ft, "phi-button", {
  // Add styles to the ShadowDOM
  adoptedStyleSheets: [Et, Ut],
  // Create slots and pass to Preact component through its properties
  // eg. When set `["icon"]`, then `<slot name="icon" />` is passed through the `name` prop
  slots: ["icon"],
  // List of states, that are both accessible from the Preact component,
  // and from the vanilla JS world.
  // Initial values will be retrieved from each corresponding attributes.
  properties: [{
    name: "danger",
    attribute: { name: "danger", type: Pt }
  }, {
    name: "variant",
    attribute: { name: "variant", type: Tt }
  }]
}), jt = () => {
  Mt();
};
export {
  jt as default
};
//# sourceMappingURL=custom-elements.js.map
