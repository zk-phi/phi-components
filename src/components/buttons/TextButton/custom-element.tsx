import type { ComponentChildren } from "preact";
import type { Signal } from "@preact/signals";
import {
  register,
  boolean,
  instantiateStyleSheet,
} from "../../../preact-web-components";
import Component from ".";
import root from "../../../root";
import style from "./style.css?inline";

const sheet = instantiateStyleSheet(style);

const WCComponent = ({ danger, children }: {
  danger: Signal<boolean>,
  children: ComponentChildren,
}) => (
  <Component danger={danger.value}>
    {children}
  </Component>
);

export default () => register(WCComponent, "phi-text-button", {
  adoptedStyleSheets: [root, sheet],
  properties: [{
    name: "danger",
    attribute: { name: "danger", type: boolean }
  }],
});
