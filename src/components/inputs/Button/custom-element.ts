import Button from "./component";
import { register } from "../../../utils/preact-custom-component";
import { instantiateStyleSheet } from "../../../utils/stylesheet";
import globalStyles from "../../../style/baseStyleSheet";
import buttonStyles from "./style.css?inline";

const style = instantiateStyleSheet(buttonStyles);

export default () => register(
  Button,
  "phi-button",
  ["onClick", "danger", "variant", "icon", "children"],
  { shadow: true, adoptedStyleSheets: [globalStyles, style] },
);
