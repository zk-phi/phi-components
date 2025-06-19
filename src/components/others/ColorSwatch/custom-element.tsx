import {
  register,
  string,
  instantiateStyleSheet,
  type SignalLike,
} from "../../../preact-web-components";
import Component from ".";
import root from "../../../root";
import style from "./style.css?inline";

const sheet = instantiateStyleSheet(style);

const WCComponent = ({ color }: {
  color: SignalLike<string>,
}) => (
  <Component color={color.value} />
);


export default () => register(WCComponent, "phi-color-swatch", {
  adoptedStyleSheets: [root, sheet],
  properties: [{
    name: "color",
    attribute: { name: "color", type: string }
  }],
});
