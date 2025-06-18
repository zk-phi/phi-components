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
import destyle from "../../../destyle";
import style from "./style.css?inline";

const sheet = instantiateStyleSheet(style);

const WCComponent = ({ $el, placeholder, value, error }: {
  $el: HTMLElement,
  value: SignalLike<string>,
  placeholder: SignalLike<string>,
  error: SignalLike<boolean>,
}) => {
  const handler = useCallback((
    newValue: string,
    e: JSX.TargetedEvent<HTMLInputElement, Event>,
  ) => {
    e.stopPropagation();
    value.value = newValue;
    $el.dispatchEvent(new Event("input"));
  }, [$el, value]);

  return (
    <Component
        placeholder={placeholder.value}
        value={value.value}
        error={error.value}
        onInput={handler} />
  );
};

export default () => register(WCComponent, "phi-text-input", {
  adoptedStyleSheets: [destyle, sheet],
  properties: [{
    name: "value",
    formAssociated: true,
    attribute: { name: "value", type: string },
  }, {
    name: "placeholder",
    attribute: { name: "placeholder", type: string },
  }, {
    name: "error",
    attribute: { name: "error", type: boolean },
  }],
});
