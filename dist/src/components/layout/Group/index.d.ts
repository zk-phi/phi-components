import { ComponentChildren } from 'preact';
export type Size = "sm" | "md";
export type Align = "left" | "center" | "right" | "space-between";
declare const Component: ({ size, align, children }: {
    size: Size;
    align: Align;
    children: ComponentChildren;
}) => import("preact").JSX.Element;
export default Component;
