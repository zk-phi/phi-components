declare type Size = "normal" | "small";
declare type Props = {
    value?: string;
    size?: Size;
    error?: boolean | "";
    onChange?: (value: string) => void;
    parent?: HTMLElement;
};
declare const Input: ({ value, size, error, onChange, parent, }: Props) => JSX.Element;
export declare const register: () => void;
export default Input;
