import { jsxs as e, jsx as n } from "preact/jsx-runtime";
import { options as T } from "preact";
const t2 = ({
  onClick: h,
  danger: t,
  variant: i = "default",
  icon: c,
  children: s
}) => /* @__PURE__ */ e("button", { className: `phi-button ${i} ${t ? "danger" : ""}`, onClick: h, children: [
  c && /* @__PURE__ */ n("span", { className: "icon", children: c }),
  s
] }), h2 = ({
  onClick: h,
  danger: t,
  children: i
}) => /* @__PURE__ */ n("button", { className: `phi-icon-button ${t ? "danger" : ""}`, onClick: h, children: i }), i2 = ({
  onClick: h,
  danger: t,
  children: i
}) => /* @__PURE__ */ n("button", { className: `phi-text-button ${t ? "danger" : ""}`, onClick: h, children: i }), n2 = ({ size: h, align: t, children: i }) => /* @__PURE__ */ n("div", { className: `phi-group ${h} ${t}`, children: i }), c2 = ({ size: h, children: t }) => /* @__PURE__ */ n("div", { className: `phi-stack ${h}`, children: t });
var w, _, p, f, d = 0, b = [], o = T, H = o.__b, z = o.__r, x = o.diffed, M = o.__c, V = o.unmount, q = o.__;
function N(h, t) {
  o.__h && o.__h(_, h, d || t), d = 0;
  var i = _.__H || (_.__H = { __: [], __h: [] });
  return h >= i.__.length && i.__.push({}), i.__[h];
}
function g(h, t) {
  var i = N(w++, 7);
  return y(i.__H, t) && (i.__ = h(), i.__H = t, i.__h = h), i.__;
}
function u(h, t) {
  return d = 8, g(function() {
    return h;
  }, t);
}
function $() {
  for (var h; h = b.shift(); ) if (h.__P && h.__H) try {
    h.__H.__h.forEach(v), h.__H.__h.forEach(m), h.__H.__h = [];
  } catch (t) {
    h.__H.__h = [], o.__e(t, h.__v);
  }
}
o.__b = function(h) {
  _ = null, H && H(h);
}, o.__ = function(h, t) {
  h && t.__k && t.__k.__m && (h.__m = t.__k.__m), q && q(h, t);
}, o.__r = function(h) {
  z && z(h), w = 0;
  var t = (_ = h.__c).__H;
  t && (p === _ ? (t.__h = [], _.__h = [], t.__.forEach(function(i) {
    i.__N && (i.__ = i.__N), i.u = i.__N = void 0;
  })) : (t.__h.forEach(v), t.__h.forEach(m), t.__h = [], w = 0)), p = _;
}, o.diffed = function(h) {
  x && x(h);
  var t = h.__c;
  t && t.__H && (t.__H.__h.length && (b.push(t) !== 1 && f === o.requestAnimationFrame || ((f = o.requestAnimationFrame) || L)($)), t.__H.__.forEach(function(i) {
    i.u && (i.__H = i.u), i.u = void 0;
  })), p = _ = null;
}, o.__c = function(h, t) {
  t.some(function(i) {
    try {
      i.__h.forEach(v), i.__h = i.__h.filter(function(c) {
        return !c.__ || m(c);
      });
    } catch (c) {
      t.some(function(s) {
        s.__h && (s.__h = []);
      }), t = [], o.__e(c, i.__v);
    }
  }), M && M(h, t);
}, o.unmount = function(h) {
  V && V(h);
  var t, i = h.__c;
  i && i.__H && (i.__H.__.forEach(function(c) {
    try {
      v(c);
    } catch (s) {
      t = s;
    }
  }), i.__H = void 0, t && o.__e(t, i.__v));
};
var B = typeof requestAnimationFrame == "function";
function L(h) {
  var t, i = function() {
    clearTimeout(c), B && cancelAnimationFrame(t), setTimeout(h);
  }, c = setTimeout(i, 35);
  B && (t = requestAnimationFrame(i));
}
function v(h) {
  var t = _, i = h.__c;
  typeof i == "function" && (h.__c = void 0, i()), _ = t;
}
function m(h) {
  var t = _;
  h.__c = h.__(), _ = t;
}
function y(h, t) {
  return !h || h.length !== t.length || t.some(function(i, c) {
    return i !== h[c];
  });
}
const o2 = ({
  checked: h,
  onChange: t,
  children: i
}) => {
  const c = u((s) => {
    t == null || t(s.currentTarget.checked, s);
  }, [t]);
  return /* @__PURE__ */ e("label", { className: "phi-checkbox", children: [
    /* @__PURE__ */ n(
      "input",
      {
        type: "checkbox",
        className: "input",
        checked: h,
        onChange: c
      }
    ),
    " ",
    i
  ] });
}, e2 = ({
  checked: h,
  onChange: t,
  value: i,
  children: c
}) => {
  const s = g(() => h.findIndex((l) => l === i) !== -1, [h, i]), r = u((l) => {
    l.currentTarget.checked ? t == null || t([...h, i], l) : t == null || t(h.filter((k) => k !== i), l);
  }, [h, i]);
  return /* @__PURE__ */ e("label", { className: "phi-checkbox", children: [
    /* @__PURE__ */ n(
      "input",
      {
        type: "checkbox",
        className: "input",
        checked: s,
        onChange: r
      }
    ),
    " ",
    c
  ] });
}, s2 = ({
  name: h,
  checked: t,
  onChange: i,
  value: c,
  children: s
}) => {
  const r = g(() => t === c, [t, c]), l = u((a) => {
    a.currentTarget.checked && (i == null || i(c, a));
  }, [c]);
  return /* @__PURE__ */ e("label", { className: "phi-radio", children: [
    /* @__PURE__ */ n(
      "input",
      {
        type: "radio",
        className: "input",
        name: h,
        checked: r,
        onChange: l
      }
    ),
    " ",
    s
  ] });
}, E = () => /* @__PURE__ */ e("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ n("path", { d: "M0 0h24v24H0z", fill: "none" }),
  /* @__PURE__ */ n("path", { d: "M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z" })
] }), A = () => /* @__PURE__ */ e("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ n("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ n("path", { d: "M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z" })
] }), C = () => /* @__PURE__ */ e("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ n("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ n("path", { d: "M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z" })
] }), j = () => /* @__PURE__ */ e("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ n("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ n("path", { d: "M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z" })
] }), Z = () => /* @__PURE__ */ e("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ n("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ n("path", { d: "M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z" })
] }), F = () => /* @__PURE__ */ n("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 -960 960 960", width: "24px", children: /* @__PURE__ */ n("path", { d: "M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" }) }), I = () => /* @__PURE__ */ n("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 -960 960 960", width: "24px", children: /* @__PURE__ */ n("path", { d: "M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" }) }), S = () => /* @__PURE__ */ e("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ n("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ n("path", { d: "M19 13H5v-2h14v2z" })
] }), D = () => /* @__PURE__ */ e("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ n("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ n("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" })
] }), R = () => /* @__PURE__ */ e("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", "enable-background": "new 0 0 24 24", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ n("g", { children: /* @__PURE__ */ n("rect", { fill: "none", height: "24", width: "24", x: "0" }) }),
  /* @__PURE__ */ n("g", { children: /* @__PURE__ */ e("g", { children: [
    /* @__PURE__ */ n("polygon", { points: "20,7 20.94,4.94 23,4 20.94,3.06 20,1 19.06,3.06 17,4 19.06,4.94" }),
    /* @__PURE__ */ n("polygon", { points: "8.5,7 9.44,4.94 11.5,4 9.44,3.06 8.5,1 7.56,3.06 5.5,4 7.56,4.94" }),
    /* @__PURE__ */ n("polygon", { points: "20,12.5 19.06,14.56 17,15.5 19.06,16.44 20,18.5 20.94,16.44 23,15.5 20.94,14.56" }),
    /* @__PURE__ */ n("path", { d: "M17.71,9.12l-2.83-2.83C14.68,6.1,14.43,6,14.17,6c-0.26,0-0.51,0.1-0.71,0.29L2.29,17.46c-0.39,0.39-0.39,1.02,0,1.41 l2.83,2.83C5.32,21.9,5.57,22,5.83,22s0.51-0.1,0.71-0.29l11.17-11.17C18.1,10.15,18.1,9.51,17.71,9.12z M14.17,8.42l1.41,1.41 L14.41,11L13,9.59L14.17,8.42z M5.83,19.59l-1.41-1.41L11.59,11L13,12.41L5.83,19.59z" })
  ] }) })
] }), G = () => /* @__PURE__ */ e("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ n("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ n("path", { d: "M10.25 13c0 .69-.56 1.25-1.25 1.25S7.75 13.69 7.75 13s.56-1.25 1.25-1.25 1.25.56 1.25 1.25zM15 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm7 .25c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zM10.66 4.12C12.06 6.44 14.6 8 17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12zM4.42 9.47c1.71-.97 3.03-2.55 3.66-4.44C6.37 6 5.05 7.58 4.42 9.47zM20 12c0-.78-.12-1.53-.33-2.24-.7.15-1.42.24-2.17.24-3.13 0-5.92-1.44-7.76-3.69C8.69 8.87 6.6 10.88 4 11.86c.01.04 0 .09 0 .14 0 4.41 3.59 8 8 8s8-3.59 8-8z" })
] }), J = () => /* @__PURE__ */ e("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ n("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ n("path", { d: "M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" })
] }), O = () => /* @__PURE__ */ e("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ n("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ n("path", { d: "M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 9.67l1.69 2.26 2.48-3.1L19 15H9zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" })
] }), P = () => /* @__PURE__ */ e("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ n("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ n("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" })
] }), K = () => /* @__PURE__ */ e("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ n("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ n("path", { d: "M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z" })
] }), Q = () => /* @__PURE__ */ n("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 -960 960 960", width: "24px", children: /* @__PURE__ */ n("path", { d: "M320-200h280v-400h-80q-28 0-46 14t-43 41q-20 22-46.5 45.5T320-465v265Zm-80 80v-346q-52-14-86-56t-34-98q0-53 30.5-94t78.5-57q23-48 68.5-78T400-879q35 0 65.5 12t55.5 32q10-2 19-3.5t20-1.5q66 0 113 47t47 113q0 22-5.5 42T698-600h62q33 0 56.5 23.5T840-520v240q0 33-23.5 56.5T760-200h-80v80H240Zm-40-500q0 33 23.5 56.5T280-540q32 0 54.5-21t46.5-47q25-27 56.5-49.5T520-680h120q0-33-23.5-56.5T560-760q-25 0-42 6.5l-17 6.5-31-26q-11-9-28.5-17.5T400-799q-32 0-58.5 17T301-736l-14 30-32 11q-25 8-40 28.5T200-620Zm480 340h80v-240h-80v240Zm-360 80h280-280Z" }) }), U = () => /* @__PURE__ */ e("svg", { class: "phi-icon", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [
  /* @__PURE__ */ n("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
  /* @__PURE__ */ n("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
] }), W = {
  beer: Q,
  text: E,
  "align-center": A,
  "align-justify": C,
  "align-left": j,
  "align-right": Z,
  back: F,
  next: I,
  decrement: S,
  delete: D,
  effect: R,
  emoji: G,
  file: J,
  image: O,
  increment: P,
  save: K,
  okay: U
}, _2 = ({ icon: h }) => {
  const t = W[h];
  return t ? /* @__PURE__ */ n(t, {}) : null;
};
export {
  t2 as Button,
  o2 as Checkbox,
  n2 as Group,
  _2 as Icon,
  h2 as IconButton,
  e2 as Option,
  s2 as Radio,
  c2 as Stack,
  i2 as TextButton
};
//# sourceMappingURL=preact.js.map
