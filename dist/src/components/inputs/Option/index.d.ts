import { ComponentChildren, JSX } from 'preact';
declare const Component: <T>({ checked, onChange, value, children, }: {
    checked: T[];
    onChange?: (checked: T[], e: JSX.TargetedEvent<HTMLInputElement, Event>) => void;
    children: ComponentChildren;
    value: T;
}) => JSX.Element;
export default Component;
