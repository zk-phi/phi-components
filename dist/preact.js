import { jsxs as c, jsx as s } from "preact/jsx-runtime";
const m = ({
  onClick: t,
  danger: n,
  variant: o = "default",
  icon: a,
  children: e
}) => /* @__PURE__ */ c("button", { className: `phi-button ${o} ${n ? "danger" : ""}`, onClick: t, children: [
  a && /* @__PURE__ */ s("span", { className: "icon", children: a }),
  e
] }), u = ({
  onClick: t,
  danger: n,
  children: o
}) => /* @__PURE__ */ s("button", { className: `phi-icon-button ${n ? "danger" : ""}`, onClick: t, children: o }), i = ({
  onClick: t,
  danger: n,
  children: o
}) => /* @__PURE__ */ s("button", { className: `phi-text-button ${n ? "danger" : ""}`, onClick: t, children: o }), $ = ({ size: t, align: n, children: o }) => /* @__PURE__ */ s("div", { className: `phi-group ${t} ${n}`, children: o }), r = ({ size: t, children: n }) => /* @__PURE__ */ s("div", { className: `phi-stack ${t}`, children: n });
export {
  m as Button,
  $ as Group,
  u as IconButton,
  r as Stack,
  i as TextButton
};
//# sourceMappingURL=preact.js.map
