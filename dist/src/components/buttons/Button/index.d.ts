import { ComponentChildren } from 'preact';
export type Variant = "default" | "primary" | "dotted";
declare const Component: ({ onClick, danger, variant, icon, children, }: {
    danger?: boolean;
    variant: Variant;
    onClick?: () => void;
    icon?: ComponentChildren;
    children: ComponentChildren;
}) => import("preact").JSX.Element;
export default Component;
