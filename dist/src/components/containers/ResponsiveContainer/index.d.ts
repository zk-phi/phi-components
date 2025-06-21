import { ComponentChildren, JSX } from 'preact';
export type Padding = "sm" | "md";
declare const Component: ({ padding, maxWidth, style, children, }: {
    padding: Padding;
    maxWidth?: number | "100%";
    style?: JSX.CSSProperties;
    children: ComponentChildren;
}) => JSX.Element;
export default Component;
