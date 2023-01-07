import { ComponentChildren } from "preact";
declare type CheckboxValue<T> = T extends boolean ? any : T extends (infer U)[] ? U : T;
declare type Props<S, T extends CheckboxValue<S>> = {
    checked: S;
    onChange: (checked: S, e: Event) => void;
    children: ComponentChildren;
    value?: T;
};
declare const Checkbox: <S, T extends CheckboxValue<S>>({ checked, value, onChange, children, }: Props<S, T>) => JSX.Element;
export declare const register: () => void;
export default Checkbox;
