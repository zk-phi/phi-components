import { ComponentChildren, JSX } from 'preact';
declare const Component: ({ onClick, danger, style, children, }: {
    danger?: boolean;
    onClick?: () => void;
    style?: JSX.CSSProperties;
    children: ComponentChildren;
}) => JSX.Element;
export default Component;
