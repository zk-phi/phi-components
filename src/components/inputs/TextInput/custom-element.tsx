import { useCallback } from "preact/hooks";
import type { JSX } from "preact";
import type { Signal } from "@preact/signals";
import {
  register,
  string,
  boolean,
  maybeNumber,
  keyword,
  instantiateStyleSheet,
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
  value: Signal<string>,
  placeholder: Signal<string>,
  required: Signal<boolean>,
  minlength: Signal<number | undefined>,
  maxlength: Signal<number | undefined>,
  size: Signal<Size>,
  error: Signal<boolean>,
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
    attribute: { name: "minlength", type: maybeNumber },
  }, {
    name: "maxlength",
    attribute: { name: "maxlength", type: maybeNumber },
  }, {
    name: "size",
    attribute: { name: "size", type: keyword("md", ["sm"]) },
  }, {
    name: "error",
    attribute: { name: "error", type: boolean },
  }],
});
