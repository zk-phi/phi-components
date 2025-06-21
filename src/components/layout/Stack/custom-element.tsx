import type { ComponentChildren } from "preact";
import {
  register,
  oneof,
  instantiateStyleSheet,
  type SignalLike,
} from "../../../preact-web-components";
import Component, { type Gap } from ".";
import root from "../../../root";
import style from "./style.css?inline";

const sheet = instantiateStyleSheet(style);

const WCComponent = ({ gap, children }: {
  gap: SignalLike<Gap>,
  children: ComponentChildren,
}) => (
  <Component gap={gap.value}>
    {children}
  </Component>
);

export default () => register(WCComponent, "phi-stack", {
  adoptedStyleSheets: [root, sheet],
  properties: [{
    name: "gap",
    attribute: { name: "gap", type: oneof("md", ["sm"]) },
  }],
});
