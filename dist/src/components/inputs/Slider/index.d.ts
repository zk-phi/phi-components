import { JSX } from 'preact';
declare const Component: ({ value, min, max, step, onInput, style, }: {
    value: number;
    min: number;
    max: number;
    step: number;
    onInput?: (value: number | undefined, e: JSX.TargetedEvent<HTMLInputElement, Event>) => void;
    style?: JSX.CSSProperties;
}) => JSX.Element;
export default Component;
