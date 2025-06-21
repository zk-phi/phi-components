import { ComponentChildren, JSX } from 'preact';
export type Variant = "default" | "primary" | "dotted";
declare const Component: ({ onClick, danger, variant, icon, style, children, }: {
    danger?: boolean;
    variant: Variant;
    onClick?: () => void;
    icon?: ComponentChildren;
    style?: JSX.CSSProperties;
    children: ComponentChildren;
}) => JSX.Element;
export default Component;
