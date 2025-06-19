import type { ComponentChildren } from "preact";
import {
  register,
  boolean,
  oneof,
  instantiateStyleSheet,
  type SignalLike,
} from "../../../preact-web-components";
import Component, { type Variant } from ".";
import root from "../../../root";
import style from "./style.css?inline";

const sheet = instantiateStyleSheet(style);

const WCComponent = ({ danger, variant, icon, children }: {
  $el: HTMLElement,
  danger: SignalLike<boolean>,
  variant: SignalLike<Variant>,
  icon: ComponentChildren,
  children: ComponentChildren,
}) => (
  <Component icon={icon} danger={danger.value} variant={variant.value}>
    {children}
  </Component>
);


export default () => register(WCComponent, "phi-button", {
  adoptedStyleSheets: [root, sheet],
  slots: ["icon"],
  properties: [{
    name: "danger",
    attribute: { name: "danger", type: boolean }
  }, {
    name: "variant",
    attribute: { name: "variant", type: oneof("default", ["primary", "dotted"]) }
  }],
});
