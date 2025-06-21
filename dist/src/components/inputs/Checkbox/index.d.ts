import { ComponentChildren, JSX } from 'preact';
declare const Component: ({ checked, onChange, style, children, }: {
    checked: boolean;
    onChange?: (checked: boolean, e: JSX.TargetedEvent<HTMLInputElement, Event>) => void;
    style?: JSX.CSSProperties;
    children: ComponentChildren;
}) => JSX.Element;
export default Component;
