import { ComponentChildren, JSX } from 'preact';
export type Gap = "sm" | "md";
export type Align = "left" | "center" | "right" | "space-between";
declare const Component: ({ gap, align, style, children }: {
    gap: Gap;
    align?: Align;
    style?: JSX.CSSProperties;
    children: ComponentChildren;
}) => JSX.Element;
export default Component;
