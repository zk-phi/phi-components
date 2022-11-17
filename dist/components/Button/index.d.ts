import { ComponentChildren, ComponentChild } from "preact";
declare type Variant = "primary" | "default" | "dotted" | "text" | "icon";
declare type Props = {
    icon?: ComponentChild;
    variant?: Variant;
    danger?: boolean | "";
    onClick?: () => void;
    children: ComponentChildren;
    parent?: HTMLElement;
};
declare const Button: ({ icon, children, variant, danger, onClick, }: Props) => JSX.Element;
export declare const register: () => void;
export default Button;
