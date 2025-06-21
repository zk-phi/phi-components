import { JSX } from 'preact';
export type Size = "md" | "sm";
declare const Component: ({ value, placeholder, required, minlength, maxlength, size, error, onInput, style, }: {
    value: string;
    placeholder: string;
    required: boolean;
    minlength?: number;
    maxlength?: number;
    size: Size;
    error?: boolean;
    onInput?: (value: string, e: JSX.TargetedEvent<HTMLInputElement, Event>) => void;
    style?: JSX.CSSProperties;
}) => JSX.Element;
export default Component;
