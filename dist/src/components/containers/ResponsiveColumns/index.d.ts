import { ComponentChildren, JSX } from 'preact';
export type Gap = "sm" | "md";
export type ConfigurationEntry = {
    width: number;
    columns: number[];
};
declare const Component: ({ gap, configuration, style, children, }: {
    gap: Gap;
    configuration: ConfigurationEntry[];
    style?: JSX.CSSProperties;
    children: ComponentChildren;
}) => JSX.Element;
export default Component;
