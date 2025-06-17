import { AttributeValue } from './makeCustomElement';
export declare const boolean: (val: AttributeValue) => boolean;
export declare const string: (val: AttributeValue) => string;
export declare const number: (val: AttributeValue) => number;
export declare const raw: (val: AttributeValue) => AttributeValue;
export declare const oneof: <T>(deflt: string, others: string[]) => (val: AttributeValue) => string;
