import { useCallback } from "preact/hooks";
import type { JSX } from "preact";
import {
  register,
  maybeNumber,
  number,
  instantiateStyleSheet,
  type SignalLike,
} from "../../../preact-web-components";
import Component from ".";
import root from "../../../root";
import style from "./style.css?inline";

const sheet = instantiateStyleSheet(style);

const WCComponent = ({ $el, value, min, max, step }: {
  $el: HTMLElement,
  value: SignalLike<number | undefined>,
  min: SignalLike<number>,
  max: SignalLike<number>,
  step: SignalLike<number>,
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
        value={value.value ?? min.value}
        min={min.value}
        max={max.value}
        step={step.value}
        onInput={handler} />
  );
};

export default () => register(WCComponent, "phi-slider", {
  adoptedStyleSheets: [root, sheet],
  properties: [{
    name: "value",
    formAssociated: true,
    attribute: { name: "value", type: maybeNumber },
  }, {
    name: "min",
    attribute: { name: "min", type: number(0) },
  }, {
    name: "max",
    attribute: { name: "max", type: number(100) },
  }, {
    name: "step",
    attribute: { name: "step", type: number(1) },
  }],
});
