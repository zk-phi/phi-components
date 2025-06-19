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

const WCComponent = ({ icon }: {
  icon: SignalLike<string>,
}) => (
  <Component icon={icon.value} />
);


export default () => register(WCComponent, "phi-icon", {
  adoptedStyleSheets: [root, sheet],
  properties: [{
    name: "icon",
    attribute: { name: "icon", type: string }
  }],
});
