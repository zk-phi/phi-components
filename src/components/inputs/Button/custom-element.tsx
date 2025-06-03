import { useCallback } from "preact/hooks"
import type { ComponentChildren } from "preact";
import {
  register,
  type AttributeValue,
  type SignalLike,
} from "../../../utils/preact-custom-component";
import { boolean } from "../../../utils/attributeTypes";

import { instantiateStyleSheet } from "../../../utils/stylesheet";
import baseStyles from "../../../baseStyles";
import buttonStyles from "./style.css?inline";
import Button, { type Variant } from ".";

const style = instantiateStyleSheet(buttonStyles);

const parseVariant = (value: AttributeValue): Variant => {
  const string = value?.toString() ?? "";
  if (string === "default" || string === "primary" || string === "dotted") {
    return string;
  }
  return "default";
}

const WCButton = ({ $el, danger, variant, icon, onClick, children }: {
  $el: HTMLElement,
  danger: SignalLike<boolean>,
  variant: SignalLike<Variant>,
  onClick: SignalLike<() => void | undefined>
  icon: ComponentChildren,
  children: ComponentChildren,
}) => {
  const handler = useCallback((e: MouseEvent) => {
    $el.dispatchEvent(new Event("click", { bubbles: true }));
    onClick.value?.();
    e.preventDefault();
  }, [$el, onClick.value]);

  return (
    <Button icon={icon} danger={danger.value} variant={variant.value} onClick={handler}>
      {children}
    </Button>
  );
}

export default () => register(WCButton, "phi-button", {
  adoptedStyleSheets: [baseStyles, style],
  slots: ["icon"],
  properties: [{
    name: "danger",
    attribute: { name: "danger", type: boolean }
  }, {
    name: "variant",
    attribute: { name: "variant", type: parseVariant }
  }, {
    name: "onClick",
    initialValue: undefined,
  }],
});
