import { useCallback } from "preact/hooks"
import type { ComponentChildren } from "preact";
import { register, type SignalLike } from "../../../utils/preact-custom-component";
import { boolean } from "../../../utils/attributeTypes";

import { instantiateStyleSheet } from "../../../utils/stylesheet";
import baseSheet from "../../../baseStyles";
import style from "./style.css?inline";
import Component from ".";

const sheet = instantiateStyleSheet(style);

const WCComponent = ({ $el, danger, onClick, children }: {
  $el: HTMLElement,
  danger: SignalLike<boolean>,
  onClick: SignalLike<() => void | undefined>
  children: ComponentChildren,
}) => {
  const handler = useCallback(() => {
    $el.dispatchEvent(new Event("click", { bubbles: true }));
    onClick.value?.();
  }, [$el, onClick.value]);

  return (
    <Component danger={danger.value} onClick={handler}>
      {children}
    </Component>
  );
}

export default () => register(WCComponent, "phi-icon-button", {
  adoptedStyleSheets: [baseSheet, sheet],
  properties: [{
    name: "danger",
    attribute: { name: "danger", type: boolean }
  }, {
    name: "onClick",
    initialValue: undefined,
  }],
});
