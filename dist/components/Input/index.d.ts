declare type Size = "normal" | "small";
declare type Props = {
    value: string;
    onChange: (value: string, e: Event) => void;
    size?: Size;
    error?: boolean;
};
declare const Input: ({ value, size, error, onChange, }: Props) => JSX.Element;
export declare const register: () => void;
export default Input;
