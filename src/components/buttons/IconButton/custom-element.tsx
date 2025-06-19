import type { ComponentChildren } from "preact";
import {
  register,
  boolean,
  instantiateStyleSheet,
  type SignalLike,
} from "../../../preact-web-components";
import Component from ".";
import root from "../../../root";
import style from "./style.css?inline";

const sheet = instantiateStyleSheet(style);

const WCComponent = ({ danger, children }: {
  danger: SignalLike<boolean>,
  children: ComponentChildren,
}) => (
  <Component danger={danger.value}>
    {children}
  </Component>
);

export default () => register(WCComponent, "phi-icon-button", {
  adoptedStyleSheets: [root, sheet],
  properties: [{
    name: "danger",
    attribute: { name: "danger", type: boolean }
  }],
});
