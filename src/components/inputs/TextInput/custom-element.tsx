import { useCallback } from "preact/hooks";
import type { JSX } from "preact";
import {
  register,
  string,
  boolean,
  numberOrUndef,
  oneof,
  instantiateStyleSheet,
  type SignalLike,
} from "../../../preact-web-components";
import Component, { type Size } from ".";
import root from "../../../root";
import style from "./style.css?inline";

const sheet = instantiateStyleSheet(style);

const WCComponent = ({
  $el,
  value,
  placeholder,
  required,
  minlength,
  maxlength,
  size,
  error,
}: {
  $el: HTMLElement,
  value: SignalLike<string>,
  placeholder: SignalLike<string>,
  required: SignalLike<boolean>,
  minlength: SignalLike<number | undefined>,
  maxlength: SignalLike<number | undefined>,
  size: SignalLike<Size>,
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
        value={value.value}
        placeholder={placeholder.value}
        required={required.value}
        minlength={minlength.value}
        maxlength={maxlength.value}
        size={size.value}
        error={error.value}
        onInput={handler} />
  );
};

export default () => register(WCComponent, "phi-text-input", {
  adoptedStyleSheets: [root, sheet],
  properties: [{
    name: "value",
    formAssociated: true,
    attribute: { name: "value", type: string },
  }, {
    name: "placeholder",
    attribute: { name: "placeholder", type: string },
  }, {
    name: "required",
    attribute: { name: "required", type: boolean },
  }, {
    name: "minlength",
    attribute: { name: "minlength", type: numberOrUndef },
  }, {
    name: "maxlength",
    attribute: { name: "maxlength", type: numberOrUndef },
  }, {
    name: "size",
    attribute: { name: "size", type: oneof("md", ["sm"]) },
  }, {
    name: "error",
    attribute: { name: "error", type: boolean },
  }],
});
