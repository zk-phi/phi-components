import { useCallback } from "preact/hooks";
import type { ComponentChildren, JSX } from "preact";
import {
  register,
  string,
  numberOrUndef,
  boolean,
  oneof,
  instantiateStyleSheet,
  type SignalLike,
} from "../../../preact-web-components";
import Component from ".";
import root from "../../../root";
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
  adoptedStyleSheets: [root, sheet],
  properties: [{
    name: "value",
    formAssociated: true,
    attribute: { name: "value", type: numberOrUndef },
  }, {
    name: "required",
    attribute: { name: "required", type: boolean },
  }, {
    name: "min",
    attribute: { name: "min", type: numberOrUndef },
  }, {
    name: "max",
    attribute: { name: "max", type: numberOrUndef },
  }, {
    name: "step",
    attribute: { name: "step", type: numberOrUndef },
  }, {
    name: "placeholder",
    attribute: { name: "placeholder", type: string },
  }, {
    name: "error",
    attribute: { name: "error", type: boolean },
  }],
});
