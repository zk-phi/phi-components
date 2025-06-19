import type { ComponentChildren } from "preact";
import {
  register,
  oneof,
  instantiateStyleSheet,
  type SignalLike,
} from "../../../preact-web-components";
import Component, { type Size } from ".";
import root from "../../../root";
import style from "./style.css?inline";

const sheet = instantiateStyleSheet(style);

const WCComponent = ({ size, children }: {
  size: SignalLike<Size>,
  children: ComponentChildren,
}) => (
  <Component size={size.value}>
    {children}
  </Component>
);

export default () => register(WCComponent, "phi-stack", {
  adoptedStyleSheets: [root, sheet],
  properties: [{
    name: "size",
    attribute: { name: "size", type: oneof("md", ["sm"]) },
  }],
});
