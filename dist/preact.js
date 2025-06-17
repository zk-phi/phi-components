import { jsxs as c, jsx as s } from "preact/jsx-runtime";
const u = ({
  onClick: t,
  danger: n,
  variant: o = "default",
  icon: a,
  children: e
}) => /* @__PURE__ */ c("button", { className: `phi-button ${o} ${n ? "danger" : ""}`, onClick: t, children: [
  a && /* @__PURE__ */ s("span", { className: "icon", children: a }),
  e
] }), m = ({
  onClick: t,
  danger: n,
  children: o
}) => /* @__PURE__ */ s("button", { className: `phi-icon-button ${n ? "danger" : ""}`, onClick: t, children: o }), r = ({
  onClick: t,
  danger: n,
  children: o
}) => /* @__PURE__ */ s("button", { className: `phi-text-button ${n ? "danger" : ""}`, onClick: t, children: o }), i = ({ size: t, align: n, children: o }) => /* @__PURE__ */ s("div", { className: `phi-group ${t} ${n}`, children: o });
export {
  u as Button,
  i as Group,
  m as IconButton,
  r as TextButton
};
//# sourceMappingURL=preact.js.map
