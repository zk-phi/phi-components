import { useCallback } from "preact/hooks"
import type { ComponentChildren } from "preact";
import {
  register,
  boolean,
  instantiateStyleSheet,
  type SignalLike,
} from "../../../preact-web-components";
import Component from ".";

import baseSheet from "../../../baseStyles";
import style from "./style.css?inline";

const sheet = instantiateStyleSheet(style);

const WCComponent = ({ $el, danger, children }: {
  $el: HTMLElement,
  danger: SignalLike<boolean>,
  children: ComponentChildren,
}) => (
  <Component danger={danger.value}>
    {children}
  </Component>
);

export default () => register(WCComponent, "phi-text-button", {
  adoptedStyleSheets: [baseSheet, sheet],
  properties: [{
    name: "danger",
    attribute: { name: "danger", type: boolean }
  }],
});
