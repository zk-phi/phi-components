import type { ComponentChildren } from "preact";
import {
  register,
  keyword,
  keywordOrNumber,
  maybeKeywordOrNumber,
  instantiateStyleSheet,
  type SignalLike,
} from "../../../preact-web-components";
import Component, { type Gap, type Cols, type ColWidth, type Align } from ".";
import root from "../../../root";
import style from "./style.css?inline";

const sheet = instantiateStyleSheet(style);

const WCComponent = ({ gap, align, cols, colWidth, colMinWidth, colMaxWidth, children }: {
  gap: SignalLike<Gap>,
  align: SignalLike<Align>,
  cols: SignalLike<Cols>,
  colWidth: SignalLike<ColWidth | undefined>,
  colMinWidth: SignalLike<ColWidth>,
  colMaxWidth: SignalLike<ColWidth>,
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
      type: keywordOrNumber("min-content", ["max-content"]),
    },
  }, {
    name: "colMaxWidth",
    attribute: {
      name: "col-max-width",
      type: keywordOrNumber("min-content", ["max-content"]),
    },
  }],
});
