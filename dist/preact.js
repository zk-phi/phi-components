import { jsxs as v, jsx as o } from "preact/jsx-runtime";
import { options as Z } from "preact";
const lt = ({
  onClick: n,
  danger: t,
  variant: e = "default",
  icon: i,
  style: h,
  children: r
}) => /* @__PURE__ */ v(
  "button",
  {
    type: "button",
    class: `phi-button ${e} ${t ? "danger" : ""}`,
    style: h,
    onClick: n,
    children: [
      i && /* @__PURE__ */ o("span", { class: "icon", children: i }),
      r
    ]
  }
), at = ({
  onClick: n,
  danger: t,
  style: e,
  children: i
}) => /* @__PURE__ */ o(
  "button",
  {
    type: "button",
    class: `phi-icon-button ${t ? "danger" : ""}`,
    style: e,
    onClick: n,
    children: i
  }
), vt = ({
  onClick: n,
  danger: t,
  style: e,
  children: i
}) => /* @__PURE__ */ o(
  "button",
  {
    type: "button",
    class: `phi-text-button ${t ? "danger" : ""}`,
    onClick: n,
    style: e,
    children: i
  }
), pt = ({ gap: n, align: t = "left", style: e, children: i }) => /* @__PURE__ */ o("div", { class: `phi-group ${n} ${t}`, style: e, children: i }), dt = ({ gap: n, style: t, children: e }) => /* @__PURE__ */ o("div", { class: `phi-stack ${n}`, style: t, children: e });
var g, l, M, V, z = 0, E = [], a = Z, T = a.__b, q = a.__r, B = a.diffed, k = a.__c, C = a.unmount, L = a.__;
function y(n, t) {
  a.__h && a.__h(l, n, z || t), z = 0;
  var e = l.__H || (l.__H = { __: [], __h: [] });
  return n >= e.__.length && e.__.push({}), e.__[n];
}
function A(n) {
  return z = 1, F(j, n);
}
function F(n, t, e) {
  var i = y(g++, 2);
  if (i.t = n, !i.__c && (i.__ = [j(void 0, t), function(c) {
    var s = i.__N ? i.__N[0] : i.__[0], _ = i.t(s, c);
    s !== _ && (i.__N = [_, i.__[1]], i.__c.setState({}));
  }], i.__c = l, !l.__f)) {
    var h = function(c, s, _) {
      if (!i.__c.__H) return !0;
      var u = i.__c.__H.__.filter(function(d) {
        return !!d.__c;
      });
      if (u.every(function(d) {
        return !d.__N;
      })) return !r || r.call(this, c, s, _);
      var H = i.__c.props !== c;
      return u.forEach(function(d) {
        if (d.__N) {
          var f = d.__[0];
          d.__ = d.__N, d.__N = void 0, f !== d.__[0] && (H = !0);
        }
      }), r && r.call(this, c, s, _) || H;
    };
    l.__f = !0;
    var r = l.shouldComponentUpdate, p = l.componentWillUpdate;
    l.componentWillUpdate = function(c, s, _) {
      if (this.__e) {
        var u = r;
        r = void 0, h(c, s, _), r = u;
      }
      p && p.call(this, c, s, _);
    }, l.shouldComponentUpdate = h;
  }
  return i.__N || i.__;
}
function R(n, t) {
  var e = y(g++, 3);
  !a.__s && S(e.__H, t) && (e.__ = n, e.u = t, l.__H.__h.push(e));
}
function w(n, t) {
  var e = y(g++, 7);
  return S(e.__H, t) && (e.__ = n(), e.__H = t, e.__h = n), e.__;
}
function m(n, t) {
  return z = 8, w(function() {
    return n;
  }, t);
}
function U() {
  for (var n; n = E.shift(); ) if (n.__P && n.__H) try {
    n.__H.__h.forEach(x), n.__H.__h.forEach(b), n.__H.__h = [];
  } catch (t) {
    n.__H.__h = [], a.__e(t, n.__v);
  }
}
a.__b = function(n) {
  l = null, T && T(n);
}, a.__ = function(n, t) {
  n && t.__k && t.__k.__m && (n.__m = t.__k.__m), L && L(n, t);
}, a.__r = function(n) {
  q && q(n), g = 0;
  var t = (l = n.__c).__H;
  t && (M === l ? (t.__h = [], l.__h = [], t.__.forEach(function(e) {
    e.__N && (e.__ = e.__N), e.u = e.__N = void 0;
  })) : (t.__h.forEach(x), t.__h.forEach(b), t.__h = [], g = 0)), M = l;
}, a.diffed = function(n) {
  B && B(n);
  var t = n.__c;
  t && t.__H && (t.__H.__h.length && (E.push(t) !== 1 && V === a.requestAnimationFrame || ((V = a.requestAnimationFrame) || W)(U)), t.__H.__.forEach(function(e) {
    e.u && (e.__H = e.u), e.u = void 0;
  })), M = l = null;
}, a.__c = function(n, t) {
  t.some(function(e) {
    try {
      e.__h.forEach(x), e.__h = e.__h.filter(function(i) {
        return !i.__ || b(i);
      });
    } catch (i) {
      t.some(function(h) {
        h.__h && (h.__h = []);
      }), t = [], a.__e(i, e.__v);
    }
  }), k && k(n, t);
}, a.unmount = function(n) {
  C && C(n);
  var t, e = n.__c;
  e && e.__H && (e.__H.__.forEach(function(i) {
    try {
      x(i);
    } catch (h) {
      t = h;
    }
  }), e.__H = void 0, t && a.__e(t, e.__v));
};
var N = typeof requestAnimationFrame == "function";
function W(n) {
  var t, e = function() {
    clearTimeout(i), N && cancelAnimationFrame(t), setTimeout(n);
  }, i = setTimeout(e, 35);
  N && (t = requestAnimationFrame(e));
}
function x(n) {
  var t = l, e = n.__c;
  typeof e == "function" && (n.__c = void 0, e()), l = t;
}
function b(n) {
  var t = l;
  n.__c = n.__(), l = t;
}
function S(n, t) {
  return !n || n.length !== t.length || t.some(function(e, i) {
    return e !== n[i];
  });
}
function j(n, t) {
  return typeof t == "function" ? t(n) : t;
}
const $ = (n) => typeof n == "number" ? `${n}px` : n, ut = ({
  gap: n,
  align: t = "left",
  cols: e = "auto-fit",
  colWidth: i,
  colMinWidth: h = "min-content",
  colMaxWidth: r = "min-content",
  style: p,
  children: c
}) => {
  const s = w(() => {
    const _ = i ? $(i) : `minmax(${$(h)}, ${$(r)})`;
    return `repeat(${e}, ${_})`;
  }, [e, i, h, r]);
  return /* @__PURE__ */ o(
    "div",
    {
      class: `phi-grid ${n} ${t}`,
      style: { gridTemplateColumns: s, ...p },
      children: c
    }
  );
}, wt = ({
  gap: n,
  configuration: t,
  style: e,
  children: i
}) => {
  const [h, r] = A(() => document.body.clientWidth), p = w(() => t.sort((s, _) => _.width - s.width), [t]), c = w(() => (p.find((_) => _.width <= h) ?? { columns: [1] }).columns.map((_) => `${_}fr`).join(" "), [p, h]);
  return R(() => {
    const s = () => {
      const _ = document.body.clientWidth;
      h !== _ && r(_);
    };
    return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, [h]), /* @__PURE__ */ o(
    "div",
    {
      class: `phi-responsive-columns ${n}`,
      style: { gridTemplateColumns: c, ...e },
      children: i
    }
  );
}, mt = ({
  padding: n,
  maxWidth: t = "100%",
  style: e,
  children: i
}) => /* @__PURE__ */ o(
  "div",
  {
    class: `phi-responsive-container ${n}`,
    style: { maxWidth: t, ...e },
    children: i
  }
), ft = ({
  checked: n,
  onChange: t,
  style: e,
  children: i
}) => {
  const h = m((r) => {
    t == null || t(r.currentTarget.checked, r);
  }, [t]);
  return /* @__PURE__ */ v("label", { class: "phi-checkbox", style: e, children: [
    /* @__PURE__ */ o(
      "input",
      {
        type: "checkbox",
        class: "input",
        checked: n,
        onChange: h
      }
    ),
    " ",
    i
  ] });
}, gt = ({
  checked: n,
  onChange: t,
  value: e,
  style: i,
  children: h
}) => {
  const r = w(() => n.findIndex((c) => c === e) !== -1, [n, e]), p = m((c) => {
    c.currentTarget.checked ? t == null || t([...n, e], c) : t == null || t(n.filter((_) => _ !== e), c);
  }, [n, e, t]);
  return /* @__PURE__ */ v("label", { class: "phi-checkbox", style: i, children: [
    /* @__PURE__ */ o(
      "input",
      {
        type: "checkbox",
        class: "input",
        checked: r,
        onChange: p
      }
    ),
    " ",
    h
  ] });
}, Ht = ({
  name: n,
  checked: t,
  onChange: e,
  value: i,
  style: h,
  children: r
}) => {
  const p = w(() => t === i, [t, i]), c = m((s) => {
    s.currentTarget.checked && (e == null || e(i, s));
  }, [i, e]);
  return /* @__PURE__ */ v("label", { class: "phi-radio", style: h, children: [
    /* @__PURE__ */ o(
      "input",
      {
        type: "radio",
        class: "input",
        name: n,
        checked: p,
        onChange: c
      }
    ),
    " ",
    r
  ] });
}, xt = ({
  value: n,
  placeholder: t = "",
  required: e = !1,
  minlength: i,
  maxlength: h,
  size: r = "md",
  error: p,
  onInput: c,
  style: s
}) => {
  const _ = m((u) => {
    c == null || c(u.currentTarget.value, u);
  }, [c]);
  return /* @__PURE__ */ o(
    "input",
    {
      type: "text",
      class: `phi-text-input ${p ? "error" : ""} ${r}`,
      placeholder: t,
      required: e,
      minlength: i,
      maxlength: h,
      value: n,
      onInput: _,
      style: s
    }
  );
}, zt = ({
  value: n,
  placeholder: t = "",
  required: e = !1,
  min: i,
  max: h,
  step: r,
  error: p,
  onInput: c,
  style: s
}) => {
  const [_, u] = A(n == null ? "" : n.toString()), H = m((d) => {
    const f = d.currentTarget.value;
    u(f), c == null || c(f === "" ? void 0 : Number(f), d);
  }, [c]);
  return /* @__PURE__ */ o(
    "input",
    {
      type: "number",
      class: `phi-number-input ${p ? "error" : ""}`,
      placeholder: t,
      value: _,
      required: e,
      max: h,
      min: i,
      step: r,
      onInput: H,
      style: s
    }
  );
}, Mt = ({
  value: n,
  min: t,
  max: e,
  step: i,
  onInput: h,
  style: r
}) => {
  const p = m((s) => {
    const _ = s.currentTarget.value;
    h == null || h(Number(_), s);
  }, [h]), c = w(() => {
    const s = (n - t) / (e - t) * 100;
    return `linear-gradient(to right,  var(--phi-color-border) ${s}%, var(--phi-color-bg) ${s}%)`;
  }, [n, t, e]);
  return /* @__PURE__ */ o(
    "input",
    {
      type: "range",
      class: "phi-slider",
      value: n,
      max: e,
      min: t,
      step: i,
      style: { background: c, ...r },
      onInput: p
    }
  );
}, D = () => /* @__PURE__ */ v("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ o("path", { d: "M0 0h24v24H0z", fill: "none" }),
  /* @__PURE__ */ o("path", { d: "M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z" })
] }), G = () => /* @__PURE__ */ v("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ o("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ o("path", { d: "M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z" })
] }), O = () => /* @__PURE__ */ v("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ o("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ o("path", { d: "M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z" })
] }), J = () => /* @__PURE__ */ v("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ o("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ o("path", { d: "M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z" })
] }), P = () => /* @__PURE__ */ v("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ o("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ o("path", { d: "M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z" })
] }), K = () => /* @__PURE__ */ o("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 -960 960 960", width: "24px", children: /* @__PURE__ */ o("path", { d: "M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" }) }), Q = () => /* @__PURE__ */ o("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 -960 960 960", width: "24px", children: /* @__PURE__ */ o("path", { d: "M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" }) }), X = () => /* @__PURE__ */ v("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ o("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ o("path", { d: "M19 13H5v-2h14v2z" })
] }), Y = () => /* @__PURE__ */ v("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ o("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ o("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" })
] }), I = () => /* @__PURE__ */ v("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", "enable-background": "new 0 0 24 24", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ o("g", { children: /* @__PURE__ */ o("rect", { fill: "none", height: "24", width: "24", x: "0" }) }),
  /* @__PURE__ */ o("g", { children: /* @__PURE__ */ v("g", { children: [
    /* @__PURE__ */ o("polygon", { points: "20,7 20.94,4.94 23,4 20.94,3.06 20,1 19.06,3.06 17,4 19.06,4.94" }),
    /* @__PURE__ */ o("polygon", { points: "8.5,7 9.44,4.94 11.5,4 9.44,3.06 8.5,1 7.56,3.06 5.5,4 7.56,4.94" }),
    /* @__PURE__ */ o("polygon", { points: "20,12.5 19.06,14.56 17,15.5 19.06,16.44 20,18.5 20.94,16.44 23,15.5 20.94,14.56" }),
    /* @__PURE__ */ o("path", { d: "M17.71,9.12l-2.83-2.83C14.68,6.1,14.43,6,14.17,6c-0.26,0-0.51,0.1-0.71,0.29L2.29,17.46c-0.39,0.39-0.39,1.02,0,1.41 l2.83,2.83C5.32,21.9,5.57,22,5.83,22s0.51-0.1,0.71-0.29l11.17-11.17C18.1,10.15,18.1,9.51,17.71,9.12z M14.17,8.42l1.41,1.41 L14.41,11L13,9.59L14.17,8.42z M5.83,19.59l-1.41-1.41L11.59,11L13,12.41L5.83,19.59z" })
  ] }) })
] }), tt = () => /* @__PURE__ */ v("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ o("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ o("path", { d: "M10.25 13c0 .69-.56 1.25-1.25 1.25S7.75 13.69 7.75 13s.56-1.25 1.25-1.25 1.25.56 1.25 1.25zM15 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm7 .25c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zM10.66 4.12C12.06 6.44 14.6 8 17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12zM4.42 9.47c1.71-.97 3.03-2.55 3.66-4.44C6.37 6 5.05 7.58 4.42 9.47zM20 12c0-.78-.12-1.53-.33-2.24-.7.15-1.42.24-2.17.24-3.13 0-5.92-1.44-7.76-3.69C8.69 8.87 6.6 10.88 4 11.86c.01.04 0 .09 0 .14 0 4.41 3.59 8 8 8s8-3.59 8-8z" })
] }), nt = () => /* @__PURE__ */ v("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ o("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ o("path", { d: "M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" })
] }), et = () => /* @__PURE__ */ v("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ o("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ o("path", { d: "M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 9.67l1.69 2.26 2.48-3.1L19 15H9zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" })
] }), it = () => /* @__PURE__ */ v("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ o("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ o("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" })
] }), ot = () => /* @__PURE__ */ v("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ o("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ o("path", { d: "M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z" })
] }), ht = () => /* @__PURE__ */ o("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 -960 960 960", width: "24px", children: /* @__PURE__ */ o("path", { d: "M320-200h280v-400h-80q-28 0-46 14t-43 41q-20 22-46.5 45.5T320-465v265Zm-80 80v-346q-52-14-86-56t-34-98q0-53 30.5-94t78.5-57q23-48 68.5-78T400-879q35 0 65.5 12t55.5 32q10-2 19-3.5t20-1.5q66 0 113 47t47 113q0 22-5.5 42T698-600h62q33 0 56.5 23.5T840-520v240q0 33-23.5 56.5T760-200h-80v80H240Zm-40-500q0 33 23.5 56.5T280-540q32 0 54.5-21t46.5-47q25-27 56.5-49.5T520-680h120q0-33-23.5-56.5T560-760q-25 0-42 6.5l-17 6.5-31-26q-11-9-28.5-17.5T400-799q-32 0-58.5 17T301-736l-14 30-32 11q-25 8-40 28.5T200-620Zm480 340h80v-240h-80v240Zm-360 80h280-280Z" }) }), ct = () => /* @__PURE__ */ v("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ o("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ o("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
] }), st = {
  beer: ht,
  text: D,
  "align-center": G,
  "align-justify": O,
  "align-left": J,
  "align-right": P,
  back: K,
  next: Q,
  decrement: X,
  delete: Y,
  effect: I,
  emoji: tt,
  file: nt,
  image: et,
  increment: it,
  save: ot,
  okay: ct
}, $t = ({ icon: n }) => {
  const t = st[n];
  return t ? /* @__PURE__ */ o(t, {}) : null;
}, bt = ({ color: n }) => /* @__PURE__ */ o("span", { class: "phi-color-swatch", style: { background: n } });
export {
  lt as Button,
  ft as Checkbox,
  bt as ColorSwatch,
  ut as Grid,
  pt as Group,
  $t as Icon,
  at as IconButton,
  zt as NumberInput,
  gt as Option,
  Ht as Radio,
  wt as ResponsiveColumns,
  mt as ResponsiveContainer,
  Mt as Slider,
  dt as Stack,
  vt as TextButton,
  xt as TextInput
};
//# sourceMappingURL=preact.js.map
