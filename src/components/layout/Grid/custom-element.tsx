import type { ComponentChildren } from "preact";
import type { Signal } from "@preact/signals";
import {
  register,
  keyword,
  keywordOrNumber,
  maybeKeywordOrNumber,
  instantiateStyleSheet,
} from "../../../preact-web-components";
import Component, { type Gap, type Cols, type ColWidth, type Align } from ".";
import root from "../../../root";
import style from "./style.css?inline";

const sheet = instantiateStyleSheet(style);

const WCComponent = ({ gap, align, cols, colWidth, colMinWidth, colMaxWidth, children }: {
  gap: Signal<Gap>,
  align: Signal<Align>,
  cols: Signal<Cols>,
  colWidth: Signal<ColWidth | undefined>,
  colMinWidth: Signal<ColWidth>,
  colMaxWidth: Signal<ColWidth>,
  children: ComponentChildren,
}) => (
  <Component
      gap={gap.value}
      align={align.value}
      cols={cols.value}
      colWidth={colWidth.value}
      colMinWidth={colMinWidth.value}
      colMaxWidth={colMaxWidth.value}>
    {children}
  </Component>
);

export default () => register(WCComponent, "phi-grid", {
  adoptedStyleSheets: [root, sheet],
  properties: [{
    name: "gap",
    attribute: { name: "gap", type: keyword("md", ["sm"]) },
  }, {
    name: "align",
    attribute: { name: "align", type: keyword("left", ["center", "right", "space-between"]) },
  }, {
    name: "cols",
    attribute: {
      name: "cols",
      type: keywordOrNumber("auto-fit"),
    },
  }, {
    name: "colWidth",
    attribute: {
      name: "col-width",
      type: maybeKeywordOrNumber(["max-content", "min-content"]),
    },
  }, {
    name: "colMinWidth",
    attribute: {
      name: "col-min-width",
      type: keywordOrNumber("max-content", ["min-content"]),
    },
  }, {
    name: "colMaxWidth",
    attribute: {
      name: "col-max-width",
      type: keywordOrNumber("max-content", ["min-content"]),
    },
  }],
});
