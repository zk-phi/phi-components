import { jsxs as o, jsx as r } from "preact/jsx-runtime";
const l = ({
  onClick: s,
  danger: n,
  variant: a = "default",
  icon: t,
  children: e
}) => /* @__PURE__ */ o(
  "button",
  {
    className: `phi-button ${a} ${n ? "danger" : ""}`,
    onClick: s,
    children: [
      t && /* @__PURE__ */ r("span", { className: "icon", children: t }),
      e
    ]
  }
);
export {
  l as Button
};
