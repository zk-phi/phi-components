import { jsxs as c, jsx as s } from "preact/jsx-runtime";
const r = ({
  onClick: t,
  danger: n,
  variant: o = "default",
  icon: a,
  children: e
}) => /* @__PURE__ */ c(
  "button",
  {
    className: `phi-button ${o} ${n ? "danger" : ""}`,
    onClick: t,
    children: [
      a && /* @__PURE__ */ s("span", { className: "icon", children: a }),
      e
    ]
  }
), i = ({
  onClick: t,
  danger: n,
  children: o
}) => /* @__PURE__ */ s(
  "button",
  {
    className: `phi-icon-button ${n ? "danger" : ""}`,
    onClick: t,
    children: o
  }
), l = ({
  onClick: t,
  danger: n,
  children: o
}) => /* @__PURE__ */ s(
  "button",
  {
    className: `phi-text-button ${n ? "danger" : ""}`,
    onClick: t,
    children: o
  }
);
export {
  r as Button,
  i as IconButton,
  l as TextButton
};
