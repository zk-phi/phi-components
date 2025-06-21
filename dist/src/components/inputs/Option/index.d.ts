import { ComponentChildren, JSX } from 'preact';
declare const Component: <T>({ checked, onChange, value, style, children, }: {
    checked: T[];
    onChange?: (checked: T[], e: JSX.TargetedEvent<HTMLInputElement, Event>) => void;
    value: T;
    style?: JSX.CSSProperties;
    children: ComponentChildren;
}) => JSX.Element;
export default Component;
