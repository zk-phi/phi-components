import type { ComponentChildren } from "preact";
import type { Signal } from "@preact/signals";
import {
  register,
  keyword,
  maybeNumber,
  instantiateStyleSheet,
} from "../../../preact-web-components";
import Component, { type Padding } from ".";
import root from "../../../root";
import style from "./style.css?inline";

const sheet = instantiateStyleSheet(style);

const WCComponent = ({ padding, maxWidth, children }: {
  padding: Signal<Padding>,
  maxWidth: Signal<number | undefined>,
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
    attribute: { name: "padding", type: keyword<Padding>("md", ["sm"]) },
  }, {
    name: "maxWidth",
    attribute: { name: "max-width", type: maybeNumber },
  }],
});
