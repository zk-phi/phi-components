import { ComponentChildren, JSX } from 'preact';
export type Cols = number | "auto-fit";
export type ColWidth = number | "max-content" | "min-content";
export type Gap = "sm" | "md";
export type Align = "left" | "center" | "right" | "space-between";
declare const Component: ({ gap, align, cols, colWidth, colMinWidth, colMaxWidth, style, children, }: {
    gap: Gap;
    align?: Align;
    cols?: Cols;
    colWidth?: ColWidth;
    colMinWidth?: ColWidth;
    colMaxWidth?: ColWidth;
    style?: JSX.CSSProperties;
    children: ComponentChildren;
}) => JSX.Element;
export default Component;
