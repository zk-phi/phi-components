import { FunctionComponent, ComponentClass, FunctionalComponent } from 'preact';
type PreactComponent = FunctionComponent<any> | ComponentClass<any> | FunctionalComponent<any>;
export type AttributeValue = null | string | boolean | number;
export type AttributeParser<T> = (a: AttributeValue) => T;
export type AttributeUnparser<T> = (p: T) => AttributeValue;
export type AttributeConfig<T> = AttributeParser<T> | {
    parse: AttributeParser<T>;
    reflect: AttributeUnparser<T>;
};
type Options = {
    adoptedStyleSheets?: CSSStyleSheet[];
    slots?: string[];
    properties?: string[];
    formAssociated?: string;
    attributes?: Record<string, AttributeConfig<any>>;
};
export declare function register(Component: PreactComponent, tagName: string, options: Options): void;
export {};
