import type { ComponentChildren } from "preact";
import {
  register,
  keyword,
  maybeNumber,
  instantiateStyleSheet,
  type SignalLike,
} from "../../../preact-web-components";
import Component, { type Padding } from ".";
import root from "../../../root";
import style from "./style.css?inline";

const sheet = instantiateStyleSheet(style);

const WCComponent = ({ padding, maxWidth, children }: {
  padding: SignalLike<Padding>,
  maxWidth: SignalLike<number | undefined>,
  children: ComponentChildren,
}) => (
  <Component padding={padding.value} maxWidth={maxWidth.value}>
    {children}
  </Component>
);

export default () => register(WCComponent, "phi-responsive-container", {
  adoptedStyleSheets: [root, sheet],
  properties: [{
    name: "padding",
    attribute: { name: "padding", type: keyword("md", ["sm"]) },
  }, {
    name: "max-width",
    attribute: { name: "max-width", type: maybeNumber },
  }],
});
