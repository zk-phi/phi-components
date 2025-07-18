import { ComponentChildren, JSX } from 'preact';
export type Gap = "sm" | "md";
declare const Component: ({ gap, style, children }: {
    gap: Gap;
    style?: JSX.CSSProperties;
    children: ComponentChildren;
}) => JSX.Element;
export default Component;
