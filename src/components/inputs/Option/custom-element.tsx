import { useCallback } from "preact/hooks";
import type { ComponentChildren, JSX } from "preact";
import type { Signal } from "@preact/signals";
import {
  register,
  string,
  stringList,
  instantiateStyleSheet,
} from "../../../preact-web-components";
import Component from ".";
import root from "../../../root";
import style from "../Checkbox/style.css?inline";

const sheet = instantiateStyleSheet(style);

const WCComponent = <T,>({ $el, checked, value, children }: {
  $el: HTMLElement,
  checked: Signal<T[]>,
  children: ComponentChildren,
  value: Signal<T>,
}) => {
  const handler = useCallback((
    newChecked: T[],
    e: JSX.TargetedEvent<HTMLInputElement, Event>,
  ) => {
    e.stopPropagation();
    checked.value = newChecked;
    $el.dispatchEvent(new Event("change"));
  }, [$el, checked]);

  return (
    <Component checked={checked.value} value={value.value} onChange={handler}>
      {children}
    </Component>
  );
};

export default () => register(WCComponent, "phi-option", {
  adoptedStyleSheets: [root, sheet],
  properties: [{
    name: "checked",
    formAssociated: true,
    attribute: { name: "checked", type: stringList },
  }, {
    name: "value",
    attribute: { name: "value", type: string }
  }],
});
