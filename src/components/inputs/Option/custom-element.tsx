import { useCallback } from "preact/hooks";
import type { ComponentChildren, JSX } from "preact";
import {
  register,
  string,
  boolean,
  oneof,
  instantiateStyleSheet,
  type SignalLike,
} from "../../../preact-web-components";
import Component from ".";
import root from "../../../root";
import style from "../Checkbox/style.css?inline";

const sheet = instantiateStyleSheet(style);

const WCComponent = <T,>({ $el, checked, value, children }: {
  $el: HTMLElement,
  checked: SignalLike<T[]>,
  children: ComponentChildren,
  value: SignalLike<T>,
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
    attribute: {
      name: "checked",
      type: (value) => typeof value === "string" ? value.split(",") : [],
    },
  }, {
    name: "value",
    attribute: { name: "variant", type: string }
  }],
});
