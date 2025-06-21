import { JSX } from 'preact';
declare const Component: ({ value, placeholder, required, min, max, step, error, onInput, style, }: {
    value?: number | undefined;
    placeholder: string;
    required: boolean;
    min?: number;
    max?: number;
    step?: number;
    error?: boolean;
    onInput?: (value: number | undefined, e: JSX.TargetedEvent<HTMLInputElement, Event>) => void;
    style?: JSX.CSSProperties;
}) => JSX.Element;
export default Component;
