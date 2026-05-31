import type { ComponentChildren } from "preact";
import type { Signal } from "@preact/signals";
import {
  register,
  boolean,
  keyword,
  instantiateStyleSheet,
} from "../../../preact-web-components";
import Component, { type Variant } from ".";
import root from "../../../root";
import style from "./style.css?inline";

const sheet = instantiateStyleSheet(style);

const WCComponent = ({ danger, variant, icon, children }: {
  $el: HTMLElement,
  danger: Signal<boolean>,
  variant: Signal<Variant>,
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
    attribute: { name: "variant", type: keyword<Variant>("default", ["primary", "dotted"]) }
  }],
});
