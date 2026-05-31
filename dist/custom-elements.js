var $t = Object.defineProperty;
var zt = (t, e, r) => e in t ? $t(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var P = (t, e, r) => zt(t, typeof e != "symbol" ? e + "" : e, r);
var de, _, Je, Ke, L, Ve, Qe, Xe, et, ze, we, xe, K = {}, tt = [], St = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ve = Array.isArray;
function A(t, e) {
  for (var r in e) t[r] = e[r];
  return t;
}
function Se(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function G(t, e, r) {
  var o, i, n, s = {};
  for (n in e) n == "key" ? o = e[n] : n == "ref" ? i = e[n] : s[n] = e[n];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? de.call(arguments, 2) : r), typeof t == "function" && t.defaultProps != null) for (n in t.defaultProps) s[n] === void 0 && (s[n] = t.defaultProps[n]);
  return ne(t, s, o, i, null);
}
function ne(t, e, r, o, i) {
  var n = { type: t, props: e, key: r, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: i ?? ++Je, __i: -1, __u: 0 };
  return i == null && _.vnode != null && _.vnode(n), n;
}
function X(t) {
  return t.children;
}
function Y(t, e) {
  this.props = t, this.context = e;
}
function B(t, e) {
  if (e == null) return t.__ ? B(t.__, t.__i + 1) : null;
  for (var r; e < t.__k.length; e++) if ((r = t.__k[e]) != null && r.__e != null) return r.__e;
  return typeof t.type == "function" ? B(t) : null;
}
function rt(t) {
  var e, r;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++) if ((r = t.__k[e]) != null && r.__e != null) {
      t.__e = t.__c.base = r.__e;
      break;
    }
    return rt(t);
  }
}
function We(t) {
  (!t.__d && (t.__d = !0) && L.push(t) && !se.__r++ || Ve != _.debounceRendering) && ((Ve = _.debounceRendering) || Qe)(se);
}
function se() {
  for (var t, e, r, o, i, n, s, c = 1; L.length; ) L.length > c && L.sort(Xe), t = L.shift(), c = L.length, t.__d && (r = void 0, i = (o = (e = t).__v).__e, n = [], s = [], e.__P && ((r = A({}, o)).__v = o.__v + 1, _.vnode && _.vnode(r), Ce(e.__P, r, o, e.__n, e.__P.namespaceURI, 32 & o.__u ? [i] : null, n, i ?? B(o), !!(32 & o.__u), s), r.__v = o.__v, r.__.__k[r.__i] = r, nt(n, r, s), r.__e != i && rt(r)));
  se.__r = 0;
}
function ot(t, e, r, o, i, n, s, c, p, l, d) {
  var a, v, u, m, k, y, f = o && o.__k || tt, b = e.length;
  for (p = Ct(r, e, f, p, b), a = 0; a < b; a++) (u = r.__k[a]) != null && (v = u.__i == -1 ? K : f[u.__i] || K, u.__i = a, y = Ce(t, u, v, i, n, s, c, p, l, d), m = u.__e, u.ref && v.ref != u.ref && (v.ref && He(v.ref, null, u), d.push(u.ref, u.__c || m, u)), k == null && m != null && (k = m), 4 & u.__u || v.__k === u.__k ? p = it(u, p, t) : typeof u.type == "function" && y !== void 0 ? p = y : m && (p = m.nextSibling), u.__u &= -7);
  return r.__e = k, p;
}
function Ct(t, e, r, o, i) {
  var n, s, c, p, l, d = r.length, a = d, v = 0;
  for (t.__k = new Array(i), n = 0; n < i; n++) (s = e[n]) != null && typeof s != "boolean" && typeof s != "function" ? (p = n + v, (s = t.__k[n] = typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? ne(null, s, null, null, null) : ve(s) ? ne(X, { children: s }, null, null, null) : s.constructor == null && s.__b > 0 ? ne(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : s).__ = t, s.__b = t.__b + 1, c = null, (l = s.__i = Ht(s, r, p, a)) != -1 && (a--, (c = r[l]) && (c.__u |= 2)), c == null || c.__v == null ? (l == -1 && (i > d ? v-- : i < d && v++), typeof s.type != "function" && (s.__u |= 4)) : l != p && (l == p - 1 ? v-- : l == p + 1 ? v++ : (l > p ? v-- : v++, s.__u |= 4))) : t.__k[n] = null;
  if (a) for (n = 0; n < d; n++) (c = r[n]) != null && (2 & c.__u) == 0 && (c.__e == o && (o = B(c)), st(c, c));
  return o;
}
function it(t, e, r) {
  var o, i;
  if (typeof t.type == "function") {
    for (o = t.__k, i = 0; o && i < o.length; i++) o[i] && (o[i].__ = t, e = it(o[i], e, r));
    return e;
  }
  t.__e != e && (e && t.type && !r.contains(e) && (e = B(t)), r.insertBefore(t.__e, e || null), e = t.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function Ht(t, e, r, o) {
  var i, n, s = t.key, c = t.type, p = e[r];
  if (p === null && t.key == null || p && s == p.key && c == p.type && (2 & p.__u) == 0) return r;
  if (o > (p != null && (2 & p.__u) == 0 ? 1 : 0)) for (i = r - 1, n = r + 1; i >= 0 || n < e.length; ) {
    if (i >= 0) {
      if ((p = e[i]) && (2 & p.__u) == 0 && s == p.key && c == p.type) return i;
      i--;
    }
    if (n < e.length) {
      if ((p = e[n]) && (2 & p.__u) == 0 && s == p.key && c == p.type) return n;
      n++;
    }
  }
  return -1;
}
function qe(t, e, r) {
  e[0] == "-" ? t.setProperty(e, r ?? "") : t[e] = r == null ? "" : typeof r != "number" || St.test(e) ? r : r + "px";
}
function oe(t, e, r, o, i) {
  var n, s;
  e: if (e == "style") if (typeof r == "string") t.style.cssText = r;
  else {
    if (typeof o == "string" && (t.style.cssText = o = ""), o) for (e in o) r && e in r || qe(t.style, e, "");
    if (r) for (e in r) o && r[e] == o[e] || qe(t.style, e, r[e]);
  }
  else if (e[0] == "o" && e[1] == "n") n = e != (e = e.replace(et, "$1")), s = e.toLowerCase(), e = s in t || e == "onFocusOut" || e == "onFocusIn" ? s.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + n] = r, r ? o ? r.u = o.u : (r.u = ze, t.addEventListener(e, n ? xe : we, n)) : t.removeEventListener(e, n ? xe : we, n);
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
function Pe(t) {
  return function(e) {
    if (this.l) {
      var r = this.l[e.type + t];
      if (e.t == null) e.t = ze++;
      else if (e.t < r.u) return;
      return r(_.event ? _.event(e) : e);
    }
  };
}
function Ce(t, e, r, o, i, n, s, c, p, l) {
  var d, a, v, u, m, k, y, f, b, D, q, te, R, Ne, re, Z, fe, M = e.type;
  if (e.constructor != null) return null;
  128 & r.__u && (p = !!(32 & r.__u), n = [c = e.__e = r.__e]), (d = _.__b) && d(e);
  e: if (typeof M == "function") try {
    if (f = e.props, b = "prototype" in M && M.prototype.render, D = (d = M.contextType) && o[d.__c], q = d ? D ? D.props.value : d.__ : o, r.__c ? y = (a = e.__c = r.__c).__ = a.__E : (b ? e.__c = a = new M(f, q) : (e.__c = a = new Y(f, q), a.constructor = M, a.render = Et), D && D.sub(a), a.props = f, a.state || (a.state = {}), a.context = q, a.__n = o, v = a.__d = !0, a.__h = [], a._sb = []), b && a.__s == null && (a.__s = a.state), b && M.getDerivedStateFromProps != null && (a.__s == a.state && (a.__s = A({}, a.__s)), A(a.__s, M.getDerivedStateFromProps(f, a.__s))), u = a.props, m = a.state, a.__v = e, v) b && M.getDerivedStateFromProps == null && a.componentWillMount != null && a.componentWillMount(), b && a.componentDidMount != null && a.__h.push(a.componentDidMount);
    else {
      if (b && M.getDerivedStateFromProps == null && f !== u && a.componentWillReceiveProps != null && a.componentWillReceiveProps(f, q), !a.__e && a.shouldComponentUpdate != null && a.shouldComponentUpdate(f, a.__s, q) === !1 || e.__v == r.__v) {
        for (e.__v != r.__v && (a.props = f, a.state = a.__s, a.__d = !1), e.__e = r.__e, e.__k = r.__k, e.__k.some(function(I) {
          I && (I.__ = e);
        }), te = 0; te < a._sb.length; te++) a.__h.push(a._sb[te]);
        a._sb = [], a.__h.length && s.push(a);
        break e;
      }
      a.componentWillUpdate != null && a.componentWillUpdate(f, a.__s, q), b && a.componentDidUpdate != null && a.__h.push(function() {
        a.componentDidUpdate(u, m, k);
      });
    }
    if (a.context = q, a.props = f, a.__P = t, a.__e = !1, R = _.__r, Ne = 0, b) {
      for (a.state = a.__s, a.__d = !1, R && R(e), d = a.render(a.props, a.state, a.context), re = 0; re < a._sb.length; re++) a.__h.push(a._sb[re]);
      a._sb = [];
    } else do
      a.__d = !1, R && R(e), d = a.render(a.props, a.state, a.context), a.state = a.__s;
    while (a.__d && ++Ne < 25);
    a.state = a.__s, a.getChildContext != null && (o = A(A({}, o), a.getChildContext())), b && !v && a.getSnapshotBeforeUpdate != null && (k = a.getSnapshotBeforeUpdate(u, m)), Z = d, d != null && d.type === X && d.key == null && (Z = at(d.props.children)), c = ot(t, ve(Z) ? Z : [Z], e, r, o, i, n, s, c, p, l), a.base = e.__e, e.__u &= -161, a.__h.length && s.push(a), y && (a.__E = a.__ = null);
  } catch (I) {
    if (e.__v = null, p || n != null) if (I.then) {
      for (e.__u |= p ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) c = c.nextSibling;
      n[n.indexOf(c)] = null, e.__e = c;
    } else for (fe = n.length; fe--; ) Se(n[fe]);
    else e.__e = r.__e, e.__k = r.__k;
    _.__e(I, e, r);
  }
  else n == null && e.__v == r.__v ? (e.__k = r.__k, e.__e = r.__e) : c = e.__e = Mt(r.__e, e, r, o, i, n, s, p, l);
  return (d = _.diffed) && d(e), 128 & e.__u ? void 0 : c;
}
function nt(t, e, r) {
  for (var o = 0; o < r.length; o++) He(r[o], r[++o], r[++o]);
  _.__c && _.__c(e, t), t.some(function(i) {
    try {
      t = i.__h, i.__h = [], t.some(function(n) {
        n.call(i);
      });
    } catch (n) {
      _.__e(n, i.__v);
    }
  });
}
function at(t) {
  return typeof t != "object" || t == null || t.__b && t.__b > 0 ? t : ve(t) ? t.map(at) : A({}, t);
}
function Mt(t, e, r, o, i, n, s, c, p) {
  var l, d, a, v, u, m, k, y = r.props, f = e.props, b = e.type;
  if (b == "svg" ? i = "http://www.w3.org/2000/svg" : b == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), n != null) {
    for (l = 0; l < n.length; l++) if ((u = n[l]) && "setAttribute" in u == !!b && (b ? u.localName == b : u.nodeType == 3)) {
      t = u, n[l] = null;
      break;
    }
  }
  if (t == null) {
    if (b == null) return document.createTextNode(f);
    t = document.createElementNS(i, b, f.is && f), c && (_.__m && _.__m(e, n), c = !1), n = null;
  }
  if (b == null) y === f || c && t.data == f || (t.data = f);
  else {
    if (n = n && de.call(t.childNodes), y = r.props || K, !c && n != null) for (y = {}, l = 0; l < t.attributes.length; l++) y[(u = t.attributes[l]).name] = u.value;
    for (l in y) if (u = y[l], l != "children") {
      if (l == "dangerouslySetInnerHTML") a = u;
      else if (!(l in f)) {
        if (l == "value" && "defaultValue" in f || l == "checked" && "defaultChecked" in f) continue;
        oe(t, l, null, u, i);
      }
    }
    for (l in f) u = f[l], l == "children" ? v = u : l == "dangerouslySetInnerHTML" ? d = u : l == "value" ? m = u : l == "checked" ? k = u : c && typeof u != "function" || y[l] === u || oe(t, l, u, y[l], i);
    if (d) c || a && (d.__html == a.__html || d.__html == t.innerHTML) || (t.innerHTML = d.__html), e.__k = [];
    else if (a && (t.innerHTML = ""), ot(e.type == "template" ? t.content : t, ve(v) ? v : [v], e, r, o, b == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, n, s, n ? n[0] : r.__k && B(r, 0), c, p), n != null) for (l = n.length; l--; ) Se(n[l]);
    c || (l = "value", b == "progress" && m == null ? t.removeAttribute("value") : m != null && (m !== t[l] || b == "progress" && !m || b == "option" && m != y[l]) && oe(t, l, m, y[l], i), l = "checked", k != null && k != t[l] && oe(t, l, k, y[l], i));
  }
  return t;
}
function He(t, e, r) {
  try {
    if (typeof t == "function") {
      var o = typeof t.__u == "function";
      o && t.__u(), o && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (i) {
    _.__e(i, r);
  }
}
function st(t, e, r) {
  var o, i;
  if (_.unmount && _.unmount(t), (o = t.ref) && (o.current && o.current != t.__e || He(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount) try {
      o.componentWillUnmount();
    } catch (n) {
      _.__e(n, e);
    }
    o.base = o.__P = null;
  }
  if (o = t.__k) for (i = 0; i < o.length; i++) o[i] && st(o[i], e, r || typeof t.type != "function");
  r || Se(t.__e), t.__c = t.__ = t.__e = void 0;
}
function Et(t, e, r) {
  return this.constructor(t, r);
}
function je(t, e, r) {
  var o, i, n, s;
  e == document && (e = document.documentElement), _.__ && _.__(t, e), i = (o = !1) ? null : e.__k, n = [], s = [], Ce(e, t = e.__k = G(X, null, [t]), i || K, K, e.namespaceURI, i ? null : e.firstChild ? de.call(e.childNodes) : null, n, i ? i.__e : e.firstChild, o, s), nt(n, t, s);
}
de = tt.slice, _ = { __e: function(t, e, r, o) {
  for (var i, n, s; e = e.__; ) if ((i = e.__c) && !i.__) try {
    if ((n = i.constructor) && n.getDerivedStateFromError != null && (i.setState(n.getDerivedStateFromError(t)), s = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), s = i.__d), s) return i.__E = i;
  } catch (c) {
    t = c;
  }
  throw t;
} }, Je = 0, Ke = function(t) {
  return t != null && t.constructor == null;
}, Y.prototype.setState = function(t, e) {
  var r;
  r = this.__s != null && this.__s != this.state ? this.__s : this.__s = A({}, this.state), typeof t == "function" && (t = t(A({}, r), this.props)), t && A(r, t), t != null && this.__v && (e && this._sb.push(e), We(this));
}, Y.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), We(this));
}, Y.prototype.render = X, L = [], Qe = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Xe = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, se.__r = 0, et = /(PointerCapture)$|Capture$/i, ze = 0, we = Pe(!1), xe = Pe(!0);
var Tt = 0;
function h(t, e, r, o, i, n) {
  e || (e = {});
  var s, c, p = e;
  if ("ref" in p) for (c in p = {}, e) c == "ref" ? s = e[c] : p[c] = e[c];
  var l = { type: t, props: p, key: r, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Tt, __i: -1, __u: 0, __source: i, __self: n };
  if (typeof t == "function" && (s = t.defaultProps)) for (c in s) p[c] === void 0 && (p[c] = s[c]);
  return _.vnode && _.vnode(l), l;
}
const j = (t) => t && t !== "false" && t !== "0" || t === "", T = (t) => t == null ? "" : t.toString(), E = (t) => typeof t == "number" ? t : t == null || t === "" ? void 0 : typeof t == "string" ? Number(t) : Number.NaN, me = (t) => (e) => E(e) ?? t, At = (t) => t == null || t === "" ? [] : typeof t == "string" ? (
  // non-empty string
  t.split(",")
) : (
  // boolean or number
  [t.toString()]
), ct = (t) => (e) => {
  const r = (e == null ? void 0 : e.toString()) ?? "";
  return t.find((o) => o === r) ?? void 0;
}, V = (t, e) => {
  const r = ct(e);
  return (o) => r(o) ?? t;
}, lt = (t) => {
  const e = ct(t);
  return (r) => e(r) ?? E(r);
}, ge = (t, e = []) => {
  const r = lt([t, ...e]);
  return (o) => r(o) ?? t;
};
var Q, w, be, Le, ce = 0, pt = [], x = _, Ue = x.__b, Be = x.__r, Fe = x.diffed, Oe = x.__c, De = x.unmount, Re = x.__;
function Me(t, e) {
  x.__h && x.__h(w, t, ce || e), ce = 0;
  var r = w.__H || (w.__H = { __: [], __h: [] });
  return t >= r.__.length && r.__.push({}), r.__[t];
}
function ht(t) {
  return ce = 1, Nt(dt, t);
}
function Nt(t, e, r) {
  var o = Me(Q++, 2);
  if (o.t = t, !o.__c && (o.__ = [dt(void 0, e), function(c) {
    var p = o.__N ? o.__N[0] : o.__[0], l = o.t(p, c);
    p !== l && (o.__N = [l, o.__[1]], o.__c.setState({}));
  }], o.__c = w, !w.__f)) {
    var i = function(c, p, l) {
      if (!o.__c.__H) return !0;
      var d = o.__c.__H.__.filter(function(v) {
        return !!v.__c;
      });
      if (d.every(function(v) {
        return !v.__N;
      })) return !n || n.call(this, c, p, l);
      var a = o.__c.props !== c;
      return d.forEach(function(v) {
        if (v.__N) {
          var u = v.__[0];
          v.__ = v.__N, v.__N = void 0, u !== v.__[0] && (a = !0);
        }
      }), n && n.call(this, c, p, l) || a;
    };
    w.__f = !0;
    var n = w.shouldComponentUpdate, s = w.componentWillUpdate;
    w.componentWillUpdate = function(c, p, l) {
      if (this.__e) {
        var d = n;
        n = void 0, i(c, p, l), n = d;
      }
      s && s.call(this, c, p, l);
    }, w.shouldComponentUpdate = i;
  }
  return o.__N || o.__;
}
function Vt(t, e) {
  var r = Me(Q++, 3);
  !x.__s && ut(r.__H, e) && (r.__ = t, r.u = e, w.__H.__h.push(r));
}
function W(t, e) {
  var r = Me(Q++, 7);
  return ut(r.__H, e) && (r.__ = t(), r.__H = e, r.__h = t), r.__;
}
function H(t, e) {
  return ce = 8, W(function() {
    return t;
  }, e);
}
function Wt() {
  for (var t; t = pt.shift(); ) if (t.__P && t.__H) try {
    t.__H.__h.forEach(ae), t.__H.__h.forEach(ke), t.__H.__h = [];
  } catch (e) {
    t.__H.__h = [], x.__e(e, t.__v);
  }
}
x.__b = function(t) {
  w = null, Ue && Ue(t);
}, x.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), Re && Re(t, e);
}, x.__r = function(t) {
  Be && Be(t), Q = 0;
  var e = (w = t.__c).__H;
  e && (be === w ? (e.__h = [], w.__h = [], e.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.u = r.__N = void 0;
  })) : (e.__h.forEach(ae), e.__h.forEach(ke), e.__h = [], Q = 0)), be = w;
}, x.diffed = function(t) {
  Fe && Fe(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (pt.push(e) !== 1 && Le === x.requestAnimationFrame || ((Le = x.requestAnimationFrame) || qt)(Wt)), e.__H.__.forEach(function(r) {
    r.u && (r.__H = r.u), r.u = void 0;
  })), be = w = null;
}, x.__c = function(t, e) {
  e.some(function(r) {
    try {
      r.__h.forEach(ae), r.__h = r.__h.filter(function(o) {
        return !o.__ || ke(o);
      });
    } catch (o) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], x.__e(o, r.__v);
    }
  }), Oe && Oe(t, e);
}, x.unmount = function(t) {
  De && De(t);
  var e, r = t.__c;
  r && r.__H && (r.__H.__.forEach(function(o) {
    try {
      ae(o);
    } catch (i) {
      e = i;
    }
  }), r.__H = void 0, e && x.__e(e, r.__v));
};
var Ze = typeof requestAnimationFrame == "function";
function qt(t) {
  var e, r = function() {
    clearTimeout(o), Ze && cancelAnimationFrame(e), setTimeout(t);
  }, o = setTimeout(r, 35);
  Ze && (e = requestAnimationFrame(r));
}
function ae(t) {
  var e = w, r = t.__c;
  typeof r == "function" && (t.__c = void 0, r()), w = e;
}
function ke(t) {
  var e = w;
  t.__c = t.__(), w = e;
}
function ut(t, e) {
  return !t || t.length !== e.length || e.some(function(r, o) {
    return r !== t[o];
  });
}
function dt(t, e) {
  return typeof e == "function" ? e(t) : e;
}
var Pt = Symbol.for("preact-signals");
function _e() {
  if (N > 1)
    N--;
  else {
    var t, e = !1;
    for (function() {
      var i = pe;
      for (pe = void 0; i !== void 0; )
        i.S.v === i.v && (i.S.i = i.i), i = i.o;
    }(); J !== void 0; ) {
      var r = J;
      for (J = void 0, le++; r !== void 0; ) {
        var o = r.u;
        if (r.u = void 0, r.f &= -3, !(8 & r.f) && _t(r)) try {
          r.c();
        } catch (i) {
          e || (t = i, e = !0);
        }
        r = o;
      }
    }
    if (le = 0, N--, e) throw t;
  }
}
function jt(t) {
  if (N > 0) return t();
  $e = ++Lt, N++;
  try {
    return t();
  } finally {
    _e();
  }
}
var g = void 0;
function Ee(t) {
  var e = g;
  g = void 0;
  try {
    return t();
  } finally {
    g = e;
  }
}
var J = void 0, N = 0, le = 0, Lt = 0, $e = 0, pe = void 0, he = 0;
function vt(t) {
  if (g !== void 0) {
    var e = t.n;
    if (e === void 0 || e.t !== g)
      return e = { i: 0, S: t, p: g.s, n: void 0, t: g, e: void 0, x: void 0, r: e }, g.s !== void 0 && (g.s.n = e), g.s = e, t.n = e, 32 & g.f && t.S(e), e;
    if (e.i === -1)
      return e.i = 0, e.n !== void 0 && (e.n.p = e.p, e.p !== void 0 && (e.p.n = e.n), e.p = g.s, e.n = void 0, g.s.n = e, g.s = e), e;
  }
}
function $(t, e) {
  this.v = t, this.i = 0, this.n = void 0, this.t = void 0, this.l = 0, this.W = e == null ? void 0 : e.watched, this.Z = e == null ? void 0 : e.unwatched, this.name = e == null ? void 0 : e.name;
}
$.prototype.brand = Pt;
$.prototype.h = function() {
  return !0;
};
$.prototype.S = function(t) {
  var e = this, r = this.t;
  r !== t && t.e === void 0 && (t.x = r, this.t = t, r !== void 0 ? r.e = t : Ee(function() {
    var o;
    (o = e.W) == null || o.call(e);
  }));
};
$.prototype.U = function(t) {
  var e = this;
  if (this.t !== void 0) {
    var r = t.e, o = t.x;
    r !== void 0 && (r.x = o, t.e = void 0), o !== void 0 && (o.e = r, t.x = void 0), t === this.t && (this.t = o, o === void 0 && Ee(function() {
      var i;
      (i = e.Z) == null || i.call(e);
    }));
  }
};
$.prototype.subscribe = function(t) {
  var e = this;
  return ee(function() {
    var r = e.value, o = g;
    g = void 0;
    try {
      t(r);
    } finally {
      g = o;
    }
  }, { name: "sub" });
};
$.prototype.valueOf = function() {
  return this.value;
};
$.prototype.toString = function() {
  return this.value + "";
};
$.prototype.toJSON = function() {
  return this.value;
};
$.prototype.peek = function() {
  var t = this;
  return Ee(function() {
    return t.value;
  });
};
Object.defineProperty($.prototype, "value", { get: function() {
  var t = vt(this);
  return t !== void 0 && (t.i = this.i), this.v;
}, set: function(t) {
  if (t !== this.v) {
    if (le > 100) throw new Error("Cycle detected");
    (function(r) {
      N !== 0 && le === 0 && r.l !== $e && (r.l = $e, pe = { S: r, v: r.v, i: r.i, o: pe });
    })(this), this.v = t, this.i++, he++, N++;
    try {
      for (var e = this.t; e !== void 0; e = e.x) e.t.N();
    } finally {
      _e();
    }
  }
} });
function Te(t, e) {
  return new $(t, e);
}
function _t(t) {
  for (var e = t.s; e !== void 0; e = e.n) if (e.S.i !== e.i || !e.S.h() || e.S.i !== e.i) return !0;
  return !1;
}
function ft(t) {
  for (var e = t.s; e !== void 0; e = e.n) {
    var r = e.S.n;
    if (r !== void 0 && (e.r = r), e.S.n = e, e.i = -1, e.n === void 0) {
      t.s = e;
      break;
    }
  }
}
function mt(t) {
  for (var e = t.s, r = void 0; e !== void 0; ) {
    var o = e.p;
    e.i === -1 ? (e.S.U(e), o !== void 0 && (o.n = e.n), e.n !== void 0 && (e.n.p = o)) : r = e, e.S.n = e.r, e.r !== void 0 && (e.r = void 0), e = o;
  }
  t.s = r;
}
function U(t, e) {
  $.call(this, void 0), this.x = t, this.s = void 0, this.g = he - 1, this.f = 4, this.W = e == null ? void 0 : e.watched, this.Z = e == null ? void 0 : e.unwatched, this.name = e == null ? void 0 : e.name;
}
U.prototype = new $();
U.prototype.h = function() {
  if (this.f &= -3, 1 & this.f) return !1;
  if ((36 & this.f) == 32 || (this.f &= -5, this.g === he)) return !0;
  if (this.g = he, this.f |= 1, this.i > 0 && !_t(this))
    return this.f &= -2, !0;
  var t = g;
  try {
    ft(this), g = this;
    var e = this.x();
    (16 & this.f || this.v !== e || this.i === 0) && (this.v = e, this.f &= -17, this.i++);
  } catch (r) {
    this.v = r, this.f |= 16, this.i++;
  }
  return g = t, mt(this), this.f &= -2, !0;
};
U.prototype.S = function(t) {
  if (this.t === void 0) {
    this.f |= 36;
    for (var e = this.s; e !== void 0; e = e.n) e.S.S(e);
  }
  $.prototype.S.call(this, t);
};
U.prototype.U = function(t) {
  if (this.t !== void 0 && ($.prototype.U.call(this, t), this.t === void 0)) {
    this.f &= -33;
    for (var e = this.s; e !== void 0; e = e.n) e.S.U(e);
  }
};
U.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var t = this.t; t !== void 0; t = t.x) t.t.N();
  }
};
Object.defineProperty(U.prototype, "value", { get: function() {
  if (1 & this.f) throw new Error("Cycle detected");
  var t = vt(this);
  if (this.h(), t !== void 0 && (t.i = this.i), 16 & this.f) throw this.v;
  return this.v;
} });
function Ie(t, e) {
  return new U(t, e);
}
function gt(t) {
  var e = t.m;
  if (t.m = void 0, typeof e == "function") {
    N++;
    var r = g;
    g = void 0;
    try {
      e();
    } catch (o) {
      throw t.f &= -2, t.f |= 8, Ae(t), o;
    } finally {
      g = r, _e();
    }
  }
}
function Ae(t) {
  for (var e = t.s; e !== void 0; e = e.n) e.S.U(e);
  t.x = void 0, t.s = void 0, gt(t);
}
function Ut(t) {
  if (g !== this) throw new Error("Out-of-order effect");
  mt(this), g = t, this.f &= -2, 8 & this.f && Ae(this), _e();
}
function F(t, e) {
  this.x = t, this.m = void 0, this.s = void 0, this.u = void 0, this.f = 32, this.name = e == null ? void 0 : e.name;
}
F.prototype.c = function() {
  var t = this.S();
  try {
    if (8 & this.f || this.x === void 0) return;
    var e = this.x();
    typeof e == "function" && (this.m = e);
  } finally {
    t();
  }
};
F.prototype.S = function() {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= 1, this.f &= -9, gt(this), ft(this), N++;
  var t = g;
  return g = this, Ut.bind(this, t);
};
F.prototype.N = function() {
  2 & this.f || (this.f |= 2, this.u = J, J = this);
};
F.prototype.d = function() {
  this.f |= 8, 1 & this.f || Ae(this);
};
F.prototype.dispose = function() {
  this.d();
};
function ee(t, e) {
  var r = new F(t, e);
  try {
    r.c();
  } catch (i) {
    throw r.d(), i;
  }
  var o = r.d.bind(r);
  return o[Symbol.dispose] = o, o;
}
var bt, ie, Bt = typeof window < "u" && !!window.__PREACT_SIGNALS_DEVTOOLS__, yt = [];
ee(function() {
  bt = this.N;
})();
function O(t, e) {
  _[t] = e.bind(null, _[t] || function() {
  });
}
function ue(t) {
  if (ie) {
    var e = ie;
    ie = void 0, e();
  }
  ie = t && t.S();
}
function wt(t) {
  var e = this, r = t.data, o = Ot(r);
  o.value = r;
  var i = W(function() {
    for (var c = e, p = e.__v; p = p.__; ) if (p.__c) {
      p.__c.__$f |= 4;
      break;
    }
    var l = Ie(function() {
      var u = o.value.value;
      return u === 0 ? 0 : u === !0 ? "" : u || "";
    }), d = Ie(function() {
      return !Array.isArray(l.value) && !Ke(l.value);
    }), a = ee(function() {
      if (this.N = xt, d.value) {
        var u = l.value;
        c.__v && c.__v.__e && c.__v.__e.nodeType === 3 && (c.__v.__e.data = u);
      }
    }), v = e.__$u.d;
    return e.__$u.d = function() {
      a(), v.call(this);
    }, [d, l];
  }, []), n = i[0], s = i[1];
  return n.value ? s.peek() : s.value;
}
wt.displayName = "ReactiveTextNode";
Object.defineProperties($.prototype, { constructor: { configurable: !0, value: void 0 }, type: { configurable: !0, value: wt }, props: { configurable: !0, get: function() {
  var t = this;
  return { data: { get value() {
    return t.value;
  } } };
} }, __b: { configurable: !0, value: 1 } });
O("__b", function(t, e) {
  if (typeof e.type == "string") {
    var r, o = e.props;
    for (var i in o) if (i !== "children") {
      var n = o[i];
      n instanceof $ && (r || (e.__np = r = {}), r[i] = n, o[i] = n.peek());
    }
  }
  t(e);
});
O("__r", function(t, e) {
  if (t(e), e.type !== X) {
    ue();
    var r, o = e.__c;
    o && (o.__$f &= -2, (r = o.__$u) === void 0 && (o.__$u = r = function(i, n) {
      var s;
      return ee(function() {
        s = this;
      }, { name: n }), s.c = i, s;
    }(function() {
      var i;
      Bt && ((i = r.y) == null || i.call(r)), o.__$f |= 1, o.setState({});
    }, typeof e.type == "function" ? e.type.displayName || e.type.name : ""))), ue(r);
  }
});
O("__e", function(t, e, r, o) {
  ue(), t(e, r, o);
});
O("diffed", function(t, e) {
  ue();
  var r;
  if (typeof e.type == "string" && (r = e.__e)) {
    var o = e.__np, i = e.props;
    if (o) {
      var n = r.U;
      if (n) for (var s in n) {
        var c = n[s];
        c !== void 0 && !(s in o) && (c.d(), n[s] = void 0);
      }
      else
        n = {}, r.U = n;
      for (var p in o) {
        var l = n[p], d = o[p];
        l === void 0 ? (l = Ft(r, p, d), n[p] = l) : l.o(d, i);
      }
    }
  }
  t(e);
});
function Ft(t, e, r, o) {
  var i = e in t && t.ownerSVGElement === void 0, n = Te(r), s = r.peek();
  return { o: function(c, p) {
    n.value = c, s = c.peek();
  }, d: ee(function() {
    this.N = xt;
    var c = n.value.value;
    s !== c ? (s = void 0, i ? t[e] = c : c != null && (c !== !1 || e[4] === "-") ? t.setAttribute(e, c) : t.removeAttribute(e)) : s = void 0;
  }) };
}
O("unmount", function(t, e) {
  if (typeof e.type == "string") {
    var r = e.__e;
    if (r) {
      var o = r.U;
      if (o) {
        r.U = void 0;
        for (var i in o) {
          var n = o[i];
          n && n.d();
        }
      }
    }
    var s = e.__np;
    if (s) {
      var c = e.props;
      for (var p in s) c[p] = s[p];
    }
    e.__np = void 0;
  } else {
    var l = e.__c;
    if (l) {
      var d = l.__$u;
      d && (l.__$u = void 0, d.d());
    }
  }
  t(e);
});
O("__h", function(t, e, r, o) {
  (o < 3 || o === 9) && (e.__$f |= 2), t(e, r, o);
});
Y.prototype.shouldComponentUpdate = function(t, e) {
  if (this.__R) return !0;
  var r = this.__$u, o = r && r.s !== void 0;
  for (var i in e) return !0;
  if (this.__f || typeof this.u == "boolean" && this.u === !0) {
    var n = 2 & this.__$f;
    if (!(o || n || 4 & this.__$f) || 1 & this.__$f) return !0;
  } else if (!(o || 4 & this.__$f) || 3 & this.__$f) return !0;
  for (var s in t) if (s !== "__source" && t[s] !== this.props[s]) return !0;
  for (var c in this.props) if (!(c in t)) return !0;
  return !1;
};
function Ot(t, e) {
  return W(function() {
    return Te(t, e);
  }, []);
}
var Dt = function(t) {
  queueMicrotask(function() {
    queueMicrotask(t);
  });
};
function Rt() {
  jt(function() {
    for (var t; t = yt.shift(); ) bt.call(t);
  });
}
function xt() {
  yt.push(this) === 1 && (_.requestAnimationFrame || Dt)(Rt);
}
const Ge = (t) => G("slot", t), Ye = (t) => {
  if (t == null)
    return "";
  if (typeof t == "boolean")
    return t ? "1" : "0";
  if (typeof t != "object")
    return t.toString();
  if (Array.isArray(t))
    return t.map((o) => o.toString().replaceAll(",", "\\,")).join(",");
  const e = Object.keys(t), r = new FormData();
  for (const o of e)
    r.append(o, t[o].toString());
  return r;
}, Zt = (t, e = {}) => {
  var l, d;
  const r = e.properties ?? [], o = e.slots ?? [], i = ((l = e.adoptedStyleSheets) == null ? void 0 : l.filter((a) => !!a)) ?? [], n = Object.fromEntries(
    r.filter((a) => "attribute" in a).map((a) => [a.attribute.name, { prop: a.name, parser: a.attribute.type }])
  ), s = Object.keys(n), c = (d = r.find((a) => a.formAssociated)) == null ? void 0 : d.name;
  class p extends HTMLElement {
    constructor() {
      super();
      P(this, "_root");
      P(this, "_internals");
      P(this, "_props");
      P(this, "_dirtyAttrs");
      P(this, "_frameRequested", !1);
      this._root = this.attachShadow({ mode: "open" }), this._root.adoptedStyleSheets = i, this._internals = c ? this.attachInternals() : null, this._dirtyAttrs = {}, this._props = Object.fromEntries(
        r.map((u) => {
          const m = "initialValue" in u ? u.initialValue : this.parseAttribute(u.attribute);
          return c === u.name && this._internals && this._internals.setFormValue(Ye(m)), [u.name, Te(m)];
        })
      );
    }
    parseAttribute(u) {
      return u.type(this.getAttribute(u.name));
    }
    setProp(u, m, k) {
      this._props[u].value !== m && (this._props[u].value = m, k && (this._dirtyAttrs[u] = !0), c === u && this._internals && this._internals.setFormValue(Ye(m)));
    }
    connectedCallback() {
      const u = Object.fromEntries(
        o.map((y) => [y, G(Ge, { name: y }, null)])
      ), m = { $el: this, ...this._props, ...u }, k = G(t, m, G(Ge, { name: void 0 }, null));
      je(k, this._root);
    }
    disconnectedCallback() {
      je(null, this._root);
    }
    attributeChangedCallback(u, m, k) {
      const { parser: y, prop: f } = n[u];
      this._dirtyAttrs[f] || this.setProp(f, y(k), !1);
    }
  }
  P(p, "observedAttributes", s), P(p, "formAssociated", !!c);
  for (const a of r)
    Object.defineProperty(p.prototype, a.name, {
      get() {
        return this._props[a.name].value;
      },
      set(v) {
        this.setProp(a.name, v, !0);
      }
    });
  return p;
}, S = (t, e, r = {}) => {
  const o = Zt(t, r);
  return customElements.define(e, o);
}, z = (...t) => {
  if (typeof window > "u")
    return null;
  const e = new CSSStyleSheet();
  return e.replaceSync(t.join("")), e;
}, It = ({
  onClick: t,
  danger: e,
  variant: r = "default",
  icon: o,
  style: i,
  children: n
}) => /* @__PURE__ */ h(
  "button",
  {
    type: "button",
    class: `phi-button ${r} ${e ? "danger" : ""}`,
    style: i,
    onClick: t,
    children: [
      o && /* @__PURE__ */ h("span", { class: "icon", children: o }),
      n
    ]
  }
), Gt = "/*! destyle.css v4.0.1 | MIT License | https://github.com/nicolas-cusan/destyle.min.css */*,:before,:after{box-sizing:border-box;border-style:solid;border-width:0;min-width:0}html{line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}body{margin:0}main{display:block}p,table,blockquote,address,pre,iframe,form,figure,dl{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit;margin:0}ul,ol{margin:0;padding:0;list-style:none}dt{font-weight:700}dd{margin-left:0}hr{box-sizing:content-box;height:0;overflow:visible;border-top-width:1px;margin:0;clear:both;color:inherit}pre{font-family:monospace,monospace;font-size:inherit}address{font-style:inherit}a{background-color:transparent;text-decoration:none;color:inherit}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:inherit}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}svg,img,embed,object,iframe{vertical-align:bottom}button,input,optgroup,select,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;vertical-align:middle;color:inherit;font:inherit;background:transparent;padding:0;margin:0;border-radius:0;text-align:inherit;text-transform:inherit}button,[type=button],[type=reset],[type=submit]{cursor:pointer}button:disabled,[type=button]:disabled,[type=reset]:disabled,[type=submit]:disabled{cursor:default}:-moz-focusring{outline:auto}select:disabled{opacity:inherit}option{padding:0}fieldset{margin:0;padding:0;min-width:0}legend{padding:0}progress{vertical-align:baseline}textarea{overflow:auto}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=number]{-moz-appearance:textfield}label[for]{cursor:pointer}details{display:block}summary{display:list-item}[contenteditable]:focus{outline:auto}table{border-color:inherit;border-collapse:collapse}caption{text-align:left}td,th{vertical-align:top;padding:0}th{text-align:left;font-weight:700}:root,:host{--phi-color-bg: var(--phi-color-palette-bg);--phi-color-distant-fg: var(--phi-color-palette-bg);--phi-color-fg: var(--phi-color-palette-fg);--phi-color-border: var(--phi-color-palette-border);--phi-color-neutral-bg: var(--phi-color-palette-neutral-bg);--phi-color-neutral-hover: var(--phi-color-palette-neutral-weaker);--phi-color-neutral-default: var(--phi-color-palette-neutral-base);--phi-color-neutral-active: var(--phi-color-palette-neutral-stronger);--phi-color-danger-bg: var(--phi-color-palette-danger-bg);--phi-color-danger-hover: var(--phi-color-palette-danger-weaker);--phi-color-danger-default: var(--phi-color-palette-danger-base);--phi-color-danger-active: var(--phi-color-palette-danger-stronger);--phi-shadow-pressable-default: 0 1px var(--phi-color-palette-border);--phi-shadow-pressable-neutral-default: 0 1px var(--phi-color-palette-shadow), 0 1px var(--phi-color-palette-neutral-base);--phi-shadow-pressable-neutral-hover: 0 1px var(--phi-color-palette-shadow), 0 1px var(--phi-color-palette-neutral-weaker);--phi-shadow-pressable-danger-default: 0 1px var(--phi-color-palette-shadow), 0 1px var(--phi-color-palette-danger-base);--phi-shadow-pressable-danger-hover: 0 1px var(--phi-color-palette-shadow), 0 1px var(--phi-color-palette-danger-weaker);--phi-shadow-focus-neutral: 0 0 0 2px var(--phi-color-palette-neutral-outline);--phi-shadow-focus-danger: 0 0 0 2px var(--phi-color-palette-danger-outline);--phi-lineheight: 1.25rem;--phi-fontsize-md: 1rem;--phi-fontsize-icon-md: 1.25rem;--phi-fontsize-icon-lg: 1.875rem;--phi-fontsize-checkbox: 1.125rem;--phi-size-icon-button: 2.5rem;--phi-size-input-sm: 2rem;--phi-size-input-md: 3rem;--phi-size-range-track: .625rem;--phi-size-range-thumb-scale: 2;--phi-radius-sm: .25rem;--phi-radius-md: .625rem;--phi-spacing-padding-sm: .625rem;--phi-spacing-padding-md: 1rem;--phi-spacing-margin-sm: .25rem;--phi-spacing-margin-md: .5rem;--phi-spacing-horizontal-space: .375rem}*:focus-visible{outline:none}", C = z(Gt), Yt = ".phi-button{--phi-color-accent-default: var(--phi-color-neutral-default);--phi-color-accent-hover: var(--phi-color-neutral-hover);--phi-color-accent-active: var(--phi-color-neutral-active);--phi-color-accent-bg: var(--phi-color-neutral-bg);--phi-shadow-pressable-accent-default: var(--phi-shadow-pressable-neutral-default);--phi-shadow-pressable-accent-hover: var(--phi-shadow-pressable-neutral-hover);display:flex;width:100%;align-items:center;justify-content:center;font-size:var(--phi-fontsize-md);height:var(--phi-size-input-md);padding:0 var(--phi-spacing-padding-md);gap:var(--phi-spacing-horizontal-space);border-radius:var(--phi-radius-md);cursor:pointer;-webkit-user-select:none;user-select:none}.phi-button.danger{--phi-color-accent-default: var(--phi-color-danger-default);--phi-color-accent-hover: var(--phi-color-danger-hover);--phi-color-accent-active: var(--phi-color-danger-active);--phi-color-accent-bg: var(--phi-color-danger-bg);--phi-shadow-pressable-accent-default: var(--phi-shadow-pressable-danger-default);--phi-shadow-pressable-accent-hover: var(--phi-shadow-pressable-danger-hover)}.phi-button.primary{color:var(--phi-color-distant-fg);background-color:var(--phi-color-accent-default);box-shadow:var(--phi-shadow-pressable-accent-default);transform:translateY(-1px)}.phi-button.primary:hover{color:var(--phi-color-distant-fg);background-color:var(--phi-color-accent-hover);box-shadow:var(--phi-shadow-pressable-accent-hover)}.phi-button.primary:active{transform:none;box-shadow:none}.phi-button.default{color:var(--phi-color-fg);background-color:transparent;border:1px solid currentColor;box-shadow:var(--phi-shadow-pressable-default);transform:translateY(-1px)}.phi-button.default:hover{color:var(--phi-color-accent-default);box-shadow:var(--phi-shadow-pressable-accent-hover)}.phi-button.default:active{transform:none;box-shadow:none}.phi-button.dotted{color:var(--phi-color-fg);background-color:transparent;border:1px dashed currentColor}.phi-button.dotted:hover:not(:active){color:var(--phi-color-accent-default)}.phi-button.dotted:active{color:var(--phi-color-accent-active);background-color:var(--phi-color-accent-bg)}.phi-button>.icon{display:inline-block;font-size:var(--phi-fontsize-icon-md);line-height:1em}", Jt = z(Yt), Kt = ({ danger: t, variant: e, icon: r, children: o }) => /* @__PURE__ */ h(It, { icon: r, danger: t.value, variant: e.value, children: o }), Qt = () => S(Kt, "phi-button", {
  adoptedStyleSheets: [C, Jt],
  slots: ["icon"],
  properties: [{
    name: "danger",
    attribute: { name: "danger", type: j }
  }, {
    name: "variant",
    attribute: { name: "variant", type: V("default", ["primary", "dotted"]) }
  }]
}), Xt = ({
  onClick: t,
  danger: e,
  style: r,
  children: o
}) => /* @__PURE__ */ h(
  "button",
  {
    type: "button",
    class: `phi-icon-button ${e ? "danger" : ""}`,
    style: r,
    onClick: t,
    children: o
  }
), er = ".phi-icon-button{--phi-color-accent-default: var(--phi-color-neutral-default);--phi-color-accent-active: var(--phi-color-neutral-active);--phi-color-accent-bg: var(--phi-color-neutral-bg);display:inline-flex;align-items:center;justify-content:center;width:var(--phi-size-icon-button);height:var(--phi-size-icon-button);font-size:var(--phi-fontsize-icon-lg);line-height:1em;border-radius:50%;-webkit-user-select:none;user-select:none;cursor:pointer;color:var(--phi-color-border);background-color:transparent}.phi-icon-button.danger{--phi-color-accent-default: var(--phi-color-danger-default);--phi-color-accent-active: var(--phi-color-danger-active);--phi-color-accent-bg: var(--phi-color-danger-bg)}.phi-icon-button:hover:not(:active){color:var(--phi-color-accent-default)}.phi-icon-button:active{color:var(--phi-color-accent-active);background-color:var(--phi-color-accent-bg)}", tr = z(er), rr = ({ danger: t, children: e }) => /* @__PURE__ */ h(Xt, { danger: t.value, children: e }), or = () => S(rr, "phi-icon-button", {
  adoptedStyleSheets: [C, tr],
  properties: [{
    name: "danger",
    attribute: { name: "danger", type: j }
  }]
}), ir = ({
  onClick: t,
  danger: e,
  style: r,
  children: o
}) => /* @__PURE__ */ h(
  "button",
  {
    type: "button",
    class: `phi-text-button ${e ? "danger" : ""}`,
    onClick: t,
    style: r,
    children: o
  }
), nr = ".phi-text-button{--phi-color-accent-default: var(--phi-color-neutral-default);--phi-color-accent-active: var(--phi-color-neutral-active);--phi-color-accent-bg: var(--phi-color-neutral-bg);display:inline;font-size:var(--phi-fontsize-md);cursor:pointer;-webkit-user-select:none;user-select:none;color:var(--phi-color-fg);background-color:transparent;border-bottom:1px dotted currentColor}.phi-text-button.danger{--phi-color-accent-default: var(--phi-color-danger-default);--phi-color-accent-active: var(--phi-color-danger-active);--phi-color-accent-bg: var(--phi-color-danger-bg)}.phi-text-button:hover:not(:active){color:var(--phi-color-accent-default)}.phi-text-button:active{color:var(--phi-color-accent-active);background-color:var(--phi-color-accent-bg)}", ar = z(nr), sr = ({ danger: t, children: e }) => /* @__PURE__ */ h(ir, { danger: t.value, children: e }), cr = () => S(sr, "phi-text-button", {
  adoptedStyleSheets: [C, ar],
  properties: [{
    name: "danger",
    attribute: { name: "danger", type: j }
  }]
}), lr = ({ gap: t, align: e = "left", style: r, children: o }) => /* @__PURE__ */ h("div", { class: `phi-group ${t} ${e}`, style: r, children: o }), pr = ".phi-group{display:flex;width:100%;flex-wrap:wrap}.phi-group.left{justify-content:flex-start}.phi-group.right{justify-content:flex-end}.phi-group.center{justify-content:center}.phi-group.space-between{justify-content:space-between}.phi-group.md{gap:var(--phi-spacing-margin-md)}.phi-group.sm{gap:var(--phi-spacing-margin-sm)}", hr = z(pr), ur = ({ gap: t, align: e, children: r }) => /* @__PURE__ */ h(lr, { gap: t.value, align: e.value, children: r }), dr = () => S(ur, "phi-group", {
  adoptedStyleSheets: [C, hr],
  properties: [{
    name: "gap",
    attribute: { name: "gap", type: V("md", ["sm"]) }
  }, {
    name: "align",
    attribute: { name: "align", type: V("left", ["center", "right", "space-between"]) }
  }]
}), vr = ({ gap: t, style: e, children: r }) => /* @__PURE__ */ h("div", { class: `phi-stack ${t}`, style: e, children: r }), _r = ".phi-stack{display:flex;width:100%;flex-direction:column}.phi-stack.md{gap:var(--phi-spacing-margin-md)}.phi-stack.sm{gap:var(--phi-spacing-margin-sm)}", fr = z(_r), mr = ({ gap: t, children: e }) => /* @__PURE__ */ h(vr, { gap: t.value, children: e }), gr = () => S(mr, "phi-stack", {
  adoptedStyleSheets: [C, fr],
  properties: [{
    name: "gap",
    attribute: { name: "gap", type: V("md", ["sm"]) }
  }]
}), ye = (t) => typeof t == "number" ? `${t}px` : t, br = ({
  gap: t,
  align: e = "left",
  cols: r = "auto-fit",
  colWidth: o,
  colMinWidth: i = "min-content",
  colMaxWidth: n = "min-content",
  style: s,
  children: c
}) => {
  const p = W(() => {
    const l = o ? ye(o) : `minmax(${ye(i)}, ${ye(n)})`;
    return `repeat(${r}, ${l})`;
  }, [r, o, i, n]);
  return /* @__PURE__ */ h(
    "div",
    {
      class: `phi-grid ${t} ${e}`,
      style: { gridTemplateColumns: p, ...s },
      children: c
    }
  );
}, yr = ".phi-grid{display:grid;width:100%}.phi-grid.left{justify-content:flex-start}.phi-grid.right{justify-content:flex-end}.phi-grid.center{justify-content:center}.phi-grid.space-between{justify-content:space-between}.phi-grid.md{gap:var(--phi-spacing-margin-md)}.phi-grid.sm{gap:var(--phi-spacing-margin-sm)}", wr = z(yr), xr = ({ gap: t, align: e, cols: r, colWidth: o, colMinWidth: i, colMaxWidth: n, children: s }) => /* @__PURE__ */ h(
  br,
  {
    gap: t.value,
    align: e.value,
    cols: r.value,
    colWidth: o.value,
    colMinWidth: i.value,
    colMaxWidth: n.value,
    children: s
  }
), kr = () => S(xr, "phi-grid", {
  adoptedStyleSheets: [C, wr],
  properties: [{
    name: "gap",
    attribute: { name: "gap", type: V("md", ["sm"]) }
  }, {
    name: "align",
    attribute: { name: "align", type: V("left", ["center", "right", "space-between"]) }
  }, {
    name: "cols",
    attribute: {
      name: "cols",
      type: ge("auto-fit")
    }
  }, {
    name: "colWidth",
    attribute: {
      name: "col-width",
      type: lt(["max-content", "min-content"])
    }
  }, {
    name: "colMinWidth",
    attribute: {
      name: "col-min-width",
      type: ge("max-content", ["min-content"])
    }
  }, {
    name: "colMaxWidth",
    attribute: {
      name: "col-max-width",
      type: ge("max-content", ["min-content"])
    }
  }]
}), $r = ({
  gap: t,
  configuration: e,
  style: r,
  children: o
}) => {
  const [i, n] = ht(() => document.body.clientWidth), s = W(() => e.sort((p, l) => l.width - p.width), [e]), c = W(() => (s.find((l) => l.width <= i) ?? { columns: [1] }).columns.map((l) => `${l}fr`).join(" "), [s, i]);
  return Vt(() => {
    const p = () => {
      const l = document.body.clientWidth;
      i !== l && n(l);
    };
    return window.addEventListener("resize", p), () => window.removeEventListener("resize", p);
  }, [i]), /* @__PURE__ */ h(
    "div",
    {
      class: `phi-responsive-columns ${t}`,
      style: { gridTemplateColumns: c, ...r },
      children: o
    }
  );
}, zr = ".phi-responsive-columns{display:grid;width:100%}.phi-responsive-columns.md{gap:var(--phi-spacing-margin-md)}.phi-responsive-columns.sm{gap:var(--phi-spacing-margin-sm)}", Sr = z(zr), Cr = ({ gap: t, configuration: e, children: r }) => /* @__PURE__ */ h(
  $r,
  {
    gap: t.value,
    configuration: e.value,
    children: r
  }
), Hr = () => S(Cr, "phi-responsive-columns", {
  adoptedStyleSheets: [C, Sr],
  properties: [{
    name: "gap",
    attribute: { name: "gap", type: V("md", ["sm"]) }
  }, {
    name: "configuration",
    initialValue: [{ width: 0, columns: [1] }]
  }]
}), Mr = ({
  padding: t,
  maxWidth: e = "100%",
  style: r,
  children: o
}) => /* @__PURE__ */ h(
  "div",
  {
    class: `phi-responsive-container ${t}`,
    style: { maxWidth: e, ...r },
    children: o
  }
), Er = ".phi-responsive-container{display:block;min-height:100%;width:100%;margin:auto}.phi-responsive-container.md{padding:var(--phi-spacing-margin-md)}.phi-responsive-container.sm{padding:var(--phi-spacing-margin-sm)}", Tr = z(Er), Ar = ({ padding: t, maxWidth: e, children: r }) => /* @__PURE__ */ h(Mr, { padding: t.value, maxWidth: e.value, children: r }), Nr = () => S(Ar, "phi-responsive-container", {
  adoptedStyleSheets: [C, Tr],
  properties: [{
    name: "padding",
    attribute: { name: "padding", type: V("md", ["sm"]) }
  }, {
    name: "maxWidth",
    attribute: { name: "max-width", type: E }
  }]
}), Vr = ({
  checked: t,
  onChange: e,
  style: r,
  children: o
}) => {
  const i = H((n) => {
    e == null || e(n.currentTarget.checked, n);
  }, [e]);
  return /* @__PURE__ */ h("label", { class: "phi-checkbox", style: r, children: [
    /* @__PURE__ */ h(
      "input",
      {
        type: "checkbox",
        class: "input",
        checked: t,
        onChange: i
      }
    ),
    " ",
    o
  ] });
}, kt = '.phi-checkbox{display:inline-flex;line-height:var(--phi-fontsize-checkbox);gap:var(--phi-spacing-horizontal-space);cursor:pointer;-webkit-user-select:none;user-select:none}.phi-checkbox>.input{content:"";position:relative;width:var(--phi-fontsize-checkbox);height:var(--phi-fontsize-checkbox);border:1px solid var(--phi-color-border);border-radius:var(--phi-radius-sm);background:var(--phi-color-bg);cursor:pointer}.phi-checkbox>.input:checked:before{content:"";position:absolute;top:2px;left:5px;transform:rotate(45deg);width:4px;height:9px;border-right:1px solid var(--phi-color-fg);border-bottom:1px solid var(--phi-color-fg)}.phi-checkbox:hover{color:var(--phi-color-neutral-default)}.phi-checkbox:hover>.input{border-color:var(--phi-color-neutral-default)}.phi-checkbox:active{color:var(--phi-color-neutral-active);background:var(--phi-color-neutral-bg)}.phi-checkbox:active>.input{border-color:var(--phi-color-neutral-active)}', Wr = z(kt), qr = ({ $el: t, checked: e, children: r }) => {
  const o = H((i, n) => {
    n.stopPropagation(), e.value = i, t.dispatchEvent(new Event("change"));
  }, [t, e]);
  return /* @__PURE__ */ h(Vr, { checked: e.value, onChange: o, children: r });
}, Pr = () => S(qr, "phi-checkbox", {
  adoptedStyleSheets: [C, Wr],
  properties: [{
    name: "checked",
    formAssociated: !0,
    attribute: { name: "checked", type: j }
  }, {
    name: "value",
    attribute: { name: "value", type: T }
  }]
}), jr = ({
  checked: t,
  onChange: e,
  value: r,
  style: o,
  children: i
}) => {
  const n = W(() => t.findIndex((c) => c === r) !== -1, [t, r]), s = H((c) => {
    c.currentTarget.checked ? e == null || e([...t, r], c) : e == null || e(t.filter((l) => l !== r), c);
  }, [t, r, e]);
  return /* @__PURE__ */ h("label", { class: "phi-checkbox", style: o, children: [
    /* @__PURE__ */ h(
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
}, Lr = z(kt), Ur = ({ $el: t, checked: e, value: r, children: o }) => {
  const i = H((n, s) => {
    s.stopPropagation(), e.value = n, t.dispatchEvent(new Event("change"));
  }, [t, e]);
  return /* @__PURE__ */ h(jr, { checked: e.value, value: r.value, onChange: i, children: o });
}, Br = () => S(Ur, "phi-option", {
  adoptedStyleSheets: [C, Lr],
  properties: [{
    name: "checked",
    formAssociated: !0,
    attribute: { name: "checked", type: At }
  }, {
    name: "value",
    attribute: { name: "value", type: T }
  }]
}), Fr = ({
  name: t,
  checked: e,
  onChange: r,
  value: o,
  style: i,
  children: n
}) => {
  const s = W(() => e === o, [e, o]), c = H((p) => {
    p.currentTarget.checked && (r == null || r(o, p));
  }, [o, r]);
  return /* @__PURE__ */ h("label", { class: "phi-radio", style: i, children: [
    /* @__PURE__ */ h(
      "input",
      {
        type: "radio",
        class: "input",
        name: t,
        checked: s,
        onChange: c
      }
    ),
    " ",
    n
  ] });
}, Or = '.phi-radio{display:inline-flex;line-height:var(--phi-fontsize-checkbox);gap:var(--phi-spacing-horizontal-space);cursor:pointer;-webkit-user-select:none;user-select:none}.phi-radio>.input{content:"";position:relative;width:var(--phi-fontsize-checkbox);height:var(--phi-fontsize-checkbox);border:1px solid var(--phi-color-border);border-radius:calc(var(--phi-fontsize-checkbox) / 2);background:var(--phi-color-bg);cursor:pointer}.phi-radio>.input:checked:before{content:"";position:absolute;top:3px;left:3px;width:8px;height:8px;border-radius:4px;background:currentColor}.phi-radio:hover{color:var(--phi-color-neutral-default)}.phi-radio:hover>.input{border-color:var(--phi-color-neutral-default)}.phi-radio:active{color:var(--phi-color-neutral-active);background:var(--phi-color-neutral-bg)}.phi-radio:active>.input{border-color:var(--phi-color-neutral-active)}', Dr = z(Or), Rr = ({ $el: t, name: e, checked: r, value: o, children: i }) => {
  const n = H((s, c) => {
    c.stopPropagation(), r.value = s, t.dispatchEvent(new Event("change"));
  }, [t, r]);
  return /* @__PURE__ */ h(Fr, { name: e.value, checked: r.value, value: o.value, onChange: n, children: i });
}, Zr = () => S(Rr, "phi-radio", {
  adoptedStyleSheets: [C, Dr],
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
}), Ir = ({
  value: t,
  placeholder: e = "",
  required: r = !1,
  minlength: o,
  maxlength: i,
  size: n = "md",
  error: s,
  onInput: c,
  style: p
}) => {
  const l = H((d) => {
    c == null || c(d.currentTarget.value, d);
  }, [c]);
  return /* @__PURE__ */ h(
    "input",
    {
      type: "text",
      class: `phi-text-input ${s ? "error" : ""} ${n}`,
      placeholder: e,
      required: r,
      minlength: o,
      maxlength: i,
      value: t,
      onInput: l,
      style: p
    }
  );
}, Gr = ".phi-text-input{--text-color: var(--phi-color-fg);--border-color: var(--phi-color-border);--selected-color: var(--phi-color-neutral-default);--hover-color: var(--phi-color-neutral-hover);--active-color: var(--phi-color-neutral-active);--focus-shadow: var(--phi-shadow-focus-neutral);display:block;width:100%;border-radius:var(--phi-radius-md);color:var(--text-color);background:var(--phi-color-bg);border:1px solid var(--border-color)}.phi-text-input.error,.phi-text-input:user-invalid{--text-color: var(--phi-color-danger-default);--border-color: var(--phi-color-danger-default);--selected-color: var(--phi-color-danger-default);--hover-color: var(--phi-color-danger-hover);--active-color: var(--phi-color-danger-active);--focus-shadow: var(--phi-shadow-focus-danger)}.phi-text-input.md{height:var(--phi-size-input-md);padding:0 var(--phi-spacing-padding-md)}.phi-text-input.sm{height:var(--phi-size-input-sm);padding:0 var(--phi-spacing-padding-sm)}.phi-text-input::placeholder{color:var(--phi-color-border)}.phi-text-input:focus{box-shadow:var(--focus-shadow)}.phi-text-input:hover{border-color:var(--hover-color)}.phi-text-input:focus:not(:hover){border-color:var(--selected-color)}.phi-text-input:active{border-color:var(--active-color)}", Yr = z(Gr), Jr = ({
  $el: t,
  value: e,
  placeholder: r,
  required: o,
  minlength: i,
  maxlength: n,
  size: s,
  error: c
}) => {
  const p = H((l, d) => {
    d.stopPropagation(), e.value = l, t.dispatchEvent(new Event("input"));
  }, [t, e]);
  return /* @__PURE__ */ h(
    Ir,
    {
      value: e.value,
      placeholder: r.value,
      required: o.value,
      minlength: i.value,
      maxlength: n.value,
      size: s.value,
      error: c.value,
      onInput: p
    }
  );
}, Kr = () => S(Jr, "phi-text-input", {
  adoptedStyleSheets: [C, Yr],
  properties: [{
    name: "value",
    formAssociated: !0,
    attribute: { name: "value", type: T }
  }, {
    name: "placeholder",
    attribute: { name: "placeholder", type: T }
  }, {
    name: "required",
    attribute: { name: "required", type: j }
  }, {
    name: "minlength",
    attribute: { name: "minlength", type: E }
  }, {
    name: "maxlength",
    attribute: { name: "maxlength", type: E }
  }, {
    name: "size",
    attribute: { name: "size", type: V("md", ["sm"]) }
  }, {
    name: "error",
    attribute: { name: "error", type: j }
  }]
}), Qr = ({
  value: t,
  placeholder: e = "",
  required: r = !1,
  min: o,
  max: i,
  step: n,
  error: s,
  onInput: c,
  style: p
}) => {
  const [l, d] = ht(t == null ? "" : t.toString()), a = H((v) => {
    const u = v.currentTarget.value;
    d(u), c == null || c(u === "" ? void 0 : Number(u), v);
  }, [c]);
  return /* @__PURE__ */ h(
    "input",
    {
      type: "number",
      class: `phi-number-input ${s ? "error" : ""}`,
      placeholder: e,
      value: l,
      required: r,
      max: i,
      min: o,
      step: n,
      onInput: a,
      style: p
    }
  );
}, Xr = ".phi-number-input{--text-color: var(--phi-color-fg);--border-color: var(--phi-color-border);--selected-color: var(--phi-color-neutral-default);--hover-color: var(--phi-color-neutral-hover);--active-color: var(--phi-color-neutral-active);--focus-shadow: var(--phi-shadow-focus-neutral);display:block;width:100%;height:var(--phi-size-input-md);padding:0 var(--phi-spacing-padding-md);border-radius:var(--phi-radius-md);color:var(--text-color);background:var(--phi-color-bg);border:1px solid var(--border-color)}.phi-number-input.error,.phi-number-input:user-invalid{--text-color: var(--phi-color-danger-default);--border-color: var(--phi-color-danger-default);--selected-color: var(--phi-color-danger-default);--hover-color: var(--phi-color-danger-hover);--active-color: var(--phi-color-danger-active);--focus-shadow: var(--phi-shadow-focus-danger)}.phi-number-input::placeholder{color:var(--phi-color-border)}.phi-number-input:focus{box-shadow:var(--focus-shadow)}.phi-number-input:hover{border-color:var(--hover-color)}.phi-number-input:focus:not(:hover){border-color:var(--selected-color)}.phi-number-input:active{border-color:var(--active-color)}", eo = z(Xr), to = ({ $el: t, value: e, required: r, min: o, max: i, step: n, placeholder: s, error: c }) => {
  const p = H((l, d) => {
    d.stopPropagation(), e.value = l, t.dispatchEvent(new Event("input"));
  }, [t, e]);
  return /* @__PURE__ */ h(
    Qr,
    {
      placeholder: s.value,
      value: e.value,
      required: r.value,
      min: o.value,
      max: i.value,
      step: n.value,
      error: c.value,
      onInput: p
    }
  );
}, ro = () => S(to, "phi-number-input", {
  adoptedStyleSheets: [C, eo],
  properties: [{
    name: "value",
    formAssociated: !0,
    attribute: { name: "value", type: E }
  }, {
    name: "required",
    attribute: { name: "required", type: j }
  }, {
    name: "min",
    attribute: { name: "min", type: E }
  }, {
    name: "max",
    attribute: { name: "max", type: E }
  }, {
    name: "step",
    attribute: { name: "step", type: E }
  }, {
    name: "placeholder",
    attribute: { name: "placeholder", type: T }
  }, {
    name: "error",
    attribute: { name: "error", type: j }
  }]
}), oo = ({
  value: t,
  min: e,
  max: r,
  step: o,
  onInput: i,
  style: n
}) => {
  const s = H((p) => {
    const l = p.currentTarget.value;
    i == null || i(Number(l), p);
  }, [i]), c = W(() => {
    const p = (t - e) / (r - e) * 100;
    return `linear-gradient(to right,  var(--phi-color-border) ${p}%, var(--phi-color-bg) ${p}%)`;
  }, [t, e, r]);
  return /* @__PURE__ */ h(
    "input",
    {
      type: "range",
      class: "phi-slider",
      value: t,
      max: r,
      min: e,
      step: o,
      style: { background: c, ...n },
      onInput: s
    }
  );
}, io = ".phi-slider{width:100%;height:var(--phi-size-range-track);background:var(--phi-color-bg);border-radius:calc(var(--phi-size-range-track) / 2)}.phi-slider::-webkit-slider-runnable-track{height:var(--phi-size-range-track);border-radius:calc(var(--phi-size-range-track) / 2);border:1px solid var(--phi-color-border)}.phi-slider::-webkit-slider-thumb{-webkit-appearance:none;height:var(--phi-size-range-track);width:var(--phi-size-range-track);margin-top:-1px;transform:scale(var(--phi-size-range-thumb-scale));border:.5px solid var(--phi-color-border);border-radius:calc(var(--phi-size-range-track) / 2);background:var(--phi-color-bg);cursor:pointer}.phi-slider::-webkit-slider-thumb:hover{border-color:var(--phi-color-neutral-default)}.phi-slider::-webkit-slider-thumb:active{border-color:var(--phi-color-neutral-active);box-shadow:var(--phi-shadow-focus-neutral);transform:translateY(-1px) scale(var(--phi-size-range-thumb-scale))}.phi-slider::-moz-range-track{height:var(--phi-size-range-track);border-radius:calc(var(--phi-size-range-track) / 2);border:1px solid var(--phi-color-border)}.phi-slider::-moz-range-thumb{-webkit-appearance:none;height:var(--phi-size-range-track);width:var(--phi-size-range-track);transform:scale(var(--phi-size-range-thumb-scale));border:.5px solid var(--phi-color-border);border-radius:calc(var(--phi-size-range-track) / 2);background:var(--phi-color-bg);cursor:pointer}.phi-slider::-moz-range-thumb:hover{border-color:var(--phi-color-neutral-default)}.phi-slider::-moz-range-thumb:active{border-color:var(--phi-color-neutral-active);box-shadow:var(--phi-shadow-focus-neutral);transform:translateY(-1px) scale(var(--phi-size-range-thumb-scale))}", no = z(io), ao = ({ $el: t, value: e, min: r, max: o, step: i }) => {
  const n = H((s, c) => {
    c.stopPropagation(), e.value = s, t.dispatchEvent(new Event("input"));
  }, [t, e]);
  return /* @__PURE__ */ h(
    oo,
    {
      value: e.value ?? r.value,
      min: r.value,
      max: o.value,
      step: i.value,
      onInput: n
    }
  );
}, so = () => S(ao, "phi-slider", {
  adoptedStyleSheets: [C, no],
  properties: [{
    name: "value",
    formAssociated: !0,
    attribute: { name: "value", type: E }
  }, {
    name: "min",
    attribute: { name: "min", type: me(0) }
  }, {
    name: "max",
    attribute: { name: "max", type: me(100) }
  }, {
    name: "step",
    attribute: { name: "step", type: me(1) }
  }]
}), co = () => /* @__PURE__ */ h("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ h("path", { d: "M0 0h24v24H0z", fill: "none" }),
  /* @__PURE__ */ h("path", { d: "M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z" })
] }), lo = () => /* @__PURE__ */ h("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ h("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ h("path", { d: "M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z" })
] }), po = () => /* @__PURE__ */ h("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ h("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ h("path", { d: "M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z" })
] }), ho = () => /* @__PURE__ */ h("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ h("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ h("path", { d: "M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z" })
] }), uo = () => /* @__PURE__ */ h("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ h("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ h("path", { d: "M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z" })
] }), vo = () => /* @__PURE__ */ h("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 -960 960 960", width: "24px", children: /* @__PURE__ */ h("path", { d: "M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" }) }), _o = () => /* @__PURE__ */ h("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 -960 960 960", width: "24px", children: /* @__PURE__ */ h("path", { d: "M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" }) }), fo = () => /* @__PURE__ */ h("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ h("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ h("path", { d: "M19 13H5v-2h14v2z" })
] }), mo = () => /* @__PURE__ */ h("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ h("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ h("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" })
] }), go = () => /* @__PURE__ */ h("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", "enable-background": "new 0 0 24 24", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ h("g", { children: /* @__PURE__ */ h("rect", { fill: "none", height: "24", width: "24", x: "0" }) }),
  /* @__PURE__ */ h("g", { children: /* @__PURE__ */ h("g", { children: [
    /* @__PURE__ */ h("polygon", { points: "20,7 20.94,4.94 23,4 20.94,3.06 20,1 19.06,3.06 17,4 19.06,4.94" }),
    /* @__PURE__ */ h("polygon", { points: "8.5,7 9.44,4.94 11.5,4 9.44,3.06 8.5,1 7.56,3.06 5.5,4 7.56,4.94" }),
    /* @__PURE__ */ h("polygon", { points: "20,12.5 19.06,14.56 17,15.5 19.06,16.44 20,18.5 20.94,16.44 23,15.5 20.94,14.56" }),
    /* @__PURE__ */ h("path", { d: "M17.71,9.12l-2.83-2.83C14.68,6.1,14.43,6,14.17,6c-0.26,0-0.51,0.1-0.71,0.29L2.29,17.46c-0.39,0.39-0.39,1.02,0,1.41 l2.83,2.83C5.32,21.9,5.57,22,5.83,22s0.51-0.1,0.71-0.29l11.17-11.17C18.1,10.15,18.1,9.51,17.71,9.12z M14.17,8.42l1.41,1.41 L14.41,11L13,9.59L14.17,8.42z M5.83,19.59l-1.41-1.41L11.59,11L13,12.41L5.83,19.59z" })
  ] }) })
] }), bo = () => /* @__PURE__ */ h("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ h("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ h("path", { d: "M10.25 13c0 .69-.56 1.25-1.25 1.25S7.75 13.69 7.75 13s.56-1.25 1.25-1.25 1.25.56 1.25 1.25zM15 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm7 .25c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zM10.66 4.12C12.06 6.44 14.6 8 17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12zM4.42 9.47c1.71-.97 3.03-2.55 3.66-4.44C6.37 6 5.05 7.58 4.42 9.47zM20 12c0-.78-.12-1.53-.33-2.24-.7.15-1.42.24-2.17.24-3.13 0-5.92-1.44-7.76-3.69C8.69 8.87 6.6 10.88 4 11.86c.01.04 0 .09 0 .14 0 4.41 3.59 8 8 8s8-3.59 8-8z" })
] }), yo = () => /* @__PURE__ */ h("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ h("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ h("path", { d: "M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" })
] }), wo = () => /* @__PURE__ */ h("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ h("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ h("path", { d: "M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 9.67l1.69 2.26 2.48-3.1L19 15H9zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" })
] }), xo = () => /* @__PURE__ */ h("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ h("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ h("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" })
] }), ko = () => /* @__PURE__ */ h("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ h("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ h("path", { d: "M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z" })
] }), $o = () => /* @__PURE__ */ h("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 -960 960 960", width: "24px", children: /* @__PURE__ */ h("path", { d: "M320-200h280v-400h-80q-28 0-46 14t-43 41q-20 22-46.5 45.5T320-465v265Zm-80 80v-346q-52-14-86-56t-34-98q0-53 30.5-94t78.5-57q23-48 68.5-78T400-879q35 0 65.5 12t55.5 32q10-2 19-3.5t20-1.5q66 0 113 47t47 113q0 22-5.5 42T698-600h62q33 0 56.5 23.5T840-520v240q0 33-23.5 56.5T760-200h-80v80H240Zm-40-500q0 33 23.5 56.5T280-540q32 0 54.5-21t46.5-47q25-27 56.5-49.5T520-680h120q0-33-23.5-56.5T560-760q-25 0-42 6.5l-17 6.5-31-26q-11-9-28.5-17.5T400-799q-32 0-58.5 17T301-736l-14 30-32 11q-25 8-40 28.5T200-620Zm480 340h80v-240h-80v240Zm-360 80h280-280Z" }) }), zo = () => /* @__PURE__ */ h("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ h("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ h("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
] }), So = {
  beer: $o,
  text: co,
  "align-center": lo,
  "align-justify": po,
  "align-left": ho,
  "align-right": uo,
  back: vo,
  next: _o,
  decrement: fo,
  delete: mo,
  effect: go,
  emoji: bo,
  file: yo,
  image: wo,
  increment: xo,
  save: ko,
  okay: zo
}, Co = ({ icon: t }) => {
  const e = So[t];
  return e ? /* @__PURE__ */ h(e, {}) : null;
}, Ho = ".phi-icon{display:inline;width:auto;height:1em;vertical-align:-.11em;fill:currentColor}", Mo = z(Ho), Eo = ({ icon: t }) => /* @__PURE__ */ h(Co, { icon: t.value }), To = () => S(Eo, "phi-icon", {
  adoptedStyleSheets: [C, Mo],
  properties: [{
    name: "icon",
    attribute: { name: "icon", type: T }
  }]
}), Ao = ({ color: t }) => /* @__PURE__ */ h("span", { class: "phi-color-swatch", style: { background: t } }), No = ".phi-color-swatch{display:inline-block;width:calc(1.6 * var(--phi-fontsize-icon-md));height:var(--phi-fontsize-icon-md);border:1px solid var(--phi-color-border);border-radius:var(--phi-radius-sm)}", Vo = z(No), Wo = ({ color: t }) => /* @__PURE__ */ h(Ao, { color: t.value }), qo = () => S(Wo, "phi-color-swatch", {
  adoptedStyleSheets: [C, Vo],
  properties: [{
    name: "color",
    attribute: { name: "color", type: T }
  }]
}), jo = () => {
  typeof window < "u" && (Qt(), or(), cr(), dr(), gr(), kr(), Hr(), Nr(), Pr(), Br(), Zr(), Kr(), ro(), so(), To(), qo());
};
export {
  jo as default
};
//# sourceMappingURL=custom-elements.js.map
