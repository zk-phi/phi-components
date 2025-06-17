import { ComponentChildren } from 'preact';
declare const Component: ({ onClick, danger, children, }: {
    danger?: boolean;
    onClick?: () => void;
    children: ComponentChildren;
}) => import("preact").JSX.Element;
export default Component;
