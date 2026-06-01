import type { ComponentChildren } from "preact";
import type { Signal } from "@preact/signals";
import {
  register,
  keyword,
  instantiateStyleSheet,
} from "../../../preact-web-components";
import Component, { type Gap, type ConfigurationEntry } from ".";
import root from "../../../root";
import style from "./style.css?inline";

const sheet = instantiateStyleSheet(style);

const WCComponent = ({ gap, configuration, children }: {
  gap: Signal<Gap>,
  configuration: Signal<Readonly<ConfigurationEntry[]>>,
  children: ComponentChildren,
}) => (
  <Component
      gap={gap.value}
      configuration={configuration.value}>
    {children}
  </Component>
);

export default () => register(WCComponent, "phi-responsive-columns", {
  adoptedStyleSheets: [root, sheet],
  properties: [{
    name: "gap",
    attribute: { name: "gap", type: keyword<Gap>("md", ["sm"]) },
  }, {
    name: "configuration",
    initialValue: [{ width: 0, columns: [1] }],
  }],
});
