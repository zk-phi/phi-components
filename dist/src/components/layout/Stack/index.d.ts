import { ComponentChildren } from 'preact';
export type Size = "sm" | "md";
declare const Component: ({ size, children }: {
    size: Size;
    children: ComponentChildren;
}) => import("preact").JSX.Element;
export default Component;
