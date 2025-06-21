import type { ComponentChildren } from "preact";
import {
  register,
  oneof,
  instantiateStyleSheet,
  type SignalLike,
} from "../../../preact-web-components";
import Component, { type Gap, type Align } from ".";
import root from "../../../root";
import style from "./style.css?inline";

const sheet = instantiateStyleSheet(style);

const WCComponent = ({ gap, align, children }: {
  gap: SignalLike<Gap>,
  align: SignalLike<Align>
  children: ComponentChildren,
}) => (
  <Component gap={gap.value} align={align.value}>
    {children}
  </Component>
);

export default () => register(WCComponent, "phi-group", {
  adoptedStyleSheets: [root, sheet],
  properties: [{
    name: "gap",
    attribute: { name: "gap", type: oneof("md", ["sm"]) },
  }, {
    name: "align",
    attribute: { name: "align", type: oneof("left", ["center", "right", "space-between"]) },
  }],
});
