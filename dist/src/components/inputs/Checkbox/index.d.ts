import { ComponentChildren, JSX } from 'preact';
declare const Component: <T extends boolean | any[]>({ checked, onChange, children, }: {
    checked: boolean;
    onChange?: (checked: boolean, e: JSX.TargetedEvent<HTMLInputElement, Event>) => void;
    children: ComponentChildren;
}) => JSX.Element;
export default Component;
