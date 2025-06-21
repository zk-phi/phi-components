import { useCallback } from "preact/hooks";
import type { ComponentChildren, JSX } from "preact";
import {
  register,
  string,
  boolean,
  instantiateStyleSheet,
  type SignalLike,
} from "../../../preact-web-components";
import Component from ".";
import root from "../../../root";
import style from "./style.css?inline";

const sheet = instantiateStyleSheet(style);

const WCComponent = ({ $el, checked, children }: {
  $el: HTMLElement,
  checked: SignalLike<boolean>,
  children: ComponentChildren,
}) => {
  const handler = useCallback((
    newChecked: boolean,
    e: JSX.TargetedEvent<HTMLInputElement, Event>,
  ) => {
    e.stopPropagation();
    checked.value = newChecked;
    $el.dispatchEvent(new Event("change"));
  }, [$el, checked]);

  return (
    <Component checked={checked.value} onChange={handler}>
      {children}
    </Component>
  );
};

export default () => register(WCComponent, "phi-checkbox", {
  adoptedStyleSheets: [root, sheet],
  properties: [{
    name: "checked",
    formAssociated: true,
    attribute: { name: "checked", type: boolean },
  }, {
    name: "value",
    attribute: { name: "value", type: string }
  }],
});
