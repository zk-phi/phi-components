import Button from "./component";
import { register } from "../../../utils/preact-custom-component";
import { instantiateStyleSheet } from "../../../utils/stylesheet";
import {
  parseBooleanAttribute,
  normalizeStringAttribute,
} from "../../../utils/attributeParsers";
import globalStyles from "../../../style/baseStyleSheet";
import buttonStyles from "./style.css?inline";

const style = instantiateStyleSheet(buttonStyles);

export default () => register(Button, "phi-button", {
  // Add styles to the ShadowDOM
  adoptedStyleSheets: [globalStyles, style],
  // Create slots and pass to Preact component through its properties
  // eg. When set `["icon"]`, then `<slot name="icon" />` is passed through the `name` prop
  slots: ["icon"],
  // DOM properties that makes Preact component update.
  properties: ["onClick", "danger", "variant"],
  // Attribute parsers to get initial props passed to the Preact component
  attributes: {
    danger: parseBooleanAttribute,
    variant: normalizeStringAttribute,
  },
});
