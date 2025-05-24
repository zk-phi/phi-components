import { options as t } from "preact";
var s = 0;
function a(_, o, l, u, f, c) {
  o || (o = {});
  var e, n, r = o;
  if ("ref" in r) for (n in r = {}, o) n == "ref" ? e = o[n] : r[n] = o[n];
  var i = { type: _, props: r, key: l, ref: e, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --s, __i: -1, __u: 0, __source: f, __self: c };
  if (typeof _ == "function" && (e = _.defaultProps)) for (n in e) r[n] === void 0 && (r[n] = e[n]);
  return t.vnode && t.vnode(i), i;
}
const d = ({
  onClick: _,
  danger: o,
  variant: l = "default",
  icon: u,
  children: f
}) => /* @__PURE__ */ a(
  "button",
  {
    className: `phi-button ${l} ${o ? "danger" : ""}`,
    onClick: _,
    children: [
      u && /* @__PURE__ */ a("span", { className: "icon", children: u }),
      f
    ]
  }
);
export {
  d as Button
};
