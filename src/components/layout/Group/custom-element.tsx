import { type ComponentChildren } from "preact";
import {
  register,
  boolean,
  oneof,
  instantiateStyleSheet,
  type SignalLike,
} from "../../../preact-web-components";
import Component, { type Size, type Align } from ".";

import baseSheet from "../../../baseStyles";
import style from "./style.css?inline";

const sheet = instantiateStyleSheet(style);

const WCComponent = ({ size, align, children }: {
  size: SignalLike<Size>,
  align: SignalLike<Align>
  children: ComponentChildren,
}) => (
  <Component size={size.value} align={align.value}>
    {children}
  </Component>
);

export default () => register(WCComponent, "phi-group", {
  adoptedStyleSheets: [baseSheet, sheet],
  properties: [{
    name: "size",
    attribute: { name: "size", type: oneof("md", ["sm"]) },
  }, {
    name: "align",
    attribute: { name: "align", type: oneof("left", ["center", "right", "space-between"]) },
  }],
});
