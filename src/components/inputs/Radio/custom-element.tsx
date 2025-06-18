import { useCallback } from "preact/hooks";
import type { ComponentChildren, JSX } from "preact";
import {
  register,
  string,
  instantiateStyleSheet,
  type SignalLike,
} from "../../../preact-web-components";
import Component from ".";
import destyle from "../../../destyle";
import style from "./style.css?inline";

const sheet = instantiateStyleSheet(style);

const WCComponent = <T,>({ $el, name, checked, value, children }: {
  $el: HTMLElement,
  name: SignalLike<string>,
  checked: SignalLike<T>,
  children: ComponentChildren,
  value: SignalLike<T>,
}) => {
  const handler = useCallback((
    newChecked: T,
    e: JSX.TargetedEvent<HTMLInputElement, Event>,
  ) => {
    e.stopPropagation();
    checked.value = newChecked;
    $el.dispatchEvent(new Event("change"));
  }, [$el, checked]);

  return (
    <Component name={name.value} checked={checked.value} value={value.value} onChange={handler}>
      {children}
    </Component>
  );
};

export default () => register(WCComponent, "phi-radio", {
  adoptedStyleSheets: [destyle, sheet],
  properties: [{
    name: "name",
    attribute: { name: "name", type: string },
  }, {
    name: "checked",
    formAssociated: true,
    attribute: { name: "checked", type: string },
  }, {
    name: "value",
    attribute: { name: "variant", type: string }
  }],
});
