import { useCallback } from "preact/hooks";
import type { ComponentChildren, JSX } from "preact";
import {
  register,
  string,
  number,
  boolean,
  oneof,
  instantiateStyleSheet,
  type SignalLike,
} from "../../../preact-web-components";
import Component from ".";
import destyle from "../../../destyle";
import style from "./style.css?inline";

const sheet = instantiateStyleSheet(style);

const WCComponent = ({ $el, value, required, min, max, step, placeholder, error }: {
  $el: HTMLElement,
  value: SignalLike<number | undefined>,
  required: SignalLike<boolean>,
  min: SignalLike<number | undefined>,
  max: SignalLike<number | undefined>,
  step: SignalLike<number | undefined>,
  placeholder: SignalLike<string>,
  error: SignalLike<boolean>,
}) => {
  const handler = useCallback((
    newValue: number | undefined,
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
        required={required.value}
        min={min.value}
        max={max.value}
        step={step.value}
        error={error.value}
        onInput={handler} />
  );
};

export default () => register(WCComponent, "phi-number-input", {
  adoptedStyleSheets: [destyle, sheet],
  properties: [{
    name: "value",
    formAssociated: true,
    attribute: { name: "value", type: number },
  }, {
    name: "required",
    attribute: { name: "required", type: boolean },
  }, {
    name: "min",
    formAssociated: true,
    attribute: { name: "min", type: number },
  }, {
    name: "max",
    formAssociated: true,
    attribute: { name: "max", type: number },
  }, {
    name: "step",
    formAssociated: true,
    attribute: { name: "step", type: number },
  }, {
    name: "placeholder",
    attribute: { name: "placeholder", type: string },
  }, {
    name: "error",
    formAssociated: true,
    attribute: { name: "error", type: boolean },
  }],
});
