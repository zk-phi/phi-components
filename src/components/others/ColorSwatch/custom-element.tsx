import type { Signal } from "@preact/signals";
import {
  register,
  string,
  instantiateStyleSheet,
} from "../../../preact-web-components";
import Component from ".";
import root from "../../../root";
import style from "./style.css?inline";

const sheet = instantiateStyleSheet(style);

const WCComponent = ({ color }: {
  color: Signal<string>,
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
