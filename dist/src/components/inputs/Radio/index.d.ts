import { ComponentChildren, JSX } from 'preact';
declare const Component: <T>({ name, checked, onChange, value, children, }: {
    name: string;
    checked: T;
    onChange?: (checked: T, e: JSX.TargetedEvent<HTMLInputElement, Event>) => void;
    children: ComponentChildren;
    value: T;
}) => JSX.Element;
export default Component;
