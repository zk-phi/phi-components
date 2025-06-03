import type { ComponentChildren } from "preact";
import {
  register,
  type AttributeValue,
  type SignalLike,
} from "../../../utils/preact-custom-component";
import { boolean } from "../../../utils/attributeTypes";

import { instantiateStyleSheet } from "../../../utils/stylesheet";
import resetStyles from "../../../destyle";
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

const WCButton = ({ danger, variant, icon, onClick, children }: {
  danger: SignalLike<boolean>,
  variant: SignalLike<Variant>,
  onClick: SignalLike<() => void | undefined>
  icon: ComponentChildren,
  children: ComponentChildren,
}) => {
  return (
    <Button icon={icon} danger={danger.value} variant={variant.value}>
      {children}
    </Button>
  );
}

export default () => register(WCButton, "phi-button", {
  // Add styles to the ShadowDOM
  adoptedStyleSheets: [resetStyles, style],
  // Create slots and pass to Preact component through its properties
  // eg. When set `["icon"]`, then `<slot name="icon" />` is passed through the `name` prop
  slots: ["icon"],
  // List of states, that are both accessible from the Preact component,
  // and from the vanilla JS world.
  // Initial values will be retrieved from each corresponding attributes.
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
